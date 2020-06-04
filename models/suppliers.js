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
        },
        s_EBT: {
            type: DataTypes.BOOLEAN
        }

    }, {
        // disable the modification of tablenames
        freezeTableName: true
    });

    // Syncs with DB
    Suppliers.sync();
    return Suppliers;
};


