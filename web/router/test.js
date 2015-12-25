var fetch = require('../fetch');
var fs = require('fs');
var path = require('path');

module.exports = {
    '/': function(index) {
        return function*() {
            //页面需要接口集合

            yield this.render('test', {});
        }

    }
}
