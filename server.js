// Kompress server

// modules

var express = require('express');
var app = express();

// database

var db = require('./config/db');

var port = process.env.port || 8080;

// routes

require('./app/routes')(app);

app.listen(port);

console.log('Kompress server running on ' + port);

module.exports = app;