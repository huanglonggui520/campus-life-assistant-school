(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"35c5":function(e,t,n){"use strict";(function(e){n("31b5"),n("a9ff");r(n("66fd"));var t=r(n("90ea"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},7182:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var r={uNavbar:function(){return n.e("node-modules/uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"6a9f"))},uIcon:function(){return n.e("node-modules/uview-ui/components/u-icon/u-icon").then(n.bind(null,"57fa"))},uSelect:function(){return n.e("node-modules/uview-ui/components/u-select/u-select").then(n.bind(null,"aecf"))},uSearch:function(){return n.e("node-modules/uview-ui/components/u-search/u-search").then(n.bind(null,"6868"))},uNoticeBar:function(){return n.e("node-modules/uview-ui/components/u-notice-bar/u-notice-bar").then(n.bind(null,"63d3"))},uSwiper:function(){return n.e("node-modules/uview-ui/components/u-swiper/u-swiper").then(n.bind(null,"a112"))},uImage:function(){return n.e("node-modules/uview-ui/components/u-image/u-image").then(n.bind(null,"a4ce"))},uTabs:function(){return n.e("node-modules/uview-ui/components/u-tabs/u-tabs").then(n.bind(null,"ff7a"))},uAvatar:function(){return n.e("node-modules/uview-ui/components/u-avatar/u-avatar").then(n.bind(null,"fc0a"))},uTag:function(){return n.e("node-modules/uview-ui/components/u-tag/u-tag").then(n.bind(null,"9c60"))},uParse:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-parse/u-parse")]).then(n.bind(null,"b069"))},uDivider:function(){return n.e("node-modules/uview-ui/components/u-divider/u-divider").then(n.bind(null,"f4c8"))},uBackTop:function(){return n.e("node-modules/uview-ui/components/u-back-top/u-back-top").then(n.bind(null,"73d6"))}},i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.databbai,(function(t,n){var r=e.__get_orig(t),i=e.$u.timeFrom(t.time,"yyyy-mm-dd hh:MM:ss"),u=t.text.replaceAll("\n","<br>");return{$orig:r,g0:i,g1:u}})));e._isMounted||(e.e0=function(t){e.show=!0}),e.$mp.data=Object.assign({},{$root:{l0:n}})},u=[]},"809a":function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){return l(e)||c(e)||s(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e){if(Array.isArray(e))return d(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n,r,i,u,o){try{var a=e[u](o),s=a.value}catch(c){return void n(c)}a.done?t(s):Promise.resolve(s).then(r,i)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var u=e.apply(t,n);function o(e){f(u,r,i,o,a,"next",e)}function a(e){f(u,r,i,o,a,"throw",e)}o(void 0)}))}}var h={data:function(){return{buttomtitle:"加载中...",scrollTop:0,count:0,show:!1,colors:"#909399",isshow:!1,listschool:[{value:1,label:"贵州师范大学"},{label:"贵州财经大学",value:2},{label:"贵州医科大学",value:3},{label:"贵州大学",value:4}],color:["#F0C461","#AF58F2","#F270D0","#4FDC46"],keyword:"",SCHOOL:"贵州师范大学",list:[],list1:[{image:"https://cdn.uviewui.com/uview/swiper/1.jpg",title:"昨夜星辰昨夜风，画楼西畔桂堂东"},{image:"https://cdn.uviewui.com/uview/swiper/2.jpg",title:"身无彩凤双飞翼，心有灵犀一点通"},{image:"https://cdn.uviewui.com/uview/swiper/3.jpg",title:"谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"}],pages:1,listtab:[{name:"最新动态"},{name:"表白墙"},{name:"二手闲置"},{name:"快递代取"},{name:"失物招领"}],current:0,databbai:[],textid:"",type:1}},onLoad:function(){var e=this;return p(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.$store.state.user.school),t.next=3,e.get();case 3:n=t.sent,e.databbai=n,console.log(e.databbai);case 6:case"end":return t.stop()}}),t)})))()},onPullDownRefresh:function(){var t=this;return p(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.pages=1,n.next=3,t.get();case 3:r=n.sent,0!=r.length?t.databbai=r:e.showToast({title:"没有更多信息了",icon:"none"}),e.stopPullDownRefresh();case 6:case"end":return n.stop()}}),n)})))()},onReachBottom:function(){var e=this;return p(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isshow=!0,e.buttomtitle="玩命加载中...",e.pages=e.pages+1,t.next=5,e.get();case 5:n=t.sent,e.databbai=[].concat(o(e.databbai),o(n));case 7:case"end":return t.stop()}}),t)})))()},computed:{slotRightCurrent:function(){return this.slotRight?0:1}},methods:{goxiangq:function(t){console.log(t),e.navigateTo({url:"/pages/details/details?id=".concat(t._id._value)})},fabulous:function(t,n){var u=this;return p(i.default.mark((function o(){var a,s,c,l,d,f,h,m;return i.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(a=r.database(),s={like_id:t._id._value,state_type:0},c={like_id:t._id._value,state_type:1},l={like_id:t._id._value,state_type:0,user_id:u.$store.state.user.info._id},d={like_id:t._id._value,state_type:1,user_id:u.$store.state.user.info._id},f=0,!t._id.like.length){o.next=10;break}t._id.like.forEach(function(){var r=p(i.default.mark((function r(o,s){var c;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n||o.user_id!=u.$store.state.user.info._id||o.state_type){r.next=8;break}return r.next=3,a.collection("like").where({user_id:u.$store.state.user.info._id,like_id:t._id._value}).remove();case 3:return e.showToast({title:"取消收藏",icon:"none"}),t.color=0,t.numsc-=1,t._id.like.splice(s,1),r.abrupt("return");case 8:if(!n||o.user_id!=u.$store.state.user.info._id||!o.state_type){r.next=21;break}return r.next=11,a.collection("like").where({user_id:u.$store.state.user.info._id,like_id:t._id._value}).remove();case 11:return e.showToast({title:"取消点赞",icon:"none"}),t.colordz=0,t.numdz-=1,console.log(t),t._id.like.splice(s,1),c=a.collection("love"),r.next=19,c.where({_id:t._id._value}).update({fabulous:t.numdz});case 19:return r.sent,r.abrupt("return");case 21:f+=1;case 22:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),o.next=30;break;case 10:if(n){o.next=19;break}return o.next=13,a.collection("like").add(s);case 13:e.showToast({title:"收藏成功",icon:"none"}),t.color=1,t.numsc+=1,t._id.like.push(l),o.next=30;break;case 19:if(!n){o.next=30;break}return o.next=22,a.collection("like").add(c);case 22:return e.showToast({title:"点赞成功",icon:"none"}),t.numdz+=1,t.colordz=1,t._id.like.push(d),h=a.collection("love"),o.next=29,h.where({_id:t._id._value}).update({fabulous:t.numdz});case 29:o.sent;case 30:if(!(f>=t._id.like.length)||n){o.next=37;break}return o.next=33,a.collection("like").add(s);case 33:e.showToast({title:"收藏成功",icon:"none"}),t.color=1,t.numsc+=1,t._id.like.push(l);case 37:if(!(f>=t._id.like.length&&n)){o.next=48;break}return o.next=40,a.collection("like").add(c);case 40:return e.showToast({title:"点赞成功",icon:"none"}),t.colordz=1,t.numdz+=1,t._id.like.push(d),m=a.collection("love"),o.next=47,m.where({_id:t._id._value}).update({fabulous:t.numdz});case 47:o.sent;case 48:case"end":return o.stop()}}),o)})))()},getlike:function(e){return p(i.default.mark((function t(){var n,u;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=r.database(),t.next=3,n.collection("like").where({like_id:e}).get();case 3:return u=t.sent,t.abrupt("return",u);case 5:case"end":return t.stop()}}),t)})))()},look:function(t){var n=[];n.push(t),e.previewImage({indicator:"number",loop:!0,urls:n,longPressActions:!0})},school:function(e){var t=this;return p(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.$store.commit("user/SCHOOL",e[0].label),t.SCHOOL=t.$store.state.user.school,n.next=4,t.get();case 4:r=n.sent,t.databbai=r,console.log(r);case 7:case"end":return n.stop()}}),n)})))()},get:function(){var e=this;return p(i.default.mark((function t(){var n,u,o,a,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=r.database(),t.next=3,n.collection("nocite").get();case 3:if(u=t.sent,e.list=u.result.data[0].text,o=e.$store.state.user.school,0!=e.current){t.next=12;break}return t.next=9,n.collection("love,like,uni-id-users").where({school:o}).field("_id,time,school,statetext,state,img_url,fabulous,text,collection,user_id._id,user_id.mobile,user_id.nickname,user_id.avatar_file.url").orderBy("time desc").skip(8*(e.pages-1)).limit(8).get();case 9:a=t.sent,t.next=15;break;case 12:return t.next=14,n.collection("love,uni-id-users,like").where({state:e.current,school:o}).field("_id,time,school,statetext,state,img_url,fabulous,text,collection,user_id._id,user_id.mobile,user_id.nickname,user_id.avatar_file.url").orderBy("time desc").skip(8*(e.pages-1)).limit(8).get();case 14:a=t.sent;case 15:if(s=a.result.data,s.forEach((function(t){t.color=0,t.colordz=0,t.numsc=0,t.numdz=0,t._id.like.forEach((function(n){n.user_id!=e.$store.state.user.info._id||n.state_type?n.user_id==e.$store.state.user.info._id&&n.state_type&&(t.colordz=1):t.color=1,n.state_type?n.state_type&&(t.numdz+=1):t.numsc+=1}))})),console.log("bbq",s),0!=s.length){t.next=24;break}return e.buttomtitle="我也是有底线的",e.isshow=!0,t.abrupt("return",[]);case 24:return e.isshow=!1,t.abrupt("return",s);case 26:case"end":return t.stop()}}),t)})))()},onPageScroll:function(e){this.scrollTop=e.scrollTop},change:function(t){var n=this;return p(i.default.mark((function r(){var u;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.showLoading({title:"加载中..."}),n.isshow=!1,n.databbai=[],n.pages=1,n.current=t,r.next=7,n.get();case 7:u=r.sent,n.databbai=u,e.hideLoading();case 10:case"end":return r.stop()}}),r)})))()}}};t.default=h}).call(this,n("543d")["default"],n("a9ff")["default"])},"858a":function(e,t,n){"use strict";var r=n("eb46"),i=n.n(r);i.a},"90ea":function(e,t,n){"use strict";n.r(t);var r=n("7182"),i=n("ca95");for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n("858a");var o,a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"352cb1db",null,!1,r["a"],o);t["default"]=s.exports},ca95:function(e,t,n){"use strict";n.r(t);var r=n("809a"),i=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=i.a},eb46:function(e,t,n){}},[["35c5","common/runtime","common/vendor"]]]);