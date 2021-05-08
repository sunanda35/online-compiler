var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var PORT = 3000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log('http://localhost:3000')
})