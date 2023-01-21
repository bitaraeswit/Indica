module.exports = (sequelize, DataTypes) => {
    const Estado = sequelize.define('Estado', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
            unique: {
                args: true,
                msg: 'Nome já utilizado',
            },
        },
        sigla: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "sigla"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "sigla"',
                },
            },
            unique: {
                args: true,
                msg: 'Sigla já utilizada',
            },
        },
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        tableName: 'estado',
        indexes: [{
            unique: true,
            fields: ['nome', 'sigla'],
        }],
    });

    Estado.associate = models => {
        Estado.hasMany(models.Cidade, {
            as: "cidades"
        });
    };

    return Estado;
};