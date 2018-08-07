// To use the router module in our main app file
// we first require() the route module (wiki.js). 
//We then call use() on the Express application to
//add the Router to the middleware handling path, 
//specifying an URL path of 'wiki'.

var wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);

//The two routes defined in our wiki route module are 
//then accessible from /wiki/ and /wiki/about/.
//____________
//Our module above defines a couple of typical route functions. 
//The "about" route (reproduced below) is defined using the 
//Router.get() method, which responds only to HTTP GET requests.
//The first argument to this method is the URL path while the
//second is a callback function that will be invoked if an 
//HTTP GET request with the path is received.

router.get('/about', function (req, res) {
    res.send('About this wiki');
})

//The callback takes three arguments (usually named as shown: 
//req, res, next), that will contain the HTTP Request object, 
//HTTP response, and the next function in the middleware chain.

//______________

//For example, the code below behaves just like the previous 
//    /about route, but only responds to HTTP POST requests.

router.post('/about', function (req, res) {
    res.send('About this wiki');
})