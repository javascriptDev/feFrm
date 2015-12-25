var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var ph = require('./processHelper.js')
var fs = require('fs');
var path = require('path');

var jsServer, web;
var config = {
    encoding: 'utf8',
    mode: 0644,
    stdio: ['pipe', 'pipe', 'pipe', 'ipc']
}
var type = process.argv[2],
    jsServerPidPath = __dirname + '/pid/jsServerPid.js',
    webPid = __dirname + '/pid/webPid.js',

    webLogPath = __dirname + '/logs/web/console/',
    webErrPath = __dirname + '/logs/web/err/',
    jsServerLogPath = __dirname + '/logs/jsServer/console/',
    jsServerErrPath = __dirname + '/logs/jsServer/err/',
    jsServerScript = './jsServer/app';

/**
 * 最大可重启次数
 * @type {Number}
 */
var maxCount = 3;
var sep = path.sep;

/**
 * 监测的路径
 * @type {[type]}
 */
var watchPath = __dirname + '/jsServer/dev/';
var to = __dirname + sep + 'jsServer' + sep + 'dev' + sep;

/**
 * 获取格式化日期
 * @param  {[type]} prefix [description]
 * @return {[type]}        [description]
 */
function getDate(prefix) {
    var date = new Date();
    return prefix + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '.js';
}

var task = [];
var jsServerPid = 0;


/**
 * 开启静态资源服务器
 * @return {[type]} [description]
 */
function startJsServer() {


    var jsServer = spawn('node', [jsServerScript], {
        detached: true,
        encoding: 'utf8',
        mode: 0644

    });

    jsServer.stdout.on('data', function(data) {
        var path = jsServerLogPath + getDate('log-'),
            exist = fs.existsSync(path),
            opt = {
                flags: 'w'
            };
        exist && (opt.flags = 'a+');
        var writeStream = fs.createWriteStream(path, opt);
        writeStream.write(data);
    });
    jsServer.stderr.on('data', function(data) {
        var path = jsServerErrPath + getDate('err-'),
            exist = fs.existsSync(path),
            opt = {
                flags: 'w'
            };
        exist && (opt.flags = 'a+');
        var writeStream = fs.createWriteStream(path, opt);
        writeStream.write(data);

    });
    
    jsServerPid = jsServer.pid.toString();
    var JsWriteStream = fs.createWriteStream(jsServerPidPath);
    JsWriteStream.write(jsServerPid);
}



//编译less
fs.watch(
    watchPath, {
        recursive: true
    },
    function(type, name) {

        var writeStream = fs.createWriteStream(__dirname + '/logs/jsServer/console/' + getDate('log-') + '.js', {
            flags: 'a+'
        });

        writeStream.write('type->>' + type + '||||||path--->' + name + '\n');

        var ext = path.extname(name);

        if (type == 'rename') { //删除或者新增或者修改文件名 ps:rename 首先走的删除,之后走的新建
            if (!name) { //删除

            } else { //新增
                if (ext == '.less') {

                } else if (ext == '' && name.indexOf('less') != -1) { //在less文件夹下面创建文件夹

                    if (fs.existsSync(__dirname + sep + 'jsServer' + sep + 'dev' + sep + name.replace('less', 'css'))) {
                        return;
                    } else {
                        exec('mkdir ' + __dirname + sep + 'jsServer' + sep + 'dev' + sep + name.replace('less', 'css'));
                    }

                    
                }
            }

          console.log(jsServerPid);
                    ph.kill(jsServerPid,false,undefined,function(){
                        startJsServer();
                    });

            
        } else {
            if (ext == '.less') {
                child = exec('lessc ' + watchPath + name + ' ' + to + name.replace(/less/ig, 'css'));
            }
        }
    })



/**
 * 启动web 服务器
 * @return {[type]} [description]
 */
function startWeb() {

    var web = spawn('node', ['./web/bin/www'], {
        detached: true,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe', 'ipc']
    });
    web.stdout.on('data', function(data) {
        var path = webLogPath + getDate('log-');
        var exist = fs.existsSync(path);
        var opt = {
            flags: 'w'
        };
        if (exist) {
            opt.flags = 'a+';
        }

        var writeStream = fs.createWriteStream(path, opt);
        writeStream.write(data);

    });
    web.stderr.on('data', function(data) {
        var path = webErrPath + getDate('err-'),
            exist = fs.existsSync(path),
            opt = {
                flags: 'w'
            };

        if (exist) {
            opt.flags = 'a+';
        }
        var writeStream = fs.createWriteStream(path, opt);
        writeStream.write(data);


    });

    web.on('exit', function(code, signal) {
        // console.log('web子进程已退出，代码：' + code);
        // maxCount--;
        // if (maxCount < 0) {
        //     setTimeout(function() {
        //         startWeb();
        //     }, 1000 * 5)
        // } else {
        //     startWeb();

        // }

    });

    var writeStream = fs.createWriteStream(webPid);
    writeStream.write(web.pid.toString());
}


startJsServer();
startWeb();

// process.on('SIGINT', function() {

// });
