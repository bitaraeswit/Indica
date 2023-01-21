module.exports = (sequelize, DataTypes) => {
    const CategoriaProduto = sequelize.define('CategoriaProduto', {
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
        tableName: 'categoria_produto',
        indexes: [],
    });
    CategoriaProduto.associate = models => {
        
    };
    return CategoriaProduto;
};