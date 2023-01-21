const Piii = require("piii");
const piiiFilters = require("piii-filters");

const removeAcents = (str = '') => {
    const rep = ' ';
    str = str.toLowerCase().replace(/\s+/g, rep); // replace whitespace
    // remove accents, swap ñ for n, etc
    const from = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
    const to = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(
            new RegExp(from.charAt(i), 'g'),
            to.charAt(i)
        );
    }
    // remove invalid chars
    str = str.replace(new RegExp('[^a-z0-9' + rep + ']', "g"), '').replace(/-+/g, rep); // collapse dashes;
    return str;
};

const removeSpecialCharacters = (str, str2) => {
    str = str.toLowerCase();
    if (typeof str2 !== 'undefined' && str2 !== null) {
        str = str.replace("_", str2);
        str = str.replace(/[^a-z0-9áàãâäéèêëíìîïóòõôöúùûüç]/gi, str2);
    } else {
        str = str.replace("_", " ");
        str = str.replace(/[^a-z0-9áàãâäéèêëíìîïóòõôöúùûüç]/gi, " ");
    }
    return str;
};

const randHex = (len = 6) => {
    const maxlen = 8;
    const min = Math.pow(16, Math.min(len, maxlen) - 1);
    const max = Math.pow(16, Math.min(len, maxlen)) - 1;
    const n = Math.floor(Math.random() * (max - min + 1)) + min;
    let r = n.toString(8);
    while (r.length < len) {
        r = r + randHex(len - maxlen);
    }
    return r.toUpperCase();
};

const setKeywords = str => {
    str = "#####" + str.toLowerCase() +
        "#####" + removeSpecialCharacters(removeAcents(str)) +
        "#####" + removeSpecialCharacters(removeAcents(str)).replace(/\s{1,}/g, '') +
        "#####" + removeSpecialCharacters(str) +
        "#####" + removeSpecialCharacters(str).replace(/\s{1,}/g, '');
    return str;
};

const removeOffenses = val => {
    var additionalRules = [];
    return new Piii({
        filters: [
            Object.values(piiiFilters),
            additionalRules
        ],
        repeated: true,
        cleaner: removeAcents
    }).filter(val);
};

module.exports = {
    randHex,
    removeSpecialCharacters,
    removeAcents,
    setKeywords,
    removeOffenses,
};