const util = require("util");
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const uuid = require('node-uuid');
const Promise = require('bluebird');

//---------------------DIGITAL OCEAN SPACES UPLOAD-----------------------
const bucket = process.env.bucket;
const spacesEndpoint = new aws.Endpoint('nyc3.digitaloceanspaces.com');
const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
});
const directory = process.env.spaceDirectory;

const uploadApp = async (req) => {
    try {
        return new Promise((resolve, reject) => {
            buf = new Buffer(req.body.file.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            if (!req.headers.filename) {
                req.headers.filename = uuid.v4();
            }
            s3.putObject({
                ACL: 'public-read',
                Body: buf,
                ContentEncoding: 'base64',
                ContentType: 'image/jpeg',
                Bucket: bucket,
                Key: `${directory}/${req.headers.folder}/${req.headers.filename}`
            }, (error, data) => {
                if (error)
                    return reject(error);
                return resolve(req.headers.filename);
            })
        });
    } catch (e) {
        console.log(e);
    }
};

const uploadFile = multer({
    storage: multerS3({
        s3: s3,
        bucket: bucket,
        cacheControl: 'max-age=31536000',
        acl: 'public-read',
        key: (req, file, cb) => {
            if (!req.headers.filename) {
                req.headers.filename = uuid.v4() + "." + file.originalname.split('.')[file.originalname.split('.').length - 1];
            }
            if (req.headers.folder) cb(null, `${directory}/${req.headers.folder}/${req.headers.filename}`);
            else cb(null, `${directory}/${req.headers.filename}`);
        }
    })
}).single('file');

const upload = async (req, res) => {
    try {
        await util.promisify(uploadFile)(req, res);
        return req.file;
    } catch (error) {
        throw error;
    }
};

const deleteFile = async file => {
    const key = file.split(`${bucket}.nyc3.digitaloceanspaces.com/`)[1];
    return new Promise((resolve, reject) => {
        s3.deleteObject({
            Bucket: bucket,
            Key: key
        }, (err, data) => {
            if (err)
                return reject(err);
            return resolve(null);
        });
    });
};


module.exports = {
    uploadFile: upload,
    deleteFile,
    uploadApp
};