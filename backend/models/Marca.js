module.exports = (sequelize, DataTypes) => {
    const Marca = sequelize.define('Marca', {
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
        },
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        tableName: 'marca',
        indexes: [],
    });
    Marca.associate = models => {
        Marca.hasMany(models.MarcaProduto, {
            as: "marcas_produto"
        });
    };
    return Marca;
};