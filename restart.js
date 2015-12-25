var fs = require('fs');
var cp = require('child_process');
var ph = require('./processHelper.js')


var jsServerPid = __dirname + '/pid/jsServerPid.js';
var webPid = __dirname + '/pid/webPid.js';

var jsPid = fs.readFileSync(jsServerPid).toString();
var webPid = fs.readFileSync(webPid).toString();


//kill jsServer
ph.kill(jsPid)
console.log('killde jsServer --->' + jsPid);

//kill web
ph.kill(webPid);
console.log('killde web --->' + webPid);

// //启动所有
cp.execSync('npm start');
// process.exit();
