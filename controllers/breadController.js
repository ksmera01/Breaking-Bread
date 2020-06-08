var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var request = require("../models/requests.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  request.all(function(data) {
      //below links to requesters.handlebars
    var reqstrObject = {
      request: data
    };
    console.log(reqstrObject);
    res.render("index", reqstrObject);
  });
});


// Export routes for server.js to use.
module.exports = router;