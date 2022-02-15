/*******************************************/
/******* Lesson 1: RESTful Services ********/
/*******************************************/

/* One of the most used architecture is the client-server.
How this architecture works?
The main app itself is the client or the frontend part. Under the hood,
it needs to talk to the server or the backend to get or save the data. This
communication happens using the HTTP protocol. On the server we expose a bunch
of services that are accessible via the HTTP protocol. The client can then
directly call the services by sending HTTP request. This is where we use REST.
*/

/**
 ** REST -> REpresentational State Transfer
 */

/* Rest is basically a convention for building these HTTP services. So, we use
simple HTTP protocol principles to provide support to create, read, update and
delete data. We refer to these operations altogether as CRUD operations.
*/

// http://vidly.com/api/customers // example
/* A web address can start with HTTP or HTTPS. It depends on the applications and
its requirements. If you want the data to be exchanged on a secure channel, you would
use HTTPS. After that, we have the domain of the application (vidly.com). Then, we have
'/api'. It is not necessary but a lot of companies follow this convention to expose their
restful services. They include the word 'API' somewhere in the address. It can be after the
domain or it can be a sub-domain like API. No hard and fast rule.
Next, we have customers which refers to the collections of customers in our application. In the
rest world, you refer to this part as a resource. We can expose our resources such as customers,
movies, rentals and various endPoints. So, this is our endPoint to work with the customers. All
the operations around customers such as creating a customer or updating a customer would be done
by sending an HTTP request to this endPoint. The type of the HTTP request determines the kind of
the operation. So, every HTTP request has a verb or a method that determines its type or intention.
* Some standard HTTP methods are-
*   a) GET- for getting data
*   b) POST - for creating data
*   c) PUT - for updating data
*   d) DELETE - for deleting data
*/

// How RESTful Apis work?
// Get the list of customers using- GET
/* Suppose, we want to get the list of customers.
* Step 1: We should send an HTTP GET request to the address: GET /api/customers
Note, the full name 'customers' here. This indicates a list of customers.
* Step 2: After sending an HTTP GET request to this endPoint, our service sends us something like-
       REQUEST        |             RESPONSE
  -----------------   |   -----------------------------
                      |     [
  GET /api/customers  |         { id: 1, name: '' },
                      |         { id: 2, name: '' },
                      |         ...
                      |     ]
So, we have an array of customers objects.
* Step 3: If we want a single customer, we should enter the ID of the customer in the address.
Then our server would respond with a customer object like this.
       REQUEST          |         RESPONSE
  -----------------     |   -----------------------
                        |
  GET /api/customers/1  |     { id: 1, name: '' }
                        |
                        |
                        |
*/

// Updating A customer- using PUT
/* 
* Step 1: Send an HTTP PUT request to this endPoint. 
Note, we are specifying the id of the customer to be updated. Also we should encode the customer 
object in the body of the request. This is the complete representation of the 'Customer' object with 
updated properties.
'PUT /api/customers/1' 
* Step 2: We send it to the server. The server updates the customer with the given id 
* according to these values. 
       REQUEST          |         RESPONSE
  -----------------     |   -----------------------
                        |
  PUT /api/customers/1  |     { id: 1, name: '' }
                        |
  { name: '' }          |
                        |
*/

// Deleting A customer- using DELETE
/*
* Step 1: To delete a customer, we should send an HTTP DELETE request to this endPoint. 
* However, we do not need to include the 'CUSTOMER' object in the body of the request
* because all we need to delete a customer is an id.
       REQUEST             |         RESPONSE
  -----------------        |   -----------------------
                           |
  DELETE /api/customers/1  |     
                           |
                           |
                           |
*/

// Create a customer- using POST
/* 
* Step 1: We need to send an HTTP post request to this endPoint. Note, that here because 
* we are adding a customer and not dealing with a specific customer so, we don't have the 
* id in the address. We are working with a collection of customers. We are posting a new 
* customer to this collection. So, we should include the customer object in the body of the
* request. The server gets the object and creates the 'CUSTOMER' file.
  
       REQUEST             |         RESPONSE
  -----------------        |   -----------------------
                           |
  POST /api/customers      |     { id: 1, name: '' }
                           |
  { name: '' }             |
                           |
*/

/* This is the RESTful convention where we expose our resources such as 'CUSTOMERS' using a simple
and meaningful address and support various operations around them such as, creating or updating them 
using standard HTTP methods.  
*/

/*******************************************/
/******* Lesson 2: Intro to Express ********/
/*******************************************/

/* In traditional HTTP module, there is an EventEmitter and a listener. What the listener does if it gets
a specified route is defined in a callback function using if block. The more the routes, the more if blocks.
It is not efficient and the code gets lengthy. Here is when a framework comes in. A framework gives our 
application a proper structure. So, we can easily add more routes while keeping our application code maintainable.
There are various frameworks out there for building web applications and web servers on top of NODE. The most popular 
one is EXPRESS.  
*/

// Head over to npmjs.org -> Search for Express (cv 4.17.2)

/* 
* How to install Express?
* Step 1: Run cmd
* Step 2: Navigate to the folder you want to install express
Example - cd documents; cd Mosh
* Step 3: Run npm init --yes
* cmd returns ~> 
Wrote to C:\Users\rihan\Documents\Mosh\Build REST API with Node.js and Express\package.json:
{
  "name": "build-rest-api-with-node.js-and-express",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/farihanoor/Build-rest-api-using-nodejs-and-express.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/farihanoor/Build-rest-api-using-nodejs-and-express/issues"
  },
  "homepage": "https://github.com/farihanoor/Build-rest-api-using-nodejs-and-express#readme",
  "keywords": [],
  "description": ""
}
/ Now, we have a package JSON file. Now, we can install EXPRESS.
* Step 4: cmd Run npm i express
* DONE.
*/

/*
* Loading the Express module:
*/
const express = require('express');
// the require returns a function.

const app = express(); // 'app' keyword is used by convention.
// express function returns an object of type express. 'express(): Express' 
// 'app' represents our application.

// Now, the object has a bunch of useful methods like- get(), post(), put(), delete()
app.get();
app.post();
app.put();
app.delete();
// All these methods correspond to HTTP verbs or HTTP methods.
/*
* Using GET()- implement couple of endPoints that respond to an HTTP GET() request. 
*/

/* app.get('/', function(req, res) {
});
*/

// Arrow function: Alternative of the above code.
app.get('/', (req, res) => {
// codeblock goes here
/* The request object has many useful properties that gives us information about the 
incoming request. For more details, visit express.js documentation -> API reference
*/
  // Here, if we get an HTTP GET request to the root of our website, we will respond
  // with a Hello World message

  res.send('Hello World');
});
// The callback function is also called 'Route Handler'

// The method takes in two arguments. 
// a) The url; b) A callback function - this function will be called when we have a HTTP get request to this endPoint or the URL.
// The callback function also has two arguments.
// a) A Request; b) A Response
// '/' represents the root of the website. 

// After all this, we need to listen on a given port.

// We give a port number like 3000, and optionally we can pass a function that will be called when 
// the application starts listening on the given port.
app.listen(3000, () => {
  console.log("Listening on port 3000...");
});

// Defining another route
app.get('/api/courses', (req, res) => {
  res.send('[1, 2, 3]');
});
// Run in the terminal
// You have to stop the process and run it again
// Cmd type ctrl c
// node index.js

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});