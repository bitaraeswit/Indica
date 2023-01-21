module.exports = (sequelize, DataTypes) => {
    const Tamanho = sequelize.define('Tamanho', {
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
        tableName: 'tamanho',
        indexes: [],
    });
    Tamanho.associate = models => {
        Tamanho.hasMany(models.TamanhoProduto, {
            as: "tamanhos_produto"
        });
    };
    return Tamanho;
};