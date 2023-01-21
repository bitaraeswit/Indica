const _ = require('lodash');
const service = require('@services/Categoria');
const httpStatus = require('http-status-codes');
const { responseErrorJson, responseJson } = require('@utils/Controller');

const index = async (req, res) => {
    try {
        const { query, params } = req;
        const result = await service.index(Object.assign(params, query));
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Categoria::index', error);
    }
};

const show = async (req, res) => {
    try {
        const { query, params } = req;
        const result = await service.show(Object.assign(params, query));
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Categoria::show', error);
    }
};

const store = async (req, res) => {
    try {
        const { body } = req;
        const result = await service.store(body);
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Categoria::store', error);
    }
};

const update = async (req, res) => {
    try {
        const { body, params } = req;
        const result = await service.update(body, parseInt(params.id));
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Categoria::update', error);
    }
};

const destroy = async (req, res) => {
    try {
        const { params } = req;
        const result = await service.destroy(params);
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Categoria::destroy', error);
    }
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};