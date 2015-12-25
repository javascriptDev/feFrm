define('js/tools/statistics', function(require, exports, module) {
    var share = require('js/component/share');



    module.exports = {
        click: _click,
        browse: _browse
    }

    function _click(param, fn) {
        var str = '?test=true&';
        for (var i in param) {
            str += i + '=' + param[i] + '&';
        }
        var clickApi = share.clickApi;
        $.get(clickApi + str, function(data) {
            // body...
            data = JSON.parse(data);
            fn && fn();
        })
        setTimeout(function() {
            fn && fn();
        }, 5000);
    }

    function _browse(param) {
        var str = '?test=true&';
        for (var i in param) {
            str += i + '=' + param[i] + '&';
        }
        var browseApi = share.browseApi;
        var img = new Image();
        img.src = browseApi + str;
        console.log(browseApi + str)
    }
})
