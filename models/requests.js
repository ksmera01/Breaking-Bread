module.exports = function (sequelize, DataTypes) {
    const Requests = sequelize.define("Requests", {
        r_itemCat: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        r_item: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        r_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        fulfilled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        fulfilledBy: {
            type: DataTypes.UUID
        }
    }, {
        // disable the modification of tablenames
        freezeTableName: true
    });

    // associate requests with charities
    Requests.associate = function (models) {
        // requests cannot be created without a charity due to foreign key constraint
        Requests.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
        // };

        // Requests.associate = function (models) {
        /*
                //for suppliers who fulfill requests
                Requests.belongsTo(models.Suppliers, {
                    foreignKey: {
                        allowNull: true
                    }
                });*/
    };

    return Requests;
};


