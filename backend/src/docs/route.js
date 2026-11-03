import swaggerUi from "swagger-ui-express"
import swaggerOutput from "./swagger_output.json" with { type: 'json' }
import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url';

// Mendefinisikan __dirname secara manual untuk ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function docs(app){
    const css = fs.readFileSync(path.resolve(__dirname, "../../node_modules/swagger-ui-dist/swagger-ui.css"), "utf-8")

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput, {
        customCss: css
    }))
}