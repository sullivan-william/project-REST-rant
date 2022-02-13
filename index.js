require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send("Hello World")
})

// Wildcard Route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(PORT, () => {
    console.log("Listening on port", PORT)
})