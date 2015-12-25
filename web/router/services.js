var fetch = require('../fetch');
var util = require('util');
var https = require('https');
var crypto = require('crypto');
var util = require('util');
var fs = require('fs');
var querystring = require('querystring');
var http = require('http');


/**
 * 构建签名
 * @param  {Object} params 基础参数
 * @param  {String} secret 密钥
 * @return {String}        签名
 */
function buildSign(params, secret) {
    if (!secret)
        return null;
    var arr = [];
    for (var n in params) {
        var v = params[n];
        if (v == null || v === "") continue;
        arr.push(n + v);
    }
    var buf = "";
    buf += secret;
    arr.sort().forEach(function(nv) {
        buf += nv;
    });
    buf += secret;

    var md5sum = crypto.createHash('md5');
    md5sum.update(buf);
    return md5sum.digest('hex');
}

/**
 * 获取请求参数
 * @param  {Object} opt    参数
 * @param  {String} secret 密钥
 * @return {Obejct}        request params
 */
function createAPIRequest(opt, secret) {
    if (!opt.method) throw 'method is required';
    var params = util._extend({
        site: 1,
        term: 1,
        termv: '1.0',
        v: 1,
        t: new Date().getTime()
    }, opt);

    // sign must be the last param to secre
    if (secret) params.sign = buildSign(params, secret);

    var m = params.method;
    var api_cat = m.substring(0, m.indexOf('.'));

    return {
        hostname: api_cat + '-api.egou.com',
        method: 'GET',
        path: '/rest?' + querystring.stringify(params),
        headers: {
            'X-Real-IP': this.headers['x-real-ip'] || this.headers['x-forwarded-for'] || this.headers['from'] || ''
        }
    };

}

/**
 * 解析cookie
 * @param  {String} cookie cookie
 * @return {Object}        cookie object
 */
function parseCookies(cookie) {
    var list = {};

    cookie && cookie.split(';').forEach(function(cookie) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}

module.exports = {
    'ver':function(){
        return function*(){
            this.body = JSON.stringify({
                main:1,
                hg:1
            })
        }
    },
    'request': function() {
        return function*() {
            var me = this;
            var cookieObj = parseCookies(this.get('cookie'));
            this.query['uid'] = cookieObj.uid || '';

            var options = createAPIRequest.apply(this, [this.query, cookieObj.sk]);

            yield new Promise((resolve, reject) => {
                var req = https.request(options, function(res) {
                    var data = '';
                    res.on('data', function(d) {
                        data += d;
                    }).on('end', function() {
                        reject(data);
                    })
                })

                req.on('error', function(e) {

                    resolve(e.message);
                });
                req.end();


            }).then(function(data) {
                me.body = data;

            }).catch(function(err) {
                me.body = JSON.stringify(err);
            })

        }
    },
    validate: function(sessionId) {
        return function*() {
            var me = this;
            yield new Promise((resolve, reject) => {
                console.log(this.query);
                https.get('https://user-api.egou.com/rest?site=1&method=user.imgvcode.validate&session_id=' + this.query.s + '&vcode=' + this.query.code, res => {
                    resolve(res);
                }).on('error', e => {
                    reject(e.message);
                })
            }).then(img => {
                me.body = img;
            }).catch(msg => {
                me.body = msg;
            })

        }
    },
    getCode: function(sessionId) {
        return function*() {
            var me = this;
            yield new Promise((resolve, reject) => {
                https.get('https://user-api.egou.com/rest?site=1&method=user.imgvcode.get&session_id=' + this.query.s, res => {
                    resolve(res);
                }).on('error', e => {
                    reject(e.message);
                })
            }).then(img => {
                me.body = img;
            }).catch(msg => {
                me.body = msg;
            })

        }
    },
    aa: function() {
        return function*() {
            console.log(this.header);
            this.set('ETag', 1111);
            this.set('ETag', 2222);

            this.body = 111;
        }
    },
    a: function() {
        return function*() {
            var data = {
                "status": "0",
                "message": "",
                "data": {
                    "PerformanceList": [{
                        "createTime": '2015-10-20',
                        "productionOrder": 1,
                        "estimatedReturn": 20,
                        "recordOrders": 2,
                        "soonBalance": 30,
                        "settlementOrders": 3,
                        "availableBalance": 40,
                        "browerNumber": 100000,
                        "clicks": 10000
                    }]
                }
            }
            this.set('Access-Control-Allow-Origin', '*');
            this.body = JSON.stringify(data);
        }
    }
}
