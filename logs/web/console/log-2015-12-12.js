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
