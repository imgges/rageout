var fs = require('fs'),
    Promise = require('node-promise').Promise;

var outputFile = exports.outputFile = function outputFile(str, filepath, callback) {
    // console.log('rageout#outputFile');
    if ((!str || typeof str !== 'string') ||
        (!filepath || typeof filepath !== 'string') ||
        (!callback || typeof callback !== 'function')) throw new Error();

    fs.writeFile(filepath, str, callback);
};

var serializeData = exports.serializeData = function serializeData(obj) {
    // console.log('rageout#serializeData');
    if (typeof obj === 'undefined') throw new Error();
    return JSON.stringify(obj);
};

var generate = exports.generate = function generate(result) {
    console.log('rageout#generate');
    var promise = new Promise();
    outputFile(serializeData(result), 'imgges-'+((new Date()).toISOString()).replace(/[\-\.:a-z]/gi, '')+'.json', function (err) {
        if (err) {
            return promise.reject(err);
        }
        promise.resolve(result);
    });
    return promise;
};
