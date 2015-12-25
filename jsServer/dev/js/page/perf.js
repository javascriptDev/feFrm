define(function(require, exports, module) {

    var share = require('js/component/share'),
        util = require('js/component/util'),
        client = require('js/tools/client'),
        date = require('js/tools/date');


    var uid = client.getUid() || '';
    $AvailableBalance = $('.AvailableBalance'),
        $expectFeedBackAmt = $('.expectFeedBackAmt'),
        $olBtn = $('[data-type="oldParam"]'),
        $count = $('.msgCount'),
        $msgAlert = $('.order_num'),
        $mask = $('.loading-mask'),
        getEt = date.getEndDate,
        $more = $('.p-more'),
        perfPage = share.prPage,
        srPage = share.srPage;

    /**
     * 渲染页面
     * @param  {string} uid 用户id
     * @return {undefined}
     */
    function render(uid) {
        var $p = $('.active').parent(),
            key = $p.attr('data-type');
        var date = util.getDate(),
            bt = getEt(date, key == 'yd' ? -1 : key == '7d' ? -7 : -30).join('-');
        et = getEt(date, -1).join('-');

        $olBtn.attr('data-ts', 'bt=' + bt + '&' + 'et=' + et);

        //获取余额
        $.get(share.balanceApi(uid), function(data) {
            data = JSON.parse(data);
            var obj = data.data && data.data.accountInfo || {};

            $AvailableBalance.text('￥' + parseFloat(obj.confirmFeedBackAmt || 0).toFixed(2));
            $expectFeedBackAmt.text('￥' + parseFloat(obj.expectFeedBackAmt || 0).toFixed(2));
        })

        getData(bt, et, uid);
        getNewOl(share.newOlApi(uid, localStorage.getItem('lastDate') || util.getTime().join('')));
    }

    window.render = function() {
        render(uid);
    };

    // if(!uid){
       
    //     return;
    // }
    render(uid);

    var cache = {};



    /**
     * 页面交互的事件处理函数
     */
    $('.result').delegate('[data-click]', 'click', function() {
        var $this = $(this),
            type = $this.attr('data-type');
        switch (type) {
            case 'balance':
                //钱包
                banlance();
                break;
            case 'old':
                //订单列表页面
                client.hideWarn();
                localStorage.setItem('lastDate', util.getTime().join(''));
                client.newPage(share.olUrl('?h5_uid=' + (uid)));
                break;
            case 'yd':
                //昨日
                tab($this, -1);
                break;
            case '7d':
                //7天
                tab($this, -7);
                break;
            case '30d':
                // 30天
                tab($this, -30);
                break;
            case 'oldParam':
                //带参数的订单列表
                client.hideWarn();
                localStorage.setItem('lastDate', util.getTime().join(''));
                client.newPage(share.olUrl('?h5_uid=' + (uid) + '&' + $this.attr('data-ts')));
                break;
            case 'more':
                client.newPage(perfPage, 0, 2);
                break;
            case 'sr':
                client.newPage(srPage, 0,-1);
            default:
                break;
        }
    })



    /**
     * 切换tab,改变数据显示
     * @param  {JQ Object} $scope   元素
     * @param  {Number} dc          +-天数
     * @return {undefined}
     */
    function tab($scope, dc) {
        var span = $scope.find('span');
        if (span.hasClass('active')) {
            return;
        }
        $('.active').removeClass('active');
        span.addClass('active');

        var date = util.getDate();
        bt = getEt(date, dc).join('-');
        et = getEt(date, -1).join('-');

        var key = '';
        if (dc == -1) {
            key = 'yd';
        } else if (dc == -7) {
            key = '7d';
        } else {
            key = '30d';
        }
        cache[key] ? (setText(cache[key]), $olBtn.attr('data-ts', 'bt=' + bt + '&' + 'et=' + et)) : getData(bt, et, uid, function() {
            $olBtn.attr('data-ts', 'bt=' + bt + '&' + 'et=' + et)
        })
    }


    /**
     * 获取数据,渲染数据汇总,订单汇总
     * @param  {string} bt 开始时间
     * @param  {string} et 结束时间
     * @return {undefined}
     */
    function getData(bt, et, uid, fn) {
        $.get(share.yjApi(bt, et, uid), function(data) {
            data = JSON.parse(data);
            var obj = data && data.data && data.data.performance || {};
            setCache(bt, et, obj);
            setText(obj);
            fn && fn();
            $mask.hide();
        })
    }

    /**
     * 设置文字
     * @param {object} data 数据
     */
    function setText(data) {
        $('[data-val]').each(function(index, item) {
            $(this).text(data[$(this).attr('data-val')] || 0);
        })
    }

    /**
     * 缓存
     * @param {string} bt   开始时间
     * @param {string} et   结束时间
     * @param {object} data 数据
     */
    function setCache(bt, et, data) {
        var diff = new Date(et).getTime() - new Date(bt).getTime();
        var key = '';
        if (diff == 0) {
            key = 'yd';
        } else if (diff == 547200000) {
            key = '7d';
        } else {
            key = '30d';
        }
        cache[key] = data;
    }


    /**
     * 客户端交互,调钱包页面
     * @return {undefined}
     */
    function banlance() {
        client.shipWallet();
    }

    function getNewOl(url) {
        $.get(url, function(data) {
            data = JSON.parse(data);
            var num = data && data.data && data.data.num || 0;
            if (num != 0) {
                client.showWarn();
                $msgAlert.html('+' + num + '订单').show();
            } else {

                $msgAlert.hide();
                client.hideWarn();
            }
        })
    }

})
