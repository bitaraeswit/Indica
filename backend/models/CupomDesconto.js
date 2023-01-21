module.exports = (sequelize, DataTypes) => {
    const CupomDesconto = sequelize.define('CupomDesconto', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        codigo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "codigo"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "codigo"',
                },
            },
            unique: {
                args: true,
                msg: 'Código já utilizado',
            },
        },
        data_inicio: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "data_inicio"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "data_inicio"',
                },
            },
        },
        data_fim: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "data_fim"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "data_fim"',
                },
            },
        },
        valor: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "valor"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "valor"',
                },
            },
        },
        valor_maximo: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "valor_minimo"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "valor_minimo"',
                },
            },
            comment: 'Valor mínimo do pedido para que o cupom seja aceito;',
        },
        valor_maximo: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            comment: 'Valor máximo do pedido para que o cupom seja aceito;',
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "quantidade"',
                },
                notEmpty: {
                    msg: 'Forneça um quantidade para "quantidade"',
                },
            },
        },
        tipo: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['1', '2'],
            comment: '1 - Desconto por %; 2 - Desconto por valor em R$;',
        },
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        tableName: 'cupom_desconto',
        indexes: [
            {
                unique: true,
                fields: ['codigo'],
            }
        ],
    });

    CupomDesconto.associate = models => {
        CupomDesconto.hasMany(models.Pedido, {
            as: "pedidos"
        });
    };

    return CupomDesconto;
};