// lav en respond funktion, som skal eksporteres, på den måde bliver man fri for at 
// gentage sig selv i hver route, men blot kalde på funktionen respond

const fs = require('fs'); // 
const path = require('path');

const mimetypes = { // multipurpose internet .... extension
    '.html' : 'text/html',
    '.css' : 'text/css',
    '.js' : 'text/js',
    '.png' : 'image/png',
    '.jpg' : 'image/jpg'
};

exports.fileRespond = function(res, fileName) {
    // console.log(fileName);
    fs.readFile(fileName, function(err, fileContent){ // fs.readfile indbygget metode som åbner filename
        if(err){
            exports.respond(res, 'Fil ikke fundet', 404);
            return;
        }
        var ext = path.extname(fileName);
        var mime = mimetypes[ext];
        res.writeHead(200, {'Content-type' : mime})
        res.end(fileContent);
    });
};

exports.respond = function (res, besked, status = 200) { 
    res.writeHead(status, { 'Content-type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(besked));
}

// Generering timestamp, samt omdannelse af 36-talsystems number til string
// anvendes til cookies/usersession
exports.rand = function(num_characters=48) {
    var r = Date.now().toString() + '#';
    while(num_characters--){
        r += Math.floor(Math.random()*(36)).toString(36);
    }
    return r;
}