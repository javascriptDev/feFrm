var config = require('./bin/config');
var url = require('url');
var path = require('path')


function noMethod(res, method) {
    res.body = 'have this controller,but this controller do not has this method :' + method;
    return;
}

module.exports = function*(next) {
    var base = url.parse(this.url, true),
        info = base.pathname.split('/'),
        controllerName = info[1] || 'index',
        method = info[2] || '/';

    if (config.mode == 'dev') {
        for (var i in require.cache) {
            if (i.indexOf(path.join(__dirname + '/router')) != -1) {
                delete require.cache[i];
            }
        }
    }   
    
    try {
        var controller = require('./router/' + controllerName);
        var handler = controller[method];
        typeof handler == 'function' ? yield handler(111) : noMethod(this, method);
    } catch (e) {
        console.log(e);
        this.body = e.message;
    }
}
