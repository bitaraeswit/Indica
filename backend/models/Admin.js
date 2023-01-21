module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            set(val) {
                this.setDataValue('email', val ? val.toLowerCase() : null);
            },
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Email inválido',
                },
                notNull: {
                    msg: 'Forneça um valor para "email"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "email"',
                },
            },
            unique: {
                args: true,
                msg: 'Email já utilizado',
            },
        },
        senha: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "senha"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "senha"',
                },
            },
        },
        contra_senha: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Forneça um valor para "contra_senha"',
                },
                notEmpty: {
                    msg: 'Forneça um valor para "contra_senha"',
                },
            },
        },
        permissao: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        ativo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        tableName: 'admin',
        indexes: [{
            unique: true,
            fields: ['email'],
        }],
    });

    Admin.associate = models => {
    };

    return Admin;
};