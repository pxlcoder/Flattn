// Flattn server

// modules

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// body-parser

app.use(bodyParser.urlencoded({extended: 'true'}));

// database

var db = require('./config/db');

var port = process.env.PORT || 8080;
mongoose.connect(db.url);

// routes

app.use(express.static(__dirname + '/public')); 

require('./app/routes')(app);

app.listen(port);

console.log('Flattn server running on ' + port);

module.exports = app;