module.exports = function (sequelize, DataTypes) {
    const Inventory = sequelize.define("Inventory", {
        s_itemCat: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        s_item: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        s_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        perishable: {
            type: DataTypes.BOOLEAN,
        },
        dateExp: {
            type: DataTypes.DATE,
        },
        suppName: {
            type: DataTypes.STRING,
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
        }
    }, {
        // disable the modification of tablenames
        freezeTableName: true
    });

    // Syncs with DB
    Inventory.sync();
    return Inventory;
};
