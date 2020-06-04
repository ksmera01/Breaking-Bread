module.exports = function (sequelize, DataTypes) {
    const Transactions = sequelize.define("Transactions", {
        t_itemCat: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        t_item: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        t_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        suppID: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        charID: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    }, {
        // disable the modification of tablenames
        freezeTableName: true
    });

    // Syncs with DB
    Inventory.sync();
    return Inventory;
};


