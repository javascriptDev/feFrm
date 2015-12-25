var _request = require('request');
var timeout = 1000;
module.exports = function*(data) {
    "use strict";
    var promise = [];
    for (let i in data) {
        promise.push(new Promise((resolve, reject) => {
            _request({
                url: data[i],
                timeout: timeout,
            }, (error, response, body) => {
                var data = {};
                if (error) {
                    data[i] = error.code;
                    resolve(data);
                } else {
                    try {

                        data[i] = JSON.parse(body);
                        resolve(data);
                    } catch (e) {
                        data[i] = e.toString();
                        resolve(data)
                    }
                }
            })
        }));
    }

    return yield Promise.all(promise).then((data) => {
        var result = {};
        data.forEach(item => {
            for (var d in item) {
                result[d] = item[d];
            }
        })
        return result;
    }).catch((re) => {
        return re;
    });
}

//  module.exports = function *(data) {
//  var renderData = {};
//  for (var i in data) {
//      renderData[i] = yield function(callback) {
//                          _request({url:data[i]}, function(error, response, body) {
//                              try {
//                                  console.log(body);
//                                  callback(error, JSON.parse(body ||'{}'));
//                              } catch (e) {
//                                  callback(e)
//                              }
//                          })
//                      }
//  }
//  return renderData;
// }
