
//Load Http module 
const http = require("http"); //import http module 
const hostname = '127.0.0.1';
const port = 3000;

//create HTTP server and  listen on port 300 for requests 
const server = http.createServer((req, res) => {

    //the script then prints a message about what browser url you can use to test the server. 
    //set the response HTTP header with HTTP status and Content type 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have the port location on logged 
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});