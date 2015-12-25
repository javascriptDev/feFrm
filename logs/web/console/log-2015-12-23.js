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
                    <%=de.item.title%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(pd.discountPrice,pd.price)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(pd.discountPrice)%></span><span>原价：<%=fixed(pd.price)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=pd.nick%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
               <%if(de.saleNum){%> <span>销量：<%=de.saleNum%></span> <%if(de.commentCount){%> | <%}%><%}%>   <%if(de.commentCount){%> <span>评价：<%=de.commentCount%></span> <%}%>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

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
                    <%=de.item.title%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(pd.discountPrice,pd.price)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(pd.discountPrice)%></span><span>原价：<%=fixed(pd.price)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=pd.nick%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
               <%if(de.saleNum){%> <span>销量：<%=de.saleNum%></span> <%if(de.commentCount){%> | <%}%><%}%>   <%if(de.commentCount){%> <span>评价：<%=de.commentCount%></span> <%}%>
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
                    <%=de.item.title%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(pd.discountPrice,pd.price)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(pd.discountPrice)%></span><span>原价：<%=fixed(pd.price)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=pd.nick%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
               <%if(de.saleNum){%> <span>销量：<%=de.saleNum%></span> <%if(de.commentCount){%> | <%}%><%}%>   <%if(de.commentCount){%> <span>评价：<%=de.commentCount%></span> <%}%>
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
                    <%=de.item.title%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(pd.discountPrice,pd.price)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(pd.discountPrice)%></span><span>原价：<%=fixed(pd.price)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=pd.nick%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
               <%if(de.saleNum){%> <span>销量：<%=de.saleNum%></span> <%if(de.commentCount){%> | <%}%><%}%>   <%if(de.commentCount){%> <span>评价：<%=de.commentCount%></span> <%}%>
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
                    <%=de.item.title%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(pd.discountPrice,pd.price)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(pd.discountPrice)%></span><span>原价：<%=fixed(pd.price)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=pd.nick%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
               <%if(de.saleNum){%> <span>销量：<%=de.saleNum%></span> <%if(de.commentCount){%> | <%}%><%}%>   <%if(de.commentCount){%> <span>评价：<%=de.commentCount%></span> <%}%>
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
                    <%=de.item.title%>
                <p></p>
                
                <%if(de.deliveryFee==0){%>
                    <span class="post">包邮</span>
                    <%}%>
                        <span class="discount">
                        <%=floor(pd.discountPrice,pd.price)%>折
                    </span>
            </div>
            <div class="row_2">
                <span>今日特卖:</span>
                <span><i>¥</i><%=fixed(pd.discountPrice)%></span><span>原价：<%=fixed(pd.price)%></span>
            </div>
            <div class="row_3">
                <div class="seller">
                    <%if(de.shopType == 2){%>
                        <span><img src="<%=jsServer()%>images/logo_tianmao.png" /></span>
                        <%=pd.nick%>
                    <%}else{%>
                        淘宝 <span class=<%= type(de.storeLevel) %> style='width:<%=count(de.storeLevel,40)%>'></span>
                    <%}%>
                </div>
               <%if(de.saleNum){%> <span>销量：<%=de.saleNum%></span> <%if(de.commentCount){%> | <%}%><%}%>   <%if(de.commentCount){%> <span>评价：<%=de.commentCount%></span> <%}%>
            </div>
        </div>
        <div class="btn_box" data-click href="javascript:void(0);">立即购买</div>
        <!-- <div style="text-align:center;margin-top:30px;height:40px;line-height:40px;">powered by 蒲公英</div> -->

{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/er'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/images'] code: 'MODULE_NOT_FOUND' }
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价: &nbsp;</span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
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
               <div class="row_3">市场价: <%=list[i].originalPrice %> </div>
               <div class="row_4"><span>促销价:  </span><span class=""><i>¥</i><%=list[i].discountPrice%></span></div>
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
[ReferenceError: path is not defined]
{ [Error: ENOENT: no such file or directory, open 'D:\yqf\web\scTpl.html']
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\yqf\\web\\scTpl.html' }
{ [Error: ENOENT: no such file or directory, open 'D:\yqf\web\scTpl.html']
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\yqf\\web\\scTpl.html' }
 <div class='item'>
        <img src="">
        </div>
 <div class='item'>
        <img src="">
        </div>
{ [Error: ENOENT: no such file or directory, open 'D:\yqf\web\view\pub\wfLoader.html']
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\yqf\\web\\view\\pub\\wfLoader.html' }
 <div class='item'>
        <img src="">
        </div>
{ [Error: Cannot find module './router/queqiao'] code: 'MODULE_NOT_FOUND' }
 <div class='item'>
        <img src="">
        </div>
{ [Error: Cannot find module './router/queqiao'] code: 'MODULE_NOT_FOUND' }
 <div class='item'>
        <img src="">
        </div>
{ [Error: Cannot find module './router/queqiao'] code: 'MODULE_NOT_FOUND' }
 <div class='item'>
        <img src="">
        </div>
{ [Error: Cannot find module './router/queqiao'] code: 'MODULE_NOT_FOUND' }
 <div class='item'>
        <img src="">
        </div>
{ [Error: Cannot find module './router/queqiao'] code: 'MODULE_NOT_FOUND' }
 <div class='item'>
        <img src="">
        </div>
{ [Error: Cannot find module './router/queqiao'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/queqiao'] code: 'MODULE_NOT_FOUND' }
 <div class='item'>
        <img src="">
        </div>
 <div class='item'>
        <img src="">
        </div>
 <div class='item'>
        <img src="">
        </div>
 <div class='item'>
        <img src="">
        </div>
 <div class='item'>
        <img src="">
        </div>
 <div class='item'>
        <img src="">
        </div>
 <div class='item'>
        <img src="">
        </div>
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
 <div class='item'>
        <img src="">
        </div>
 <div class='item'>
        <img src="">
        </div>
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
<div class='item'>
    <img src="<%=text(list[i].shopType)%>">
    
</div>

{ [ReferenceError: D:\yqf\web\view\sc.html:2
    1| <% include pub/header.html %>
 >> 2|     <div class='list'>
    3|        <% include ../template/scTpl.html%>
    4|     </div>
    5|             <% include ../template/pub/wfLoader.html%>

text is not defined] path: 'D:\\yqf\\web\\view\\sc.html' }
<div class='item'>
<!-- <%=text(list[i].shopType)%> -->
    <img src="">

</div>

{ [ReferenceError: D:\yqf\web\view\sc.html:2
    1| <% include pub/header.html %>
 >> 2|     <div class='list'>
    3|        <% include ../template/scTpl.html%>
    4|     </div>
    5|             <% include ../template/pub/wfLoader.html%>

text is not defined] path: 'D:\\yqf\\web\\view\\sc.html' }
<div class='item'>
<!-- <%=text(list[i].shopType)%> -->
    <img src="">

</div>

{ [ReferenceError: D:\yqf\web\view\sc.html:2
    1| <% include pub/header.html %>
 >> 2|     <div class='list'>
    3|        <% include ../template/scTpl.html%>
    4|     </div>
    5|             <% include ../template/pub/wfLoader.html%>

text is not defined] path: 'D:\\yqf\\web\\view\\sc.html' }
<div class='item'>
    <img src="">

</div>

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
    <div class='item'>
        <img src="">
        <div class='inner'>
            <div class="title"><span><img src="<%=text(list[i].shop_type)%>"></span>
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
        <div class='foot'>
        	<span><%=list[i].discount_price%></span>
        	<span><%= list[i].original_price%></span>
        	<div class='buy'></div>
        </div>
    </div>
    <%}%>

{ [ReferenceError: D:\yqf\web\view\sc.html:5
    3|        <% include ../template/scTpl.html%>
    4|     </div>
 >> 5|             <% include ../template/pub/wfLoader.html%>
    6| 
    7|     <% include pub/script.html %>
    8|     <script type="text/javascript">

text is not defined] path: 'D:\\yqf\\web\\view\\sc.html' }
<%for(var i in list){%>
    <div class='item'>
        <img src="">
        <div class='inner'>
            <div class="title"><span><img src="<%=text(list[i].shop_type)%>"></span>
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
        <div class='foot'>
        	<span><%=list[i].discount_price%></span>
        	<span><%= list[i].original_price%></span>
        	<div class='buy'></div>
        </div>
    </div>
    <%}%>

{ [ReferenceError: D:\yqf\web\view\sc.html:5
    3|        <% include ../template/scTpl.html%>
    4|     </div>
 >> 5|             <% include ../template/pub/wfLoader.html%>
    6| 
    7|     <% include pub/script.html %>
    8|     <script type="text/javascript">

text is not defined] path: 'D:\\yqf\\web\\view\\sc.html' }
<%for(var i in list){%>
    <div class='item'>
        <img src="">
        <div class='inner'>
            <div class="title"><span><img src="<%=text(list[i].shop_type)%>"></span>
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
        <div class='foot'>
        	<span><%=list[i].discount_price%></span>
        	<span><%= list[i].original_price%></span>
        	<div class='buy'></div>
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

<%for(var i in list){%>
    <div class='item'>
        <img src="<%=list[i].productImg%>">
        <div class='inner'>
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
        <div class='foot'>
        	<span><%=list[i].discountPrice%></span>
        	<span><%= list[i].originalPrice%></span>
        	<div class='buy'></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class='item'>
        <img src="<%=list[i].productImg%>">
        <div class='inner'>
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
        <div class='foot'>
        	<span><%=list[i].discountPrice%></span>
        	<span><%= list[i].originalPrice%></span>
        	<div class='buy'></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class='item'>
        <img src="<%=list[i].productImg%>">
        <div class='inner'>
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
        <div class='foot'>
        	<span><%=list[i].discountPrice%></span>
        	<span><%=list[i].originalPrice%></span>
        	<div class='buy'></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class='item'>
        <img src="<%=list[i].productImg%>">
        <div class='inner'>
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
        <div class='foot'>
        	<span><%=list[i].discountPrice%></span>
        	<span><%=list[i].originalPrice%></span>
        	<div class='buy'></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class='item'>
        <img src="<%=list[i].productImg%>">
        <div class='inner'>
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
        <div class='foot'>
        	<span><%=list[i].discountPrice%></span>
        	<span><%=list[i].originalPrice%></span>
        	<div class='buy'></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class='item'>
        <img src="<%=list[i].productImg%>">
        <div class='inner'>
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
        <div class='foot'>
        	<span><%=list[i].discountPrice%></span>
        	<span><%=list[i].originalPrice%></span>
        	<div class='buy'></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class='item'>
        <img src="<%=list[i].productImg%>">
        <div class='inner'>
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
        <div class='foot'>
        	<span><%=list[i].discountPrice%></span>
        	<span><%=list[i].originalPrice%></span>
        	<div class='buy'></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class='item'>
        <img src="<%=list[i].productImg%>">
        <div class='inner'>
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
        <div class='foot'>
        	<span><%=list[i].discountPrice%></span>
        	<span><%=list[i].originalPrice%></span>
        	<div class='buy'></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class='item'>
        <img src="<%=list[i].productImg%>">
        <div class='inner'>
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
        <div class='foot'>
        	<span><%=list[i].discountPrice%></span>
        	<span><%=list[i].originalPrice%></span>
        	<div class='buy'></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class='item'>
        <img src="<%=list[i].productImg%>">
        <div class='inner'>
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
        <div class='foot'>
        	<span><%=list[i].discountPrice%></span>
        	<span><%=list[i].originalPrice%></span>
        	<div class='buy'></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class='item'>
        <img src="<%=list[i].productImg%>">
        <div class='inner'>
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
        <div class='foot'>
        	<span><%=list[i].discountPrice%></span>
        	<span><%=list[i].originalPrice%></span>
        	<div class='buy'></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
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
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
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
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item>
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
        	<span class=discount><%=list[i].discountPrice%></span>
        	<span class=original><%=list[i].originalPrice%></span>
        	<div class=buy></div>
        </div>
    </div>
    <%}%>

{ [Error: Cannot find module './router/aaa'] code: 'MODULE_NOT_FOUND' }
<%for(var i in list){%>
    <div class=item>
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
    <div class=item>
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
    <div class=item>
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
    <div class=item>
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
    <div class=item>
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
    <div class=item>
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
{ [Error: Cannot find module './router/shareHg.html'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './router/shareHg.html'] code: 'MODULE_NOT_FOUND' }
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
