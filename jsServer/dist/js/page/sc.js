define(function(require){var t=require("js/component/waterfull"),n=require("js/component/util"),o=require("js/component/share"),a=require("js/lib/template"),s=require("js/tools/statistics"),c=require("js/component/lazyload");require("js/lib/rem");var l=n.urlParse(location.search),d=l.u,p=l.shareId,f=o.sc,m=n.isWeixin(),h=n.isAndroid(),g=l.notStatistics,v=document.querySelector(".wf-indicator"),y=n.getChannelType(),x=encodeURIComponent(location.href),w=l.unid,b=w||n.Guid(),A="",I={shareId:p,shareChannel:y,productId:"",businessId:"",url:"",unid:b},j={shareChannel:y,shareId:p,url:x,unid:b},S=a.compile(list),T=$(".list"),C=$(".loading-mask"),v=document.querySelector(".wf-indicator"),L=function(){var t=[];return{getData:function(n){for(var i=0,o=t.length;o>i;i++)if(t[i].productId==n)return t[i]},add:function(n){"[object Array]"==Object.prototype.toString.call(n)&&(t=t.concat(n))},empty:function(){t.length=0}}}();!g&&s.browse(j),m&&(g||(location.href=location.href+"&notStatistics=true&unid="+b),h?mask="images/android.png":mask="images/ios.png",T.before('<img class="plant-mask" src="'+(ymVar.jsServer+mask)+'" style="width:100%;position:fixed;top:0;z-index:99999;display:none;"/>'),A=$(".plant-mask"));new t({url:f,indicator:v,params:{test:!0,pageNum:1,pageSize:20,shareId:p,userId:d},page:1,target:T,success:function(t,n){var o=n.data&&n.data.productList||[];return 0==o.length?void this.destroy():(C.hide(),T.append(S({list:o,fixed:function(t,n){return parseFloat(t).toFixed("undefined"==typeof n?2:n)},text:function(t){return 1==t?ymVar.jsServer+"images/logo_tianmao.png":ymVar.jsServer+"images/logo_tianmao.png"},floor:function(t,n){return(t/n*10).toFixed(1)},jsserver:function(){return ymVar.jsServer}})),void L.add(o))},addition:0,before:function(){this.params.pageNum=this.page},needFirst:1});v.style.display="none",new c({main:T}),T.delegate(".item","click",function(e){var t=L.getData($(this).attr("data-id"));return m?void A.show():(I.url=encodeURIComponent(t.targetUrl),I.businessId=t.businessId,I.productId=t.productId,void s.click(I,function(){location.href=t.targetUrl.replace("%pugongyinguser%",d)}))})}),define("js/component/waterfull",function(require,t,n){function o(t){this.url=t.url,this.lock=0,this.page=t.page||2,this.params=t.params||{},this.needFirst=t.needFirst,this.before=t.before,this.indicator=t.indicator,this.success=t.success,this.target=t.target,this.needDestroy=1,this.ignore=0,this.addition=t.addition,this.scrollTest=l,this.inited=0,this.timeout=t.timeout||4e3,this.timeoutHandler=void 0,this.img=t.img||".list_left img",this.init(),this.needFirst&&this.fetch()}function a(){var t=this,n=window.onscroll,o=this.indicator.style;o.backgroundSize="100% 100%",window.onscroll=function(){"function"==typeof n&&n(),t.scrollTest&&t.scrollTest()}}function s(){this.scrollTest=void 0}function c(t){1==this.isdestroy&&(this.scrollTest=l,this.isdestroy=0,!t&&this.init(),this.lock=0,this.indicator.innerHTML="Loading...")}function l(){var t=this;if(!t.lock)return t.ignore?void(t.ignore=0):void(window.scrollY>=y.offsetHeight-x-t.addition&&(t.lock=1,t.fetch()))}function d(){this.scrollTest=void 0,this.indicator.style.backgroundImage='url("aaa")',this.indicator.innerHTML="没有数据了..",this.indicator.style.textIndent="0",this.isdestroy=1,this.inited=0}function p(){this.indicator.style.display="block"}function f(t){this.timeoutHandler=void 0,this.success&&("string"==typeof t?this.success(t,this.inited):this.success(void 0,t,this.inited)),this.lock=0,this.isdestroy||(v.prototype.renderImage(this.target,this.img),this.indicator.style.display="none",!this.inited&&(this.inited=1))}function m(t){var n=this;this.before&&this.before.call(this);var n=this;this.timeoutHandler=setTimeout(function(){},this.timeout),this.loading(),$.ajax({url:n.url,data:n.params,success:function(o){"function"==typeof t&&t.call(n,o),n.loaded(o),!n.isdestroy&&n.page++},error:function(t){n.loaded("ajax error")},dataType:"json"})}function h(t,n){this.page=1,this.inited=0,n&&this.reLive(!0),this.fetch(t),this.ignore=1}function g(){this.page++,this.lock=1,this.fetch()}var v=require("js/component/lazyload"),y=document.body,x=document.documentElement.clientHeight;n.exports=o,o.prototype={init:a,fetch:m,loading:p,loaded:f,rebuild:h,destroy:d,reLive:c,die:s,nextPage:g}}),define("js/component/util",function(require,t,n){function o(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=16*Math.random()|0,n="x"==t?r:3&r|8;return n.toString(16)})}function a(){var t=document.documentElement.clientWidth,n=document.createElement("style");n.innerHTML=".rtop{background-size:100% 100% !important;}.list_top .list_left{height:"+.36*t+"px;max-height:"+.36*t+"px;overflow:hidden;}",document.getElementsByTagName("head")[0].appendChild(n)}function s(){var t=new Date;return[t.getFullYear(),"-",t.getMonth()+1,"-",t.getDate()," ",t.getHours(),":",t.getMinutes(),":",t.getSeconds()].map(function(t){return"number"==typeof t&&10>t?"0"+t:t})}function c(){var t=new Date;return[t.getFullYear(),t.getMonth()+1,t.getDate()]}function l(t){return t.replace(/(^\s*)|(\s*$)/g,"").replace(/[\r\n]/g,"")}function d(){return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}function p(){var u=navigator.userAgent;return u.indexOf("Android")>-1||u.indexOf("Linux")>-1}function f(){var t=navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)?!0:!1}function m(t){return"string"!=typeof t?{}:(t=$.trim(t).replace(/^(\?|#|&)/,""),t?t.split("&").reduce(function(t,n){var o=n.replace(/\+/g," ").split("="),a=o[0],s=o[1];return a=decodeURIComponent(a),s=void 0===s?null:decodeURIComponent(s),t.hasOwnProperty(a)?Array.isArray(t[a])?t[a].push(s):t[a]=[t[a],s]:t[a]=s,t},{}):{})}function h(){var t=window.navigator.userAgent.toLowerCase(),n="8";return"micromessenger"==t.match(/MicroMessenger/i)?n="4":"qqbrowser"==t.match(/QQBrowser/i)||"mqqbrowser"==t.match(/MQQBrowser/i)||"qq"==t.match(/QQ/i)?n="5":"weibo"==t.match(/Weibo/i)?n="2":"alipay"==t.match(/Alipay/i)&&(n="7"),n}n.exports={urlParse:m,getChannelType:h,isWeixin:f,isIos:d,isAndroid:p,delSpace:l,getDate:c,Guid:o,getTime:s,injectCss:a}}),define("js/component/share",function(require,t,n){var o="http://172.16.40.215:8080",a="/ol.html",s="/result.html",c="/search.html",l="/pl.html",d="/shareRecord.html",p="/queqiao/account/getOrderList",f="/queqiao/account/getUserAccountInfo",m="/queqiao/performance/getSummaryInfo",h=o+"/queqiao/log/saveClickLog",g=o+"/queqiao/log/saveBrowseLog",v=o+"/queqiao/collectionShare/clickCollectionShareUrl",y="/product/getProductInfoQQiaoShare",x="/tdj/getTaodianjinInfo",$="/queqiao/order/getNewOrderNum",w="/product/getQQiaoSolrProductList",b=o+"/product/getTopCategoryList?test=true",A=o+"/product/getQueQiaoProductList?test=true&pageNum=1&pageSize=20",I=o+"/product/getQueQiaoProductList",j=o+"/product/getQueQiaoCarouselList?test=true",S=o+"/product/getQueQiaoCategoryHot?test=true&type=2",T=o+"/product/getQueQiaoCategoryHot?test=true&type=1",C=o+"/topic/getTopicInfoQueQiaoShare",L=o+"/topic/getTopicInfoQueQiao",k=o+"/queqiao/share/getShareList",Q=o+"/queqiao/performance/getPerformanceList";n.exports={server:o,resultUrl:s,searchUrl:c,prPage:l,srPage:d,sc:v,searchCategoryApi:b,recommendApi:A,mainApi:I,carsouselApi:j,hotSearchWord:S,hotCategory:T,appActivityAPI:L,activityApi:C,clickApi:h,browseApi:g,olUrl:function(t){return a+(t||"")},searchResultApi:function(){return o+w},olApi:function(t){return o+p+(t||"")+"&test=true"},balanceApi:function(t){return o+f+"?userId="+t+"&test=true"},yjApi:function(t,n,a){return o+m+"?beginTime="+(t||"")+"&endTime="+(n||"")+"&userId="+(a||"")+"&test=true"},pdApi:function(t){return o+y+"?productId="+t+"&test=true"},tdjApi:function(t){return o+x+"?NumIids="+t+"&test=true"},newOlApi:function(t,n){return o+$+"?userId="+t+"&lastTime="+n+"&test=true"},shareRecordApi:function(t){return k+"?test=true&userId="+t},plApi:function(t){return Q+"?test=true&userId="+t}}}),!function(){function t(t){return t.replace(x,"").replace(u,",").replace($,"").replace(w,"").replace(b,"").split(A)}function n(t){return"'"+t.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function o(o,a){function e(t){return m+=t.split(/\n/).length-1,p&&(t=t.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),t&&(t=y[1]+n(t)+y[2]+"\n"),t}function s(n){var o=m;if(d?n=d(n,a):c&&(n=n.replace(/\n/g,function(){return m++,"$line="+m+";"})),0===n.indexOf("=")){var e=f&&!/^=[=#]/.test(n);if(n=n.replace(/^=[=#]?|[\s;]*$/g,""),e){var s=n.replace(/\s*\([^\)]+\)/,"");h[s]||/^(include|print)$/.test(s)||(n="$escape("+n+")")}else n="$string("+n+")";n=y[1]+n+y[2]}return c&&(n="$line="+o+";"+n),r(t(n),function(t){if(t&&!v[t]){var n;n="print"===t?u:"include"===t?$:h[t]?"$utils."+t:g[t]?"$helpers."+t:"$data."+t,w+=t+"="+n+",",v[t]=!0}}),n+"\n"}var c=a.debug,l=a.openTag,i=a.closeTag,d=a.parser,p=a.compress,f=a.escape,m=1,v={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},q="".trim,y=q?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],x=q?"$out+=text;return $out;":"$out.push(text);",u="function(){var text=''.concat.apply('',arguments);"+x+"}",$="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+x+"}",w="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(c?"$line=0,":""),b=y[0],A="return new String("+y[3]+");";r(o.split(l),function(t){t=t.split(i);var n=t[0],o=t[1];1===t.length?b+=e(n):(b+=s(n),o&&(b+=e(o)))});var I=w+b+A;c&&(I="try{"+I+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+n(o)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var j=new Function("$data","$filename",I);return j.prototype=h,j}catch(S){throw S.temp="function anonymous($data,$filename) {"+I+"}",S}}var a=function(t,n){return"string"==typeof n?q(n,{filename:t}):c(t,n)};a.version="3.0.0",a.config=function(t,n){e[t]=n};var e=a.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},s=a.cache={};a.render=function(t,n){return q(t,n)};var c=a.renderFile=function(t,n){var o=a.get(t)||v({filename:t,name:"Render Error",message:"Template not found"});return n?o(n):o};a.get=function(t){var n;if(s[t])n=s[t];else if("object"==typeof document){var o=document.getElementById(t);if(o){var a=(o.value||o.innerHTML).replace(/^\s*|\s*$/g,"");n=q(a,{filename:t})}}return n};var l=function(t,n){return"string"!=typeof t&&(n=typeof t,"number"===n?t+="":t="function"===n?l(t.call(t)):""),t},i={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},d=function(t){return i[t]},p=function(t){return l(t).replace(/&(?![\w#]+;)|[<>"']/g,d)},f=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},m=function(t,n){var o,a;if(f(t))for(o=0,a=t.length;a>o;o++)n.call(t,t[o],o,t);else for(o in t)n.call(t,t[o],o)},h=a.utils={$helpers:{},$include:c,$string:l,$escape:p,$each:m};a.helper=function(t,n){g[t]=n};var g=a.helpers=h.$helpers;a.onerror=function(t){var n="Template Error\n\n";for(var o in t)n+="<"+o+">\n"+t[o]+"\n\n";"object"==typeof console&&console.error(n)};var v=function(t){return a.onerror(t),function(){return"{Template Error}"}},q=a.compile=function(t,n){function a(o){try{return new i(o,l)+""}catch(a){return n.debug?v(a)():(n.debug=!0,q(t,n)(o))}}n=n||{};for(var c in e)void 0===n[c]&&(n[c]=e[c]);var l=n.filename;try{var i=o(t,n)}catch(d){return d.filename=l||"anonymous",d.name="Syntax Error",v(d)}return a.prototype=i.prototype,a.toString=function(){return i.toString()},l&&n.cache&&(s[l]=a),a},r=h.$each,y="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",x=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,u=/[^\w$]+/g,$=new RegExp(["\\b"+y.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),w=/^\d[^,]*|,\d[^,]*/g,b=/^,+|,+$/g,A=/^$|,+/;"function"==typeof define?define("js/lib/template",function(require,t,n){n.exports=a}):"undefined"!=typeof exports?module.exports=a:this.template=a}(),define("js/tools/statistics",function(require,t,n){function o(t,n){var o="?test=true&";for(var i in t)o+=i+"="+t[i]+"&";var a=s.clickApi;$.get(a+o,function(t){t=JSON.parse(t),n&&n()}),setTimeout(function(){n&&n()},5e3)}function a(t){var n="?test=true&";for(var i in t)n+=i+"="+t[i]+"&";var o=s.browseApi,a=new Image;a.src=o+n,console.log(o+n)}var s=require("js/component/share");n.exports={click:o,browse:a}}),define("js/component/lazyload",function(require,t,n){function o(t){this.main=t.main,this.selecotr=t.selecotr,this.init()}var a=(document.body,document.documentElement.clientHeight);n.exports=o,o.prototype={init:function(){var t=this,n=window.onscroll;window.onscroll=function(){"function"==typeof n&&n(),t.renderImage()}},renderImage:function(t,n){var o=this.main||t||document.body;$(o).find(n||this.selecotr||"img").each(function(){var t=$(this);if(t[0].getBoundingClientRect().top<a&&!t.attr("init")){var n=t.attr("csrc");n&&t.attr("src",n).attr("init",1)}})}}}),define("js/lib/rem",function(require,t,n){n.exports=!function(t,n){function o(){var n=c.getBoundingClientRect().width;n/p>540&&(n=540*p);var e=n/10;c.style.fontSize=e+"px",m.rem=t.rem=e}var a,s=t.document,c=s.documentElement,l=s.querySelector('meta[name="viewport"]'),d=s.querySelector('meta[name="flexible"]'),p=0,f=0,m=n.flexible||(n.flexible={});if(l){var h=l.getAttribute("content").match(/initial\-scale=([\d\.]+)/);h&&(f=parseFloat(h[1]),p=parseInt(1/f))}else if(d){var g=d.getAttribute("content");if(g){var v=g.match(/initial\-dpr=([\d\.]+)/),y=g.match(/maximum\-dpr=([\d\.]+)/);v&&(p=parseFloat(v[1]),f=parseFloat((1/p).toFixed(2))),y&&(p=parseFloat(y[1]),f=parseFloat((1/p).toFixed(2)))}}if(!p&&!f){var u=(t.navigator.appVersion.match(/android/gi),t.navigator.appVersion.match(/iphone/gi)),x=t.devicePixelRatio;p=u?x>=3&&(!p||p>=3)?3:x>=2&&(!p||p>=2)?2:1:1,f=1/p}if(c.setAttribute("data-dpr",p),!l)if(l=s.createElement("meta"),l.setAttribute("name","viewport"),l.setAttribute("content","initial-scale="+f+", maximum-scale="+f+", minimum-scale="+f+", user-scalable=no"),c.firstElementChild)c.firstElementChild.appendChild(l);else{var $=s.createElement("div");$.appendChild(l),s.write($.innerHTML)}t.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(o,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(a),a=setTimeout(o,300))},!1),"complete"===s.readyState?s.body.style.fontSize=12*p+"px":s.addEventListener("DOMContentLoaded",function(){s.body.style.fontSize=12*p+"px"},!1),o(),m.dpr=t.dpr=p,m.refreshRem=o,m.rem2px=function(t){var n=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(n+="px"),n},m.px2rem=function(t){var n=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(n+="rem"),n}}(window,{})});