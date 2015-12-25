define(function(require) {
    //need module
    var tpl = require('js/lib/template');
    var util = require('js/component/util');
    var share = require('js/component/share');
    var statistics = require('js/tools/statistics');
    var shuffling = require('js/component/carousel');
    var pageEnum = require('js/component/page');

    //private var
    var query = util.urlParse(location.search);

    if (!query.productId) return;

    var url = share.tdjApi(query.productId),
        channel = util.getChannelType(),
        shareId = query.shareId || '',
        shareUrl = encodeURIComponent(location.href),
        term = query.term || '',
        guid = util.Guid(),
        uid = query.u || '',
        unid = query.unid,
        //点击统计
        clickParam = {
            // 分享id
            shareId: shareId,
            //渠道
            shareChannel: channel,
            //商品id
            productId: query.productId,
            // 所属商家
            businessId: '',
            //目标商家地址
            url: '',
            unid: guid

        },
        //浏览统计
        browseParam = {
            //渠道
            shareChannel: channel,
            // 分享id
            shareId: shareId,
            // 分享url
            url: shareUrl,
            // 唯一id
            unid: guid
        },
        $main = $('.main')
    uid = query.u || '',
        unid = query.unid,
        notStatistics = query.notStatistics;

    !notStatistics && statistics.browse(browseParam);

    var render = tpl.compile(detail_tpl),
        cache = {},
        mask = '',
        isWeixin = util.isWeixin(),
        $el = $('.main');

    //微信内,自跳转一次.
    if (isWeixin) {
        if (!notStatistics) {
            location.href = location.href + '&notStatistics=true';
        }

        if (util.isIos()) {
            mask = '/images/ios.png';
        } else if (util.isAndroid()) {
            mask = '/images/android.png';
        }
        $main.before('<img class="plant-mask" src="' + mask + '" style="width:100%;position:absolute;z-index:999;top:0;display:none;"/>');
    }

    function makeLink() {
        var a = document.querySelector('.btn_box');
        a.setAttribute('biz-itemid', cache.product.item.numIid);
        a.setAttribute('href', cache.product.item.itemUrl);
        a.setAttribute('data-type', 0);
        a.setAttribute('isconvert', 1);
        var s = document.createElement("script"),
            h = document.getElementsByTagName("head")[0];
        if (!window.alimamatk_show) {
            s.charset = "gbk";
            s.async = true;
            s.src = "http://a.alimama.cn/tkapi.js";
            h.insertBefore(s, h.firstChild);
        };
        var o = {
            pid: "mm_32502158_3327973_32878433",
            /*推广单元ID，用于区分不同的推广渠道*/
            appkey: "21155698",
            /*通过TOP平台申请的appkey，设置后引导成交会关联appkey*/
            unid: unid,
            /*自定义统计字段*/
            type: "click" /* click 组件的入口标志 （使用click组件必设）*/
        };
        window.alimamatk_onload = window.alimamatk_onload || [];
        window.alimamatk_onload.push(o);


    }

    $.get(url, function(data) {

        data = JSON.parse(data);
        data = data && data.data && data.data || {};

        clickParam.url = encodeURIComponent(data.product.item.itemUrl);
        clickParam.businessId = data.businessId || '';


        cache = data;
        $main.html(render({
            de: data,
            text: function(type) {
                return type == 1 ? '天猫' : '淘宝';
            },
            fixed: function(val) {
                return parseFloat(val).toFixed(2)
            }
        }));

        $main.show();

        $el.delegate('[data-click]', 'click', function(e) {
            e.preventDefault();
            if (isWeixin) {
                $('.plant-mask').show();
            } else {
                var clickUrl = $(this).attr('href');
                var url = 'http://union.egou.com/to?site=20&shop=719111&fuid=' + uid + '&chn=' + channel + '&term=' + term + '&uniq=' + unid + '&url=' + encodeURIComponent(clickUrl + '&unid=%user%&page='+pageEnum['tdj'])
                statistics.click(clickParam, function() {
                    location.href = url;
                });
            }
        })


        document.title = data.productDetail.title;

        //初始化轮播
        var $banner = $('.banner .inner')
        var itemWidth = $banner.children()[0].offsetWidth;
        $('.banner').css('height', document.documentElement.clientWidth + 'px');

        new shuffling({
            target: $banner[0],
            count: data.product.item.smallImages.length,
            itemWidth: itemWidth,
            indicator: document.querySelector('#position'),
            notRun: 1
        })

        makeLink();
    });
})
