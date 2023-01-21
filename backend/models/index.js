const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const NAME = process.env.DB_NAME;

const sequelize = new Sequelize(NAME, USER, PASS, {
    dialect: 'mysql',
    host: HOST,
    port: PORT,
    define: {
        underscored: true,
        freezeTableName: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci',
            userUTC: false,
        },
        timestamps: true,
    },
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    },
    underscored: true,
    logging: false,
    timezone: '-03:00',
});

fs
.readdirSync(__dirname)
.filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;