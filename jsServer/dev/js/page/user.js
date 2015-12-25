define(function(require) {

    //need module
    var tpl = require('js/lib/template');
    var pull = require('js/component/pull');
    var shuffling = require('js/component/carousel');
    var wf = require('js/component/waterfull');
    var ll = require('js/component/lazyload');
    var share = require('js/component/share');
    var client = require('js/tools/client');
    var util = require('js/component/util');
    var pageEnum = require('js/component/page');
    require('js/lib/rem');

    //private variable
    var fixTop = 0;
    var render = tpl.compile(list);
    var carsouselRender = tpl.compile(carousel);
    var hotCatgotyRender = tpl.compile(catgory_tpl);
    var $listEl = $('.list-c');
    var $moveEl = $('.bottom');
    var $tab = $('.goods_title');
    var $fixTab = $('.fixed');
    var $mask = $('.mask');
    var $sortPanel = $('.sort_alt');
    var $filterPanel = $('.filter_area');
    var $filter = $('.filter');
    var $body = $('body');
    var $sort = $('.sort');
    var $navSort = $tab.find('.sort');
    var $navFilter = $tab.find('.filter');
    var $fixSort = $fixTab.find('.sort');
    var $fixFilter = $fixTab.find('.filter');
    var pageSize = 20;
    var $banner = $('.banner .inner')
    var sort_val = 0;
    var $rf = $('.business-text');
    var tabHeight = $tab.height();
    var $carouselIndicator = $('#position');
    var $layer = $('.layer-in');
    var $layerTab = $layer.find('.tab');
    var $sortText = $('.sorttext');
    var $tabC = $('.tab-c');
    var $noFind = $('.nofind');
    var $gotoTop = $('.rtop ');
    var $layerInner = $('.filter_box');

    var $loading = $('.loading-mask');
    var $top = $('.top-c');
    var $hotCatgoty = $('.hot-cgy');
    var $searchBox = $('.search_box');
    var $categoryEl = $('.category_box');
    var $categoryText = $('.category-text');
    var $categoryCtn = $('.category_box');
    var $cateInner = $('.category_box div');
    var categoryCtn = $categoryCtn[0];
    var $searchTxt = $('.search-txt');
    var $selectedEl;
    var $serviceEl = $('.service');
    var uid = client.getUid() || '';
    var ppvid = '';


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

    //列表数据缓存
    var carouselCache = (function() {
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
    }());

    util.injectCss();
    var searchResultUrl = share.resultUrl;
    var searchUrl = share.searchUrl;


    //非fix状态,手动触发fix.让onscroll函数忽略本次检测
    var ignore = false;

    //请求的参数变化
    var req_params = {
        commissionRateSort: '',
        comprehensiveSort: '',
        highPriceFilter: '',
        lowPriceFilter: '',
        shopFilter: '',
        categoryId: '',
        userId: uid,
        ppvid: ppvid,
        page: pageEnum['main']
    }

    //初始化组件
    var url = share.mainApi;
    var carouselUrl = share.carsouselApi;
    var hot_cat = share.hotCategory;
    var categoryUrl = share.searchCategoryApi;
    var hotUrl = share.hotSearchWord;
    var indicator = document.querySelector('.wf-indicator');
    //上拉刷新
    var wfCmp = new wf({
        url: url,
        indicator: indicator,
        params: {
            test: true,
            pageNum: 1,
            pageSize: pageSize
        },
        page: 1,
        target: $listEl,
        success: function(err, data, isInited) {
            if (data && data.data) {
                var renderData = data.data.productList;
                !req_params.ppvid && (req_params.ppvid = data.data.ppvid);
                $loading.hide();

                if (!renderData || renderData.length == 0) {

                    if (isInited) {
                        this.destroy();
                        $loading.hide();
                    } else {
                        $listEl.html('');
                        this.die();
                        $loading.hide();
                    }

                    return;
                }

                $noFind.hide();

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
            } else {
                $listEl.html('');
                $noFind.show();
                $loading.hide();
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

    //下拉
    var pullCmp = new pull({
        url: url,
        indicator: document.querySelector('.loader'),
        target: $listEl,
        params: {
            test: true,
            pageNum: 1,
            pageSize: pageSize
        },
        y: 0,
        target: document.querySelector('.main'),
        success: function(err, data) {
            wfCmp.reLive();
            $noFind.hide()

            if (data && data.data && data.data.productList) {
                req_params.ppvid && (req_params.ppvid = data.data.ppvid);

                $loading.hide();
                window.scrollTo(0, 0);
                var els = $('.list-c .list_box');
                var renderData = data.data.productList;

                cacheMgr.empty();

                var html = render({
                    list: renderData,
                    fixed: function(val,bit) {
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
                });

                cacheMgr.empty();
                cacheMgr.add(renderData);
                $listEl.html('');
                $listEl.append(html);

            } else {
                $noFind.show();
                $loading.hide();
                window.onscroll = null;
            }
        },
        before: function() {
            $.extend(this.params, req_params)
        },
        done: function() {
            $top.css('top', '-40px');
        },
        moveStart: function(dis) {
            $top.css('top', -40 + dis + 'px');
        },
        maxOperation: function() {
            // $top.css('top', '0px');
        },
        needFirst: 0
    })

    var oDiv = document.getElementsByClassName('rtop');
    var sH = window.innerHeight;
    //tab fix
    var wo = window.onscroll;
    window.onscroll = function() {

        typeof wo == 'function' && wo();

        if (document.body.scrollTop >= sH) {
            oDiv[0].style.opacity = 1;
        } else {
            oDiv[0].style.opacity = 0;
        }
    }



    //lazyload
    new ll({
        main: document.querySelector('.list-c'),
        selector: '.list_left img'
    })

    //渲染carousel
    $.get(carouselUrl, function(data) {

        data = JSON.parse(data),
            renderData = data.data.carouselList,
            count = renderData.length;
        carouselCache.add(renderData);

        var html = carsouselRender({
            carousel: renderData
        });
        $banner.html(html);
        var html = '<li class="cur"></li>';
        for (var i = 0; i < count - 1; i++) {
            html += '<li></li>'
        }

        var itemWidth = $banner.children()[0].offsetWidth;
        $('.banner').css('height', itemWidth / 3.1 + 'px');
        // $('.banner .carousel-layer').css({
        //     'height': itemWidth / 3.1 + 'px'
        // });

        new shuffling({
            target: $banner[0],
            timeout: 3000,
            count: count,
            itemWidth: itemWidth,
            indicator: document.querySelector('#position'),
            notRun: 0,
            end: function() {}
        })


        $carouselIndicator.html(html);
    });

    //渲染热门分类
    $.get(hot_cat, function(data) {
        data = JSON.parse(data);
        if (data && data.data && data.data.categoryOrKeyHot) {
            var chtml = hotCatgotyRender({
                catgory: data.data.categoryOrKeyHot
            });
            $hotCatgoty.html(chtml);
        }
    })

    //初始化ui
    var elH = document.documentElement.clientHeight - fixTop;
    $layer.find('.tab-c').height(elH);

    //初始化热门搜索词
    $.get(hotUrl, function(data) {
        data = JSON.parse(data);
        if (data && data.data && data.data.categoryOrKeyHot) {
            var source = data.data.categoryOrKeyHot.sort(function(item, item2) {
                return item.weight < item2.weight
            })[0];

            window.gotoSearch = function() {
                var u = searchUrl + '?h5_from_page=main&h5_kw=' + util.delSpace(source.name || '') + '&' + source.link;
                try {
                    window.pushView(u, "1");
                } catch (e) {
                    window.search.pushView(u, "1");
                }
            }
        }
    })

    //初始化筛选类目
    $.get(categoryUrl, function(data) {

        data = JSON.parse(data);
        if (data && data.data) {
            var renderData = data.data.topCategoryList || [];
            var html = '';
            $.each(renderData, function(index, item) {
                html += '<a data-type="' + item.id + '" data-key="categoryFilter"><div style="width:100%;position:static;">' + item.name + '</div></a>';
            })
            $cateInner.append(html);
        } else {
            console.log('ajax error');
        }
    })

    function tab(index) {
        $tabC.find('[data-tab]').hide();
        $layerTab.find('.on').removeClass('on').addClass('out');
        $layerTab.find('[data-tab="' + index + '"]').addClass('on').removeClass('out');
        $tabC.find('[data-tab="' + index + '"]').show();
        $layer.attr('data-show', "1");
    }

    //初始化事件
    ! function() {

        //排序
        $navSort.click(function(e) {
            e.stopPropagation()
            tab(1);
            $layer.show();
            client.hideBar()

        })

        //筛选
        $navFilter.click(function(e) {
            e.stopPropagation()
            tab(2);
            $layer.show();
            $selectedEl = $layer.find('[data-key].on');
            client.hideBar()
        })

        $layer.delegate('.tab [data-tab]', 'click', function(e) {
            e.stopPropagation();
            var $this = $(this);
            if ($this.hasClass('on') && $('.layer-in').css('display') == 'block') {
                client.showBar();
                $layer.hide();
                $layer.find('[data-key].on').removeClass('on');
                $selectedEl && !$selectedEl.hasClass('on') && $selectedEl.addClass('on');
                $selectedEl && $selectedEl.each(function(index, item) {
                    $($('.red_font')[index]).text($(item).text());
                })
                return;
            }
            tab($this.attr('data-tab'));
        })

        //排序item click
        $sortPanel.delegate('li', 'click', function(e) {
            client.showBar();
            
            e.stopPropagation();
            var $el = $(this);
            if ($el.hasClass('on')) {
                $layer.hide();
                return
            };

            req_params.comprehensiveSort = $el.find('a').attr('data-type');
            window.scrollTo(0, 0);
            $sortPanel.find('.on').removeClass('on');
            $el.addClass('on');
            $sortText.html($el.text());
            $sort.addClass('on').removeClass('out');
            $layer.hide();
            $fixTab.hide();
            $tab.show();
            wfCmp.reLive();
            $loading.show();

            document.querySelector('.wf-indicator').style.display = 'none';
            wfCmp.rebuild(function(data) {
                $listEl.html('');

                if (data && data.data && data.data.productList) {
                    data.data.productList.length == 0 && ($noFind.show(), cacheMgr.empty())
                } else {
                    $noFind.show()
                }
                document.querySelector('.wf-indicator').style.display = 'none';
            });
        })

        //筛选
        var $filter_form_input_el = $('[data-key]');
        var $root = $('[data-root]');
        var $businessEl = $('.business');

        //过滤表单重置
        $('.filter_reset').click(function(e) {
            e.stopPropagation();
            client.showBar();
            location.reload();
        });

        //商家选择交互
        $businessEl.delegate('[data-type]', 'click', function() {
                var $this = $(this);
                if ($this.hasClass('on')) {
                    var defaultType = $($businessEl.children()[0]);
                    $this.removeClass('on');
                    defaultType.addClass('on');
                    $rf.text(defaultType.text())
                } else {
                    $businessEl.find('.on').removeClass('on');
                    $this.addClass('on');
                    $rf.text($this.text())
                }
            })
            //是否包邮
        $serviceEl.delegate('[data-type]', 'click', function() {
                var $this = $(this);
                if ($this.hasClass('on')) {
                    $this.removeClass('on');
                } else {
                    $serviceEl.find('.on').removeClass('on');
                    $this.addClass('on');
                }
            })
            //列别交互
        $categoryEl.delegate('[data-type]', 'click', function() {
            var $this = $(this);
            if ($this.hasClass('on')) {
                var defaultType = $($cateInner.children()[0]);
                $this.removeClass('on');
                defaultType.addClass('on');
                $categoryText.text(defaultType.text())
            } else {
                $categoryEl.find('.on').removeClass('on');
                $this.addClass('on');
                $categoryText.text($this.text())
            }
        })

        //过滤表单提交
        $('.filter_submit').click(function(e) {
            client.showBar()

            e.stopPropagation();
            var pass = 1;
            var temp = {};
            $filterPanel.find('[data-key]').each(function(item) {
                var $this = $(this);
                var reg = $this.attr('reg');
                var val = parseFloat($this.val());
                var key = $this.attr('data-key');
                var than = $this.attr('than');
                var error = $this.attr('error');
                var thenError = $this.attr('thanError');
                if (val <= 0) {
                    $('.' + key + '-err').text(error).show();
                    pass = 0;

                    setTimeout(function() {
                        $('.' + key + '-err').hide();
                    }, 1500)
                    return;
                }

                //包含正则属性的,正则验证
                if (reg && !isNaN(val)) {
                    if (!new RegExp(reg).test(val)) {
                        $('.' + key + '-err').text(error).show();
                        pass = 0;

                        setTimeout(function() {
                            $('.' + key + '-err').hide();
                        }, 1500)
                        return;
                    }
                }

                //高值大于低值
                if (than && parseInt($('[data-key="' + than + '"]').val()) > val) {
                    $('.' + key + '-err').text(thenError).show();
                    pass = 0;
                    setTimeout(function() {
                        $('.' + key + '-err').hide();
                    }, 1500)

                    return;
                }

                !temp[key] && (temp[key] = val || $this.hasClass('on') && $this.attr('data-type') || '')
            });

            if (!pass) {
                return;
            }
            req_params = temp;
            window.scrollTo(0, 0);
            $layer.hide();
            $filter.addClass('on').removeClass('out');
            $tab.show();
            wfCmp.reLive();
            $noFind.hide();

            $loading.show();
            document.querySelector('.wf-indicator').style.display = 'none';
            wfCmp.rebuild(function(data) {
                if (data && data.data && data.data.productList) {
                    data.data.productList.length == 0 && ($noFind.show(), cacheMgr.empty())

                } else {
                    $noFind.show()
                }
                $listEl.html('');
                document.querySelector('.wf-indicator').style.display = 'none';
            });
        })



        //list item click split
        $listEl.delegate('[data-link]', 'click', function(e) {
            // alert(appVersion);

            // try {
            //     appVersion = window.get.appInfo()
            // } catch (e) {


            // }

            // alert(appVersion);
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
                var sn = data.shopType == 1 ? '淘宝' : '天猫';
                var param = JSON.stringify({
                    discountPrice: data.discountPrice,
                    returnPrice: data.returnPrice,
                    targetUrl: data.targetUrl,
                    itemId: pid,
                    fromPage: 'page_goods',
                    shopName: sn,
                    type: 0,
                    shareType: '0',
                    shopLogo: data.shopLogo,
                    page: pageEnum['main'],
                    isCollection : data.collection
                })
                client.gotoPage(param)

            }
        })

        //弹层fix
        $sortPanel.on('touchmove', function(e) {
            e.stopPropagation();
            e.preventDefault();
        })
        $filterPanel.on('touchmove', function(e) {
            e.stopPropagation();
            e.preventDefault();
        })

        var fby = 0;
        var cssBeginY = 0;

        $layerInner.on('touchstart', function(e) {
            e.stopPropagation();
            fby = e.touches[0].clientY;
            cssBeginY = parseInt($layerInner.css('top'));
        })
        $layerInner.on('touchmove', function(e) {
            e.stopPropagation();
            e.preventDefault();
            var dis = cssBeginY + e.touches[0].clientY - fby;
            if (dis > 0 || elH - $layerInner.height() > 0 || dis < elH - $layerInner.height() - 350) {
                return
            } else {
                $layerInner.css('top', dis + 'px');
            }

        })


        $('.layer-toggle').click(hidePanel);


        function hidePanel(e) {
            e.stopPropagation();
            client.showBar();

            var cls = e.target.className;
            if (cls.indexOf('sort_alt') != -1 || cls.indexOf('filter_area') != -1 || cls.indexOf('layer-toggle') != -1) {
                $layer.hide();
            }
        }

        //轮播跳转
        $banner.delegate('[data-carousel]', 'click', function() {
            var id = $(this).attr('data-id'),
                data = carouselCache.getData(id),
                type = data.type;

            var linkUrl = '/activityList.html?topicId=' + data.id;
            if (type == 2) {
                linkUrl = data.linkUrl;
            }

            client.gotoPage(JSON.stringify({
                id: data.id,
                itemId: data.id,
                name: data.name,
                linkUrl: linkUrl,
                type: 1,
                specialType: type,
                page: pageEnum['businessTopic']
            }));
        })

        //热门分类跳转
        $hotCatgoty.delegate('[data-click]', 'click', function(argument) {
            var params = util.delSpace(encodeURI($(this).attr('data-link')));
            var name = util.delSpace(encodeURI($(this).find('.cate-name').text()));
            var u = searchResultUrl + "?searchType=2&h5_from_page=main&h5_kw=" + name + "&" + params;
            try {
                window.pushView(u, "0");
            } catch (e) {
                window.search.pushView(u, "0");
            }
        })
    }()
})
