(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/login-page/phone-code/phone-code"],{"179f":function(n,e,t){"use strict";(function(n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=c(t("b85b"));function c(n){return n&&n.__esModule?n:{default:n}}var i={mixins:[u.default],data:function(){return{code:"",phone:"",captcha:!1}},computed:{tipText:function(){return this.$t("common.verifyCodeSend")+"".concat(this.phone,"。")},canSubmit:function(){return 6==this.code.length}},onLoad:function(n){var e=n.phoneNumber;n.phoneArea;this.phone=e},onReady:function(){11==this.phone.length&&this.$refs.sendSmsCode.start()},methods:{submit:function(){var e=this;n.callFunction({name:"uni-id-cf",data:{action:"loginBySms",params:{mobile:this.phone,code:this.code,captcha:this.captcha}},success:function(n){var t=n.result;if(o.showToast({title:t.msg||t.errMsg,icon:"none"}),"CAPTCHA_REQUIRED"==t.errCode)return e.$refs["popup-captcha"].open();0===t.code&&e.loginSuccess(t)},complete:function(){e.captcha=!1}})}}};e.default=i}).call(this,t("a9ff")["default"],t("543d")["default"])},"6a70":function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return o}));var o={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"3105"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"5faa"))},uniSendSmsCode:function(){return t.e("components/uni-send-sms-code/uni-send-sms-code").then(t.bind(null,"cca0"))},uniQuickLogin:function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-quick-login/uni-quick-login")]).then(t.bind(null,"ab68"))},uniPopupCaptcha:function(){return t.e("uni_modules/uni-captcha/components/uni-popup-captcha/uni-popup-captcha").then(t.bind(null,"89ca"))}},u=function(){var n=this,e=n.$createElement,t=(n._self._c,n.$t("common.verifyCodePlaceholder")),o=n.$t("common.verifyCodePlaceholder"),u=n.$t("common.login");n.$mp.data=Object.assign({},{$root:{m0:t,m1:o,m2:u}})},c=[]},"717b":function(n,e,t){},f32e:function(n,e,t){"use strict";t.r(e);var o=t("6a70"),u=t("ff8f");for(var c in u)"default"!==c&&function(n){t.d(e,n,(function(){return u[n]}))}(c);t("ffe1");var i,a=t("f0c5"),r=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=r.exports},f6cc:function(n,e,t){"use strict";(function(n){t("31b5"),t("a9ff");o(t("66fd"));var e=o(t("f32e"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},ff8f:function(n,e,t){"use strict";t.r(e);var o=t("179f"),u=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=u.a},ffe1:function(n,e,t){"use strict";var o=t("717b"),u=t.n(o);u.a}},[["f6cc","common/runtime","common/vendor"]]]);