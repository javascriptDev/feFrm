;
define('js/component/waterfull', function(require, exports, module) {


    var lazyload = require('js/component/lazyload');

    //private var
    var body = document.body,
        wh = document.documentElement.clientHeight;

    //exports
    module.exports = wf;

    /**
     * 瀑布刘构造函数
     * @param  {Object} opt 配置参数
     * @return {wf}     
     */
    function wf(opt) {
        this.url = opt.url,
            //锁,loading数据时,防止多次下拉请求接口
            this.lock = 0,
            //当前页码
            this.page = opt.page || 2,
            //接口参数
            this.params = opt.params || {},
            //是否需要产出第一屏数据
            this.needFirst = opt.needFirst,
            //请求之前,钩子函数
            this.before = opt.before,
            //loading  指示器
            this.indicator = opt.indicator,
            //取数据回调函数
            this.success = opt.success,
            //瀑布流事件对象
            this.target = opt.target,
            //是否需要销毁组件
            this.needDestroy = 1,
            this.ignore = 0,
            //附加高度
            this.addition = opt.addition,
            //滚动检测函数
            this.scrollTest = scrollTest,
            //是否初始化
            this.inited = 0,

            this.timeout = opt.timeout || 4000;
        this.timeoutHandler = undefined;

        this.img = opt.img || '.list_left img';

        this.init(),
            this.needFirst && this.fetch()
    }

    /**
     * 拓展原型
     * @type {Object}
     */
    wf.prototype = {
        init: _init,
        fetch: _fetch,
        loading: _loading,
        loaded: _loaded,
        rebuild: _reBuild,
        destroy: _destroy,
        reLive: _reLive,
        die: _die,
        nextPage: _nextPage
    };

    /**
     * 初始化
     * @return {undefined} 
     */
    function _init() {
        var me = this;
        var wo = window.onscroll;
        var style = this.indicator.style;
        // style.background = 'url(/images/pull.gif)';
        style.backgroundSize = '100% 100%';
        window.onscroll = function() {
            typeof wo == 'function' && wo();
            me.scrollTest && me.scrollTest();
        }
    }

    /**
     * 销毁事件,不在监听滚动
     * @return {undefined}
     */
    function _die() {
        this.scrollTest = undefined;
    }

    /**
     * 复活,从新初始化
     * @return {undefined}
     */
    function _reLive(doNotInit) {
        if (this.isdestroy == 1) {
            this.scrollTest = scrollTest;
            this.isdestroy = 0;
            !doNotInit && this.init();
            this.lock = 0;
            this.indicator.innerHTML = 'Loading...';
            // this.indicator.style.display = 'block';
           
        }
    }
    /**
     * 滚动检测
     * @return {undefined}
     */
    function scrollTest() {
        var me = this;
        if (me.lock) return;
        if (me.ignore) {
            me.ignore = 0;
            return;
        }

        (window.scrollY >= (body.offsetHeight - wh - me.addition)) && (me.lock = 1, me.fetch())
    }
    /**
     * 假死(滑动不在请求数据)
     * @return {undefined}
     */
    function _destroy() {
        var me = this;
        // this.scrollTest = function() {
        //     if (window.scrollY >= (body.offsetHeight - wh - me.addition)) {
        //         if (me.lock) return;
        //         me.indicator.style.display = 'block';
        //         me.lock = 1;
        //         setTimeout(function() {
        //             me.indicator.style.display = 'none';
        //             me.ignore = 1;
        //             me.lock = 0;
        //         }, 1000)
        //     }
        // };
        // setTimeout(function() {
        //     window.scrollTo(0, window.scrollY - me.indicator.offsetHeight + 10);

        // }, 1000)
        this.scrollTest = undefined;
        this.indicator.style.backgroundImage = 'url("aaa")';
        this.indicator.innerHTML = '没有数据了..';
        this.indicator.style.textIndent = '0';
        this.isdestroy = 1;
        this.inited = 0;
        return;
    }

    /**
     * 加载数据中.处理函数
     * @return {undefined} 
     */
    function _loading() {
        this.indicator.style.display = 'block';
    }

    /**
     * 周期最后一步
     * @param  {Object or Array} data 请求返回的数据
     * @return {undefined}     
     */
    function _loaded(data) {
        this.timeoutHandler = undefined;
        this.success && (typeof data == 'string' ? this.success(data, this.inited) : this.success(undefined, data, this.inited))
        this.lock = 0;
        if (!this.isdestroy) {
            lazyload.prototype.renderImage(this.target, this.img);
            this.indicator.style.display = 'none';

            !this.inited && (this.inited = 1);
        }
    }

    /**
     * 获取数据
     * @param  {Function} fn 回调函数
     * @return {undefined}     
     */
    function _fetch(fn) {
        var me = this;
        this.before && this.before.call(this);
        var me = this;
        this.timeoutHandler = setTimeout(function() {

        }, this.timeout);
        this.loading();
        $.ajax({
            url: me.url,
            data: me.params,
            success: function(data) {
                typeof fn == 'function' && fn.call(me, data);
                me.loaded(data);
                !me.isdestroy && me.page++;

            },
            error: function(err) {
                me.loaded('ajax error');
            },
            dataType: 'json'
        })
    }

    /**
     * 重新构建
     * @param  {Function} fn 取数据回调函数
     * @return {undefined} 
     */
    function _reBuild(fn, needReLive) {
        this.page = 1;
        this.inited = 0;

        needReLive && this.reLive(true);
        this.fetch(fn);
        this.ignore = 1;
    }

    /**
     * 下一页加载
     * @return {[type]} [description]
     */
    function _nextPage() {
        this.page++;
        this.lock = 1, this.fetch();
    }

})
