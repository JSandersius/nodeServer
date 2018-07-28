//these first two lines import express and create an express app
var express = require('express');
//This object, which is traditionally named app, has methods for 
//routing HTTP requests, configuring middleware, rendering HTML
//views, registering a template engine, and modifying application
//settings that control how the application behaves
var app = express();


//The middle part of the code (the three lines starting with app.get)
//shows a route definition. The app.get() method specifies a callback 
//function that will be invoked whenever there is an HTTP GET request 
//with a path ('/') relative to the site root. The callback function 
//takes a request and a response object as arguments, and simply
//calls send() on the response to return the string "Hello World!"
app.get('/', function (req, res) {
    res.send('Hello World!');
});


//The final block starts up the server on port '3000' and prints a log
//comment to the console. With the server running, you could go to 
//localhost:3000 in your browser to see the example response returned.

app.listen(3003, function () {
    console.log('Example app listening on port 3000!');
});