define(function(require) {
    var tpl = require('js/lib/template');
    var util = require('js/component/util');
    var share = require('js/component/share');
    var statistics = require('js/tools/statistics');
    var shuffling = require('js/component/carousel');
    require('js/lib/rem');

    var query = util.urlParse(location.search);

    if (!query.productId) return;


    var url = share.pdApi(query.productId) + '&userId=' + (query.u || '') + '&shareChannel=' + (query.shareChannel || '') + '&clickId=' + (query.clickId || ''),

        channel = util.getChannelType(),
        shareId = query.shareId || '',

        shareUrl = encodeURIComponent(location.href),
        guid = query.unid || util.Guid(),
        $carouselIndicator = $('#position');

    //点击统计
    var clickParam = {
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
    };
    //浏览统计
    var browseParam = {
        //渠道
        shareChannel: channel,
        // 分享id
        shareId: shareId,
        // 分享url
        url: shareUrl,
        // 唯一id
        unid: guid
    };


    var $main = $('.main')
    var uid = query.u || '';
    var notStatistics = query.notStatistics;

    !notStatistics && statistics.browse(browseParam);

    var render = tpl.compile(detail_tpl);
    var cache = {};
    var mask = '';
    var isWeixin = util.isWeixin();
    var $el = $('.main');

    //微信内,自跳转一次.
    if (isWeixin) {
        if (!notStatistics) {
            location.href = location.href + '&notStatistics=true&unid=' + guid;
        }

        if (util.isIos()) {
            mask = '/images/ios.png';
        } else if (util.isAndroid()) {
            mask = '/images/android.png';
        }
        $main.before('<img class="plant-mask" src="' + mask + '" style="width:100%;position:absolute;z-index:999;top:0;display:none;"/>');
    }


    var score = [4, 11, 41, 91, 151, 251, 501, 1001, 2001, 5001, 10001, 20001, 50001, 100001, 200001, 500001, 1000001, 2000001, 5000001, 10000001, 99999999999999999999],
        levelType = ['l1,1', 'l1,2', 'l1,3', 'l1,4', 'l1,5', 'l2,1', 'l2,2', 'l2,3', 'l2,4', 'l2,5', 'l3,1', 'l3,2', 'l3,3', 'l3,4', 'l3,5', 'l4,1', 'l4,2', 'l4,3', 'l4,4', 'l4,5'];

    $.get(url, function(data) {

        var data = JSON.parse(data).data,
            pe = data.productDetail,
            data = data.productInfo;

        clickParam.url = encodeURIComponent(data.targetUrl);
        clickParam.businessId = data.businessId;

        if (!isWeixin) {
            document.write('');
            statistics.click(clickParam, function() {
                location.href = data.targetUrl && data.targetUrl.replace(/%pugongyinguser%/ig, uid) || '#';
            });
            return;
        }
        cache = data;
        $main.html(render({
            de: data,
            pd: pe,
            text: function(type) {
                return type == 1 ? '淘宝' : '天猫';
            },
            fixed: function(val) {
                return parseFloat(val).toFixed(2)
            },
            floor: function(discount, origin) {
                console.log(arguments)
                return (discount / origin * 10).toFixed(1);
            },
            type: function(level) {
                level = level || 0;
                if (level < 4) {
                    return '';
                }

                return levelType[score.indexOf(score.filter(function(i1, index) {
                    if (level >= i1 && level < score[index + 1]) {
                        return index;
                    }
                })[0])].split(',')[0]

            },
            count: function(val, width) {
                val = val || 0;
                if (val < 4) {
                    return 0;
                }

                return levelType[score.indexOf(score.filter(function(i1, index) {
                    if (val >= i1 && val < score[index + 1]) {
                        return index;
                    }
                })[0])].split(',')[1] * width + 'px';

            },
            jsServer: function() {
                return ymVar.jsServer;
            }
        }));

        $main.show();

        $el.delegate('[data-click]', 'click', function(argument) {
            if (isWeixin) {
                $('.plant-mask').show();
            } else {
                statistics.click(clickParam, function() {
                    location.href = cache.targetUrl.replace('%pugongyinguser%', uid);
                });

            }
        })

        document.title = data && data.item && data.item.title || '';

        //初始化轮播
        var $banner = $('.banner .inner')
        $('.banner').css('height', document.documentElement.clientWidth + 'px');

        if (data.item && data.item.smallImages) {
            var itemWidth = $banner.children()[0] && $banner.children()[0].offsetWidth || document.documentElement.clientWidth;

            new shuffling({
                target: $banner[0],
                count: data.item.smallImages.length,
                itemWidth: itemWidth,
                indicator: document.querySelector('#position'),
                notRun: 1
            })
        } else {

        }

    });
})
