const helpers = require('./../helpers'); //brug af respond funktinen i helpers
const mysql = require('mysql2');

// objekt til database credentials (brugernavn og password)
const dbCreds = {
    host: 'localhost',
    database: 'demo-cms',
    user: 'wwwuser',
    password: 'wwwuser'
};

// Opret forbindelse til databasen
const dbConnection = mysql.createConnection(dbCreds);

exports.select = function (res, sql, callback) {
    dbConnection.query(sql, function(err, data){
        if(err){
            helpers.respond(res, {besked: 'Der opstod en fejl i forbindelsen til databasen'}, 404);
            return;
        }
        callback(data);
    });
};

// tjekker om bruger findes i db
exports.verifyUser = function (res, cred, callback) {
    var sql = `SELECT username, id FROM users WHERE username = ? AND password = ?`;
    Connection.query(sql, [creds.username, creds.password], function(err, data){
        if(err){
            helpers.respond(res, {besked: 'Der opstod en fejl i forbindelsen til databasen'}, 404);
            return;
        }
        callback(data);
    });
};
