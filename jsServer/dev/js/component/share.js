define('js/component/share', function(require, exports, module) {
    // 'http://172.16.40.215:8080
    // 'http://svn.emar.com:8877'
    var server = 'http://172.16.40.215:8080';

    //page url
    var olUrl           = '/ol.html',
        searchResult    = '/result.html',
        search          = '/search.html',
        plp             = '/pl.html',
        sr              = '/shareRecord.html' ;


    //列表页api
    var olApi               = '/queqiao/account/getOrderList',
        //余额api
        balanceApi          = '/queqiao/account/getUserAccountInfo',
        //业绩api
        yjApi               = '/queqiao/performance/getSummaryInfo',
        //统计api
        statisticsApi       = '/queqiao/share/updateShareRecord',
        //统计点击api
        clickLogApi         = server + '/queqiao/log/saveClickLog',
        //统计浏览api
        browseApi           = server + '/queqiao/log/saveBrowseLog',

        sc                  = server + '/queqiao/collectionShare/clickCollectionShareUrl',
        //单品详情api
        productDetailApi    = '/product/getProductInfoQQiaoShare',
        //淘点金api
        tdjApi              = '/tdj/getTaodianjinInfo',
        //新订单提醒
        newOl               = '/queqiao/order/getNewOrderNum',
        //搜索结果页面数据Api
        searchResultApi     = '/product/getQQiaoSolrProductList',
        //筛选面板类目
        searchCategoryApi   = server + '/product/getTopCategoryList?test=true',
        //搜索结果页面无结果,推荐数据api
        recommendApi        = server + '/product/getQueQiaoProductList?test=true&pageNum=1&pageSize=20',
        //主页列表数据api
        mainApi             = server + '/product/getQueQiaoProductList',
        //首页轮播图api
        carsouselApi        = server + '/product/getQueQiaoCarouselList?test=true',
        //热门搜索词
        hotSearchWord       = server + '/product/getQueQiaoCategoryHot?test=true&type=2',
        //首页热门分类(圆圈)
        hotCategory         = server + '/product/getQueQiaoCategoryHot?test=true&type=1',
        //分享出去的专题api
        activityApi         = server + '/topic/getTopicInfoQueQiaoShare',
        //app内专题接口
        appActivityAPI      = server + '/topic/getTopicInfoQueQiao',
        //分享记录接口
        shareRecordApi      = server + '/queqiao/share/getShareList',
        //业绩列表
        pl                 = server + '/queqiao/performance/getPerformanceList';

    module.exports = {
        server              : server,
        //搜索结果页
        resultUrl           : searchResult,
        //搜索页
        searchUrl           : search,
        //业绩列表页
        prPage              : plp,
        //分享记录页
        srPage              : sr,
        sc                  : sc,

        searchCategoryApi   : searchCategoryApi,
        recommendApi        : recommendApi,
        mainApi             : mainApi,
        carsouselApi        : carsouselApi,
        hotSearchWord       : hotSearchWord,
        hotCategory         : hotCategory,
        appActivityAPI      : appActivityAPI,
        activityApi         : activityApi,
        clickApi            : clickLogApi,
        browseApi           : browseApi,
        //订单列表页
        olUrl               : function(param) {
                                return olUrl + (param || '');
                            },
        searchResultApi     : function() {
                                return server + searchResultApi;
                            },
        
        //订单列表api
        olApi               : function(param) {
                                return server + olApi + (param || '') + '&test=true';
                            },
        balanceApi          : function(uid) {
                                return server + balanceApi + '?userId=' + uid + '&test=true';
                            },
        //业绩api
        yjApi               : function(bt, et, uid) {
                                return server + yjApi + '?beginTime=' + (bt||'') + '&endTime=' + (et||'') + '&userId=' + (uid||'') + '&test=true';
                            },
        pdApi               : function(pid) {
                                return server + productDetailApi + '?productId=' + pid + '&test=true';
                            },
        tdjApi              : function(pid) {
                                return server + tdjApi + '?NumIids=' + pid + '&test=true';
                            },
        newOlApi            : function(uid, lastTime) {
                                return server + newOl + '?userId=' + uid + '&lastTime=' + lastTime + '&test=true';
                            },
        shareRecordApi      : function(uid){
                                return shareRecordApi+'?test=true&userId=' + uid;
                            },
        plApi               :function(uid){
                                return pl + '?test=true&userId=' + uid
                            }

    }
})
