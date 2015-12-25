define(function(require) {

    //need module
    var tpl = require('js/lib/template');
    var wf = require('js/component/waterfull');
    var ll = require('js/component/lazyload');
    var util = require('js/component/util');
    var share = require('js/component/share');
    var statistics = require('js/tools/statistics');
    var pageEnum = require('js/component/page');
    require('js/lib/rem');

    //private variable
    var fixTop = $('header').height(),
        render = tpl.compile(list),
        urlObj = util.urlParse(location.search),
        $listEl = $('.list-c'),
        $moveEl = $('.bottom'),
        $filter = $('.filter'),
        $body = $('body'),
        channel = util.getChannelType(),
        shareId = urlObj.shareId || '',
        unid = urlObj.unid,
        shareUrl = encodeURIComponent(location.href),
        businessUrl = urlObj.burl,
        guid = unid || util.Guid(),
        //点击统计
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
        pageSize = 20,
        $banner = $('.banner .inner'),
        sort_val = 0,
        $rf = $('.red_font'),
        $topic_img = $('.topic_img'),
        $mask = $('.loading-mask'),
        $img = $('.topic_img'),
        isWeixin = util.isWeixin(),
        isAndroid = util.isAndroid(),
        mask = '',
        wxMask = '',
        notStatistics = urlObj.notStatistics,
        $main = $('.main'),
        activityType = undefined;

    util.injectCss();

    !notStatistics && statistics.browse(browseParam);

    if (isWeixin) {
        if (!notStatistics) {
            location.href = location.href + '&notStatistics=true&unid='+guid;
        }
        if (isAndroid) {
            mask = '/images/android.png';
        } else {
            mask = '/images/ios.png';
        }
        $main.before('<img class="plant-mask" src="' + mask + '" style="width:100%;position:fixed;top:0;z-index:99999;display:none;"/>');
        wxMask = $('.plant-mask');
    }
    var uid = window.clientUid || (util.isAndroid() && client.getUid()) || '';

    var cacheMgr = (function() {
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
    }())

    //非fix状态,手动触发fix.让onscroll函数忽略本次检测
    var ignore = false;

    var query = util.urlParse(location.search);
    var topicId = query.topicId;
    var userId = query.u;
    var shareChannel = query.shareChannel;
    var clickId = query.clickId;
    //初始化组件
    var url = share.activityApi;

    var user = query.u,
        indicator = document.querySelector('.wf-indicator'),
        oDiv = document.getElementsByClassName('rtop'),
        sH = window.innerHeight;

    var wo = window.onscroll;
    window.onscroll = function() {
        typeof wo == 'function' && wo();
        if (document.body.scrollTop >= sH) {
            oDiv[0].style.opacity = 1;
        } else {
            oDiv[0].style.opacity = 0;
        }
    }


    //上拉刷新
    var wfCmp = new wf({
        url: url,
        indicator: indicator,
        page: 1,
        params: {
            test: true,
            pageNum: 1,
            pageSize: pageSize,
            topicId: topicId,
            shareChannel: shareChannel,
            clickId: clickId,
            userId: userId
        },
        target: $listEl,
        success: function(err, data) {
            var renderData = data && data.data && data.data.productList || {};
            var topic = data && data.data && data.data.topicInfo || {};
            var topicName = topic.name || '';
            activityType = topic.type || '';

            document.title = topicName;

            if (activityType == 2) {
                businessPage();
                return;
            }

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
                jsserver:function(){
                    return ymVar.jsServer;
                }
            }))
            cacheMgr.add(renderData);
            $topic_img.attr('src', data.data.topicInfo.image_url).show();

        },
        addition: 0,
        before: function() {
            this.params.pageNum = this.page;
            this.params.userId = uid;
            this.params.page = pageEnum['sysTopicShare'];
        },
        needFirst: 1
    })

    indicator.style.display = 'none';

    //lazyload
    new ll({
        main: $listEl
    })

    //商家专题逻辑
    function businessPage() {
        if (isWeixin) {
            wxMask.show();
            $mask.hide();
        } else {
            document.write('');
            statistics.click(clickParam, function() {
                location.href = businessUrl;
            });

            return;
        }
    }

    //初始化事件
    ! function() {

        //list item click split
        $listEl.delegate('[data-link]', 'click', function() {
            var $this = $(this),
                pid = $this.attr('data-id'),
                data = cacheMgr.getData(pid);

            if (isWeixin) {
                wxMask.show();
                return;
            }

            clickParam.url = encodeURIComponent(data.targetUrl);
            clickParam.businessId = data.businessId;
            clickParam.productId = data.productId;

            statistics.click(clickParam, function() {
                location.href = data.targetUrl.replace('%pugongyinguser%', user);
            });

        })
    }()

})
