module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "usuario_id"',
                },
            },
        },
        loja_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "loja_id"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "loja_id"',
                },
            },
        },
        metodo_pagamento_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "metodo_pagamento_id"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "metodo_pagamento_id"',
                },
            },
        },
        cupom_desconto_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        motivo_cancelamento_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        valor_desconto: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            comment: 'Valor do cupom de desconto usado',
        },
        valor_total: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "valor_total"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "valor_total"',
                },
            },
        },
        valor_subtotal: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "valor_subtotal"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "valor_subtotal"',
                },
            },
        },
        observacao: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        tableName: 'pedido',
        indexes: []
    });

    Pedido.associate = models => {
        Pedido.belongsTo(models.Usuario, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'usuario_id',
            as: "usuario",
        });
        Pedido.belongsTo(models.Loja, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'loja_id',
            as: "loja",
        });
        Pedido.belongsTo(models.MetodoPagamento, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'metodo_pagamento_id',
            as: "metodo_pagamento",
        });
        Pedido.belongsTo(models.CupomDesconto, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'cupom_desconto_id',
            as: "cupom_desconto",
        });
        Pedido.hasMany(models.Avaliacao, {
            as: "avaliacoes"
        });
        Pedido.hasMany(models.ItemPedido, {
            as: "items_pedido"
        });
    };

    return Pedido;
};