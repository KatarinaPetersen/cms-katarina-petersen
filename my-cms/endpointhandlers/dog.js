const helpers = require('./../helpers');

// Ved at skrive http://localhost:3003/dog udskrives Vov-vov i browseren
module.exports = {
    'GET' :function(res) {
        helpers.respond(res, 'GET: Vov vov')
    },
    'POST' :function(res) {
        helpers.respond(res, 'POST: Vov vov')
    },
    'PUT' :function(res) {
        helpers.respond(res, 'PUT: Vov vov')
    },
    'DELETE' :function(res) {
        helpers.respond(res, 'DELETE: Vov vov')
    }
};