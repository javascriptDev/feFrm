var cp = require('child_process');


module.exports = {
	kill:kill
}



/**
 * 杀死进程
 * @param  {Number} pid process id
 * @return {[type]}     [description]
 */
function kill(pid, killTree, signal, callback) {
  signal   = signal   || 'SIGKILL';
  callback = callback || function () {};

  if (killTree && process.platform !== 'win32') {
    psTree(pid, function (err, children) {
      [pid].concat(
        children.map(function (p) {
          return p.PID;
        })
      ).forEach(function (tpid) {
        try { process.kill(tpid, signal) }
        catch (ex) { }
      });

      callback();
    });
  }
  else {
    try { process.kill(pid, signal) }
    catch (ex) {console.log(ex) }
    callback();
  }
};