const { Client, Sequelize } = require('@models');
const _ = require('lodash');

const getWhere = data => {
    const where = {};

    if (data.id) where.id = data.id;
    if (!_.isNil(data.ativo)) where.ativo = data.ativo;
    if (data.public_key) where.public_key = data.public_key;
    if (data.private_key) where.private_key = data.private_key;
    
    return where;
};

const index = async data => {
    try {
        return await Client.findAndCountAll({
            where: getWhere(data),
            offset: data.offset ? parseInt(data.offset) : null,
            limit: data.limit ? parseInt(data.limit) : null,
            order: [
                ['id', 'DESC'],
            ],
        });
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const show = async data => {
    try {
        return await Client.findOne({
            where: getWhere(data),
            order: [
                ['id', 'DESC'],
            ],
        });
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const store = async data => {
    try {
        const result = await Client.create(data);
        return Object.assign(data, result.get({ plain: true }));
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const update = async (data, id) => {
    try {
        await Client.update(data, { where: { id } });
        const result = Client.findByPk(id);
        return Object.assign(data, result.get({ plain: true }));
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const destroy = async data => {
    try {
        if (!_.size(data)) throw 'Dados inválidos';
        return await Client.destroy({ where: data });
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};
