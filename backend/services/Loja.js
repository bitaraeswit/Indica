const { Loja, Sequelize } = require('@models');
const _ = require('lodash');

const getInclude = data => {
    const fields = data.fields ? data.fields.split(",") : [];
    const include = [];
    return _.filter(_.uniqBy(include, 'as'), o => _.includes(fields, o.as));
};

const getWhere = data => {
    const where = {};
        
    if (data.id) where.id = data.id;
    if (!_.isNil(data.ativo)) where.ativo = data.ativo;

    return where;
};

const getAttributes = data => {
    const columns = data.columns ? data.columns.split(",") : [];

    const include = [
        {
            name: 'media_avaliacoes',
            column: [Sequelize.literal(`(SELECT (CASE WHEN ROUND(AVG(av.qtd_estrelas), 1) IS NOT NULL THEN ROUND(AVG(av.qtd_estrelas), 1) ELSE '0.0' END) FROM avaliacao AS av WHERE av.loja_id=Loja.id AND av.ativo=1 AND DATEDIFF('${dayjs().format("YYYY-MM-DD HH:mm:ss")}', av.created_at) <= 90)`), 'media_avaliacoes'],
        },
        {
            name: 'total_avaliacoes',
            column: [Sequelize.literal(`(SELECT COUNT(av.id) FROM avaliacao AS av WHERE av.loja_id=Loja.id AND av.ativo=1 AND DATEDIFF('${dayjs().format("YYYY-MM-DD HH:mm:ss")}', av.created_at) <= 90)`), 'total_avaliacoes'],
        },
    ];
    
    return _.map(_.filter(_.uniqBy(include, 'name'), o => _.includes(columns, o.name)), 'column');
};

const index = async data => {
    try {
        const result = await Loja.findAndCountAll({
            attributes: {
              include: getAttributes(data),
            },
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
        const result = await Loja.findOne({
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
        const result = await Loja.create(data);
        return Object.assign(data, result.get({ plain: true }));
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const update = async (data, id) => {
    try {
        await Loja.update(data, { where: { id } });
        const result = Loja.findByPk(id);
        return Object.assign(data, result.get({ plain: true }));
    } catch (error) {
        throw new Error(error.errors.map(e => e.message));
    }
};

const destroy = async data => {
    try {
        if (!_.size(data)) throw 'Dados inválidos';
        return await Loja.destroy({ where: data });
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