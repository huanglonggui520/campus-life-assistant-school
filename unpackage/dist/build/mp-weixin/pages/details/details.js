(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/details"],{"0a73":function(e,t,n){"use strict";var i=n("d9c0"),r=n.n(i);r.a},"2e10":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uAvatar:function(){return n.e("node-modules/uview-ui/components/u-avatar/u-avatar").then(n.bind(null,"fc0a"))},uTag:function(){return n.e("node-modules/uview-ui/components/u-tag/u-tag").then(n.bind(null,"9c60"))},uParse:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-parse/u-parse")]).then(n.bind(null,"b069"))},uImage:function(){return n.e("node-modules/uview-ui/components/u-image/u-image").then(n.bind(null,"a4ce"))},uIcon:function(){return n.e("node-modules/uview-ui/components/u-icon/u-icon").then(n.bind(null,"57fa"))},comment:function(){return n.e("components/comment/comment").then(n.bind(null,"74bd"))},uEmpty:function(){return n.e("node-modules/uview-ui/components/u-empty/u-empty").then(n.bind(null,"bff3"))},ygcComment:function(){return n.e("components/ygc-comment/ygc-comment").then(n.bind(null,"3376"))},uBackTop:function(){return n.e("node-modules/uview-ui/components/u-back-top/u-back-top").then(n.bind(null,"73d6"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$u.timeFrom(e.time,"yyyy-mm-dd hh:MM:ss")),i=e.text.replaceAll("\n","<br>");e.$mp.data=Object.assign({},{$root:{g0:n,g1:i}})},o=[]},4727:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return l(e)||c(e)||s(e)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e){if(Array.isArray(e))return d(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function m(e,t,n,i,r,o,a){try{var u=e[o](a),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(i,r)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function a(e){m(o,i,r,a,u,"next",e)}function u(e){m(o,i,r,a,u,"throw",e)}a(void 0)}))}}var f=function(){n.e("components/ygc-comment/ygc-comment").then(function(){return resolve(n("3376"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/comment/comment").then(function(){return resolve(n("74bd"))}.bind(null,n)).catch(n.oe)},h={components:{comment:p,ygcComment:f},data:function(){return{color:["#F0C461","#AF58F2","#F270D0","#4FDC46"],id:"",commentText:"",placeholderComment:"说点什么吧...",commentone_id:"",superNickname:"",reply_user_id:"",layer:0,statetext:"",time:"",etext:"",state:null,commentscs:[],type:1,scrollTop:0,text:"",user_id:{},img_url:[],likedz:[],likesc:[],isdz:!1,lengths:0,commentlist:[]}},onLoad:function(e){var t=this;return _(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.$bus.$on("comment",t.comment),t.id=e.id,n.next=4,t.getdetails();case 4:return n.next=6,t.getcomments();case 6:t.lengths=t.likedz.length,t.setcomments(),console.log("user",t.user_id);case 9:case"end":return n.stop()}}),n)})))()},methods:{look:function(t){var n=[];n.push(t),e.previewImage({indicator:"number",loop:!0,urls:n,longPressActions:!0})},lower:function(){console.log("到底了")},onPageScroll:function(e){this.scrollTop=e.scrollTop},reply:function(e,t,n,i,r,o){console.log(e,t,n,i,r,o),this.commentone_id=n,this.superNickname=i,this.placeholderComment=e,this.layer=r,this.reply_user_id=o.super_user_id},pubComment:function(t){var n=this;return _(r.default.mark((function o(){var a,u,s,c,l,d;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a={},u="",s=i.database(),n.$refs.ygcComment.toggleMask("none"),console.log(n.layer),2!=n.layer&&3!=n.layer){r.next=12;break}return r.next=8,s.collection("comments").add({comment_content:t,comment_type:n.layer,article_id:n.id,reply_id:n.commentone_id,reply_user_id:n.reply_user_id});case 8:c=r.sent,u=c.result.id,r.next=17;break;case 12:if(1!=n.layer){r.next=17;break}return r.next=15,s.collection("comments").add({comment_content:t,comment_type:n.layer,article_id:n.id});case 15:l=r.sent,u=l.result.id;case 17:return r.next=19,s.collection("comments,uni-id-users").where({_id:u}).field("_id,comment_content,reply_id,comment_type,reply_user_id._id,reply_user_id.mobile,reply_user_id.nickname,article_id,time,user_id._id,user_id.mobile,user_id.nickname,user_id.avatar_file.url").get();case 19:d=r.sent,a.id=d.result.data[0]._id,a.avatar=d.result.data[0].user_id[0].avatar_file?d.result.data[0].user_id[0].avatar_file.url:"/static/uni-center/tx.jpg",a.nickname=d.result.data[0].user_id[0].nickname?d.result.data[0].user_id[0].nickname:d.result.data[0].user_id[0].mobile,a.content=d.result.data[0].comment_content,a.addTime=d.result.data[0].time,a.isLike="0",a.user_id=d.result.data[0].user_id[0]._id,1==n.layer?(a.layer=1,a.superCommentId=null,a.superNickname=null,a.children=[],n.commentlist.unshift(a)):2!=n.layer&&3!=n.layer||(a.super_user_id=d.result.data[0].user_id[0]._id,a.layer=d.result.data[0].comment_type,a.superCommentId=d.result.data[0].reply_id,a.superNickname=d.result.data[0].reply_user_id.length?d.result.data[0].reply_user_id[0].nickname||d.result.data[0].reply_user_id[0].mobile:null,n.commentlist.forEach((function(e){1==e.layer&&e.id==d.result.data[0].reply_id&&(e.children.push(a),console.log("767",e))}))),e.showToast({title:"发表成功"}),console.log("单个评论",d.result.data[0]),console.log("礼拜",n.commentlist);case 31:case"end":return r.stop()}}),o)})))()},comment:function(e){console.log(e),this.layer=e,this.$refs.ygcComment.toggleMask("show")},getcomments:function(){var e=this;return _(r.default.mark((function t(){var n,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=i.database(),t.next=3,n.collection("comments,uni-id-users").where({article_id:e.id}).field("_id,comment_content,reply_id,comment_type,reply_user_id._id,reply_user_id.mobile,reply_user_id.nickname,article_id,time,user_id._id,user_id.mobile,user_id.nickname,user_id.avatar_file.url").orderBy("time desc").get();case 3:o=t.sent,e.commentscs=o.result.data;case 5:case"end":return t.stop()}}),t)})))()},setcomments:function(){var e=this;this.commentscs.forEach((function(t){var n={};1==t.comment_type&&(n.id=t._id,n.avatar=t.user_id[0].avatar_file?t.user_id[0].avatar_file.url:"/static/uni-center/tx.jpg",n.nickname=t.user_id[0].nickname?t.user_id[0].nickname:t.user_id[0].mobile,n.content=t.comment_content,n.user_id=t.user_id[0]._id,n.addTime=t.time,n.isLike="0",n.layer=1,n.superNickname=null,n.superCommentId=null,n.children=[],e.commentlist.push(n))})),this.commentscs.forEach((function(t){var n={};2==t.comment_type&&e.commentlist.forEach((function(e){e.id==t.reply_id&&(n.id=t._id,n.avatar=t.user_id[0].avatar_file?t.user_id[0].avatar_file.url:"/static/uni-center/tx.jpg",n.nickname=t.user_id[0].nickname?t.user_id[0].nickname:t.user_id[0].mobile,n.content=t.comment_content,n.user_id=t.user_id[0]._id,n.addTime=t.time,n.isLike="0",n.layer=2,n.super_user_id=t.user_id[0]._id,n.superNickname=e.nickname,n.superCommentId=e.id,e.children.push(n))}))})),this.commentscs.forEach((function(t){var n={};3==t.comment_type&&e.commentlist.forEach((function(e){e.id==t.reply_id&&(n.id=t._id,n.user_id=t.user_id[0]._id,n.avatar=t.user_id[0].avatar_file?t.user_id[0].avatar_file.url:"/static/uni-center/tx.jpg",n.nickname=t.user_id[0].nickname?t.user_id[0].nickname:t.user_id[0].mobile,n.content=t.comment_content,n.addTime=t.time,n.isLike="0",n.layer=3,n.super_user_id=t.user_id[0]._id,n.superNickname=t.reply_user_id[0].nickname?t.reply_user_id[0].nickname:t.reply_user_id[0].mobile,n.superCommentId=e.id,e.children.push(n))}))})),console.log("初始数据",this.commentscs),console.log("评论列表",this.commentlist)},dz:function(){var t=this;return _(r.default.mark((function n(){var o,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=i.database(),a={like_id:t.id,state_type:1},!t.isdz){n.next=10;break}return n.next=5,o.collection("like").where({user_id:t.$store.state.user.info._id,like_id:t.id,state_type:1}).remove();case 5:e.showToast({title:"取消点赞"}),t.isdz=!1,t.lengths-=1,n.next=15;break;case 10:return n.next=12,o.collection("like").add(a);case 12:e.showToast({title:"点赞成功"}),t.isdz=!0,t.lengths+=1;case 15:case"end":return n.stop()}}),n)})))()},getdetails:function(){var e=this;return _(r.default.mark((function t(){var n,o,u,s,c,l,d,m,_,f,p,h;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=i.database(),t.next=3,n.collection("love,uni-id-users").where({_id:e.id}).field("_id,time,school,statetext,state,img_url,fabulous,text,collection,user_id._id,user_id.mobile,user_id.nickname,user_id.avatar_file.url").get();case 3:return o=t.sent,t.next=6,n.collection("like").where({like_id:e.id}).get();case 6:u=t.sent,s=o.result.data,c=u.result.data,l=s[0],d=l.statetext,m=l.time,_=l.img_url,f=l.user_id,p=l.text,h=l.state,e.statetext=d,e.time=m,e.img_url=_,e.state=h,e.user_id=f[0],e.text=p,c.forEach((function(t){t.state_type?e.likedz=[].concat(a(e.likedz),[t]):e.likesc=[].concat(a(e.likesc),[t])})),e.likedz.forEach((function(t){t.user_id!=e.$store.state.user.info._id||(e.isdz=!0)}));case 18:case"end":return t.stop()}}),t)})))()}}};t.default=h}).call(this,n("543d")["default"],n("a9ff")["default"])},bf66:function(e,t,n){"use strict";(function(e){n("31b5"),n("a9ff");i(n("66fd"));var t=i(n("ea10"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},d9c0:function(e,t,n){},da4e:function(e,t,n){"use strict";n.r(t);var i=n("4727"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},ea10:function(e,t,n){"use strict";n.r(t);var i=n("2e10"),r=n("da4e");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("0a73");var a,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"0e9735d2",null,!1,i["a"],a);t["default"]=s.exports}},[["bf66","common/runtime","common/vendor"]]]);