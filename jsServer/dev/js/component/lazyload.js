;
define('js/component/lazyload', function(require, exports, module) {

    //private var
    var body = document.body,
        wh = document.documentElement.clientHeight;

    //exports
    module.exports = lazyload;

    /**
     * 图片懒加载构造函数
     * @param  {Object} opt 配置参数
     * @return {lazyload}   对象句柄
     */
    function lazyload(opt) {
        this.main = opt.main;
        this.selecotr = opt.selecotr;
        this.init();
    }

    /**
     * 拓展原型
     */
    lazyload.prototype = {
        /**
         * 对象初始化
         * @return {undefined} 无
         */
        init: function() {
            var me = this;
            var wo = window.onscroll;
            window.onscroll = function() {
                typeof wo == 'function' && wo();
                me.renderImage();
            }
        },
        /**
         * 渲染图片
         * @param  {Dom Element} container 图片父容器
         * @param  {String} selecotr       图片选择器
         * @return {undefined}             无
         */
        renderImage: function(container, selecotr) {
            var dom = this.main || container || document.body;
            $(dom).find(selecotr || this.selecotr || 'img').each(function() {
                var $this = $(this);

                if ($this[0].getBoundingClientRect().top < wh && !$this.attr('init')) {
                    var url = $this.attr('csrc');
                    url && $this.attr('src', url).attr('init', 1);
                }
            })
        }
    }



})
