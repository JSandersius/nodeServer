//these first two lines import express and create an express app
var express = require('express');
//This object, which is traditionally named app, has methods for 
//routing HTTP requests, configuring middleware, rendering HTML
//views, registering a template engine, and modifying application
//settings that control how the application behaves

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3003, function () {
    console.log('Example app listening on port 3000!');
});