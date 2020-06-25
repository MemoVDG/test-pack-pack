const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient


app.use(bodyParser.urlencoded({ extended: true}))

app.listen(3000, () => {
    console.log('Listening :3000')
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

MongoClient.connect('mongodb-connection-string', (err, client) => {
    
})