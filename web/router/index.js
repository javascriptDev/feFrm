var fetch = require('../fetch');
var fs = require('fs');
var path = require('path');

module.exports = {
    '/': function(index) {
        return function*() {
            //页面需要接口集合

            var java = {
                product: 'http://mapi.egou.com/rest?method=super.index.products.get&site=1'
            }

            //获取页面所需所有数据
            var pageData = yield fetch(java);

            //页面需要引入的css
            pageData.joeCss = ['http://static.egou.com/header/css/egou_headerv2.0.css', 'css/main.css']

            //数据兼容
            pageData.product = pageData.product && pageData.product.data && pageData.product.data.productList || {};

            pageData.list = fs.readFileSync(path.join(__dirname, '../template/product.html'));

            //渲染界面
            yield this.render('index', pageData);
        }

    }

}
