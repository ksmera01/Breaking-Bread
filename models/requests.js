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
            allowNull: false
        }
    }, {
        // disable the modification of tablenames
        freezeTableName: true
    });

    // associate requests with charities
    Requests.associate = function (models) {
        // requests cannot be created without a charity due to foreign key constraint
        Requests.belongsTo(models.Charities, {
            foreignKey: {
                allowNull: false
            }
        });
        // };

        // Requests.associate = function (models) {
        Requests.hasMany(models.Transactions, {
            // when a request is deleted, also delete any associated transactions
            onDelete: "cascade"
        });
    };

    return Requests;
};


