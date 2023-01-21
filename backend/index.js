
require('module-alias/register');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const moment = require('moment-timezone');

const { sequelize } = require('@models');
const AuthController = require('@controllers/Auth');

moment.tz.setDefault(process.env.TZ);

const PORT = process.env.PORT;

app.use(helmet());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({
    origin: "*",
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Authorization', 'Token', 'Licenca']
}));

app.set('port', PORT);

app.use(AuthController.authenticate);

app.use(AuthController.authorizate);

app.use('/app', require('@routes/App'));

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        sequelize.sync();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});