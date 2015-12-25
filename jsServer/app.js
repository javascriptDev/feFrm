var app = require('koa')();
var staticCache = require('koa-static-cache')
var fs = require('fs');
var path = require('path');

var sep = path.sep;
var base = __dirname + '/dev/';
module.exports = app;



start();



function start() {
    app.use(staticCache(base))
    app.listen(3001);
}
