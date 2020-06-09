module.exports = function (sequelize, DataTypes) {
    const Suppliers = sequelize.define("Suppliers", {
        suppType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        suppName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        suppAddress: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        //line1: Sequelize.STRING,
        //line2: Sequelize.STRING,
        //city: Sequelize.STRING,
        //state: Sequelize.STRING,
        //zip: Sequelize.STRING,
        s_contactName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        s_contactPhone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        s_contactEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                isEmail: true,
            }
        }
    }, {
        // disable the modification of tablenames
        freezeTableName: true
    });

    // Associate Suppliers with Inventory inputs
    // a supplier can have many inventory inputs
    Suppliers.associate = function (models) {
        Suppliers.hasMany(models.Inventory, {
            // when a supplier is deleted, also delete any associated inventory inputs
            onDelete: "cascade"
        });
        //   };

        // Suppliers can have many transactions, transactions belongs to suppliers
        // Suppliers.associate = function (models) {
        Suppliers.hasMany(models.Transactions, {
            // when a supplier is deleted, also delete any associated transactions
            onDelete: "cascade"
        });

        Suppliers.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Suppliers;
};


