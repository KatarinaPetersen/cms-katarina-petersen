// lav en respond funktion, som skal eksporteres, på den måde bliver man fri for at 
// gentage sig selv i hver route, men blot kalde på funktionen respond

const fs = require('fs'); // 
const path = require('path');
const qs = require('querystring');
const mimetypes = require('./mimetypes')

exports.fileRespond = function (res, fileName) {
    // console.log(fileName);
    var ext = path.extname(fileName);
    var mime = mimetypes[ext];

    fs.readFile(fileName, mime.enc, function (err, fileContent) { // fs.readfile indbygget metode som åbner filename
        if (err) {
            exports.respond(res, 'Fil ikke fundet', 404);
            return;
        }
        res.writeHead(200, { 'Content-type': mime.type})
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

// login
exports.redirect = function (res, url) {
    res.writeHead(302, {location : url});
    res.end();
}

exports.getFormData = function (req, callback) {
    var userData = '', formData;
    req.on('data', function(d) {
        userData += d;
    });

    req.on('end', function(){
        formData = qs.parse(userData); //parse er at undersøge, opdele og indsætte i et json obj
        callback(formData);
    });
}