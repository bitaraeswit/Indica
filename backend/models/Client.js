module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        route: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "route"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "route"',
                },
            },
        },
        public_key: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "public_key"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "public_key"',
                },
            },
        },
        private_key: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "private_key"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "private_key"',
                },
            },
        },
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        tableName: 'client',
    });

    return Client;
};