define(function(require) {
    var tpl = require('js/lib/template');
    var client = require('js/tools/client');
    var share = require('js/component/share');
    var storage = require('js/tools/storage');
    var util = require('js/component/util');

    var $search = $('.search'),
        gotoUrl = share.resultUrl,
        $header = $('.wrap'),
        $searVal = $('.sIcon'),
        $back = $('.iconfont'),
        $searchBtn = $('.sectionThree'),
        $clearHis = $('.clear-his'),
        $hotSearch = $('.hot_seach'),
        $ss = $('.sectionThree'),
        urlObj = util.urlParse(location.search),
        kw = decodeURI(util.delSpace(urlObj.h5_kw || '')),
        from = urlObj.h5_from_page,
        $empty = $('[data-type="empty"]'),
        top1Data = {},
        changeWord,
        fromResult = 0,
        $historyPanel = $('.history_seach'),
        $historyList = $('.historyList'),
        keyw = decodeURI(localStorage.getItem('kw')),
        searchType = 1;

    $searVal.attr('placeholder', kw).val('').focus();
    $empty.hide();

    if (keyw != 'null' && keyw !='') {
        fromResult = 1;
        $searVal.val(keyw).focus();
        localStorage.setItem('kw', '');
        $empty.show();
        $ss.show();
    }
    //初始化历史记录
    var historyData = storage.get('history', 10);

    if (historyData.length > 0) {
        $historyList.append('<li>' + historyData.reverse().join('</li><li>') + '</li>');
        $historyPanel.show();
    }

    //客户端调用
    function jsSearch() {
        var va = util.delSpace(encodeURI($searVal.val() || $searVal.attr('placeholder')));
        if (va == '') return;

        var url = '';
        if (changeWord || fromResult) {
            url = util.delSpace(gotoUrl + '?searchType=' + searchType + '&h5_from_page=search&h5_kw=' + va + '&name_iks=' + va);
        } else {
            url = util.delSpace(gotoUrl + '?searchType=' + searchType + '&h5_from_page=search&h5_kw=' + va + '&' + encodeURI(top1Data.link));
        }
        location.href = url;
    }

    function hideKb() {
        try {
            window.common.hidekb();
        } catch (e) {
            console.log('is not android');
        }
    }

    //初始化热门关键词
    var hotUrl = share.hotSearchWord;

    $.get(hotUrl, function(data) {
        data = JSON.parse(data);
        if (data && data.data && data.data.categoryOrKeyHot) {
            var cData = data.data.categoryOrKeyHot.sort(function(item, item2) {
                return item.weight < item2.weight
            });
            top1Data = cData.shift();
            if (from == 'main') {
                $search.attr('placeholder', top1Data.name);
                $ss.show();

            }
            var html = '';

            for (var i in cData) {
                html += '<span data-link=' + cData[i].link + '>' + cData[i].name + '</span>';
            }

            $hotSearch.append(html);
        }
    })

    //add event
    ! function() {
        $('body').keydown(function(e) {
                e.keyCode == 13 && (hideKb(), jsSearch());
            })
            //头部事件
        $header.delegate('[data-click]', 'click', function() {
            var $this = $(this),
                type = $(this).attr('data-type');
            switch (type) {
                case 'empty':
                    $searVal.val('').focus();
                    $empty.hide();
                    searchType = 1;
                    break;
                case 'search':
                    jsSearch();
                    break;
                case 'back':

                    hideKb();
                    if (from == 'main') {

                        try {
                            window.popBack();
                        } catch (e) {
                            window.goback.back();
                        }
                    } else {
                        history.back();
                    }

                    break;
                default:
                    break;
            }
        })

        $search.on('input', function(e) {
                changeWord = 1;
                searchType = 3;
                if ($search.val().length == 0) {
                    $empty.hide();
                } else {
                    $empty.show();
                }
            })
            //热门搜索词点击
        $hotSearch.delegate('span', 'click', function(argument) {
            hideKb();
            location.href = gotoUrl + '?searchType=1&h5_from_page=search&h5_kw=' + encodeURI($(this).text() || $(this).attr('placeholder')) + '&' + encodeURI($(this).attr('data-link'));
        })

        //清除历史记录
        $clearHis.click(function() {
            storage.empty('history');
            $historyPanel.remove();
        });

        //历史记录item点击
        $historyList.delegate('li', 'click', function() {
            
            hideKb();
            var encode_kw = encodeURI($(this).text() || $(this).attr('placeholder'));
            location.href = gotoUrl + '?searchType=3&h5_from_page=search&h5_kw=' + encode_kw + '&name_iks=' + encode_kw;
        })
    }()
})
