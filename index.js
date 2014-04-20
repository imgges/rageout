var rageout = require('./lib/rageout');

/**
 * @param Array reslt
 * @return promise
 * This module makes use of the node-promise API.
 * Operate on the singular result argument passed to a `then` callback, as follows:
 *
 * rageout(result).then(function (result) {
 *   // Operate on the mongodb documents
 * }, function (error) {
 *   // Handle errors
 * })
 */
module.exports = function (result) {
    return rageout.generate(result);
};
