const helpers = require('./../helpers');
const url = require('url');
const qs = require('querystring');
const database = require('./../data/database');

module.exports = {
    'GET' :function(req, res) {

        var query = url.parse(req.url).query;
        var params = qs.parse(query);

        var sql = "SELECT * FROM articles WHERE fk_menu_id = ?";

        database.getArticles(res, sql, [params.catid], function(data){
            helpers.respond(res, data);
        })
    }
};
