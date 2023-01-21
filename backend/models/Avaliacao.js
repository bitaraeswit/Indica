module.exports = (sequelize, DataTypes) => {
    const Avaliacao = sequelize.define('Avaliacao', {
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
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "usuario_id"',
                },
            },
        },
        qtd_estrelas: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "estrelas"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "estrelas"',
                },
            },
        },
        comentario: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        resposta_comentario: {
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
        tableName: 'avaliacao',
        indexes: []
    });

    Avaliacao.associate = models => {
        Avaliacao.belongsTo(models.Pedido, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'pedido_id',
            as: "pedido",
        });
        Avaliacao.belongsTo(models.Usuario, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'usuario_id',
            as: "usuario",
        });
    };

    return Avaliacao;
};