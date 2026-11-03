import dotenv from "dotenv"

dotenv.config({ quiet: true })

export const DATABASE_URL = process.env.DATABASE_URL || ""
export const SECRET = process.env.SECRET || ""
