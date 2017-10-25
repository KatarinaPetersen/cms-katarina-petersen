const helpers = require('./../helpers');
const database = require('./../data/database');

module.exports = {
    'GET' :function(res) {
        // helpers.respond(res, [{name: 'Hjem'},{name: 'Animal'},{name: 'Nature'},{name: 'Person'}]); // bruges til at teste
        var sql = "SELECT * FROM menu ORDER BY position";
        database.select(res, sql, function(data){
            helpers.respond(res, data);
        })
    }
};