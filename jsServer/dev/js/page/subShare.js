define(function(require) {

    //need module
    var tpl = require('js/lib/template');
    var wf = require('js/component/waterfull');
    var ll = require('js/component/lazyload');
    var share = require('js/component/share');
    var util = require('js/component/util');
    var client = require('js/tools/client');
    var share = require('js/component/share');
    var pageEnum = require('js/component/page');

    require('js/lib/rem');
    //private variable
    var query = util.urlParse(location.search),
        $listEl = $('.list-c'),
        $moveEl = $('.bottom'),
        $tab = $('.goods_title'),
        $fixTab = $('.tab'),

        $sortPanel = $('.sort_alt'),
        $filter = $('.filter'),
        $body = $('body'),
        $sort = $('.sort'),
        pageSize = 20,
        $banner = $('.banner .inner'),
        sort_val = 0,
        tabHeight = $tab.height(),
        render = tpl.compile(list),
        $topic_img = $('.topic_img'),
        $ava = $('.ava'),
        $mask = $('.loading-mask'),
        indicator = document.querySelector('.wf-indicator'),
        sH = window.innerHeight,
        width = document.documentElement.clientWidth,
        page = pageEnum['sysTopic'],
        $avaC = $('.carousel-layer'),
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
        }()),
        oDiv = document.getElementsByClassName('rtop'),
        $filterPanel = $('.filter_area'),
        uid = window.clientUid || (util.isAndroid() && client.getUid()) || '';

    $carouselIndicator = $('#position');

    $avaC.height(width / 2.5 + 'px');
    util.injectCss();


    //初始化组件
    var url = share.appActivityAPI;

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
        params: {
            test: true,
            pageNum: 1,
            pageSize: pageSize,
            topicId: query.topicId,
            page: page,
            userId: uid
        },
        page: 1,
        target: $listEl,
        success: function(err, data) {
            var renderData = data.data.productList;
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
            $topic_img.attr('src', data.data.topicInfo.image_url).show();
            $ava.text(data.data.topicInfo.rebate + '%');
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


    //初始化事件
    ! function() {

        //list item click split
        $listEl.delegate('[data-link]', 'click', function() {
            var $this = $(this),
                isShare = $this.attr('data-share'),
                pid = $this.attr('data-id'),
                data = cacheMgr.getData(pid);

            if (isShare) {

                var param = JSON.stringify({
                    shareType: "0",
                    linkUrl: data.targetUrl,
                    itemId: pid
                });

                client.share(param);
            } else {
                //0 是 好货单品 1 是好货轮播图跳转 2 是专题页单品跳转
                var param = JSON.stringify({
                    discountPrice: data.discountPrice,
                    returnPrice: data.returnPrice,
                    targetUrl: data.targetUrl,
                    itemId: pid,
                    fromPage: 'page_goods',
                    shopName: '淘宝',
                    type: 0,
                    shareType: '0',
                    shopLogo: data.shopLogo
                })

                client.gotoPage(param);
            }
        })
    }()
})
