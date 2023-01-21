module.exports = (sequelize, DataTypes) => {
    const Notificacao = sequelize.define('Notificacao', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "titulo"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "titulo"',
                },
            },
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "descricao"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "descricao"',
                },
            },
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "data"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "data"',
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
        tableName: 'notificacao',
        indexes: []
    });

    Notificacao.associate = models => {
    };

    return Notificacao;
};