const helpers = require('./../helpers');
const database = require('./../data/database');

module.exports = {
    'GET': function (req, res) {
        helpers.redirect(res, 'login.html');
    },
    'POST': function (req, res) {
        helpers.getFormData(req, function(fd) {
            database.verifyUser(res, fd, function(d) {
                helpers.respond(res, d);
            });
        });
    }
};
