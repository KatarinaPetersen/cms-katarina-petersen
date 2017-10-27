// tester at der bliver genereret en tekststreng til anvendelse i coolies
const helpers = require('./../helpers');

module.exports = {
    'GET': function (req, res) {
        var c = helpers.getCookie(req);
        // helpers.respond(res, c.sessionId);

        //hvis feltet ikke udfyldes med 32, så er default 48
        var session_key = helpers.rand(32);

        // t = nu + 1 time
        var t = new Date().getTime() + 5000000000;

        var expireTime = new Date(t).toUTCString();

        res.setHeader('Set-cookie', [`sessionid=${session_key}; expires=${expireTime}`, 'cookie = nummer to']);
        helpers.respond(res, c);
        
    }
}
