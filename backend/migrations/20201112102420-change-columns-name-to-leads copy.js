'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.changeColumn('Leads', 'name', {
                    type: Sequelize.DataTypes.TEXT
                }, { transaction: t }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.changeColumn('Leads', 'name', {
                    type: Sequelize.DataTypes.STRING
                }, { transaction: t }),
            ]);
        });
    }
};