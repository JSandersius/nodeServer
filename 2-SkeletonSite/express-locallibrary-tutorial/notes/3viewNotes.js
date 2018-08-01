//The views (templates) are stored in the /views directory (as specified in app.js) and are given the file extension .pug. The method Response.render() is used to render a specified template along with the values of named variables passed in an object, and then send the result as a response. In the code below from /routes/index.js you can see how that route renders a response using the template "index" passing the template variable "title".

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});


//The corresponding template for the above route is given below (index.pug). We'll talk more about the syntax later. All you need to know for now is that the title variable (with value 'Express') is inserted where specified in the template.

extends layout

block content
h1 = title
p Welcome to #{ title }

//Challenge yourself
//Create a new route in /routes/users.js that will display the text "You're so cool" at URL /users/cool/. Test it by running the server and visiting http://localhost:3000/users/cool/ in your browser

//Summary
//You have now created a skeleton website project for the Local Library and verified that it runs using node. Most important, you also understand how the project is structured, so you have a good idea where we need to make changes to add routes and views for our local library.

//Next we'll start modifying the skeleton so that works as a library website.





















