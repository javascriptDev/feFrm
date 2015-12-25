define(function(require) {

    var Calendar = require('js/component/calendar');
    var tpl = require('js/lib/template');
    var rem = require('js/lib/rem');
    var client = require('js/tools/client');
    var share = require('js/component/share');
    var wf = require('js/component/waterfull');
    var DateHelper = require('js/tools/date');
    var util = require('js/component/util');



    var uid = client.getUid() || 40 || 'no-userId',
        render = tpl.compile(list),
        api = share.plApi(uid),
        indicator = document.querySelector('.wf-indicator'),
        $list = $('.list'),
        $loader = $('.loading-mask'),
        req_params = {
            beginTime: DateHelper.getEndDate(util.getDate(), -30).join('-'),
            endTime: DateHelper.getEndDate(util.getDate(), -1).join('-'),
            olType: '1'
        },
        $ok = $('.submit'),
        $cancel = $('.cancelBtn'),
        $7d = $('.sd'),
        $30d = $('.td'),
        mask = document.querySelector('.date-get'),
        $container = $('.date-get-inner'),
        date = util.getDate(),
        $tb = $('.tb'),
        $nofind = $('.nofind'),
        $time = $('.time'),
        $selText = $('.sel-text'),
        $group = $('.group'),
        $toast = $('.toast');

    //上拉刷新
    var wfCmp = new wf({
        url: api,
        indicator: indicator,
        params: {
            test: true,
            pageNum: 1,
            pageSize: 20
        },
        page: 1,
        target: $list,
        success: function(err, data, isInited) {
            $loader.hide();
            data = data.data && data.data.PerformanceList || [];
            if (data.length == 0) {
                if (!wfCmp.inited) {
                    $nofind.show();
                }
                wfCmp.destroy();
            } else {
                $nofind.hide();

                $list.append(render({
                    list: {
                        code: req_params.olType,
                        data: data
                    },
                    md: function(date) {
                        date = (date || '').split('-') || [];
                        return date[1] + '-' + date[2];
                    },
                    year: function(date) {
                        return (date || '').split('-')[0] || '';
                    },
                }));
            }
        },
        addition: 45,
        before: function() {
            this.params.pageNum = this.page;
            $.extend(this.params, req_params)

        },
        needFirst: 1
    })

    indicator.style.display = 'none';

    var end = new Calendar({
        height: 150,
        max: date,
        title: '开始日期',
        container: $container[0],
        end: function() {
            $('.check').removeClass('check');
        }
    });
    var begin = new Calendar({
        height: 150,
        max: date,
        cls: 'date2',
        title: '结束日期',
        container: $container[0],
        end: function() {
            $('.check').removeClass('check');
        }
    });

    initSum(req_params.beginTime, req_params.endTime, req_params.olType);
    DayClick();
    $time.text(req_params.beginTime + ' 至 ' + req_params.endTime);


    function initSum(bt, et, olType) {
        $.get(share.yjApi(bt, et, uid) + '&olType=' + olType, function(data) {
            data = JSON.parse(data);
            var data = getData(data && data.data && data.data.performance || {})

            var html = '<div><span>浏览 ' + (data.browse || 0) + '</span><span>订单 ' + (data.orders || 0) + '</span></div><div><span>点击 ' + (data.clicks || 0) + '</span><span>收益 ￥' + (data.banlance || 0) + '</span></div>'
            $('.right').html(html);
        })
    }

    function getData(data) {
        var type = req_params.olType,
            orders, banlance;

        switch (type) {
            case '1':
                orders = data['productionOrder'];
                banlance = data['estimatedReturn'];
                break;
            case '2':
                orders = data['recordOrders'];
                banlance = data['soonBalance'];
                break;
            case '3':
                orders = data['settlementOrders'];
                banlance = data['availableBalance'];
                break;
            default:
                break;
        }


        return {
            browse: data.browseNumber,
            clicks: data.clicks,
            orders: orders,
            banlance: banlance
        };
    }

    //客户端调用
    window.show = function() {
        $group.removeClass('show');
        mask.style.left = '0';
        $tb.show();
    }


    function hide() {
        mask.style.left = '100%';
        $tb.hide();
        client.hideLayer();
    }

    function DayClick() {
        var bt = DateHelper.getEndDate(util.getDate(), -1);
        var et = DateHelper.getEndDate(util.getDate(), -30);
        begin.setDay(bt);
        begin.setPos(bt);
        end.setDay(et);
        end.setPos(et);

        if ($30d.hasClass('check')) {
            return;
        }
        $('.check').removeClass('check');

        $30d.addClass('check');
    }

    function showToast(text, timeout) {
        $toast.text(text).show();
        setTimeout(function() {
            $toast.hide();
        }, timeout || 2000);
    }

    //交互
    ! function() {
        $7d.click(function() {
            var bt = DateHelper.getEndDate(util.getDate(), -1);
            var et = DateHelper.getEndDate(util.getDate(), -7);
            begin.setDay(bt);
            begin.setPos(bt);

            end.setDay(et);
            end.setPos(et);
            if ($7d.hasClass('check')) {
                return;
            }
            $('.check').removeClass('check');

            $7d.addClass('check');
        })

        $30d.click(function() {
            DayClick();
        })



        $ok.click(function() {
            var et = end.getVal().join('-'),
                bt = begin.getVal().join('-'),
                btStamp = new Date(et).getTime(),
                etStamp = new Date(bt).getTime()
            if (etStamp < btStamp) {
                showToast('结束日期必须大于开始日期！');
                return;
            }

            req_params.beginTime = et;
            req_params.endTime = bt;


            $loader.show();
            $time.text(req_params.beginTime + ' 至 ' + req_params.endTime);
            wfCmp.rebuild(function() {
                $list.html('');
                indicator.style.display = 'none';
            }, true)
            initSum(req_params.beginTime, req_params.endTime);
            begin.setPos(date);
            end.setPos(date);
            $container.find('.check').removeClass('check');
            hide();

        })

        $cancel.click(function() {
            hide();
        })

        $selText.click(function() {
            $group.toggleClass('show');
        })

        $group.delegate('div', 'click', function() {
            var $this = $(this),
                val = $this.attr('value');
            req_params.olType = val;
            $loader.show();
            $list.html('');

            wfCmp.rebuild(undefined,true);
            initSum(req_params.beginTime, req_params.endTime, req_params.olType);

            indicator.style.display = 'none';
            $selText.text($this.text());
            $group.toggleClass('show');

        })
    }()

})
