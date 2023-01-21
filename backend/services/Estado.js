const { Cidade, Estado, Sequelize } = require('@models');
const _ = require('lodash');

const getInclude = data => {
    const fields = data.fields ? data.fields.split(",") : [];
    const include = [
        {
            model: Cidade,
            as: 'cidades',
            required: false
        },
    ];
    return _.filter(_.uniqBy(include, 'as'), o => _.includes(fields, o.as));
};

const getWhere = data => {
    const where = {};
        
    if (data.id) where.id = data.id;
    if (!_.isNil(data.ativo)) where.ativo = data.ativo;

    return where;
};

const index = async data => {
    try {
        return await Estado.findAndCountAll({
            where: getWhere(data),
            offset: data.offset ? parseInt(data.offset) : null,
            limit: data.limit ? parseInt(data.limit) : null,
            include: getInclude(data),
            order: [
                ['nome', 'asc'],
            ],
        });
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const show = async data => {
    try {
        return await Estado.findOne({
            where: getWhere(data),
            include: getInclude(data),
            order: [
                ['nome', 'asc'],
            ],
        });
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const store = async data => {
    try {
        const result = await Estado.create(data);
        return Object.assign(data, result.get({ plain: true }));
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const update = async (data, id) => {
    try {
        await Estado.update(data, { where: { id } });
        const result = Estado.findByPk(id);
        return Object.assign(data, result.get({ plain: true }));
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const destroy = async data => {
    try {
        if (!_.size(data)) throw 'Dados inválidos';
        return await Estado.destroy({ where: data });
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