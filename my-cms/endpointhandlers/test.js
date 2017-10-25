// tester at der bliver genereret en tekststreng til anvendelse i coolies
const helpers = require('./../helpers');

module.exports = {
    'GET': function (res) {
        var cookie = helpers.rand(32); //hvis feltet ikke udfyldes med 32, så er default 48
        res.setHeader('Set-cookie', [`sessionid=${cookie}`]);
        helpers.respond(res, cookie);
    }
}