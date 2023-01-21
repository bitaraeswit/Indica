const _ = require('lodash');
const service = require('@services/AdminLoja');
const httpStatus = require('http-status-codes');
const { responseErrorJson, responseJson } = require('@utils/Controller');
const { checkPassword, generatePassword, generateToken, createSession, updateSession, closeSession } = require("@controllers/Auth");
const { sendPassword, sendPasswordAdmin } = require("@utils/Email");

const index = async (req, res) => {
    try {
        const { query, params } = req;
        const result = await service.index(Object.assign(params, query));
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'AdminLoja::index', error);
    }
};

const show = async (req, res) => {
    try {
        const { query, params } = req;
        const result = await service.show(Object.assign(params, query));
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'AdminLoja::show', error);
    }
};

const store = async (req, res) => {
    try {
        const { body } = req;
        const password = generatePassword(null, body.senha);
        const admin = _.cloneDeep(body);
        admin.senha = password.senha;
        admin.contra_senha = password.contra_senha;
        const result = await service.store(admin);
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'AdminLoja::store', error);
    }
};

const update = async (req, res) => {
    try {
        const { body, params } = req;
        if (body.senha) delete body.senha;
        if (body.contra_senha) delete body.contra_senha;
        const result = await service.update(body, parseInt(params.id));
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'AdminLoja::update', error);
    }
};

const destroy = async (req, res) => {
    try {
        const { params } = req;
        const result = await service.destroy(params);
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'AdminLoja::destroy', error);
    }
};

const login = async (req, res) => {
    try {
        const { CLIENT, body } = req;
        if (_.isEmpty(body.email)) throw 'Email inválido';
        if (_.isEmpty(body.senha)) throw 'Senha inválida';
        const result = await service.show({ email: body.email.toLowerCase() });
        if (!result) throw 'Email inválido';
        const admin = result;
        if (!checkPassword(admin.senha, body.senha, admin.contra_senha)) throw 'Senha inválida';
        admin.token = generateToken(admin, CLIENT);
        await createSession({ admin_id: admin.id, client_id: CLIENT.id, token: admin.token });
        delete admin.senha;
        delete admin.contra_senha;
        delete admin.licencas;
        return responseJson(res, admin);
    } catch (error) {
        return responseErrorJson(res, 'Admin::login', error, httpStatus.FORBIDDEN);
    }
};

const updatePassword = async (req, res) => {
    try {
        const { body, DECODED } = req;
        const result = await service.show({ id: DECODED.id, permissao: DECODED.permissao });
        if (!result) throw 'Usuário não encontrado';
        const admin = result;
        if (!checkPassword(admin.senha, body.senha_atual, admin.contra_senha)) throw 'Senha incorreta';
        const password = generatePassword(null, body.senha_nova, admin.contra_senha);
        admin.senha = password.senha;
        const model = await service.update(admin, admin.id);
        delete model.senha;
        delete model.contra_senha;
        return responseJson(res, model);
    } catch (error) {
        return responseErrorJson(res, 'Admin::updatePassword', error);
    }
};

const resetPassword = async (req, res) => {
    try {
        const { body, CLIENT } = req;
        if (_.isEmpty(body.email)) throw 'Email inváido';
        const result = await service.show({ email: body.email });
        if (!result) throw 'Email inválido';
        const admin = result;
        const password = generatePassword(null, null, admin.contra_senha);
        admin.senha = password.senha;
        await sendPasswordAdmin(admin.nome, admin.email, password.senha_visivel, true);
        const model = await service.update(admin, admin.id);
        delete model.senha;
        delete model.contra_senha;
        return responseJson(res, model);
    } catch (error) {
        return responseErrorJson(res, 'Admin::resetPassword', error);
    }
};

const validate = async (req, res) => {
    try {
        const { CLIENT, DECODED, TOKEN } = req;
        const result = await service.show({ id: DECODED.id, permissao: DECODED.permissao });
        if (!result) throw 'Usuário inválido';
        const admin = result;
        if (!admin.ativo || (admin.permissao === 1 && !admin.licencas.length)) throw 'Você não tem permissão para acessar o sistema';
        admin.token = generateToken(admin, CLIENT);
        await updateSession(TOKEN, admin.token);
        delete admin.senha;
        delete admin.contra_senha;
        delete admin.licencas;
        return responseJson(res, admin);
    } catch (error) {
        return responseErrorJson(res, 'Admin::validate', error, httpStatus.FORBIDDEN);
    }
};

const logout = async (req, res) => {
    try {
        const { TOKEN } = req;
        const result = await closeSession(TOKEN);
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Admin::logout', error, httpStatus.FORBIDDEN);
    }
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
    login,
    updatePassword,
    resetPassword,
    validate,
    logout,
};