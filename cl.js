var fs = require('fs');

function getDate(prefix) {
    var date = new Date();
    return prefix + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '.js';
}

var p = __dirname + '/logs/web/console/' + getDate('log-');
var ws = fs.createWriteStream(p);
ws.write('');
ws.end();
process.stdout.write('log ---->' + p + " has cleared");
