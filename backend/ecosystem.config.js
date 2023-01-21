var env_local = {
    "PORT": 7050,
    "DB_PORT": 3306,
    "DB_USER": "root",
    "DB_PASS": "",
    "DB_HOST": "localhost",
    "DB_NAME": "indica_api",
    "NODE_ENV": "local",
    "TZ": "America/Sao_Paulo",
    "APP_COLOR": "#2a39c4",
    "accessKeyId": "",
    "secretAccessKey": "",
    "bucket": "",
    "spaceDirectory": "indica",
    "googleAPIKey": "",
    "firebaseKey": "",
};

var env_stage = {
    "PORT": 7050,
    "DB_PORT": 3306,
    "DB_USER": "root",
    "DB_PASS": "",
    "DB_HOST": "localhost",
    "DB_NAME": "indica_api",
    "NODE_ENV": "stage",
    "TZ": "America/Sao_Paulo",
    "APP_COLOR": "#2a39c4",
    "accessKeyId": "",
    "secretAccessKey": "",
    "bucket": "",
    "spaceDirectory": "indica",
    "googleAPIKey": "",
    "firebaseKey": "",
};

var env_prod = {
    "PORT": 7050,
    "DB_PORT": 3306,
    "DB_USER": "root",
    "DB_PASS": "",
    "DB_HOST": "",
    "DB_NAME": "indica_api",
    "NODE_ENV": "production",
    "TZ": "America/Sao_Paulo",
    "APP_COLOR": "#2a39c4",
    "accessKeyId": "",
    "secretAccessKey": "",
    "bucket": "",
    "spaceDirectory": "indica",
    "googleAPIKey": "",
    "firebaseKey": "",
};

const api = {
    name: "indica-api",
    script: "./index.js",
    watch: false,
    env_local: env_local,
    env_stage: env_stage,
    env_prod: env_prod,
};

module.exports = {
    apps: [api],
    deploy: {
        production: {
            user: 'root',
            host: ['127.0.0.0'],
            ref: 'origin/master',
            repo: 'git@bitbucket.org:jhonatanbotelho/indica-api.git',
            path: '/root/www/api.indica.com',
            "pre-setup": "apt-get install git && git init",
            'post-deploy': 'npm install && pm2 startOrReload ecosystem.config.js --env prod --update-env --watch 0',
            "env": {
                "NODE_ENV": "production"
            }
        }
    }
};

// comando para gerar chave para não precisar digitar a senha
// ssh-keygen -t rsa
// ssh-copy-id root@159.65.174.203

// comando para setup pre-deploy
// pm2 deploy ecosystem.config.js production setup

// comando para deploy
// pm2 deploy ecosystem.config.js production --force