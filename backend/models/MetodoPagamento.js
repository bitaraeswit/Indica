module.exports = (sequelize, DataTypes) => {
    const MetodoPagamento = sequelize.define('MetodoPagamento', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "nome"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "nome"',
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
        tableName: 'metodo_pagamento',
        indexes: []
    });

    MetodoPagamento.associate = models => {
        MetodoPagamento.hasMany(models.Pedido, {
            as: "pedidos"
        });
    };

    return MetodoPagamento;
};