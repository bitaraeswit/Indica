const nodemailer = require("nodemailer");
const Promise = require('bluebird');
const moment = require('moment-timezone');
const AWS = require('aws-sdk');

AWS.config.region = 'us-west-2';
AWS.config.update({
    accessKeyId: "",
    secretAccessKey: "",
});

const sendMail = function (params) {
    const data = params.data || {};
    var ses = new AWS.SES();
    const promise = new Promise((resolve, reject) => {
        ses.sendEmail({
            Source: data.from,
            Destination: {
                ToAddresses: data.to,
                BccAddresses: data.bcc,
            },
            Message: {
                Subject: {
                    Data: data.subject,
                    Charset: "UTF-8",
                },
                Body: {
                    Html: {
                        Data: data.html,
                        Charset: "UTF-8",
                    },
                },
            },
        }, function (err, data) {
            if (err) {
                if (err) return reject(err);
            } else {
                return resolve();
            }
        });
    });
    return promise;
};

const sendPasswordUsuario = async (codigo, nome, email, senha, reset) => {
    let currentYear = moment().format("YYYY");
    try {
        const mailOptions = {
            from: `Automatic 4 <suporte@labcinco.com>`,
            to: [email],
            subject: `Automatic 4 - Senha de Acesso`,
            html: `<table style="height: 109px; width: 500px; background-color: #F9A825; margin-left: auto; margin-right: auto;" border="0px">
                        <tbody>
                        <tr style="height: 75px;">
                        <td style="width: 135px; padding: 0px; margin: 0px; height: 57px;"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://labcinco.nyc3.digitaloceanspaces.com/automatic4/logo/logo-white.png" alt="Automatic 4" width="100px" height="80px" /></td>
                        <td style="width: 317px; height: 75px;">&nbsp;
                        <h2 style="text-align: left;"><span style="color: #FFFFFF; font-family: Palatino Linotype, Book Antiqua, Palatino, serif"><strong>Senha de Acesso</strong></span></h2>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                        <table style="height: 259px; width: 500px; margin-left: auto; margin-right: auto;" border="0px">
                        <tbody>
                        <tr style="height: 80px; background-color: #FFFFFF;">
                        <td style="width: 100%; height: 80px; padding: 0px 20px;">
                        <p style="color: #000000; text-align: justify; font-size: 15px; font-family: Palatino Linotype, Book Antiqua, Palatino, serif">Olá ${nome}, ${reset ? 'você solicitou uma nova senha de acesso ao nosso sistema. Seus dados de acesso são:' : 'você foi cadastrado em nosso sistema. Seus dados de acesso são:'}</p>
                        <p style="color: #000000; text-align: justify; font-size: 15px; font-family: Palatino Linotype, Book Antiqua, Palatino, serif">Código: <strong>${codigo}</strong></p>
                        <p style="color: #000000; text-align: justify; font-size: 15px; font-family: Palatino Linotype, Book Antiqua, Palatino, serif">Senha: <strong>${senha}</strong></p>
                        <p style="color: #000000; text-align: justify; font-size: 15px; font-family: Palatino Linotype, Book Antiqua, Palatino, serif">Acesse o sistema clicando <a href="http://auditoria.automatic4.labcinco.com/login">aqui</a>.</p>
                        </td>
                        </tr>
                        <tr style="height: 40px;">
                        <td style="width: 100%; height: 22px; text-align: center; background-color: #f9a825; padding: 0px;">
                        <div>
                        <div><span style="color: #FFFFFF; font-size: 14px; font-family: Palatino Linotype, Book Antiqua, Palatino, serif"><strong>AUTOMATIC 4 &copy; ${currentYear}</strong></span></div>
                        </div>
                        </td>
                        </tr>
                        </tbody>
                    </table>`
        }
        return await sendMail({ data: mailOptions });
    } catch (error) {
        throw new Error(error);
    }
};

const sendPasswordAdmin = async (nome, email, senha, reset) => {
    let currentYear = moment().format("YYYY");
    try {
        const mailOptions = {
            from: `Automatic 4 <suporte@labcinco.com>`,
            to: [email],
            subject: `Automatic 4 - Senha de Acesso`,
            html: `<table style="height: 109px; width: 500px; background-color: #F9A825; margin-left: auto; margin-right: auto;" border="0px">
                        <tbody>
                        <tr style="height: 75px;">
                        <td style="width: 135px; padding: 0px; margin: 0px; height: 57px;"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://labcinco.nyc3.digitaloceanspaces.com/automatic4/logo/logo-white.png" alt="Automatic 4" width="100px" height="80px" /></td>
                        <td style="width: 317px; height: 75px;">&nbsp;
                        <h2 style="text-align: left;"><span style="color: #FFFFFF; font-family: Palatino Linotype, Book Antiqua, Palatino, serif"><strong>Senha de Acesso</strong></span></h2>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                        <table style="height: 259px; width: 500px; margin-left: auto; margin-right: auto;" border="0px">
                        <tbody>
                        <tr style="height: 80px; background-color: #FFFFFF;">
                        <td style="width: 100%; height: 80px; padding: 0px 20px;">
                        <p style="color: #000000; text-align: justify; font-size: 15px; font-family: Palatino Linotype, Book Antiqua, Palatino, serif">Olá ${nome}, ${reset ? 'você solicitou uma nova senha de acesso ao nosso sistema. Seus dados de acesso são:' : 'você foi cadastrado em nosso sistema. Seus dados de acesso são:'}</p>
                        <p style="color: #000000; text-align: justify; font-size: 15px; font-family: Palatino Linotype, Book Antiqua, Palatino, serif">Email: ${email}</p>
                        <p style="color: #000000; text-align: justify; font-size: 15px; font-family: Palatino Linotype, Book Antiqua, Palatino, serif">Senha: <strong>${senha}</strong></p>
                        <p style="color: #000000; text-align: justify; font-size: 15px; font-family: Palatino Linotype, Book Antiqua, Palatino, serif">Acesse o sistema clicando <a href="http://admin.automatic4.labcinco.com/login">aqui</a>.</p>
                        </td>
                        </tr>
                        <tr style="height: 40px;">
                        <td style="width: 100%; height: 22px; text-align: center; background-color: #f9a825; padding: 0px;">
                        <div>
                        <div><span style="color: #FFFFFF; font-size: 14px; font-family: Palatino Linotype, Book Antiqua, Palatino, serif"><strong>AUTOMATIC 4 &copy; ${currentYear}</strong></span></div>
                        </div>
                        </td>
                        </tr>
                        </tbody>
                    </table>`
        }
        return await sendMail({ data: mailOptions });
    } catch (error) {
        throw new Error(error);
    }
};

const real = (int) => {
    var tmp = int.toString().replace(",", "").replace(".", "") + '';
    tmp = tmp.replace(/(\d)(\d{1,2})$/g, "$1,$2");
    tmp = tmp.replace(/(\D{1,})$/g, "");
    if (tmp.length > 6)
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    return tmp;
}

const sendEmailDr = async (questionario, passivo, diagnostico) => {
    let htmlBody = questionario && questionario.nome && questionario.texto_email ? questionario.texto_email.replace('{nomeQuestionario}', questionario.nome).replace('{razaoSocial}', diagnostico.razao_social).replace('{valorPassivo}', questionario.moeda == 1 ? `R$ ${real(passivo.toFixed(2))}` : passivo) : '';
    let currentYear = moment().format("YYYY");
    try {
        const mailOptions = {
            from: `Automatic 4 <suporte@labcinco.com>`,
            to: [diagnostico.email],
            subject: `Automatic 4 - Resultado Diagnóstico Rápido`,
            html: `<table style="height: 109px; width: 900px; background-color: #F9A825; margin-left: auto; margin-right: auto;" border="0px">
                        <tbody>
                        <tr style="height: 75px;">
                        <td style="width: 135px; padding: 0px; margin: 0px; height: 57px;"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://labcinco.nyc3.digitaloceanspaces.com/automatic4/logo/logo-white.png" alt="Automatic 4" width="100px" height="80px" /></td>
                        <td style="width: 317px; height: 75px;">&nbsp;
                        <h2 style="text-align: left;"><span style="color: #FFFFFF; font-family: Palatino Linotype, Book Antiqua, Palatino, serif"><strong>Resultado Diagnóstico Rápido</strong></span></h2>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                        <table style="height: 259px; width: 900px; margin-left: auto; margin-right: auto;" border="0px">
                        <tbody>
                        <tr style="background-color: #FFFFFF;">
                        <td style="width: 100%; padding: 0px 20px;">${htmlBody}</td>
                        </tr>
                        <tr style="height: 40px;">
                        <td style="width: 100%; height: 22px; text-align: center; background-color: #f9a825; padding: 0px;">
                        <div>
                        <div><span style="color: #FFFFFF; font-size: 14px; font-family: Palatino Linotype, Book Antiqua, Palatino, serif"><strong>AUTOMATIC 4 &copy; ${currentYear}</strong></span></div>
                        </div>
                        </td>
                        </tr>
                        </tbody>
                    </table>`
        }
        return await sendMail({ data: mailOptions });
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    sendPasswordUsuario,
    sendPasswordAdmin,
    sendEmailDr,
};