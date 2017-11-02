const helpers = require('./../helpers');
const url = require('url');
const qs = require('querystring');
const database = require('./../data/database');

module.exports = {
    'GET' :function(req, res) {
        
        var query = url.parse(req.url).query;
        var params = qs.parse(query);

        helpers.respond(res, params);
    }
};
