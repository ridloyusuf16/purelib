import mongoose from "mongoose"
import {DATABASE_URL} from "./env.js"

async function connect () {
    try {
        await mongoose.connect(DATABASE_URL, {
            dbName: 'purelib',
            serverSelectionTimeoutMS: 5000
        })

        console.log('Database connected.')
    } catch (error) {
        console.error('Failed to connect database:', error.message)
        throw error
    }
}

export default connect