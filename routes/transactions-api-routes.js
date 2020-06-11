// Requiring our models  
const db = require("../models");

module.exports = function (app) {

    //app.get("/____"), ''''''
    app.get("/reqAll", async function (req, res) {
        const allReq = db.Requests.findAll({
            where: {
                UserId: req.params.UserId
            },
            raw: true
        });
        //res.render("handlebars file name without extension")
        res.render("charity_allReq", { all: allReq });
    })

    app.get("/invAll", async function (req, res) {
        const allInv = db.Inventory.findAll({
            where: {
                UserId: req.params.UserId
            },
            raw: true
        });
        res.render("supplier_allInv", { all: allInv });
    })


    app.get("/charTrans", async function (req, res) {
        res.render("charity_allTrans");
    })

    app.get("/suppTrans", async function (req, res) {
        res.render("supplier_allTrans");
    })

    app.get("/suppUpdate", async function (req, res) {
        res.render("supplier_update");
    })


    // Get route for retrieving all REQUESTS by UserId CHARITY - posts by current user
    app.get("/api/requests/UserId/:UserId", function (req, res) {
        db.Requests.findAll({
            where: {
                UserId: req.params.UserId
            }
        }).then(function (dbRequests) {
            console.log(dbRequests);
            res.json(dbRequests);
        });
    });

    // Get route for retrieving all DONATIONS by UserId - posts by current user
    app.get("/api/inventory/UserId/:UserId", function (req, res) {
        db.Inventory.findAll({
            where: {
                UserId: req.params.id
            }
        }).then(function (dbInv) {
            console.log(dbInv);
            res.json(dbInv);
        });
    });

    // Get route for retrieving all claimedby - by current user CHARITY
    app.get("/api/inventory/claimedBy/:claimedBy", function (req, res) {
        db.Inventory.findAll({
            where: {
                claimedBy: req.params.claimedBy
            }
        }).then(function (dbInv) {
            console.log(dbInv);
            res.json(dbInv);
        });
    });

    // Get route for retrieving all fulfilledby - by current user SUPPLIER
    app.get("/api/requests/fulfilledBy/:fulfilledBy", function (req, res) {
        db.Requests.findAll({
            where: {
                fulfilledBy: req.params.fulfilledBy
            }
        }).then(function (dbReq) {
            console.log(dbReq);
            res.json(dbReq);
        });
    });



    //get all requests by a user, get all donations by a user
    app.get("/api/users/:id", function (req, res) {
        db.User.findAll({
            where: {
                id: req.params.id
            },
            include: [db.Inventory, db.Requests]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
}


