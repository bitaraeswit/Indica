module.exports = (sequelize, DataTypes) => {
    const Banner = sequelize.define('Banner', {
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
        imagem: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "imagem"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "imagem"',
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
        tableName: 'banner',
        indexes: []
    });

    Banner.associate = models => {
        Banner.belongsTo(models.Loja, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'loja_id',
            as: "loja",
        });
    };

    return Banner;
};