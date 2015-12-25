define(function(require) {
    var util = require('js/component/util');
    var tpl = require('js/lib/template');
    var remFix = require('js/lib/rem');
    var client = require('js/tools/client');
    var share = require('js/component/share');
    var wf = require('js/component/waterfull');
    var css = require('js/tools/css');
    var pageEnum = require('js/component/page');

    var uid = client.getUid() || 'no-userId',
        $body = $('body'),
        render = tpl.compile(list),
        api = share.shareRecordApi(uid),
        indicator = document.querySelector('.wf-indicator'),
        $listEl = $('.main'),
        $loader = $('.loading-mask'),
        shareType = {
            1: '高佣金单品',
            2: '普通单品',
            3: '系统专题',
            4: '商家专题'
        },
        cacheMgr = (function() {
            var cache = [];
            return {
                getData: function(id) {
                    for (var i = 0, len = cache.length; i < len; i++) {
                        if (cache[i].itemId == id) {
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
        $nofind = $('.nofind');
        css.inject('.qq{background-image:url(@serverimages/share_qq.png)}.wxfz{background-image:url(@serverimages/share_pengyouquan.png)}.wxfriend{background-image:url(@serverimages/share_wei.png)}.wb{background-image:url(@serverimages/share_xinlang.png)}.qqzone{background-image:url(@serverimages/share_kongjian.png)}.otherB{background-image:url(@serverimages/share_lianjie.png)}'.replace(/@server/ig, ymVar.jsServer));


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
        target: $listEl,
        success: function(err, data, isInited) {
            $loader.hide();

            data = data.data && data.data.ShareList || [];
            if (data.length == 0) {
                if (!wfCmp.isInit) {
                    $nofind.show();
                }
                wfCmp.destroy();
            } else {
                $nofind.hide();
                cacheMgr.add(data);

                $listEl.append(render({
                    list: data,
                    type: function(t) {
                        return shareType[t];
                    },
                    getICon: function(text) {
                        switch (text) {
                            case 'QQ':
                                return 'qq';

                            case '微信朋友圈':
                                return 'wxfz';

                            case '微信好友':
                                return 'wxfriend';
                            case '微博':
                                return 'wb';
                            case 'QQ空间':
                                return 'qqzone';
                            case '其他':
                                return 'otherB';
                            default:
                                return '';
                        }
                    },
                    fixed: function(num) {
                        return parseFloat(num).toFixed(2);
                    },
                    jsServer: function() {
                        return ymVar.jsServer
                    }
                }));
            }
        },
        addition: 45,
        before: function() {
            this.params.pageNum = this.page;
            // $.extend(this.params, req_params)

        },
        needFirst: 1
    })
    indicator.style.display = 'none';

    $body.delegate('[data-click]', 'click', function(e) {
        e.stopPropagation();

        var type = $(this).attr('data-type');
        var id = $(this).attr('data-id');
        var data = cacheMgr.getData(id);
        var sr = data.shareType;
        var product = data.product;
        if (data.shareType == 2) {
            return;
        }
        if (type == 'business') {

            //系统专题
            if (sr == 3) {
                client.gotoPage(JSON.stringify({
                    id: data.id,
                    itemId: data.itemId,
                    name: data.title || '',
                    linkUrl: '/activityList.html?topicId=' + data.itemId,
                    type: 1,
                    specialType: 1,
                    page: ''
                }));
            } else if (sr == 4) {
                //商家专题
                client.gotoPage(JSON.stringify({
                    id: data.id,
                    itemId: data.itemId,
                    name: data.title || '',
                    linkUrl: data.targetUrl,
                    type: 1,
                    specialType: 2,
                    page: ''
                }));

            } else {
                //todo::
                //0 是 好货单品 1 是好货轮播图跳转 2 是专题页单品跳转 3.
                var tu = data.targetUrl || '';
                if (tu == '') {
                    return;
                }

                var param = JSON.stringify({
                    returnPrice: product.returnPrice || 0,
                    targetUrl: tu,
                    itemId: product.productId,
                    fromPage: 'sr',
                    shopName: product.shopType == 1 ? '淘宝' : '天猫' || '',
                    discountPrice: product.discountPrice || 0,
                    type: 3,
                    shareType: '1',
                    shopLogo: product.shopLogo || ''
                })
                client.gotoPage(param)
            }

            // location.href = cacheMgr.getData(id).targetUrl || '#';
        }
    })
})
