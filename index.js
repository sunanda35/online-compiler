const { response } = require('express');
var express = require('express');
var compile = require('./compile')
var app = express()
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


var PORT = 3000

app.get('/', (req, res) => {
    res.send('hello world')
})
app.post('/call', async(req, res) => {
    try {
        await compile(req.body.code, req.body.language).then(response => {
            console.log(response)
            res.send(response)
    })
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log('http://localhost:3000')
    console.log('http://localhost:3000/call')
})