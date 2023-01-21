module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "categoria_id"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "categoria_id"',
                },
            },
        },
        nome: {
            type: DataTypes.TEXT,
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
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        valor: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        },
        valor_promocional: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        },
        inicio_promocao: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        fim_promocao: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        genero: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "genero"',
                },
            },
            comment: '1 - Masculino; 2 - Feminino; 3 - Unissex;',
        },
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        tableName: 'produto',
        indexes: []
    });

    Produto.associate = models => {
        Produto.belongsTo(models.Categoria, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'categoria_id',
            as: "categoria",
        });
        Produto.hasMany(models.ImagemProduto, {
            as: "imagens_produto"
        });
        Produto.hasMany(models.Favorito, {
            as: "favoritos"
        });
        Produto.hasMany(models.ItemPedido, {
            as: "items_pedido"
        });
        Produto.hasMany(models.MarcaProduto, {
            as: "marcas_produto"
        });
        Produto.hasMany(models.TamanhoProduto, {
            as: "tamanhos_produto"
        });
    };

    return Produto;
};