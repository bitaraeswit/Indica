const _ = require('lodash');
const request = require('request-promise');
const moment = require('moment-timezone');

const push = data => request({
    method: 'POST',
    uri: 'https://fcm.googleapis.com/fcm/send',
    headers: {
        'Content-Type' : 'application/json',
        'Authorization': `key=${process.env.firebaseKey}`
    },
    body: JSON.stringify(data),
});

// --

const ANDROID = 1;
const IOS = 2;

// --

const sendFCM = async (data, tokens, platform) => {
    data.title = data.titulo;
    data.message = data.mensagem;

    if (platform == ANDROID) {
        data.sound = true;
        data.color = process.env.APP_COLOR;
        data.timestamp = moment().millisecond();
        data.vibrate = true;
    }

    const tokens_group = _.chunk(tokens, 1000);
    const promises = tokens_group.map(async tokens => {
        await push({
            notification: {
                title: data.titulo,
                body: data.mensagem,
                sound: true
            },
            data: data,
            registration_ids: _.map(tokens, 'token'),
            priority: 'high',
            time_to_live: 0,
        });
    });
    await Promise.all(promises);
};

const send = async notification => {
    try {
        const admin_id = notification.admin_id || null;
        const usuario_id = notification.usuario_id || null;

        if (!admin_id && !usuario_id) return false;

        let result = await require('@services/DeviceToken').index({ admin_id, usuario_id });
        result = _.uniqBy(result.rows, 'token');

        const fcmTokensAndroid = _.reject(result, { tipo: 'ios' });
        const fcmTokensIOS = _.filter(result, { tipo: 'ios' });

        console.log(`${result.length} TOKENS: ${fcmTokensAndroid.length} ANDROID FCM, ${fcmTokensIOS.length} IOS FCM`);

        sendFCM(notification, fcmTokensAndroid, ANDROID);
        
        sendFCM(notification, fcmTokensIOS, IOS);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    send,
};