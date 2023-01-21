const { Session, Sequelize } = require('@models');
const _ = require('lodash');

const getWhere = data => {
    const where = {};

    if (data.id) where.id = data.id;
    if (!_.isNil(data.ativo)) where.ativo = data.ativo;
    if (data.client_id) where.client_id = data.client_id;
    if (data.admin_id) where.admin_id = data.admin_id;
    if (data.usuario_id) where.usuario_id = data.usuario_id;
    
    return where;
};

const index = async data => {
    try {
        return await Session.findAndCountAll({
            where: getWhere(data),
            offset: data.offset ? parseInt(data.offset) : null,
            limit: data.limit ? parseInt(data.limit) : null,
            order: [
                ['id', 'DESC'],
            ]
        });
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const show = async data => {
    try {
        return await Session.findOne({
            where: getWhere(data),
            order: [
                ['id', 'DESC'],
            ]
        });
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const store = async data => {
    try {
        const result = await Session.create(data);
        return Object.assign(data, result.get({ plain: true }));
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const update = async (data, id) => {
    try {
        await Session.update(data, { where: { id } });
        const result = Session.findByPk(id);
        return Object.assign(data, result.get({ plain: true }));
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const destroy = async data => {
    try {
        if (!_.size(data)) throw 'Dados inválidos';
        return await Session.destroy({ where: data });
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
