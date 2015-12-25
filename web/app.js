var app = require('koa')();
var render = require('koa-ejs');
var path = require('path');
var appRouter = require('./router');
var config = require('./bin/config');
var favicon = require('koa-favicon');
var appMode = config.mode;
var modeRes = config[appMode];
var jsServer = modeRes.jsServer;
var imgServer = modeRes.imgServer;
var staticCache = require('koa-static-cache')

"use strict";
module.exports = app;

//增加模板渲染
render(app, modeRes['tpl']);

//add middle ware
app.use(favicon(imgServer + '/public/images/favicon.ico'));
app.use(appRouter);

//rewrite native render method
var sysRender = app.context.render;

function* renderApp(url, data) {

    data.joeJs = ['js/lib/emar.js','js/lib/zepto.js'].concat(data.joeJs || []);
    data.joeCss = (data.joeCss || []);
    data.resourceVer = require('../version').ver;
    data.header_title = 'aaa';
    data.header_keywords = 'aaaa'
    data.header_description = 'qsw';
    data.jsServer = jsServer;
    data.imgServer = imgServer;

    yield sysRender.apply(this, [url, data])
}

app.context.render = renderApp;
