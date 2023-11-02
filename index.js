//Q. 1
//Why are we using Express JS ? Any reasons?
//Answer: Express JS is framework of NodeJS.
//It provides the simplicity for writing code.
//we can create API and applications writing minimal line of code using expressJS.

//Q.2
//Install expressJS
//Answer : npm install express

//Q.3
//What are middlewares ?
//Answer : middleware is a function in which request and response object
//processed and modified.

//Q.4
//What is next used for.
//Answer : next is method in express JS.
//It allows to call next middleware to processed request and response object.

//Q.5
//What is res.send used for?
//Answer : res.send is method used for sending the response to the requested client.

//Q.6
//If I do res.send('<h1> hello to node js </h1>').
// What will be the content-type header equal to.
//Answer : Content-Type = 'text/html'

//Q.7
//If I do res.send( { key1: value }).
// What will be the content-type header equal to.
//Answer : Content-Type = 'application/json'

//Q.8
//What does app.listen(3000) do behind the scenes ?
//Answer:The app.listen(3000) function in Express.js starts a web server that
//listens on port 3000 for incoming HTTP requests.

//Q.9
//Answer:

const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware");
  res.send("<h1>Hello from Express Server</h1>");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
