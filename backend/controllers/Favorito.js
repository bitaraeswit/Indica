const _ = require('lodash');
const service = require('@services/Favorito');
const httpStatus = require('http-status-codes');
const { responseErrorJson, responseJson } = require('@utils/Controller');

const index = async (req, res) => {
    try {
        const { query, params } = req;
        const result = await service.index(Object.assign(params, query));
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Favorito::index', error);
    }
};

const show = async (req, res) => {
    try {
        const { query, params } = req;
        const result = await service.show(Object.assign(params, query));
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Favorito::show', error);
    }
};

const store = async (req, res) => {
    try {
        const { body } = req;
        const result = await service.store(body);
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Favorito::store', error);
    }
};

const update = async (req, res) => {
    try {
        const { body, params } = req;
        const result = await service.update(body, parseInt(params.id));
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Favorito::update', error);
    }
};

const destroy = async (req, res) => {
    try {
        const { params } = req;
        const result = await service.destroy(params);
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Favorito::destroy', error);
    }
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};