// Kompress server

// modules

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// body-parser

app.use(bodyParser.urlencoded({extended: 'true'}));

// database

var db = require('./config/db');

var port = process.env.port || 8080;
mongoose.connect(db.url);

// routes

require('./app/routes')(app);

app.listen(port);

console.log('Kompress server running on ' + port);

module.exports = app;