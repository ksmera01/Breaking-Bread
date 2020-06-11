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
        claimed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        claimedBy: {
            type: DataTypes.UUID
        }
    }, {
        // disable the modification of tablenames
        freezeTableName: true
    });

    // associate inventory inputs with suppliers
    Inventory.associate = function (models) {
        // inventory input cannot be created without a supplier due to foreign key constraint
        Inventory.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
        /*
                //for charities that claim inventory
                Inventory.belongsTo(models.Charities, {
                    foreignKey: {
                        allowNull: true
                    }
                }); */
    };

    return Inventory;
};