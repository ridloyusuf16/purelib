import express from 'express'
import cors from 'cors'
import connectDB from './config/database.js'
import bookRoutes from './routes/bookRoutes.js'
import userRoutes from './routes/userRoutes.js'

// EXPRESS SETUP
const app = express()
const port = 5001

app.use(cors())
app.use(express.json())

// KONEKSI MONGODB
connectDB()

// ROUTE
app.get('/', (req, res) => {
    res.send('API PureLib berjalan dengan aman!')
})

app.use('/api/books', bookRoutes)
app.use('/api/users', userRoutes)

app.listen(port, () => {
    console.log(`PureLib Server listening at http://127.0.0.1:${port}`)
})