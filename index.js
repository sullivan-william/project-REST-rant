require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World")
})

// Wildcard Route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT, () => {
    console.log("Listening on port", PORT)
})