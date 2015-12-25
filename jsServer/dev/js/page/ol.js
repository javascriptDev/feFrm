define(function(require) {
    var util = require('js/component/util');
    var client = require('js/tools/client');
    var share = require('js/component/share');
    var tpl = require('js/lib/template');
    var wf = require('js/component/waterfull');
    var ll = require('js/component/lazyload');

    document.title = '订单明细';

    var urlObj = util.urlParse(location.search),
        bt = urlObj.bt || '',
        et = urlObj.et || '',
        uid = urlObj.h5_uid,
        orderStatus = urlObj.os || 0,
        olApi = share.olApi(),
        $body = $('.body'),
        $mask = $('.loading-mask'),
        cacheMgr = (function() {
            var cache = [];
            return {
                getData: function(id) {
                    for (var i = 0, len = cache.length; i < len; i++) {
                        if (cache[i].id == id) {
                            return cache[i];
                        }
                    }
                },
                add: function(newData) {
                    Object.prototype.toString.call(newData) == '[object Array]' && (cache = cache.concat(newData));
                },
                empty: function() {
                    cache.length = 0;
                }
            }
        }()),
        render = tpl.compile(olListTpl),
        $tab = $('.nav'),
        $nf = $('.nofind'),
        indicator = document.querySelector('.wf-indicator'),
        //在loading 数据不允许操作页面元素
        lock = 0;

    //上拉刷新
    var wfCmp = new wf({
        img: '.order_left img',
        url: olApi,
        indicator: indicator,
        params: {
            test: true,
            pageNum: 1,
            pageSize: 30,
            userId: uid,
            orderStatus: orderStatus,
            beginTime: bt,
            endTime: et
        },
        page: 1,
        target: $body,
        success: function(err, data, isInited) {

            lock = 0;
            $mask.hide();
            data = data && data.data && data.data.orderList || [];
            if (data.length == 0) {
                if (isInited) {
                    wfCmp.destroy();
                } else {
                    $nf.show();
                }
                return;
            }
            cacheMgr.add(data);
            renderList(data);
        },
        addition: 45,
        before: function() {
            lock = 1;
            this.params.pageNum = this.page;
            this.params.orderStatus = $('.active').attr('data-type');

        },
        needFirst: 1
    })

    //lazyload
    new ll({
        main: $('.body')
    })

    indicator.style.display = 'none';

    $body.delegate('[data-click]', 'click', function(e) {
        e.stopPropagation();
        if (lock) return;

        var type = $(this).attr('data-type');
        var id = $(this).attr('data-id');
        var data = cacheMgr.getData(id);
        if (type == 'business') {
            //todo::
            //0 是 好货单品 1 是好货轮播图跳转 2 是专题页单品跳转 3.
            var tu = data.targetUrl || '';
            if (tu == '') {
                return;
            }

            var param = JSON.stringify({
                discountPrice: data.discountPrice || 0,
                returnPrice: data.returnPrice || 0,
                targetUrl: tu,
                itemId: data.productId,
                fromPage: 'ol',
                shopName: data.businessName || '',
                type: 3,
                shareType: '0',
                shopLogo: data.shopLogo || ''
            })
            client.gotoPage(param)
                // location.href = cacheMgr.getData(id).targetUrl || '#';
        } else if (type == 'detail') {
            client.gotoDetail(data.orderNo, data.businessId);
        }
    })
    
    $tab.delegate('a', 'click', function(e) {
        e.stopPropagation();
        if (lock) return;

        window.scrollTo(0, 0);
        var $this = $(this);

        if ($this.hasClass('active')) {
            return;
        }
        $('.active').removeClass('active');

        $this.addClass('active');

        $nf.hide();
        $mask.show();
        var type = $this.attr('data-type');
        $body.html('');
        cacheMgr.empty();

        wfCmp.rebuild(function(data) {}, true)
        indicator.style.display = 'none';
    })

    $('.gotoMain').click(function() {
        client.gotoMain();
    });

    /**
     * 渲染列表
     * @param  {Object} data 数据
     * @return {undefined}
     */
    function renderList(data) {
        $body.append(render({
            ol: data,
            status: function(num, time) {
                if (num == 1) {
                    return '预计 ' + time + ' 结算';
                } else if (num == 2) {
                    return '已结算';
                } else {
                    return '无效';
                }
            },
            type: function(type, cat) {
                if (cat) {
                    if (type == 1) {
                        return '预计'
                    } else if (type == 2) {
                        return '确认';
                    } else {
                        return '';
                    }
                } else {
                    //返回颜色
                    if (type == 1) {
                        return 'yellow';
                    } else if (type == 2) {
                        return 'color01';
                    } else {
                        return '';
                    }
                }

            },
            text: function(num) {
                return parseFloat(num).toFixed(2)
            },
            img: function(val) {
                return val || '/images/hot_product_default.jpg';
            }
        }))
    }
})
