require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render("home")
})

// Wildcard Route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(PORT, () => {
    console.log("Listening on port", PORT)
})