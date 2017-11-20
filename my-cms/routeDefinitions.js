// endpointhandlers indeholder:
module.exports = {
    '/' : require('./endpointhandlers/home'),
    '/cat': require('./endpointhandlers/cat'),
    '/dog': require('./endpointhandlers/dog'),
    '/fox': require('./endpointhandlers/fox'),
    '/test': require('./endpointhandlers/test'),
    '/login': require('./endpointhandlers/login'),
    '/article': require('./endpointhandlers/article'),
    '/menuitems': require('./endpointhandlers/menuitems')
};