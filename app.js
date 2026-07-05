import express from 'express'
import expressLayouts from 'express-ejs-layouts'

// EXPRESS SETUP
const app = express()
const port = 3000

// EJS SETUP
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded())

// ROUTE
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        layout: "layouts/main-layout",
    })
})

app.listen(port, () => {
    console.log(`PureLib | listen at http://127.0.0.1:${port}`)
})