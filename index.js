const { response } = require('express');
var express = require('express');
var app = express()
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


var PORT = 3000

app.get('/', (req, res) => {
    res.send('hello world')
})
// app.post('/call', async(req, res) => {
    
// })

app.listen(PORT, () => {
    console.log('http://localhost:3000')
    console.log('http://localhost:3000/call')
})