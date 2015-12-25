define(function(require) {
    var wf = require('js/component/waterfull');
    var util = require('js/component/util');
    var share = require('js/component/share');
    var tpl = require('js/lib/template');
    var statistics = require('js/tools/statistics');
    var ll = require('js/component/lazyload');
    

    require('js/lib/rem');

    var query = util.urlParse(location.search),
        uid = query.u,
        shareId = query.shareId,
        url = share.sc,
        isWeixin = util.isWeixin(),
        isAndroid = util.isAndroid(),
        notStatistics = query.notStatistics,
        indicator = document.querySelector('.wf-indicator'),
        channel = util.getChannelType(),
        shareUrl = encodeURIComponent(location.href),
        unid = query.unid,
        guid = unid || util.Guid(),
        wxMask = '',
        clickParam = {
            // 分享id
            shareId: shareId,
            //渠道
            shareChannel: channel,
            //商品id
            productId: '',
            // 所属商家
            businessId: '',
            //跳转url
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
        render = tpl.compile(list),
        $listEl = $('.list'),
        $mask = $('.loading-mask'),
        indicator = document.querySelector('.wf-indicator'),
        cacheMgr = (function() {
            var cache = [];
            return {
                getData: function(id) {
                    for (var i = 0, len = cache.length; i < len; i++) {
                        if (cache[i].productId == id) {
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
        }());


    !notStatistics && statistics.browse(browseParam);

    if (isWeixin) {
        if (!notStatistics) {
            location.href = location.href + '&notStatistics=true&unid=' + guid;
        }
        if (isAndroid) {
            mask = 'images/android.png';
        } else {
            mask = 'images/ios.png';
        }
        $listEl.before('<img class="plant-mask" src="' + (ymVar.jsServer + mask) + '" style="width:100%;position:fixed;top:0;z-index:99999;display:none;"/>');
        wxMask = $('.plant-mask');
    }

    var wfCmp = new wf({
        url: url,
        indicator: indicator,
        params: {
            test: true,
            pageNum: 1,
            pageSize: 20,
            shareId: shareId,
            userId: uid
        },
        page: 1,
        target: $listEl,
        success: function(err, data) {
            var renderData = data.data && data.data.productList || [];
            if (renderData.length == 0) {
                this.destroy();
                return;
            }

            $mask.hide();
            $listEl.append(render({
                list: renderData,
                fixed: function(val, bit) {
                    return parseFloat(val).toFixed(typeof bit == 'undefined' ? 2 : bit);
                },
                text: function(type) {
                    return type == 1 ? ymVar.jsServer + 'images/logo_tianmao.png' : ymVar.jsServer + 'images/logo_tianmao.png';
                },
                floor: function(discount, origin) {
                    return (discount / origin * 10).toFixed(1);
                },
                jsserver: function() {
                    return ymVar.jsServer;
                }
            }))

            cacheMgr.add(renderData);
        },
        addition: 0,
        before: function() {
            this.params.pageNum = this.page;
        },
        needFirst: 1
    })
    indicator.style.display = 'none';
    //lazyload
    new ll({
        main: $listEl
    })

    $listEl.delegate('.item', 'click', function(e) {
        var data = cacheMgr.getData($(this).attr('data-id'));


        if (isWeixin) {
            wxMask.show();
            return;
        }

        clickParam.url = encodeURIComponent(data.targetUrl);
        clickParam.businessId = data.businessId;
        clickParam.productId = data.productId;

        statistics.click(clickParam, function() {
            location.href = data.targetUrl.replace('%pugongyinguser%', uid);
        });

    })
})
