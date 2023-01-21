module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
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
                notEmpty: {
                    msg: 'Forneça um valor para "localidade_id"',
                },
            },
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "cpf"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "cpf"',
                },
            },
            unique: {
                args: true,
                msg: 'CPF já utilizado',
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
        telefone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "telefone"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "telefone"',
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            set (val) {
                this.setDataValue('email', val ? val.toLowerCase() : null)
            },
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Email inválido',
                },
            },
            unique: {
                args: true,
                msg: 'Email já utilizado',
            },
        },
        senha: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        contra_senha: {
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
        tableName: 'usuario',
        indexes: [],
    });

    Usuario.associate = models => {
        Usuario.belongsTo(models.Localidade, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'localidade_id',
            as: "localidade",
        });
        Usuario.hasMany(models.Avaliacao, {
            as: "avaliacoes"
        });
        Usuario.hasMany(models.Curtida, {
            as: "curtidas"
        });
        Usuario.hasMany(models.Favorito, {
            as: "favoritos"
        });
        Usuario.hasMany(models.EnderecoUsuario, {
            as: "enderecos_usuario"
        });
        Usuario.hasMany(models.Pedido, {
            as: "pedidos"
        });
    };
    
    return Usuario;
};