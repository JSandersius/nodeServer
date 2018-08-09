In this tutorial we'll set up routes (URL handling code) with "dummy" handle functions for all the resource endpoints that we'l eventually need in the locallibrary website. on completion we'll have a modular structure for our route handling code, which we can extend with real handler functions in the following articles. We'll also have a really good understanding of how to create modulat routes using Express! 

The first thing we need to do is determine what information we want to be able to display in our pages, and then define appropriate URLs for returning those resources.

Then we're going to need to create the routes (URL handlers) and views (templates) to display those pages.

___________//
As we've already created the models, the main things we'll need to create are:

."Routes" to forward the supported requests (and        any information encoded in request URLs) to the     appropriate controller functions.

.Controller functions to get the requested data         from the models, create an HTML page displaying     the data, and return it to the user to view in      the browser.

.Views (templates) used by the controllers to           render the data.

______________//
Ultimately we might have pages to show lists and detail information for books, genres, authors and bookinstances, along with pages to create, update, and delete records. That's a lot to document in one article. Therefore most of this article will concentrate on setting up our routes and controllers to return "dummy" content. We'll extend the controller methods in our subsequent articles to work with model data.

The first section below provides a brief "primer" on how to use the Express Router middleware.
http://expressjs.com/en/4x/api.html#router
 We'll then use that knowledge in the following sections when we set up the LocalLibrary routes.

______________//
 A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), an URL path/pattern, and a function that is called to handle that pattern.

There are several ways to create routes. For this tutorial we're going to use the express.Router middleware as it allows us to group the route handlers for a particular part of a site together and access them using a common route-prefix. We'll keep all our library-related routes in a "catalog" module, and, if we add routes for handling user accounts or other functions, we can keep them grouped separately.


__________________________//
OK here are the routes we're going to need to the Local Library..

The URLs that we're ultimately going to need for our pages are listed below, where object is replaced by the name of each of our models (book, bookinstance, genre, author), objects is the plural of object, and id is the unique instance field (_id) that is given to each Mongoose model instance by default.

.catalog/ — The home/index page.

.catalog/<objects>/ — The list of all books,            bookinstances, genres, or authors (e.g. /catalog/books/, /catalog/genres/, etc.)

.catalog/<object>/<id> — The detail page for a specific book, bookinstance, genre, or author with the given _id field value (e.g. /catalog/book/584493c1f4887f06c0e67d37).

.catalog/<object>/create — The form to create a new book, bookinstance, genre, or author (e.g. /catalog/book/create).

.catalog/<object>/<id>/update — The form to update a specific book, bookinstance, genre, or author with the given _id field 
value (e.g. /catalog/book/584493c1f4887f06c0e67d37/update).

.catalog/<object>/<id>/delete — The form to delete a specific book, bookinstance, genre, author with the given _id field value (e.g. /catalog/book/584493c1f4887f06c0e67d37/delete).


______________________//

Create the Route-handler callback functions

/express-locallibrary-tutorial  //the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
    
    

______________________//
Now to create the catalog route module


/express-locallibrary-tutorial //the project root
  /routes
    index.js
    users.js
    catalog.js
  

  _________________________//

  That's is, We should noe have routes and skeleton functions enabled for all the URLs that we will eventually support on the LocalLibrary site

npm start 
npm devstart


__________//

Links to page once running, check it out. 

http://localhost:3000/
http://localhost:3000/catalog
http://localhost:3000/catalog/books
http://localhost:3000/catalog/bookinstances/
http://localhost:3000/catalog/authors/
http://localhost:3000/catalog/genres/
http://localhost:3000/catalog/book/5846437593935e2f8c2aa226
http://localhost:3000/catalog/book/create

    