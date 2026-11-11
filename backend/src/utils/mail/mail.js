import nodemailer from 'nodemailer'
import { EMAIL_SMTP_HOST, EMAIL_SMTP_USER, EMAIL_SMTP_PASS, EMAIL_SMTP_PORT, EMAIL_SMTP_SECURE} from '../env.js'
import ejs from 'ejs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transporter = nodemailer.createTransport({
    host: EMAIL_SMTP_HOST,
    port: EMAIL_SMTP_PORT,
    secure: EMAIL_SMTP_SECURE,
    auth: {
        user: EMAIL_SMTP_USER,
        pass: EMAIL_SMTP_PASS
    }
})

export const sendMail = async ({from, to, subject, html}) => {
    const result = await transporter.sendMail({
        from,
        to,
        subject,
        html
    })
    
    return result
}

export const renderMailHtml = async (template, data) => {
    const result = ejs.renderFile(path.join(__dirname, `templates/${template}`), data)

    return result
}