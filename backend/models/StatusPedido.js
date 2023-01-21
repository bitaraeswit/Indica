module.exports = (sequelize, DataTypes) => {
    const StatusPedido = sequelize.define('StatusPedido', {
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
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "status"',
                },
            },
            comment: '0 - Aguardando confirmação; 1 - confirmado; 2 - Saiu para entrega; 3 - Cancelado;',
        },
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        tableName: 'status_pedido',
        indexes: []
    });

    StatusPedido.associate = models => {
        StatusPedido.belongsTo(models.Pedido, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'pedido_id',
            as: "pedido",
        });
    };

    return StatusPedido;
};