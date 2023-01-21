const ip = require('ip');
const jwt = require('jsonwebtoken');
const Hashes = require('jshashes');
const moment = require('moment-timezone');
const SHA512 = new Hashes.SHA512;
const Promise = require('bluebird');
const httpStatus = require('http-status-codes');

const clientService = require('@services/Client');
const sessionService = require('@services/Session');

const generatePassword = (senha, senha_encrypt, contra_senha) => {
    const timestamp = (new Date().getTime()) + "";
    let contraSenha = contra_senha || SHA512.hex(timestamp);
    let senhaNormal = senha || timestamp.slice(timestamp.length - 6, timestamp.length - 1);
    let senhaEncrypt = senha_encrypt || SHA512.hex(senhaNormal);

    senhaEncrypt = SHA512.hex(senhaEncrypt + contraSenha);

    return {
        senha: senhaEncrypt,
        contra_senha: contraSenha,
        senha_visivel: senhaNormal
    };
};

const checkPassword = (senha, senha_encrypt, contra_senha) => {
    const senhaAtualEncrypt = SHA512.hex(senha_encrypt + contra_senha);
    if (senha != senhaAtualEncrypt) return false;
    return true;
};

const generateToken = (model, client) => {
    try {
        const token = jwt.sign({
            id: model.id,
            permissao: model.permissao || 0,
            iss: ip.address(), // origem do token
            iat: moment().valueOf(), // timestamp de quando o token foi gerado
            exp: moment().add(30, 'days').valueOf(), // timestamp de quando o token expira
            sub: model.id, // entidade à quem o token pertence
            aud: client.route, // destinatario do token
        }, client.private_key);
        return token;
    } catch (error) {
        throw error;
    }
};

const decodedToken = (token, private_key) => new Promise((resolve, reject) => jwt.verify(token, private_key, (err, decoded) => {
    if (err) return reject(err);
    else return resolve(decoded);
}));

// --

const createSession = async data => {
    try {
        return await sessionService.store(data);
    } catch (error) {
        throw new Error(error);
    }
};

const updateSession = async (current_token, new_token) => {
    try {
        const result = await sessionService.show({ token: current_token });
        if (!result) throw 'Credenciais inválidas';
        const session = result.get({ plain: true });
        if (!session.ativo) throw 'Credenciais inválidas';
        session.token = new_token;
        await sessionService.update(session, session.id);
        return true;
    } catch (error) {
        throw new Error(error);
    }
};

const closeSession = async token => {
    try {
        const result = await sessionService.show({ token });
        if (!result) return true;
        const session = result.get({ plain: true });
        session.ativo = 0;
        await sessionService.update(session, session.id);
        return true;
    } catch (error) {
        throw new Error(error);
    }
};

// --

const authenticate = async (req, res, next) => {
    try {
        const { headers } = req;
        const { authorization, token } = headers;
        if (!authorization) throw 'Credenciais Inválidas';
        const result = await clientService.show({ public_key: authorization });
        if (!result) throw 'Credenciais Inválidas';
        const client = result.get({ plain: true });
        if (!client.ativo) throw 'Credenciais inválidas';
        req.CLIENT = client;
        req.TOKEN = token;
        return next();
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).json({ error });
    }
};

const authorizate = async (req, res, next) => {
    try {
        const { CLIENT, path } = req;
        const paths = path.split('/');
        if (CLIENT.route === paths[1]) return next();
        else throw 'Credenciais inválidas';
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).json({ error });
    }
};

const checkSession = async (req, res, next) => {
    try {
        const { TOKEN } = req;
        const result = await sessionService.show({ token: TOKEN });
        const session = result.get({ plain: true });
        if (session && session.ativo) return next();
        await closeSession(TOKEN);
        return res.status(httpStatus.UNAUTHORIZED).json({ error: 'Sessão expirada' });
    } catch (error) {
        return next();
    }
};

// --

module.exports = {
    generatePassword,
    checkPassword,
    generateToken,
    decodedToken,
    createSession,
    updateSession,
    closeSession,
    authenticate,
    authorizate,
    checkSession,
};