define('js/component/util', function(require, exports, module) {

    /**
     * 导出函数
     * @type {Object}
     */
    module.exports = {
        urlParse: urlParse,
        getChannelType: getChannelType,
        isWeixin: is_weixn,
        isIos: isIos,
        isAndroid: isAndroid,
        delSpace: _delSpace,
        getDate: _getdate,
        Guid: _guid,
        getTime: _getTime,
        injectCss: _injectCss
    }

    function _guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    function _injectCss() {
        var width = document.documentElement.clientWidth;
        var s = document.createElement('style');
        s.innerHTML = '.rtop{background-size:100% 100% !important;}.list_top .list_left{height:' + width * 0.36 + 'px;max-height:'+width * 0.36 +'px;overflow:hidden;}';
        document.getElementsByTagName("head")[0].appendChild(s);


    }

    function _getTime() {
        var date = new Date();

        return [date.getFullYear(), '-', date.getMonth() + 1, '-', date.getDate(), ' ', date.getHours(), ':', date.getMinutes(), ':', date.getSeconds()].map(function(item) {
            if (typeof item == 'number' && item < 10) {
                return '0' + item
            } else {
                return item
            }
        });
    }

    function _getdate() {
        var date = new Date();
        return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    }
    /**
     * 删除字符串空格
     * @param  {String} str 输入字符串
     * @return {String}     输出字符串
     */
    function _delSpace(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '').replace(/[\r\n]/g, "");
    }

    /**
     * 判断当前平台是否是IOS
     * @return {Boolean} 
     */
    function isIos() {
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }

    /**
     * 判断当前平台是不是android
     * @return {Boolean}
     */
    function isAndroid() {
        var u = navigator.userAgent;
        return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
    }

    /**
     * 判断当前环境是不是微信
     * @return {Boolean} 
     */
    function is_weixn() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    }

    /**
     * url字符串转成对象
     * @param  {String} str url字符串=location.search
     * @return {Object}     url对象
     */
    function urlParse(str) {
        if (typeof str !== 'string') {
            return {};
        }

        str = $.trim(str).replace(/^(\?|#|&)/, '');

        if (!str) {
            return {};
        }

        return str.split('&').reduce(function(ret, param) {
            var parts = param.replace(/\+/g, ' ').split('=');
            var key = parts[0];
            var val = parts[1];

            key = decodeURIComponent(key);

            // missing `=` should be `null`:
            // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
            val = val === undefined ? null : decodeURIComponent(val);

            if (!ret.hasOwnProperty(key)) {
                ret[key] = val;
            } else if (Array.isArray(ret[key])) {
                ret[key].push(val);
            } else {
                ret[key] = [ret[key], val];
            }

            return ret;
        }, {});
    }

    /**
     * 获取平台类型
     * @return {Number} [description]
     */
    function getChannelType() {
        var ua = window.navigator.userAgent.toLowerCase();
        var channel = "8";
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            channel = "4";
        } else if (ua.match(/QQBrowser/i) == 'qqbrowser' || ua.match(/MQQBrowser/i) == 'mqqbrowser' || ua.match(/QQ/i) == 'qq') {
            channel = "5";
        } else if (ua.match(/Weibo/i) == 'weibo') {
            channel = "2";
        } else if (ua.match(/Alipay/i) == 'alipay') {
            channel = "7";
        }
        return channel;
    }
})
