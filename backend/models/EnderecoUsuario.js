module.exports = (sequelize, DataTypes) => {
    const EnderecoUsuario = sequelize.define('EnderecoUsuario', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
        cidade_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "cidade_id"',
                },
            },
        },
        cep: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "cep"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "cep"',
                },
            },
        },
        logradouro: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "logradouro"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "logradouro"',
                },
            },
        },
        numero: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        complemento: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        tableName: 'endereco_usuario',
        indexes: []
    });

    EnderecoUsuario.associate = models => {
        EnderecoUsuario.belongsTo(models.Cidade, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'cidade_id',
            as: "cidade",
        });
        EnderecoUsuario.belongsTo(models.Usuario, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'usuario_id',
            as: "usuario",
        });
    };

    return EnderecoUsuario;
};