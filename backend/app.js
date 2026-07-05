import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import connectDB from './config/database.js'

// EXPRESS SETUP
const app = express()
const port = 5000

// EJS SETUP
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded())
app.use(express.json())

// KONEKSI MONGODB
connectDB()

// ROUTE
app.get('/', (req, res) => {
    res.send('API PureLib berjalan dengan aman!')
})

app.listen(port, () => {
    console.log(`PureLib Server listening at http://127.0.0.1:${port}`)
})