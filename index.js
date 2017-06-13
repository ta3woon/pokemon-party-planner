// SETUP ==============================================

// const router = require('express').Router()
const express = require('express') // 
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const config = require('./config')
const router = require('./routes')
const parser = require('body-parser')

var app = express();



// CONFIG ==============================================
app.use(parser.json());
app.set('/scripts', express.static(path.resolve(__dirname, './node_modules')))
// app.set('/views', __dirname + '/views');
app.use(express.static(path.resolve(__dirname, './public')))
app.use('/api', router);
// app.use(express.static(__dirname + '/public'))


// ROUTES ==============================================

// app.get('/', until.checkUser);
// app.get('/', until.checkUser);



// LISTEN  ==============================================
var port = process.env.PORT || 3000
app.listen(port)
console.log('listening on ', port);