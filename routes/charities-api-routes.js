const db = require("../models");

module.exports = function (app) {
    // Find all Charities  and return them with res.json
    app.get("/api/charities", function (req, res) {
        db.Charities.findAll({
            //add an "include" property to our options in our findAll query
            //set the value to an array of the model(s) to be included in a left outer join
            include: [db.Requests]
        }).then(function (dbCharities) {
            res.json(dbCharities);
        });
    });

    app.get("/api/charities/:id", function (req, res) {
        // Find one Charity with the id in req.params.id and return with res.json
        db.Charities.findOne({
            where: {
                id: req.params.id
            },
            //add an "include" property to our options in our findOne query
            //set the value to an array of the model(s) to be included in a left outer join
            include: [db.Requests]
        }).then(function (dbCharities) {
            res.json(dbCharities);
        });
    });

    app.post("/api/Charities", function (req, res) {
        // Create a Charity with the data available to us in req.body
        console.log(req.body);
        db.Charities.create(req.body).then(function (dbCharities) {
            res.json(dbCharities);
        });
    });

    app.delete("/api/authors/:id", function (req, res) {
        // Delete the Charity with the id available to us in req.params.id
        db.Charities.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbCharities) {
            res.json(dbCharities);
        });
    });

};
