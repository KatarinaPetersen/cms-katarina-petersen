// lav en respond funktion, som skal eksporteres, på den måde bliver man fri for at 
// gentage sig selv i hver route, men blot kalde på funktionen respond

const fs = require('fs'); // 
const path = require('path');

const mimetypes = { // multipurpose internet .... extension
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/js',
    '.png': 'image/png',
    '.jpg': 'image/jpg'
};

exports.fileRespond = function (res, fileName) {
    // console.log(fileName);
    fs.readFile(fileName, function (err, fileContent) { // fs.readfile indbygget metode som åbner filename
        if (err) {
            exports.respond(res, 'Fil ikke fundet', 404);
            return;
        }
        var ext = path.extname(fileName);
        var mime = mimetypes[ext];
        res.writeHead(200, { 'Content-type': mime })
        res.end(fileContent);
    });
};

exports.respond = function (res, besked, status = 200) {
    res.writeHead(status, { 'Content-type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(besked));
}

// Generering timestamp, samt omdannelse af 36-talsystems number til string
// anvendes til cookies/usersession
exports.rand = function (num_characters = 48) {
    var r = Date.now().toString() + '#';
    while (num_characters--) {
        r += Math.floor(Math.random() * (36)).toString(36);
    }
    return r;
}

// funktion som kan læse cookies og sætte den ind i et objekt
exports.getCookie = function (req, res) {
    var cookie = {},
        cookieParts = [];
        
    if (req.headers.cookie) {

        cookie.raw = req.headers.cookie;

        // splitter stringen og omdanner til et array. splitter ved ;
        cookieParts = cookie.raw.split(';');
        cookieParts.forEach(function (elm) {
            var name = [elm.split('=')[0].trim()];
            var value = [elm.split('=')[1].trim()];
            cookie[name] = value;
        });
    }
    return cookie;
}

// log funktion til visning i konsollen
exports.logger = function (req) {
    var logTxt = new Date().toString();
    logTxt += '; URL: ' + req.url;
    logTxt += '; Method: ' + req.method;
    logTxt += '; Cookies: ' + req.headers.cookie;
    console.log(logTxt);
}
