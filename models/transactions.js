module.exports = function (sequelize, DataTypes) {
    const Transactions = sequelize.define("Transactions", {

    }, {
        // disable the modification of tablenames
        freezeTableName: true
    });

    // Transactions - belongsTo - Charities, Charities - hasMany - Transactions
    Transactions.associate = function (models) {
        // transactions cannot be created without a charity due to foreign key constraint
        Transactions.belongsTo(models.Charities, {
            foreignKey: {
                allowNull: false
            }
        });
        // };

        // Transactions - belongsTo - Suppliers, Suppliers - hasMany - Transactions
        // Transactions.associate = function (models) {
        // transactions cannot be created without a supplier due to foreign key constraint
        Transactions.belongsTo(models.Suppliers, {
            foreignKey: {
                allowNull: false
            }
        });
        //  };

        // Transactions - belongsTo - Requests, Requests - hasOne - Transactions (one request can only have one transaction)
        // Transactions.associate = function (models) {
        // transactions can be created without requestId
        Transactions.belongsTo(models.Requests, {
            foreignKey: {
                allowNull: true
            }
        });
        //  };

        // Transactions - belongsTo - Inventory, Inventory - hasOne - Transactions (one inventory food item can only have one transaction)
        // Transactions.associate = function (models) {
        // transactions can be created without requestId
        Transactions.belongsTo(models.Inventory, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Transactions;
};


