module.exports = function (sequelize, DataTypes) {
    const Requests = sequelize.define("Request", {
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

        dateNeeded: {
            type: DataTypes.DATE,
        },
        charName: {
            type: DataTypes.STRING,
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
    Requests.sync();
    return Requests;
};


