const _ = require('lodash');
const service = require('@services/Usuario');
const httpStatus = require('http-status-codes');
const { responseErrorJson, responseJson } = require('@utils/Controller');
const { checkPassword, generatePassword, generateToken, createSession, updateSession, closeSession } = require("@controllers/Auth");
const { sendPasswordUsuario } = require("@utils/Email");

const index = async (req, res) => {
    try {
        const { query, params } = req;
        const result = await service.index(Object.assign(params, query));
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Usuario::index', error);
    }
};

const show = async (req, res) => {
    try {
        const { query, params } = req;
        const result = await service.show(Object.assign(params, query));
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Usuario::show', error);
    }
};

const store = async (req, res) => {
    try {
        const { body } = req;
        const password = generatePassword(null, body.senha);
        usuario.senha = password.senha;
        usuario.contra_senha = password.contra_senha;
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Usuario::store', error);
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
        return responseErrorJson(res, 'Usuario::update', error);
    }
};

const destroy = async (req, res) => {
    try {
        const { params } = req;
        const result = await service.destroy(params);
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Usuario::destroy', error);
    }
};

const login = async (req, res) => {
    try {
        const { CLIENT, body } = req;
        if (_.isEmpty(body.codigo)) throw 'Código inválido';
        if (_.isEmpty(body.senha)) throw 'Senha inválida';
        const result = await service.show(body);
        if (!result) throw 'Código inválido';
        const usuario = result;
        if (!checkPassword(usuario.senha, body.senha, usuario.contra_senha)) throw 'Senha inválida';
        usuario.token = generateToken(usuario, CLIENT);
        await createSession({ usuario_id: usuario.id, client_id: CLIENT.id, token: usuario.token });
        delete usuario.senha;
        delete usuario.contra_senha;
        return responseJson(res, usuario);
    } catch (error) {
        return responseErrorJson(res, 'Usuario::login', error, httpStatus.FORBIDDEN);
    }
};

const updatePassword = async (req, res) => {
    try {
        const { body, DECODED } = req;
        const result = await service.show({ id: DECODED.id, permissao: DECODED.permissao });
        if (!result) throw 'Usuário não encontrado';
        const usuario = result;
        if (!checkPassword(usuario.senha, body.senha_atual, usuario.contra_senha)) throw 'Senha incorreta';
        const password = generatePassword(null, body.senha_nova, usuario.contra_senha);
        usuario.senha = password.senha;
        const model = await service.update(usuario, usuario.id);
        delete model.senha;
        delete model.contra_senha;
        return responseJson(res, model);
    } catch (error) {
        return responseErrorJson(res, 'Usuario::updatePassword', error);
    }
};

const resetPassword = async (req, res) => {
    try {
        const { body, CLIENT } = req;
        if (_.isEmpty(body.codigo)) throw 'Email inváido';
        const result = await service.show({ codigo: body.codigo, permissao: CLIENT.route === 'private' ? 0 : 1 });
        if (!result) throw 'Email inválido';
        // const usuario = result.get({ plain: true });
        const usuario = result;
        const password = generatePassword(null, null, usuario.contra_senha);
        usuario.senha = password.senha;
        await sendPasswordUsuario(usuario.codigo, usuario.nome, usuario.email, password.senha_visivel, true);
        const model = await service.update(usuario, usuario.id);
        delete model.senha;
        delete model.contra_senha;
        return responseJson(res, model);
    } catch (error) {
        return responseErrorJson(res, 'Usurio::resetPassword', error);
    }
};

const validate = async (req, res) => {
    try {
        const { CLIENT, DECODED, TOKEN } = req;
        const result = await service.show({ id: DECODED.id, fields: 'licencas', permissao: DECODED.permissao });
        if (!result) throw 'Usuário inválido';
        const usuario = result.get({ plain: true });
        if (!usuario.ativo || (usuario.permissao === 1 && !usuario.licencas.length)) throw 'Você não tem permissão para acessar o sistema';
        usuario.token = generateToken(usuario, CLIENT);
        await updateSession(TOKEN, usuario.token);
        delete usuario.senha;
        delete usuario.contra_senha;
        delete usuario.licencas;
        return responseJson(res, usuario);
    } catch (error) {
        return responseErrorJson(res, 'Usuaroi::validate', error, httpStatus.FORBIDDEN);
    }
};

const logout = async (req, res) => {
    try {
        const { TOKEN } = req;
        const result = await closeSession(TOKEN);
        return responseJson(res, result);
    } catch (error) {
        return responseErrorJson(res, 'Usuario::logout', error, httpStatus.FORBIDDEN);
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