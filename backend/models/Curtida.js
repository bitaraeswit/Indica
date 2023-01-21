module.exports = (sequelize, DataTypes) => {
    const Curtida = sequelize.define('Curtida', {
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
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "usuario_id"',
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
        tableName: 'curtida',
        indexes: []
    });

    Curtida.associate = models => {
        Curtida.belongsTo(models.Loja, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'loja_id',
            as: "loja",
        });
        Curtida.belongsTo(models.Usuario, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: 'usuario_id',
            as: "usuario",
        });
    };

    return Curtida;
};