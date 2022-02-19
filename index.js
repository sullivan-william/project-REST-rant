require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const methodOverride = require('method-override')

// Middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

// Wildcard Route
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(PORT, () => {
    console.log("Listening on port", PORT)
})