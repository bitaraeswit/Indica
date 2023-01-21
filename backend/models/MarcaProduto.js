module.exports = (sequelize, DataTypes) => {
    const MarcaProduto = sequelize.define('MarcaProduto', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        marca_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "marca_id"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "marca_id"',
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
        tableName: 'marca_produto',
        indexes: [],
    });
    MarcaProduto.associate = models => {
        MarcaProduto.belongsTo(models.Marca, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'marca_id',
            as: "marca",
        });
        MarcaProduto.belongsTo(models.Produto, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'produto_id',
            as: "produto",
        });
    };
    return MarcaProduto;
};