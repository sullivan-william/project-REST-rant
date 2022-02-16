require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

// Middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }))

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