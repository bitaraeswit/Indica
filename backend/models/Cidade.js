module.exports = (sequelize, DataTypes) => {
    const Cidade = sequelize.define('Cidade', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        estado_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "estado_id"',
                },
            },
        },
        nome: {
            type: DataTypes.STRING,
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
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        tableName: 'cidade',
        indexes: [],
    });

    Cidade.associate = models => {
        Cidade.belongsTo(models.Estado, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'estado_id',
            as: "estado",
        });
        Cidade.hasMany(models.EnderecoLoja, {
            as: "enderecos_lojas"
        });
        Cidade.hasMany(models.EnderecoUsuario, {
            as: "enderecos_usuarios"
        });
        Cidade.hasMany(models.Localidade, {
            as: "localidades"
        });
    };

    return Cidade;
};