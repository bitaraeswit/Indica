module.exports = (sequelize, DataTypes) => {
    const Session = sequelize.define('Session', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        admin_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "client_id"',
                },
            },
        },
        token: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "token"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "token"',
                },
            },
        },
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
    }, {
        freezeTableName: true,
        tableName: 'session',
    });

    Session.associate = models => {
        Session.belongsTo(models.Admin, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'admin_id',
            as: "admin",
        });
        Session.belongsTo(models.Client, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'client_id',
            as: "client",
        });
        Session.belongsTo(models.Usuario, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'usuario_id',
            as: "usuario",
        });
    };

    return Session;
};