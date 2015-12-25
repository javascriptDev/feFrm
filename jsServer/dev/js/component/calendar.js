define('js/component/calendar', function(require, exports, module) {

    var util = require('js/component/util');
    var EventEmitter = require('js/component/EventEmitter');
    var css = require('js/tools/css');

    module.exports = Calendar;


    /**
     * 日历构造函数
     * @param {[type]} opt [description]
     */     
    function Calendar(opt) {
        opt = opt || {};
        //初始化日期
        this.initDate = opt.current;
        //富容器
        this.parent = opt.container;
        //年限跨度
        this.yearStamp = opt.yearStamp || 30;
        this.height = opt.height || 150;
        this.itemHeight = opt.itemHeight || 30;
        this.year = [];
        this.month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.day = [];
        this.max = opt.max;
        this.addCls = opt.cls || '';
        this.title = opt.title;
        this.end = opt.end;
        this.init();
    }

    Calendar.prototype = {
        /**
         * 初始化
         * @return {[type]} [description]
         */
        init: function() {

            _initDom.call(this);

            var date = _getDate();

            this.setAll(date);

            var ih = this.itemHeight;
            this.max && (this.yearMax = (2 - this.year.indexOf(this.max[0])) * ih, this.monthMax = (2 - this.month.indexOf(this.max[1])) * ih, this.dayMax = (2 - this.day.indexOf(this.max[2])) * ih)

            this.addEvent();
            this.render();
            this.setPos(date);


        },
        /**
         * 设置年
         * @param {Array} date [2015-09-02]
         */
        setYear: function(date) {
            var year = date[0];
            var html = '';
            this.year = [];
            var index;
            for (var i = year - this.yearStamp; i < year + this.yearStamp; i++) {
                html += '<div>' + i + '</div>';
                this.year.push(i);
                if (i == year)
                    index = this.year.length - 1;
            }
            this.yearEl.html(html);

            html = undefined;
            year = undefined;
        },
        setMonth: function(date) {

            this.monthEl.html(this.month.map(function(item) {
                return '<div>' + item + '</div>'
            }).join(''));
        },
        setDay: function(date, y) {
            this.day.length = 0;
            var days = getDays(date);
            var dayHtml = '';
            for (var i = 1; i <= days; i++) {
                dayHtml += '<div>' + i + '</div>';
                this.day.push(i);
            }
            this.dayEl.html(dayHtml);
            dayHtml = undefined;
            day = undefined;
        },
        /**
         * 聚合操作
         * @param {[type]} date [description]
         */
        setAll: function(date) {
            this.setYear(date);
            this.setMonth(date);
            this.setDay(date);
        },
        /**
         * 设置显示日期位置
         * @param {[type]} date [description]
         */
        setPos: function(date) {

            var ih = this.itemHeight,
                add = this.itemHeight * 2,
                year = parseInt(date[0]),
                month = parseInt(date[1]),
                y = this.yearEl,
                m = this.monthEl,
                d = this.dayEl,
                yd = (2 - this.year.indexOf(year)) * ih,
                md = (2 - this.month.indexOf(month)) * ih,
                dd = !this.day[parseInt(date[2])] ? this.day.length : date[2],
                dd = -(dd - 3) * ih;

            this
                .move(y, yd)
                .move(m, md)
                .move(d, dd)
                .setVal()
        },
        addEvent: function() {
            var originTop, by;
            var me = this;
            var ih = this.itemHeight,
                $body = this.$body,
                direction = '',
                changeType = '';

            $body
                .delegate('.inner', 'touchstart', function(e) {
                    e.preventDefault();
                    var $this = $(this);

                    originTop = parseFloat($this.css('top')),
                        changeType = $this.attr('data-tp'),
                        by = e.touches[0].clientY
                })
                .delegate('.inner', 'touchmove', function(e) {
                    e.preventDefault();

                    var cy = e.touches[0].clientY,
                        distance = cy - by + originTop;

                    me.move($(this), distance),
                        direction = cy > by ? 1 : -1

                })
                .delegate('.inner', 'touchend', function(e) {
                    me.end && me.end();
                    
                    e.preventDefault();
                    var $this = $(this),
                        top = parseFloat($this.css('top'));

                    //保证显示的整数
                    me.move($this, _getDistance(top, ih, direction));

                    if (changeType == 'day') {
                        me.setVal();
                        return;
                    }
                    var val = me.getVal();
                    me.setDay(val, parseInt(me.dayEl.css('top')));
                    me.setPos(val);

                })
                .delegate('.inner div', 'click', function(e) {
                    // console.log(e.target);
                })

            this.toolbar.delegate('div', 'click', function(e) {
                var $this = $(this),
                    cls = $this.attr('class');
                switch (cls) {
                    case 'ok':
                        alert(me.getVal().join('-'));
                        break;
                    case 'cancel':
                        alert('cancel');
                        break;
                    case 'today':
                        me.setPos(_getDate());
                        break;
                    default:
                        return;

                }
            })
        },
        render: function() {
            (this.parent || document.body).appendChild(this.el[0]);
        },
        /**
         * 移动
         * @param  {Jquery} $el      [description]
         * @param  {Number} distance 路程
         * @return {[type]}          [description]
         */
        move: function($el, distance) {
            var ih = this.itemHeight,
                add = ih * 2;

            if (distance > add || (this.height - $el.height() > distance + add)) {
                return this;
            }
            var max = this.max;
            if (max) {
                var type = $el.attr('data-tp');
                if (type == 'day') {
                    if (distance < this.dayMax && _getMonth.call(this) == max[1]) {
                        distance = this.dayMax;
                    }

                } else {
                    if (type == 'year') {
                        if (distance < this.yearMax) distance = this.yearMax;
                    } else {
                        if (distance < this.monthMax) distance = this.monthMax;
                    }

                }

            }


            $el.css('top', distance);
            return this;
        },
        getVal: function() {
            var h = this.itemHeight;
            var year = _getYear.call(this),
                month = _getMonth.call(this),
                day = _getDay.call(this);

            month = month < 10 ? '0' + month : month;
            day = day < 10 ? '0' + day : day;
            return [year, month, day];

        },
        setVal: function() {
            this.titleEl.text(this.getVal().join('-'));
        }
    }


    /**
     * 初始化dom
     * @return {[type]} [description]
     */
    function _initDom() {
        var html = this.title ? "<div class='" + this.addCls + "'><div class=date-title>" + this.title + "</div>" : "";

        html += "<div class='date-cmp'><div class='rule1'></div><div class='rule2'></div><div class='rule3'></div><div class='title'></div><div class='date-body'><div class='year'><div data-tp='year' class='inner'></div></div><div class='month'><div data-tp='month' class='inner'></div></div><div class='day'><div data-tp='day' class='inner'></div></div></div><div class='toolbar'><div class='ok'>确定</div><div class='today'>今天</div><div class='cancel'>取消</div></div></div>";
        var cssStr = '.date-title{width:100%;text-align:center;color:#ddd;height:30px;line-height:30px;}*{padding:0;margin:0}.date-cmp{width:80%;margin:0 10%;border:1px solid #ccc;position:relative;font-weight:700}.title{width:100%;height:30px;line-height:30px;text-align:center;color:red;border-bottom:2px solid #f43f48;color:#f43f48}.date-body{position:relative;height:150px;width:100%;-webkit-box-shadow:inset 0 14px 11px 0 rgba(255,255,255,0.6);-moz-box-shadow:inset 0 14px 11px 0 rgba(255,255,255,0.6);box-shadow:inset 0 14px 11px 0 rgba(255,255,255,0.6)}.rule1,.rule2,.rule3{position:absolute;top:90px;border-bottom:2px solid #f43f48;border-top:2px solid #f43f48;width:18%;height:30px}.rule1{left:7%}.rule2{left:40%}.rule3{left:73%}.date-body>div{width:33.33%;float:left;height:100%;position:relative;overflow:hidden}.inner{position:absolute;top:0;width:100%;transition:.0s top;-webkit-transition:.0s top;will-change:transform;transform:translateZ(0);-webkit-transform:translateZ(0)}.inner>div{text-align:center;width:100%;height:30px;line-height:30px}.toolbar{height:30px;border-top:1px solid #ccc;color:#555;font-size:13px}.toolbar div{border-right:1px solid #ccc;width:32.7999%;text-align:center;display:inline-block;line-height:30px;height:28px}.toolbar div:last-child{border:0}';
        this.title && (html += '</div>');
        var $c = $(html, {
            'position': 'relative'
        })
        css.inject(cssStr);

        this.el = $c;

        this.yearEl = $c.find('.year .inner');
        this.monthEl = $c.find('.month .inner');
        this.dayEl = $c.find('.day .inner');
        this.$body = $c.find('.date-body');
        this.titleEl = $c.find('.title');
        this.toolbar = $c.find('.toolbar');
    }

    /**
     * 获取格式化日期
     * @return {[type]} [description]
     */
    function _getDate() {
        var date = new Date();
        return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    }
    /**
     * 获取每月的天数
     * @param  {[type]} date [description]
     * @return {[type]}      [description]
     */
    function getDays(date) {
        var year = parseInt(date[0]),
            month = parseInt(date[1]),
            dayPerMonth = undefined;

        if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) != -1) {
            dayPerMonth = 31;
        } else if ([4, 6, 8, 9, 11].indexOf(month) != -1) {
            //30天
            dayPerMonth = 30;
        } else {
            if ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)) { //闰年
                dayPerMonth = 29;
            } else {
                dayPerMonth = 28
            }
        }
        return dayPerMonth;
    }

    /**
     * 获取每个整数item移动的距离
     * @param  {Number} dis 移动距离
     * @param  {Number} h   每个item高度
     * @return {Number}     需要移动的距离
     */
    function _getDistance(dis, h, direction) {
        var ratio = dis / h;
        return direction > 0 ? Math.ceil(ratio) * h : Math.floor(ratio) * h;
    }

    /**
     * 获取天
     */

    function _getDay() {
        return Math.abs(parseInt(this.dayEl.css('top') || 0) / this.itemHeight - 3);
    }

    /**
     * 获取月份
     * @return {[type]} [description]
     */
    function _getMonth() {
        return Math.abs(parseInt(this.monthEl.css('top') || 0) / this.itemHeight - 3)
    }

    /**
     * 获取年份
     * @return {Number} [description]
     */
    function _getYear() {
        return this.year[Math.abs(parseInt(this.yearEl.css('top') || 0) / this.itemHeight - 2)];
    }
})
