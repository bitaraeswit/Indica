const { Banner, Cidade, Estado, Localidade, Loja, Sequelize } = require('@models');
const _ = require('lodash');

const getInclude = data => {
    const fields = data.fields ? data.fields.split(",") : [];
    const include = [
        {
            model: Loja,
            as: 'loja',
            required: true,
            include: [
                {
                    model: Localidade,
                    as: 'localidade',
                    required: true,
                    include: [
                        {
                            model: Cidade,
                            as: 'cidade',
                            required: true,
                            include: [
                                {
                                    model: Estado,
                                    as: 'estado',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
            ],
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
        const result = await Banner.findAndCountAll({
            where: getWhere(data),
            offset: data.offset ? parseInt(data.offset) : null,
            limit: data.limit ? parseInt(data.limit) : null,
            include: getInclude(data),
            order: [],
        });
        result.rows = result.rows.map(r => r.get({ plain: true }));
        return result;
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const show = async data => {
    try {
        const result = await Banner.findOne({
            where: getWhere(data),
            include: getInclude(data),
            order: [],
        });
        return result ? result.get({ plain: true }) : null;
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const store = async data => {
    try {
        const result = await Banner.create(data);
        return Object.assign(data, result.get({ plain: true }));
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const update = async (data, id) => {
    try {
        await Banner.update(data, { where: { id } });
        const result = Banner.findByPk(id);
        return Object.assign(data, result.get({ plain: true }));
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const destroy = async data => {
    try {
        if (!_.size(data)) throw 'Dados inválidos';
        return await Banner.destroy({ where: data });
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