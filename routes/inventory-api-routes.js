// Requiring our models  
const db = require("../models");

module.exports = function (app) {

    app.get("/inventory", async function (req, res) {
        const inv = await db.Inventory.findAll({
            raw: true
        });
        console.log(inv);
        res.render("charity_dashboard", { inventory: inv });

    });

    // route for retrieving all items in the inventory
    app.get("/api/inventory", function (req, res) {
        db.Inventory.findAll({})
            .then(function (dbInv) {
                res.json(dbInv);
            });
    });

    // Get route for retrieving a single item in the inventory
    app.get("/api/inventory/:id", function (req, res) {
        db.Inventory.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbInv) {
            console.log(dbInv);
            res.json(dbInv);
        });
    });

    // POST route for saving a new inventory
    app.post("/api/inventory", function (req, res) {
        console.log(req.body);
        console.log(res);
        db.Inventory.create(req.body).then(function (dbInv) {
            res.json(dbInv);
        });
    });

    // DELETE route for deleting inventory
    app.delete("/api/inventory/:id", function (req, res) {
        db.Inventory.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbInv) {
            res.json(dbInv);
        });
    });

    // PUT route for updating inventory
    app.put("/api/inventory/:id", function (req, res) {

        db.Inventory.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(function (dbInv) {
                res.json(dbInv);
            });
    });
};
