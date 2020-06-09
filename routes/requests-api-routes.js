// Requiring our models  
const db = require("../models");

module.exports = function (app) {

    app.get("/requests", async function (req, res) {
        const requests = await db.Requests.findAll({
            raw: true
        });
        console.log(requests);
        res.render("dashboard", { request: requests });

    });

    // route for retrieving all the requests
    app.get("/api/requests", function (req, res) {
        db.Requests.findAll({})
            .then(function (dbRequests) {
                res.json(dbRequests);
            });
    });

    // Get route for retrieving a single request
    app.get("/api/requests/:id", function (req, res) {
        db.Requests.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbRequests) {
            console.log(dbRequests);
            res.json(dbRequests);
        });
    });

    // POST route for saving a new request
    app.post("/api/requests", function (req, res) {
        console.log(req.body);
        console.log(res);
        db.Requests.create(req.body).then(function (dbRequests) {
            res.json(dbRequests);
        });
    });

    // DELETE route for deleting requests
    app.delete("/api/requests/:id", function (req, res) {
        db.Requests.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbRequests) {
            res.json(dbRequests);
        });
    });

    // PUT route for updating requests
    app.put("/api/requests/:id", function (req, res) {

        db.Requests.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(function (dbRequests) {
                res.json(dbRequests);
            });
    });
};
