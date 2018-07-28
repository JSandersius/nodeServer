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




exports.area = function (width) { return width * width; };
exports.perimeter = function (width) { return 4 * width; };

var square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));


//If you want to export a complete object in one assignment instead of 
//building it one property at a time, assign it to module.exports as 
//shown below (you can also do this to make the root of the exports
//object a constructor or other function):

module.exports = {
    area: function (width) {
        return width * width;
    },

    perimeter: function (width) {
        return 4 * width;
    }
};

//The final block starts up the server on port '3000' and prints a log
//comment to the console. With the server running, you could go to 
//localhost:3000 in your browser to see the example response returned.

//synchronous API calls
console.log('First');
console.log('Second');

//asynchronous API calls 
setTimeout(function () {
    console.log('First');
}, 3000);
console.log('Second');



app.listen(3003, function () {
    console.log('Example app listening on port 3000!');
});