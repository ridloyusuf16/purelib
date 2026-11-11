import dotenv from "dotenv"

dotenv.config({ quiet: true })

export const DATABASE_URL = process.env.DATABASE_URL || ""
export const SECRET = process.env.SECRET || ""

export const EMAIL_SMTP_SECURE = process.env.EMAIL_SMTP_SECURE || false
export const EMAIL_SMTP_USER = process.env.EMAIL_SMTP_USER || ""
export const EMAIL_SMTP_PASS = process.env.EMAIL_SMTP_PASS || ""
export const EMAIL_SMTP_PORT = process.env.EMAIL_SMTP_PORT || 0
export const EMAIL_SMTP_HOST = process.env.EMAIL_SMTP_HOST || ""
export const EMAIL_SMTP_SERVICE_NAME = process.env.EMAIL_SMTP_SERVICE_NAME || ""
export const CLIENT_HOST = process.env.CLIENT_HOST || ""
