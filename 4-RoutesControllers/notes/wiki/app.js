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