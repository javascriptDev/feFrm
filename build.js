var fs = require('fs');
var co = require('co');
var path = require('path');
var uglify = require('uglify-js')
var ncp = require('ncp').ncp;
var exec = require('child_process').execSync;

"use strict";
var reg = /require(\([^\(\)]*\))/g,
    space = /\s+/g;

//模式类型 dev or dist
var type = process.argv[2];
var version = process.argv[3] || '6';

function mid(arr) {

    var index = arr.indexOf('D:\\yqf/jsServer/dev/js/component/share.js');

    if (index > -1 && type == 'dist') {
        arr.splice(index, 1, 'D:\\yqf/jsServer/dev/js/component/share-dist.js');
    }
    return arr;
}
/*
 * 解析依赖
 */
function parseDeps(fileStr) {
    var result = [];
    var deps = fileStr.replace(space, '').match(reg) || [];



    for (var i = 0, len = deps.length; i < len; i++) {

        result.push(deps[i].replace("require(", '').replace(")", '').replace(/'/ig, '').replace(/"/ig, ''));
    }
    return result;
}

/*
 * 获取依赖
 */
function getDeps(url) {
    var data = fs.readFileSync(url).toString();

    return parseDeps(data);
}

var base = __dirname + '/jsServer/dev/';
var dist = __dirname + '/jsServer/dist/';

/*
 * 获取文件夹下面的文件
 */
function getAllFiles(url, ext) {
    return fs.readdirSync(url).map(item => url + item);
}


/* 
 *获取所有proise
 */

function getPromise(data) {
    var re = [];
    for (var i in data) {
        re.push(Promise.resolve(getDeps(data[i])))
    }
    return re;
}


var list = [];

//递归找到所有的依赖
function* rec(deps) {
    for (var i = 0, len = deps.length; i < len; i++) {
        if (deps[i].length != 0) {
            var data = yield getPromise(deps[i].map(item => item.indexOf('.js') != -1 ? base + item : base + item + '.js'));
            list.push(data);
            yield rec(data);
        }
    }
}


//获取打包所需的配置文件
function getConfig(root) {

    var layer = 0;
    var config = {};
    ((R) => {

        R.forEach((item, index) => {
            var deps = JSON.parse(JSON.stringify(list[0][index]));

            item = item.replace('dev', 'dist')
            config[item] = deps;
            layer++;

            ! function rec(layers) {

                layers && layers.forEach && layers.forEach(d => {
                    if (d.length > 0) {
                        layer++;
                        d.forEach(dd => {
                            config[item].push(dd);
                        })
                        rec(list[layer]);
                    }
                })
            }(list[layer])
        })
    })(root);


    var result = [];
    //使用set 去重
    for (var i in config) {
        result.push({
            fileIn: Array.from(new Set([i.replace('dist', 'dev')].concat(config[i].map(item => {
                if (item.indexOf('.js') == -1) {
                    item = item + '.js';
                }
                return base + item;
            })))),
            fileOut: i.replace(/\//ig, path.sep)
        })
    }
    return result;
}

//打包
function build(cfg) {
    cfg.forEach(item => {
        console.log(item.fileOut + ' begin build..........');
        var inFile = mid(item.fileIn);

        var result = uglify.minify(inFile, {
            //替换变量的时候,不替换require
            mangle: {
                except: 'require'
            },
            compress: {
                drop_debugger: true,
                //discard unreachable code
                dead_code: true,
                // drop unused variables/functions
                unused: true
            }
        });
        var writeStream = fs.createWriteStream(item.fileOut);
        // writeStream.write(out.replace(/(^\s*)|(\s*$)/g, '').replace(/[\r\n]/g, ""));
        writeStream.write(result.code);
        console.log(item.fileOut + " has bulit");
    });

    console.log('!!!!!!!!!!!!!!!!!!!!!!build all js success!!!!!!!!!!!!!!!!!!!!!!');
}

function buildCss() {
    getAllFiles(base + '/css/').forEach((item, index) => {
        if (item.indexOf('.css') != -1) {
            var arr = item.split('/'),
                fname = arr[arr.length - 1],
                fileStr = fs.readFileSync(item).toString();

            var writeStream = fs.createWriteStream(dist + '/css/' + fname);
            writeStream.write(minCss(fileStr));
        } else {
            //is folder
        }

    })
    console.log('!!!!!!!!!!!!!!!!!!!!!!build all css success!!!!!!!!!!!!!!!!!!!!!!');
}

//入口
co(function*(arr) {

        //找到所有需要打包的js
        var all = getAllFiles(base + 'js/page/');

        //找到所有文件的第一层依赖
        var first = yield getPromise(all);
        list.push(first);

        //递归所有依赖
        yield rec(first);
        //根据获得的依赖,整理成打包需要的数据格式
        var cfg = getConfig(all);

        //打包js
        build(cfg);

        //压缩css
        buildCss();


        //归档版本号
        var version = new Date().getTime() * Math.random();
        fs.writeFile('./version.js', 'module.exports = { ver: ' + version + '}', err => {
            if (err) throw err;
        });

        //临时
        temp();
    })
    .catch(function(err) {
        console.log(err)
    });

function minCss(css) {
    var hexcolor = /[0-9a-f]/gi;
    // via http://stackoverflow.com/questions/4402220/regex-to-minimize-css
    css = css.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '');
    css = css.replace(/ {2,}/g, ' ');
    css = css.replace(/ ([{:}]) /g, '$1');
    css = css.replace(/([;,]) /g, '$1');
    css = css.replace(/ !/g, '!');
    css = css.split(": ").join(":");
    css = css.split(";}").join("}");

    // hex color shrinking
    var cssparts = css.split("#");
    for (var i = 1, len = cssparts.length; i < len; i++) {
        if (!cssparts[i] || cssparts[i].length < 6) {
            continue;
        }
        var color = cssparts[i].substring(0, 6);
        if (color.match(hexcolor) == null) {
            continue;
        }
        if (color[0] != color[1] || color[2] != color[3] || color[4] != color[5]) {
            continue;
        }
        var shrunk = color[0] + color[2] + color[4];
        cssparts[i] = shrunk + cssparts[i].substring(6);
    }
    return cssparts.join("#");
}

function minhtml(html) {
    var stripchars = ["\\n", "\\t", "\\r", "\n", "\r", "\t", "  ", ];
    for (var i = 0, len = stripchars.length; i < len; i++) {
        var char = stripchars[i];
        while (html.indexOf(char) > -1) {
            html = html.split(char).join(" ");
        }
    }
    if (html.indexOf("> <") > -1) {
        html = html.split("> <").join("><");
    }
    return html;
}

function temp() {

    console.log('other \n');

    var to = "D:\\dandelion-app-queqiao." + version + "\\gwk-app-web\\src\\main\\webapp\\res";
    var htmlPath = "D:\\dandelion-app-queqiao." + version + "\\gwk-app-web\\src\\main\\webapp\\";
    var from = __dirname + '/jsServer/dist/js/page/';
    var cssFrom = __dirname + '/jsServer/dist/css/'

    ncp(from, to, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('!!!!!!!!!!!!!!!!!!!!!!copy js to product done!!!!!!!!!!!!!!!!!!!!!!');
    });


    //min css
    ncp(cssFrom, to, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('!!!!!!!!!!!!!!!!!!!!!!copy css to product done!!!!!!!!!!!!!!!!!!!!!!');
    });

    fs.readdirSync(htmlPath).map(item => {
        if (path.extname(item) == '.html') {
            return htmlPath + item;
        }
    }).forEach(item => {
        if (!item) return;
        var f = minhtml(fs.readFileSync(item).toString('utf-8'));
        var ws = fs.createWriteStream(item);
        ws.write(f);
        ws.end();
        console.log(item + ' compress done');
    })

}
