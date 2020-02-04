const express = require('express')
const bodyParser = require('body-parser')


const app = express();
const api = require('./routes')

//Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//rutas 
app.use('/api', api)


module.exports = app