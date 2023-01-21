module.exports = (sequelize, DataTypes) => {
    const TamanhoProduto = sequelize.define('TamanhoProduto', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tamanho_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "tamanho_id"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "tamanho_id"',
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
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        tableName: 'tamanho_produto',
        indexes: [],
    });
    TamanhoProduto.associate = models => {
        TamanhoProduto.belongsTo(models.Produto, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'produto_id',
            as: "produto",
        });
        TamanhoProduto.belongsTo(models.Tamanho, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'tamanho_id',
            as: "tamanho",
        });
    };
    return TamanhoProduto;
};