module.exports = (sequelize, DataTypes) => {
    const ItemPedido = sequelize.define('ItemPedido', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        pedido_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "pedido_id"',
                },
            },
        },
        produto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "produto_id"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "produto_id"',
                },
            },
        },
        total: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "total"',
                },
            },
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        observacao: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        freezeTableName: true,
        tableName: 'item_pedido',
    });

    ItemPedido.associate = models => {
        ItemPedido.belongsTo(models.Pedido, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'pedido_id',
            as: "pedido",
        });
        ItemPedido.belongsTo(models.Produto, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'produto_id',
            as: "produto",
        });
    };

    return ItemPedido;
};