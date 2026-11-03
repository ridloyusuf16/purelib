import express from 'express'
import cors from 'cors'
import connectDB from './utils/database.js'
// import bookRoutes from './routes/bookRoutes.js'
// import userRoutes from './routes/userRoutes.js'
// import authRoutes from './routes/authRoutes.js'
import router from './routes/api.js'
import docs from "./docs/route.js"

async function init() {
    try {
        // // KONEKSI MONGODB
        await connectDB()
        // EXPRESS SETUP
        const app = express()
        const port = 5001

        app.use(cors())
        app.use(express.json())

        // ROUTE
        // app.get('/', (req, res) => {
        //     res.send('API PureLib berjalan dengan aman!')
        // })

        // app.use('/api/books', bookRoutes)
        // app.use('/api/users', userRoutes)
        // app.use('/api/auth', authRoutes)

        app.use('/api', router)
        docs(app)

        app.use('/', (req, res) => {
            res.status(200).json({
                message: 'Server is running.',
                data: null
            })
        })

        app.listen(port, () => {
            console.log(`PureLib Server listening at http://127.0.0.1:${port}`)
        })
    } catch (error) {
        return console.log(error)
    }
}

init()