const helpers = require('./../helpers');

// Ved at skrive http://localhost:3003/fox udskrives Hatchi hatchi hatchi ho i browseren
module.exports = {
    'GET' :function(res) {
        helpers.respond(res, 'GET: Hatchi hatchi hatchi ho')
    },
    'POST' :function(res) {
        helpers.respond(res, 'POST: Hatchi hatchi hatchi ho')
    },
    'PUT' :function(res) {
        helpers.respond(res, 'PUT: Hatchi hatchi hatchi ho')
    },
    'DELETE' :function(res) {
        helpers.respond(res, 'DELETE: Hatchi hatchi hatchi ho')
    }
};
