<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
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

    <div class="list_box" >
        <div class="list_top" data-link  data-id="<%=list[i].productId%>">
            <div class="list_left">
                <img  src="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚</i> <%= fixed(list[i].returnPrice)%></span>
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

 <%for(var i in list){%>

    <div class="list_box" >
        <div class="list_top" data-link  data-id="<%=list[i].productId%>">
            <div class="list_left">
                <img  src="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚</i> <%= fixed(list[i].returnPrice)%></span>
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

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
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

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
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

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/search.html'] code: 'MODULE_NOT_FOUND' }
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
{ [Error: Cannot find module './router/result.html'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/sc&notStatistics=true&unid=350085ec-354b-48f0-ae28-e89841e704ce'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box" >
        <div class="list_top" data-link  data-id="<%=list[i].productId%>">
            <div class="list_left">
                <img  src="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚</i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/sc.html'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box" >
        <div class="list_top" data-link  data-id="<%=list[i].productId%>">
            <div class="list_left">
                <img  src="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚</i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
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

    <div class="list_box" >
        <div class="list_top" data-link  data-id="<%=list[i].productId%>">
            <div class="list_left">
                <img  src="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚</i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
 <%for(var i in list){%>

    <div class="list_box" >
        <div class="list_top" data-link  data-id="<%=list[i].productId%>">
            <div class="list_left">
                <img  src="<%=jsserver()%>images/hot_product_default.jpg" csrc="<%=list[i].productImg%>">
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
            <div class="order">30天推广<%=list[i].totalNum%>单</div>
            <div class="bottom_right clearfix">
                <span class="income fl">
                <i>赚</i> <%= fixed(list[i].returnPrice)%></span>
                <span class="fl color03">分享赚<%=fixed(list[i].realReturnRate,0) %>%</span>
            </div>
        </div>
    </div>
<%}%>

1
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item data-id="<%=list[i].productId%>">
        <img src="<%=list[i].productImg%>">
        <div class=inner>
            <div class="title"><span><img src="<%=text(list[i].shopType)%>"></span>
                <%=list[i].productName%>
            </div>
            <div class="row_2">
                <%if(floor(list[i].discountPrice,list[i].originalPrice)!=10){%>
                    <span class="discount fl"><%=floor(list[i].discountPrice,list[i].originalPrice)%>折</span>
                    <%}%>
                        <%if(list[i].deliveryFee==0){%>
                            <span class="post fl">包邮</span>
                            <%}%>
            </div>
        </div>
        <div class=foot>
        	<span class=discount>¥<%=list[i].discountPrice%></span>
        	<span class=original>¥<%=list[i].originalPrice%></span>
        	<div class=buy>立即购买</div>
        </div>
    </div>
    <%}%>

