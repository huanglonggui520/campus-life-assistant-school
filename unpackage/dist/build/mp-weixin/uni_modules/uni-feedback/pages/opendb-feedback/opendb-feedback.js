(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback"],{"09b3":function(e,n,t){},"88e6":function(e,n,t){"use strict";var r=t("09b3"),o=t.n(r);o.a},"9fed":function(e,n,t){"use strict";(function(e){t("31b5"),t("a9ff");r(t("66fd"));var n=r(t("d03f"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},cf16:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var r={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"3105"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"61522"))},uniFilePicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(t.bind(null,"2d98"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"5faa"))}},o=function(){var e=this,n=e.$createElement;e._self._c},i=[]},d03f:function(e,n,t){"use strict";t.r(n);var r=t("cf16"),o=t("e4c0");for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t("88e6");var u,c=t("f0c5"),a=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=a.exports},e4c0:function(e,n,t){"use strict";t.r(n);var r=t("fb9e"),o=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=o.a},fb9e:function(e,n,t){"use strict";(function(e,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("3c68");function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}console.log(o.validator);var a=e.database(),f="opendb-feedback";function s(e){var n={};for(var t in o.validator)e.indexOf(t)>-1&&(n[t]=o.validator[t]);return n}var l={data:function(){var e={content:"",imgs:[],contact:"",mobile:""};return{formData:e,formOptions:{},rules:u({},s(Object.keys(e)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var e=this;r.showLoading({mask:!0}),this.$refs.form.validate().then((function(n){e.submitForm(n)})).catch((function(){r.hideLoading()}))},submitForm:function(e){var n=this;a.collection(f).add(e).then((function(e){r.showToast({icon:"none",title:"提交成功"}),n.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return r.navigateBack()}),500)})).catch((function(e){r.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){r.hideLoading()}))}}};n.default=l}).call(this,t("a9ff")["default"],t("543d")["default"])}},[["9fed","common/runtime","common/vendor"]]]);