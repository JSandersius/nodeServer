//First we create routes for a wiki in a module named wiki.js. 
//The code first imports the Express application object, 
//uses it to get a Router object and then adds a couple of routes to it using the get() method.
//Last of all the module exports the Router object.

//wiki js - Wiki route module. 
var express = require('express');
var router = express.Router();

//home page route. 
router.get('/', function (req, res) {
    res.send('Wiki home page');
})

//About page route. 
router.get('/about', function (req, res) {
    res.send('About this wiki');
})

module.exports = router;

//Note: Above we are defining our route handler callbacks directly in the router functions.
//In the LocalLibrary we'll define these callbacks in a separate controller module.