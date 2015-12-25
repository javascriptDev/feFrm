define(function(require) {
    var tpl = require('js/lib/template');
    var util = require('js/component/util');
    var storage = require('js/tools/storage');
    var wf = require('js/component/waterfull');
    var share = require('js/component/share');
    var ll = require('js/component/lazyload');
    var client = require('js/tools/client');
    var pageEnum = require('js/component/page');

    require('js/lib/rem')
    var fixTop = 0,
        $searchTxt = $('.search'),
        urlObj = util.urlParse(location.search),
        kw = decodeURIComponent(urlObj.h5_kw),
        from = urlObj.h5_from_page,
        render = tpl.compile(list),
        $listEl = $('.goods'),
        $loading = $('.loading-mask'),
        $noFind = $('.nofind'),
        $gotoTop = $('.rtop '),
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
        $tab = $('.navTab'),
        $navSort = $tab.find('.sort'),
        $navFilter = $tab.find('.filter'),
        $tabC = $('.tab-c'),
        $layer = $('.layer-in'),
        $layerTab = $layer.find('.tab'),
        $sortPanel = $('.sort_alt'),
        $filterPanel = $('.filter_area'),
        $filter = $('.filter'),
        $sortText = $('.sorttext'),
        $sort = $('.sort'),
        indicator = document.querySelector('.wf-indicator'),
        $rf = $('.business-text'),
        $header = $('.wrap'),
        $searVal = $('.sIcon'),
        $back = $('.iconfont'),
        $searchBtn = $('.sectionThree'),
        $historyPanel = $('.history_seach'),
        $historyList = $('.historyList'),
        $clearHis = $('.clear-his'),
        $categoryEl = $('.category'),
        $categoryText = $('.category-text'),
        $fsPanel = $('.panel'),
        $categoryCtn = $('.category_box'),
        $cateInner = $('.category_box div'),
        $layerInner = $('.filter_box'),
        $selectedEl,

        //标识是否添加了 随向下,向上滚动.筛选排序tab显示隐藏的事件
        isAddEvent = 0,
        by;

    var uid = client.getUid() || '';

    util.injectCss();

    $searchTxt.val(kw || '');
    storage.add('history', kw);

    var url = share.searchResultApi();
    var searchUrl = share.searchUrl;
    var categoryUrl = share.hotCatgoryApi;
    var recommendUrl = share.recommendApi;
    //请求的参数变化

    var req_params = {
        page: pageEnum['search'],
        userId: uid
    };

    for (var i in urlObj) {
        if (i != 'h5_kw' && i != 'h5_from_page') {
            req_params[i] = urlObj[i];
        }
    }

    var wfCmp = new wf({
        url: url,
        indicator: indicator,
        params: {
            test: true,
            pageNum: 1,
            pageSize: 20
        },
        page: 1,
        target: $listEl,
        success: function(err, data, isInited) {
            if (data && data.data) {
                var renderData = data.data.productList;
                var categoryData = data.data.categoryList;
                $loading.hide();

                if (!renderData || renderData.length == 0) {
                    if (isInited) {
                        this.destroy();
                    } else {
                        $noFind.html('没有找到符合条件的商品.').show();
                        $loading.hide();
                        $listEl.html('');
                        $listEl.css('margin-top', 0)

                        wfCmp.die();
                        $.get(recommendUrl, function(data) {
                            data = JSON.parse(data);
                            if (data && data.data && data.data.productList) {
                                cacheMgr.add(data.data.productList);

                                $listEl.append(render({
                                    list: data.data.productList,
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
                                }));

                                ll.prototype.renderImage($listEl, '[csrc]')
                            }
                        })
                    }
                    return;
                }

                if (!categoryData || categoryData.length == 0) {
                    !isInited && renderCategory();
                } else {
                    if (!isInited) {
                        var html = '';
                        $.each(categoryData, function(index, item) {
                            if (item.categoryName) {
                                html += '<a data-type="' + item.categoryId + '" data-key="categoryFilter" ><div style="width:100%;position:static;">' + item.categoryName + '</div></a>';
                            }
                        })
                        $cateInner.append(html);
                    }

                }


                $fsPanel.show();
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
                if (!isAddEvent && document.body.offsetHeight > document.documentElement.clientHeight) {

                    $listEl.on('touchstart', function(e) {
                        by = e.touches[0].clientY;
                    })
                    $listEl.on('touchmove', function(e) {
                        var isTop = (e.touches[0].clientY - by) < 0;
                        if (isTop) {
                            $fsPanel.hide();
                        } else {
                            $fsPanel.show();
                        }
                    })

                }

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

    //初始化筛选类目
    function renderCategory() {
        $.get(categoryUrl, function(data) {
            data = JSON.parse(data);
            if (data && data.data && data.data.topCategoryList) {
                var html = '';
                $.each(data.data.topCategoryList, function(index, item) {
                    html += '<a data-type="' + item.id + '" data-key="categoryFilter " ><div style="width:100%;position:static;">' + item.name + '</div></a>';
                })
                $categoryCtn.append(html);
            } else {
                console.log('ajax error');
            }
        })
    }

    function tab(index) {
        $tabC.find('[data-tab]').hide();
        $layerTab.find('.on').removeClass('on').addClass('out');
        $layerTab.find('[data-tab="' + index + '"]').addClass('on').removeClass('out');
        $tabC.find('[data-tab="' + index + '"]').show();
        $layer.attr('data-show', "1");
    }
    //lazyload
    new ll({
        main: $listEl
    })

    //初始化ui
    var elH = document.documentElement.clientHeight - fixTop;
    $layer.find('.tab-c').height(elH - 40);

    //初始化事件
    ! function() {

        //头部事件
        $header.delegate('[data-click]', 'click', function() {
            var $this = $(this),
                type = $(this).attr('data-type');
            switch (type) {
                case 'search':
                    localStorage.setItem('kw', kw);
                    if (from == 'search') {
                        history.back();
                    } else {
                        location.href = searchUrl + '?h5_from_page=result&h5_kw=' + encodeURI(kw || '')
                    }
                    break;
                case 'back':
                    if (from == 'main') {
                        try {
                            window.popBack();
                        } catch (e) {
                            window.goback.back();
                        }
                    } else {
                        localStorage.setItem('kw', kw);
                        history.back();
                    }
                    break;
                case 'main':
                    //goto main
                    try {
                        window.popBack();
                    } catch (e) {
                        window.goback.back();
                    }

                    break;
                default:
                    break;
            }
        })

        //排序
        $navSort.click(function(e) {
            e.stopPropagation()

            tab(1);
            $layer.show();
        })

        //筛选
        $navFilter.click(function(e) {
            e.stopPropagation()
            tab(2);
            $layer.show();
            $selectedEl = $layer.find('[data-key].on');
        })

        $layer.delegate('.tab [data-tab]', 'click', function(e) {
            e.stopPropagation();
            var $this = $(this);
            if ($this.hasClass('on') && $('.layer-in').css('display') == 'block') {
                $layer.hide();
                $layer.find('[data-key].on').removeClass('on');
                !$selectedEl.hasClass('on') && $selectedEl.addClass('on');
                $selectedEl.each(function(index, item) {
                    $($('.red_font')[index]).text($(item).text());
                })
                return;
            }
            tab($this.attr('data-tab'));
        })

        $sortPanel.delegate('li', 'click', function() {
            var $el = $(this);
            if ($el.hasClass('on')) {
                $layer.hide();
                return
            };

            req_params.comprehensiveSort = $el.find('a').attr('data-type');
            req_params.searchType = 3;
            window.scrollTo(0, 0);
            $sortPanel.find('.on').removeClass('on');
            $el.addClass('on');
            $sortText.html($el.text() + ' <span></span>');
            $sort.addClass('on').removeClass('out');
            $layer.hide();
            $tab.show();
            wfCmp.reLive();
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

        //筛选
        var $filter_form_input_el = $('[data-key]');
        var $root = $('[data-root]');
        var $businessEl = $('.business');
        var $serviceEl = $('.service');

        //过滤表单重置
        $('.filter_reset').click(function() {
            location.reload();
        });

        //商家选择交互
        $businessEl.delegate('[data-type]', 'click', function() {
            var $this = $(this);
            if ($this.hasClass('on')) {
                var defaultType = $($('.business').children()[0]);
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
                req_params.searchType = 3;
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
            // window, appVersion = '';

        // window.getVersion = function(ver) {
        //     alert(ver);
        //     appVersion = ver;
        // }

        //list item click split
        $listEl.delegate('[data-link]', 'click', function() {
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
                    shopLogo: data.shopLogo
                })
                client.gotoPage(param)

            }
        })

        //弹层fix
        $sortPanel.on('touchmove', function(e) {
            e.stopPropagation();
            e.preventDefault();
        })

        $layerInner.on('touchstart', function(e) {
            e.stopPropagation();
            fby = e.touches[0].clientY;
            cssBeginY = parseInt($layerInner.css('top'));
        })

        $layerInner.on('touchmove', function(e) {
            e.stopPropagation();
            e.preventDefault();
            var dis = cssBeginY + e.touches[0].clientY - fby;
            if (dis > 0 || elH - $layerInner.height() > 0 || dis < elH - $layerInner.height() - 200) {
                return
            } else {
                $layerInner.css('top', dis + 'px');
            }

        })

        $filterPanel.on('touchmove', function(e) {
            e.stopPropagation();
            e.preventDefault();
        })

        $('.layer-toggle').click(hidePanel);


        function hidePanel(e) {
            e.stopPropagation();
            var cls = e.target.className;
            if (cls.indexOf('sort_alt') != -1 || cls.indexOf('filter_area') != -1 || cls.indexOf('layer-toggle') != -1) {
                $layer.hide();
            }
        }
    }()


})
