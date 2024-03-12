const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Use the body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define a route to handle the POST request
app.post("/store-post", function (req, res) {
  // Get the form data from the request body
  const title = req.body.title;
  const content = req.body.content;

  // Store the data in a database or file
  // ...

  // Send a response to the client
  res.json({ success: true });
});

// Start the server
app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
