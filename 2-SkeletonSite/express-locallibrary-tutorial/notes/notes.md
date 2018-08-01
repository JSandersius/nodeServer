This is what the directory of what was built looke like 

/express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    /node_modules
        [about 4,500 subdirectories and files]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
    /views
        error.pug
        index.pug
        layout.pug


        __________________Within the package.json file...

        {
  "name": "express-locallibrary-tutorial",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.18.2",
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "express": "~4.16.2",
    "morgan": "~1.9.0",
    "pug": "~2.0.0-rc.4",
    "serve-favicon": "~2.4.5"
  },
  "devDependencies": {
    "nodemon": "^1.14.11"
  }
}

____________________________\ 
.body-parser: This parses the body portion of an incoming HTTP request and makes it easier to extract different parts of the contained information. For example, you can use this to read POST parameters.

.cookie-parser: Used to parse the cookie header and populate req.cookies (essentially provides a convenient method for accessing cookie information).

.debug: A tiny node debugging utility modelled after node core's debugging technique.

.morgan: An HTTP request logger middleware for node.

.serve-favicon: Node middleware for serving a favicon (this is the icon used to represent the site inside the browser tab, bookmarks, etc.).
___________________________\

"scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },

  The scripts section defines a "start" script, which is what we are invoking when we call npm start to start the server. From the script definition you can see that this actually starts the JavaScript file ./bin/www with node. It also defines a "devstart" script, which we invoke when calling npm run devstart instead. This starts the same ./bin/www file, but with nodemon rather than node.

  ______________////////
www file

The file /bin/www is the application entry point! The very first thing this does is require() the "real" application entry point (app.js, in the project root) that sets up and returns the express() application object.

#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
________________//

...The remainder of the code in this file sets up a node HTTP server with app set to a specific port (defined in an environment variable or 3000 if the variable isn't defined), and starts listening and reporting server errors and connections




