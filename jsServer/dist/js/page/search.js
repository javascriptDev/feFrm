define(function(require){function t(){var t=s.delSpace(encodeURI(h.val()||h.attr("placeholder")));if(""!=t){var n="";n=o||k?s.delSpace(d+"?searchType="+T+"&h5_from_page=search&h5_kw="+t+"&name_iks="+t):s.delSpace(d+"?searchType="+T+"&h5_from_page=search&h5_kw="+t+"&"+encodeURI(b.link)),location.href=n}}function n(){try{window.common.hidekb()}catch(e){console.log("is not android")}}var o,a=(require("js/lib/template"),require("js/tools/client"),require("js/component/share")),c=require("js/tools/storage"),s=require("js/component/util"),l=$(".search"),d=a.resultUrl,p=$(".wrap"),h=$(".sIcon"),f=($(".iconfont"),$(".sectionThree"),$(".clear-his")),g=$(".hot_seach"),w=$(".sectionThree"),m=s.urlParse(location.search),y=decodeURI(s.delSpace(m.h5_kw||"")),v=m.h5_from_page,x=$('[data-type="empty"]'),b={},k=0,I=$(".history_seach"),S=$(".historyList"),A=decodeURI(localStorage.getItem("kw")),T=1;h.attr("placeholder",y).val("").focus(),x.hide(),"null"!=A&&""!=A&&(k=1,h.val(A).focus(),localStorage.setItem("kw",""),x.show(),w.show());var Q=c.get("history",10);Q.length>0&&(S.append("<li>"+Q.reverse().join("</li><li>")+"</li>"),I.show());var W=a.hotSearchWord;$.get(W,function(t){if(t=JSON.parse(t),t&&t.data&&t.data.categoryOrKeyHot){var n=t.data.categoryOrKeyHot.sort(function(t,n){return t.weight<n.weight});b=n.shift(),"main"==v&&(l.attr("placeholder",b.name),w.show());var o="";for(var i in n)o+="<span data-link="+n[i].link+">"+n[i].name+"</span>";g.append(o)}}),!function(){$("body").keydown(function(e){13==e.keyCode&&(n(),t())}),p.delegate("[data-click]","click",function(){var o=($(this),$(this).attr("data-type"));switch(o){case"empty":h.val("").focus(),x.hide(),T=1;break;case"search":t();break;case"back":if(n(),"main"==v)try{window.popBack()}catch(e){window.goback.back()}else history.back()}}),l.on("input",function(e){o=1,T=3,0==l.val().length?x.hide():x.show()}),g.delegate("span","click",function(t){n(),location.href=d+"?searchType=1&h5_from_page=search&h5_kw="+encodeURI($(this).text()||$(this).attr("placeholder"))+"&"+encodeURI($(this).attr("data-link"))}),f.click(function(){c.empty("history"),I.remove()}),S.delegate("li","click",function(){n();var t=encodeURI($(this).text()||$(this).attr("placeholder"));location.href=d+"?searchType=3&h5_from_page=search&h5_kw="+t+"&name_iks="+t})}()}),!function(){function t(t){return t.replace(v,"").replace(u,",").replace($,"").replace(x,"").replace(b,"").split(k)}function n(t){return"'"+t.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function o(o,a){function e(t){return f+=t.split(/\n/).length-1,p&&(t=t.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),t&&(t=y[1]+n(t)+y[2]+"\n"),t}function c(n){var o=f;if(d?n=d(n,a):s&&(n=n.replace(/\n/g,function(){return f++,"$line="+f+";"})),0===n.indexOf("=")){var e=h&&!/^=[=#]/.test(n);if(n=n.replace(/^=[=#]?|[\s;]*$/g,""),e){var c=n.replace(/\s*\([^\)]+\)/,"");g[c]||/^(include|print)$/.test(c)||(n="$escape("+n+")")}else n="$string("+n+")";n=y[1]+n+y[2]}return s&&(n="$line="+o+";"+n),r(t(n),function(t){if(t&&!m[t]){var n;n="print"===t?u:"include"===t?$:g[t]?"$utils."+t:w[t]?"$helpers."+t:"$data."+t,x+=t+"="+n+",",m[t]=!0}}),n+"\n"}var s=a.debug,l=a.openTag,i=a.closeTag,d=a.parser,p=a.compress,h=a.escape,f=1,m={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},q="".trim,y=q?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],v=q?"$out+=text;return $out;":"$out.push(text);",u="function(){var text=''.concat.apply('',arguments);"+v+"}",$="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+v+"}",x="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(s?"$line=0,":""),b=y[0],k="return new String("+y[3]+");";r(o.split(l),function(t){t=t.split(i);var n=t[0],o=t[1];1===t.length?b+=e(n):(b+=c(n),o&&(b+=e(o)))});var I=x+b+k;s&&(I="try{"+I+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+n(o)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var S=new Function("$data","$filename",I);return S.prototype=g,S}catch(A){throw A.temp="function anonymous($data,$filename) {"+I+"}",A}}var a=function(t,n){return"string"==typeof n?q(n,{filename:t}):s(t,n)};a.version="3.0.0",a.config=function(t,n){e[t]=n};var e=a.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},c=a.cache={};a.render=function(t,n){return q(t,n)};var s=a.renderFile=function(t,n){var o=a.get(t)||m({filename:t,name:"Render Error",message:"Template not found"});return n?o(n):o};a.get=function(t){var n;if(c[t])n=c[t];else if("object"==typeof document){var o=document.getElementById(t);if(o){var a=(o.value||o.innerHTML).replace(/^\s*|\s*$/g,"");n=q(a,{filename:t})}}return n};var l=function(t,n){return"string"!=typeof t&&(n=typeof t,"number"===n?t+="":t="function"===n?l(t.call(t)):""),t},i={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},d=function(t){return i[t]},p=function(t){return l(t).replace(/&(?![\w#]+;)|[<>"']/g,d)},h=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},f=function(t,n){var o,a;if(h(t))for(o=0,a=t.length;a>o;o++)n.call(t,t[o],o,t);else for(o in t)n.call(t,t[o],o)},g=a.utils={$helpers:{},$include:s,$string:l,$escape:p,$each:f};a.helper=function(t,n){w[t]=n};var w=a.helpers=g.$helpers;a.onerror=function(t){var n="Template Error\n\n";for(var o in t)n+="<"+o+">\n"+t[o]+"\n\n";"object"==typeof console&&console.error(n)};var m=function(t){return a.onerror(t),function(){return"{Template Error}"}},q=a.compile=function(t,n){function a(o){try{return new i(o,l)+""}catch(a){return n.debug?m(a)():(n.debug=!0,q(t,n)(o))}}n=n||{};for(var s in e)void 0===n[s]&&(n[s]=e[s]);var l=n.filename;try{var i=o(t,n)}catch(d){return d.filename=l||"anonymous",d.name="Syntax Error",m(d)}return a.prototype=i.prototype,a.toString=function(){return i.toString()},l&&n.cache&&(c[l]=a),a},r=g.$each,y="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",v=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,u=/[^\w$]+/g,$=new RegExp(["\\b"+y.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),x=/^\d[^,]*|,\d[^,]*/g,b=/^,+|,+$/g,k=/^$|,+/;"function"==typeof define?define("js/lib/template",function(require,t,n){n.exports=a}):"undefined"!=typeof exports?module.exports=a:this.template=a}(),define("js/tools/client",function(require,t,n){function o(){try{window.common.showHideGoodsBar(1)}catch(e){window.showHideGoodsBar&&window.showHideGoodsBar(1)}}function a(){try{window.common.showHideGoodsBar(0)}catch(e){window.showHideGoodsBar&&window.showHideGoodsBar(0)}}function c(){try{window.common.hideBlackView()}catch(e){window.hideBlackView&&window.hideBlackView()}}function s(){try{window.common.showWarn()}catch(e){window.showWarn&&window.showWarn()}}function l(){try{window.common.hideWarn()}catch(e){window.hideWarn&&window.hideWarn()}}function d(t,n){try{window.common.shipOrderDetail("",t,n)}catch(e){window.shipOrderDetail&&window.shipOrderDetail(t,n)}}function p(){try{window.common.shipWallet()}catch(e){window.shipWallet&&window.shipWallet()}}function h(t){try{return window.common.getUser()}catch(e){return window.getUid&&window.getUid()}}function f(){try{window.common.gotoMain()}catch(e){window.gotoMain&&window.gotoMain()}}function g(t){try{window.common.shareInfo(t)}catch(e){window.shareInfo&&window.shareInfo(t)}}function w(t){console.log(t);try{window.shop.shopPage(t)}catch(e){window.carouselRedirect&&window.carouselRedirect(t)}}function m(t,n,o){try{window.common.newWebPage(t,n||"0",o||0)}catch(e){window.newPage&&window.newPage(t,n||"0",o)}}n.exports={share:g,gotoPage:w,getUid:h,gotoDetail:d,newPage:m,shipWallet:p,gotoMain:f,showWarn:s,hideWarn:l,hideLayer:c,hideBar:o,showBar:a}}),define("js/component/share",function(require,t,n){var o="http://172.16.40.215:8080",a="/ol.html",c="/result.html",s="/search.html",l="/pl.html",d="/shareRecord.html",p="/queqiao/account/getOrderList",h="/queqiao/account/getUserAccountInfo",f="/queqiao/performance/getSummaryInfo",g=o+"/queqiao/log/saveClickLog",w=o+"/queqiao/log/saveBrowseLog",m=o+"/queqiao/collectionShare/clickCollectionShareUrl",y="/product/getProductInfoQQiaoShare",v="/tdj/getTaodianjinInfo",$="/queqiao/order/getNewOrderNum",x="/product/getQQiaoSolrProductList",b=o+"/product/getTopCategoryList?test=true",k=o+"/product/getQueQiaoProductList?test=true&pageNum=1&pageSize=20",I=o+"/product/getQueQiaoProductList",S=o+"/product/getQueQiaoCarouselList?test=true",A=o+"/product/getQueQiaoCategoryHot?test=true&type=2",T=o+"/product/getQueQiaoCategoryHot?test=true&type=1",Q=o+"/topic/getTopicInfoQueQiaoShare",W=o+"/topic/getTopicInfoQueQiao",j=o+"/queqiao/share/getShareList",U=o+"/queqiao/performance/getPerformanceList";n.exports={server:o,resultUrl:c,searchUrl:s,prPage:l,srPage:d,sc:m,searchCategoryApi:b,recommendApi:k,mainApi:I,carsouselApi:S,hotSearchWord:A,hotCategory:T,appActivityAPI:W,activityApi:Q,clickApi:g,browseApi:w,olUrl:function(t){return a+(t||"")},searchResultApi:function(){return o+x},olApi:function(t){return o+p+(t||"")+"&test=true"},balanceApi:function(t){return o+h+"?userId="+t+"&test=true"},yjApi:function(t,n,a){return o+f+"?beginTime="+(t||"")+"&endTime="+(n||"")+"&userId="+(a||"")+"&test=true"},pdApi:function(t){return o+y+"?productId="+t+"&test=true"},tdjApi:function(t){return o+v+"?NumIids="+t+"&test=true"},newOlApi:function(t,n){return o+$+"?userId="+t+"&lastTime="+n+"&test=true"},shareRecordApi:function(t){return j+"?test=true&userId="+t},plApi:function(t){return U+"?test=true&userId="+t}}}),define("js/tools/storage",function(require,t,n){function o(t){var n=localStorage.getItem(t);return n||console.log("no this storage"),JSON.parse(n||"[]")}n.exports={add:function(t,n){var a=o(t),c=a.indexOf(n);-1!=c&&a.splice(c,1),a.push(n),localStorage.setItem(t,JSON.stringify(a))},del:function(t,n){for(var a=o(t),i=0,c=a.length;c>i;i++)if(a[i]==n)return void a.splice(i,1)},get:function(t,n){var a=o(t);return a.splice(a.length<=n?0:a.length-(n||0),n||a.length)},empty:function(t){var n=localStorage.getItem(t);n&&localStorage.setItem(t,"")}}}),define("js/component/util",function(require,t,n){function o(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=16*Math.random()|0,n="x"==t?r:3&r|8;return n.toString(16)})}function a(){var t=document.documentElement.clientWidth,n=document.createElement("style");n.innerHTML=".rtop{background-size:100% 100% !important;}.list_top .list_left{height:"+.36*t+"px;max-height:"+.36*t+"px;overflow:hidden;}",document.getElementsByTagName("head")[0].appendChild(n)}function c(){var t=new Date;return[t.getFullYear(),"-",t.getMonth()+1,"-",t.getDate()," ",t.getHours(),":",t.getMinutes(),":",t.getSeconds()].map(function(t){return"number"==typeof t&&10>t?"0"+t:t})}function s(){var t=new Date;return[t.getFullYear(),t.getMonth()+1,t.getDate()]}function l(t){return t.replace(/(^\s*)|(\s*$)/g,"").replace(/[\r\n]/g,"")}function d(){return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}function p(){var u=navigator.userAgent;return u.indexOf("Android")>-1||u.indexOf("Linux")>-1}function h(){var t=navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)?!0:!1}function f(t){return"string"!=typeof t?{}:(t=$.trim(t).replace(/^(\?|#|&)/,""),t?t.split("&").reduce(function(t,n){var o=n.replace(/\+/g," ").split("="),a=o[0],c=o[1];return a=decodeURIComponent(a),c=void 0===c?null:decodeURIComponent(c),t.hasOwnProperty(a)?Array.isArray(t[a])?t[a].push(c):t[a]=[t[a],c]:t[a]=c,t},{}):{})}function g(){var t=window.navigator.userAgent.toLowerCase(),n="8";return"micromessenger"==t.match(/MicroMessenger/i)?n="4":"qqbrowser"==t.match(/QQBrowser/i)||"mqqbrowser"==t.match(/MQQBrowser/i)||"qq"==t.match(/QQ/i)?n="5":"weibo"==t.match(/Weibo/i)?n="2":"alipay"==t.match(/Alipay/i)&&(n="7"),n}n.exports={urlParse:f,getChannelType:g,isWeixin:h,isIos:d,isAndroid:p,delSpace:l,getDate:s,Guid:o,getTime:c,injectCss:a}});