var path = require("path");
let express = require("express");
let router = express.Router();
let passport = require("../config/passport");
let db = require("../models")

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("members");
    }
    else
      res.render("signup")
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("members");
    }
    else
      res.render("login")
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/login", isAuthenticated, function (req, res) {
    res.render("members")
  });

};
