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

    


__________________________//
__________________________//
__________________________//
__________________________//
__________________________//



In our previous tutorial articles we defined Mongoose models that we can use to interact with a database and created some initial library records. We then created all the routes needed for the LocalLibrary website, but with "dummy controller" functions (these are skeleton controller functions that just return a "not implemented" message when a page is accessed).


The next step is to provide proper implementations for the pages that display our library information (we'll look at implementing pages featuring forms to 
create, 
update, 
or delete 
information in later articles). This includes updating the controller functions to fetch records using our models, and defining templates to display this information to users.

We will start by providing overview/primer topics explaining how to manage asynchronous operations in controller functions and how to write templates using Pug. Then we'll provide implementations for each of our main "read only" pages with a brief explanation of any special or new features that they use.

At the end of this article you should have a good end-to-end understanding of how routes, asynchronous functions, views, and models work in practice...

__________________//

The following subarticles go through the process of adding the different features required for us to display the required website pages. You need to read and work through each one of these in turn, before moving on to the next one.






 npm async
_______________//
(1) Asynchronous flow control using async
  async.parallel() to execute any operations that must be performed in parallel.

  async.series() for when we need to ensure that asynchronous operations are performed in series.

  async.waterfall() for operations that must be run in series, with each operation depending on the results of preceding operations.



npm pug (was jade)
pug docs https://pugjs.org/api/getting-started.html
_______________//
(2) Template primer

A template is a text file defining the structure or layout of an output file, with placeholders used to represent where data will be inserted when the template is rendered (in Express, templates are referred to as views).

 The result is a page definition that translates directly to HTML, but is arguably more concise and easier to read. 

_______________//
(3) The LocalLibrary base template
Open /views/layout.pug and replace the content with the code below..

_______________//
(4) Home page
this is accesible from ('/') or (catatlog/) root 
This will display some static text describing the site, along with dynamically calculated "counts" of different record types in the database.


The index controller function needs to fetch information about how many 
Book, 
BookInstance, 
available BookInstance, 
Author, 
and Genre 
records we have in the database, render this data in a template to create an HTML page, and then return it in an HTTP response.

OK, site is running and we have the landing page

_______________//
(5) Book list page

Next we'll implement our book list page. This page needs to display a list of all books in the database along with their author, with each book title being a hyperlink to its associated book detail page.



_______________//
(6) BookInstance list page

Next we'll implement our list of all book copies (BookInstance) in the library. This page needs to include the title of the Book associated with each BookInstance (linked to its detail page) along with other information in the BookInstance model, including the status, imprint, and unique id of each copy. The unique id text should be linked to the BookInstance detail page.


_______________//
(7) Date formatting using moment

The default rendering of dates from our models is very ugly: Tue Dec 06 2016 15:49:58 GMT+1100 (AUS Eastern Daylight Time). In this section we'll show how you can update the BookInstance List page from the previous section to present the due_date field in a more friendly format: December 6th, 2016. 

The approach we will use is to create a virtual property in our BookInstance model that returns the formatted date. We'll do the actual formatting using moment, a lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

Note: It is possible to use moment to format the strings directly in our Pug templates, or we could format the string in a number of other places. Using a virtual property allows us to get the formatted date in exactly the same way as we get the due_date currently. 

_______________//
(8) Author list page and Genre list page challenge

_______________//
(9) Genre detail page

_______________//
(10) Book detail page

_______________//
(11) Author detail page

_______________//
(12) BookInstance detail page and challenge
