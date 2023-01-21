'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn('Leads', 'lastname', {
                    type: Sequelize.DataTypes.TEXT,
                    allowNull: false,
                    validate: {
                        notNull: {
                            msg: 'Forneça um valor para "descricao"',
                        },
                        notEmpty: {
                            msg: 'Forneça um valor para "descricao"',
                        },
                    },
                    comment: 'Comment Test',
                }, { transaction: t }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.removeColumn('Leads', 'lastname', { transaction: t }),
            ]);
        });
    }
};