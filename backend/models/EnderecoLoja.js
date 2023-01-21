module.exports = (sequelize, DataTypes) => {
    const EnderecoLoja = sequelize.define('EnderecoLoja', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        loja_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "loja_id"',
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
        tableName: 'endereco_loja',
        indexes: []
    });

    EnderecoLoja.associate = models => {
        EnderecoLoja.belongsTo(models.Cidade, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'cidade_id',
            as: "cidade",
        });
        EnderecoLoja.belongsTo(models.Loja, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'loja_id',
            as: "loja",
        });
    };

    return EnderecoLoja;
};