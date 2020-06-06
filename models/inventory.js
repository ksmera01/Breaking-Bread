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
        }
    }, {
        // disable the modification of tablenames
        freezeTableName: true
    });

    // associate inventory inputs with suppliers
    Inventory.associate = function (models) {
        // inventory input cannot be created without a supplier due to foreign key constraint
        Inventory.belongsTo(models.Suppliers, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Inventory;
};



