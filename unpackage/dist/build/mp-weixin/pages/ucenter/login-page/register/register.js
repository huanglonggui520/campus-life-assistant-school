(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/login-page/register/register"],{"007f":function(n,t,e){"use strict";var i=e("2fc6"),u=e.n(i);u.a},"1d90":function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var i={uniForms:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(e.bind(null,"3105"))},uniFormsItem:function(){return e.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(e.bind(null,"61522"))},uniEasyinput:function(){return e.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(e.bind(null,"5faa"))},uniCaptcha:function(){return e.e("uni_modules/uni-captcha/components/uni-captcha/uni-captcha").then(e.bind(null,"0353"))},uniAgreements:function(){return e.e("components/uni-agreements/uni-agreements").then(e.bind(null,"cc95"))}},u=function(){var n=this,t=n.$createElement,e=(n._self._c,n.$t("register.usernamePlaceholder")),i=n.$t("register.nicknamePlaceholder"),u=n.$t("register.passwordDigitsPlaceholder"),a=n.$t("register.passwordAgain"),o=n.$t("register.registerAndLogin");n._isMounted||(n.e0=function(t){n.agree=t}),n.$mp.data=Object.assign({},{$root:{m0:e,m1:i,m2:u,m3:a,m4:o}})},a=[]},"2fc6":function(n,t,e){},"636a":function(n,t,e){"use strict";(function(n){e("31b5"),e("a9ff");i(e("66fd"));var t=i(e("bff2"));function i(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},bff2:function(n,t,e){"use strict";e.r(t);var i=e("1d90"),u=e("c907");for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);e("007f");var o,r=e("f0c5"),s=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,"a4df31a2",null,!1,i["a"],o);t["default"]=s.exports},c907:function(n,t,e){"use strict";e.r(t);var i=e("cd80"),u=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=u.a},cd80:function(n,t,e){"use strict";(function(n,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(e("0c68")),a=o(e("b85b"));function o(n){return n&&n.__esModule?n:{default:n}}var r={mixins:[a.default],data:function(){return{formData:{username:"",nickname:"",password:"",pwd2:"",captcha:""},rules:u.default,agree:!1}},computed:{canSubmit:function(){return this.formData.username.length&&this.formData.password.length&&4==this.formData.captcha.length&&this.agree}},onReady:function(){this.$refs.form.setRules(this.rules)},onLoad:function(){n.setNavigationBarTitle({title:this.$t("register.navigationBarTitle")})},methods:{submit:function(){var t=this;if(!this.agree)return n.showToast({title:this.$t("common.noAgree"),icon:"none"});n.showLoading({mask:!0}),this.$refs.form.validate().then((function(n){t.submitForm(n)})).catch((function(n){console.log(n)})).finally((function(){n.hideLoading()}))},submitForm:function(t){var e=this;i.callFunction({name:"uni-id-cf",data:{action:"register",params:t},success:function(t){var i=t.result;console.log(i),0===i.code?e.loginSuccess(i):n.showModal({content:i.msg,showCancel:!1})}})}}};t.default=r}).call(this,e("543d")["default"],e("a9ff")["default"])}},[["636a","common/runtime","common/vendor"]]]);