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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
{ [Error: Cannot find module './router/=%22http:'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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
{ [Error: Cannot find module './router/=%22http:'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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
{ [Error: Cannot find module './router/=%22http:'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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
{ [Error: Cannot find module './router/=%22http:'] code: 'MODULE_NOT_FOUND' }
1
 <%for(var i in list){%>

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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
 <%for(var i in list){%>

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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
 <%for(var i in list){%>

    <div class="list_box" data-link>
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
        <div class="list_bottom" data-share>
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

    <div class="list_box" data-link data-id="<%=list[i].id%>">
        <div class="list_top" >
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
        <div class="list_bottom" data-share>
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
 <%for(var i in list){%>

    <div class="list_box" >
        <div class="list_top" data-link  data-id="<%=list[i].id%>">
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
        <div class="list_bottom" data-link  data-id="<%=list[i].id%>" data-share>
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
1
 <%for(var i in list){%>

    <div class="list_box" >
        <div class="list_top" data-link  data-id="<%=list[i].productId%>">
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
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share>
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

    <div class="list_box" >
        <div class="list_top" data-link  data-id="<%=list[i].productId%>">
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
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
<%for(var i in list){%><div class="share_record mb013"><div class="order_box "><div class="order_info">



<span class="fl <%=getICon(list[i].channelName)%>">


<%=list[i].channelName%>默认渠道</span>
<span class="fr"><%=list[i].createTime%></span>
</div>
<div class="order_con">

<a href="<%=list[i].targetUrl || "javascript:void 0;"%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>


<div class="order_right"><div class="row_1"><%=list[i].title%></div><div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div><div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div></div><div class="order_rebate"><div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div></div></div><div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div></div></div><%}%>
<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a href="<%=list[i].targetUrl || " javascript:void 0; "%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span style="background-image:url(<%=jsServer%>images/icon_eye.png)/"><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)/"><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a href="<%=list[i].targetUrl || " javascript:void 0; "%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span style="background-image:url(<%=jsServer%>images/icon_eye.png)/"><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a href="<%=list[i].targetUrl || " javascript:void 0; "%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span style="background-image:url(<%=jsServer%>images/icon_eye.png)"><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a href="<%=list[i].targetUrl || " javascript:void 0; "%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span style="background-image:url(<%=jsServer%>images/icon_eye.png)"><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].browerNumber%></span><span><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a href="<%=list[i].targetUrl || " javascript:void 0; "%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><spanstyle="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a href="<%=list[i].targetUrl || " javascript:void 0; "%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a href="<%=list[i].targetUrl || " javascript:void 0; "%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a href="<%=list[i].targetUrl || " javascript:void 0; "%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a href="<%=list[i].targetUrl || " javascript:void 0; "%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a href="<%=list[i].targetUrl || " javascript:void 0; "%>" class="order_left"><img src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type='business' data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type='business' data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type='business' data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type='business' data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-id="<%= list[i].itemId%>" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-id="<%= list[i].itemId%>" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-id="<%= list[i].itemId%>" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-id="<%= list[i].itemId%>" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-id="<%= list[i].itemId%>" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-id="<%= list[i].itemId%>" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-id="<%= list[i].itemId%>" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-id="<%= list[i].itemId%>" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-id="<%= list[i].itemId%>" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-id="<%= list[i].itemId%>" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
               <div class="row_3">市场价： <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
            </div>
        </div>
        <div class="list_bottom" data-link  data-id="<%=list[i].productId%>" data-share="1">
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
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-id="<%= list[i].itemId%>" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class="share_record mb013">
        <div class="order_box ">
            <div class="order_info">
                <span class="fl <%=getICon(list[i].channelName)%>">


					<%=list[i].channelName%>默认渠道</span>
                <span class="fr"><%=list[i].createTime%></span>
            </div>
            <div class="order_con">
                <a  class="order_left"><img data-type="business" data-id="<%= list[i].itemId%>" data-click src="<%=list[i].imgUrl%>"></a>
                <div class="order_right">
                    <div class="row_1">
                        <%=list[i].title%>
                    </div>
                    <div class="row_2">订单数<span class="color01"><%=list[i].orders%></span></div>
                    <div class="row_3">预计收益<span class="color01"> ¥<%=list[i].estimatedReturn || 0%></span></div>
                </div>
                <div class="order_rebate">
                    <div class="circle">转化率<span class="b_font"><%=fixed(list[i].converRate || 0 )%>%</span></div>
                </div>
            </div>
            <div class="share_info pb013"><span><%=type(list[i].shareType)%></span><span style="background-image:url(<%=jsServer%>images/icon_eye.png)" ><%=list[i].browerNumber%></span><span style="background-image:url(<%=jsServer%>images/icon_zan.png)"><%=list[i].clicks%></span></div>
        </div>
    </div>
    <%}%>

