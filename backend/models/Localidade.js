module.exports = (sequelize, DataTypes) => {
    const Localidade = sequelize.define('Localidade', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        cidade_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "cidade_id"',
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
        tableName: 'localidade',
        indexes: []
    });

    Localidade.associate = models => {
        Localidade.belongsTo(models.Cidade, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'cidade_id',
            as: "cidade",
        });
        Localidade.hasMany(models.Loja, {
            as: "lojas"
        });
        Localidade.hasMany(models.Usuario, {
            as: "usuarios"
        });
    };

    return Localidade;
};