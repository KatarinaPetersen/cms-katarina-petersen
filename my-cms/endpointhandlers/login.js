const helpers = require('./../helpers');

// Ved at skrive http://localhost:3003/cat udskrives Mijauv i browseren
module.exports = {
    'GET' :function(req, res) {
        helpers.redirect(res, 'login.html');
    },
    'POST' :function(req, res) {
        helpers.getFormData(req, function(fd){
            helpers.respond(res, fd);
            // helpers.respond(res, fd.username); //kan hente enkelte elementer ned
        });
    }
};