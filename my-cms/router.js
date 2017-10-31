const url = require('url');
const helpers = require('./helpers'); // bruges ikke pt

// endpointhandlers indeholder 
const routes = {
    '/cat': require('./endpointhandlers/cat'),
    '/dog': require('./endpointhandlers/dog'),
    '/fox': require('./endpointhandlers/fox'),
    '/test': require('./endpointhandlers/test'),
    '/login': require('./endpointhandlers/login'),
    '/menuitems': require('./endpointhandlers/menuitems')
};

// console.log(routes['/cat']); // udskriver hvilken metode som bliver brugt i funktionerne

module.exports = function (req, res) {
    helpers.logger(req);
    // console.log(req.url);// udskriver alt indhold på den kaldte funktion fra browseren. Kan også bruge (req.method) eller (req.url)
    var pathname = url.parse(req.url).pathname; // parse undersøger url´en pathname, som er alt det der kommer bagefter ? eller /
    var action = routes[pathname]; // pathname er den del af url´en, som kommmer efter ? eller /

    if (pathname === '/') { // henter index filen
        helpers.fileRespond(res, 'public/index.html');
        return;
    }
    // if (pathname === '/admin') { // henter index filen
    //     helpers.fileRespond(res, 'public/admin.html');
    //     return;
    // }
    // if (pathname === '/forgot-password') { // henter index filen
    //     helpers.fileRespond(res, 'public/forgot-password.html');
    //     return;
    // }
    // if (pathname === '/login') { // henter index filen
    //     helpers.fileRespond(res, 'public/login.html');
    //     return;
    // }
   

    var regexFile = pathname.match(/^\/((styles|scripts|images)\/)?\w+\.(html|css|js|jpg|png)$/);
    // console.log(regexFile[0]);
    if(regexFile) {
        helpers.fileRespond(res, 'public' + regexFile[0]);
        return;
    }

    if (action) { // hvis action er true
        var method = req.method; // finder ud af hvilken metode der anvendes i endpointhandlers (GET eller POST)
        var handler = action[method];

        if (handler) {
            handler(req, res);
        }
        else {
            helpers.respond(res, `Metode ${req.method} ikke tilladt`, 404);
            return;
        }
        return; // Kan bruges i stedet for at fortsætte med en else-sætning. Hopper ud af funktionen og stopper, så der ikke bliver udført mere
    }
    // Hvis vi er her er der ikke fundet et route
    // res.writeHead(404, { 'Content-type': 'application/json' });
    // res.end('Route findes ikke');
    helpers.respond(res, 'Route findes ikke', 404);
}