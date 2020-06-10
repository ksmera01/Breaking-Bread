//Sequelize automatically adds the fields createdAt and updatedAt to every model, using the data type DataTypes.DATE

module.exports = function (sequelize, DataTypes) {
    const Charities = sequelize.define("Charities", {

        charName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        charAddress: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        c_contactName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        c_contactPhone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        c_contactEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                isEmail: true
            }
        }

    }, {
        // disable the modification of tablenames
        freezeTableName: true
    });

    // Associate Charities with Requests
    // a charity can have many requests
    Charities.associate = function (models) {
        Charities.hasMany(models.Requests, {
            // when a charity is deleted, also delete any associated requests
            onDelete: "cascade"
        });

        //Charities can have many CLAIMED INVENTORY, CLAIMED INVENTORY items belongs to Charities
        Charities.hasMany(models.Inventory, {});

        // requests cannot be created without a charity due to foreign key constraint
        /* Charities.belongsTo(models.User, {
             foreignKey: {
                 allowNull: false
             }
         });*/
    };

    return Charities;
};

