module.exports = (sequelize, DataTypes) => {
    const Loja = sequelize.define('Loja', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        localidade_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "localidade_id"',
                },
            },
        },
        nome_fantasia: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "nome_fantasia"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "nome_fantasia"',
                },
            },
        },
        razao_social: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "razao_social"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "razao_social"',
                },
            },
        },
        cpf_cnpj: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "cpf_cnpj"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "cpf_cnpj"',
                },
            },
        },
        logomarca: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "logomarca"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "logomarca"',
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
        tableName: 'loja',
        indexes: []
    });

    Loja.associate = models => {
        Loja.belongsTo(models.Localidade, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'localidade_id',
            as: "localidade",
        });
        Loja.hasMany(models.AdminLoja, {
            as: "admins"
        });
        Loja.hasMany(models.Banner, {
            as: "banners"
        });
        Loja.hasMany(models.Curtida, {
            as: "curtidas"
        });
        Loja.hasMany(models.EnderecoLoja, {
            as: "enderecos_loja"
        });
        Loja.hasMany(models.Pedido, {
            as: "pedidos"
        });
    };

    return Loja;
};