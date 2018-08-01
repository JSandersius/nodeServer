URL 

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

This article briefly introduces databases, and how to use them with Node/Express apps. It then goes on to show how we can use Mongoose to provide database access for the LocalLibrary website. It explains how object schema and models are declared, the main field types, and basic validation. It also briefly shows a few of the main ways in which you can access model data.

This is a CRUD app homie 
We gon' be all kindsa creatin', readin', updatin' and deletin' up in hur.

________________//
Approaches to interating with database.. 

.using a datbases native query language(e.g.SQL)

.Using and Object Data Model("ODM")/Object Relational Model ("ORM"). An ODM/ORM represents the websites data as JavaScript objects, which are then mapped to the underlying database. Some ORMs are tied to a specific database, while others provide a database-agnostic backend. 


Tip:  Using ODM/ORMs often results in lower costs for development and maintenance! Unless you're very familiar with the native query language or performance is paramount, you should strongly consider using an ODM.

Mongoose is most popular ORM as of right now
 
we're going to use the Mongoose ODM to access our data 
https://www.npmjs.com/package/mongoose

Mongoose acts as a front end to mongoDB 
https://www.mongodb.com/what-is-mongodb

..uses a document-oriented data model. A “collection” of “documents”, in a MongoDB database, is analogous to a “table” of “rows” in a relational database.

This ODM and database combination is extremely popular in the Node community, partially because the document storage and query system looks very much like JSON, and is hence familiar to JavaScript developers.

Data model--> Books

Name
Author
Genre
Date of Publication 
Prizes/Awards? Pullitzer by book or author 

_________//OR

To install a mongoDB server go to 
MondoDB Download Center 
and install locally 
https://www.mongodb.com/download-center#atlas

______________//
for this, we're going to use the free mLab sandbox
https://mlab.com/plans/pricing/

