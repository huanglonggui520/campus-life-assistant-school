(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-quick-login/uni-quick-login"],{

/***/ 431:
/*!******************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/components/uni-quick-login/uni-quick-login.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_quick_login_vue_vue_type_template_id_d69f7544_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-quick-login.vue?vue&type=template&id=d69f7544&scoped=true& */ 432);
/* harmony import */ var _uni_quick_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-quick-login.vue?vue&type=script&lang=js& */ 434);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_quick_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_quick_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_quick_login_vue_vue_type_style_index_0_id_d69f7544_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-quick-login.vue?vue&type=style&index=0&id=d69f7544&lang=scss&scoped=true& */ 439);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_quick_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_quick_login_vue_vue_type_template_id_d69f7544_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_quick_login_vue_vue_type_template_id_d69f7544_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d69f7544",
  null,
  false,
  _uni_quick_login_vue_vue_type_template_id_d69f7544_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/uni-quick-login/uni-quick-login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 432:
/*!*************************************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/components/uni-quick-login/uni-quick-login.vue?vue&type=template&id=d69f7544&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_template_id_d69f7544_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-quick-login.vue?vue&type=template&id=d69f7544&scoped=true& */ 433);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_template_id_d69f7544_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_template_id_d69f7544_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_template_id_d69f7544_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_template_id_d69f7544_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 433:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniappprojrcy/校园生活助手/components/uni-quick-login/uni-quick-login.vue?vue&type=template&id=d69f7544&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniUserProfile: function() {
      return __webpack_require__.e(/*! import() | components/uni-user-profile/uni-user-profile */ "components/uni-user-profile/uni-user-profile").then(__webpack_require__.bind(null, /*! @/components/uni-user-profile/uni-user-profile.vue */ 637))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event, item) {
      var _temp = arguments[arguments.length - 1].currentTarget.dataset,
        _temp2 = _temp.eventParams || _temp["event-params"],
        item = _temp2.item

      var _temp, _temp2

      item.path ? _vm.to(item.path) : _vm.login_before(item.id, false)
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 434:
/*!*******************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/components/uni-quick-login/uni-quick-login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-quick-login.vue?vue&type=script&lang=js& */ 435);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 435:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniappprojrcy/校园生活助手/components/uni-quick-login/uni-quick-login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));














var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 3);


var _index = _interopRequireDefault(__webpack_require__(/*! ./i18n/index.js */ 436));



var _vuex = __webpack_require__(/*! vuex */ 19);




var _loginSuccess = _interopRequireDefault(__webpack_require__(/*! @/pages/ucenter/login-page/common/loginSuccess.js */ 193));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _initVueI18n = (0, _uniI18n.initVueI18n)(_index.default),t = _initVueI18n.t;
var db = uniCloud.database();
var usersTable = db.collection('uni-id-users');
var allServicesList = [];var _default2 =
{
  computed: {
    loginConfig: function loginConfig() {
      return getApp().globalData.config.router.login;
    },
    agreements: function agreements() {
      return getApp().globalData.config.about.agreements || [];
    } },

  data: function data() {
    return {
      servicesList: [{
        "id": "username",
        "text": t('accountLogin'),
        "logo": "/static/uni-quick-login/user.png",
        "path": "/pages/ucenter/login-page/pwd-login/pwd-login" },

      {
        "id": "smsCode",
        "text": t('SMSLogin'),
        "logo": "/static/uni-quick-login/sms.png",
        "path": "/pages/ucenter/login-page/index/index?type=smsCode" },

      {
        "id": "weixin",
        "text": t('wechatLogin'),
        "logo": "/static/uni-quick-login/wechat.png" },

      {
        "id": "apple",
        "text": t('appleLogin'),
        "logo": "/static/uni-quick-login/apple.png" },

      {
        "id": "univerify",
        "text": t('oneClickLogin'),
        "logo": "/static/uni-quick-login/univerify.png" },

      {
        "id": "qq",
        "text": t('QQLogin'), //暂未提供该登录方式的接口示例
        "logo": "/static/uni-quick-login/univerify.png" },

      {
        "id": "xiaomi",
        "text": t('xiaomiLogin'), //暂未提供该登录方式的接口示例
        "logo": "/static/uni-quick-login/univerify.png" },

      {
        "id": "sinaweibo",
        "text": t('weibo'), //暂未提供该登录方式的接口示例
        "logo": "/static/uni-quick-login/univerify.png" }],


      config: {},
      univerifyStyle: { //一键登录弹出窗的样式配置参数
        "fullScreen": true, // 是否全屏显示，true表示全屏模式，false表示非全屏模式，默认值为false。
        "backgroundColor": "#ffffff", // 授权页面背景颜色，默认值：#ffffff
        "buttons": { // 自定义登录按钮
          "iconWidth": "45px", // 图标宽度（高度等比例缩放） 默认值：45px
          "list": [] },

        "privacyTerms": {
          "defaultCheckBoxState": false, // 条款勾选框初始状态 默认值： true   
          "textColor": "#BBBBBB", // 文字颜色 默认值：#BBBBBB  
          "termsColor": "#5496E3", //  协议文字颜色 默认值： #5496E3  
          "prefix": "我已阅读并同意", // 条款前的文案 默认值：“我已阅读并同意”  
          "suffix": "并使用本机号码登录", // 条款后的文案 默认值：“并使用本机号码登录”  
          "privacyItems": [] } } };



  },
  watch: {
    agree: function agree(_agree) {
      this.univerifyStyle.privacyTerms.defaultCheckBoxState = _agree;
    } },

  props: {
    agree: {
      type: Boolean,
      default: function _default() {
        return false;
      } } },


  created: function created() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var servicesList;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              servicesList = _this.servicesList;
              //去掉配置中不存在的 注意，在/common/appInit.js中已清除有配置但设备环境不支持的登录项
              servicesList = servicesList.filter(function (item) {return _this.loginConfig.includes(item.id);});
              //处理一键登录
              if (_this.loginConfig.includes('univerify')) {
                _this.univerifyStyle.privacyTerms.privacyItems = _this.agreements;
                //设置一键登录功能底下的快捷登录按钮
                servicesList.forEach(function (_ref)



                {var id = _ref.id,logo = _ref.logo,path = _ref.path;
                  if (id != 'univerify') {
                    _this.univerifyStyle.buttons.list.push({
                      "iconPath": logo,
                      "provider": id
                      // path
                    });
                  }
                });
              }
              console.log(servicesList);
              //如果当前页面为默认登录界面。当前第一优先级的“微信和苹果登录”要隐藏，因为他已经被渲染在默认登录界面顶部
              if (
              _this.getRoute(1) == '/pages/ucenter/login-page/index/index' && ['weixin', 'apple'].includes(_this.
              loginConfig[0]))
              {
                servicesList = servicesList.filter(function (item) {return item.id != _this.loginConfig[0];});
              }
              //去掉当前页面对应的登录选项
              _this.servicesList = servicesList.filter(function (item) {
                var path = item.path ? item.path.split('?')[0] : '';
                return path != _this.getRoute(1);
              });
              console.log('servicesList', servicesList, _this.servicesList);case 7:case "end":return _context.stop();}}}, _callee);}))();
  },
  mounted: function mounted() {},
  methods: _objectSpread(_objectSpread({},
  (0, _vuex.mapMutations)({
    setUserInfo: 'user/login' })), {}, {

    getRoute: function getRoute() {var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var pages = getCurrentPages();
      // console.log('route-pages-length', pages.length);
      if (n > pages.length) {
        return '';
      }
      return '/' + pages[pages.length - n].route;
    },
    to: function to(path) {
      console.log('比较', this.getRoute(1), this.getRoute(2), path);
      if (this.getRoute(1) == path.split('?')[0] && this.getRoute(1) == '/pages/ucenter/login-page/index/index') {
        //如果要被打开的页面已经打开，且这个页面是 /pages/ucenter/login-page/index/index 则把类型参数传给他
        var type = path.split('?')[1].split('=')[1];
        uni.$emit('setLoginType', type);
      } else if (this.getRoute(2) == path) {// 如果上一个页面就是，马上要打开的页面，直接返回。防止重复开启
        uni.navigateBack();
      } else if (this.getRoute(1) != path) {
        uni.navigateTo({
          url: path,
          animationType: 'slide-in-left' });

      } else {
        console.log('出乎意料的情况,path：' + path);
      }
    },
    login_before: function login_before(type) {var _this2 = this;var navigateBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      console.log(type);
      if (!this.agree && type != 'univerify') {
        return uni.showToast({
          title: t('noAgree'),
          icon: 'none' });

      }
      uni.showLoading({ mask: true });
      if (type == 'univerify' && uni.getUniverifyManager) {var































        closeUniverify = function closeUniverify() {
          uni.hideLoading();
          univerifyManager.close();
          // 取消订阅自定义按钮点击事件
          univerifyManager.offButtonsClick(onButtonsClickFn);
        };
        // 订阅自定义按钮点击事件
        var univerifyManager = uni.getUniverifyManager();console.log('是新版');var onButtonsClickFn = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {var agree, path;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:console.log('点击了第三方登录，provider：', res, res.provider, _this2.univerifyStyle.buttons.list); //同步一键登录弹出层隐私协议框是否打勾
                    _context2.next = 3;return uni.getCheckBoxState();case 3:agree = _context2.sent[1].state;console.log('agree', agree);uni.$emit('setAgreementsAgree', agree);path = _this2.univerifyStyle.buttons.list[res.index].path;console.log('path', path, _this2.getRoute(1));if (path) {_this2.to(path);closeUniverify();} else {if (agree) {closeUniverify();setTimeout(function () {console.log('login_before');_this2.login_before(res.provider);}, 500);} else {console.log(t('noAgree'));uni.showToast({ title: t('noAgree'), icon: 'none' });}}case 9:case "end":return _context2.stop();}}}, _callee2);}));return function onButtonsClickFn(_x) {return _ref2.apply(this, arguments);};}();univerifyManager.onButtonsClick(onButtonsClickFn); // 调用一键登录弹框
        return univerifyManager.login({
          "univerifyStyle": this.univerifyStyle,
          success: function success(res) {
            console.log('login success', res);
            _this2.login(res.authResult, 'univerify');
          },
          fail: function fail(err) {
            uni.showToast({
              title: JSON.stringify(err),
              icon: 'none' });

          },
          complete: function complete(e) {
            uni.hideLoading();
            // 取消订阅自定义按钮点击事件
            univerifyManager.offButtonsClick(onButtonsClickFn);
          } });

      }
      uni.login({
        "provider": type,
        "onlyAuthorize": true, //请勿直接使用前端获取的unionid或openid直接用于登录，前端的数据都是不可靠的
        "univerifyStyle": this.univerifyStyle,
        complete: function complete(e) {
          console.log(e);
          uni.hideLoading();
        },
        success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {var _res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                    console.log(e);if (!(
                    type == 'apple')) {_context3.next = 6;break;}_context3.next = 4;return (
                      _this2.getUserInfo({
                        provider: "apple" }));case 4:_res = _context3.sent;

                    Object.assign(e.authResult, _res.userInfo);case 6:

                    _this2.login(type == 'weixin' ? e.code : e.authResult, type);case 7:case "end":return _context3.stop();}}}, _callee3);}));function success(_x2) {return _success.apply(this, arguments);}return success;}(),

        fail: function () {var _fail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(err) {var agree, path;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                    console.log(err);
                    // 以下代码为兼容旧版（HBuilderX3.2.13之前）HBuilderX3.2.13以上版本可直接删除
                    if (!(type == 'univerify' && !uni.getUniverifyManager)) {_context4.next = 26;break;}
                    if (err.metadata && err.metadata.error_data) {
                      uni.showToast({
                        title: t('oneClickLogin') + ":" + err.metadata.error_data,
                        icon: 'none' });

                    }
                    if (err.errMsg) {
                      uni.showToast({
                        title: t('oneClickLogin') + ":" + err.errMsg,
                        icon: 'none' });

                    }_context4.t0 =
                    err.errCode;_context4.next = _context4.t0 ===
                    30002 ? 7 : _context4.t0 ===


                    30003 ? 9 : _context4.t0 ===





                    30006 ? 12 : _context4.t0 ===







                    "30008" ? 14 : 24;break;case 7:console.log('在一键登录界面，点击其他登录方式');return _context4.abrupt("break", 26);case 9:console.log('关闭了登录');if (navigateBack) {uni.navigateBack();}return _context4.abrupt("break", 26);case 12:uni.showModal({ title: t('loginErr'), content: err.metadata.error_data, showCancel: false, confirmText: t('gotIt') });return _context4.abrupt("break", 26);case 14:
                    console.log('点击了第三方登录，provider：', err.provider);
                    //同步一键登录弹出层隐私协议框是否打勾
                    _context4.next = 17;return uni.getCheckBoxState();case 17:agree = _context4.sent[1].state;
                    console.log('agree', agree);
                    uni.$emit('setAgreementsAgree', agree);

                    path =
                    _this2.univerifyStyle.buttons.list[res.index].path;
                    console.log('path', path);
                    if (path) {
                      _this2.to(path);
                    } else {
                      setTimeout(function () {
                        console.log('agree', _this2.agree);
                        _this2.login_before(err.provider);
                      }, 500);
                    }return _context4.abrupt("break", 26);case 24:


                    console.log(err);return _context4.abrupt("break", 26);case 26:case "end":return _context4.stop();}}}, _callee4);}));function fail(_x3) {return _fail.apply(this, arguments);}return fail;}() });






    },
    login: function login(params, type) {var _this3 = this; //联网验证登录
      console.log({
        params: params,
        type: type });

      var action = 'loginBy' + type.trim().toLowerCase().replace(type[0], type[0].toUpperCase());
      uniCloud.callFunction({
        name: 'uni-id-cf',
        data: {
          action: action,
          params: params },

        success: function () {var _success2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(_ref3) {var result;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                    result = _ref3.result;

                    console.log("login-result", result);if (!(
                    result.code === 0)) {_context5.next = 11;break;}
                    delete result.userInfo.token;if (!(

                    type == 'weixin' && !result.userInfo.nickname)) {_context5.next = 6;break;}return _context5.abrupt("return",
                    _this3.$refs.userProfile.open(result.uid));case 6:


                    if (result.type == "register") {
                      result.userInfo._id = result.uid;
                    }
                    _this3.setUserInfo(result.userInfo);
                    (0, _loginSuccess.default)(result);_context5.next = 12;break;case 11:

                    uni.showModal({
                      content: result.msg,
                      showCancel: false });case 12:case "end":return _context5.stop();}}}, _callee5);}));function success(_x4) {return _success2.apply(this, arguments);}return success;}(),



        complete: function complete(e) {
          console.log(e);
          if (type == 'univerify') {
            uni.closeAuthView();
          }
          uni.hideLoading();
        } });

    },
    doUserProfileNext: function doUserProfileNext() {
      (0, _loginSuccess.default)();
    },
    getUserInfo: function getUserInfo(e) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:return _context6.abrupt("return",
                new Promise(function (resolve, reject) {
                  uni.getUserInfo(_objectSpread(_objectSpread({},
                  e), {}, {
                    success: function success(res) {
                      resolve(res);
                    },
                    fail: function fail(err) {
                      uni.showModal({
                        content: JSON.stringify(err),
                        showCancel: false });

                      reject(err);
                    } }));

                }));case 1:case "end":return _context6.stop();}}}, _callee6);}))();
    } }) };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 6)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 439:
/*!****************************************************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/components/uni-quick-login/uni-quick-login.vue?vue&type=style&index=0&id=d69f7544&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_style_index_0_id_d69f7544_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-quick-login.vue?vue&type=style&index=0&id=d69f7544&lang=scss&scoped=true& */ 440);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_style_index_0_id_d69f7544_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_style_index_0_id_d69f7544_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_style_index_0_id_d69f7544_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_style_index_0_id_d69f7544_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_quick_login_vue_vue_type_style_index_0_id_d69f7544_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 440:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uniappprojrcy/校园生活助手/components/uni-quick-login/uni-quick-login.vue?vue&type=style&index=0&id=d69f7544&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/uni-quick-login/uni-quick-login.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-quick-login/uni-quick-login-create-component',
    {
        'components/uni-quick-login/uni-quick-login-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(431))
        })
    },
    [['components/uni-quick-login/uni-quick-login-create-component']]
]);
