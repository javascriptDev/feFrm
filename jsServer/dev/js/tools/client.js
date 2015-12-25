define('js/tools/client', function(require, exports, module) {


    module.exports = {
        share: _share,
        gotoPage: _goto,
        getUid: _getUid,
        gotoDetail: _gotoDetail,
        newPage: _newPage,
        shipWallet: _shipWallet,
        gotoMain: _gotoMain,
        showWarn: _showWarn,
        hideWarn: _hideWarn,
        hideLayer: _hideLayer,
        hideBar: _hideBar,
        showBar: _showBar
    }

    function _hideBar() {
        try {
            window.common.showHideGoodsBar(1)

        } catch (e) {
            window.showHideGoodsBar && window.showHideGoodsBar(1)
        }
    }

    function _showBar() {
        try {
            window.common.showHideGoodsBar(0)

        } catch (e) {
            window.showHideGoodsBar && window.showHideGoodsBar(0)
        }

    }

    function _hideLayer() {
        try {
            window.common.hideBlackView();
        } catch (e) {
            window.hideBlackView && window.hideBlackView();
        }
    }

    function _showWarn() {
        try {
            window.common.showWarn()
        } catch (e) {
            window.showWarn && window.showWarn();
        }

    }

    function _hideWarn() {
        try {
            window.common.hideWarn()
        } catch (e) {
            window.hideWarn && window.hideWarn();
        }

    }

    function _gotoDetail(orderid, unionid) {
        try {
            window.common.shipOrderDetail("", orderid, unionid)
        } catch (e) {
            window.shipOrderDetail && window.shipOrderDetail(orderid, unionid);
        }
    }

    function _shipWallet() {
        try {
            window.common.shipWallet();
        } catch (e) {
            window.shipWallet && window.shipWallet();
        }
    }

    function _getUid(fn) {
        try {
            return window.common.getUser();
        } catch (e) {
            return window.getUid && window.getUid();
        }
    }

    function _gotoMain() {
        try {
            window.common.gotoMain();
        } catch (e) {

            window.gotoMain && window.gotoMain();

        }
    }

    function _share(param) {
        try {
            window.common.shareInfo(param)
        } catch (e) {
            window.shareInfo && window.shareInfo(param)
        }
    }

    function _goto(param) {
        console.log(param)
        //type 0 是 好货单品 1 是好货轮播图跳转 2 是专题页单品跳转
        try {
            window.shop.shopPage(param)
        } catch (e) {
            window.carouselRedirect && window.carouselRedirect(param)
        }
    }

    /**
     * push web view
     * @param  {string} url     跳转的url
     * @param  {string} needbar 0.原声 1.h5
     * @return {undefined}         
     */
    function _newPage(url, needbar, type) {
        try {
            window.common.newWebPage(url, needbar || "0", type || 0);
        } catch (e) {
            window.newPage && window.newPage(url, needbar || "0", type);
        }
    }

})
