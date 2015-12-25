1
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<div class="banner" data-click>
	<%if(de.item){%>
	    <div class="inner">
	        <%for(var i in de.item.smallImages){%>
	            <div data-carousel><img src="<%=de.item.smallImages[i]%>" /></div>
	            <%}%>
	    </div>
	    <ul id="position">
	        <%for(var i=0;i<de.item.smallImages.length;i++){%>
	            <%if(i==0){%>
	                <li class="cur"></li>
	                <%}else{%>
	                    <li></li>
	                    <%}%>
	                        <%}%>
	    </ul>
    <%}else{%>
    	<img src="<%=de.productImg%>" />
    <%}%>
</div>
<div class="single_goods">
    <div class="info">
        <a href="javascript:void(0);">
            <div class="title" data-click>
                <%=de.productName%>
            </div>
        </a>
        <div class="row_2">
            <div class="price_red fl"><i>¥</i>
                <%=de.discountPrice%>
            </div>
            <div class="price_line fl">原价：
                <%=de.originalPrice%>
            </div>
            <div class="discount">
                <%=floor(de.discountPrice,de.originalPrice)%>折</div>
            <%if(de.deliveryFee==0){%>
                <div class="mail">包邮</div>
                <%}%>
        </div>
        <div class="row_3">
            <%if(de.saleNum>0){%><span class="sales">销量：<%=de.saleNum%></span>
                <%}%>
                    <%if(de.commentCount>0){%><span class="evaluate">评价：<%=de.commentCount%></span>
                        <%}%>
        </div>
        <div class="row_4"><span class="shop fl">【<%=text(de.shopType)%>】<%=de.shopName%></span>
            <div class="grade fl">
                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%><span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
            </div>
        </div>
    </div><a class="btn_box" data-click href="javascript:void(0);">查看商品详情</a>
    <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>
</div>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/single.html'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/single.html'] code: 'MODULE_NOT_FOUND' }
<div class="banner" data-click>
	<%if(de.item){%>
	    <div class="inner">
	        <%for(var i in de.item.smallImages){%>
	            <div data-carousel><img src="<%=de.item.smallImages[i]%>" /></div>
	            <%}%>
	    </div>
	    <ul id="position">
	        <%for(var i=0;i<de.item.smallImages.length;i++){%>
	            <%if(i==0){%>
	                <li class="cur"></li>
	                <%}else{%>
	                    <li></li>
	                    <%}%>
	                        <%}%>
	    </ul>
    <%}else{%>
    	<img src="<%=de.productImg%>" />
    <%}%>
</div>
<div class="single_goods">
    <div class="info">
        <a href="javascript:void(0);">
            <div class="title" data-click>
                <%=de.productName%>
            </div>
        </a>
        <div class="row_2">
            <div class="price_red fl"><i>¥</i>
                <%=de.discountPrice%>
            </div>
            <div class="price_line fl">原价：
                <%=de.originalPrice%>
            </div>
            <div class="discount">
                <%=floor(de.discountPrice,de.originalPrice)%>折</div>
            <%if(de.deliveryFee==0){%>
                <div class="mail">包邮</div>
                <%}%>
        </div>
        <div class="row_3">
            <%if(de.saleNum>0){%><span class="sales">销量：<%=de.saleNum%></span>
                <%}%>
                    <%if(de.commentCount>0){%><span class="evaluate">评价：<%=de.commentCount%></span>
                        <%}%>
        </div>
        <div class="row_4"><span class="shop fl">【<%=text(de.shopType)%>】<%=de.shopName%></span>
            <div class="grade fl">
                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%><span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
            </div>
        </div>
    </div><a class="btn_box" data-click href="javascript:void(0);">查看商品详情</a>
    <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>
</div>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<div class="banner" data-click>
	<%if(de.item){%>
	    <div class="inner">
	        <%for(var i in de.item.smallImages){%>
	            <div data-carousel><img src="<%=de.item.smallImages[i]%>" /></div>
	            <%}%>
	    </div>
	    <ul id="position">
	        <%for(var i=0;i<de.item.smallImages.length;i++){%>
	            <%if(i==0){%>
	                <li class="cur"></li>
	                <%}else{%>
	                    <li></li>
	                    <%}%>
	                        <%}%>
	    </ul>
    <%}else{%>
    	<img width='100%' height='100%' src="<%=de.productImg%>" />
    <%}%>
</div>
<div class="single_goods">
    <div class="info">
        <a href="javascript:void(0);">
            <div class="title" data-click>
                <%=de.productName%>
            </div>
        </a>
        <div class="row_2">
            <div class="price_red fl"><i>¥</i>
                <%=de.discountPrice%>
            </div>
            <div class="price_line fl">原价：
                <%=de.originalPrice%>
            </div>
            <div class="discount">
                <%=floor(de.discountPrice,de.originalPrice)%>折</div>
            <%if(de.deliveryFee==0){%>
                <div class="mail">包邮</div>
                <%}%>
        </div>
        <div class="row_3">
            <%if(de.saleNum>0){%><span class="sales">销量：<%=de.saleNum%></span>
                <%}%>
                    <%if(de.commentCount>0){%><span class="evaluate">评价：<%=de.commentCount%></span>
                        <%}%>
        </div>
        <div class="row_4"><span class="shop fl">【<%=text(de.shopType)%>】<%=de.shopName%></span>
            <div class="grade fl">
                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%><span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
            </div>
        </div>
    </div><a class="btn_box" data-click href="javascript:void(0);">查看商品详情</a>
    <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>
</div>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<div class="banner" data-click>
	<%if(de.item){%>
	    <div class="inner">
	        <%for(var i in de.item.smallImages){%>
	            <div data-carousel><img src="<%=de.item.smallImages[i]%>" /></div>
	            <%}%>
	    </div>
	    <ul id="position">
	        <%for(var i=0;i<de.item.smallImages.length;i++){%>
	            <%if(i==0){%>
	                <li class="cur"></li>
	                <%}else{%>
	                    <li></li>
	                    <%}%>
	                        <%}%>
	    </ul>
    <%}else{%>
    	<img width=100% height=100% src="<%=de.productImg%>" />
    <%}%>
</div>
<div class="single_goods">
    <div class="info">
        <a href="javascript:void(0);">
            <div class="title" data-click>
                <%=de.productName%>
            </div>
        </a>
        <div class="row_2">
            <div class="price_red fl"><i>¥</i>
                <%=de.discountPrice%>
            </div>
            <div class="price_line fl">原价：
                <%=de.originalPrice%>
            </div>
            <div class="discount">
                <%=floor(de.discountPrice,de.originalPrice)%>折</div>
            <%if(de.deliveryFee==0){%>
                <div class="mail">包邮</div>
                <%}%>
        </div>
        <div class="row_3">
            <%if(de.saleNum>0){%><span class="sales">销量：<%=de.saleNum%></span>
                <%}%>
                    <%if(de.commentCount>0){%><span class="evaluate">评价：<%=de.commentCount%></span>
                        <%}%>
        </div>
        <div class="row_4"><span class="shop fl">【<%=text(de.shopType)%>】<%=de.shopName%></span>
            <div class="grade fl">
                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%><span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
            </div>
        </div>
    </div><a class="btn_box" data-click href="javascript:void(0);">查看商品详情</a>
    <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>
</div>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<div class="banner" data-click>
	<%if(de.item){%>
	    <div class="inner">
	        <%for(var i in de.item.smallImages){%>
	            <div data-carousel><img src="<%=de.item.smallImages[i]%>" /></div>
	            <%}%>
	    </div>
	    <ul id="position">
	        <%for(var i=0;i<de.item.smallImages.length;i++){%>
	            <%if(i==0){%>
	                <li class="cur"></li>
	                <%}else{%>
	                    <li></li>
	                    <%}%>
	                        <%}%>
	    </ul>
    <%}else{%>
    	<img width=100% height=100% src="<%=de.productImg%>" />
    <%}%>
</div>
<div class="single_goods">
    <div class="info">
        <a href="javascript:void(0);">
            <div class="title" data-click>
                <%=de.productName%>
            </div>
        </a>
        <div class="row_2">
            <div class="price_red fl"><i>¥</i>
                <%=de.discountPrice%>
            </div>
            <div class="price_line fl">原价：
                <%=de.originalPrice%>
            </div>
            <div class="discount">
                <%=floor(de.discountPrice,de.originalPrice)%>折</div>
            <%if(de.deliveryFee==0){%>
                <div class="mail">包邮</div>
                <%}%>
        </div>
        <div class="row_3">
            <%if(de.saleNum>0){%><span class="sales">销量：<%=de.saleNum%></span>
                <%}%>
                    <%if(de.commentCount>0){%><span class="evaluate">评价：<%=de.commentCount%></span>
                        <%}%>
        </div>
        <div class="row_4"><span class="shop fl">【<%=text(de.shopType)%>】<%=de.shopName%></span>
            <div class="grade fl">
                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%><span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
            </div>
        </div>
    </div><a class="btn_box" data-click href="javascript:void(0);">查看商品详情</a>
    <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>
</div>

<div class="banner" data-click>
	<%if(de.item){%>
	    <div class="inner">
	        <%for(var i in de.item.smallImages){%>
	            <div data-carousel><img src="<%=de.item.smallImages[i]%>" /></div>
	            <%}%>
	    </div>
	    <ul id="position">
	        <%for(var i=0;i<de.item.smallImages.length;i++){%>
	            <%if(i==0){%>
	                <li class="cur"></li>
	                <%}else{%>
	                    <li></li>
	                    <%}%>
	                        <%}%>
	    </ul>
    <%}else{%>
    	<img width=100% height=100% src="<%=de.productImg%>" />
    <%}%>
</div>
<div class="single_goods">
    <div class="info">
        <a href="javascript:void(0);">
            <div class="title" data-click>
                <%=de.productName%>
            </div>
        </a>
        <div class="row_2">
            <div class="price_red fl"><i>¥</i>
                <%=de.discountPrice%>
            </div>
            <div class="price_line fl">原价：
                <%=de.originalPrice%>
            </div>
            <div class="discount">
                <%=floor(de.discountPrice,de.originalPrice)%>折</div>
            <%if(de.deliveryFee==0){%>
                <div class="mail">包邮</div>
                <%}%>
        </div>
        <div class="row_3">
            <%if(de.saleNum>0){%><span class="sales">销量：<%=de.saleNum%></span>
                <%}%>
                    <%if(de.commentCount>0){%><span class="evaluate">评价：<%=de.commentCount%></span>
                        <%}%>
        </div>
        <div class="row_4"><span class="shop fl">【<%=text(de.shopType)%>】<%=de.shopName%></span>
            <div class="grade fl">
                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%><span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
            </div>
        </div>
    </div><a class="btn_box" data-click href="javascript:void(0);">查看商品详情</a>
    <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>
</div>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<div class="banner" data-click>
	<%if(de.item){%>
	    <div class="inner">
	        <%for(var i in de.item.smallImages){%>
	            <div data-carousel><img src="<%=de.item.smallImages[i]%>" /></div>
	            <%}%>
	    </div>
	    <ul id="position">
	        <%for(var i=0;i<de.item.smallImages.length;i++){%>
	            <%if(i==0){%>
	                <li class="cur"></li>
	                <%}else{%>
	                    <li></li>
	                    <%}%>
	                        <%}%>
	    </ul>
    <%}else{%>
    	<img width=100% height=100% src="<%=de.productImg%>" />
    <%}%>
</div>
<div class="single_goods">
    <div class="info">
        <a href="javascript:void(0);">
            <div class="title" data-click>
                <%=de.productName%>
            </div>
        </a>
        <div class="row_2">
            <div class="price_red fl"><i>¥</i>
                <%=de.discountPrice%>
            </div>
            <div class="price_line fl">原价：
                <%=de.originalPrice%>
            </div>
            <div class="discount">
                <%=floor(de.discountPrice,de.originalPrice)%>折</div>
            <%if(de.deliveryFee==0){%>
                <div class="mail">包邮</div>
                <%}%>
        </div>
        <div class="row_3">
            <%if(de.saleNum>0){%><span class="sales">销量：<%=de.saleNum%></span>
                <%}%>
                    <%if(de.commentCount>0){%><span class="evaluate">评价：<%=de.commentCount%></span>
                        <%}%>
        </div>
        <div class="row_4"><span class="shop fl">【<%=text(de.shopType)%>】<%=de.shopName%></span>
            <div class="grade fl">
                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%><span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
            </div>
        </div>
    </div><a class="btn_box" data-click href="javascript:void(0);">查看商品详情</a>
    <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>
</div>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<div class="banner" data-click>
	<%if(de.item){%>
	    <div class="inner">
	        <%for(var i in de.item.smallImages){%>
	            <div data-carousel><img src="<%=de.item.smallImages[i]%>" /></div>
	            <%}%>
	    </div>
	    <ul id="position">
	        <%for(var i=0;i<de.item.smallImages.length;i++){%>
	            <%if(i==0){%>
	                <li class="cur"></li>
	                <%}else{%>
	                    <li></li>
	                    <%}%>
	                        <%}%>
	    </ul>
    <%}else{%>
    	<img width=100% height=100% src="<%=de.productImg%>" />
    <%}%>
</div>
<div class="single_goods">
    <div class="info">
        <a href="javascript:void(0);">
            <div class="title" data-click>
                <%=de.productName%>
            </div>
        </a>
        <div class="row_2">
            <div class="price_red fl"><i>¥</i>
                <%=de.discountPrice%>
            </div>
            <div class="price_line fl">原价：
                <%=de.originalPrice%>
            </div>
            <div class="discount">
                <%=floor(de.discountPrice,de.originalPrice)%>折</div>
            <%if(de.deliveryFee==0){%>
                <div class="mail">包邮</div>
                <%}%>
        </div>
        <div class="row_3">
            <%if(de.saleNum>0){%><span class="sales">销量：<%=de.saleNum%></span>
                <%}%>
                    <%if(de.commentCount>0){%><span class="evaluate">评价：<%=de.commentCount%></span>
                        <%}%>
        </div>
        <div class="row_4"><span class="shop fl">【<%=text(de.shopType)%>】<%=de.shopName%></span>
            <div class="grade fl">
                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%><span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
            </div>
        </div>
    </div><a class="btn_box" data-click href="javascript:void(0);">查看商品详情</a>
    <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>
</div>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<div class="banner" data-click>
	<%if(de.item){%>
	    <div class="inner">
	        <%for(var i in de.item.smallImages){%>
	            <div data-carousel><img src="<%=de.item.smallImages[i]%>" /></div>
	            <%}%>
	    </div>
	    <ul id="position">
	        <%for(var i=0;i<de.item.smallImages.length;i++){%>
	            <%if(i==0){%>
	                <li class="cur"></li>
	                <%}else{%>
	                    <li></li>
	                    <%}%>
	                        <%}%>
	    </ul>
    <%}else{%>
    	<img width=100% height=100% src="<%=de.productImg%>" />
    <%}%>
</div>
<div class="single_goods">
    <div class="info">
        <a href="javascript:void(0);">
            <div class="title" data-click>
                <%=de.productName%>
            </div>
        </a>
        <div class="row_2">
            <div class="price_red fl"><i>¥</i>
                <%=de.discountPrice%>
            </div>
            <div class="price_line fl">原价：
                <%=de.originalPrice%>
            </div>
            <div class="discount">
                <%=floor(de.discountPrice,de.originalPrice)%>折</div>
            <%if(de.deliveryFee==0){%>
                <div class="mail">包邮</div>
                <%}%>
        </div>
        <div class="row_3">
            <%if(de.saleNum>0){%><span class="sales">销量：<%=de.saleNum%></span>
                <%}%>
                    <%if(de.commentCount>0){%><span class="evaluate">评价：<%=de.commentCount%></span>
                        <%}%>
        </div>
        <div class="row_4"><span class="shop fl">【<%=text(de.shopType)%>】<%=de.shopName%></span>
            <div class="grade fl">
                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%><span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
            </div>
        </div>
    </div><a class="btn_box" data-click href="javascript:void(0);">查看商品详情</a>
    <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>
</div>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/pref'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/pl'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

1
<%for(var i in list){%>
    <div class="list_box" data-link data-id=<%=list[i].productId%> >
        <div class="list_top">
            <div class="list_left"><img src="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div>
            <div class="list_right">
                <div class="title mt10">【
                    <%=text(list[i].shopType)%>】
                        <%=list[i].productName%>
                </div>
                <div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div>
                <div class="row_3 clearfix">
                    <span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span>
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="fr discount">
                		<%=floor(list[i].discountPrice,list[i].originalPrice)%>折
                		</span>
                        <%}%>
                            <%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span>
                                <%}%>
                                    }
                </div>
            </div>
        </div>
        <div class="list_bottom" data-link data-share="1" data-id=<%=list[i].productId%> >
            <div class="order" <%if(!list[i].totalNum){%>style="visibility:hidden;"
                <%}%>>已推广
                    <%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix"><span class="income fl"><i>赚</i><%=fixed(list[i].returnPrice)%></span><span class="fl color03">（收益<%=fixed(list[i].realReturnRate,0) %>%）</span><span class="share fr"><img src="<%=jsserver()%>images/pic_share.png" csrc="<%=jsserver()%>images/pic_share.png"></span></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
<%for(var i in list){%>
    <div class="list_box" data-link data-id=<%=list[i].productId%> >
        <div class="list_top">
            <div class="list_left"><img src="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div>
            <div class="list_right">
                <div class="title mt10">【
                    <%=text(list[i].shopType)%>】
                        <%=list[i].productName%>
                </div>
                <div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div>
                <div class="row_3 clearfix">
                    <span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span>
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="fr discount">
                		<%=floor(list[i].discountPrice,list[i].originalPrice)%>折
                		</span>
                        <%}%>
                            <%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span>
                                <%}%>
                                    }
                </div>
            </div>
        </div>
        <div class="list_bottom" data-link data-share="1" data-id=<%=list[i].productId%> >
            <div class="order" <%if(!list[i].totalNum){%>style="visibility:hidden;"
                <%}%>>已推广
                    <%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix"><span class="income fl"><i>赚</i><%=fixed(list[i].returnPrice)%></span><span class="fl color03">（收益<%=fixed(list[i].realReturnRate,0) %>%）</span><span class="share fr"><img src="<%=jsserver()%>images/pic_share.png" csrc="<%=jsserver()%>images/pic_share.png"></span></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
<%for(var i in list){%>
    <div class="list_box" data-link data-id=<%=list[i].productId%> >
        <div class="list_top">
            <div class="list_left"><img src="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div>
            <div class="list_right">
                <div class="title mt10">【
                    <%=text(list[i].shopType)%>】
                        <%=list[i].productName%>
                </div>
                <div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div>
                <div class="row_3 clearfix">
                    <span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span>
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)==10){%>
                        <span class="fr discount">
                		<%=floor(list[i].discountPrice,list[i].originalPrice)%>折
                		</span>
                        <%}%>
                            <%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span>
                                <%}%>
                                    }
                </div>
            </div>
        </div>
        <div class="list_bottom" data-link data-share="1" data-id=<%=list[i].productId%> >
            <div class="order" <%if(!list[i].totalNum){%>style="visibility:hidden;"
                <%}%>>已推广
                    <%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix"><span class="income fl"><i>赚</i><%=fixed(list[i].returnPrice)%></span><span class="fl color03">（收益<%=fixed(list[i].realReturnRate,0) %>%）</span><span class="share fr"><img src="<%=jsserver()%>images/pic_share.png" csrc="<%=jsserver()%>images/pic_share.png"></span></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
<%for(var i in list){%>
    <div class="list_box" data-link data-id=<%=list[i].productId%> >
        <div class="list_top">
            <div class="list_left"><img src="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div>
            <div class="list_right">
                <div class="title mt10">【
                    <%=text(list[i].shopType)%>】
                        <%=list[i].productName%>
                </div>
                <div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div>
                <div class="row_3 clearfix">
                    <span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span>
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="fr discount">
                		<%=floor(list[i].discountPrice,list[i].originalPrice)%>折
                		</span>
                        <%}%>
                            <%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span>
                                <%}%>
                                    }
                </div>
            </div>
        </div>
        <div class="list_bottom" data-link data-share="1" data-id=<%=list[i].productId%> >
            <div class="order" <%if(!list[i].totalNum){%>style="visibility:hidden;"
                <%}%>>已推广
                    <%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix"><span class="income fl"><i>赚</i><%=fixed(list[i].returnPrice)%></span><span class="fl color03">（收益<%=fixed(list[i].realReturnRate,0) %>%）</span><span class="share fr"><img src="<%=jsserver()%>images/pic_share.png" csrc="<%=jsserver()%>images/pic_share.png"></span></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
<%for(var i in list){%>
    <div class="list_box" data-link data-id=<%=list[i].productId%> >
        <div class="list_top">
            <div class="list_left"><img src="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div>
            <div class="list_right">
                <div class="title mt10">【
                    <%=text(list[i].shopType)%>】
                        <%=list[i].productName%>
                </div>
                <div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div>
                <div class="row_3 clearfix">
                    <span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span>
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="fr discount">
                		<%=floor(list[i].discountPrice,list[i].originalPrice)%>折
                		</span>
                        <%}%>
                            <%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span>
                                <%}%>
                                    }
                </div>
            </div>
        </div>
        <div class="list_bottom" data-link data-share="1" data-id=<%=list[i].productId%> >
            <div class="order" <%if(!list[i].totalNum){%>style="visibility:hidden;"
                <%}%>>已推广
                    <%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix"><span class="income fl"><i>赚</i><%=fixed(list[i].returnPrice)%></span><span class="fl color03">（收益<%=fixed(list[i].realReturnRate,0) %>%）</span><span class="share fr"><img src="<%=jsserver()%>images/pic_share.png" csrc="<%=jsserver()%>images/pic_share.png"></span></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
<%for(var i in list){%>
    <div class="list_box" data-link data-id=<%=list[i].productId%> >
        <div class="list_top">
            <div class="list_left"><img src="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div>
            <div class="list_right">
                <div class="title mt10">【
                    <%=text(list[i].shopType)%>】
                        <%=list[i].productName%>
                </div>
                <div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div>
                <div class="row_3 clearfix">
                    <span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span>
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="fr discount">
                		<%=floor(list[i].discountPrice,list[i].originalPrice)%>折
                		</span>
                        <%}%>
                            <%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span>
                                <%}%>
                                    }
                </div>
            </div>
        </div>
        <div class="list_bottom" data-link data-share="1" data-id=<%=list[i].productId%> >
            <div class="order" <%if(!list[i].totalNum){%>style="visibility:hidden;"
                <%}%>>已推广
                    <%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix"><span class="income fl"><i>赚</i><%=fixed(list[i].returnPrice)%></span><span class="fl color03">（收益<%=fixed(list[i].realReturnRate,0) %>%）</span><span class="share fr"><img src="<%=jsserver()%>images/pic_share.png" csrc="<%=jsserver()%>images/pic_share.png"></span></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browerNumber || 0%></span>
            <span>
            <%if(list.code ==1) {%>
<%=list.data[i].productionOrder || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].recordOrders || 0%>
            <%}else{%>
                <%=list.data[i].settlementOrders || 0%>
                    <%}%>

    
            笔</span>
        </div>
        <div>
            <span class="year"><%=year(list.data[i].createTime)%></span>
            <span><%=list.data[i].clicks || 0%></span>
            <span class="color01">¥
<%if(list.code ==1) {%>
<%=list.data[i].estimatedReturn || 0%>
    <%}else if(list.code==2){%>
        <%=list.data[i].soonBalance || 0%>
            <%}else{%>
                <%=list.data[i].availableBalance || 0%>
                    <%}%>

            </span>
        </div>
    </div>
    <%}%>

