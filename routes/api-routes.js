var db = require("../models");
var passport = require("../config/passport");
require("dotenv").config()
var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  //db.requests.findOneandupdate - find request with id, update field - claimedby with current user

  // Route for signing up a user. 
  /* app.post("/api/signup", function (req, res) {
     db.User.create({
       email: req.body.email,
       password: req.body.password,
       orgType: req.body.orgType,
       orgName: req.body.orgName,
       orgAdd: req.body.orgAdd,
       contactName: req.body.contactName,
       contactPhone: req.body.contactPhone
     })
       .then(function (data) {*/

  app.post("/api/signup", async (req, res) => {
    const user = req.body;
    //if (req.body.orgType == "Supplier") {
    const new_user = await db.User.create({
      email: req.body.email,
      password: req.body.password,
      orgType: req.body.orgType,
      orgName: req.body.orgName,
      orgAdd: req.body.orgAdd,
      contactName: req.body.contactName,
      contactPhone: req.body.contactPhone
    }).catch(err => {
      console.log(err)
    })

    passport.authenticate('local')(req, res, function () {
      //if statement based on org type data.orgType - res.redirect()
      // res.redirect('/members');
      res.json(new_user);
    })
      .catch(function (err) {
        console.error(err)
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.render("login");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
