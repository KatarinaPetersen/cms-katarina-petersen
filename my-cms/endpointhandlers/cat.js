const helpers = require('./../helpers');

// Ved at skrive http://localhost:3003/cat udskrives Mijauv i browseren
module.exports = {
    'GET' :function(res) {
        helpers.respond(res, 'GET: Mijauv')
    },
    'POST' :function(res) {
        helpers.respond(res, 'POST: Mijauv')
    },
    'PUT' :function(res) {
        helpers.respond(res, 'PUT: Mijauv')
    },
    'DELETE' :function(res) {
        helpers.respond(res, 'DELETE: Mijauv')
    },
};