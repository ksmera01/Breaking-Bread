//Sequelize automatically adds the fields createdAt and updatedAt to every model, using the data type DataTypes.DATE

module.exports = function (sequelize, DataTypes) {
    const Charities = sequelize.define("Charities", {
        charType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
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
        },
        c_EBT: {
            type: DataTypes.BOOLEAN
        }

    }, {
        // disable the modification of tablenames
        freezeTableName: true
    });

    // Syncs with DB
    Charities.sync();
    return Charities;
};

