(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-details-details"],{"16b1":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"zwz-comment"},[n("v-uni-scroll-view",{staticStyle:{height:"660rpx"},attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.lower.apply(void 0,arguments)}}},t._l(t.comments,(function(e,i){return n("v-uni-view",{key:e.id,staticClass:"comment-item-main",attrs:{id:i}},[n("v-uni-view",{staticClass:"comment-item"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-image",{staticClass:"img",attrs:{src:e.avatar}})],1),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"title-name"},[t._v(t._s(e.nickname))]),n("v-uni-view",{staticClass:"content-text"},[n("v-uni-text",[t._v(t._s(e.content))])],1),n("v-uni-view",{staticClass:"content-btm"},[n("v-uni-text",[t._v(t._s(e.addTime))]),n("v-uni-text",{staticClass:"btm-back",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.replyComment(e.nickname,e.id,2,i,e)}}},[t._v("回复")])],1)],1),n("v-uni-view",{staticClass:"right"})],1),-1!==t.showReplyList.indexOf(e.id)?n("v-uni-view",t._l(e.children,(function(e){return n("v-uni-view",{key:e.id,staticClass:"comment-item items"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-image",{staticClass:"img",attrs:{src:e.avatar}})],1),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"title-name"},[n("v-uni-view",[t._v(t._s(e.nickname))]),e.superNickname?n("v-uni-view",[t._v("@")]):t._e(),e.superNickname?n("v-uni-view",[t._v(t._s(e.superNickname))]):t._e()],1),n("v-uni-view",{staticClass:"content-text"},[n("v-uni-text",[t._v(t._s(e.content))])],1),n("v-uni-view",{staticClass:"content-btm"},[n("v-uni-text",[t._v(t._s(e.addTime))]),n("v-uni-text",{staticClass:"btm-back",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.replyComment(e.nickname,e.superCommentId,3,i,e)}}},[t._v("回复")])],1)],1),n("v-uni-view",{staticClass:"right"})],1)})),1):t._e(),e.children.length>0?n("v-uni-view",{staticClass:"spread",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.isShowReply(e.id,i)}}},[n("v-uni-text",[t._v(t._s(-1!==t.showReplyList.indexOf(e.id)?"收起":"展开"+e.children.length+"条回复"))]),n("v-uni-text",{class:-1!==t.showReplyList.indexOf(e.id)?"up":"down"})],1):t._e()],1)})),1)],1)},s=[]},3376:function(t,e,n){"use strict";n.r(e);var i=n("5f78"),a=n("4d35");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("ad26");var o,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"09737dd0",null,!1,i["a"],o);e["default"]=c.exports},3621:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={uAvatar:n("fc0a").default,uTag:n("9c60").default,uParse:n("b069").default,uImage:n("a4ce").default,uIcon:n("57fa").default,comment:n("74bd").default,uDivider:n("f4c8").default,ygcComment:n("3376").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"padding-bottom":"25rpx"}},[n("v-uni-view",{staticClass:"top"},[n("v-uni-view",{staticClass:"textitem"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[n("u-avatar",{attrs:{size:"large",src:t.user_id.avatar_file?t.user_id.avatar_file.url:"/static/uni-center/tx.jpg"}})],1),n("v-uni-view",{staticClass:"name"},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[n("u-tag",{staticStyle:{"margin-right":"15rpx",height:"35rpx"},attrs:{text:"表白墙","bg-color":t.color[0],size:"mini",mode:"dark"}}),n("v-uni-view",{},[t._v(t._s(t.user_id.nickname?t.user_id.nickname:t.user_id.mobile))])],1),n("v-uni-view",{staticStyle:{"font-size":"28rpx",color:"#C6C8CB"}},[t._v(t._s(t.$u.timeFormat(t.time,"yyyy-mm-dd hh:MM:ss")))])],1)],1)],1)],1),n("v-uni-view",{staticClass:"line"}),n("v-uni-view",{staticClass:"rich"},[n("u-parse",{attrs:{html:t.text}})],1),n("v-uni-view",{staticStyle:{"padding-left":"20rpx",display:"flex"}},t._l(t.img_url,(function(e){return n("v-uni-view",[1==t.img_url.length&&t.img_url[0].image.width>900?n("v-uni-image",{staticClass:"u-image",style:{width:9*t.img_url[0].image.width/32+"rpx"},attrs:{"lazy-load":!0,mode:"widthFix",src:e.url}}):t._e(),1==t.img_url.length&&t.img_url[0].image.width<900?n("v-uni-image",{staticClass:"u-image",style:{width:9*t.img_url[0].image.width/12+"rpx"},attrs:{"lazy-load":!0,mode:"widthFix",src:e.url}}):t._e(),n("v-uni-view",[t.img_url.length>=2&&t.img_url.length<=5&&t.img_url.length%2==0?n("v-uni-view",{staticClass:"image1"},[n("u-image",{staticClass:"u-image",staticStyle:{"margin-left":"10rpx","margin-bottom":"10rpx"},attrs:{src:e.url,width:"45vw",height:"45vw"}})],1):t._e(),3==t.img_url.length||6==t.img_url.length?n("v-uni-view",{staticClass:"image1"},[n("u-image",{staticClass:"u-image",staticStyle:{"margin-left":"10rpx","margin-bottom":"10rpx"},attrs:{src:e.url,width:"30vw",height:"30vw"}})],1):t._e()],1)],1)})),1),n("v-uni-view",{staticClass:"watch"},[n("v-uni-view",[t.isdz?n("u-icon",{attrs:{name:"thumb-up-fill",size:"40",color:"#F3295C"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dz.apply(void 0,arguments)}}}):n("u-icon",{attrs:{name:"thumb-up",size:"40",color:"#909399"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dz.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticStyle:{"margin-right":"15rpx"}},[t._v("123人浏览")]),n("v-uni-view",[t._v(t._s(t.lengths)+"人点赞")])],1)],1),n("v-uni-view",{staticStyle:{width:"100vw",height:"15rpx","background-color":"#EEEEEE"}}),n("v-uni-view",{staticClass:"bottom-title"},[n("v-uni-view",[t._v("全部评论")]),n("v-uni-view",{staticStyle:{color:"#859BF5"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.comment.apply(void 0,arguments)}}},[t._v("评论")])],1),n("v-uni-view",{staticClass:"line"}),n("comment",{attrs:{comments:t.comments},on:{"comment-like":function(e){arguments[0]=e=t.$handleEvent(e),t.handLike.apply(void 0,arguments)},"send-comment":function(e){arguments[0]=e=t.$handleEvent(e),t.handSend.apply(void 0,arguments)},lower:function(e){arguments[0]=e=t.$handleEvent(e),t.lower.apply(void 0,arguments)},reply:function(e){arguments[0]=e=t.$handleEvent(e),t.reply.apply(void 0,arguments)}},model:{value:t.commentText,callback:function(e){t.commentText=e},expression:"commentText"}}),n("u-divider",{staticStyle:{"margin-top":"30rpx"}},[t._v("还没有评论...")]),n("ygc-comment",{ref:"ygcComment",attrs:{placeholder:"发布评论"},on:{pubComment:function(e){arguments[0]=e=t.$handleEvent(e),t.pubComment.apply(void 0,arguments)}}})],1)},s=[]},"3d54":function(t,e,n){"use strict";var i=n("dc44"),a=n.n(i);a.a},4587:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.pl[data-v-05ff1bf8]{display:flex;font-size:%?30?%;padding:%?20?%}.pl .avatar[data-v-05ff1bf8]{margin-right:%?15?%}.textitem[data-v-05ff1bf8]{padding:%?20?%}.text[data-v-05ff1bf8]{margin-top:%?20?%}.content[data-v-05ff1bf8]{display:flex}.content .name[data-v-05ff1bf8]{display:flex;margin-left:%?20?%;flex-direction:column;justify-content:space-around}.line[data-v-05ff1bf8]{width:100%;height:%?1?%;background-color:#eeeded}.rich[data-v-05ff1bf8]{color:#5c5d61;padding:%?25?%}.u-image[data-v-05ff1bf8]{max-width:90vw;border-radius:%?15?%}.image1[data-v-05ff1bf8]{margin-top:%?20?%;flex-wrap:wrap;display:flex}.watch[data-v-05ff1bf8]{padding:%?20?%;display:flex;justify-content:space-between}.watch .right[data-v-05ff1bf8]{display:flex;color:#afb2b7;font-size:%?30?%}.bottom-title[data-v-05ff1bf8]{display:flex;justify-content:space-between;padding:%?20?%}',""]),t.exports=e},"46a1":function(t,e,n){var i=n("6043");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7eac71ad",i,!0,{sourceMap:!1,shadowMode:!1})},4972:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"ygcComment",props:{placeholder:{type:String}},data:function(){return{maskState:0,content:"",focus:!1}},created:function(){},methods:{stopPrevent:function(){},toggleMask:function(t){var e=this,n="show"===t?10:300,i="show"===t?1:0;setTimeout((function(){e.maskState=i,e.focus=!!e.maskState}),n)},pubComment:function(){this.$emit("pubComment",this.content),this.content=""}}};e.default=i},"4d35":function(t,e,n){"use strict";n.r(e);var i=n("4972"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"595c":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("99af"),n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2909"));n("96cf");var s=i(n("1da1")),o=(i(n("3376")),i(n("74bd")),{data:function(){return{color:["#F0C461","#AF58F2","#F270D0","#4FDC46"],id:"",commentText:"",statetext:"",time:"",state:null,Comments:[],type:1,text:"",user_id:{},img_url:[],likedz:[],likesc:[],isdz:!1,lengths:0,comments:[{id:1,avatar:"https://thirdwx.qlogo.cn/mmopen/vi_32/s1l0JVpxz2AFVEs3QmvYCP0w0LliazLmict2qCSQs1Otts8YoCHutdicnW0VicfEez2m9D8wXVlA18IjGTTmfOaMHA/132",nickname:"zzz",content:"我是评论。",addTime:"刚刚",isLike:"0",likeNums:26,layer:1,superNickname:null,superCommentId:null,children:[{id:2,avatar:"https://thirdwx.qlogo.cn/mmopen/vi_32/s1l0JVpxz2AFVEs3QmvYCP0w0LliazLmict2qCSQs1Otts8YoCHutdicnW0VicfEez2m9D8wXVlA18IjGTTmfOaMHA/132",nickname:"程序猿2",content:"我是回复。",addTime:"刚刚",isLike:"0",likeNums:23,layer:2,superNickname:"zzz",superCommentId:1},{id:3,avatar:"https://thirdwx.qlogo.cn/mmopen/vi_32/s1l0JVpxz2AFVEs3QmvYCP0w0LliazLmict2qCSQs1Otts8YoCHutdicnW0VicfEez2m9D8wXVlA18IjGTTmfOaMHA/132",nickname:"马老师",content:"我是回复的回复。",addTime:"刚刚",isLike:"0",likeNums:69,layer:3,superNickname:"程序猿2",superCommentId:1}]}]}},onLoad:function(t){var e=this;return(0,s.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.id=t.id,n.next=3,e.getdetails();case 3:return n.next=5,e.getcomments();case 5:e.lengths=e.likedz.length;case 6:case"end":return n.stop()}}),n)})))()},methods:{handLike:function(t){console.log("11111111",t)},handSend:function(){1==layer&&this.comments.unshift({id:2,avatar:"https://thirdwx.qlogo.cn/mmopen/vi_32/s1l0JVpxz2AFVEs3QmvYCP0w0LliazLmict2qCSQs1Otts8YoCHutdicnW0VicfEez2m9D8wXVlA18IjGTTmfOaMHA/132",nickname:"www",content:this.commentText,addTime:"刚刚",isLike:"0",likeNums:55,layer:1,superNickname:null,superCommentId:null,children:[]})},lower:function(){console.log("到底了")},reply:function(t,e,n,i,a){console.log(t,e,n,i,a)},pubComment:function(e){var n=this;return(0,s.default)(regeneratorRuntime.mark((function i(){var a,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=t.database(),n.$refs.ygcComment.toggleMask("none"),i.next=4,a.collection("comments").add({comment_content:e,comment_type:n.type,article_id:n.id});case 4:s=i.sent,console.log(s);case 6:case"end":return i.stop()}}),i)})))()},comment:function(){this.$refs.ygcComment.toggleMask("show")},getcomments:function(){var e=this;return(0,s.default)(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.database(),n.next=3,i.collection("comments,uni-id-users").where({article_id:e.id}).field("_id,comment_content,comment_type,article_id,time,user_id._id,user_id.mobile,user_id.nickname,user_id.avatar_file.url").get();case 3:a=n.sent,e.Comments=a.result.data,console.log("res",e.Comments);case 6:case"end":return n.stop()}}),n)})))()},dz:function(){var e=this;return(0,s.default)(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=t.database(),a={like_id:e.id,state_type:1},!e.isdz){n.next=10;break}return n.next=5,i.collection("like").where({user_id:e.$store.state.user.info._id,like_id:e.id,state_type:1}).remove();case 5:uni.showToast({title:"取消点赞"}),e.isdz=!1,e.lengths-=1,n.next=15;break;case 10:return n.next=12,i.collection("like").add(a);case 12:uni.showToast({title:"点赞成功"}),e.isdz=!0,e.lengths+=1;case 15:case"end":return n.stop()}}),n)})))()},getdetails:function(){var e=this;return(0,s.default)(regeneratorRuntime.mark((function n(){var i,s,o,r,c,l,d,m,u,f,v,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.database(),n.next=3,i.collection("love,uni-id-users").where({_id:e.id}).field("_id,time,school,statetext,state,img_url,fabulous,text,collection,user_id._id,user_id.mobile,user_id.nickname,user_id.avatar_file.url").get();case 3:return s=n.sent,n.next=6,i.collection("like").where({like_id:e.id}).get();case 6:o=n.sent,r=s.result.data,c=o.result.data,l=r[0],d=l.statetext,m=l.time,u=l.img_url,f=l.user_id,v=l.text,p=l.state,e.statetext=d,e.time=m,e.img_url=u,e.state=p,e.user_id=f[0],e.text=v,c.forEach((function(t){t.state_type?e.likedz=[].concat((0,a.default)(e.likedz),[t]):e.likesc=[].concat((0,a.default)(e.likesc),[t])})),e.likedz.forEach((function(t){t.user_id!=e.$store.state.user.info._id||(e.isdz=!0)})),console.log(e.likedz);case 19:case"end":return n.stop()}}),n)})))()}}});e.default=o}).call(this,n("a9ff")["default"])},"5f78":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"mask",class:0===t.maskState?"none":1===t.maskState?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleMask.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"mask-content",on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"mask-content-input"},[n("v-uni-textarea",{staticClass:"textarea",attrs:{"auto-height":!0,placeholder:t.placeholder,"cursor-spacing":100,"show-confirm-bar":!1,focus:t.focus,maxlength:"140"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("v-uni-view",{staticClass:"right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pubComment.apply(void 0,arguments)}}},[t._v("发布")])],1)],1)],1)},s=[]},6043:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.zwz-comment[data-v-5ff21b30]{height:%?1000?%;width:100vw;background-color:#fff;overflow:scroll}.zwz-comment .comment-num[data-v-5ff21b30]{text-align:center;color:#c1c6cc;height:%?40?%;margin-top:%?10?%}.comment-item-main[data-v-5ff21b30]{margin-bottom:%?40?%}.comment-item-main .comment-item[data-v-5ff21b30]{display:flex;padding:0 %?20?%}.comment-item-main .comment-item .left[data-v-5ff21b30]{width:%?80?%;height:%?80?%;border-radius:50%;overflow:hidden}.comment-item-main .comment-item .left .img[data-v-5ff21b30]{width:%?80?%;height:%?80?%}.comment-item-main .comment-item .content[data-v-5ff21b30]{flex:1;margin:0 %?20?%}.comment-item-main .comment-item .content .title-name[data-v-5ff21b30]{color:#bbb\n  /* display: inline-block; */}.comment-item-main .comment-item .content .title-name uni-view[data-v-5ff21b30]{max-width:%?150?%;display:inline-block;margin-right:%?20?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.comment-item-main .comment-item .content .content-text[data-v-5ff21b30]{\n  /* width: 480rpx; */font-size:16px;margin:%?20?% 0}.comment-item-main .comment-item .content .content-btm[data-v-5ff21b30]{color:#bbb;margin-bottom:%?20?%}.comment-item-main .comment-item .content .content-btm .btm-back[data-v-5ff21b30]{margin-left:%?40?%;font-size:16px}.comment-item-main .comment-item .right[data-v-5ff21b30]{height:%?70?%}.comment-item-main .comment-item .right .img-like uni-image[data-v-5ff21b30]{display:block;width:%?50?%;height:%?50?%;margin-top:%?20?%}.comment-item-main .spread[data-v-5ff21b30]{color:#bbb;margin-left:%?80?%;height:17px;position:relative}.comment-item-main .spread .down[data-v-5ff21b30]{width:0;height:0;position:absolute;margin-left:5px;top:7px;border-right:8px solid transparent;border-left:8px solid transparent;border-bottom:8px solid transparent;border-top:8px solid #bbb}.comment-item-main .spread .up[data-v-5ff21b30]{width:0;height:0;position:absolute;margin-left:5px;bottom:4px;border-right:8px solid transparent;border-left:8px solid transparent;border-bottom:8px solid #bbb;border-top:8px solid transparent}.items[data-v-5ff21b30]{margin-left:%?80?%}.comment-btm[data-v-5ff21b30]{height:%?100?%;width:100%;display:flex;\n  /* position: absolute; */bottom:0;background-color:#fff;border-top:%?2?% solid #e0e0e0}.comment-btm uni-input[data-v-5ff21b30]{height:%?80?%;width:%?400?%;border-radius:%?20?%;background-color:#f3f3f3;margin-left:%?80?%;margin-top:%?10?%;padding:%?10?%}.comment-btm uni-button[data-v-5ff21b30]{height:%?80?%;margin-top:%?10?%}.comment-like-num[data-v-5ff21b30]{display:inline-block;width:%?50?%;text-align:center}',""]),t.exports=e},"66a8":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.mask[data-v-09737dd0]{display:flex;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:9995;transition:.1s;-webkit-transition:.1s}.mask .mask-content[data-v-09737dd0]{width:100%;background:#fff;-webkit-transform:translateY(100%);transform:translateY(100%);transition:.1s;-webkit-transition:.1s;display:flex;flex-direction:column}.mask .mask-content .mask-content-topbar[data-v-09737dd0]{display:flex;flex-direction:row;justify-content:space-between;padding:%?20?% %?30?% %?10?%;font-size:%?32?%}.mask .mask-content .mask-content-topbar .left[data-v-09737dd0]{padding:%?10?% %?0?%;color:#606266}.mask .mask-content .mask-content-input[data-v-09737dd0]{display:flex;width:100%;padding:%?16?% %?16?% %?20?%}.mask .mask-content .mask-content-input .textarea[data-v-09737dd0]{width:%?530?%;padding:%?16?%;border:%?2?% solid #d5d5d6;border-radius:%?50?%}.mask .mask-content .mask-content-input .right[data-v-09737dd0]{background-color:#ee983a;color:#fff;width:%?130?%;text-align:center;line-height:%?80?%;border-radius:%?50?%;margin-right:%?20?%;margin-left:%?20?%}.mask.none[data-v-09737dd0]{display:none}.mask.show[data-v-09737dd0]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-09737dd0]{-webkit-transform:translateY(0);transform:translateY(0)}',""]),t.exports=e},"74bd":function(t,e,n){"use strict";n.r(e);var i=n("16b1"),a=n("cf7d");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("c993");var o,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5ff21b30",null,!1,i["a"],o);e["default"]=c.exports},"982f":function(t,e,n){var i=n("66a8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("baaff41c",i,!0,{sourceMap:!1,shadowMode:!1})},ad26:function(t,e,n){"use strict";var i=n("982f"),a=n.n(i);a.a},c993:function(t,e,n){"use strict";var i=n("46a1"),a=n.n(i);a.a},cf7d:function(t,e,n){"use strict";n.r(e);var i=n("fc8e"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},da4e:function(t,e,n){"use strict";n.r(e);var i=n("595c"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},dc44:function(t,e,n){var i=n("4587");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("65c822dd",i,!0,{sourceMap:!1,shadowMode:!1})},ea10:function(t,e,n){"use strict";n.r(e);var i=n("3621"),a=n("da4e");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("3d54");var o,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"05ff1bf8",null,!1,i["a"],o);e["default"]=c.exports},fc8e:function(t,e,n){"use strict";n("c975"),n("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"zwz-comment",props:{comments:{type:Array,default:function(){return[]}},value:""},data:function(){return{showReplyList:[],placeholderComment:"发条评论吧~",iptFocus:!1,layer:1,superCommentId:null}},methods:{isShowReply:function(t,e){if(-1==this.showReplyList.indexOf(t))this.showReplyList.push(t),this.$emit("reply-click",this.book);else{var n=this.showReplyList.indexOf(t);this.showReplyList.splice(n,1)}},commentLike:function(t){this.$emit("comment-like",t)},replyComment:function(t,e,n,i,a){console.log("index",i),this.iptFocus=!0,this.placeholderComment="回复@"+t,this.superCommentId=e,this.superUserId=t,this.layer=n,this.CommentIndex=i,this.$emit("reply",i,e,t,n,a)},sendCourseComment:function(){this.$emit("send-comment",this.layer,this.superCommentId)},input:function(t){this.$emit("input",t.target.value)},lower:function(){console.log("222222"),this.$emit("lower")}}};e.default=i}}]);