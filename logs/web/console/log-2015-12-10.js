1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/=%22http:'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/=%22http:'] code: 'MODULE_NOT_FOUND' }
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

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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

{ [Error: Cannot find module './router/single.html'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/=%22http:'] code: 'MODULE_NOT_FOUND' }
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
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
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
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
        <div class="info">
                <div class="title" name="c">
                    <p></p>
                    <label style=" display:none">
                        <%=de.productName%>
                    </label>
                     <%if(de.deliveryFee==0){%>
                        <span class="post">包邮</span>
                     <%}%>
                    <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
                </div>
                <div class="row_2">
                    <span>今日特卖:</span>
                    <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
                </div>
                <div class="row_3">
                    <div class="seller">
                    <%if(de.shopType==1){%>


                    <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span> 
                    <%=de.shopName%>



                </div>
                    <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
                </div>
            </div>
            <div class="btn_box">立即购买</div>
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
        <div class="info">
                <div class="title" name="c">
                    <p></p>
                    <label style=" display:none">
                        <%=de.productName%>
                    </label>
                     <%if(de.deliveryFee==0){%>
                        <span class="post">包邮</span>
                     <%}%>
                    <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
                </div>
                <div class="row_2">
                    <span>今日特卖:</span>
                    <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
                </div>
                <div class="row_3">
                    <div class="seller">
                    <%if(de.shopType==1){%>


                    <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span> 
                    <%=de.shopName%>



                </div>
                    <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
                </div>
            </div>
            <div class="btn_box">立即购买</div>
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
<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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

<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
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
        <div class="info">
                <div class="title" name="c">
                    <p></p>
                    <label style=" display:none">
                        <%=de.productName%>
                    </label>
                     <%if(de.deliveryFee==0){%>
                        <span class="post">包邮</span>
                     <%}%>
                    <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
                </div>
                <div class="row_2">
                    <span>今日特卖:</span>
                    <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
                </div>
                <div class="row_3">
                    <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span> 
                        <%=de.shopName%>
                    <%}else{%>
                        
                    <%}%>


                </div>
                    <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
                </div>
            </div>
            <div class="btn_box">立即购买</div>
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
        <div class="info">
                <div class="title" name="c">
                    <p></p>
                    <label style=" display:none">
                        <%=de.productName%>
                    </label>
                     <%if(de.deliveryFee==0){%>
                        <span class="post">包邮</span>
                     <%}%>
                    <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
                </div>
                <div class="row_2">
                    <span>今日特卖:</span>
                    <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
                </div>
                <div class="row_3">
                    <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span> 
                        <%=de.shopName%>
                    <%}else{%>
                        
                    <%}%>


                </div>
                    <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
                </div>
            </div>
            <div class="btn_box">立即购买</div>
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
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                            <%}else{%>
                                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%>
                                    <span class="<%=type(de.storeLevel)%>"></span>
                                    <%}%>
                                        <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                            <%}else{%>
                                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%>
                                    <span class="<%=type(de.storeLevel)%>"></span>
                                    <%}%>
                                        <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                            <%}else{%>
                                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%>
                                    <span class="<%=type(de.storeLevel)%>"></span>
                                    <%}%>
                                        <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                            <%}else{%>
                                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%>
                                    <span class="<%=type(de.storeLevel)%>"></span>
                                    <%}%>
                                        <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                            <%}else{%>
                                <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%>
                                    <span class="<%=type(de.storeLevel)%>"></span>
                                    <%}%>
                                        <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                            <%}else{%>
                               淘宝 <%var len =count(de.storeLevel);for(var i =0;i<len;i++){%>
                                    <span class="<%=type(de.storeLevel)%>"></span>
                                    <%}%>
                                        <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%><div class="list_box" data-link data-id=<%=list[i].productId%> ><div class="list_top"><div class="list_left"><img src="/images/hot_product_default.jpg" csrc="<%=list[i].productImg%>"></div><div class="list_right"><div class="title mt10"><%=list[i].productName%></div><div class="row_2"><span class="order">已售<%=list[i].saleNum%></span></div><div class="row_3 clearfix"><span class="price_font"><i>¥</i><%=fixed(list[i].discountPrice)%></span><span class="fr discount"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span><%if(list[i].deliveryFee==0){%><span class="fr post">包邮</span><%}%></div></div></div></div><%}%>
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
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
            <img width=100% height=100% src="<%=de.productImg%>" />
            <%}%>
</div>
<div class="single_goods">
    <div class="info">
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
            <img width=100% height=100% src="<%=de.productImg%>" />
            <%}%>
</div>
<div class="single_goods">
    <div class="info">
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
            <img width=100% height=100% src="<%=de.productImg%>" />
            <%}%>
</div>
<div class="single_goods">
    <div class="info">
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum%></span> | <span>评价：<%=de.commentCount%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>"></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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

 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

1
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/=%22http:'] code: 'MODULE_NOT_FOUND' }
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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=de.jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div>

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType==1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class="<%=type(de.storeLevel)%>" style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 1){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                <p></p>
                <label style=" display:none">
                    <%=de.productName%>
                </label>
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i>19500.00</span><span>原价：19500.00</span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
        <div class="info">
            <div class="title" name="c">
                    <%=de.productName%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(de.discountPrice,de.originalPrice)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(de.discountPrice)%></span><span>原价：<%=fixed(de.originalPrice)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=de.shopName%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
                <span>销量：<%=de.saleNum || 0%></span> | <span>评价：<%=de.commentCount || 0%></span>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

1
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

1
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/=%22http:'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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

<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl || #%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl || '#'%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl || aaa%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl || "aaa"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl || "#"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/=%22http:'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<% if(list[i].shareType==1){%>
	<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}else{%>
	<a href='javascript:void 0;' class="order_left"><img src="<%=list[i].imgUrl%>"></a>
<%}%>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
{ [Error: Cannot find module './router/single.html'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/single.html'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/single.html'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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

{ [Error: Cannot find module './router/single.html'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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

<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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

<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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

<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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

{ [Error: Cannot find module './router/ol%EF%BC%9Fh5_uid=40'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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
            <span><%=list.data[i].browseNumber || 0%></span>
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

<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/=%22http:'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/result.html'] code: 'MODULE_NOT_FOUND' }
<Buffer 20 3c 25 66 6f 72 28 76 61 72 20 69 20 69 6e 20 6c 69 73 74 29 7b 25 3e 0d 0a 0d 0a 20 20 20 20 3c 64 69 76 20 63 6c 61 73 73 3d 22 6c 69 73 74 5f 62 ... >
[TypeError: html.split is not a function]
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

1
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/=%22http:'] code: 'MODULE_NOT_FOUND' }
 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

 <%for(var i in list){%>

    <div class="list_box">
        <div class="list_top">
            <div class="list_left">
                <img  src=="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
                <span>已售<%=list[i].saleNum%></span>
            </div>
            <div class="list_right">
               <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span><%=list[i].productName%></div>
               <div class="row_2">
                    <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                        <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>

                    <%if(list[i].deliveryFee==0){%>
                        <span class="post fl">包邮</span>
                    <%}%>
               </div>
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚 </i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

<%for(var i in list.data){%>
    <div class="order">
        <div>
            <span><%=md(list.data[i].createTime)%></span>
            <span><%=list.data[i].browseNumber || 0%></span>
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

<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
