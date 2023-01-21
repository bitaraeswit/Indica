module.exports = (sequelize, DataTypes) => {
    const Favorito = sequelize.define('Favorito', {
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
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        tableName: 'favorito',
        indexes: []
    });

    Favorito.associate = models => {
        Favorito.belongsTo(models.Produto, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'produto_id',
            as: "produto",
        });
        Favorito.belongsTo(models.Usuario, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'usuario_id',
            as: "usuario",
        });
    };

    return Favorito;
};