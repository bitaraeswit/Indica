module.exports = (sequelize, DataTypes) => {
    const ImagemProduto = sequelize.define('ImagemProduto', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
        imagem: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "imagem"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "imagem"',
                },
            },
        },
        principal: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        tableName: 'imagem_produto',
        indexes: [],
    });
    ImagemProduto.associate = models => {
        ImagemProduto.belongsTo(models.Produto, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'produto_id',
            as: "produto",
        });
    };
    return ImagemProduto;
};