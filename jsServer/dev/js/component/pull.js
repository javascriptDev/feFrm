 ;
 define('js/component/pull', function(require, exports, module) {

     var lazyload = require('js/component/lazyload');

     var statusEnum = {
         Normal: -1,
         BeforeLoad: 0,
         Loading: 1,
         Loaded: 2,
         Done: 3
     }

     var body = document.body;


     module.exports = Pull;


     /**
      * 下拉刷新组件构造函数
      * @param {Object} opt 配置参数
      */
     function Pull(opt) {
         this.lock = 0;
         //下拉取数据回调
         this.success = opt.success;
         //loading logo
         this.indicator = opt.indicator;
         this.normalText = opt.normalText || '下拉刷新数据.'
             //出于夹在状态显示的文字
         this.LoadingText = opt.LoadingText || '加载中...';
         //到达可下拉极限值,提示信息
         this.limitText = opt.limitText || '松手加载数据!';
         //取数据完毕显示的文字
         this.LoadedText = opt.LoadedText || '加载完毕';
         //事件主体
         this.target = opt.target;

         this.timeout = opt.timeout || 5000;
         //加载数据临界点
         this.limit = this.indicator.offsetHeight + (opt.addition || 0);

         //可拉动最大距离
         this.max = 200;
         //接口地址
         this.url = opt.url;
         //接口参数
         this.params = opt.params;
         //当前状态
         this.status = statusEnum.Normal;
         //页面索引
         this.page = 1;

         this.inited = 0;

         this.beginY = opt.y;

         this.before = opt.before;

         this.moveStart = opt.moveStart;

         this.needFirst = opt.needFirst;

         this.done = opt.done;

         this.maxOperation = opt.maxOperation;

         //加载数据超时时间
         this.timeoutHandler = undefined;
         //加载数据超时提示信息
         this.loadError = '加载失败!';

         this.init();
     }


     //原型拓展
     Pull.prototype = {
         /**
          * 对象初始化
          * @return {undefined} 无
          */
         init: function() {
             var style = this.indicator.style;
             // style.background       = 'url(/images/pull.gif)';
             style.backgroundSize = '100% 100%';
             this.addEvent();
             this.needFirst && this.fetch();
         },

         /**
          * 添加事件
          */
         addEvent: function() {
             var by = 0;
             var target = this.target;
             var me = this;

             target.addEventListener('touchstart', function(e) {
                 by = e.touches[0].clientY
             })
             target.addEventListener('touchmove', function(e) {

                 if (body.scrollTop != 0 || me.lock || window.lock) return;

                 var currentY = e.touches[0].clientY;
                 if (currentY < by　 && me.status == statusEnum.Normal) {
                     return;
                 }
                 e.preventDefault();
                 var percent = (currentY - by) / me.max;

                 if (percent > 1) return;

                 var distance = 60 * (1 - Math.pow(1 - percent, 2));
                 if (distance < me.limit) {
                     me.setIndicatorText(me.normalText);
                     me.moveStart && me.moveStart(distance);
                     me.status = statusEnum.Normal;

                 } else if (distance > me.limit) {
                     //防止到达极限值, 继续设置margin top
                     me.maxOperation && me.maxOperation();
                     me.status = statusEnum.BeforeLoad;
                     me.setIndicatorText(me.limitText);
                 }
                 me.moveStart && me.moveStart(distance);
                 me.setTargetPos(me.beginY + distance);


             })

             target.addEventListener('touchend', function(e) {
                 if (me.lock) return;
                 if (me.status == statusEnum.BeforeLoad) {
                     me.lock = 1;
                     me.statusMachine(statusEnum.BeforeLoad);
                     return;
                 }
                 me.statusMachine(statusEnum.Done, 1);
             })
         },

         /**
          * 获取数据
          * @return {undefined} 无
          */
         fetch: function() {

             this.before && this.before.call(this);
             var me = this;
             this.timeoutHandler = setTimeout(function() {
                 if (me.timeoutHandler) {
                     me.reset(me.loadError);
                 }

             }, this.timeout)
             me.params.pageNum = me.page;
             me.statusMachine(statusEnum.Loading);
             $.ajax({
                 url: me.url,
                 data: me.params,
                 success: function(data) {
                     // me.page++;
                     me.statusMachine(statusEnum.Loaded, data);
                 },
                 error: function(err) {
                     me.statusMachine(statusEnum.Loaded, 'ajax error');
                 },
                 dataType: 'json'
             })
         },

         /**
          * 状态机
          * @param  {Enum} status 状态类型
          * @param  {Object} data 数据
          * @return {undefiend}   无
          */
         statusMachine: function(status, data) {
             var me = this;
             switch (status) {
                 case statusEnum.BeforeLoad:

                     this.fetch();
                     break;
                 case statusEnum.Loading:
                     this.setIndicatorText(this.LoadingText);
                     break;
                 case statusEnum.Loaded:
                     me.timeoutHandler = undefined;
                     if (this.status == statusEnum.Normal) {
                         return
                     }

                     this.setIndicatorText(this.LoadedText);
                     typeof data == 'string' ? this.success(data) : this.success(undefined, data);
                     lazyload.prototype.renderImage(me.target, '.list_left img');

                     me.statusMachine(statusEnum.Done);


                     break;
                 case statusEnum.Done:
                     var text = '';


                     this.reset(undefined, data);
                     break;
                 default:
                     break;
             }

         },

         /**
          * 重置状态和属性
          * @return {undefined} 无
          */
         reset: function(text, timeout) {
             var me = this;

             this.lock = 0;
             this.status = statusEnum.Normal;
             text && this.setIndicatorText(text);

             setTimeout(function() {
                 me.setTargetPos(me.beginY);
                 me.done && me.done();
                 me.setIndicatorText(me.normalText);
             }, timeout || 500)
         },

         /**
          * 设置 加载数据状态显示的文字
          * @param {String} text 显示的文字
          */
         setIndicatorText: function(text) {
             this.indicator.innerText != text && (this.indicator.innerText = text);
             return this;
         },
         /**
          * 设置拉动位移
          * @param {Number} pos 位移距离
          */
         setTargetPos: function(pos) {

             this.target.style.marginTop = pos + 'px';
             return this;
         }
     }
 })
