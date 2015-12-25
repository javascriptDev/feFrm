;
define('js/component/tab', function(require, exports, module) {

    module.exports = Tab;

    /**
     * 轮播组件
     * @param {object} opt 组件配置
     */
    function Tab(opt) {
        //锁
        this.lock = 0;
        //当前索引
        this.index = 0;
        //每个item 宽度
        this.itemWidth = opt.itemWidth || document.documentElement.clientWidth;
        //滑动百分比换页
        this.limit = this.itemWidth * 0.3;
        //事件主体
        this.target = opt.target;
        //页面总数
        this.max = opt.count - 1;
        //自动切换页面时间
        this.timeout = opt.timeout;
        //循环计时句柄
        this.timeHandler = undefined;
        //列表touch时的位置
        this.basePosition = 0;
        //是否只是手滑换页
        this.isCarousel = opt.isCarousel;
        //换页之前
        this.beforeTurn = opt.beforeTurn;
        //换页之后
        this.afterTurn = opt.afterTurn;

        this.tab = opt.tab;
        this.tabSelector = opt.tabSelector;
        this.selectIndicator = opt.selectIndicator;
        this.els = opt.els;

        this.init();
    }

    Tab.prototype = {
        /**
         * 初始化组件
         * @return {undefined} 无返回值
         */
        init: function() {
            //初始化inner 宽度
            this.target.style.width = (this.max + 1) * 100 + '%';
            //初始化item宽度
            $(this.target).find('[data-tab]').css('width', 100 / (this.max + 1) + '%');

            this.autoRun && this.run();
            this.addEvent();
            this.set3D();
            this.fixPos();
        },
        /**
         * 强制gpu加速
         * @param  {Number} noDelay 动画完成时间
         * @return {undefined}  无返回值
         */
        set3D: function(noDelay) {
            var target = this.target;
            ['webkitTransition', 'transition'].forEach(function(item) {
                target.style[item] = 'left ' + (noDelay ? 0 : 0.3) + 's';
            })
        },
        /**
         * 添加事件
         */
        addEvent: function() {
            var me = this;

            this.tab.delegate('[' + this.tabSelector + ']', 'click', function() {
                var $this = $(this),
                    ts = me.tabSelector,
                    cs = me.selectIndicator;

                if ($this.hasClass(cs)) return;

                var $lastEl = $('.' + cs),
                    lastPage = $lastEl.attr(ts);
                var currentPage = $this.attr(ts);
                me.index += (currentPage - lastPage);

                $lastEl.removeClass(cs);
                $this.addClass(cs);
                me.beforeTurn && me.beforeTurn(currentPage, lastPage);
                me.set3D();
                me.reset();
                me.fixPos();
                me.afterTurn && me.afterTurn(currentPage, lastPage);

            })
            if (!this.isCarousel) {
                return;
            }
            var el = this.target;
            var bx = 0,
                by = 0;

            el.addEventListener('touchstart', function(e) {
                e.stopPropagation();

                if (me.lock) return;
                //记录x,y为move判断提供基础数据
                var touch = e.touches[0];
                bx = touch.clientX;
                by = touch.clientY;
                me.basePosition = parseInt(me.target.style.left);
                //取消计时器
                clearInterval(me.timeHandler);
                me.set3D(1);
            });
            el.addEventListener('touchmove', function(e) {

                if (me.lock) return;

                var touch = e.touches[0];
                var cx = touch.clientX,
                    cy = touch.clientY,
                    //对边
                    opposite = Math.abs(cx - bx),
                    //邻边
                    adjacent = Math.abs(cy - by);
                //滑动两点夹角<30度,认为是上下滚动.此时,不执行轮播滑动逻辑.走系统默认行为  
                if (Math.atan(opposite / adjacent) / Math.PI * 360 > 45) {
                    !me.isCarouselMove && (me.isCarouselMove = 1);

                    e.stopPropagation();
                    e.preventDefault();
                    var distance = cx - bx;

                    distance > 0 ? me.right(distance) : me.left(distance);

                } else {
                    me.isCarouselMove && e.preventDefault();
                }
            });

            el.addEventListener('touchend', function(e) {
                e.stopPropagation();

                me.set3D();
                me.reset();
                me.lock = 0;
                me.autRun && me.run();
            });
        },
        /**
         * 循环换图
         * @return {undefined} 无返回值
         */
        run: function() {
            var me = this;
            this.timeHandler = setInterval(function() {
                me.index++;
                me.reset();
                me.set3D();

                me.fixPos();
            }, this.timeout)
        },
        /**
         * 滑动位移
         * @param  {Number} distance 滑动的路程
         * @return {undefined}        无返回值
         */
        go: function(distance) {
            this.target.style.left = this.basePosition + distance + 'px';
        },
        /**
         * 换页动画
         * @param  {Number} distance  路程
         * @param  {String} direction 滑动方向
         * @return {undefined}        无返回值
         */
        move: function(distance, direction) {
            if (Math.abs(distance) >= this.limit) {
                this.lock = 1;
                if (direction == 'left') {
                    this.index++;
                } else {
                    this.index--;
                }
                this.tab.find('.' + this.selectIndicator).removeClass(this.selectIndicator);
                this.tab.find('[' + this.tabSelector + '="' + (this.index < 0 ? this.index + this.max + 1 : this.index) % (this.max + 1) + '"]').addClass(this.selectIndicator)
                this.set3D();
                this.reset();
                this.fixPos();
            } else {
                this.go(distance)
            }
        },
        /**
         * 左移
         * @param  {Number} distance 移动路程
         * @return {undefined}       无
         */
        left: function(distance) {
            // if (this.index == this.max) {
            //     return;
            // }
            this.move(distance, 'left');
        },
        /**
         * 右移
         * @param  {Number} distance 移动路程
         * @return {undefined}       无
         */
        right: function(distance) {
            // if (this.index == 0) {
            //     return;
            // }
            this.move(distance, 'right');
        },
        /**
         * 修正位置
         * @return {undefined} 无
         */
        fixPos: function() {


            var index = this.index,
                max = this.max + 1,
                prev = (index % max - 1) % max,
                next = (index % max + 1) % max;
            prev < 0 && (prev += max);
            next < 0 && (next += max)

            if (index == this.max) {
                next = 0;
            } else if (index == 0) {
                prev = this.max;
            }

            this.els[prev].style.transform = 'translateX(' + ((this.index - 1) * this.itemWidth - this.els[prev].offsetLeft) + 'px)';
            this.els[prev].style.webkitTransform = 'translateX(' + ((this.index - 1) * this.itemWidth - this.els[prev].offsetLeft) + 'px)';
            this.els[next].style.webkitTransform = 'translateX(' + ((this.index + 1) * this.itemWidth - this.els[next].offsetLeft) + 'px)';
            this.els[next].style.transform = 'translateX(' + ((this.index + 1) * this.itemWidth - this.els[next].offsetLeft) + 'px)';
            this.els[index%max].style.transform = '';
            this.els[index%max].style.webkitTransform = '';

        },
        /**
         * 重置状态
         * @return {undefined} 无
         */
        reset: function() {

            this.target.style.left = -this.index * this.itemWidth + 'px';

            var index = this.index % (this.max + 1);
            index < 0 && (index += this.max + 1);
            
            this.isCarouselMove = 0;
        }
    }
})
