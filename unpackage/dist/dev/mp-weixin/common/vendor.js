(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 3);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';

var messages = {};

var locale;

{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}

function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}

function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function setLocale$1(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom };

  }
}

function populateParameters(result) {var _result$brand =





  result.brand,brand = _result$brand === void 0 ? '' : _result$brand,_result$model = result.model,model = _result$model === void 0 ? '' : _result$model,_result$system = result.system,system = _result$system === void 0 ? '' : _result$system,_result$language = result.language,language = _result$language === void 0 ? '' : _result$language,theme = result.theme,version = result.version,platform = result.platform,fontSizeSetting = result.fontSizeSetting,SDKVersion = result.SDKVersion,pixelRatio = result.pixelRatio,deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__E588478",
    appName: "校园生活助手",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.5.3",
    uniRuntimeVersion: "3.5.3",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined };


  Object.assign(result, parameters);
}

function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc' };

    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}

function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}

function getAppLanguage(defaultLanguage) {
  return getLocale$1 ?
  getLocale$1() :
  defaultLanguage;
}

function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }

  return _hostName;
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  } };


var showActionSheet = {
  args: function args(fromArgs) {
    if (typeof fromArgs === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  } };


var getAppBaseInfo = {
  returnValue: function returnValue(result) {var _result =
    result,version = _result.version,language = _result.language,SDKVersion = _result.SDKVersion,theme = _result.theme;

    var _hostName = getHostName(result);

    var hostLanguage = language.replace('_', '-');

    result = sortObject(Object.assign(result, {
      appId: "__UNI__E588478",
      appName: "校园生活助手",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme }));

  } };


var getDeviceInfo = {
  returnValue: function returnValue(result) {var _result2 =
    result,brand = _result2.brand,model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);

    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model }));

  } };


var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);

    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0 }));

  } };


var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {var
    locationReducedAccuracy = result.locationReducedAccuracy;

    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


/**
                    * 框架内 try-catch
                    */
/**
                        * 开发者 try-catch
                        */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}

function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}

var cid;
var cidErrMsg;
var enabled;

function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}

function invokePushCallback(
args)
{
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message) };

    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message) });

    });
  }
}

var getPushCidCallbacks = [];

function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}

function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }var _getApiCallbacks =




  getApiCallbacks(args),success = _getApiCallbacks.success,fail = _getApiCallbacks.fail,complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'unipush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid };

        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '') };

        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}

var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};

var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"校园生活助手","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: '' };

        properties.virtualHostClass = {
          type: null,
          value: '' };

      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 10:
/*!***********************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/pages.json?{"type":"origin-pages-json"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "easycom": { "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue" }, "usingComponents": { "mp-sticky": "@miniprogram-component-plus/sticky" }, "pages": [{ "path": "pages/index/index", "style": { "enablePullDownRefresh": true, "navigationStyle": "custom" } }, { "path": "pages/putmsg/putmsg", "style": { "navigationBarTitleText": "发布信息", "enablePullDownRefresh": false, "navigationStyle": "custom", "navigationBarTextStyle": "black" } }, { "path": "pages/list/list", "style": { "enablePullDownRefresh": false, "navigationStyle": "custom" } }, { "path": "pages/grid/grid", "style": {} }, { "path": "pages/ucenter/login-page/index/index", "style": { "navigationBarTitleText": "", "app-plus": { "animationType": "none", "popGesture": "none" } } }, { "path": "pages/list/search/search", "style": { "navigationBarTitleText": "搜索" } }, { "path": "pages/list/detail", "style": { "app-plus": { "titleNView": { "buttons": [{ "type": "share" }], "type": "transparent" } }, "h5": { "titleNView": { "type": "transparent" } }, "navigationBarTitleText": "文章详情" } }, { "path": "pages/ucenter/userinfo/bind-mobile/bind-mobile", "style": { "navigationBarTitleText": "绑定手机号码" } }, { "path": "pages/ucenter/ucenter", "style": { "navigationStyle": "custom" } }, { "path": "pages/ucenter/about/about", "style": { "navigationBarTitleText": "关于" } }, { "path": "uni_modules/uni-upgrade-center-app/pages/upgrade-popup", "style": { "disableScroll": true, "app-plus": { "backgroundColorTop": "transparent", "background": "transparent", "titleNView": false, "scrollIndicator": false, "popGesture": "none", "animationType": "fade-in", "animationDuration": 200 } } }, { "path": "pages/uni-agree/uni-agree", "style": { "navigationStyle": "custom", "app-plus": { "popGesture": "none" } } }, { "path": "pages/ucenter/settings/settings", "style": { "navigationBarTitleText": "设置" } }, { "path": "pages/ucenter/userinfo/userinfo", "style": { "navigationBarTitleText": "个人资料" } }, { "path": "pages/ucenter/userinfo/cropImage", "style": { "navigationStyle": "custom" } }, { "path": "pages/ucenter/login-page/pwd-login/pwd-login", "style": { "navigationBarTitleText": "" } }, { "path": "pages/ucenter/login-page/pwd-retrieve/pwd-retrieve", "style": { "navigationBarTitleText": "重置密码" } }, { "path": "pages/ucenter/login-page/phone-code/phone-code", "style": { "navigationBarTitleText": "" } }, { "path": "pages/common/webview/webview", "style": { "navigationBarTitleText": "", "enablePullDownRefresh": false } }, { "path": "pages/ucenter/login-page/register/register", "style": { "navigationBarTitleText": "注册", "enablePullDownRefresh": false } }, { "path": "pages/ucenter/read-news-log/read-news-log", "style": { "navigationBarTitleText": "阅读记录", "enablePullDownRefresh": true } }, { "path": "pages/ucenter/invite/invite", "style": { "navigationStyle": "custom", "enablePullDownRefresh": false } }, { "path": "pages/ucenter/settings/deactivate/deactivate", "style": { "navigationBarTitleText": "注销提醒", "enablePullDownRefresh": false } }, { "path": "uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback", "style": { "navigationBarTitleText": "意见反馈", "enablePullDownRefresh": false } }, { "path": "pages/release/release", "style": { "navigationBarTitleText": "选择发布", "enablePullDownRefresh": false } }, { "path": "pages/details/details", "style": { "navigationBarTitleText": "详情", "enablePullDownRefresh": false } }, { "path": "pages/map/map", "style": { "navigationBarTitleText": "选择位置", "enablePullDownRefresh": false } }, { "path": "pages/myRelease/myRelease", "style": { "navigationBarTitleText": "我的发布", "enablePullDownRefresh": false } }], "globalStyle": { "navigationBarTextStyle": "white", "navigationBarTitleText": "校园生活助手", "navigationBarBackgroundColor": "#1CBBB4", "backgroundColor": "#F8F8F8", "enablePullDownRefresh": false, "rpxCalcMaxDeviceWidth": 375, "rpxCalcBaseDeviceWidth": 375 }, "condition": { "list": [{ "path": "pages/list/detail" }, { "path": "pages/list/list" }, { "path": "pages/ucenter/login-page/index/index" }, { "path": "pages/ucenter/userinfo/userinfo" }, { "path": "pages/ucenter/settings/settings" }], "current": 1 }, "tabBar": { "color": "#7A7E83", "selectedColor": "#1CBBB4", "borderStyle": "black", "backgroundColor": "#FFFFFF", "list": [{ "pagePath": "pages/index/index", "iconPath": "static/tabbar/index.png", "selectedIconPath": "static/tabbar/indexxz.png", "text": "首页" }, { "pagePath": "pages/release/release", "iconPath": "static/tabbar/add.png", "selectedIconPath": "static/tabbar/addxz.png", "text": "发布" }, { "pagePath": "pages/ucenter/ucenter", "iconPath": "static/tabbar/home.png", "selectedIconPath": "static/tabbar/homexz.png", "text": "我的" }] } };exports.default = _default;

/***/ }),

/***/ 11:
/*!**********************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/pages.json?{"type":"stat"} ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__E588478" };exports.default = _default;

/***/ }),

/***/ 126:
/*!****************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-upgrade-center-app/utils/check-update.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;var _callCheckVersion = _interopRequireDefault(__webpack_require__(/*! ./call-check-version */ 127));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 推荐再App.vue中使用
var PACKAGE_INFO_KEY = '__package_info__';

function _default() {








































































}

/**
   * 使用 uni.showModal 升级
   */
function updateUseModal(packageInfo) {var

  title =





  packageInfo.title,contents = packageInfo.contents,is_mandatory = packageInfo.is_mandatory,url = packageInfo.url,platform = packageInfo.platform,type = packageInfo.type;

  var isWGT = type === 'wgt';
  var isiOS = !isWGT ? platform.includes('iOS') : false;
  var confirmText = isiOS ? '立即跳转更新' : '立即下载更新';

  return uni.showModal({
    title: title,
    content: contents,
    showCancel: !is_mandatory,
    confirmText: confirmText,
    success: function success(res) {
      if (res.cancel) return;

      // 安装包下载
      if (isiOS) {
        plus.runtime.openURL(url);
        return;
      }

      uni.showToast({
        title: '后台下载中……',
        duration: 1000 });


      // wgt 和 安卓下载更新
      downloadTask = uni.downloadFile({
        url: url,
        success: function success(res) {
          if (res.statusCode !== 200) {
            console.error('下载安装包失败', err);
            return;
          }
          // 下载好直接安装，下次启动生效
          plus.runtime.install(res.tempFilePath, {
            force: false },
          function () {
            if (is_mandatory) {
              //更新完重启app
              plus.runtime.restart();
              return;
            }
            uni.showModal({
              title: '安装成功是否重启？',
              success: function success(res) {
                if (res.confirm) {
                  //更新完重启app
                  plus.runtime.restart();
                }
              } });

          }, function (err) {
            uni.showModal({
              title: '更新失败',
              content: err.
              message,
              showCancel: false });

          });
        } });

    } });

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 127:
/*!**********************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-upgrade-center-app/utils/call-check-version.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;function _default() {





















  return new Promise(function (resolve, reject) {
    reject({
      message: '请在App中使用' });

  });

}

/***/ }),

/***/ 15:
/*!*************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/common/appInit.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));var _uniStarterConfig = _interopRequireDefault(__webpack_require__(/*! @/uni-starter.config.js */ 16));
var _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
//应用初始化页





var db = uniCloud.database();function _default() {return _ref.apply(this, arguments);}

















































































































































































































































































































































































































/**
                                                                                        * // 初始化appVersion
                                                                                        */function _ref() {_ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var loginConfig, debug, onDBError, callFunctionOption, _uniStarterConfig$rou, needLogin, visitor, login, list;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:onDBError = function _onDBError(_ref2) {var code = _ref2.code,message = _ref2.message;console.log('onDBError', { code: code, message: message }); // 处理错误
              console.error(code, message);if (['TOKEN_INVALID_INVALID_CLIENTID', 'TOKEN_INVALID', 'TOKEN_INVALID_TOKEN_EXPIRED', 'TOKEN_INVALID_WRONG_TOKEN', 'TOKEN_INVALID_ANONYMOUS_USER'].includes(code)) {uni.navigateTo({ url: '/pages/ucenter/login-page/index/index' });}};loginConfig = _uniStarterConfig.default.router.login;debug = _uniStarterConfig.default.debug; //清除有配置但设备环境不支持的登录项
            //非app移除：一键登录、苹果登录；h5移除微信登录，如果你做微信公众号登录需要将此行移除
            loginConfig = loginConfig.filter(function (item) {return !['univerify', 'apple'].includes(item);});_uniStarterConfig.default.router.login = loginConfig; // uniStarterConfig挂载到getApp().globalData.config
            setTimeout(function () {getApp({ allowDefault: true }).globalData.config = _uniStarterConfig.default;}, 1); // 初始化appVersion（仅app生效）
            initAppVersion(); //clientDB的错误提示
            // 绑定clientDB错误事件
            db.on('error', onDBError); // 解绑clientDB错误事件
            //db.off('error', onDBError)
            db.on('refreshToken', function (_ref3) {var token = _ref3.token,tokenExpired = _ref3.tokenExpired;console.log('监听到clientDB的refreshToken', { token: token, tokenExpired: tokenExpired });_store.default.commit('user/login', { token: token, tokenExpired: tokenExpired });});uni.addInterceptor('setStorage', { invoke: function invoke(args) {if (args.data && args.key == 'uni_id_token') {var oldToken = uni.getStorageSync('uni_id_token');if (oldToken.length) {console.log('监听到token更新，就刷新push_clientid的有效期');}} // console.log('interceptor-complete', args)
              }, complete: function complete(e) {// console.log(e);
              } }); //拦截器封装callFunction
            uniCloud.addInterceptor('callFunction', { invoke: function invoke(option) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(option.name == 'uni-id-cf' && (option.data.action == 'register' || option.data.action.slice(0, 5) == 'login'))) {_context.next = 8;break;}_context.next = 3;return getDeviceInfo();case 3:option.data.deviceInfo = _context.sent;console.log("重新登录/注册，获取设备id", option.data.deviceInfo);_context.next = 7;return new Promise(function (callBack) {uni.getClipboardData({ success: function success(res) {if (res.data.slice(0, 18) == 'uniInvitationCode:') {var uniInvitationCode = res.data.slice(18, 38);console.log('当前用户是其他用户推荐下载的,推荐者的code是：' + uniInvitationCode); // uni.showModal({
                                  // 	content: '当前用户是其他用户推荐下载的,推荐者的code是：'+uniInvitationCode,
                                  // 	showCancel: false
                                  // });
                                  callBack(uniInvitationCode); //当前用户是其他用户推荐下载的。这里登记他的推荐者id 为当前用户的myInviteCode。判断如果是注册
                                } else {callBack(false);}}, fail: function fail() {callBack(false);}, complete: function complete() {uni.hideToast();} });});case 7:option.data.inviteCode = _context.sent;case 8: // console.log(JSON.stringify(option));
                          callFunctionOption = option;case 9:case "end":return _context.stop();}}}, _callee);}))();}, complete: function complete(e) {// console.log(JSON.stringify(e));
              }, fail: function fail(e) {// 失败回调拦截
                console.error('网络请求错误码：', JSON.stringify(e));if (debug) {uni.showModal({ content: JSON.stringify(e), showCancel: false });console.error(e);} else {uni.showModal({ content: "系统错误请稍后再试！", showCancel: false, confirmText: "知道了" });} //如果执行错误，检查是否断网
                uni.getNetworkType({ complete: function complete(res) {// console.log(res);
                    if (res.networkType == 'none') {uni.showToast({ title: '手机网络异常', icon: 'none' });console.log('手机网络异常');var callBack = function callBack(res) {console.log(res);if (res.isConnected) {uni.showToast({ title: '恢复联网自动重新执行', icon: 'none' });console.log(res.networkType, "恢复联网自动重新执行");uni.offNetworkStatusChange(function (e) {console.log("移除监听成功", e);}); //恢复联网自动重新执行
                          uniCloud.callFunction(callFunctionOption);uni.offNetworkStatusChange(callBack);}};uni.onNetworkStatusChange(callBack);}} });}, success: function success(e) {var _e$result = e.result,token = _e$result.token,tokenExpired = _e$result.tokenExpired;if (token && tokenExpired) {_store.default.commit('user/login', { token: token, tokenExpired: tokenExpired });}switch (e.result.code) {case 403:uni.navigateTo({ url: "/pages/ucenter/login-page/index/index" });break;case 30203:uni.navigateTo({ url: "/pages/ucenter/login-page/index/index" });break;case 50101:uni.showToast({ title: e.result.msg, icon: 'none', duration: 2000 });break;default:console.log('code的值是：' + e.result.code, '可以在上面添加case，自动处理响应体');break;}switch (e.result.errCode) {case 'uni-id-token-not-exist':uni.showToast({ title: '登录信息失效', icon: 'none' });uni.navigateTo({ url: "/pages/ucenter/login-page/index/index" });break;default:break;}} }); //自定义路由拦截
            _uniStarterConfig$rou = _uniStarterConfig.default["router"], needLogin = _uniStarterConfig$rou.needLogin, visitor = _uniStarterConfig$rou.visitor, login = _uniStarterConfig$rou.login; //需要登录的页面
            list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];list.forEach(function (item) {//用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
              uni.addInterceptor(item, { invoke: function invoke(e) {// 调用前拦截
                  //获取用户的token
                  var token = uni.getStorageSync('uni_id_token'), //token是否已失效
                  tokenExpired = uni.getStorageSync('uni_id_token_expired') < Date.now(), //获取要跳转的页面路径（url去掉"?"和"?"后的参数）
                  url = e.url.split('?')[0]; //获取要前往的页面路径（即url去掉"?"和"?"后的参数）
                  var pages = getCurrentPages();if (!pages.length) {console.log("首页启动调用了");return e;}var fromUrl = pages[pages.length - 1].route;var inLoginPage = fromUrl.split('/')[2] == 'login-page'; //控制登录优先级
                  if ( //判断当前窗口是否为登录页面，如果是则不重定向路由
                  url == '/pages/ucenter/login-page/index/index' && !inLoginPage) {//一键登录（univerify）、账号（username）、验证码登录（短信smsCode）
                    if (login[0] == 'username') {e.url = "/pages/ucenter/login-page/pwd-login/pwd-login";} else {if (e.url == url) {e.url += '?';} //添加参数之前判断是否带了`？`号如果没有就补上，因为当开发场景本身有参数的情况下是已经带了`？`号
                      e.url += "type=" + login[0];}} else {//拦截强制登录页面
                    var pass = true; //pattern
                    if (needLogin) {pass = needLogin.every(function (item) {if (typeof item == 'object' && item.pattern) {return !item.pattern.test(url);}return url != item;}); // console.log({pass})
                    }if (visitor) {pass = visitor.some(function (item) {if (typeof item == 'object' && item.pattern) {return item.pattern.test(url);}return url == item;}); // console.log({pass})
                    }if (!pass && (token == '' || tokenExpired)) {uni.showToast({ title: '请先登录', icon: 'none' });uni.navigateTo({ url: "/pages/ucenter/login-page/index/index" });return false;}}return e;}, fail: function fail(err) {// 失败回调拦截 
                  console.log(err);if (debug) {console.log(err);uni.showModal({ content: JSON.stringify(err), showCancel: false });}} });});case 14:case "end":return _context2.stop();}}}, _callee2);}));return _ref.apply(this, arguments);}function initAppVersion() {}function getDeviceInfo() {return _getDeviceInfo.apply(this, arguments);}function _getDeviceInfo() {_getDeviceInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var deviceInfo, _uni$getSystemInfoSyn, model, platform;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:deviceInfo = { "uuid": '', "vendor": '', "push_clientid": '', "imei": '', "oaid": '', "idfa": '', "model": '', "platform": '' };_uni$getSystemInfoSyn =


            uni.getSystemInfoSync(), model = _uni$getSystemInfoSyn.model, platform = _uni$getSystemInfoSyn.platform;
            Object.assign(deviceInfo, {
              model: model,
              platform: platform });return _context3.abrupt("return",





















































            deviceInfo);case 4:case "end":return _context3.stop();}}}, _callee3);}));return _getDeviceInfo.apply(this, arguments);}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 6)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 16:
/*!*****************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni-starter.config.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //这是应用的配置页面，App.vue挂载到getApp().globalData.config
var _default = {
  //是否打开调试模式
  "debug": false,
  "h5": {
    "url": "https://uni-starter.dcloud.net.cn" //	前端网页托管的域名	
    // 在h5端全局悬浮引导用户下载app的功能 更多自定义要求在/common/openApp.js中修改	
    // "openApp": { //如不需要本功能直接移除本节点即可	
    // 	//点击悬浮下载栏后打开的网页链接
    // 	"openUrl": '/#/pages/ucenter/invite/invite',
    // 	//左侧显示的应用名称	
    // 	"appname": 'uni-starter',
    // 	//应用的图标	
    // 	"logo": './static/logo.png',
    // }
  },
  "mp": {
    "weixin": {
      //微信小程序原始id，微信小程序分享时
      "id": "gh_33446d7f7a26" } },


  "router": {
    /*
              	名词解释：“强制登录页”
              		在打开定义的需强制登录的页面之前会自动检查（前端校验）uni_id_token的值是否有效,
              		如果无效会自动跳转到登录页面
              	两种模式：
              		1.needLogin：黑名单模式。枚举游客不可访问的页面。
              		2.visitor：白名单模式。枚举游客可访问的页面。
              	* 注意：黑名单与白名单模式二选一
              */
    // "needLogin" : [
    //  	{pattern:/^\/pages\/list.*/},	//支持正则表达式
    // 		"/uni_modules/uni-news-favorite/pages/uni-news-favorite/list",
    // 		"/uni_modules/uni-feedback/pages/uni-feedback/add"
    // ],
    "visitor": [
    "/", //注意入口页必须直接写 "/"
    { "pattern": /^\/pages\/list.*/ }, //支持正则表达式
    { "pattern": /^\/pages\/ucenter\/login-page.*/ },
    "/pages/common/webview/webview",
    "/pages/grid/grid",
    "/pages/ucenter/ucenter",
    "/pages/ucenter/about/about",
    "/pages/ucenter/settings/settings"],

    /*
                                         login:配置登录类型与优先级
                                         	未列举到的，或设备环境不支持的选项，将被隐藏。如果你需要在不同平台有不同的配置，直接用条件编译即可
                                         	根据数组的第0项，决定登录方式的第一优先级。
                                         */
    "login": ["weixin", "univerify", "username", "smsCode", "apple"] },

  //关于应用
  "about": {
    //应用名称
    "appName": "uni-starter",
    //应用logo
    "logo": "/static/logo.png",
    //公司名称
    "company": "北京xx网络技术有限公司",
    //口号
    "slogan": "云端一体应用快速开发模版",
    //政策协议
    "agreements": [{
      "title": "用户服务协议", //如果开启了多语言国际化，本配置将失效。请在 lang/en.js 和 lang/zh-Hans.js中配置
      "url": "请填写用户服务协议链接" //对应的网络链接
    },
    {
      "title": "隐私政策", //如果开启了多语言国际化，本配置将失效。请在 lang/en.js 和 lang/zh-Hans.js中配置
      "url": "请填写隐私政策链接" //对应的网络链接
    }],

    //应用的链接，用于分享到第三方平台和生成关于我们页的二维码
    "download": "",
    //version
    "version": "1.0.0" //用于非app端显示，app端自动获取
  },
  "download": { //用于生成二合一下载页面
    "ios": "https://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8",
    "android": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-97fca9f2-41f6-449f-a35e-3f135d4c3875/6d754387-a6c3-48ed-8ad2-e8f39b40fc01.apk" },

  //用于打开应用市场评分界面
  "marketId": {
    "ios": "id1417078253",
    "android": "123456" },

  //配置多语言国际化。i18n为英文单词 internationalization的首末字符i和n，18为中间的字符数 是“国际化”的简称
  "i18n": {
    "enable": false //默认关闭，国际化。如果你想使用国际化相关功能，请改为true
  } };exports.default = _default;

/***/ }),

/***/ 160:
/*!**********************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/pages/ucenter/settings/dc-push/push.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 判断Push是否开启
                                                                                                      */
function isTurnedOnPush() {
  var isOn = undefined;
  try {
    if ('iOS' == plus.os.name) {
      var types = 0;
      var app = plus.ios.invoke('UIApplication', 'sharedApplication');
      var settings = plus.ios.invoke(app, 'currentUserNotificationSettings');
      if (settings) {
        types = settings.plusGetAttribute('types');
        plus.ios.deleteObject(settings);
      } else {
        types = plus.ios.invoke(app, 'enabledRemoteNotificationTypes');
      }
      plus.ios.deleteObject(app);
      isOn = 0 != types;
    } else {
      var main = plus.android.runtimeMainActivity();
      var manager = plus.android.invoke('com.igexin.sdk.PushManager', 'getInstance');
      isOn = plus.android.invoke(manager, 'isPushTurnedOn', main);
    }
  } catch (e) {
    console.error('exception in isTurnedOnPush@dc-push!!');
  }
  return isOn;
}

/**
   * 打开Push
   * Android平台 - 打开个推（UniPush）的推送通道
   * iOS平台 - 如果开启通知功能，则打开应用的设置页面引导用户开启通知
   */
function turnOnPush() {
  try {
    if ('iOS' == plus.os.name) {
      // 如果设置中没有开启通知，则打开应用的设置界面
      if (!isTurnedOnPush()) {
        settingInIos();
      }
    } else {
      var main = plus.android.runtimeMainActivity();
      var manager = plus.android.invoke('com.igexin.sdk.PushManager', 'getInstance');
      plus.android.invoke(manager, 'turnOnPush', main);
    }
  } catch (e) {
    console.error('exception in turnOnPush@dc-push!!');
  }
}

/**
   * 关闭Push
   * Android平台 - 关闭个推（UniPush）的推送通道
   * iOS平台 - 不做任何操作
   */
function trunOffPush() {
  try {
    if ('iOS' == plus.os.name) {
      // 这里不做任何操作（不引导用户关闭应用的推送能力），应该通知业务服务器不向此用户下发推送消息
    } else {
      var main = plus.android.runtimeMainActivity();
      var manager = plus.android.invoke('com.igexin.sdk.PushManager', 'getInstance');
      plus.android.invoke(manager, 'turnOffPush', main);
    }
  } catch (e) {
    console.error('exception in trunOffPush@dc-push!!');
  }
}

/**
   * iOS平台打开应用设置界面
   */
function settingInIos() {
  try {
    if ('iOS' == plus.os.name) {
      var app = plus.ios.invoke('UIApplication', 'sharedApplication');
      var setting = plus.ios.invoke('NSURL', 'URLWithString:', 'app-settings:');
      plus.ios.invoke(app, 'openURL:', setting);
      plus.ios.deleteObject(setting);
      plus.ios.deleteObject(app);
    }
  } catch (e) {
    console.error('exception in settingInIos@dc-push!!');
  }
}
/**
   * android打开应用设置页面
   */
function settingInAndroid() {
  if (uni.getSystemInfoSync().platform == "android") {
    var main = plus.android.runtimeMainActivity();
    var Intent = plus.android.importClass('android.content.Intent');
    var Settings = plus.android.importClass('android.provider.Settings');
    var intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
    // 安卓跳转设置页面详细查看(https://ask.dcloud.net.cn/question/14732)
    main.startActivity(intent);
  }
}
/**
   * 打开应用设置界面
   */
function setting() {
  if (uni.getSystemInfoSync().platform == "ios") {
    settingInIos();
  }
  if (uni.getSystemInfoSync().platform == "android") {
    settingInAndroid();
  }
}var _default =

{
  isOn: isTurnedOnPush,
  iosSetting: settingInIos,
  on: turnOnPush,
  off: trunOffPush,
  setting: setting };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 17:
/*!**********************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _user = _interopRequireDefault(__webpack_require__(/*! @/store/modules/user.js */ 18));


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_vue.default.use(_vuex.default);
var store = new _vuex.default.Store({
  modules: {
    user: _user.default },

  strict: true });var _default =












store;exports.default = _default;

/***/ }),

/***/ 18:
/*!*****************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/store/modules/user.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, uniCloud) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 上次启动时的用户信息
var userInfoHistory = uni.getStorageSync('userInfo') || {};
var state = {
  //是否已经登录
  hasLogin: Boolean(Object.keys(userInfoHistory).length),
  //用户信息
  info: userInfoHistory,
  //学校
  school: '贵州师范大学' },

getters = {
  info: function info(state) {
    return state.info;
  },
  hasLogin: function hasLogin(state) {
    return state.hasLogin;
  } },

mutations = {
  SCHOOL: function SCHOOL(state, value) {
    console.log('2212', state);
    state.school = value;
  },
  login: function login(state, info) {//登录成功后的操作
    //原有的结合传来的参数
    var _info = state.info;
    state.info = Object.assign({}, _info, info);
    //设置为已经登录
    state.hasLogin = true;
    console.log('state.info', state.info);
    //存储最新的用户数据到本地持久化存储
    uni.setStorageSync('userInfo', state.info);
    if (info.token) {
      uni.setStorage({
        key: 'uni_id_token',
        data: state.info.token,
        complete: function complete(e) {
          // console.log('setStorage-------',e);
        } });

      uni.setStorageSync('uni_id_token_expired', state.info.tokenExpired);
    }
  },
  logout: function logout(state) {
    state.info = {};
    state.hasLogin = false;
    uni.setStorageSync('userInfo', {});
    uni.removeStorageSync('uni_id_token');
    uni.setStorageSync('uni_id_token_expired', 0);
  } },

actions = {

  logout: function logout(context) {
    uni.showLoading({ mask: true });
    uniCloud.callFunction({
      name: 'uni-id-cf',
      data: { action: 'logout' },
      complete: function complete(e) {
        console.log(e);
        context.commit('logout');
        uni.hideLoading();
      } });

  } };var _default =

{
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 6)["default"]))

/***/ }),

/***/ 185:
/*!***********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/pages/ucenter/login-page/common/login-page.mixin.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vuex = __webpack_require__(/*! vuex */ 19);
var _loginSuccess2 = _interopRequireDefault(__webpack_require__(/*! ./loginSuccess.js */ 186));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
var mixin = {
  methods: _objectSpread(_objectSpread({},
  (0, _vuex.mapMutations)({
    setUserInfo: 'user/login' })), {}, {

    loginSuccess: function loginSuccess(result) {
      (0, _loginSuccess2.default)(result);
      delete result.userInfo.token;
      if (result.type == "register") {
        result.userInfo._id = result.uid;
      }
      this.setUserInfo(result.userInfo);
    } }) };var _default =


mixin;exports.default = _default;

/***/ }),

/***/ 186:
/*!*******************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/pages/ucenter/login-page/common/loginSuccess.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;function _default(result) {
  uni.showToast({
    title: '登录成功',
    icon: 'none' });

  console.log('登录成功', result);

  var delta = 0; //判断需要返回几层
  var pages = getCurrentPages();
  // console.log(pages);
  pages.forEach(function (page, index) {
    // console.log(pages[pages.length-index-1].route.split('/')[2]);
    pages[pages.length - index - 1].route.split('/');
    if (pages[pages.length - index - 1].route.split('/')[2] == 'login-page') {
      delta++;
    }
  });
  // console.log('判断需要返回几层',delta);
  uni.navigateBack({ delta: delta });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 19:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 20:
/*!*************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/common/openApp.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;




var _uniStarterConfig = _interopRequireDefault(__webpack_require__(/*! ../uni-starter.config.js */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                                                  	创建在h5端全局悬浮引导用户下载app的功能，
                                                                                                                                                                                  	如不需要本功能直接移除配置文件uni-starter.config.js下的h5/openApp即可
                                                                                                                                                                                  */var CONFIG_OPEN = _uniStarterConfig.default.h5.openApp || {}; // 仅H5端添加"打开APP"
function _default() {

























}

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/pages/uni-agree/utils/uni-agree.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;function _default() {
  console.log(uni.getSystemInfoSync().platform);
  var userprotocol = uni.getStorageSync('userprotocol');
  console.log('userprotocol', userprotocol);
  if (!userprotocol) {
    uni.navigateTo({
      url: '/pages/uni-agree/uni-agree',
      animationType: "none" });

  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 217:
/*!******************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/pages/ucenter/login-page/register/validator.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "username": {
    "rules": [{
      required: true,
      errorMessage: '请输入用户名' },

    {
      minLength: 3,
      maxLength: 32,
      errorMessage: '用户名长度在 {minLength} 到 {maxLength} 个字符' },

    {
      validateFunction: function validateFunction(rule, value, data, callback) {
        console.log(value);
        if (/^1\d{10}$/.test(value) || /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)) {
          callback('用户名不能是：手机号或邮箱');
        };
        return true;
      } }],


    "label": "用户名" },

  "password": {
    "rules": [{
      required: true,
      errorMessage: '请输入密码' },

    {
      minLength: 6,
      maxLength: 20,
      errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符' }],


    "label": "密码" },

  "pwd2": {
    "rules": [{

      required: true,
      errorMessage: '再次输入密码' },


    {
      minLength: 6,
      maxLength: 20,
      errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符' },

    {
      validateFunction: function validateFunction(rule, value, data, callback) {
        console.log(value);
        if (value != data.password) {
          callback('两次输入密码不一致');
        };
        return true;
      } }],


    "label": "确认密码" } };exports.default = _default;

/***/ }),

/***/ 24:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 248:
/*!********************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-feedback/js_sdk/validator/opendb-feedback.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.filterToWhere = filterToWhere;exports.enumConverter = exports.validator = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e2) {throw _e2;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e3) {didErr = true;err = _e3;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} // 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


var validator = {
  "content": {
    "rules": [
    {
      "required": true },

    {
      "format": "string" }],


    "label": "留言内容/回复内容" },

  "imgs": {
    "rules": [
    {
      "format": "array" },

    {
      "arrayType": "file" },

    {
      "maxLength": 6 }],


    "label": "图片列表" },

  "contact": {
    "rules": [
    {
      "format": "string" }],


    "label": "联系人" },

  "mobile": {
    "rules": [
    {
      "format": "string" },

    {
      "pattern": "^\\+?[0-9-]{3,20}$" }],


    "label": "联系电话" } };exports.validator = validator;



var enumConverter = {};exports.enumConverter = enumConverter;

function filterToWhere(filter, command) {
  var where = {};
  for (var field in filter) {var _filter$field =
    filter[field],type = _filter$field.type,value = _filter$field.value;
    switch (type) {
      case "search":
        if (typeof value === 'string' && value.length) {
          where[field] = new RegExp(value);
        }
        break;
      case "select":
        if (value.length) {
          var selectValue = [];var _iterator = _createForOfIteratorHelper(
          value),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var s = _step.value;
              selectValue.push(command.eq(s));
            }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
          where[field] = command.or(selectValue);
        }
        break;
      case "range":
        if (value.length) {
          var gt = value[0];
          var lt = value[1];
          where[field] = command.and([command.gte(gt), command.lte(lt)]);
        }
        break;
      case "date":
        if (value.length) {var _value = _slicedToArray(
          value, 2),_s = _value[0],e = _value[1];
          var startDate = new Date(_s);
          var endDate = new Date(e);
          where[field] = command.and([command.gte(startDate), command.lte(endDate)]);
        }
        break;
      case "timestamp":
        if (value.length) {var _value2 = _slicedToArray(
          value, 2),_startDate = _value2[0],_endDate = _value2[1];
          where[field] = command.and([command.gte(_startDate), command.lte(_endDate)]);
        }
        break;}

  }
  return where;
}

/***/ }),

/***/ 25:
/*!********************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/lang/i18n.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _en = _interopRequireDefault(__webpack_require__(/*! ./en */ 26));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans */ 27));
var _uniStarterConfig = _interopRequireDefault(__webpack_require__(/*! ../uni-starter.config.js */ 16));












































var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _vueI18n = _interopRequireDefault(__webpack_require__(/*! vue-i18n */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var i18nEnable = _uniStarterConfig.default.i18n.enable;var messages = { 'en': _en.default, 'zh-Hans': _zhHans.default };var currentLang;if (i18nEnable) {currentLang = uni.getStorageSync('CURRENT_LANG');} else {currentLang = "zh-Hans";} // console.log(uni.getStorageSync('CURRENT_LANG'),currentLang);
if (!currentLang) {if (uni.getLocale) {console.log('获取应用语言:', uni.getLocale());var language = 'en';if (uni.getLocale() != 'en') {language = 'zh-Hans';}uni.setStorageSync('CURRENT_LANG', language);currentLang = language;} else {uni.getSystemInfo({ success: function success(res) {console.log('获取设备信息:', res);var language = 'zh-Hans';if (res.language == 'en') {language = 'en';}uni.setStorageSync('CURRENT_LANG', language);currentLang = language;}, fail: function fail(err) {console.error(err);} });}}var i18nConfig = { locale: currentLang, // set locale
  messages: messages // set locale messages
};_vue.default.use(_vueI18n.default);var i18n = new _vueI18n.default(i18nConfig);var _default =








i18n;exports.default = _default;


if (i18nEnable) {
  console.log("\n\t\u4F60\u5DF2\u5F00\u542F\u591A\u8BED\u8A00\u56FD\u9645\u5316\uFF0C\u5C06\u81EA\u52A8\u6839\u636E\u8BED\u8A00\u83B7\u53D6\u3010lang/en.js\u3011\u6216\u3010lang/en.js\u3011\u6587\u4EF6\u4E2D\u914D\u7F6E\u7684tabbar\u7684\u503C\uFF0C\n\t\u8986\u76D6\u4F60\u5728pages.json\u4E2D\u7684tabbar\u7684\u503C\n\t\u5982\u679C\u4F60\u4E0D\u9700\u8981\u591A\u8BED\u8A00\u56FD\u9645\u5316\uFF0C\u8BF7\u6253\u5F00\u914D\u7F6E\u6587\u4EF6uni-starter.config.js\u627E\u5230 -> i18n -> enable\u628A\u503C\u8BBE\u7F6E\u4E3Afalse\n");




  var initLanguageAfter = function initLanguageAfter() {
    function $i18n(e) {



      return i18n.messages[i18n.locale][e];
    }
    setTimeout(function () {
      //底部tabbar更新
      $i18n('tabbar').split(',').forEach(function (text, index) {
        // console.log(text);
        uni.setTabBarItem({
          index: index,
          text: text,
          complete: function complete(e) {
            // console.log("e: " + JSON.stringify(e));
          } });

      });
    }, 1);
    //更新 uni-starter.config agreements
    var agreementsTitle = $i18n('agreementsTitle').split(',');
    var agreements = _uniStarterConfig.default.about.agreements;
    agreements[0].title = agreementsTitle[0];
    agreements[1].title = agreementsTitle[1];
    _uniStarterConfig.default.about.agreements = agreements;
  };
  initLanguageAfter();
  uni.$on('changeLanguage', function (e) {
    console.log('changeLanguage', e);
    initLanguageAfter(e);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 26:
/*!******************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/lang/en.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  tabbar: 'List,Grid,contacts,Mine',
  agreementsTitle: 'User service agreement,Privacy policy',
  common: {
    wechatFriends: "friends",
    wechatBbs: "bbs",
    weibo: "weibo",
    more: "more",
    agree: "agree",
    copy: "copy",
    wechatApplet: "applet",
    cancelShare: "cancel sharing",
    updateSucceeded: "update succeeded",
    phonePlaceholder: "Please enter your mobile phone number",
    verifyCodePlaceholder: "Please enter the verification code",
    newPasswordPlaceholder: "Please enter a new password",
    confirmNewPasswordPlaceholder: "Please confirm the new password",
    confirmPassword: "Please confirm the password",
    verifyCodeSend: "Verification code has been sent to via SMS",
    passwordDigits: "The password is 6 - 20 digits",
    getVerifyCode: "Get Code",
    noAgree: "You have not agreed to the privacy policy agreement",
    gotIt: "got it",
    login: "sign in",
    error: "error",
    complete: "complete",
    submit: "Submit",
    formatErr: "Incorrect mobile phone number format",
    sixDigitCode: "Please enter a 6-digit verification code",
    resetNavTitle: "Reset password" },

  list: {
    inputPlaceholder: "Please enter the search content" },

  search: {
    cancelText: "cancel",
    searchHistory: "search history",
    searchDiscovery: "search discovery",
    deleteAll: "delete all",
    delete: "delete",
    deleteTip: "Are you sure to clear the search history ?",
    complete: "complete",
    searchHiddenTip: "Current search found hidden" },

  grid: {
    grid: "Grid Assembly",
    visibleToAll: "Visible to all",
    invisibleToTourists: "Invisible to tourists",
    adminVisible: "Admin visible",
    clickTip: "Click the",
    clickTipGrid: "grid" },

  mine: {
    showText: "Text",
    signIn: "Check In Reward",
    signInByAd: "Check In Reward By AD",
    toEvaluate: "To Evaluate",
    readArticles: "Read Articles",
    myScore: "My Score",
    invite: "Invite Friends",
    feedback: "Problems And Feedback",
    settings: "Settings",
    about: "About",
    checkUpdate: "Check for Updates",
    clicked: "You Clicked",
    checkScore: "Please check your points after logging in",
    currentScore: "The current score is ",
    noScore: "There are currently no points",
    notLogged: "not logged in" },

  userinfo: {
    navigationBarTitle: "My Profile",
    ProfilePhoto: "Profile Photo",
    nickname: "Nickname",
    notSet: "not set",
    phoneNumber: "Phone Number",
    notSpecified: "Not Specified",
    setNickname: "Set Nickname ",
    setNicknamePlaceholder: "Please enter a nickname to set",
    bindPhoneNumber: "One click binding of local number",
    bindOtherLogin: "Other number binding",
    noChange: "No change",
    uploading: "uploading",
    requestFail: "Request for service failed",
    setting: "setting",
    deleteSucceeded: "Delete succeeded",
    setSucceeded: "Set successfully" },

  smsCode: {
    resendVerifyCode: "resend",
    phoneErrTip: "Mobile phone number format error",
    sendSuccessTip: "SMS verification code sent successfully" },

  loadMore: {
    noData: "No Data",
    noNetwork: "Network error",
    toSet: "Go to settings",
    error: "error" },

  uniFeedback: {
    navigationBarTitle: "Problems and feedback",
    msgTitle: "Message content",
    imgTitle: "Picture list",
    contacts: "contacts",
    phone: "contact number",
    submit: "submit" },

  settings: {
    navigationBarTitle: "Settings",
    userInfo: "Personal Data",
    changePassword: "change password",
    clearTmp: "clean cache",
    pushServer: "push function",
    fingerPrint: "fingerprint unlock",
    facial: "face unlock",
    deactivate: "Deactivate",
    logOut: "Logout",
    login: "Login",
    changeLanguage: "Language",
    please: "please",
    successText: "success",
    failTip: "Authentication failed. Please try again",
    authFailed: "authentication failed",
    deviceNoOpen: "The device is not turned on",
    fail: "fail",
    tips: "tips",
    exitLogin: "Do you want to log out？",
    cancelText: "cancel",
    confirmText: "confirm",
    clearing: "clearing",
    clearedSuccessed: "Cleared successfully" },

  deactivate: {
    cancelText: "cancel",
    nextStep: "next step",
    navigationBarTitle: "Logout prompt" },

  about: {
    sacnQR: "Scan the QR Code and your friends can also download it",
    client: "applCantion",
    and: "And",
    about: "About" },

  invite: {
    download: "Download" },

  login: {
    phoneLogin: "After logging in, you can show yourself",
    phoneLoginTip: "Unregistered mobile phone numbers will be automatically registered after verification",
    getVerifyCode: "Get Code" },

  uniQuickLogin: {
    accountLogin: "Account",
    SMSLogin: "SMS",
    wechatLogin: "wechat",
    appleLogin: "Apple",
    oneClickLogin: "One click login",
    QQLogin: "QQ",
    xiaomiLogin: "Xiaomi",
    getProviderFail: "Failed to get service provider",
    loginErr: "Login service initialization error",
    chooseOtherLogin: "Click the third-party login" },

  pwdLogin: {
    pwdLogin: "User name password login",
    placeholder: "Please enter mobile number / user name",
    passwordPlaceholder: "Please input a password",
    verifyCodePlaceholder: "Please enter the verification code",
    login: "sign in",
    forgetPassword: "Forget password",
    register: "Registered account" },

  register: {
    navigationBarTitle: "register",
    usernamePlaceholder: "Please enter user name",
    nicknamePlaceholder: "Please enter user nickname",
    passwordDigitsPlaceholder: "Please enter a 6-20 digit password",
    passwordAgain: "Enter the password again",
    registerAndLogin: "Register and log in" },

  listDetail: {
    follow: "Click follow",
    newsErr: "Error, news ID is empty" },

  newsLog: {
    navigationBarTitle: "Reading Log" },

  bindMobile: {
    navigationBarTitle: "Bind Mobile" } };exports.default = _default;

/***/ }),

/***/ 27:
/*!***********************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/lang/zh-Hans.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  tabbar: '列表,宫格,通讯录,我的',
  agreementsTitle: '用户服务协议,隐私政策',
  common: {
    wechatFriends: "微信好友",
    wechatBbs: "微信朋友圈",
    weibo: "微博",
    more: "更多",
    agree: "同意",
    copy: "复制",
    wechatApplet: "微信小程序",
    cancelShare: "取消分享",
    updateSucceeded: "更新成功",
    phonePlaceholder: "请输入手机号",
    verifyCodePlaceholder: "请输入验证码",
    newPasswordPlaceholder: "请输入新密码",
    confirmNewPasswordPlaceholder: "请确认新密码",
    confirmPassword: "请确认密码",
    verifyCodeSend: "验证码已通过短信发送至",
    passwordDigits: "密码为6 - 20位",
    getVerifyCode: "获取验证码",
    noAgree: "你未同意隐私政策协议",
    gotIt: "知道了",
    login: "登录",
    error: "错误",
    complete: "完成",
    submit: "提交",
    formatErr: "手机号码格式不正确",
    sixDigitCode: "请输入6位验证码",
    resetNavTitle: "重置密码" },


  list: {
    inputPlaceholder: "请输入搜索内容" },

  search: {
    cancelText: '取消',
    searchHistory: "搜索历史",
    searchDiscovery: "搜索发现",
    deleteAll: "全部删除",
    delete: "删除",
    deleteTip: "确认清空搜索历史吗？",
    complete: "完成",
    searchHiddenTip: "当前搜索发现已隐藏" },

  grid: {
    grid: "宫格组件",
    visibleToAll: "所有人可见",
    invisibleToTourists: "游客不可见",
    adminVisible: "管理员可见",
    clickTip: "点击第",
    clickTipGrid: "个宫格" },

  mine: {
    showText: "文字",
    signIn: "普通签到",
    signInByAd: "看广告签到",
    toEvaluate: "去评分",
    readArticles: "阅读过的文章",
    myScore: "我的积分",
    invite: "分销推荐",
    feedback: "问题与反馈",
    settings: "设置",
    checkUpdate: "检查更新",
    about: "关于",
    clicked: "你点击了",
    checkScore: "请登录后查看积分",
    currentScore: "当前积分为",
    noScore: "当前无积分",
    notLogged: "未登录" },

  userinfo: {
    navigationBarTitle: "个人资料",
    ProfilePhoto: "头像",
    nickname: "昵称",
    notSet: "未设置",
    phoneNumber: "手机号",
    notSpecified: "未绑定",
    setNickname: "设置昵称",
    setNicknamePlaceholder: "请输入要设置的昵称",
    bindPhoneNumber: "本机号码一键绑定",
    bindOtherLogin: "其他号码绑定",
    noChange: "没有变化",
    uploading: "正在上传",
    requestFail: "请求服务失败",
    setting: "设置中",
    deleteSucceeded: "删除成功",
    setSucceeded: "设置成功" },

  smsCode: {
    resendVerifyCode: "重新发送",
    phoneErrTip: "手机号格式错误",
    sendSuccessTip: "短信验证码发送成功" },

  loadMore: {
    noData: "暂无数据",
    noNetwork: "网络异常",
    toSet: "前往设置",
    error: "错误" },

  uniFeedback: {
    navigationBarTitle: "问题与反馈",
    msgTitle: "留言内容",
    imgTitle: "图片列表",
    contacts: "联系人",
    phone: "联系电话",
    submit: "提交" },

  settings: {
    navigationBarTitle: "设置",
    userInfo: "个人资料",
    changePassword: "修改密码",
    clearTmp: "清理缓存",
    pushServer: "推送功能",
    fingerPrint: "指纹解锁",
    facial: "人脸解锁",
    deactivate: "注销账号",
    logOut: "退出登录",
    login: "登录",
    failTip: "认证失败请重试",
    authFailed: "认证失败",
    changeLanguage: "切换语言",
    please: "请用",
    successText: "成功",
    deviceNoOpen: "设备未开启",
    fail: "失败",
    tips: "提示",
    exitLogin: "是否退出登录?",
    clearing: "清除中",
    clearedSuccessed: "清除成功",
    confirmText: "确定",
    cancelText: '取消' },

  deactivate: {
    cancelText: '取消',
    nextStep: "下一步",
    navigationBarTitle: "注销提示" },

  about: {
    sacnQR: "扫描二维码，您的朋友也可以下载",
    client: "客户端",
    and: "和",
    about: "关于" },

  invite: {
    download: "下载" },

  login: {
    phoneLogin: "登录后即可展示自己",
    phoneLoginTip: "未注册的手机号验证通过后将自动注册",
    getVerifyCode: "获取验证码" },

  uniQuickLogin: {
    accountLogin: "账号登录",
    SMSLogin: "短信验证码",
    wechatLogin: "微信登录",
    appleLogin: "苹果登录",
    oneClickLogin: "一键登录",
    QQLogin: "QQ登录",
    xiaomiLogin: "小米登录",
    getProviderFail: "获取服务供应商失败",
    loginErr: "登录服务初始化错误",
    chooseOtherLogin: "点击了第三方登录" },

  pwdLogin: {
    pwdLogin: "用户名密码登录",
    placeholder: "请输入手机号/用户名",
    passwordPlaceholder: "请输入密码",
    verifyCodePlaceholder: "请输入验证码",
    login: "登录",
    forgetPassword: "忘记密码",
    register: "注册账号" },

  register: {
    navigationBarTitle: "注册",
    usernamePlaceholder: "请输入用户名",
    nicknamePlaceholder: "请输入用户昵称",
    registerAndLogin: "注册并登录",
    passwordDigitsPlaceholder: "请输入6-20位密码",
    passwordAgain: "再次输入密码" },

  listDetail: {
    follow: "点击关注",
    newsErr: "出错了，新闻ID为空" },

  newsLog: {
    navigationBarTitle: "阅读记录" },

  bindMobile: {
    navigationBarTitle: "绑定手机号码" } };exports.default = _default;

/***/ }),

/***/ 28:
/*!****************************************************!*\
  !*** ./node_modules/vue-i18n/dist/vue-i18n.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * vue-i18n v8.24.1 
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
/*  */

/**
 * constants
 */

var numberFormatKeys = [
  'compactDisplay',
  'currency',
  'currencyDisplay',
  'currencySign',
  'localeMatcher',
  'notation',
  'numberingSystem',
  'signDisplay',
  'style',
  'unit',
  'unitDisplay',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits'
];

/**
 * utilities
 */

function warn (msg, err) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}

function error (msg, err) {
  if (typeof console !== 'undefined') {
    console.error('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.error(err.stack);
    }
  }
}

var isArray = Array.isArray;

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isBoolean (val) {
  return typeof val === 'boolean'
}

function isString (val) {
  return typeof val === 'string'
}

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

function isNull (val) {
  return val === null || val === undefined
}

function isFunction (val) {
  return typeof val === 'function'
}

function parseArgs () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var locale = null;
  var params = null;
  if (args.length === 1) {
    if (isObject(args[0]) || isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === 'string') {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      locale = args[0];
    }
    /* istanbul ignore if */
    if (isObject(args[1]) || isArray(args[1])) {
      params = args[1];
    }
  }

  return { locale: locale, params: params }
}

function looseClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

function includes (arr, item) {
  return !!~arr.indexOf(item)
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

function merge (target) {
  var arguments$1 = arguments;

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    if (source !== undefined && source !== null) {
      var key = (void 0);
      for (key in source) {
        if (hasOwn(source, key)) {
          if (isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }
  return output
}

function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = isArray(a);
      var isArrayB = isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Sanitizes html special characters from input strings. For mitigating risk of XSS attacks.
 * @param rawText The raw input from the user that should be escaped.
 */
function escapeHtml(rawText) {
  return rawText
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Escapes html tags and special symbols from all provided params which were returned from parseArgs().params.
 * This method performs an in-place operation on the params object.
 *
 * @param {any} params Parameters as provided from `parseArgs().params`.
 *                     May be either an array of strings or a string->any map.
 *
 * @returns The manipulated `params` object.
 */
function escapeParams(params) {
  if(params != null) {
    Object.keys(params).forEach(function (key) {
      if(typeof(params[key]) == 'string') {
        params[key] = escapeHtml(params[key]);
      }
    });
  }
  return params
}

/*  */

function extend (Vue) {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    // $FlowFixMe
    Object.defineProperty(Vue.prototype, '$i18n', {
      get: function get () { return this._i18n }
    });
  }

  Vue.prototype.$t = function (key) {
    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

    var i18n = this.$i18n;
    return i18n._t.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this ].concat( values ))
  };

  Vue.prototype.$tc = function (key, choice) {
    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];

    var i18n = this.$i18n;
    return i18n._tc.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this, choice ].concat( values ))
  };

  Vue.prototype.$te = function (key, locale) {
    var i18n = this.$i18n;
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale)
  };

  Vue.prototype.$d = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).d.apply(ref, [ value ].concat( args ))
  };

  Vue.prototype.$n = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).n.apply(ref, [ value ].concat( args ))
  };
}

/*  */

var mixin = {
  beforeCreate: function beforeCreate () {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages = options.i18n && options.i18n.messages ? options.i18n.messages : {};
            options.__i18n.forEach(function (resource) {
              localeMessages = merge(localeMessages, JSON.parse(resource));
            });
            Object.keys(localeMessages).forEach(function (locale) {
              options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
            });
          } catch (e) {
            if (true) {
              error("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }
        this._i18n = options.i18n;
        this._i18nWatcher = this._i18n.watchI18nData();
      } else if (isPlainObject(options.i18n)) {
        var rootI18n = this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n
          ? this.$root.$i18n
          : null;
        // component local i18n
        if (rootI18n) {
          options.i18n.root = this.$root;
          options.i18n.formatter = rootI18n.formatter;
          options.i18n.fallbackLocale = rootI18n.fallbackLocale;
          options.i18n.formatFallbackMessages = rootI18n.formatFallbackMessages;
          options.i18n.silentTranslationWarn = rootI18n.silentTranslationWarn;
          options.i18n.silentFallbackWarn = rootI18n.silentFallbackWarn;
          options.i18n.pluralizationRules = rootI18n.pluralizationRules;
          options.i18n.preserveDirectiveContent = rootI18n.preserveDirectiveContent;
        }

        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages$1 = options.i18n && options.i18n.messages ? options.i18n.messages : {};
            options.__i18n.forEach(function (resource) {
              localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
            });
            options.i18n.messages = localeMessages$1;
          } catch (e) {
            if (true) {
              warn("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }

        var ref = options.i18n;
        var sharedMessages = ref.sharedMessages;
        if (sharedMessages && isPlainObject(sharedMessages)) {
          options.i18n.messages = merge(options.i18n.messages, sharedMessages);
        }

        this._i18n = new VueI18n(options.i18n);
        this._i18nWatcher = this._i18n.watchI18nData();

        if (options.i18n.sync === undefined || !!options.i18n.sync) {
          this._localeWatcher = this.$i18n.watchLocale();
        }

        if (rootI18n) {
          rootI18n.onComponentInstanceCreated(this._i18n);
        }
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      // root i18n
      this._i18n = this.$root.$i18n;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      // parent i18n
      this._i18n = options.parent.$i18n;
    }
  },

  beforeMount: function beforeMount () {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (isPlainObject(options.i18n)) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    }
  },

  mounted: function mounted () {
    if (this !== this.$root && this.$options.__INTLIFY_META__ && this.$el) {
      this.$el.setAttribute('data-intlify', this.$options.__INTLIFY_META__);
    }
  },

  beforeDestroy: function beforeDestroy () {
    if (!this._i18n) { return }

    var self = this;
    this.$nextTick(function () {
      if (self._subscribing) {
        self._i18n.unsubscribeDataChanging(self);
        delete self._subscribing;
      }

      if (self._i18nWatcher) {
        self._i18nWatcher();
        self._i18n.destroyVM();
        delete self._i18nWatcher;
      }

      if (self._localeWatcher) {
        self._localeWatcher();
        delete self._localeWatcher;
      }
    });
  }
};

/*  */

var interpolationComponent = {
  name: 'i18n',
  functional: true,
  props: {
    tag: {
      type: [String, Boolean, Object],
      default: 'span'
    },
    path: {
      type: String,
      required: true
    },
    locale: {
      type: String
    },
    places: {
      type: [Array, Object]
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var parent = ref.parent;
    var props = ref.props;
    var slots = ref.slots;

    var $i18n = parent.$i18n;
    if (!$i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return
    }

    var path = props.path;
    var locale = props.locale;
    var places = props.places;
    var params = slots();
    var children = $i18n.i(
      path,
      locale,
      onlyHasDefaultPlace(params) || places
        ? useLegacyPlaces(params.default, places)
        : params
    );

    var tag = (!!props.tag && props.tag !== true) || props.tag === false ? props.tag : 'span';
    return tag ? h(tag, data, children) : children
  }
};

function onlyHasDefaultPlace (params) {
  var prop;
  for (prop in params) {
    if (prop !== 'default') { return false }
  }
  return Boolean(prop)
}

function useLegacyPlaces (children, places) {
  var params = places ? createParamsFromPlaces(places) : {};

  if (!children) { return params }

  // Filter empty text nodes
  children = children.filter(function (child) {
    return child.tag || child.text.trim() !== ''
  });

  var everyPlace = children.every(vnodeHasPlaceAttribute);
  if ( true && everyPlace) {
    warn('`place` attribute is deprecated in next major version. Please switch to Vue slots.');
  }

  return children.reduce(
    everyPlace ? assignChildPlace : assignChildIndex,
    params
  )
}

function createParamsFromPlaces (places) {
  if (true) {
    warn('`places` prop is deprecated in next major version. Please switch to Vue slots.');
  }

  return Array.isArray(places)
    ? places.reduce(assignChildIndex, {})
    : Object.assign({}, places)
}

function assignChildPlace (params, child) {
  if (child.data && child.data.attrs && child.data.attrs.place) {
    params[child.data.attrs.place] = child;
  }
  return params
}

function assignChildIndex (params, child, index) {
  params[index] = child;
  return params
}

function vnodeHasPlaceAttribute (vnode) {
  return Boolean(vnode.data && vnode.data.attrs && vnode.data.attrs.place)
}

/*  */

var numberComponent = {
  name: 'i18n-n',
  functional: true,
  props: {
    tag: {
      type: [String, Boolean, Object],
      default: 'span'
    },
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    },
    locale: {
      type: String
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var parent = ref.parent;
    var data = ref.data;

    var i18n = parent.$i18n;

    if (!i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return null
    }

    var key = null;
    var options = null;

    if (isString(props.format)) {
      key = props.format;
    } else if (isObject(props.format)) {
      if (props.format.key) {
        key = props.format.key;
      }

      // Filter out number format options only
      options = Object.keys(props.format).reduce(function (acc, prop) {
        var obj;

        if (includes(numberFormatKeys, prop)) {
          return Object.assign({}, acc, ( obj = {}, obj[prop] = props.format[prop], obj ))
        }
        return acc
      }, null);
    }

    var locale = props.locale || i18n.locale;
    var parts = i18n._ntp(props.value, locale, key, options);

    var values = parts.map(function (part, index) {
      var obj;

      var slot = data.scopedSlots && data.scopedSlots[part.type];
      return slot ? slot(( obj = {}, obj[part.type] = part.value, obj.index = index, obj.parts = parts, obj )) : part.value
    });

    var tag = (!!props.tag && props.tag !== true) || props.tag === false ? props.tag : 'span';
    return tag
      ? h(tag, {
        attrs: data.attrs,
        'class': data['class'],
        staticClass: data.staticClass
      }, values)
      : values
  }
};

/*  */

function bind (el, binding, vnode) {
  if (!assert(el, vnode)) { return }

  t(el, binding, vnode);
}

function update (el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) { return }

  var i18n = vnode.context.$i18n;
  if (localeEqual(el, vnode) &&
    (looseEqual(binding.value, binding.oldValue) &&
     looseEqual(el._localeMessage, i18n.getLocaleMessage(i18n.locale)))) { return }

  t(el, binding, vnode);
}

function unbind (el, binding, vnode, oldVNode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return
  }

  var i18n = vnode.context.$i18n || {};
  if (!binding.modifiers.preserve && !i18n.preserveDirectiveContent) {
    el.textContent = '';
  }
  el._vt = undefined;
  delete el['_vt'];
  el._locale = undefined;
  delete el['_locale'];
  el._localeMessage = undefined;
  delete el['_localeMessage'];
}

function assert (el, vnode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return false
  }

  if (!vm.$i18n) {
    warn('VueI18n instance does not exists in Vue instance');
    return false
  }

  return true
}

function localeEqual (el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale
}

function t (el, binding, vnode) {
  var ref$1, ref$2;

  var value = binding.value;

  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  var choice = ref.choice;
  if (!path && !locale && !args) {
    warn('value type not supported');
    return
  }

  if (!path) {
    warn('`path` is required in v-t directive');
    return
  }

  var vm = vnode.context;
  if (choice != null) {
    el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [ path, choice ].concat( makeParams(locale, args) ));
  } else {
    el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [ path ].concat( makeParams(locale, args) ));
  }
  el._locale = vm.$i18n.locale;
  el._localeMessage = vm.$i18n.getLocaleMessage(vm.$i18n.locale);
}

function parseValue (value) {
  var path;
  var locale;
  var args;
  var choice;

  if (isString(value)) {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
    choice = value.choice;
  }

  return { path: path, locale: locale, args: args, choice: choice }
}

function makeParams (locale, args) {
  var params = [];

  locale && params.push(locale);
  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }

  return params
}

var Vue;

function install (_Vue) {
  /* istanbul ignore if */
  if ( true && install.installed && _Vue === Vue) {
    warn('already installed.');
    return
  }
  install.installed = true;

  Vue = _Vue;

  var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;
  /* istanbul ignore if */
  if ( true && version < 2) {
    warn(("vue-i18n (" + (install.version) + ") need to use Vue 2.0 or later (Vue: " + (Vue.version) + ")."));
    return
  }

  extend(Vue);
  Vue.mixin(mixin);
  Vue.directive('t', { bind: bind, update: update, unbind: unbind });
  Vue.component(interpolationComponent.name, interpolationComponent);
  Vue.component(numberComponent.name, numberComponent);

  // use simple mergeStrategies to prevent i18n instance lose '__proto__'
  var strats = Vue.config.optionMergeStrategies;
  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };
}

/*  */

var BaseFormatter = function BaseFormatter () {
  this._caches = Object.create(null);
};

BaseFormatter.prototype.interpolate = function interpolate (message, values) {
  if (!values) {
    return [message]
  }
  var tokens = this._caches[message];
  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }
  return compile(tokens, values)
};



var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;

function parse (format) {
  var tokens = [];
  var position = 0;

  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }

      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== '}') {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === '}';

      var type = RE_TOKEN_LIST_VALUE.test(sub)
        ? 'list'
        : isClosed && RE_TOKEN_NAMED_VALUE.test(sub)
          ? 'named'
          : 'unknown';
      tokens.push({ value: sub, type: type });
    } else if (char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[(position)] !== '{') {
        text += char;
      }
    } else {
      text += char;
    }
  }

  text && tokens.push({ type: 'text', value: text });

  return tokens
}

function compile (tokens, values) {
  var compiled = [];
  var index = 0;

  var mode = Array.isArray(values)
    ? 'list'
    : isObject(values)
      ? 'named'
      : 'unknown';
  if (mode === 'unknown') { return compiled }

  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break
      case 'named':
        if (mode === 'named') {
          compiled.push((values)[token.value]);
        } else {
          if (true) {
            warn(("Type of token '" + (token.type) + "' and format of value '" + mode + "' don't match!"));
          }
        }
        break
      case 'unknown':
        if (true) {
          warn("Detect 'unknown' type of token!");
        }
        break
    }
    index++;
  }

  return compiled
}

/*  */

/**
 *  Path parser
 *  - Inspired:
 *    Vue.js Path parser
 */

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Check if an expression is a literal value.
 */

var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral (exp) {
  return literalValueRE.test(exp)
}

/**
 * Strip quotes from a string
 */

function stripQuotes (str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Determine the type of a character in a keypath.
 */

function getPathCharType (ch) {
  if (ch === undefined || ch === null) { return 'eof' }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
      return ch

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident'

    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  return 'ident'
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */

function formatSubPath (path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) { return false }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
}

/**
 * Parse a string path into an array of segments
 */

function parse$1 (path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      if (key === undefined) { return false }
      key = formatSubPath(key);
      if (key === false) {
        return false
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1];
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
      (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true
    }
  }

  while (mode !== null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined
        ? c
        : newChar;
      if (action() === false) {
        return
      }
    }

    if (mode === AFTER_PATH) {
      return keys
    }
  }
}





var I18nPath = function I18nPath () {
  this._cache = Object.create(null);
};

/**
 * External parse that check for a cache hit first
 */
I18nPath.prototype.parsePath = function parsePath (path) {
  var hit = this._cache[path];
  if (!hit) {
    hit = parse$1(path);
    if (hit) {
      this._cache[path] = hit;
    }
  }
  return hit || []
};

/**
 * Get path value from path string
 */
I18nPath.prototype.getPathValue = function getPathValue (obj, path) {
  if (!isObject(obj)) { return null }

  var paths = this.parsePath(path);
  if (paths.length === 0) {
    return null
  } else {
    var length = paths.length;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined || value === null) {
        return null
      }
      last = value;
      i++;
    }

    return last
  }
};

/*  */



var htmlTagMatcher = /<\/?[\w\s="/.':;#-\/]+>/;
var linkKeyMatcher = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g;
var linkKeyPrefixMatcher = /^@(?:\.([a-z]+))?:/;
var bracketsMatcher = /[()]/g;
var defaultModifiers = {
  'upper': function (str) { return str.toLocaleUpperCase(); },
  'lower': function (str) { return str.toLocaleLowerCase(); },
  'capitalize': function (str) { return ("" + (str.charAt(0).toLocaleUpperCase()) + (str.substr(1))); }
};

var defaultFormatter = new BaseFormatter();

var VueI18n = function VueI18n (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #290
  /* istanbul ignore if */
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var locale = options.locale || 'en-US';
  var fallbackLocale = options.fallbackLocale === false
    ? false
    : options.fallbackLocale || 'en-US';
  var messages = options.messages || {};
  var dateTimeFormats = options.dateTimeFormats || {};
  var numberFormats = options.numberFormats || {};

  this._vm = null;
  this._formatter = options.formatter || defaultFormatter;
  this._modifiers = options.modifiers || {};
  this._missing = options.missing || null;
  this._root = options.root || null;
  this._sync = options.sync === undefined ? true : !!options.sync;
  this._fallbackRoot = options.fallbackRoot === undefined
    ? true
    : !!options.fallbackRoot;
  this._formatFallbackMessages = options.formatFallbackMessages === undefined
    ? false
    : !!options.formatFallbackMessages;
  this._silentTranslationWarn = options.silentTranslationWarn === undefined
    ? false
    : options.silentTranslationWarn;
  this._silentFallbackWarn = options.silentFallbackWarn === undefined
    ? false
    : !!options.silentFallbackWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = [];
  this._componentInstanceCreatedListener = options.componentInstanceCreatedListener || null;
  this._preserveDirectiveContent = options.preserveDirectiveContent === undefined
    ? false
    : !!options.preserveDirectiveContent;
  this.pluralizationRules = options.pluralizationRules || {};
  this._warnHtmlInMessage = options.warnHtmlInMessage || 'off';
  this._postTranslation = options.postTranslation || null;
  this._escapeParameterHtml = options.escapeParameterHtml || false;

  /**
   * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
   * @param choicesLength {number} an overall amount of available choices
   * @returns a final choice index
  */
  this.getChoiceIndex = function (choice, choicesLength) {
    var thisPrototype = Object.getPrototypeOf(this$1);
    if (thisPrototype && thisPrototype.getChoiceIndex) {
      var prototypeGetChoiceIndex = (thisPrototype.getChoiceIndex);
      return (prototypeGetChoiceIndex).call(this$1, choice, choicesLength)
    }

    // Default (old) getChoiceIndex implementation - english-compatible
    var defaultImpl = function (_choice, _choicesLength) {
      _choice = Math.abs(_choice);

      if (_choicesLength === 2) {
        return _choice
          ? _choice > 1
            ? 1
            : 0
          : 1
      }

      return _choice ? Math.min(_choice, 2) : 0
    };

    if (this$1.locale in this$1.pluralizationRules) {
      return this$1.pluralizationRules[this$1.locale].apply(this$1, [choice, choicesLength])
    } else {
      return defaultImpl(choice, choicesLength)
    }
  };


  this._exist = function (message, key) {
    if (!message || !key) { return false }
    if (!isNull(this$1._path.getPathValue(message, key))) { return true }
    // fallback for flat key
    if (message[key]) { return true }
    return false
  };

  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }

  this._initVM({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    dateTimeFormats: dateTimeFormats,
    numberFormats: numberFormats
  });
};

var prototypeAccessors = { vm: { configurable: true },messages: { configurable: true },dateTimeFormats: { configurable: true },numberFormats: { configurable: true },availableLocales: { configurable: true },locale: { configurable: true },fallbackLocale: { configurable: true },formatFallbackMessages: { configurable: true },missing: { configurable: true },formatter: { configurable: true },silentTranslationWarn: { configurable: true },silentFallbackWarn: { configurable: true },preserveDirectiveContent: { configurable: true },warnHtmlInMessage: { configurable: true },postTranslation: { configurable: true } };

VueI18n.prototype._checkLocaleMessage = function _checkLocaleMessage (locale, level, message) {
  var paths = [];

  var fn = function (level, locale, message, paths) {
    if (isPlainObject(message)) {
      Object.keys(message).forEach(function (key) {
        var val = message[key];
        if (isPlainObject(val)) {
          paths.push(key);
          paths.push('.');
          fn(level, locale, val, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(key);
          fn(level, locale, val, paths);
          paths.pop();
        }
      });
    } else if (isArray(message)) {
      message.forEach(function (item, index) {
        if (isPlainObject(item)) {
          paths.push(("[" + index + "]"));
          paths.push('.');
          fn(level, locale, item, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(("[" + index + "]"));
          fn(level, locale, item, paths);
          paths.pop();
        }
      });
    } else if (isString(message)) {
      var ret = htmlTagMatcher.test(message);
      if (ret) {
        var msg = "Detected HTML in message '" + message + "' of keypath '" + (paths.join('')) + "' at '" + locale + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
        if (level === 'warn') {
          warn(msg);
        } else if (level === 'error') {
          error(msg);
        }
      }
    }
  };

  fn(level, locale, message, paths);
};

VueI18n.prototype._initVM = function _initVM (data) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({ data: data });
  Vue.config.silent = silent;
};

VueI18n.prototype.destroyVM = function destroyVM () {
  this._vm.$destroy();
};

VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging (vm) {
  this._dataListeners.push(vm);
};

VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging (vm) {
  remove(this._dataListeners, vm);
};

VueI18n.prototype.watchI18nData = function watchI18nData () {
  var self = this;
  return this._vm.$watch('$data', function () {
    var i = self._dataListeners.length;
    while (i--) {
      Vue.nextTick(function () {
        self._dataListeners[i] && self._dataListeners[i].$forceUpdate();
      });
    }
  }, { deep: true })
};

VueI18n.prototype.watchLocale = function watchLocale () {
  /* istanbul ignore if */
  if (!this._sync || !this._root) { return null }
  var target = this._vm;
  return this._root.$i18n.vm.$watch('locale', function (val) {
    target.$set(target, 'locale', val);
    target.$forceUpdate();
  }, { immediate: true })
};

VueI18n.prototype.onComponentInstanceCreated = function onComponentInstanceCreated (newI18n) {
  if (this._componentInstanceCreatedListener) {
    this._componentInstanceCreatedListener(newI18n, this);
  }
};

prototypeAccessors.vm.get = function () { return this._vm };

prototypeAccessors.messages.get = function () { return looseClone(this._getMessages()) };
prototypeAccessors.dateTimeFormats.get = function () { return looseClone(this._getDateTimeFormats()) };
prototypeAccessors.numberFormats.get = function () { return looseClone(this._getNumberFormats()) };
prototypeAccessors.availableLocales.get = function () { return Object.keys(this.messages).sort() };

prototypeAccessors.locale.get = function () { return this._vm.locale };
prototypeAccessors.locale.set = function (locale) {
  this._vm.$set(this._vm, 'locale', locale);
};

prototypeAccessors.fallbackLocale.get = function () { return this._vm.fallbackLocale };
prototypeAccessors.fallbackLocale.set = function (locale) {
  this._localeChainCache = {};
  this._vm.$set(this._vm, 'fallbackLocale', locale);
};

prototypeAccessors.formatFallbackMessages.get = function () { return this._formatFallbackMessages };
prototypeAccessors.formatFallbackMessages.set = function (fallback) { this._formatFallbackMessages = fallback; };

prototypeAccessors.missing.get = function () { return this._missing };
prototypeAccessors.missing.set = function (handler) { this._missing = handler; };

prototypeAccessors.formatter.get = function () { return this._formatter };
prototypeAccessors.formatter.set = function (formatter) { this._formatter = formatter; };

prototypeAccessors.silentTranslationWarn.get = function () { return this._silentTranslationWarn };
prototypeAccessors.silentTranslationWarn.set = function (silent) { this._silentTranslationWarn = silent; };

prototypeAccessors.silentFallbackWarn.get = function () { return this._silentFallbackWarn };
prototypeAccessors.silentFallbackWarn.set = function (silent) { this._silentFallbackWarn = silent; };

prototypeAccessors.preserveDirectiveContent.get = function () { return this._preserveDirectiveContent };
prototypeAccessors.preserveDirectiveContent.set = function (preserve) { this._preserveDirectiveContent = preserve; };

prototypeAccessors.warnHtmlInMessage.get = function () { return this._warnHtmlInMessage };
prototypeAccessors.warnHtmlInMessage.set = function (level) {
    var this$1 = this;

  var orgLevel = this._warnHtmlInMessage;
  this._warnHtmlInMessage = level;
  if (orgLevel !== level && (level === 'warn' || level === 'error')) {
    var messages = this._getMessages();
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }
};

prototypeAccessors.postTranslation.get = function () { return this._postTranslation };
prototypeAccessors.postTranslation.set = function (handler) { this._postTranslation = handler; };

VueI18n.prototype._getMessages = function _getMessages () { return this._vm.messages };
VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats () { return this._vm.dateTimeFormats };
VueI18n.prototype._getNumberFormats = function _getNumberFormats () { return this._vm.numberFormats };

VueI18n.prototype._warnDefault = function _warnDefault (locale, key, result, vm, values, interpolateMode) {
  if (!isNull(result)) { return result }
  if (this._missing) {
    var missingRet = this._missing.apply(null, [locale, key, vm, values]);
    if (isString(missingRet)) {
      return missingRet
    }
  } else {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(
        "Cannot translate the value of keypath '" + key + "'. " +
        'Use the value of keypath as default.'
      );
    }
  }

  if (this._formatFallbackMessages) {
    var parsedArgs = parseArgs.apply(void 0, values);
    return this._render(key, interpolateMode, parsedArgs.params, key)
  } else {
    return key
  }
};

VueI18n.prototype._isFallbackRoot = function _isFallbackRoot (val) {
  return !val && !isNull(this._root) && this._fallbackRoot
};

VueI18n.prototype._isSilentFallbackWarn = function _isSilentFallbackWarn (key) {
  return this._silentFallbackWarn instanceof RegExp
    ? this._silentFallbackWarn.test(key)
    : this._silentFallbackWarn
};

VueI18n.prototype._isSilentFallback = function _isSilentFallback (locale, key) {
  return this._isSilentFallbackWarn(key) && (this._isFallbackRoot() || locale !== this.fallbackLocale)
};

VueI18n.prototype._isSilentTranslationWarn = function _isSilentTranslationWarn (key) {
  return this._silentTranslationWarn instanceof RegExp
    ? this._silentTranslationWarn.test(key)
    : this._silentTranslationWarn
};

VueI18n.prototype._interpolate = function _interpolate (
  locale,
  message,
  key,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  if (!message) { return null }

  var pathRet = this._path.getPathValue(message, key);
  if (isArray(pathRet) || isPlainObject(pathRet)) { return pathRet }

  var ret;
  if (isNull(pathRet)) {
    /* istanbul ignore else */
    if (isPlainObject(message)) {
      ret = message[key];
      if (!(isString(ret) || isFunction(ret))) {
        if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
          warn(("Value of key '" + key + "' is not a string or function !"));
        }
        return null
      }
    } else {
      return null
    }
  } else {
    /* istanbul ignore else */
    if (isString(pathRet) || isFunction(pathRet)) {
      ret = pathRet;
    } else {
      if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
        warn(("Value of key '" + key + "' is not a string or function!"));
      }
      return null
    }
  }

  // Check for the existence of links within the translated string
  if (isString(ret) && (ret.indexOf('@:') >= 0 || ret.indexOf('@.') >= 0)) {
    ret = this._link(locale, message, ret, host, 'raw', values, visitedLinkStack);
  }

  return this._render(ret, interpolateMode, values, key)
};

VueI18n.prototype._link = function _link (
  locale,
  message,
  str,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  var ret = str;

  // Match all the links within the local
  // We are going to replace each of
  // them with its translation
  var matches = ret.match(linkKeyMatcher);
  for (var idx in matches) {
    // ie compatible: filter custom array
    // prototype method
    if (!matches.hasOwnProperty(idx)) {
      continue
    }
    var link = matches[idx];
    var linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
    var linkPrefix = linkKeyPrefixMatches[0];
      var formatterName = linkKeyPrefixMatches[1];

    // Remove the leading @:, @.case: and the brackets
    var linkPlaceholder = link.replace(linkPrefix, '').replace(bracketsMatcher, '');

    if (includes(visitedLinkStack, linkPlaceholder)) {
      if (true) {
        warn(("Circular reference found. \"" + link + "\" is already visited in the chain of " + (visitedLinkStack.reverse().join(' <- '))));
      }
      return ret
    }
    visitedLinkStack.push(linkPlaceholder);

    // Translate the link
    var translated = this._interpolate(
      locale, message, linkPlaceholder, host,
      interpolateMode === 'raw' ? 'string' : interpolateMode,
      interpolateMode === 'raw' ? undefined : values,
      visitedLinkStack
    );

    if (this._isFallbackRoot(translated)) {
      if ( true && !this._isSilentTranslationWarn(linkPlaceholder)) {
        warn(("Fall back to translate the link placeholder '" + linkPlaceholder + "' with root locale."));
      }
      /* istanbul ignore if */
      if (!this._root) { throw Error('unexpected error') }
      var root = this._root.$i18n;
      translated = root._translate(
        root._getMessages(), root.locale, root.fallbackLocale,
        linkPlaceholder, host, interpolateMode, values
      );
    }
    translated = this._warnDefault(
      locale, linkPlaceholder, translated, host,
      isArray(values) ? values : [values],
      interpolateMode
    );

    if (this._modifiers.hasOwnProperty(formatterName)) {
      translated = this._modifiers[formatterName](translated);
    } else if (defaultModifiers.hasOwnProperty(formatterName)) {
      translated = defaultModifiers[formatterName](translated);
    }

    visitedLinkStack.pop();

    // Replace the link with the translated
    ret = !translated ? ret : ret.replace(link, translated);
  }

  return ret
};

VueI18n.prototype._createMessageContext = function _createMessageContext (values) {
  var _list = isArray(values) ? values : [];
  var _named = isObject(values) ? values : {};
  var list = function (index) { return _list[index]; };
  var named = function (key) { return _named[key]; };
  return {
    list: list,
    named: named
  }
};

VueI18n.prototype._render = function _render (message, interpolateMode, values, path) {
  if (isFunction(message)) {
    return message(this._createMessageContext(values))
  }

  var ret = this._formatter.interpolate(message, values, path);

  // If the custom formatter refuses to work - apply the default one
  if (!ret) {
    ret = defaultFormatter.interpolate(message, values, path);
  }

  // if interpolateMode is **not** 'string' ('row'),
  // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
  return interpolateMode === 'string' && !isString(ret) ? ret.join('') : ret
};

VueI18n.prototype._appendItemToChain = function _appendItemToChain (chain, item, blocks) {
  var follow = false;
  if (!includes(chain, item)) {
    follow = true;
    if (item) {
      follow = item[item.length - 1] !== '!';
      item = item.replace(/!/g, '');
      chain.push(item);
      if (blocks && blocks[item]) {
        follow = blocks[item];
      }
    }
  }
  return follow
};

VueI18n.prototype._appendLocaleToChain = function _appendLocaleToChain (chain, locale, blocks) {
  var follow;
  var tokens = locale.split('-');
  do {
    var item = tokens.join('-');
    follow = this._appendItemToChain(chain, item, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && (follow === true))
  return follow
};

VueI18n.prototype._appendBlockToChain = function _appendBlockToChain (chain, block, blocks) {
  var follow = true;
  for (var i = 0; (i < block.length) && (isBoolean(follow)); i++) {
    var locale = block[i];
    if (isString(locale)) {
      follow = this._appendLocaleToChain(chain, locale, blocks);
    }
  }
  return follow
};

VueI18n.prototype._getLocaleChain = function _getLocaleChain (start, fallbackLocale) {
  if (start === '') { return [] }

  if (!this._localeChainCache) {
    this._localeChainCache = {};
  }

  var chain = this._localeChainCache[start];
  if (!chain) {
    if (!fallbackLocale) {
      fallbackLocale = this.fallbackLocale;
    }
    chain = [];

    // first block defined by start
    var block = [start];

    // while any intervening block found
    while (isArray(block)) {
      block = this._appendBlockToChain(
        chain,
        block,
        fallbackLocale
      );
    }

    // last block defined by default
    var defaults;
    if (isArray(fallbackLocale)) {
      defaults = fallbackLocale;
    } else if (isObject(fallbackLocale)) {
      /* $FlowFixMe */
      if (fallbackLocale['default']) {
        defaults = fallbackLocale['default'];
      } else {
        defaults = null;
      }
    } else {
      defaults = fallbackLocale;
    }

    // convert defaults to array
    if (isString(defaults)) {
      block = [defaults];
    } else {
      block = defaults;
    }
    if (block) {
      this._appendBlockToChain(
        chain,
        block,
        null
      );
    }
    this._localeChainCache[start] = chain;
  }
  return chain
};

VueI18n.prototype._translate = function _translate (
  messages,
  locale,
  fallback,
  key,
  host,
  interpolateMode,
  args
) {
  var chain = this._getLocaleChain(locale, fallback);
  var res;
  for (var i = 0; i < chain.length; i++) {
    var step = chain[i];
    res =
      this._interpolate(step, messages[step], key, host, interpolateMode, args, [key]);
    if (!isNull(res)) {
      if (step !== locale && "development" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to translate the keypath '" + key + "' with '" + step + "' locale."));
      }
      return res
    }
  }
  return null
};

VueI18n.prototype._t = function _t (key, _locale, messages, host) {
    var ref;

    var values = [], len = arguments.length - 4;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 4 ];
  if (!key) { return '' }

  var parsedArgs = parseArgs.apply(void 0, values);
  if(this._escapeParameterHtml) {
    parsedArgs.params = escapeParams(parsedArgs.params);
  }

  var locale = parsedArgs.locale || _locale;

  var ret = this._translate(
    messages, locale, this.fallbackLocale, key,
    host, 'string', parsedArgs.params
  );
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to translate the keypath '" + key + "' with root locale."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return (ref = this._root).$t.apply(ref, [ key ].concat( values ))
  } else {
    ret = this._warnDefault(locale, key, ret, host, values, 'string');
    if (this._postTranslation && ret !== null && ret !== undefined) {
      ret = this._postTranslation(ret, key);
    }
    return ret
  }
};

VueI18n.prototype.t = function t (key) {
    var ref;

    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];
  return (ref = this)._t.apply(ref, [ key, this.locale, this._getMessages(), null ].concat( values ))
};

VueI18n.prototype._i = function _i (key, locale, messages, host, values) {
  var ret =
    this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(("Fall back to interpolate the keypath '" + key + "' with root locale."));
    }
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.i(key, locale, values)
  } else {
    return this._warnDefault(locale, key, ret, host, [values], 'raw')
  }
};

VueI18n.prototype.i = function i (key, locale, values) {
  /* istanbul ignore if */
  if (!key) { return '' }

  if (!isString(locale)) {
    locale = this.locale;
  }

  return this._i(key, locale, this._getMessages(), null, values)
};

VueI18n.prototype._tc = function _tc (
  key,
  _locale,
  messages,
  host,
  choice
) {
    var ref;

    var values = [], len = arguments.length - 5;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 5 ];
  if (!key) { return '' }
  if (choice === undefined) {
    choice = 1;
  }

  var predefined = { 'count': choice, 'n': choice };
  var parsedArgs = parseArgs.apply(void 0, values);
  parsedArgs.params = Object.assign(predefined, parsedArgs.params);
  values = parsedArgs.locale === null ? [parsedArgs.params] : [parsedArgs.locale, parsedArgs.params];
  return this.fetchChoice((ref = this)._t.apply(ref, [ key, _locale, messages, host ].concat( values )), choice)
};

VueI18n.prototype.fetchChoice = function fetchChoice (message, choice) {
  /* istanbul ignore if */
  if (!message || !isString(message)) { return null }
  var choices = message.split('|');

  choice = this.getChoiceIndex(choice, choices.length);
  if (!choices[choice]) { return message }
  return choices[choice].trim()
};

VueI18n.prototype.tc = function tc (key, choice) {
    var ref;

    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];
  return (ref = this)._tc.apply(ref, [ key, this.locale, this._getMessages(), null, choice ].concat( values ))
};

VueI18n.prototype._te = function _te (key, locale, messages) {
    var args = [], len = arguments.length - 3;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 3 ];

  var _locale = parseArgs.apply(void 0, args).locale || locale;
  return this._exist(messages[_locale], key)
};

VueI18n.prototype.te = function te (key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale)
};

VueI18n.prototype.getLocaleMessage = function getLocaleMessage (locale) {
  return looseClone(this._vm.messages[locale] || {})
};

VueI18n.prototype.setLocaleMessage = function setLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, message);
};

VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, merge(
    typeof this._vm.messages[locale] !== 'undefined' && Object.keys(this._vm.messages[locale]).length
      ? this._vm.messages[locale]
      : {},
    message
  ));
};

VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat (locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {})
};

VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, format);
  this._clearDateTimeFormat(locale, format);
};

VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, merge(this._vm.dateTimeFormats[locale] || {}, format));
  this._clearDateTimeFormat(locale, format);
};

VueI18n.prototype._clearDateTimeFormat = function _clearDateTimeFormat (locale, format) {
  for (var key in format) {
    var id = locale + "__" + key;

    if (!this._dateTimeFormatters.hasOwnProperty(id)) {
      continue
    }

    delete this._dateTimeFormatters[id];
  }
};

VueI18n.prototype._localizeDateTime = function _localizeDateTime (
  value,
  locale,
  fallback,
  dateTimeFormats,
  key
) {
  var _locale = locale;
  var formats = dateTimeFormats[_locale];

  var chain = this._getLocaleChain(locale, fallback);
  for (var i = 0; i < chain.length; i++) {
    var current = _locale;
    var step = chain[i];
    formats = dateTimeFormats[step];
    _locale = step;
    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && "development" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to '" + step + "' datetime formats from '" + current + "' datetime formats."));
      }
    } else {
      break
    }
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];
    var id = _locale + "__" + key;
    var formatter = this._dateTimeFormatters[id];
    if (!formatter) {
      formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
    }
    return formatter.format(value)
  }
};

VueI18n.prototype._d = function _d (value, locale, key) {
  /* istanbul ignore if */
  if ( true && !VueI18n.availabilities.dateTimeFormat) {
    warn('Cannot format a Date value due to not supported Intl.DateTimeFormat.');
    return ''
  }

  if (!key) {
    return new Intl.DateTimeFormat(locale).format(value)
  }

  var ret =
    this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to datetime localization of root: key '" + key + "'."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.d(value, key, locale)
  } else {
    return ret || ''
  }
};

VueI18n.prototype.d = function d (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;

  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }
  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }

  return this._d(value, locale, key)
};

VueI18n.prototype.getNumberFormat = function getNumberFormat (locale) {
  return looseClone(this._vm.numberFormats[locale] || {})
};

VueI18n.prototype.setNumberFormat = function setNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, format);
  this._clearNumberFormat(locale, format);
};

VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, merge(this._vm.numberFormats[locale] || {}, format));
  this._clearNumberFormat(locale, format);
};

VueI18n.prototype._clearNumberFormat = function _clearNumberFormat (locale, format) {
  for (var key in format) {
    var id = locale + "__" + key;

    if (!this._numberFormatters.hasOwnProperty(id)) {
      continue
    }

    delete this._numberFormatters[id];
  }
};

VueI18n.prototype._getNumberFormatter = function _getNumberFormatter (
  value,
  locale,
  fallback,
  numberFormats,
  key,
  options
) {
  var _locale = locale;
  var formats = numberFormats[_locale];

  var chain = this._getLocaleChain(locale, fallback);
  for (var i = 0; i < chain.length; i++) {
    var current = _locale;
    var step = chain[i];
    formats = numberFormats[step];
    _locale = step;
    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && "development" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to '" + step + "' number formats from '" + current + "' number formats."));
      }
    } else {
      break
    }
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];

    var formatter;
    if (options) {
      // If options specified - create one time number formatter
      formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._numberFormatters[id];
      if (!formatter) {
        formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
      }
    }
    return formatter
  }
};

VueI18n.prototype._n = function _n (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format a Number value due to not supported Intl.NumberFormat.');
    }
    return ''
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.format(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.format(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to number localization of root: key '" + key + "'."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.n(value, Object.assign({}, { key: key, locale: locale }, options))
  } else {
    return ret || ''
  }
};

VueI18n.prototype.n = function n (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }

      // Filter out number format options only
      options = Object.keys(args[0]).reduce(function (acc, key) {
          var obj;

        if (includes(numberFormatKeys, key)) {
          return Object.assign({}, acc, ( obj = {}, obj[key] = args[0][key], obj ))
        }
        return acc
      }, null);
    }
  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }

  return this._n(value, locale, key, options)
};

VueI18n.prototype._ntp = function _ntp (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format to parts a Number value due to not supported Intl.NumberFormat.');
    }
    return []
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.formatToParts(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.formatToParts(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(("Fall back to format number to parts of root: key '" + key + "' ."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n._ntp(value, locale, key, options)
  } else {
    return ret || []
  }
};

Object.defineProperties( VueI18n.prototype, prototypeAccessors );

var availabilities;
// $FlowFixMe
Object.defineProperty(VueI18n, 'availabilities', {
  get: function get () {
    if (!availabilities) {
      var intlDefined = typeof Intl !== 'undefined';
      availabilities = {
        dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
        numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined'
      };
    }

    return availabilities
  }
});

VueI18n.install = install;
VueI18n.version = '8.24.1';

/* harmony default export */ __webpack_exports__["default"] = (VueI18n);


/***/ }),

/***/ 29:
/*!**************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 30));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 31));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 35));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 36));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 37));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 38));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 39));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 40));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 41));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 42));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 43));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 33));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 32));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 44));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 34));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 45));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 46));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 47));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 48));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 49));



var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 50);

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 51));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 52));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 53));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 54));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 引入全局mixin
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
function wranning(str) {// 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {console.warn(str);}} // 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post类型对象参数转为get类型url参数
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // 另名date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, colorToRgba: _colorGradient.default.colorToRgba, guid: _guid.default, color: _color.default, sys: _sys.sys, os: _sys.os, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 3:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 30:
/*!*************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/mixin/mixin.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this2 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 31:
/*!***************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/request/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 32));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 34));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 32:
/*!********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/deepMerge.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 33));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),

/***/ 33:
/*!********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/deepClone.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),

/***/ 34:
/*!***************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/test.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code };exports.default = _default;

/***/ }),

<<<<<<< HEAD
/***/ 348:
=======
/***/ 347:
>>>>>>> school
/*!*********************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/components/u-parse/libs/MpHtmlParser.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {/**
 * html 解析器
 * @tutorial https://github.com/jin-yufeng/Parser
 * @version 20201029
 * @author JinYufeng
 * @listens MIT
 */
<<<<<<< HEAD
var cfg = __webpack_require__(/*! ./config.js */ 349),
blankChar = cfg.blankChar,
CssHandler = __webpack_require__(/*! ./CssHandler.js */ 350),
=======
var cfg = __webpack_require__(/*! ./config.js */ 348),
blankChar = cfg.blankChar,
CssHandler = __webpack_require__(/*! ./CssHandler.js */ 349),
>>>>>>> school
windowWidth = uni.getSystemInfoSync().windowWidth;
var emoji;

function MpHtmlParser(data) {var _this = this;var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  this.attrs = {};
  this.CssHandler = new CssHandler(options.tagStyle, windowWidth);
  this.data = data;
  this.domain = options.domain;
  this.DOM = [];
  this.i = this.start = this.audioNum = this.imgNum = this.videoNum = 0;
  options.prot = (this.domain || '').includes('://') ? this.domain.split('://')[0] : 'http';
  this.options = options;
  this.state = this.Text;
  this.STACK = [];
  // 工具函数
  this.bubble = function () {
    for (var i = _this.STACK.length, item; item = _this.STACK[--i];) {
      if (cfg.richOnlyTags[item.name]) return false;
      item.c = 1;
    }
    return true;
  };
  this.decode = function (val, amp) {
    var i = -1,
    j,en;
    while (1) {
      if ((i = val.indexOf('&', i + 1)) == -1) break;
      if ((j = val.indexOf(';', i + 2)) == -1) break;
      if (val[i + 1] == '#') {
        en = parseInt((val[i + 2] == 'x' ? '0' : '') + val.substring(i + 2, j));
        if (!isNaN(en)) val = val.substr(0, i) + String.fromCharCode(en) + val.substr(j + 1);
      } else {
        en = val.substring(i + 1, j);
        if (cfg.entities[en] || en == amp)
        val = val.substr(0, i) + (cfg.entities[en] || '&') + val.substr(j + 1);
      }
    }
    return val;
  };
  this.getUrl = function (url) {
    if (url[0] == '/') {
      if (url[1] == '/') url = _this.options.prot + ':' + url;else
      if (_this.domain) url = _this.domain + url;
    } else if (_this.domain && url.indexOf('data:') != 0 && !url.includes('://'))
    url = _this.domain + '/' + url;
    return url;
  };
  this.isClose = function () {return _this.data[_this.i] == '>' || _this.data[_this.i] == '/' && _this.data[_this.i + 1] == '>';};
  this.section = function () {return _this.data.substring(_this.start, _this.i);};
  this.parent = function () {return _this.STACK[_this.STACK.length - 1];};
  this.siblings = function () {return _this.STACK.length ? _this.parent().children : _this.DOM;};
}
MpHtmlParser.prototype.parse = function () {
  if (emoji) this.data = emoji.parseEmoji(this.data);
  for (var c; c = this.data[this.i]; this.i++) {
    this.state(c);}
  if (this.state == this.Text) this.setText();
  while (this.STACK.length) {this.popNode(this.STACK.pop());}
  return this.DOM;
};
// 设置属性
MpHtmlParser.prototype.setAttr = function () {
  var name = this.attrName.toLowerCase(),
  val = this.attrVal;
  if (cfg.boolAttrs[name]) this.attrs[name] = 'T';else
  if (val) {
    if (name == 'src' || name == 'data-src' && !this.attrs.src) this.attrs.src = this.getUrl(this.decode(val, 'amp'));else
    if (name == 'href' || name == 'style') this.attrs[name] = this.decode(val, 'amp');else
    if (name.substr(0, 5) != 'data-') this.attrs[name] = val;
  }
  this.attrVal = '';
  while (blankChar[this.data[this.i]]) {this.i++;}
  if (this.isClose()) this.setNode();else
  {
    this.start = this.i;
    this.state = this.AttrName;
  }
};
// 设置文本节点
MpHtmlParser.prototype.setText = function () {
  var back,text = this.section();
  if (!text) return;
  text = cfg.onText && cfg.onText(text, function () {return back = true;}) || text;
  if (back) {
    this.data = this.data.substr(0, this.start) + text + this.data.substr(this.i);
    var j = this.start + text.length;
    for (this.i = this.start; this.i < j; this.i++) {this.state(this.data[this.i]);}
    return;
  }
  if (!this.pre) {
    // 合并空白符
    var flag,tmp = [];
    for (var i = text.length, c; c = text[--i];) {
      if (!blankChar[c]) {
        tmp.unshift(c);
        if (!flag) flag = 1;
      } else {
        if (tmp[0] != ' ') tmp.unshift(' ');
        if (c == '\n' && flag == void 0) flag = 0;
      }}
    if (flag == 0) return;
    text = tmp.join('');
  }
  this.siblings().push({
    type: 'text',
    text: this.decode(text) });

};
// 设置元素节点
MpHtmlParser.prototype.setNode = function () {
  var node = {
    name: this.tagName.toLowerCase(),
    attrs: this.attrs },

  close = cfg.selfClosingTags[node.name];
  if (this.options.nodes.length) node.type = 'node';
  this.attrs = {};
  if (!cfg.ignoreTags[node.name]) {
    // 处理属性
    var attrs = node.attrs,
    style = this.CssHandler.match(node.name, attrs, node) + (attrs.style || ''),
    styleObj = {};
    if (attrs.id) {
      if (this.options.compress & 1) attrs.id = void 0;else
      if (this.options.useAnchor) this.bubble();
    }
    if (this.options.compress & 2 && attrs.class) attrs.class = void 0;
    switch (node.name) {
      case 'a':
      case 'ad':


        this.bubble();
        break;
      case 'font':
        if (attrs.color) {
          styleObj['color'] = attrs.color;
          attrs.color = void 0;
        }
        if (attrs.face) {
          styleObj['font-family'] = attrs.face;
          attrs.face = void 0;
        }
        if (attrs.size) {
          var size = parseInt(attrs.size);
          if (size < 1) size = 1;else
          if (size > 7) size = 7;
          var map = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'];
          styleObj['font-size'] = map[size - 1];
          attrs.size = void 0;
        }
        break;
      case 'embed':

        var src = node.attrs.src || '',
        type = node.attrs.type || '';
        if (type.includes('video') || src.includes('.mp4') || src.includes('.3gp') || src.includes('.m3u8'))
        node.name = 'video';else
        if (type.includes('audio') || src.includes('.m4a') || src.includes('.wav') || src.includes('.mp3') || src.includes(
        '.aac'))
        node.name = 'audio';else
        break;
        if (node.attrs.autostart)
        node.attrs.autoplay = 'T';
        node.attrs.controls = 'T';





      case 'video':
      case 'audio':
        if (!attrs.id) attrs.id = node.name + ++this["".concat(node.name, "Num")];else
        this["".concat(node.name, "Num")]++;
        if (node.name == 'video') {
          if (this.videoNum > 3)
          node.lazyLoad = 1;
          if (attrs.width) {
            styleObj.width = parseFloat(attrs.width) + (attrs.width.includes('%') ? '%' : 'px');
            attrs.width = void 0;
          }
          if (attrs.height) {
            styleObj.height = parseFloat(attrs.height) + (attrs.height.includes('%') ? '%' : 'px');
            attrs.height = void 0;
          }
        }
        if (!attrs.controls && !attrs.autoplay) attrs.controls = 'T';
        attrs.source = [];
        if (attrs.src) {
          attrs.source.push(attrs.src);
          attrs.src = void 0;
        }
        this.bubble();
        break;
      case 'td':
      case 'th':
        if (attrs.colspan || attrs.rowspan)
        for (var k = this.STACK.length, item; item = this.STACK[--k];) {
          if (item.name == 'table') {
            item.flag = 1;
            break;
          }}}

    if (attrs.align) {
      if (node.name == 'table') {
        if (attrs.align == 'center') styleObj['margin-inline-start'] = styleObj['margin-inline-end'] = 'auto';else
        styleObj['float'] = attrs.align;
      } else styleObj['text-align'] = attrs.align;
      attrs.align = void 0;
    }
    // 压缩 style
    var styles = style.split(';');
    style = '';
    for (var i = 0, len = styles.length; i < len; i++) {
      var info = styles[i].split(':');
      if (info.length < 2) continue;
      var _key = info[0].trim().toLowerCase(),
      _value = info.slice(1).join(':').trim();
      if (_value[0] == '-' || _value.includes('safe'))
      style += ";".concat(_key, ":").concat(_value);else
      if (!styleObj[_key] || _value.includes('import') || !styleObj[_key].includes('import'))
      styleObj[_key] = _value;
    }
    if (node.name == 'img') {
      if (attrs.src && !attrs.ignore) {
        if (this.bubble())
        attrs.i = (this.imgNum++).toString();else
        attrs.ignore = 'T';
      }
      if (attrs.ignore) {
        style += ';-webkit-touch-callout:none';
        styleObj['max-width'] = '100%';
      }
      var width;
      if (styleObj.width) width = styleObj.width;else
      if (attrs.width) width = attrs.width.includes('%') ? attrs.width : parseFloat(attrs.width) + 'px';
      if (width) {
        styleObj.width = width;
        attrs.width = '100%';
        if (parseInt(width) > windowWidth) {
          styleObj.height = '';
          if (attrs.height) attrs.height = void 0;
        }
      }
      if (styleObj.height) {
        attrs.height = styleObj.height;
        styleObj.height = '';
      } else if (attrs.height && !attrs.height.includes('%'))
      attrs.height = parseFloat(attrs.height) + 'px';
    }
    for (var key in styleObj) {
      var value = styleObj[key];
      if (!value) continue;
      if (key.includes('flex') || key == 'order' || key == 'self-align') node.c = 1;
      // 填充链接
      if (value.includes('url')) {
        var j = value.indexOf('(');
        if (j++ != -1) {
          while (value[j] == '"' || value[j] == "'" || blankChar[value[j]]) {j++;}
          value = value.substr(0, j) + this.getUrl(value.substr(j));
        }
      }
      // 转换 rpx
      else if (value.includes('rpx'))
        value = value.replace(/[0-9.]+\s*rpx/g, function ($) {return parseFloat($) * windowWidth / 750 + 'px';});else
        if (key == 'white-space' && value.includes('pre') && !close)
        this.pre = node.pre = true;
      style += ";".concat(key, ":").concat(value);
    }
    style = style.substr(1);
    if (style) attrs.style = style;
    if (!close) {
      node.children = [];
      if (node.name == 'pre' && cfg.highlight) {
        this.remove(node);
        this.pre = node.pre = true;
      }
      this.siblings().push(node);
      this.STACK.push(node);
    } else if (!cfg.filter || cfg.filter(node, this) != false)
    this.siblings().push(node);
  } else {
    if (!close) this.remove(node);else
    if (node.name == 'source') {
      var parent = this.parent();
      if (parent && (parent.name == 'video' || parent.name == 'audio') && node.attrs.src)
      parent.attrs.source.push(node.attrs.src);
    } else if (node.name == 'base' && !this.domain) this.domain = node.attrs.href;
  }
  if (this.data[this.i] == '/') this.i++;
  this.start = this.i + 1;
  this.state = this.Text;
};
// 移除标签
MpHtmlParser.prototype.remove = function (node) {var _this2 = this;
  var name = node.name,
  j = this.i;
  // 处理 svg
  var handleSvg = function handleSvg() {
    var src = _this2.data.substring(j, _this2.i + 1);
    node.attrs.xmlns = 'http://www.w3.org/2000/svg';
    for (var key in node.attrs) {
      if (key == 'viewbox') src = " viewBox=\"".concat(node.attrs.viewbox, "\"") + src;else
      if (key != 'style') src = " ".concat(key, "=\"").concat(node.attrs[key], "\"") + src;
    }
    src = '<svg' + src;
    var parent = _this2.parent();
    if (node.attrs.width == '100%' && parent && (parent.attrs.style || '').includes('inline'))
    parent.attrs.style = 'width:300px;max-width:100%;' + parent.attrs.style;
    _this2.siblings().push({
      name: 'img',
      attrs: {
        src: 'data:image/svg+xml;utf8,' + src.replace(/#/g, '%23'),
        style: node.attrs.style,
        ignore: 'T' } });


  };
  if (node.name == 'svg' && this.data[j] == '/') return handleSvg(this.i++);
  while (1) {
    if ((this.i = this.data.indexOf('</', this.i + 1)) == -1) {
      if (name == 'pre' || name == 'svg') this.i = j;else
      this.i = this.data.length;
      return;
    }
    this.start = this.i += 2;
    while (!blankChar[this.data[this.i]] && !this.isClose()) {this.i++;}
    if (this.section().toLowerCase() == name) {
      // 代码块高亮
      if (name == 'pre') {
        this.data = this.data.substr(0, j + 1) + cfg.highlight(this.data.substring(j + 1, this.i - 5), node.attrs) + this.data.
        substr(this.i - 5);
        return this.i = j;
      } else if (name == 'style')
      this.CssHandler.getStyle(this.data.substring(j + 1, this.i - 7));else
      if (name == 'title')
      this.DOM.title = this.data.substring(j + 1, this.i - 7);
      if ((this.i = this.data.indexOf('>', this.i)) == -1) this.i = this.data.length;
      if (name == 'svg') handleSvg();
      return;
    }
  }
};
// 节点出栈处理
MpHtmlParser.prototype.popNode = function (node) {
  // 空白符处理
  if (node.pre) {
    node.pre = this.pre = void 0;
    for (var i = this.STACK.length; i--;) {
      if (this.STACK[i].pre)
      this.pre = true;}
  }
  var siblings = this.siblings(),
  len = siblings.length,
  childs = node.children;
  if (node.name == 'head' || cfg.filter && cfg.filter(node, this) == false)
  return siblings.pop();
  var attrs = node.attrs;
  // 替换一些标签名
  if (cfg.blockTags[node.name]) node.name = 'div';else
  if (!cfg.trustTags[node.name]) node.name = 'span';
  // 处理列表
  if (node.c && (node.name == 'ul' || node.name == 'ol')) {
    if ((node.attrs.style || '').includes('list-style:none')) {
      for (var _i = 0, child; child = childs[_i++];) {
        if (child.name == 'li')
        child.name = 'div';}
    } else if (node.name == 'ul') {
      var floor = 1;
      for (var _i2 = this.STACK.length; _i2--;) {
        if (this.STACK[_i2].name == 'ul') floor++;}
      if (floor != 1)
      for (var _i3 = childs.length; _i3--;) {
        childs[_i3].floor = floor;}
    } else {
      for (var _i4 = 0, num = 1, _child; _child = childs[_i4++];) {
        if (_child.name == 'li') {
          _child.type = 'ol';
          _child.num = function (num, type) {
            if (type == 'a') return String.fromCharCode(97 + (num - 1) % 26);
            if (type == 'A') return String.fromCharCode(65 + (num - 1) % 26);
            if (type == 'i' || type == 'I') {
              num = (num - 1) % 99 + 1;
              var one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
              ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
              res = (ten[Math.floor(num / 10) - 1] || '') + (one[num % 10 - 1] || '');
              if (type == 'i') return res.toLowerCase();
              return res;
            }
            return num;
          }(num++, attrs.type) + '.';
        }}
    }
  }
  // 处理表格
  if (node.name == 'table') {
    var padding = parseFloat(attrs.cellpadding),
    spacing = parseFloat(attrs.cellspacing),
    border = parseFloat(attrs.border);
    if (node.c) {
      if (isNaN(padding)) padding = 2;
      if (isNaN(spacing)) spacing = 2;
    }
    if (border) attrs.style = "border:".concat(border, "px solid gray;").concat(attrs.style || '');
    if (node.flag && node.c) {
      // 有 colspan 或 rowspan 且含有链接的表格转为 grid 布局实现
      attrs.style = "".concat(attrs.style || '', ";").concat(spacing ? ";grid-gap:".concat(spacing, "px") : ';border-left:0;border-top:0');
      var row = 1,
      col = 1,
      colNum,
      trs = [],
      children = [],
      map = {};
      (function f(ns) {
        for (var i = 0; i < ns.length; i++) {
          if (ns[i].name == 'tr') trs.push(ns[i]);else
          f(ns[i].children || []);
        }
      })(node.children);
      for (var _i5 = 0; _i5 < trs.length; _i5++) {
        for (var j = 0, td; td = trs[_i5].children[j]; j++) {
          if (td.name == 'td' || td.name == 'th') {
            while (map[row + '.' + col]) {col++;}
            var cell = {
              name: 'div',
              c: 1,
              attrs: {
                style: (td.attrs.style || '') + (border ? ";border:".concat(border, "px solid gray") + (spacing ? '' :
                ';border-right:0;border-bottom:0') : '') + (padding ? ";padding:".concat(padding, "px") : '') },

              children: td.children };

            if (td.attrs.colspan) {
              cell.attrs.style += ';grid-column-start:' + col + ';grid-column-end:' + (col + parseInt(td.attrs.colspan));
              if (!td.attrs.rowspan) cell.attrs.style += ';grid-row-start:' + row + ';grid-row-end:' + (row + 1);
              col += parseInt(td.attrs.colspan) - 1;
            }
            if (td.attrs.rowspan) {
              cell.attrs.style += ';grid-row-start:' + row + ';grid-row-end:' + (row + parseInt(td.attrs.rowspan));
              if (!td.attrs.colspan) cell.attrs.style += ';grid-column-start:' + col + ';grid-column-end:' + (col + 1);
              for (var k = 1; k < td.attrs.rowspan; k++) {map[row + k + '.' + col] = 1;}
            }
            children.push(cell);
            col++;
          }
        }
        if (!colNum) {
          colNum = col - 1;
          attrs.style += ";grid-template-columns:repeat(".concat(colNum, ",auto)");
        }
        col = 1;
        row++;
      }
      node.children = children;
    } else {
      attrs.style = "border-spacing:".concat(spacing, "px;").concat(attrs.style || '');
      if (border || padding)
      (function f(ns) {
        for (var i = 0, n; n = ns[i]; i++) {
          if (n.name == 'th' || n.name == 'td') {
            if (border) n.attrs.style = "border:".concat(border, "px solid gray;").concat(n.attrs.style || '');
            if (padding) n.attrs.style = "padding:".concat(padding, "px;").concat(n.attrs.style || '');
          } else f(n.children || []);
        }
      })(childs);
    }
    if (this.options.autoscroll) {
      var table = Object.assign({}, node);
      node.name = 'div';
      node.attrs = {
        style: 'overflow:scroll' };

      node.children = [table];
    }
  }
  this.CssHandler.pop && this.CssHandler.pop(node);
  // 自动压缩
  if (node.name == 'div' && !Object.keys(attrs).length && childs.length == 1 && childs[0].name == 'div')
  siblings[len - 1] = childs[0];
};
// 状态机
MpHtmlParser.prototype.Text = function (c) {
  if (c == '<') {
    var next = this.data[this.i + 1],
    isLetter = function isLetter(c) {return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';};
    if (isLetter(next)) {
      this.setText();
      this.start = this.i + 1;
      this.state = this.TagName;
    } else if (next == '/') {
      this.setText();
      if (isLetter(this.data[++this.i + 1])) {
        this.start = this.i + 1;
        this.state = this.EndTag;
      } else this.Comment();
    } else if (next == '!' || next == '?') {
      this.setText();
      this.Comment();
    }
  }
};
MpHtmlParser.prototype.Comment = function () {
  var key;
  if (this.data.substring(this.i + 2, this.i + 4) == '--') key = '-->';else
  if (this.data.substring(this.i + 2, this.i + 9) == '[CDATA[') key = ']]>';else
  key = '>';
  if ((this.i = this.data.indexOf(key, this.i + 2)) == -1) this.i = this.data.length;else
  this.i += key.length - 1;
  this.start = this.i + 1;
  this.state = this.Text;
};
MpHtmlParser.prototype.TagName = function (c) {
  if (blankChar[c]) {
    this.tagName = this.section();
    while (blankChar[this.data[this.i]]) {this.i++;}
    if (this.isClose()) this.setNode();else
    {
      this.start = this.i;
      this.state = this.AttrName;
    }
  } else if (this.isClose()) {
    this.tagName = this.section();
    this.setNode();
  }
};
MpHtmlParser.prototype.AttrName = function (c) {
  if (c == '=' || blankChar[c] || this.isClose()) {
    this.attrName = this.section();
    if (blankChar[c])
    while (blankChar[this.data[++this.i]]) {;}
    if (this.data[this.i] == '=') {
      while (blankChar[this.data[++this.i]]) {;}
      this.start = this.i--;
      this.state = this.AttrValue;
    } else this.setAttr();
  }
};
MpHtmlParser.prototype.AttrValue = function (c) {
  if (c == '"' || c == "'") {
    this.start++;
    if ((this.i = this.data.indexOf(c, this.i + 1)) == -1) return this.i = this.data.length;
    this.attrVal = this.section();
    this.i++;
  } else {
    for (; !blankChar[this.data[this.i]] && !this.isClose(); this.i++) {;}
    this.attrVal = this.section();
  }
  this.setAttr();
};
MpHtmlParser.prototype.EndTag = function (c) {
  if (blankChar[c] || c == '>' || c == '/') {
    var name = this.section().toLowerCase();
    for (var i = this.STACK.length; i--;) {
      if (this.STACK[i].name == name) break;}
    if (i != -1) {
      var node;
      while ((node = this.STACK.pop()).name != name) {this.popNode(node);}
      this.popNode(node);
    } else if (name == 'p' || name == 'br')
    this.siblings().push({
      name: name,
      attrs: {} });

    this.i = this.data.indexOf('>', this.i);
    this.start = this.i + 1;
    if (this.i == -1) this.i = this.data.length;else
    this.state = this.Text;
  }
};
module.exports = MpHtmlParser;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

<<<<<<< HEAD
/***/ 349:
=======
/***/ 348:
>>>>>>> school
/*!***************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/components/u-parse/libs/config.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* 配置文件 */
var cfg = {
  // 出错占位图
  errorImg: null,
  // 过滤器函数
  filter: null,
  // 代码高亮函数
  highlight: null,
  // 文本处理函数
  onText: null,
  // 实体编码列表
  entities: {
    quot: '"',
    apos: "'",
    semi: ';',
    nbsp: '\xA0',
    ensp: "\u2002",
    emsp: "\u2003",
    ndash: '–',
    mdash: '—',
    middot: '·',
    lsquo: '‘',
    rsquo: '’',
    ldquo: '“',
    rdquo: '”',
    bull: '•',
    hellip: '…' },

  blankChar: makeMap(' ,\xA0,\t,\r,\n,\f'),
  boolAttrs: makeMap('allowfullscreen,autoplay,autostart,controls,ignore,loop,muted'),
  // 块级标签，将被转为 div
  blockTags: makeMap('address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section'),
  // 将被移除的标签
  ignoreTags: makeMap('area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr'),
  // 只能被 rich-text 显示的标签
  richOnlyTags: makeMap('a,colgroup,fieldset,legend'),
  // 自闭合的标签
  selfClosingTags: makeMap('area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr'),
  // 信任的标签
  trustTags: makeMap('a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video'),
  // 默认的标签样式
  userAgentStyles: {
    address: 'font-style:italic',
    big: 'display:inline;font-size:1.2em',
    blockquote: 'background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px',
    caption: 'display:table-caption;text-align:center',
    center: 'text-align:center',
    cite: 'font-style:italic',
    dd: 'margin-left:40px',
    mark: 'background-color:yellow',
    pre: 'font-family:monospace;white-space:pre;overflow:scroll',
    s: 'text-decoration:line-through',
    small: 'display:inline;font-size:0.8em',
    u: 'text-decoration:underline' } };



function makeMap(str) {
  var map = Object.create(null),
  list = str.split(',');
  for (var i = list.length; i--;) {
    map[list[i]] = true;}
  return map;
}


if (wx.canIUse('editor')) {
  cfg.blockTags.pre = void 0;
  cfg.ignoreTags.rp = true;
  Object.assign(cfg.richOnlyTags, makeMap('bdi,bdo,caption,rt,ruby'));
  Object.assign(cfg.trustTags, makeMap('bdi,bdo,caption,pre,rt,ruby'));
}







module.exports = cfg;

/***/ }),

<<<<<<< HEAD
/***/ 35:
/*!**********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/queryParams.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 对象转url参数
                                                                                                      * @param {*} data,对象
                                                                                                      * @param {*} isPrefix,是否自动加上"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),

/***/ 350:
/*!*******************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/components/u-parse/libs/CssHandler.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cfg = __webpack_require__(/*! ./config.js */ 349),
=======
/***/ 349:
/*!*******************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/components/u-parse/libs/CssHandler.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cfg = __webpack_require__(/*! ./config.js */ 348),
>>>>>>> school
isLetter = function isLetter(c) {return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';};

function CssHandler(tagStyle) {
  var styles = Object.assign(Object.create(null), cfg.userAgentStyles);
  for (var item in tagStyle) {
    styles[item] = (styles[item] ? styles[item] + ';' : '') + tagStyle[item];}
  this.styles = styles;
}
CssHandler.prototype.getStyle = function (data) {
  this.styles = new parser(data, this.styles).parse();
};
CssHandler.prototype.match = function (name, attrs) {
  var tmp,matched = (tmp = this.styles[name]) ? tmp + ';' : '';
  if (attrs.class) {
    var items = attrs.class.split(' ');
    for (var i = 0, item; item = items[i]; i++) {
      if (tmp = this.styles['.' + item])
      matched += tmp + ';';}
  }
  if (tmp = this.styles['#' + attrs.id])
  matched += tmp + ';';
  return matched;
};
module.exports = CssHandler;

function parser(data, init) {
  this.data = data;
  this.floor = 0;
  this.i = 0;
  this.list = [];
  this.res = init;
  this.state = this.Space;
}
parser.prototype.parse = function () {
  for (var c; c = this.data[this.i]; this.i++) {
    this.state(c);}
  return this.res;
};
parser.prototype.section = function () {
  return this.data.substring(this.start, this.i);
};
// 状态机
parser.prototype.Space = function (c) {
  if (c == '.' || c == '#' || isLetter(c)) {
    this.start = this.i;
    this.state = this.Name;
  } else if (c == '/' && this.data[this.i + 1] == '*')
  this.Comment();else
  if (!cfg.blankChar[c] && c != ';')
  this.state = this.Ignore;
};
parser.prototype.Comment = function () {
  this.i = this.data.indexOf('*/', this.i) + 1;
  if (!this.i) this.i = this.data.length;
  this.state = this.Space;
};
parser.prototype.Ignore = function (c) {
  if (c == '{') this.floor++;else
  if (c == '}' && ! --this.floor) {
    this.list = [];
    this.state = this.Space;
  }
};
parser.prototype.Name = function (c) {
  if (cfg.blankChar[c]) {
    this.list.push(this.section());
    this.state = this.NameSpace;
  } else if (c == '{') {
    this.list.push(this.section());
    this.Content();
  } else if (c == ',') {
    this.list.push(this.section());
    this.Comma();
  } else if (!isLetter(c) && (c < '0' || c > '9') && c != '-' && c != '_')
  this.state = this.Ignore;
};
parser.prototype.NameSpace = function (c) {
  if (c == '{') this.Content();else
  if (c == ',') this.Comma();else
  if (!cfg.blankChar[c]) this.state = this.Ignore;
};
parser.prototype.Comma = function () {
  while (cfg.blankChar[this.data[++this.i]]) {;}
  if (this.data[this.i] == '{') this.Content();else
  {
    this.start = this.i--;
    this.state = this.Name;
  }
};
parser.prototype.Content = function () {
  this.start = ++this.i;
  if ((this.i = this.data.indexOf('}', this.i)) == -1) this.i = this.data.length;
  var content = this.section();
  for (var i = 0, item; item = this.list[i++];) {
    if (this.res[item]) this.res[item] += ';' + content;else
    this.res[item] = content;}
  this.list = [];
  this.state = this.Space;
};

/***/ }),

/***/ 36:
/*!****************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/route.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 14;break;}_context.next = 10;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 10:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 15;break;case 14:

                this.openPage(mergeConfig);case 15:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 37:
/*!*********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/timeFormat.js ***!
  \*********************************************************************************/
<<<<<<< HEAD
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),

/***/ 372:
/*!****************************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-file-picker/components/uni-file-picker/choose-and-upload-file.js ***!
  \****************************************************************************************************************/
=======
>>>>>>> school
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),

/***/ 371:
/*!****************************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-file-picker/components/uni-file-picker/choose-and-upload-file.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, uniCloud) {Object.defineProperty(exports, "__esModule", { value: true });exports.chooseAndUploadFile = chooseAndUploadFile;exports.uploadCloudFiles = uploadCloudFiles;

var ERR_MSG_OK = 'chooseAndUploadFile:ok';
var ERR_MSG_FAIL = 'chooseAndUploadFile:fail';

function chooseImage(opts) {var

  count =



  opts.count,_opts$sizeType = opts.sizeType,sizeType = _opts$sizeType === void 0 ? ['original', 'compressed'] : _opts$sizeType,_opts$sourceType = opts.sourceType,sourceType = _opts$sourceType === void 0 ? ['album', 'camera'] : _opts$sourceType,extension = opts.extension;
  return new Promise(function (resolve, reject) {
    uni.chooseImage({
      count: count,
      sizeType: sizeType,
      sourceType: sourceType,
      extension: extension,
      success: function success(res) {
        resolve(normalizeChooseAndUploadFileRes(res, 'image'));
      },
      fail: function fail(res) {
        reject({
          errMsg: res.errMsg.replace('chooseImage:fail', ERR_MSG_FAIL) });

      } });

  });
}

function chooseVideo(opts) {var

  camera =




  opts.camera,compressed = opts.compressed,maxDuration = opts.maxDuration,_opts$sourceType2 = opts.sourceType,sourceType = _opts$sourceType2 === void 0 ? ['album', 'camera'] : _opts$sourceType2,extension = opts.extension;
  return new Promise(function (resolve, reject) {
    uni.chooseVideo({
      camera: camera,
      compressed: compressed,
      maxDuration: maxDuration,
      sourceType: sourceType,
      extension: extension,
      success: function success(res) {var

        tempFilePath =




        res.tempFilePath,duration = res.duration,size = res.size,height = res.height,width = res.width;
        resolve(normalizeChooseAndUploadFileRes({
          errMsg: 'chooseVideo:ok',
          tempFilePaths: [tempFilePath],
          tempFiles: [
          {
            name: res.tempFile && res.tempFile.name || '',
            path: tempFilePath,
            size: size,
            type: res.tempFile && res.tempFile.type || '',
            width: width,
            height: height,
            duration: duration,
            fileType: 'video',
            cloudPath: '' }] },

        'video'));
      },
      fail: function fail(res) {
        reject({
          errMsg: res.errMsg.replace('chooseVideo:fail', ERR_MSG_FAIL) });

      } });

  });
}

function chooseAll(opts) {var

  count =

  opts.count,extension = opts.extension;
  return new Promise(function (resolve, reject) {
    var chooseFile = uni.chooseFile;
    if (typeof wx !== 'undefined' &&
    typeof wx.chooseMessageFile === 'function') {
      chooseFile = wx.chooseMessageFile;
    }
    if (typeof chooseFile !== 'function') {
      return reject({
        errMsg: ERR_MSG_FAIL + ' 请指定 type 类型，该平台仅支持选择 image 或 video。' });

    }
    chooseFile({
      type: 'all',
      count: count,
      extension: extension,
      success: function success(res) {
        resolve(normalizeChooseAndUploadFileRes(res));
      },
      fail: function fail(res) {
        reject({
          errMsg: res.errMsg.replace('chooseFile:fail', ERR_MSG_FAIL) });

      } });

  });
}

function normalizeChooseAndUploadFileRes(res, fileType) {
  res.tempFiles.forEach(function (item, index) {
    if (!item.name) {
      item.name = item.path.substring(item.path.lastIndexOf('/') + 1);
    }
    if (fileType) {
      item.fileType = fileType;
    }
    item.cloudPath =
    Date.now() + '_' + index + item.name.substring(item.name.lastIndexOf('.'));
  });
  if (!res.tempFilePaths) {
    res.tempFilePaths = res.tempFiles.map(function (file) {return file.path;});
  }
  return res;
}

function uploadCloudFiles(files) {var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;var _onUploadProgress = arguments.length > 2 ? arguments[2] : undefined;
  files = JSON.parse(JSON.stringify(files));
  var len = files.length;
  var count = 0;
  var self = this;
  return new Promise(function (resolve) {
    while (count < max) {
      next();
    }

    function next() {
      var cur = count++;
      if (cur >= len) {
        !files.find(function (item) {return !item.url && !item.errMsg;}) && resolve(files);
        return;
      }
      var fileItem = files[cur];
      var index = self.files.findIndex(function (v) {return v.uuid === fileItem.uuid;});
      fileItem.url = '';
      delete fileItem.errMsg;

      uniCloud.
      uploadFile({
        filePath: fileItem.path,
        cloudPath: fileItem.cloudPath,
        fileType: fileItem.fileType,
        onUploadProgress: function onUploadProgress(res) {
          res.index = index;
          _onUploadProgress && _onUploadProgress(res);
        } }).

      then(function (res) {
        fileItem.url = res.fileID;
        fileItem.index = index;
        if (cur < len) {
          next();
        }
      }).
      catch(function (res) {
        fileItem.errMsg = res.errMsg || res.message;
        fileItem.index = index;
        if (cur < len) {
          next();
        }
      });
    }
  });
}





function uploadFiles(choosePromise, _ref)


{var onChooseFile = _ref.onChooseFile,onUploadProgress = _ref.onUploadProgress;
  return choosePromise.
  then(function (res) {
    if (onChooseFile) {
      var customChooseRes = onChooseFile(res);
      if (typeof customChooseRes !== 'undefined') {
        return Promise.resolve(customChooseRes).then(function (chooseRes) {return typeof chooseRes === 'undefined' ?
          res : chooseRes;});
      }
    }
    return res;
  }).
  then(function (res) {
    if (res === false) {
      return {
        errMsg: ERR_MSG_OK,
        tempFilePaths: [],
        tempFiles: [] };

    }
    return res;
  });
}

function chooseAndUploadFile()

{var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: 'all' };
  if (opts.type === 'image') {
    return uploadFiles(chooseImage(opts), opts);
  } else
  if (opts.type === 'video') {
    return uploadFiles(chooseVideo(opts), opts);
  }
  return uploadFiles(chooseAll(opts), opts);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 6)["default"]))

/***/ }),

<<<<<<< HEAD
/***/ 373:
=======
/***/ 372:
>>>>>>> school
/*!***********************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-file-picker/components/uni-file-picker/utils.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.get_file_data = exports.get_file_info = exports.get_files_and_is_max = exports.get_extname = exports.get_file_ext = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 获取文件名和后缀
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {String} name
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */
var get_file_ext = function get_file_ext(name) {
  var last_len = name.lastIndexOf('.');
  var len = name.length;
  return {
    name: name.substring(0, last_len),
    ext: name.substring(last_len + 1, len) };

};

/**
    * 获取扩展名
    * @param {Array} fileExtname
    */exports.get_file_ext = get_file_ext;
var get_extname = function get_extname(fileExtname) {
  if (!Array.isArray(fileExtname)) {
    var extname = fileExtname.replace(/(\[|\])/g, '');
    return extname.split(',');
  } else {
    return fileExtname;
  }
  return [];
};

/**
    * 获取文件和检测是否可选
    */exports.get_extname = get_extname;
var get_files_and_is_max = function get_files_and_is_max(res, _extname) {
  var filePaths = [];
  var files = [];
  if (!_extname || _extname.length === 0) {
    return {
      filePaths: filePaths,
      files: files };

  }
  res.tempFiles.forEach(function (v) {
    var fileFullName = get_file_ext(v.name);
    var extname = fileFullName.ext.toLowerCase();
    if (_extname.indexOf(extname) !== -1) {
      files.push(v);
      filePaths.push(v.path);
    }
  });
  if (files.length !== res.tempFiles.length) {
    uni.showToast({
      title: "\u5F53\u524D\u9009\u62E9\u4E86".concat(res.tempFiles.length, "\u4E2A\u6587\u4EF6 \uFF0C").concat(res.tempFiles.length - files.length, " \u4E2A\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E"),
      icon: 'none',
      duration: 5000 });

  }

  return {
    filePaths: filePaths,
    files: files };

};


/**
    * 获取图片信息
    * @param {Object} filepath
    */exports.get_files_and_is_max = get_files_and_is_max;
var get_file_info = function get_file_info(filepath) {
  return new Promise(function (resolve, reject) {
    uni.getImageInfo({
      src: filepath,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      } });

  });
};
/**
    * 获取封装数据
    */exports.get_file_info = get_file_info;
var get_file_data = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(files) {var type,fileFullName,extname,filedata,imageinfo,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:type = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'image';
            // 最终需要上传数据库的数据
            fileFullName = get_file_ext(files.name);
            extname = fileFullName.ext.toLowerCase();
            filedata = {
              name: files.name,
              uuid: files.uuid,
              extname: extname || '',
              cloudPath: files.cloudPath,
              fileType: files.fileType,
              url: files.path || files.path,
              size: files.size, //单位是字节
              image: {},
              path: files.path,
              video: {} };if (!(

            type === 'image')) {_context.next = 14;break;}_context.next = 7;return (
              get_file_info(files.path));case 7:imageinfo = _context.sent;
            delete filedata.video;
            filedata.image.width = imageinfo.width;
            filedata.image.height = imageinfo.height;
            filedata.image.location = imageinfo.path;_context.next = 15;break;case 14:

            delete filedata.image;case 15:return _context.abrupt("return",

            filedata);case 16:case "end":return _context.stop();}}}, _callee);}));return function get_file_data(_x) {return _ref.apply(this, arguments);};}();exports.get_file_data = get_file_data;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 38:
/*!*******************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/timeFrom.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * 时间戳转为多久之前
                                                                                                                                                                                                                                                                                          * @param String timestamp 时间戳
                                                                                                                                                                                                                                                                                          * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
                                                                                                                                                                                                                                                                                          * 如果为布尔值false，无论什么时间，都返回多久以前的格式
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));

  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),

/***/ 39:
/*!************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/colorGradient.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}


/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color) {var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else
  {
    return sColor;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),

/***/ 4:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"校园生活助手","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"校园生活助手","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"校园生活助手","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"校园生活助手","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent']).call(this.$scope, event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 40:
/*!***************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/guid.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),

/***/ 402:
/*!************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/components/uni-quick-login/i18n/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 403));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 404));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  en: _en.default,
  'zh-Hans': _zhHans.default };exports.default = _default;

/***/ }),

/***/ 403:
/*!***********************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/components/uni-quick-login/i18n/en.json ***!
  \***********************************************************************/
/*! exports provided: accountLogin, SMSLogin, wechatLogin, appleLogin, oneClickLogin, QQLogin, xiaomiLogin, getProviderFail, loginErr, chooseOtherLogin, weibo, noAgree, gotIt, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"accountLogin\":\"Account\",\"SMSLogin\":\"SMS\",\"wechatLogin\":\"wechat\",\"appleLogin\":\"Apple\",\"oneClickLogin\":\"One click login\",\"QQLogin\":\"QQ\",\"xiaomiLogin\":\"Xiaomi\",\"getProviderFail\":\"Failed to get service provider\",\"loginErr\":\"Login service initialization error\",\"chooseOtherLogin\":\"Click the third-party login\",\"weibo\":\"weibo\",\"noAgree\":\"You have not agreed to the privacy policy agreement\",\"gotIt\":\"got it\"}");

/***/ }),

/***/ 404:
/*!****************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/components/uni-quick-login/i18n/zh-Hans.json ***!
  \****************************************************************************/
/*! exports provided: accountLogin, SMSLogin, wechatLogin, appleLogin, oneClickLogin, QQLogin, xiaomiLogin, getProviderFail, loginErr, chooseOtherLogin, weibo, noAgree, gotIt, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"accountLogin\":\"账号登录\",\"SMSLogin\":\"短信验证码\",\"wechatLogin\":\"微信登录\",\"appleLogin\":\"苹果登录\",\"oneClickLogin\":\"一键登录\",\"QQLogin\":\"QQ登录\",\"xiaomiLogin\":\"小米登录\",\"getProviderFail\":\"获取服务供应商失败\",\"loginErr\":\"登录服务初始化错误\",\"chooseOtherLogin\":\"点击了第三方登录\",\"weibo\":\"微博\",\"noAgree\":\"你未同意隐私政策协议\",\"gotIt\":\"知道了\"}");

/***/ }),

/***/ 41:
/*!****************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/color.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),

/***/ 412:
/*!**************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-search-bar/components/uni-search-bar/i18n/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 413));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 414));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 415));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default };exports.default = _default;

/***/ }),

/***/ 413:
/*!*************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-search-bar/components/uni-search-bar/i18n/en.json ***!
  \*************************************************************************************************/
/*! exports provided: uni-search-bar.cancel, uni-search-bar.placeholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-search-bar.cancel\":\"cancel\",\"uni-search-bar.placeholder\":\"Search enter content\"}");

/***/ }),

<<<<<<< HEAD
/***/ 414:
/*!******************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-search-bar/components/uni-search-bar/i18n/zh-Hans.json ***!
  \******************************************************************************************************/
/*! exports provided: uni-search-bar.cancel, uni-search-bar.placeholder, default */
/***/ (function(module) {
=======
/***/ 41:
/*!****************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/color.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
>>>>>>> school

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

<<<<<<< HEAD
/***/ 415:
/*!******************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-search-bar/components/uni-search-bar/i18n/zh-Hant.json ***!
  \******************************************************************************************************/
/*! exports provided: uni-search-bar.cancel, uni-search-bar.placeholder, default */
/***/ (function(module) {
=======
  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",
>>>>>>> school

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),

<<<<<<< HEAD
/***/ 42:
/*!********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/type2icon.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),

/***/ 423:
/*!***********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \***********************************************************************************/
=======
/***/ 415:
/*!************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/components/uni-quick-login/i18n/index.js ***!
  \************************************************************************/
>>>>>>> school
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 416));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 417));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  en: _en.default,
  'zh-Hans': _zhHans.default };exports.default = _default;

/***/ }),

/***/ 416:
/*!***********************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/components/uni-quick-login/i18n/en.json ***!
  \***********************************************************************/
/*! exports provided: accountLogin, SMSLogin, wechatLogin, appleLogin, oneClickLogin, QQLogin, xiaomiLogin, getProviderFail, loginErr, chooseOtherLogin, weibo, noAgree, gotIt, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"accountLogin\":\"Account\",\"SMSLogin\":\"SMS\",\"wechatLogin\":\"wechat\",\"appleLogin\":\"Apple\",\"oneClickLogin\":\"One click login\",\"QQLogin\":\"QQ\",\"xiaomiLogin\":\"Xiaomi\",\"getProviderFail\":\"Failed to get service provider\",\"loginErr\":\"Login service initialization error\",\"chooseOtherLogin\":\"Click the third-party login\",\"weibo\":\"weibo\",\"noAgree\":\"You have not agreed to the privacy policy agreement\",\"gotIt\":\"got it\"}");

/***/ }),

/***/ 417:
/*!****************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/components/uni-quick-login/i18n/zh-Hans.json ***!
  \****************************************************************************/
/*! exports provided: accountLogin, SMSLogin, wechatLogin, appleLogin, oneClickLogin, QQLogin, xiaomiLogin, getProviderFail, loginErr, chooseOtherLogin, weibo, noAgree, gotIt, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"accountLogin\":\"账号登录\",\"SMSLogin\":\"短信验证码\",\"wechatLogin\":\"微信登录\",\"appleLogin\":\"苹果登录\",\"oneClickLogin\":\"一键登录\",\"QQLogin\":\"QQ登录\",\"xiaomiLogin\":\"小米登录\",\"getProviderFail\":\"获取服务供应商失败\",\"loginErr\":\"登录服务初始化错误\",\"chooseOtherLogin\":\"点击了第三方登录\",\"weibo\":\"微博\",\"noAgree\":\"你未同意隐私政策协议\",\"gotIt\":\"知道了\"}");

/***/ }),

/***/ 42:
/*!********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/type2icon.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),

/***/ 425:
/*!**************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-search-bar/components/uni-search-bar/i18n/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 426));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 427));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 428));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default };exports.default = _default;

/***/ }),

/***/ 426:
/*!*************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-search-bar/components/uni-search-bar/i18n/en.json ***!
  \*************************************************************************************************/
/*! exports provided: uni-search-bar.cancel, uni-search-bar.placeholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-search-bar.cancel\":\"cancel\",\"uni-search-bar.placeholder\":\"Search enter content\"}");

/***/ }),

/***/ 427:
/*!******************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-search-bar/components/uni-search-bar/i18n/zh-Hans.json ***!
  \******************************************************************************************************/
/*! exports provided: uni-search-bar.cancel, uni-search-bar.placeholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-search-bar.cancel\":\"cancel\",\"uni-search-bar.placeholder\":\"请输入搜索内容\"}");

/***/ }),

/***/ 428:
/*!******************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-search-bar/components/uni-search-bar/i18n/zh-Hant.json ***!
  \******************************************************************************************************/
/*! exports provided: uni-search-bar.cancel, uni-search-bar.placeholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-search-bar.cancel\":\"cancel\",\"uni-search-bar.placeholder\":\"請輸入搜索內容\"}");

/***/ }),

/***/ 43:
/*!**********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/randomArray.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),

/***/ 436:
/*!***********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "id": "2852637",
  "name": "uniui图标库",
  "font_family": "uniicons",
  "css_prefix_text": "uniui-",
  "description": "",
  "glyphs": [
  {
    "icon_id": "25027049",
    "name": "yanse",
    "font_class": "color",
    "unicode": "e6cf",
    "unicode_decimal": 59087 },

  {
    "icon_id": "25027048",
    "name": "wallet",
    "font_class": "wallet",
    "unicode": "e6b1",
    "unicode_decimal": 59057 },

  {
    "icon_id": "25015720",
    "name": "settings-filled",
    "font_class": "settings-filled",
    "unicode": "e6ce",
    "unicode_decimal": 59086 },

  {
    "icon_id": "25015434",
    "name": "shimingrenzheng-filled",
    "font_class": "auth-filled",
    "unicode": "e6cc",
    "unicode_decimal": 59084 },

  {
    "icon_id": "24934246",
    "name": "shop-filled",
    "font_class": "shop-filled",
    "unicode": "e6cd",
    "unicode_decimal": 59085 },

  {
    "icon_id": "24934159",
    "name": "staff-filled-01",
    "font_class": "staff-filled",
    "unicode": "e6cb",
    "unicode_decimal": 59083 },

  {
    "icon_id": "24932461",
    "name": "VIP-filled",
    "font_class": "vip-filled",
    "unicode": "e6c6",
    "unicode_decimal": 59078 },

  {
    "icon_id": "24932462",
    "name": "plus_circle_fill",
    "font_class": "plus-filled",
    "unicode": "e6c7",
    "unicode_decimal": 59079 },

  {
    "icon_id": "24932463",
    "name": "folder_add-filled",
    "font_class": "folder-add-filled",
    "unicode": "e6c8",
    "unicode_decimal": 59080 },

  {
    "icon_id": "24932464",
    "name": "yanse-filled",
    "font_class": "color-filled",
    "unicode": "e6c9",
    "unicode_decimal": 59081 },

  {
    "icon_id": "24932465",
    "name": "tune-filled",
    "font_class": "tune-filled",
    "unicode": "e6ca",
    "unicode_decimal": 59082 },

  {
    "icon_id": "24932455",
    "name": "a-rilidaka-filled",
    "font_class": "calendar-filled",
    "unicode": "e6c0",
    "unicode_decimal": 59072 },

  {
    "icon_id": "24932456",
    "name": "notification-filled",
    "font_class": "notification-filled",
    "unicode": "e6c1",
    "unicode_decimal": 59073 },

  {
    "icon_id": "24932457",
    "name": "wallet-filled",
    "font_class": "wallet-filled",
    "unicode": "e6c2",
    "unicode_decimal": 59074 },

  {
    "icon_id": "24932458",
    "name": "paihangbang-filled",
    "font_class": "medal-filled",
    "unicode": "e6c3",
    "unicode_decimal": 59075 },

  {
    "icon_id": "24932459",
    "name": "gift-filled",
    "font_class": "gift-filled",
    "unicode": "e6c4",
    "unicode_decimal": 59076 },

  {
    "icon_id": "24932460",
    "name": "fire-filled",
    "font_class": "fire-filled",
    "unicode": "e6c5",
    "unicode_decimal": 59077 },

  {
    "icon_id": "24928001",
    "name": "refreshempty",
    "font_class": "refreshempty",
    "unicode": "e6bf",
    "unicode_decimal": 59071 },

  {
    "icon_id": "24926853",
    "name": "location-ellipse",
    "font_class": "location-filled",
    "unicode": "e6af",
    "unicode_decimal": 59055 },

  {
    "icon_id": "24926735",
    "name": "person-filled",
    "font_class": "person-filled",
    "unicode": "e69d",
    "unicode_decimal": 59037 },

  {
    "icon_id": "24926703",
    "name": "personadd-filled",
    "font_class": "personadd-filled",
    "unicode": "e698",
    "unicode_decimal": 59032 },

  {
    "icon_id": "24923351",
    "name": "back",
    "font_class": "back",
    "unicode": "e6b9",
    "unicode_decimal": 59065 },

  {
    "icon_id": "24923352",
    "name": "forward",
    "font_class": "forward",
    "unicode": "e6ba",
    "unicode_decimal": 59066 },

  {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrow-right",
    "unicode": "e6bb",
    "unicode_decimal": 59067 },

  {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrowthinright",
    "unicode": "e6bb",
    "unicode_decimal": 59067 },

  {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrow-left",
    "unicode": "e6bc",
    "unicode_decimal": 59068 },

  {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrowthinleft",
    "unicode": "e6bc",
    "unicode_decimal": 59068 },

  {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrow-up",
    "unicode": "e6bd",
    "unicode_decimal": 59069 },

  {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrowthinup",
    "unicode": "e6bd",
    "unicode_decimal": 59069 },

  {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrow-down",
    "unicode": "e6be",
    "unicode_decimal": 59070 },
  {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrowthindown",
    "unicode": "e6be",
    "unicode_decimal": 59070 },

  {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "bottom",
    "unicode": "e6b8",
    "unicode_decimal": 59064 },
  {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "arrowdown",
    "unicode": "e6b8",
    "unicode_decimal": 59064 },

  {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "right",
    "unicode": "e6b5",
    "unicode_decimal": 59061 },

  {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "arrowright",
    "unicode": "e6b5",
    "unicode_decimal": 59061 },

  {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "top",
    "unicode": "e6b6",
    "unicode_decimal": 59062 },

  {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "arrowup",
    "unicode": "e6b6",
    "unicode_decimal": 59062 },

  {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "left",
    "unicode": "e6b7",
    "unicode_decimal": 59063 },

  {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "arrowleft",
    "unicode": "e6b7",
    "unicode_decimal": 59063 },

  {
    "icon_id": "24923334",
    "name": "eye",
    "font_class": "eye",
    "unicode": "e651",
    "unicode_decimal": 58961 },

  {
    "icon_id": "24923335",
    "name": "eye-filled",
    "font_class": "eye-filled",
    "unicode": "e66a",
    "unicode_decimal": 58986 },

  {
    "icon_id": "24923336",
    "name": "eye-slash",
    "font_class": "eye-slash",
    "unicode": "e6b3",
    "unicode_decimal": 59059 },

  {
    "icon_id": "24923337",
    "name": "eye-slash-filled",
    "font_class": "eye-slash-filled",
    "unicode": "e6b4",
    "unicode_decimal": 59060 },

  {
    "icon_id": "24923305",
    "name": "info-filled",
    "font_class": "info-filled",
    "unicode": "e649",
    "unicode_decimal": 58953 },

  {
    "icon_id": "24923299",
    "name": "reload-01",
    "font_class": "reload",
    "unicode": "e6b2",
    "unicode_decimal": 59058 },

  {
    "icon_id": "24923195",
    "name": "mic_slash_fill",
    "font_class": "micoff-filled",
    "unicode": "e6b0",
    "unicode_decimal": 59056 },

  {
    "icon_id": "24923165",
    "name": "map-pin-ellipse",
    "font_class": "map-pin-ellipse",
    "unicode": "e6ac",
    "unicode_decimal": 59052 },

  {
    "icon_id": "24923166",
    "name": "map-pin",
    "font_class": "map-pin",
    "unicode": "e6ad",
    "unicode_decimal": 59053 },

  {
    "icon_id": "24923167",
    "name": "location",
    "font_class": "location",
    "unicode": "e6ae",
    "unicode_decimal": 59054 },

  {
    "icon_id": "24923064",
    "name": "starhalf",
    "font_class": "starhalf",
    "unicode": "e683",
    "unicode_decimal": 59011 },

  {
    "icon_id": "24923065",
    "name": "star",
    "font_class": "star",
    "unicode": "e688",
    "unicode_decimal": 59016 },

  {
    "icon_id": "24923066",
    "name": "star-filled",
    "font_class": "star-filled",
    "unicode": "e68f",
    "unicode_decimal": 59023 },

  {
    "icon_id": "24899646",
    "name": "a-rilidaka",
    "font_class": "calendar",
    "unicode": "e6a0",
    "unicode_decimal": 59040 },

  {
    "icon_id": "24899647",
    "name": "fire",
    "font_class": "fire",
    "unicode": "e6a1",
    "unicode_decimal": 59041 },

  {
    "icon_id": "24899648",
    "name": "paihangbang",
    "font_class": "medal",
    "unicode": "e6a2",
    "unicode_decimal": 59042 },

  {
    "icon_id": "24899649",
    "name": "font",
    "font_class": "font",
    "unicode": "e6a3",
    "unicode_decimal": 59043 },

  {
    "icon_id": "24899650",
    "name": "gift",
    "font_class": "gift",
    "unicode": "e6a4",
    "unicode_decimal": 59044 },

  {
    "icon_id": "24899651",
    "name": "link",
    "font_class": "link",
    "unicode": "e6a5",
    "unicode_decimal": 59045 },

  {
    "icon_id": "24899652",
    "name": "notification",
    "font_class": "notification",
    "unicode": "e6a6",
    "unicode_decimal": 59046 },

  {
    "icon_id": "24899653",
    "name": "staff",
    "font_class": "staff",
    "unicode": "e6a7",
    "unicode_decimal": 59047 },

  {
    "icon_id": "24899654",
    "name": "VIP",
    "font_class": "vip",
    "unicode": "e6a8",
    "unicode_decimal": 59048 },

  {
    "icon_id": "24899655",
    "name": "folder_add",
    "font_class": "folder-add",
    "unicode": "e6a9",
    "unicode_decimal": 59049 },

  {
    "icon_id": "24899656",
    "name": "tune",
    "font_class": "tune",
    "unicode": "e6aa",
    "unicode_decimal": 59050 },

  {
    "icon_id": "24899657",
    "name": "shimingrenzheng",
    "font_class": "auth",
    "unicode": "e6ab",
    "unicode_decimal": 59051 },

  {
    "icon_id": "24899565",
    "name": "person",
    "font_class": "person",
    "unicode": "e699",
    "unicode_decimal": 59033 },

  {
    "icon_id": "24899566",
    "name": "email-filled",
    "font_class": "email-filled",
    "unicode": "e69a",
    "unicode_decimal": 59034 },

  {
    "icon_id": "24899567",
    "name": "phone-filled",
    "font_class": "phone-filled",
    "unicode": "e69b",
    "unicode_decimal": 59035 },

  {
    "icon_id": "24899568",
    "name": "phone",
    "font_class": "phone",
    "unicode": "e69c",
    "unicode_decimal": 59036 },

  {
    "icon_id": "24899570",
    "name": "email",
    "font_class": "email",
    "unicode": "e69e",
    "unicode_decimal": 59038 },

  {
    "icon_id": "24899571",
    "name": "personadd",
    "font_class": "personadd",
    "unicode": "e69f",
    "unicode_decimal": 59039 },

  {
    "icon_id": "24899558",
    "name": "chatboxes-filled",
    "font_class": "chatboxes-filled",
    "unicode": "e692",
    "unicode_decimal": 59026 },

  {
    "icon_id": "24899559",
    "name": "contact",
    "font_class": "contact",
    "unicode": "e693",
    "unicode_decimal": 59027 },

  {
    "icon_id": "24899560",
    "name": "chatbubble-filled",
    "font_class": "chatbubble-filled",
    "unicode": "e694",
    "unicode_decimal": 59028 },

  {
    "icon_id": "24899561",
    "name": "contact-filled",
    "font_class": "contact-filled",
    "unicode": "e695",
    "unicode_decimal": 59029 },

  {
    "icon_id": "24899562",
    "name": "chatboxes",
    "font_class": "chatboxes",
    "unicode": "e696",
    "unicode_decimal": 59030 },

  {
    "icon_id": "24899563",
    "name": "chatbubble",
    "font_class": "chatbubble",
    "unicode": "e697",
    "unicode_decimal": 59031 },

  {
    "icon_id": "24881290",
    "name": "upload-filled",
    "font_class": "upload-filled",
    "unicode": "e68e",
    "unicode_decimal": 59022 },

  {
    "icon_id": "24881292",
    "name": "upload",
    "font_class": "upload",
    "unicode": "e690",
    "unicode_decimal": 59024 },

  {
    "icon_id": "24881293",
    "name": "weixin",
    "font_class": "weixin",
    "unicode": "e691",
    "unicode_decimal": 59025 },

  {
    "icon_id": "24881274",
    "name": "compose",
    "font_class": "compose",
    "unicode": "e67f",
    "unicode_decimal": 59007 },

  {
    "icon_id": "24881275",
    "name": "qq",
    "font_class": "qq",
    "unicode": "e680",
    "unicode_decimal": 59008 },

  {
    "icon_id": "24881276",
    "name": "download-filled",
    "font_class": "download-filled",
    "unicode": "e681",
    "unicode_decimal": 59009 },

  {
    "icon_id": "24881277",
    "name": "pengyouquan",
    "font_class": "pyq",
    "unicode": "e682",
    "unicode_decimal": 59010 },

  {
    "icon_id": "24881279",
    "name": "sound",
    "font_class": "sound",
    "unicode": "e684",
    "unicode_decimal": 59012 },

  {
    "icon_id": "24881280",
    "name": "trash-filled",
    "font_class": "trash-filled",
    "unicode": "e685",
    "unicode_decimal": 59013 },

  {
    "icon_id": "24881281",
    "name": "sound-filled",
    "font_class": "sound-filled",
    "unicode": "e686",
    "unicode_decimal": 59014 },

  {
    "icon_id": "24881282",
    "name": "trash",
    "font_class": "trash",
    "unicode": "e687",
    "unicode_decimal": 59015 },

  {
    "icon_id": "24881284",
    "name": "videocam-filled",
    "font_class": "videocam-filled",
    "unicode": "e689",
    "unicode_decimal": 59017 },

  {
    "icon_id": "24881285",
    "name": "spinner-cycle",
    "font_class": "spinner-cycle",
    "unicode": "e68a",
    "unicode_decimal": 59018 },

  {
    "icon_id": "24881286",
    "name": "weibo",
    "font_class": "weibo",
    "unicode": "e68b",
    "unicode_decimal": 59019 },

  {
    "icon_id": "24881288",
    "name": "videocam",
    "font_class": "videocam",
    "unicode": "e68c",
    "unicode_decimal": 59020 },

  {
    "icon_id": "24881289",
    "name": "download",
    "font_class": "download",
    "unicode": "e68d",
    "unicode_decimal": 59021 },

  {
    "icon_id": "24879601",
    "name": "help",
    "font_class": "help",
    "unicode": "e679",
    "unicode_decimal": 59001 },

  {
    "icon_id": "24879602",
    "name": "navigate-filled",
    "font_class": "navigate-filled",
    "unicode": "e67a",
    "unicode_decimal": 59002 },

  {
    "icon_id": "24879603",
    "name": "plusempty",
    "font_class": "plusempty",
    "unicode": "e67b",
    "unicode_decimal": 59003 },

  {
    "icon_id": "24879604",
    "name": "smallcircle",
    "font_class": "smallcircle",
    "unicode": "e67c",
    "unicode_decimal": 59004 },

  {
    "icon_id": "24879605",
    "name": "minus-filled",
    "font_class": "minus-filled",
    "unicode": "e67d",
    "unicode_decimal": 59005 },

  {
    "icon_id": "24879606",
    "name": "micoff",
    "font_class": "micoff",
    "unicode": "e67e",
    "unicode_decimal": 59006 },

  {
    "icon_id": "24879588",
    "name": "closeempty",
    "font_class": "closeempty",
    "unicode": "e66c",
    "unicode_decimal": 58988 },

  {
    "icon_id": "24879589",
    "name": "clear",
    "font_class": "clear",
    "unicode": "e66d",
    "unicode_decimal": 58989 },

  {
    "icon_id": "24879590",
    "name": "navigate",
    "font_class": "navigate",
    "unicode": "e66e",
    "unicode_decimal": 58990 },

  {
    "icon_id": "24879591",
    "name": "minus",
    "font_class": "minus",
    "unicode": "e66f",
    "unicode_decimal": 58991 },

  {
    "icon_id": "24879592",
    "name": "image",
    "font_class": "image",
    "unicode": "e670",
    "unicode_decimal": 58992 },

  {
    "icon_id": "24879593",
    "name": "mic",
    "font_class": "mic",
    "unicode": "e671",
    "unicode_decimal": 58993 },

  {
    "icon_id": "24879594",
    "name": "paperplane",
    "font_class": "paperplane",
    "unicode": "e672",
    "unicode_decimal": 58994 },

  {
    "icon_id": "24879595",
    "name": "close",
    "font_class": "close",
    "unicode": "e673",
    "unicode_decimal": 58995 },

  {
    "icon_id": "24879596",
    "name": "help-filled",
    "font_class": "help-filled",
    "unicode": "e674",
    "unicode_decimal": 58996 },

  {
    "icon_id": "24879597",
    "name": "plus-filled",
    "font_class": "paperplane-filled",
    "unicode": "e675",
    "unicode_decimal": 58997 },

  {
    "icon_id": "24879598",
    "name": "plus",
    "font_class": "plus",
    "unicode": "e676",
    "unicode_decimal": 58998 },

  {
    "icon_id": "24879599",
    "name": "mic-filled",
    "font_class": "mic-filled",
    "unicode": "e677",
    "unicode_decimal": 58999 },

  {
    "icon_id": "24879600",
    "name": "image-filled",
    "font_class": "image-filled",
    "unicode": "e678",
    "unicode_decimal": 59000 },

  {
    "icon_id": "24855900",
    "name": "locked-filled",
    "font_class": "locked-filled",
    "unicode": "e668",
    "unicode_decimal": 58984 },

  {
    "icon_id": "24855901",
    "name": "info",
    "font_class": "info",
    "unicode": "e669",
    "unicode_decimal": 58985 },

  {
    "icon_id": "24855903",
    "name": "locked",
    "font_class": "locked",
    "unicode": "e66b",
    "unicode_decimal": 58987 },

  {
    "icon_id": "24855884",
    "name": "camera-filled",
    "font_class": "camera-filled",
    "unicode": "e658",
    "unicode_decimal": 58968 },

  {
    "icon_id": "24855885",
    "name": "chat-filled",
    "font_class": "chat-filled",
    "unicode": "e659",
    "unicode_decimal": 58969 },

  {
    "icon_id": "24855886",
    "name": "camera",
    "font_class": "camera",
    "unicode": "e65a",
    "unicode_decimal": 58970 },

  {
    "icon_id": "24855887",
    "name": "circle",
    "font_class": "circle",
    "unicode": "e65b",
    "unicode_decimal": 58971 },

  {
    "icon_id": "24855888",
    "name": "checkmarkempty",
    "font_class": "checkmarkempty",
    "unicode": "e65c",
    "unicode_decimal": 58972 },

  {
    "icon_id": "24855889",
    "name": "chat",
    "font_class": "chat",
    "unicode": "e65d",
    "unicode_decimal": 58973 },

  {
    "icon_id": "24855890",
    "name": "circle-filled",
    "font_class": "circle-filled",
    "unicode": "e65e",
    "unicode_decimal": 58974 },

  {
    "icon_id": "24855891",
    "name": "flag",
    "font_class": "flag",
    "unicode": "e65f",
    "unicode_decimal": 58975 },

  {
    "icon_id": "24855892",
    "name": "flag-filled",
    "font_class": "flag-filled",
    "unicode": "e660",
    "unicode_decimal": 58976 },

  {
    "icon_id": "24855893",
    "name": "gear-filled",
    "font_class": "gear-filled",
    "unicode": "e661",
    "unicode_decimal": 58977 },

  {
    "icon_id": "24855894",
    "name": "home",
    "font_class": "home",
    "unicode": "e662",
    "unicode_decimal": 58978 },

  {
    "icon_id": "24855895",
    "name": "home-filled",
    "font_class": "home-filled",
    "unicode": "e663",
    "unicode_decimal": 58979 },

  {
    "icon_id": "24855896",
    "name": "gear",
    "font_class": "gear",
    "unicode": "e664",
    "unicode_decimal": 58980 },

  {
    "icon_id": "24855897",
    "name": "smallcircle-filled",
    "font_class": "smallcircle-filled",
    "unicode": "e665",
    "unicode_decimal": 58981 },

  {
    "icon_id": "24855898",
    "name": "map-filled",
    "font_class": "map-filled",
    "unicode": "e666",
    "unicode_decimal": 58982 },

  {
    "icon_id": "24855899",
    "name": "map",
    "font_class": "map",
    "unicode": "e667",
    "unicode_decimal": 58983 },

  {
    "icon_id": "24855825",
    "name": "refresh-filled",
    "font_class": "refresh-filled",
    "unicode": "e656",
    "unicode_decimal": 58966 },

  {
    "icon_id": "24855826",
    "name": "refresh",
    "font_class": "refresh",
    "unicode": "e657",
    "unicode_decimal": 58967 },

  {
    "icon_id": "24855808",
    "name": "cloud-upload",
    "font_class": "cloud-upload",
    "unicode": "e645",
    "unicode_decimal": 58949 },

  {
    "icon_id": "24855809",
    "name": "cloud-download-filled",
    "font_class": "cloud-download-filled",
    "unicode": "e646",
    "unicode_decimal": 58950 },

  {
    "icon_id": "24855810",
    "name": "cloud-download",
    "font_class": "cloud-download",
    "unicode": "e647",
    "unicode_decimal": 58951 },

  {
    "icon_id": "24855811",
    "name": "cloud-upload-filled",
    "font_class": "cloud-upload-filled",
    "unicode": "e648",
    "unicode_decimal": 58952 },

  {
    "icon_id": "24855813",
    "name": "redo",
    "font_class": "redo",
    "unicode": "e64a",
    "unicode_decimal": 58954 },

  {
    "icon_id": "24855814",
    "name": "images-filled",
    "font_class": "images-filled",
    "unicode": "e64b",
    "unicode_decimal": 58955 },

  {
    "icon_id": "24855815",
    "name": "undo-filled",
    "font_class": "undo-filled",
    "unicode": "e64c",
    "unicode_decimal": 58956 },

  {
    "icon_id": "24855816",
    "name": "more",
    "font_class": "more",
    "unicode": "e64d",
    "unicode_decimal": 58957 },

  {
    "icon_id": "24855817",
    "name": "more-filled",
    "font_class": "more-filled",
    "unicode": "e64e",
    "unicode_decimal": 58958 },

  {
    "icon_id": "24855818",
    "name": "undo",
    "font_class": "undo",
    "unicode": "e64f",
    "unicode_decimal": 58959 },

  {
    "icon_id": "24855819",
    "name": "images",
    "font_class": "images",
    "unicode": "e650",
    "unicode_decimal": 58960 },

  {
    "icon_id": "24855821",
    "name": "paperclip",
    "font_class": "paperclip",
    "unicode": "e652",
    "unicode_decimal": 58962 },

  {
    "icon_id": "24855822",
    "name": "settings",
    "font_class": "settings",
    "unicode": "e653",
    "unicode_decimal": 58963 },

  {
    "icon_id": "24855823",
    "name": "search",
    "font_class": "search",
    "unicode": "e654",
    "unicode_decimal": 58964 },

  {
    "icon_id": "24855824",
    "name": "redo-filled",
    "font_class": "redo-filled",
    "unicode": "e655",
    "unicode_decimal": 58965 },

  {
    "icon_id": "24841702",
    "name": "list",
    "font_class": "list",
    "unicode": "e644",
    "unicode_decimal": 58948 },

  {
    "icon_id": "24841489",
    "name": "mail-open-filled",
    "font_class": "mail-open-filled",
    "unicode": "e63a",
    "unicode_decimal": 58938 },

  {
    "icon_id": "24841491",
    "name": "hand-thumbsdown-filled",
    "font_class": "hand-down-filled",
    "unicode": "e63c",
    "unicode_decimal": 58940 },

  {
    "icon_id": "24841492",
    "name": "hand-thumbsdown",
    "font_class": "hand-down",
    "unicode": "e63d",
    "unicode_decimal": 58941 },

  {
    "icon_id": "24841493",
    "name": "hand-thumbsup-filled",
    "font_class": "hand-up-filled",
    "unicode": "e63e",
    "unicode_decimal": 58942 },

  {
    "icon_id": "24841494",
    "name": "hand-thumbsup",
    "font_class": "hand-up",
    "unicode": "e63f",
    "unicode_decimal": 58943 },

  {
    "icon_id": "24841496",
    "name": "heart-filled",
    "font_class": "heart-filled",
    "unicode": "e641",
    "unicode_decimal": 58945 },

  {
    "icon_id": "24841498",
    "name": "mail-open",
    "font_class": "mail-open",
    "unicode": "e643",
    "unicode_decimal": 58947 },

  {
    "icon_id": "24841488",
    "name": "heart",
    "font_class": "heart",
    "unicode": "e639",
    "unicode_decimal": 58937 },

  {
    "icon_id": "24839963",
    "name": "loop",
    "font_class": "loop",
    "unicode": "e633",
    "unicode_decimal": 58931 },

  {
    "icon_id": "24839866",
    "name": "pulldown",
    "font_class": "pulldown",
    "unicode": "e632",
    "unicode_decimal": 58930 },

  {
    "icon_id": "24813798",
    "name": "scan",
    "font_class": "scan",
    "unicode": "e62a",
    "unicode_decimal": 58922 },

  {
    "icon_id": "24813786",
    "name": "bars",
    "font_class": "bars",
    "unicode": "e627",
    "unicode_decimal": 58919 },

  {
    "icon_id": "24813788",
    "name": "cart-filled",
    "font_class": "cart-filled",
    "unicode": "e629",
    "unicode_decimal": 58921 },

  {
    "icon_id": "24813790",
    "name": "checkbox",
    "font_class": "checkbox",
    "unicode": "e62b",
    "unicode_decimal": 58923 },

  {
    "icon_id": "24813791",
    "name": "checkbox-filled",
    "font_class": "checkbox-filled",
    "unicode": "e62c",
    "unicode_decimal": 58924 },

  {
    "icon_id": "24813794",
    "name": "shop",
    "font_class": "shop",
    "unicode": "e62f",
    "unicode_decimal": 58927 },

  {
    "icon_id": "24813795",
    "name": "headphones",
    "font_class": "headphones",
    "unicode": "e630",
    "unicode_decimal": 58928 },

  {
    "icon_id": "24813796",
    "name": "cart",
    "font_class": "cart",
    "unicode": "e631",
    "unicode_decimal": 58929 }] };exports.default = _default;

/***/ }),

<<<<<<< HEAD
/***/ 43:
/*!**********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/randomArray.js ***!
  \**********************************************************************************/
=======
/***/ 44:
/*!******************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/addUnit.js ***!
  \******************************************************************************/
>>>>>>> school
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),

/***/ 431:
=======
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 34));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

/***/ 444:
>>>>>>> school
/*!************************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/components/i18n/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en.json */ 432);
var _en_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./en.json */ 432, 1);
/* harmony import */ var _es_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./es.json */ 433);
var _es_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./es.json */ 433, 1);
/* harmony import */ var _fr_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fr.json */ 434);
var _fr_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./fr.json */ 434, 1);
/* harmony import */ var _zh_Hans_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zh-Hans.json */ 435);
var _zh_Hans_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./zh-Hans.json */ 435, 1);
/* harmony import */ var _zh_Hant_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zh-Hant.json */ 436);
var _zh_Hant_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./zh-Hant.json */ 436, 1);
=======
/* harmony import */ var _en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en.json */ 445);
var _en_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./en.json */ 445, 1);
/* harmony import */ var _es_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./es.json */ 446);
var _es_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./es.json */ 446, 1);
/* harmony import */ var _fr_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fr.json */ 447);
var _fr_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./fr.json */ 447, 1);
/* harmony import */ var _zh_Hans_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zh-Hans.json */ 448);
var _zh_Hans_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./zh-Hans.json */ 448, 1);
/* harmony import */ var _zh_Hant_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zh-Hant.json */ 449);
var _zh_Hant_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./zh-Hant.json */ 449, 1);
>>>>>>> school





/* harmony default export */ __webpack_exports__["default"] = ({
  en: _en_json__WEBPACK_IMPORTED_MODULE_0__,
  es: _es_json__WEBPACK_IMPORTED_MODULE_1__,
  fr: _fr_json__WEBPACK_IMPORTED_MODULE_2__,
  'zh-Hans': _zh_Hans_json__WEBPACK_IMPORTED_MODULE_3__,
  'zh-Hant': _zh_Hant_json__WEBPACK_IMPORTED_MODULE_4__
});


/***/ }),

<<<<<<< HEAD
/***/ 432:
=======
/***/ 445:
>>>>>>> school
/*!***********************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/components/i18n/en.json ***!
  \***********************************************************************/
/*! exports provided: uniCloud.component.add.success, uniCloud.component.update.success, uniCloud.component.remove.showModal.title, uniCloud.component.remove.showModal.content, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uniCloud.component.add.success\":\"Success\",\"uniCloud.component.update.success\":\"Success\",\"uniCloud.component.remove.showModal.title\":\"Tips\",\"uniCloud.component.remove.showModal.content\":\"是否删除该数据\"}");

/***/ }),

<<<<<<< HEAD
/***/ 433:
=======
/***/ 446:
>>>>>>> school
/*!***********************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/components/i18n/es.json ***!
  \***********************************************************************/
/*! exports provided: uniCloud.component.add.success, uniCloud.component.update.success, uniCloud.component.remove.showModal.title, uniCloud.component.remove.showModal.content, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uniCloud.component.add.success\":\"新增成功\",\"uniCloud.component.update.success\":\"修改成功\",\"uniCloud.component.remove.showModal.title\":\"提示\",\"uniCloud.component.remove.showModal.content\":\"是否删除该数据\"}");

/***/ }),

<<<<<<< HEAD
/***/ 434:
=======
/***/ 447:
>>>>>>> school
/*!***********************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/components/i18n/fr.json ***!
  \***********************************************************************/
/*! exports provided: uniCloud.component.add.success, uniCloud.component.update.success, uniCloud.component.remove.showModal.title, uniCloud.component.remove.showModal.content, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uniCloud.component.add.success\":\"新增成功\",\"uniCloud.component.update.success\":\"修改成功\",\"uniCloud.component.remove.showModal.title\":\"提示\",\"uniCloud.component.remove.showModal.content\":\"是否删除该数据\"}");

/***/ }),

<<<<<<< HEAD
/***/ 435:
=======
/***/ 448:
>>>>>>> school
/*!****************************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/components/i18n/zh-Hans.json ***!
  \****************************************************************************/
/*! exports provided: uniCloud.component.add.success, uniCloud.component.update.success, uniCloud.component.remove.showModal.title, uniCloud.component.remove.showModal.content, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uniCloud.component.add.success\":\"新增成功\",\"uniCloud.component.update.success\":\"修改成功\",\"uniCloud.component.remove.showModal.title\":\"提示\",\"uniCloud.component.remove.showModal.content\":\"是否删除该数据\"}");

/***/ }),

<<<<<<< HEAD
/***/ 436:
=======
/***/ 449:
>>>>>>> school
/*!****************************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/components/i18n/zh-Hant.json ***!
  \****************************************************************************/
/*! exports provided: uniCloud.component.add.success, uniCloud.component.update.success, uniCloud.component.remove.showModal.title, uniCloud.component.remove.showModal.content, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uniCloud.component.add.success\":\"新增成功\",\"uniCloud.component.update.success\":\"修改成功\",\"uniCloud.component.remove.showModal.title\":\"提示\",\"uniCloud.component.remove.showModal.content\":\"是否刪除數據\"}");

/***/ }),

<<<<<<< HEAD
/***/ 44:
/*!******************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/addUnit.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 34));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

=======
>>>>>>> school
/***/ 45:
/*!*****************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/random.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),

/***/ 46:
/*!***************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/trim.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),

/***/ 47:
/*!****************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/toast.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

<<<<<<< HEAD
/***/ 477:
=======
/***/ 48:
/*!********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/getParent.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),

/***/ 49:
/*!******************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/$parent.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 490:
>>>>>>> school
/*!*******************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-sign-in/utils/ad.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} // ad.js
var ADType = {
  RewardedVideo: "RewardedVideo",
  FullScreenVideo: "FullScreenVideo" };var


AdHelper = /*#__PURE__*/function () {

  function AdHelper() {_classCallCheck(this, AdHelper);
    this._ads = {};
  }_createClass(AdHelper, [{ key: "load", value: function load(

    options, onload, onerror) {
      var ops = this._fixOldOptions(options);var

      adpid =
      ops.adpid;

      if (!adpid || this.isBusy(adpid)) {
        return;
      }

      this.get(ops).load(onload, onerror);
    } }, { key: "show", value: function show(

    options, onsuccess, onfail) {
      var ops = this._fixOldOptions(options);var

      adpid =
      ops.adpid;

      if (!adpid) {
        return;
      }

      uni.showLoading({
        mask: true });


      var ad = this.get(ops);

      ad.load(function () {
        uni.hideLoading();
        ad.show(function (e) {
          onsuccess && onsuccess(e);
        });
      }, function (err) {
        uni.hideLoading();
        onfail && onfail(err);
      });
    } }, { key: "isBusy", value: function isBusy(

    adpid) {
      return this._ads[adpid] && this._ads[adpid].isLoading;
    } }, { key: "get", value: function get(

    options) {var

      adpid =

      options.adpid,_options$singleton = options.singleton,singleton = _options$singleton === void 0 ? true : _options$singleton;
      if (singleton === false) {
        if (this._ads[adpid]) {
          this._ads[adpid].destroy();
          delete this._ads[adpid];
        }
      }
      delete options.singleton;
      if (!this._ads[adpid]) {
        this._ads[adpid] = this._createAdInstance(options);
      }

      return this._ads[adpid];
    } }, { key: "_createAdInstance", value: function _createAdInstance(

    options) {
      var adType = options.adType || ADType.RewardedVideo;
      delete options.adType;

      var ad = null;
      if (adType === ADType.RewardedVideo) {
        ad = new RewardedVideo(options);
      } else if (adType === ADType.FullScreenVideo) {
        ad = new FullScreenVideo(options);
      }

      return ad;
    } }, { key: "_fixOldOptions", value: function _fixOldOptions(

    options) {
      return typeof options === "string" ? {
        adpid: options } :
      options;
    } }]);return AdHelper;}();


var EXPIRED_TIME = 1000 * 60 * 30;
var ProviderType = {
  CSJ: 'csj',
  GDT: 'gdt' };


var RETRY_COUNT = 1;var

AdBase = /*#__PURE__*/function () {
  function AdBase(adInstance) {var _this = this;var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};_classCallCheck(this, AdBase);
    this._isLoad = false;
    this._isLoading = false;
    this._lastLoadTime = 0;
    this._lastError = null;
    this._retryCount = 0;

    this._loadCallback = null;
    this._closeCallback = null;
    this._errorCallback = null;

    var ad = this._ad = adInstance;
    ad.onLoad(function (e) {
      _this._isLoading = false;
      _this._isLoad = true;
      _this._lastLoadTime = Date.now();

      _this.onLoad();
    });
    ad.onClose(function (e) {
      _this._isLoad = false;
      _this.onClose(e);
    });
    ad.onVerify && ad.onVerify(function (e) {
      // e.isValid
    });
    ad.onError(function (_ref)


    {var code = _ref.code,message = _ref.message;
      _this._isLoading = false;
      var data = {
        code: code,
        errMsg: message };


      if (code === -5008) {
        _this._loadAd();
        return;
      }

      if (_this._retryCount < RETRY_COUNT) {
        _this._retryCount += 1;
        _this._loadAd();
        return;
      }

      _this._lastError = data;
      _this.onError(data);
    });
  }_createClass(AdBase, [{ key: "getProvider", value: function getProvider()









    {
      return this._ad.getProvider();
    } }, { key: "load", value: function load(

    onload, onerror) {
      this._loadCallback = onload;
      this._errorCallback = onerror;

      if (this._isLoading) {
        return;
      }

      if (this._isLoad) {
        this.onLoad();
        return;
      }

      this._retryCount = 0;

      this._loadAd();
    } }, { key: "show", value: function show(

    onclose) {
      this._closeCallback = onclose;

      if (this._isLoading || !this._isLoad) {
        return;
      }

      if (this._lastError !== null) {
        this.onError(this._lastError);
        return;
      }

      var provider = this.getProvider();
      if (provider === ProviderType.CSJ && this.isExpired) {
        this._loadAd();
        return;
      }

      this._ad.show();
    } }, { key: "onLoad", value: function onLoad(

    e) {
      if (this._loadCallback != null) {
        this._loadCallback();
      }
    } }, { key: "onClose", value: function onClose(

    e) {
      if (this._closeCallback != null) {
        this._closeCallback({
          isEnded: e.isEnded });

      }
    } }, { key: "onError", value: function onError(

    e) {
      if (this._errorCallback != null) {
        this._errorCallback(e);
      }
    } }, { key: "destroy", value: function destroy()

    {
      this._ad.destroy();
    } }, { key: "_loadAd", value: function _loadAd()

    {
      this._isLoad = false;
      this._isLoading = true;
      this._lastError = null;
      this._ad.load();
    } }, { key: "isExpired", get: function get() {return this._lastLoadTime !== 0 && Math.abs(Date.now() - this._lastLoadTime) > EXPIRED_TIME;} }, { key: "isLoading", get: function get() {return this._isLoading;} }]);return AdBase;}();var


RewardedVideo = /*#__PURE__*/function (_AdBase) {_inherits(RewardedVideo, _AdBase);var _super = _createSuper(RewardedVideo);
  function RewardedVideo() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, RewardedVideo);return _super.call(this,
    plus.ad.createRewardedVideoAd(options), options);
  }return RewardedVideo;}(AdBase);var


FullScreenVideo = /*#__PURE__*/function (_AdBase2) {_inherits(FullScreenVideo, _AdBase2);var _super2 = _createSuper(FullScreenVideo);
  function FullScreenVideo() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, FullScreenVideo);return _super2.call(this,
    plus.ad.createFullScreenVideoAd(options), options);
  }return FullScreenVideo;}(AdBase);var _default =


new AdHelper();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

<<<<<<< HEAD
/***/ 48:
/*!********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/getParent.js ***!
  \********************************************************************************/
=======
/***/ 5:
/*!******************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/pages.json ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 50:
/*!**************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/sys.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.os = os;exports.sys = sys;function os() {
  return uni.getSystemInfoSync().platform;
};

function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 51:
/*!*******************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/debounce.js ***!
  \*******************************************************************************/
>>>>>>> school
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         * 
                                                                                                                         * @param {Function} func 要执行的回调函数 
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),

<<<<<<< HEAD
/***/ 49:
/*!******************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/$parent.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 497:
=======
/***/ 517:
>>>>>>> school
/*!***********************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-popup/components/uni-popup/popup.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =
{
  data: function data() {
    return {};


  },
  created: function created() {
    this.popup = this.getParent();
  },
  methods: {
    /**
              * 获取父元素实例
              */
    getParent: function getParent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uniPopup';
      var parent = this.$parent;
      var parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent) return false;
        parentName = parent.$options.name;
      }
      return parent;
    } } };exports.default = _default;

/***/ }),

<<<<<<< HEAD
/***/ 498:
=======
/***/ 518:
>>>>>>> school
/*!****************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-popup/components/uni-popup/i18n/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 499));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 500));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 501));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
=======
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 519));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 520));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 521));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
>>>>>>> school
{
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default };exports.default = _default;

/***/ }),

<<<<<<< HEAD
/***/ 499:
=======
/***/ 519:
>>>>>>> school
/*!***************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-popup/components/uni-popup/i18n/en.json ***!
  \***************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"cancel\",\"uni-popup.ok\":\"ok\",\"uni-popup.placeholder\":\"pleace enter\",\"uni-popup.title\":\"Hint\",\"uni-popup.shareTitle\":\"Share to\"}");

/***/ }),

/***/ 52:
/*!*******************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/throttle.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * 节流原理：在一定时间内，只能触发一次
                                                                                                                      * 
                                                                                                                      * @param {Function} func 要执行的回调函数 
                                                                                                                      * @param {Number} wait 延时的时间
                                                                                                                      * @param {Boolean} immediate 是否立即执行
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),

<<<<<<< HEAD
/***/ 5:
/*!******************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/pages.json ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 50:
/*!**************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/sys.js ***!
  \**************************************************************************/
=======
/***/ 520:
/*!********************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hans.json ***!
  \********************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"取消\",\"uni-popup.ok\":\"确定\",\"uni-popup.placeholder\":\"请输入\",\"uni-popup.title\":\"提示\",\"uni-popup.shareTitle\":\"分享到\"}");

/***/ }),

/***/ 521:
/*!********************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hant.json ***!
  \********************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"取消\",\"uni-popup.ok\":\"確定\",\"uni-popup.placeholder\":\"請輸入\",\"uni-popup.title\":\"提示\",\"uni-popup.shareTitle\":\"分享到\"}");

/***/ }),

/***/ 53:
/*!***************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/config/config.js ***!
  \***************************************************************************/
>>>>>>> school
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-12-17
var version = '1.8.3';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),

<<<<<<< HEAD
/***/ 500:
/*!********************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hans.json ***!
  \********************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"取消\",\"uni-popup.ok\":\"确定\",\"uni-popup.placeholder\":\"请输入\",\"uni-popup.title\":\"提示\",\"uni-popup.shareTitle\":\"分享到\"}");

/***/ }),

/***/ 501:
/*!********************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hant.json ***!
  \********************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"取消\",\"uni-popup.ok\":\"確定\",\"uni-popup.placeholder\":\"請輸入\",\"uni-popup.title\":\"提示\",\"uni-popup.shareTitle\":\"分享到\"}");

/***/ }),

/***/ 51:
/*!*******************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/debounce.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         * 
                                                                                                                         * @param {Function} func 要执行的回调函数 
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),

/***/ 516:
=======
/***/ 536:
>>>>>>> school
/*!***************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/pages/ucenter/userinfo/limeClipper/utils.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.determineDirection = determineDirection;exports.calcImageOffset = calcImageOffset;exports.calcImageScale = calcImageScale;exports.calcImageSize = calcImageSize;exports.calcPythagoreanTheorem = calcPythagoreanTheorem;exports.clipTouchMoveOfCalculate = clipTouchMoveOfCalculate;exports.imageTouchMoveOfCalcOffset = imageTouchMoveOfCalcOffset; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                         * 判断手指触摸位置
                                                                                                                                                                                                                                                                                                                                                                                                                                         */
function determineDirection(clipX, clipY, clipWidth, clipHeight, currentX, currentY) {
  /*
                                                                                       * (右下>>1 右上>>2 左上>>3 左下>>4)
                                                                                       */
  var corner;
  /**
               * 思路：（利用直角坐标系）
               *  1.找出裁剪框中心点
               *  2.如点击坐标在上方点与左方点区域内，则点击为左上角
               *  3.如点击坐标在下方点与右方点区域内，则点击为右下角
               *  4.其他角同理
               */
  var mainPoint = [clipX + clipWidth / 2, clipY + clipHeight / 2]; // 中心点
  var currentPoint = [currentX, currentY]; // 触摸点

  if (currentPoint[0] <= mainPoint[0] && currentPoint[1] <= mainPoint[1]) {
    corner = 3; // 左上
  } else if (currentPoint[0] >= mainPoint[0] && currentPoint[1] <= mainPoint[1]) {
    corner = 2; // 右上
  } else if (currentPoint[0] <= mainPoint[0] && currentPoint[1] >= mainPoint[1]) {
    corner = 4; // 左下
  } else if (currentPoint[0] >= mainPoint[0] && currentPoint[1] >= mainPoint[1]) {
    corner = 1; // 右下
  }

  return corner;
}

/**
   * 图片边缘检测检测时，计算图片偏移量
   */
function calcImageOffset(data, scale) {
  var left = data.imageLeft;
  var top = data.imageTop;
  scale = scale || data.scale;

  var imageWidth = data.imageWidth;
  var imageHeight = data.imageHeight;
  if (data.angle / 90 % 2) {
    imageWidth = data.imageHeight;
    imageHeight = data.imageWidth;
  }var

  clipX =



  data.clipX,clipWidth = data.clipWidth,clipY = data.clipY,clipHeight = data.clipHeight;

  // 当前图片宽度/高度
  var currentImageSize = function currentImageSize(size) {return size * scale / 2;};
  var currentImageWidth = currentImageSize(imageWidth);
  var currentImageHeight = currentImageSize(imageHeight);

  left = clipX + currentImageWidth >= left ? left : clipX + currentImageWidth;
  left = clipX + clipWidth - currentImageWidth <= left ? left : clipX + clipWidth - currentImageWidth;
  top = clipY + currentImageHeight >= top ? top : clipY + currentImageHeight;
  top = clipY + clipHeight - currentImageHeight <= top ? top : clipY + clipHeight - currentImageHeight;
  return {
    left: left,
    top: top,
    scale: scale };

}

/**
   * 图片边缘检测时，计算图片缩放比例
   */
function calcImageScale(data, scale) {
  scale = scale || data.scale;var

  imageWidth =




  data.imageWidth,imageHeight = data.imageHeight,clipWidth = data.clipWidth,clipHeight = data.clipHeight,angle = data.angle;
  if (angle / 90 % 2) {
    imageWidth = imageHeight;
    imageHeight = imageWidth;
  }
  if (imageWidth * scale < clipWidth) {
    scale = clipWidth / imageWidth;
  }
  if (imageHeight * scale < clipHeight) {
    scale = Math.max(scale, clipHeight / imageHeight);
  }
  return scale;
}

/**
   * 计算图片尺寸
   */
function calcImageSize(width, height, data) {
  var imageWidth = width,
  imageHeight = height;var

  clipWidth =




  data.clipWidth,clipHeight = data.clipHeight,sysinfo = data.sysinfo,originWidth = data.width,originHeight = data.height;
  if (imageWidth && imageHeight) {
    if (imageWidth / imageHeight > (clipWidth || originWidth) / (clipWidth || originHeight)) {
      imageHeight = clipHeight || originHeight;
      imageWidth = width / height * imageHeight;
    } else {
      imageWidth = clipWidth || originWidth;
      imageHeight = height / width * imageWidth;
    }
  } else {
    var sys = sysinfo || uni.getSystemInfoSync();
    imageWidth = sys.windowWidth;
    imageHeight = 0;
  }
  return {
    imageWidth: imageWidth,
    imageHeight: imageHeight };

}

/**
   * 勾股定理求斜边
   */
function calcPythagoreanTheorem(width, height) {
  return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
}

/**
   * 拖动裁剪框时计算
   */
function clipTouchMoveOfCalculate(data, event) {
  var clientX = event.touches[0].clientX;
  var clientY = event.touches[0].clientY;var


  clipWidth =









  data.clipWidth,clipHeight = data.clipHeight,oldClipY = data.clipY,oldClipX = data.clipX,clipStart = data.clipStart,isLockRatio = data.isLockRatio,maxWidth = data.maxWidth,minWidth = data.minWidth,maxHeight = data.maxHeight,minHeight = data.minHeight;
  maxWidth = maxWidth / 2;
  minWidth = minWidth / 2;
  minHeight = minHeight / 2;
  maxHeight = maxHeight / 2;

  var width = clipWidth,
  height = clipHeight,
  clipY = oldClipY,
  clipX = oldClipX,
  // 获取裁剪框实际宽度/高度
  // 如果大于最大值则使用最大值
  // 如果小于最小值则使用最小值
  sizecorrect = function sizecorrect() {
    width = width <= maxWidth ? width >= minWidth ? width : minWidth : maxWidth;
    height = height <= maxHeight ? height >= minHeight ? height : minHeight : maxHeight;
  },
  sizeinspect = function sizeinspect() {
    sizecorrect();
    if ((width > maxWidth || width < minWidth || height > maxHeight || height < minHeight) && isLockRatio) {
      return false;
    } else {
      return true;
    }
  };
  //if (clipStart.corner) {
  height = clipStart.height + (clipStart.corner > 1 && clipStart.corner < 4 ? 1 : -1) * (clipStart.y - clientY);
  //}
  switch (clipStart.corner) {
    case 1:
      width = clipStart.width - clipStart.x + clientX;
      if (isLockRatio) {
        height = width / (clipWidth / clipHeight);
      }
      if (!sizeinspect()) return;
      break;
    case 2:
      width = clipStart.width - clipStart.x + clientX;
      if (isLockRatio) {
        height = width / (clipWidth / clipHeight);
      }
      if (!sizeinspect()) {
        return;
      } else {
        clipY = clipStart.clipY - (height - clipStart.height);
      }

      break;
    case 3:
      width = clipStart.width + clipStart.x - clientX;
      if (isLockRatio) {
        height = width / (clipWidth / clipHeight);
      }
      if (!sizeinspect()) {
        return;
      } else {
        clipY = clipStart.clipY - (height - clipStart.height);
        clipX = clipStart.clipX - (width - clipStart.width);
      }

      break;
    case 4:
      width = clipStart.width + clipStart.x - clientX;
      if (isLockRatio) {
        height = width / (clipWidth / clipHeight);
      }
      if (!sizeinspect()) {
        return;
      } else {
        clipX = clipStart.clipX - (width - clipStart.width);
      }
      break;
    default:
      break;}

  return {
    width: width,
    height: height,
    clipX: clipX,
    clipY: clipY };

}

/**
   * 单指拖动图片计算偏移
   */
function imageTouchMoveOfCalcOffset(data, clientXForLeft, clientYForLeft) {
  var left = clientXForLeft - data.touchRelative[0].x,
  top = clientYForLeft - data.touchRelative[0].y;
  return {
    left: left,
    top: top };

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

<<<<<<< HEAD
/***/ 52:
/*!*******************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/function/throttle.js ***!
  \*******************************************************************************/
=======
/***/ 54:
/*!***************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/config/zIndex.js ***!
  \***************************************************************************/
>>>>>>> school
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * 节流原理：在一定时间内，只能触发一次
                                                                                                                      * 
                                                                                                                      * @param {Function} func 要执行的回调函数 
                                                                                                                      * @param {Number} wait 延时的时间
                                                                                                                      * @param {Boolean} immediate 是否立即执行
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),

/***/ 53:
/*!***************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/config/config.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-12-17
var version = '1.8.3';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),

/***/ 531:
=======
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),

/***/ 551:
>>>>>>> school
/*!**************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-forms/components/uni-forms/validate.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var pattern = {
  email: /^\S+?@\S+?\.\S+?$/,
  idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  url: new RegExp(
  "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
  'i') };


var FORMAT_MAPPING = {
  "int": 'integer',
  "bool": 'boolean',
  "double": 'number',
  "long": 'number',
  "password": 'string'
  // "fileurls": 'array'
};

function formatMessage(args) {var resources = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var defaultMessage = ['label'];
  defaultMessage.forEach(function (item) {
    if (args[item] === undefined) {
      args[item] = '';
    }
  });

  var str = resources;
  for (var key in args) {
    var reg = new RegExp('{' + key + '}');
    str = str.replace(reg, args[key]);
  }
  return str;
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (typeof value === 'string' && !value) {
    return true;
  }

  if (Array.isArray(value) && !value.length) {
    return true;
  }

  if (type === 'object' && !Object.keys(value).length) {
    return true;
  }

  return false;
}

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  string: function string(value) {
    return typeof value === 'string';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  "boolean": function boolean(value) {
    return typeof value === 'boolean';
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  date: function date(value) {
    return value instanceof Date;
  },
  timestamp: function timestamp(value) {
    if (!this.integer(value) || Math.abs(value).toString().length > 16) {
      return false;
    }
    return true;
  },
  file: function file(value) {
    return typeof value.url === 'string';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  pattern: function pattern(reg, value) {
    try {
      return new RegExp(reg).test(value);
    } catch (e) {
      return false;
    }
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  idcard: function idcard(value) {
    return typeof value === 'string' && !!value.match(pattern.idcard);
  },
  'url-https': function urlHttps(value) {
    return this.url(value) && value.startsWith('https://');
  },
  'url-scheme': function urlScheme(value) {
    return value.startsWith('://');
  },
  'url-web': function urlWeb(value) {
    return false;
  } };var


RuleValidator = /*#__PURE__*/function () {

  function RuleValidator(message) {_classCallCheck(this, RuleValidator);
    this._message = message;
  }_createClass(RuleValidator, [{ key: "validateRule", value: function () {var _validateRule = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(

      fieldKey, fieldValue, value, data, allData) {var result, rules, hasRequired, message, i, rule, vt, now, resultExpr;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                result = null;

                rules = fieldValue.rules;

                hasRequired = rules.findIndex(function (item) {
                  return item.required;
                });if (!(
                hasRequired < 0)) {_context.next = 8;break;}if (!(
                value === null || value === undefined)) {_context.next = 6;break;}return _context.abrupt("return",
                result);case 6:if (!(

                typeof value === 'string' && !value.length)) {_context.next = 8;break;}return _context.abrupt("return",
                result);case 8:



                message = this._message;if (!(

                rules === undefined)) {_context.next = 11;break;}return _context.abrupt("return",
                message['default']);case 11:


                i = 0;case 12:if (!(i < rules.length)) {_context.next = 35;break;}
                rule = rules[i];
                vt = this._getValidateType(rule);

                Object.assign(rule, {
                  label: fieldValue.label || "[\"".concat(fieldKey, "\"]") });if (!


                RuleValidatorHelper[vt]) {_context.next = 20;break;}
                result = RuleValidatorHelper[vt](rule, value, message);if (!(
                result != null)) {_context.next = 20;break;}return _context.abrupt("break", 35);case 20:if (!




                rule.validateExpr) {_context.next = 26;break;}
                now = Date.now();
                resultExpr = rule.validateExpr(value, allData, now);if (!(
                resultExpr === false)) {_context.next = 26;break;}
                result = this._getMessage(rule, rule.errorMessage || this._message['default']);return _context.abrupt("break", 35);case 26:if (!




                rule.validateFunction) {_context.next = 32;break;}_context.next = 29;return (
                  this.validateFunction(rule, value, data, allData, vt));case 29:result = _context.sent;if (!(
                result !== null)) {_context.next = 32;break;}return _context.abrupt("break", 35);case 32:i++;_context.next = 12;break;case 35:





                if (result !== null) {
                  result = message.TAG + result;
                }return _context.abrupt("return",

                result);case 37:case "end":return _context.stop();}}}, _callee, this);}));function validateRule(_x, _x2, _x3, _x4, _x5) {return _validateRule.apply(this, arguments);}return validateRule;}() }, { key: "validateFunction", value: function () {var _validateFunction = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(


      rule, value, data, allData, vt) {var result, callbackMessage, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                result = null;_context2.prev = 1;

                callbackMessage = null;_context2.next = 5;return (
                  rule.validateFunction(rule, value, allData || data, function (message) {
                    callbackMessage = message;
                  }));case 5:res = _context2.sent;
                if (callbackMessage || typeof res === 'string' && res || res === false) {
                  result = this._getMessage(rule, callbackMessage || res, vt);
                }_context2.next = 12;break;case 9:_context2.prev = 9;_context2.t0 = _context2["catch"](1);

                result = this._getMessage(rule, _context2.t0.message, vt);case 12:return _context2.abrupt("return",

                result);case 13:case "end":return _context2.stop();}}}, _callee2, this, [[1, 9]]);}));function validateFunction(_x6, _x7, _x8, _x9, _x10) {return _validateFunction.apply(this, arguments);}return validateFunction;}() }, { key: "_getMessage", value: function _getMessage(


    rule, message, vt) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message['default']);
    } }, { key: "_getValidateType", value: function _getValidateType(

    rule) {
      var result = '';
      if (rule.required) {
        result = 'required';
      } else if (rule.format) {
        result = 'format';
      } else if (rule.arrayType) {
        result = 'arrayTypeFormat';
      } else if (rule.range) {
        result = 'range';
      } else if (rule.maximum !== undefined || rule.minimum !== undefined) {
        result = 'rangeNumber';
      } else if (rule.maxLength !== undefined || rule.minLength !== undefined) {
        result = 'rangeLength';
      } else if (rule.pattern) {
        result = 'pattern';
      } else if (rule.validateFunction) {
        result = 'validateFunction';
      }
      return result;
    } }]);return RuleValidator;}();


var RuleValidatorHelper = {
  required: function required(rule, value, message) {
    if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
      return formatMessage(rule, rule.errorMessage || message.required);
    }

    return null;
  },

  range: function range(rule, value, message) {var

    range =

    rule.range,errorMessage = rule.errorMessage;

    var list = new Array(range.length);
    for (var i = 0; i < range.length; i++) {
      var item = range[i];
      if (types.object(item) && item.value !== undefined) {
        list[i] = item.value;
      } else {
        list[i] = item;
      }
    }

    var result = false;
    if (Array.isArray(value)) {
      result = new Set(value.concat(list)).size === list.length;
    } else {
      if (list.indexOf(value) > -1) {
        result = true;
      }
    }

    if (!result) {
      return formatMessage(rule, errorMessage || message['enum']);
    }

    return null;
  },

  rangeNumber: function rangeNumber(rule, value, message) {
    if (!types.number(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }var


    minimum =



    rule.minimum,maximum = rule.maximum,exclusiveMinimum = rule.exclusiveMinimum,exclusiveMaximum = rule.exclusiveMaximum;
    var min = exclusiveMinimum ? value <= minimum : value < minimum;
    var max = exclusiveMaximum ? value >= maximum : value > maximum;

    if (minimum !== undefined && min) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMinimum ?
      'exclusiveMinimum' : 'minimum']);

    } else if (maximum !== undefined && max) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMaximum ?
      'exclusiveMaximum' : 'maximum']);

    } else if (minimum !== undefined && maximum !== undefined && (min || max)) {
      return formatMessage(rule, rule.errorMessage || message['number'].range);
    }

    return null;
  },

  rangeLength: function rangeLength(rule, value, message) {
    if (!types.string(value) && !types.array(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }

    var min = rule.minLength;
    var max = rule.maxLength;
    var val = value.length;

    if (min !== undefined && val < min) {
      return formatMessage(rule, rule.errorMessage || message['length'].minLength);
    } else if (max !== undefined && val > max) {
      return formatMessage(rule, rule.errorMessage || message['length'].maxLength);
    } else if (min !== undefined && max !== undefined && (val < min || val > max)) {
      return formatMessage(rule, rule.errorMessage || message['length'].range);
    }

    return null;
  },

  pattern: function pattern(rule, value, message) {
    if (!types['pattern'](rule.pattern, value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }

    return null;
  },

  format: function format(rule, value, message) {
    var customTypes = Object.keys(types);
    var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;

    if (customTypes.indexOf(format) > -1) {
      if (!types[format](value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
    }

    return null;
  },

  arrayTypeFormat: function arrayTypeFormat(rule, value, message) {
    if (!Array.isArray(value)) {
      return formatMessage(rule, rule.errorMessage || message.typeError);
    }

    for (var i = 0; i < value.length; i++) {
      var element = value[i];
      var formatResult = this.format(rule, element, message);
      if (formatResult !== null) {
        return formatResult;
      }
    }

    return null;
  } };var


SchemaValidator = /*#__PURE__*/function (_RuleValidator) {_inherits(SchemaValidator, _RuleValidator);var _super = _createSuper(SchemaValidator);

  function SchemaValidator(schema, options) {var _this;_classCallCheck(this, SchemaValidator);
    _this = _super.call(this, SchemaValidator.message);

    _this._schema = schema;
    _this._options = options || null;return _this;
  }_createClass(SchemaValidator, [{ key: "updateSchema", value: function updateSchema(

    schema) {
      this._schema = schema;
    } }, { key: "validate", value: function () {var _validate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(

      data, allData) {var result;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                result = this._checkFieldInSchema(data);if (
                result) {_context3.next = 5;break;}_context3.next = 4;return (
                  this.invokeValidate(data, false, allData));case 4:result = _context3.sent;case 5:return _context3.abrupt("return",

                result.length ? result[0] : null);case 6:case "end":return _context3.stop();}}}, _callee3, this);}));function validate(_x11, _x12) {return _validate.apply(this, arguments);}return validate;}() }, { key: "validateAll", value: function () {var _validateAll = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(


      data, allData) {var result;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                result = this._checkFieldInSchema(data);if (
                result) {_context4.next = 5;break;}_context4.next = 4;return (
                  this.invokeValidate(data, true, allData));case 4:result = _context4.sent;case 5:return _context4.abrupt("return",

                result);case 6:case "end":return _context4.stop();}}}, _callee4, this);}));function validateAll(_x13, _x14) {return _validateAll.apply(this, arguments);}return validateAll;}() }, { key: "validateUpdate", value: function () {var _validateUpdate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(


      data, allData) {var result;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                result = this._checkFieldInSchema(data);if (
                result) {_context5.next = 5;break;}_context5.next = 4;return (
                  this.invokeValidateUpdate(data, false, allData));case 4:result = _context5.sent;case 5:return _context5.abrupt("return",

                result.length ? result[0] : null);case 6:case "end":return _context5.stop();}}}, _callee5, this);}));function validateUpdate(_x15, _x16) {return _validateUpdate.apply(this, arguments);}return validateUpdate;}() }, { key: "invokeValidate", value: function () {var _invokeValidate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(


      data, all, allData) {var result, schema, key, value, errorMessage;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                result = [];
                schema = this._schema;_context6.t0 = _regenerator.default.keys(
                schema);case 3:if ((_context6.t1 = _context6.t0()).done) {_context6.next = 15;break;}key = _context6.t1.value;
                value = schema[key];_context6.next = 8;return (
                  this.validateRule(key, value, data[key], data, allData));case 8:errorMessage = _context6.sent;if (!(
                errorMessage != null)) {_context6.next = 13;break;}
                result.push({
                  key: key,
                  errorMessage: errorMessage });if (

                all) {_context6.next = 13;break;}return _context6.abrupt("break", 15);case 13:_context6.next = 3;break;case 15:return _context6.abrupt("return",


                result);case 16:case "end":return _context6.stop();}}}, _callee6, this);}));function invokeValidate(_x17, _x18, _x19) {return _invokeValidate.apply(this, arguments);}return invokeValidate;}() }, { key: "invokeValidateUpdate", value: function () {var _invokeValidateUpdate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(


      data, all, allData) {var result, key, errorMessage;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                result = [];_context7.t0 = _regenerator.default.keys(
                data);case 2:if ((_context7.t1 = _context7.t0()).done) {_context7.next = 13;break;}key = _context7.t1.value;_context7.next = 6;return (
                  this.validateRule(key, this._schema[key], data[key], data, allData));case 6:errorMessage = _context7.sent;if (!(
                errorMessage != null)) {_context7.next = 11;break;}
                result.push({
                  key: key,
                  errorMessage: errorMessage });if (

                all) {_context7.next = 11;break;}return _context7.abrupt("break", 13);case 11:_context7.next = 2;break;case 13:return _context7.abrupt("return",


                result);case 14:case "end":return _context7.stop();}}}, _callee7, this);}));function invokeValidateUpdate(_x20, _x21, _x22) {return _invokeValidateUpdate.apply(this, arguments);}return invokeValidateUpdate;}() }, { key: "_checkFieldInSchema", value: function _checkFieldInSchema(


    data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return '';
      }

      var noExistFields = keys.filter(function (key) {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields) },
      SchemaValidator.message.TAG + SchemaValidator.message['defaultInvalid']);
      return [{
        key: 'invalid',
        errorMessage: errorMessage }];

    } }]);return SchemaValidator;}(RuleValidator);


function Message() {
  return {
    TAG: "",
    default: '验证错误',
    defaultInvalid: '提交的字段{field}在数据库中并不存在',
    validateFunction: '验证无效',
    required: '{label}必填',
    'enum': '{label}超出范围',
    timestamp: '{label}格式无效',
    whitespace: '{label}不能为空',
    typeError: '{label}类型无效',
    date: {
      format: '{label}日期{value}格式无效',
      parse: '{label}日期无法解析,{value}无效',
      invalid: '{label}日期{value}无效' },

    length: {
      minLength: '{label}长度不能少于{minLength}',
      maxLength: '{label}长度不能超过{maxLength}',
      range: '{label}必须介于{minLength}和{maxLength}之间' },

    number: {
      minimum: '{label}不能小于{minimum}',
      maximum: '{label}不能大于{maximum}',
      exclusiveMinimum: '{label}不能小于等于{minimum}',
      exclusiveMaximum: '{label}不能大于等于{maximum}',
      range: '{label}必须介于{minimum}and{maximum}之间' },

    pattern: {
      mismatch: '{label}格式不匹配' } };


}


SchemaValidator.message = new Message();var _default =

SchemaValidator;exports.default = _default;

/***/ }),

<<<<<<< HEAD
/***/ 54:
/*!***************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/node_modules/uview-ui/libs/config/zIndex.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),

=======
>>>>>>> school
/***/ 6:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 3);var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e32) {throw _e32;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e33) {didErr = true;err = _e33;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function n(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function s(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var o = s(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),s = {},o = s.lib = {},r = o.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = o.WordArray = r.extend({ init: function init(e, n) {e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,s = this.sigBytes,o = e.sigBytes;if (this.clamp(), s % 4) for (var r = 0; r < o; r++) {var i = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;t[s + r >>> 2] |= i << 24 - (s + r) % 4 * 8;} else for (r = 0; r < o; r += 4) {t[s + r >>> 2] = n[r >>> 2];}return this.sigBytes += o, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = r.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, s = [], o = function o(t) {t = t;var n = 987654321,s = 4294967295;return function () {var o = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;return o /= 4294967296, (o += .5) * (e.random() > .5 ? 1 : -1);};}, r = 0; r < t; r += 4) {var a = o(4294967296 * (n || e.random()));n = 987654071 * a(), s.push(4294967296 * a() | 0);}return new i.init(s, t);} }),a = s.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], o = 0; o < n; o++) {var r = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;s.push((r >>> 4).toString(16)), s.push((15 & r).toString(16));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s += 2) {n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], o = 0; o < n; o++) {var r = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;s.push(String.fromCharCode(r));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s++) {n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;}return new i.init(n, t);} },l = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },h = o.BufferedBlockAlgorithm = r.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,s = n.words,o = n.sigBytes,r = this.blockSize,a = o / (4 * r),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * r,u = e.min(4 * c, o);if (c) {for (var l = 0; l < c; l += r) {this._doProcessBlock(s, l);}var h = s.splice(0, c);n.sigBytes -= u;}return new i.init(h, u);}, clone: function clone() {var e = r.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 });o.Hasher = h.extend({ cfg: r.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {h.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new d.HMAC.init(e, n).finalize(t);};} });var d = s.algo = {};return s;}(Math), n);}),r = (s(function (e, t) {var n;e.exports = (n = o, function (e) {var t = n,s = t.lib,o = s.WordArray,r = s.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = r.extend({ _doReset: function _doReset() {this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var s = t + n,o = e[s];e[s] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);}var r = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],g = e[t + 3],p = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],w = e[t + 8],k = e[t + 9],T = e[t + 10],S = e[t + 11],v = e[t + 12],A = e[t + 13],P = e[t + 14],I = e[t + 15],b = r[0],O = r[1],C = r[2],E = r[3];b = u(b, O, C, E, i, 7, a[0]), E = u(E, b, O, C, c, 12, a[1]), C = u(C, E, b, O, f, 17, a[2]), O = u(O, C, E, b, g, 22, a[3]), b = u(b, O, C, E, p, 7, a[4]), E = u(E, b, O, C, m, 12, a[5]), C = u(C, E, b, O, y, 17, a[6]), O = u(O, C, E, b, _, 22, a[7]), b = u(b, O, C, E, w, 7, a[8]), E = u(E, b, O, C, k, 12, a[9]), C = u(C, E, b, O, T, 17, a[10]), O = u(O, C, E, b, S, 22, a[11]), b = u(b, O, C, E, v, 7, a[12]), E = u(E, b, O, C, A, 12, a[13]), C = u(C, E, b, O, P, 17, a[14]), b = l(b, O = u(O, C, E, b, I, 22, a[15]), C, E, c, 5, a[16]), E = l(E, b, O, C, y, 9, a[17]), C = l(C, E, b, O, S, 14, a[18]), O = l(O, C, E, b, i, 20, a[19]), b = l(b, O, C, E, m, 5, a[20]), E = l(E, b, O, C, T, 9, a[21]), C = l(C, E, b, O, I, 14, a[22]), O = l(O, C, E, b, p, 20, a[23]), b = l(b, O, C, E, k, 5, a[24]), E = l(E, b, O, C, P, 9, a[25]), C = l(C, E, b, O, g, 14, a[26]), O = l(O, C, E, b, w, 20, a[27]), b = l(b, O, C, E, A, 5, a[28]), E = l(E, b, O, C, f, 9, a[29]), C = l(C, E, b, O, _, 14, a[30]), b = h(b, O = l(O, C, E, b, v, 20, a[31]), C, E, m, 4, a[32]), E = h(E, b, O, C, w, 11, a[33]), C = h(C, E, b, O, S, 16, a[34]), O = h(O, C, E, b, P, 23, a[35]), b = h(b, O, C, E, c, 4, a[36]), E = h(E, b, O, C, p, 11, a[37]), C = h(C, E, b, O, _, 16, a[38]), O = h(O, C, E, b, T, 23, a[39]), b = h(b, O, C, E, A, 4, a[40]), E = h(E, b, O, C, i, 11, a[41]), C = h(C, E, b, O, g, 16, a[42]), O = h(O, C, E, b, y, 23, a[43]), b = h(b, O, C, E, k, 4, a[44]), E = h(E, b, O, C, v, 11, a[45]), C = h(C, E, b, O, I, 16, a[46]), b = d(b, O = h(O, C, E, b, f, 23, a[47]), C, E, i, 6, a[48]), E = d(E, b, O, C, _, 10, a[49]), C = d(C, E, b, O, P, 15, a[50]), O = d(O, C, E, b, m, 21, a[51]), b = d(b, O, C, E, v, 6, a[52]), E = d(E, b, O, C, g, 10, a[53]), C = d(C, E, b, O, T, 15, a[54]), O = d(O, C, E, b, c, 21, a[55]), b = d(b, O, C, E, w, 6, a[56]), E = d(E, b, O, C, I, 10, a[57]), C = d(C, E, b, O, y, 15, a[58]), O = d(O, C, E, b, A, 21, a[59]), b = d(b, O, C, E, p, 6, a[60]), E = d(E, b, O, C, S, 10, a[61]), C = d(C, E, b, O, f, 15, a[62]), O = d(O, C, E, b, k, 21, a[63]), r[0] = r[0] + b | 0, r[1] = r[1] + O | 0, r[2] = r[2] + C | 0, r[3] = r[3] + E | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,s = 8 * this._nDataBytes,o = 8 * t.sigBytes;n[o >>> 5] |= 128 << 24 - o % 32;var r = e.floor(s / 4294967296),i = s;n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var l = c[u];c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);}return a;}, clone: function clone() {var e = r.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, s, o, r, i) {var a = e + (t & n | ~t & s) + o + i;return (a << r | a >>> 32 - r) + t;}function l(e, t, n, s, o, r, i) {var a = e + (t & s | n & ~s) + o + i;return (a << r | a >>> 32 - r) + t;}function h(e, t, n, s, o, r, i) {var a = e + (t ^ n ^ s) + o + i;return (a << r | a >>> 32 - r) + t;}function d(e, t, n, s, o, r, i) {var a = e + (n ^ (t | ~s)) + o + i;return (a << r | a >>> 32 - r) + t;}t.MD5 = r._createHelper(c), t.HmacMD5 = r._createHmacHelper(c);}(Math), n.MD5);}), s(function (e, t) {var n, s, r;e.exports = (s = (n = o).lib.Base, r = n.enc.Utf8, void (n.algo.HMAC = s.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = r.parse(t));var n = e.blockSize,s = 4 * n;t.sigBytes > s && (t = e.finalize(t)), t.clamp();for (var o = this._oKey = t.clone(), i = this._iKey = t.clone(), a = o.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}o.sigBytes = i.sigBytes = s, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), s(function (e, t) {e.exports = o.HmacMD5;}));var i = "FUNCTION",a = "OBJECT",c = "CLIENT_DB";function u(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}function l(e) {return "object" === u(e);}function h(e) {return e && "string" == typeof e ? JSON.parse(e) : e;}var d = "development" === "development",f = "mp-weixin";var g;switch (f) {case "h5":g = "web";break;case "app-plus":g = "app";break;default:g = f;}var p = h({
    "address": [
        "127.0.0.1",
        "192.168.163.1",
        "192.168.44.1",
        "192.168.159.33"
    ],
<<<<<<< HEAD
    "debugPort": 49728,
    "initialLaunchType": "local",
    "servePort": 49729,
=======
    "debugPort": 61310,
    "initialLaunchType": "local",
    "servePort": 61311,
>>>>>>> school
    "skipFiles": [
        "<node_internals>/**/*.js",
        "D:/HBuilderX/plugins/unicloud/**/*.js"
    ]
}
),m = h([{"provider":"aliyun","spaceName":"school","spaceId":"ab7b047f-4f41-46b9-b4be-f60dc317037a","clientSecret":"dXZplwsyiMzWBEmokK/n9Q==","endpoint":"https://api.bspapp.com"}]),y = true;var _ = "";try {{var _e2 = __webpack_require__(/*! uni-stat-config */ 11).default || __webpack_require__(/*! uni-stat-config */ 11);_ = _e2.appid;}} catch (e) {}var w = {};function k(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var n, s;return n = w, s = e, Object.prototype.hasOwnProperty.call(n, s) || (w[e] = t), w[e];}"app" === g && (w = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});var T = ["invoke", "success", "fail", "complete"],S = k("_globalUniCloudInterceptor");function v(e, t) {S[e] || (S[e] = {}), l(t) && Object.keys(t).forEach(function (n) {T.indexOf(n) > -1 && function (e, t, n) {var s = S[e][t];s || (s = S[e][t] = []), -1 === s.indexOf(n) && "function" == typeof n && s.push(n);}(e, n, t[n]);});}function A(e, t) {S[e] || (S[e] = {}), l(t) ? Object.keys(t).forEach(function (n) {T.indexOf(n) > -1 && function (e, t, n) {var s = S[e][t];if (!s) return;var o = s.indexOf(n);o > -1 && s.splice(o, 1);}(e, n, t[n]);}) : delete S[e];}function P(e, t) {return e && 0 !== e.length ? e.reduce(function (e, n) {return e.then(function () {return n(t);});}, Promise.resolve()) : Promise.resolve();}function I(e, t) {return S[e] && S[e][t] || [];}var b = k("_globalUniCloudListener"),O = "response",C = "needLogin",E = "refreshToken",R = "clientdb",U = "cloudfunction",x = "cloudobject";function L(e) {return b[e] || (b[e] = []), b[e];}function D(e, t) {var n = L(e);n.includes(t) || n.push(t);}function q(e, t) {var n = L(e),s = n.indexOf(t);-1 !== s && n.splice(s, 1);}function N(e, t) {var n = L(e);for (var _e3 = 0; _e3 < n.length; _e3++) {(0, n[_e3])(t);}}function F(e, t) {return t ? function (n) {var _this = this;var s = !1;if ("callFunction" === t) {var _e4 = n && n.type || i;s = _e4 !== i;}var o = "callFunction" === t && !s;var r;r = this.isReady ? Promise.resolve() : this.initUniCloud, n = n || {};var a = r.then(function () {return s ? Promise.resolve() : P(I(t, "invoke"), n);}).then(function () {return e.call(_this, n);}).then(function (e) {return s ? Promise.resolve(e) : P(I(t, "success"), e).then(function () {return P(I(t, "complete"), e);}).then(function () {return o && N(O, { type: U, content: e }), Promise.resolve(e);});}, function (e) {return s ? Promise.reject(e) : P(I(t, "fail"), e).then(function () {return P(I(t, "complete"), e);}).then(function () {return N(O, { type: U, content: e }), Promise.reject(e);});});if (!(n.success || n.fail || n.complete)) return a;a.then(function (e) {n.success && n.success(e), n.complete && n.complete(e), o && N(O, { type: U, content: e });}, function (e) {n.fail && n.fail(e), n.complete && n.complete(e), o && N(O, { type: U, content: e });});} : function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var M = /*#__PURE__*/function (_Error) {_inherits(M, _Error);var _super = _createSuper(M);function M(e) {var _this2;_classCallCheck(this, M);_this2 = _super.call(this, e.message), _this2.errMsg = e.message || "", _this2.errCode = _this2.code = e.code || "SYSTEM_ERROR", _this2.requestId = e.requestId;return _this2;}return M;}( /*#__PURE__*/_wrapNativeSuper(Error));function $() {var e, t;try {if (uni.getLaunchOptionsSync) {if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),_n = _uni$getLaunchOptions.scene,_s = _uni$getLaunchOptions.channel;e = _s, t = _n;}} catch (e) {}return { channel: e, scene: t };}var j;function K() {var e = uni.getLocale && uni.getLocale() || "en";if (j) return _objectSpread(_objectSpread({}, j), {}, { locale: e, LOCALE: e });var t = uni.getSystemInfoSync(),n = t.deviceId,s = t.osName,o = t.uniPlatform,r = t.appId,i = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];for (var _e5 = 0; _e5 < i.length; _e5++) {delete t[i[_e5]];}return j = _objectSpread(_objectSpread({ PLATFORM: o, OS: s, APPID: r, DEVICEID: n }, $()), t), _objectSpread(_objectSpread({}, j), {}, { locale: e, LOCALE: e });}var B = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), r(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, s) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}), d && "web" === g && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return s(new M({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var o = e.data;if (o.error) return s(new M({ code: o.error.code, message: o.error.message, requestId: t }));o.result = o.data, o.requestId = t, delete o.data, n(o);} }));});} };var H = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} },W = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };var _e6 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: W, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: W }, "zh-Hans"),z = _e6.t;var V = /*#__PURE__*/function () {function V(e) {_classCallCheck(this, V);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(z("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = H, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;}_createClass(V, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return B.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this3 = this;return Promise.resolve().then(function () {return _this3.hasAccessToken ? t ? _this3.requestWrapped(e) : _this3.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this3.getAccessToken();}).then(function () {var t = _this3.rebuildRequest(e);return _this3.request(t, !0);});}) : _this3.getAccessToken().then(function () {var t = _this3.rebuildRequest(e);return _this3.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = B.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = B.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: s };} }, { key: "getAccessToken", value: function getAccessToken() {var _this4 = this;if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;this._getAccessTokenPromiseStatus = "pending";return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this4.setAccessToken(e.result.accessToken), _this4._getAccessTokenPromiseStatus = "fulfilled", t(_this4.accessToken)) : (_this4._getAccessTokenPromiseStatus = "rejected", n(new M({ code: "AUTH_FAILED", message: "获取accessToken失败" })));});}, function (e) {return _this4._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);}), this._getAccessTokenPromise;} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this5 = this;var e = _ref.url,t = _ref.formData,n = _ref.name,s = _ref.filePath,o = _ref.fileType,r = _ref.onUploadProgress;return new Promise(function (i, a) {var c = _this5.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: o, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new M({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new M({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof r && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {r({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this6 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,n = _ref2$fileType === void 0 ? "image" : _ref2$fileType,s = _ref2.onUploadProgress,o = _ref2.config;if ("string" !== u(t)) throw new M({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });if (!(t = t.trim())) throw new M({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });if (/:\/\//.test(t)) throw new M({ code: "INVALID_PARAM", message: "cloudPath不合法" });var r = o && o.envType || this.config.envType;var i, a;return this.getOSSUploadOptionsFromPath({ env: r, filename: t }).then(function (t) {var o = t.result;i = o.id, a = "https://" + o.cdnDomain + "/" + o.ossPath;var r = { url: "https://" + o.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: o.accessKeyId, Signature: o.signature, host: o.host, id: i, key: o.ossPath, policy: o.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n };return _this6.uploadFileToOSS(Object.assign({}, r, { onUploadProgress: s }));}).then(function () {return _this6.reportOSSUpload({ id: i });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: a }) : s(new M({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, n) {Array.isArray(e) && 0 !== e.length || n(new M({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return V;}();var J = { init: function init(e) {var t = new V(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };var Y = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";var X;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(X || (X = {}));var G = function G() {};var Q = function Q() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t2 = function _t2() {throw new M({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });};return Object.defineProperty(e.promise, "then", { get: _t2 }), Object.defineProperty(e.promise, "catch", { get: _t2 }), e;}var t = new Promise(function (t, n) {e = function e(_e7, s) {return _e7 ? n(_e7) : t(s);};});return e.promise = t, e;};function Z(e) {return void 0 === e;}function ee(e) {return "[object Null]" === Object.prototype.toString.call(e);}var te;function ne(e) {var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);var n;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e8 = _step.value;var _t3 = _e8.isMatch,_n2 = _e8.genAdapter,_s2 = _e8.runtime;if (_t3()) return { adapter: _n2(), runtime: _s2 };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(te || (te = {}));var se = { adapter: null, runtime: void 0 },oe = ["anonymousUuidKey"];var re = /*#__PURE__*/function (_G) {_inherits(re, _G);var _super2 = _createSuper(re);function re() {var _this7;_classCallCheck(this, re);_this7 = _super2.call(this), se.adapter.root.tcbObject || (se.adapter.root.tcbObject = {});return _this7;}_createClass(re, [{ key: "setItem", value: function setItem(e, t) {se.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return se.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete se.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete se.adapter.root.tcbObject;} }]);return re;}(G);function ie(e, t) {switch (e) {case "local":return t.localStorage || new re();case "none":return new re();default:return t.sessionStorage || new re();}}var ae = /*#__PURE__*/function () {function ae(e) {_classCallCheck(this, ae);if (!this._storage) {this._persistence = se.adapter.primaryStorage || e.persistence, this._storage = ie(this._persistence, se.adapter);var _t4 = "access_token_".concat(e.env),_n3 = "access_token_expire_".concat(e.env),_s3 = "refresh_token_".concat(e.env),_o = "anonymous_uuid_".concat(e.env),_r = "login_type_".concat(e.env),_i = "user_info_".concat(e.env);this.keys = { accessTokenKey: _t4, accessTokenExpireKey: _n3, refreshTokenKey: _s3, anonymousUuidKey: _o, loginTypeKey: _r, userInfoKey: _i };}}_createClass(ae, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var n = ie(e, se.adapter);for (var _e9 in this.keys) {var _s4 = this.keys[_e9];if (t && oe.includes(_e9)) continue;var _o2 = this._storage.getItem(_s4);Z(_o2) || ee(_o2) || (n.setItem(_s4, _o2), this._storage.removeItem(_s4));}this._storage = n;} }, { key: "setStore", value: function setStore(e, t, n) {if (!this._storage) return;var s = { version: n || "localCachev1", content: t },o = JSON.stringify(s);try {this._storage.setItem(e, o);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var n = this._storage.getItem(e);if (!n) return "";if (n.indexOf(t) >= 0) {return JSON.parse(n).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return ae;}();var ce = {},ue = {};function le(e) {return ce[e];}var he = function he(e, t) {_classCallCheck(this, he);this.data = t || null, this.name = e;};var de = /*#__PURE__*/function (_he) {_inherits(de, _he);var _super3 = _createSuper(de);function de(e, t) {var _this8;_classCallCheck(this, de);_this8 = _super3.call(this, "error", { error: e, data: t }), _this8.error = e;return _this8;}return de;}(he);var fe = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, n) {if (n && n[e]) {var _s5 = n[e].indexOf(t);-1 !== _s5 && n[e].splice(_s5, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof de) return console.error(e.error), this;var n = "string" == typeof e ? new he(e, t || {}) : e;var s = n.name;if (this._listens(s)) {n.target = this;var _e10 = this._listeners[s] ? _toConsumableArray(this._listeners[s]) : [];var _iterator2 = _createForOfIteratorHelper(_e10),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t5 = _step2.value;_t5.call(this, n);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function ge(e, t) {fe.on(e, t);}function pe(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};fe.fire(e, t);}function me(e, t) {fe.off(e, t);}var ye = "loginStateChanged",_e = "loginStateExpire",we = "loginTypeChanged",ke = "anonymousConverted",Te = "refreshAccessToken";var Se;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(Se || (Se = {}));var ve = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],Ae = { "X-SDK-Version": "1.3.5" };function Pe(e, t, n) {var s = e[t];e[t] = function (t) {var o = {},r = {};n.forEach(function (n) {var _n$call = n.call(e, t),s = _n$call.data,i = _n$call.headers;Object.assign(o, s), Object.assign(r, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), o);else for (var _e11 in o) {i.append(_e11, o[_e11]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), r), s.call(e, t);};}function Ie() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, Ae), {}, { "x-seqid": e }) };}var be = /*#__PURE__*/function () {function be() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, be);var t;this.config = e, this._reqClass = new se.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = le(this.config.env), this._localCache = (t = this.config.env, ue[t]), Pe(this._reqClass, "post", [Ie]), Pe(this._reqClass, "upload", [Ie]), Pe(this._reqClass, "download", [Ie]);}_createClass(be, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var e, t;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this$_cache$keys, e, t, n, s, o, r, i, a, _e12, _e13, _t6, _s6;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, o = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);r = this._cache.getStore(n);if (r) {_context5.next = 5;break;}throw new M({ message: "未登录CloudBase" });case 5:i = { refresh_token: r };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e12 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e12 || "REFRESH_TOKEN_EXPIRED" === _e12 || "INVALID_REFRESH_TOKEN" === _e12)) {_context5.next = 20;break;}if (!(this._cache.getStore(s) === Se.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e12)) {_context5.next = 19;break;}_e13 = this._cache.getStore(o);_t6 = this._cache.getStore(n);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e13, refresh_token: _t6 });case 17:_s6 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_s6.refresh_token), this._refreshAccessToken()));case 19:pe(_e), this._cache.removeStore(n);case 20:throw new M({ code: a.data.code, message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code) });case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (pe(Te), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this$_cache$keys2, e, t, n, s, o, r;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(n)) {_context6.next = 3;break;}throw new M({ message: "refresh token不存在，登录状态异常" });case 3:s = this._cache.getStore(e), o = this._cache.getStore(t), r = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(s, o);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}r = !1;case 12:return _context6.abrupt("return", (!s || !o || o < Date.now()) && r ? this.refreshAccessToken() : { accessToken: s, accessTokenExpire: o });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, t, n) {var s, o, r, _e14, i, _e15, _e16, a, c, u, l, h, d, f, g, p;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:s = "x-tcb-trace_".concat(this.config.env);o = "application/x-www-form-urlencoded";r = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === ve.indexOf(e))) {_context7.next = 10;break;}_e14 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e14);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:r.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e15 in i) {i.hasOwnProperty(_e15) && void 0 !== i[_e15] && i.append(_e15, r[_e15]);}o = "multipart/form-data";} else {o = "application/json", i = {};for (_e16 in r) {void 0 !== r[_e16] && (i[_e16] = r[_e16]);}}a = { headers: { "content-type": o } };n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);c = this._localCache.getStore(s);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, l = t.inQuery, h = t.search;d = { env: this.config.env };u && (d.parse = !0), l && (d = _objectSpread(_objectSpread({}, l), d));f = function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var s = /\?/.test(t);var o = "";for (var _e17 in n) {"" === o ? !s && (t += "?") : o += "&", o += "".concat(_e17, "=").concat(encodeURIComponent(n[_e17]));}return /^http(s)?\:\/\//.test(t += o) ? t : "".concat(e).concat(t);}(Y, "//tcb-api.tencentcloudapi.com/web", d);h && (f += h);_context7.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:g = _context7.sent;p = g.header && g.header["x-tcb-trace"];if (!(p && this._localCache.setStore(s, p), 200 !== Number(g.status) && 200 !== Number(g.statusCode) || !g.data)) {_context7.next = 26;break;}throw new M({ code: "NETWORK_ERROR", message: "network request error" });case 26:return _context7.abrupt("return", g);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e) {var t,n,_n4,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:n = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === ve.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_n4 = _context8.sent;if (!_n4.data.code) {_context8.next = 12;break;}throw new M({ code: _n4.data.code, message: _n4.data.message });case 12:return _context8.abrupt("return", _n4.data);case 13:if (!n.data.code) {_context8.next = 15;break;}throw new M({ code: n.data.code, message: n.data.message });case 15:return _context8.abrupt("return", n.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,n = _this$_cache$keys3.accessTokenExpireKey,s = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }]);return be;}();var Oe = {};function Ce(e) {return Oe[e];}var Ee = /*#__PURE__*/function () {function Ee(e) {_classCallCheck(this, Ee);this.config = e, this._cache = le(e.env), this._request = Ce(e.env);}_createClass(Ee, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,n = _this$_cache$keys4.accessTokenExpireKey,s = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,n = _this$_cache$keys5.accessTokenKey,s = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(n, e), this._cache.setStore(s, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return Ee;}();var Re = /*#__PURE__*/function () {function Re(e) {_classCallCheck(this, Re);if (!e) throw new M({ code: "PARAM_ERROR", message: "envId is not defined" });this._envId = e, this._cache = le(this._envId), this._request = Ce(this._envId), this.setUserInfo();}_createClass(Re, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new M({ code: "PARAM_ERROR", message: "ticket must be string" });return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new M({ code: "PARAM_ERROR", message: "username must be a string" });return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var _yield$this$_request$2, e, t, n;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;n = e.users;return _context10.abrupt("return", (n.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: n, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {var t, n, s, o, r, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;n = e.gender;s = e.avatarUrl;o = e.province;r = e.country;i = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: n, avatarUrl: s, province: o, country: r, city: i });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this9 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this9[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return Re;}();var Ue = /*#__PURE__*/function () {function Ue(e) {_classCallCheck(this, Ue);if (!e) throw new M({ code: "PARAM_ERROR", message: "envId is not defined" });this._cache = le(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,n = _this$_cache$keys6.accessTokenKey,s = _this$_cache$keys6.accessTokenExpireKey,o = this._cache.getStore(t),r = this._cache.getStore(n),i = this._cache.getStore(s);this.credential = { refreshToken: o, accessToken: r, accessTokenExpire: i }, this.user = new Re(e);}_createClass(Ue, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === Se.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === Se.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === Se.WECHAT || this.loginType === Se.WECHAT_OPEN || this.loginType === Se.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Ue;}();var xe = /*#__PURE__*/function (_Ee) {_inherits(xe, _Ee);var _super4 = _createSuper(xe);function xe() {_classCallCheck(this, xe);return _super4.apply(this, arguments);}_createClass(xe, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var _this$_cache$keys7, e, t, n, s, o, _e18;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;n = this._cache.getStore(e) || void 0;s = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: n, refresh_token: s });case 8:o = _context13.sent;if (!(o.uuid && o.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(o.uuid);this.setRefreshToken(o.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:pe(ye);pe(we, { env: this.config.env, loginType: Se.ANONYMOUS, persistence: "local" });_e18 = new Ue(this.config.env);_context13.next = 19;return _e18.user.refresh();case 19:return _context13.abrupt("return", _e18);case 20:throw new M({ message: "匿名登录失败" });case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {var _this$_cache$keys8, t, n, s, o, r;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;n = _this$_cache$keys8.refreshTokenKey;s = this._cache.getStore(t);o = this._cache.getStore(n);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s, refresh_token: o, ticket: e });case 7:r = _context14.sent;if (!r.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(r.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:pe(ke, { env: this.config.env });pe(we, { loginType: Se.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: r.refresh_token } });case 16:throw new M({ message: "匿名转化失败" });case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,n = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, Se.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return xe;}(Ee);var Le = /*#__PURE__*/function (_Ee2) {_inherits(Le, _Ee2);var _super5 = _createSuper(Le);function Le() {_classCallCheck(this, Le);return _super5.apply(this, arguments);}_createClass(Le, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {var t, n;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new M({ param: "PARAM_ERROR", message: "ticket must be a string" });case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:n = _context15.sent;if (!n.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(n.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:pe(ye);pe(we, { env: this.config.env, loginType: Se.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new Ue(this.config.env));case 15:throw new M({ message: "自定义登录失败" });case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return Le;}(Ee);var De = /*#__PURE__*/function (_Ee3) {_inherits(De, _Ee3);var _super6 = _createSuper(De);function De() {_classCallCheck(this, De);return _super6.apply(this, arguments);}_createClass(De, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e, t) {var n, s, o, r, i;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new M({ code: "PARAM_ERROR", message: "email must be a string" });case 2:n = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 5:s = _context16.sent;o = s.refresh_token;r = s.access_token;i = s.access_token_expire;if (!o) {_context16.next = 22;break;}this.setRefreshToken(o);if (!(r && i)) {_context16.next = 15;break;}this.setAccessToken(r, i);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:pe(ye);pe(we, { env: this.config.env, loginType: Se.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new Ue(this.config.env));case 22:throw s.code ? new M({ code: s.code, message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message) }) : new M({ message: "邮箱登录失败" });case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return De;}(Ee);var qe = /*#__PURE__*/function (_Ee4) {_inherits(qe, _Ee4);var _super7 = _createSuper(qe);function qe() {_classCallCheck(this, qe);return _super7.apply(this, arguments);}_createClass(qe, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {var n, s, o, r, i;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new M({ code: "PARAM_ERROR", message: "username must be a string" });case 2:"string" != typeof t && (t = "", console.warn("password is empty"));n = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: Se.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 6:s = _context19.sent;o = s.refresh_token;r = s.access_token_expire;i = s.access_token;if (!o) {_context19.next = 23;break;}this.setRefreshToken(o);if (!(i && r)) {_context19.next = 16;break;}this.setAccessToken(i, r);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:pe(ye);pe(we, { env: this.config.env, loginType: Se.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new Ue(this.config.env));case 23:throw s.code ? new M({ code: s.code, message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message) }) : new M({ message: "用户名密码登录失败" });case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return qe;}(Ee);var Ne = /*#__PURE__*/function () {function Ne(e) {_classCallCheck(this, Ne);this.config = e, this._cache = le(e.env), this._request = Ce(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), ge(we, this._onLoginTypeChanged);}_createClass(Ne, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new xe(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new Le(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new De(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new qe(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new xe(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new De(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new qe(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new xe(this.config)), ge(ke, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var _this$_cache$keys10, e, t, n, s, o;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === Se.ANONYMOUS)) {_context23.next = 2;break;}throw new M({ message: "匿名用户不支持登出操作" });case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);if (s) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: s });case 7:o = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), pe(ye), pe(we, { env: this.config.env, loginType: Se.NULL, persistence: this.config.persistence }), o));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this10 = this;ge(ye, function () {var t = _this10.hasLoginState();e.call(_this10, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {ge(_e, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {ge(Te, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {ge(ke, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this11 = this;ge(we, function () {var t = _this11.hasLoginState();e.call(_this11, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new Ue(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new M({ code: "PARAM_ERROR", message: "username must be a string" });case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new Le(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,n = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,n = _e$data.persistence,s = _e$data.env;s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Ne;}();var Fe = function Fe(e, t) {t = t || Q();var n = Ce(this.config.env),s = e.cloudPath,o = e.filePath,r = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,l = _e$data2.fileId,h = _e$data2.cosFileId,d = e.requestId,f = { key: s, signature: c, "x-cos-meta-fileid": h, success_action_status: "201", "x-cos-security-token": u };n.upload({ url: a, data: f, file: o, name: s, fileType: i, onUploadProgress: r }).then(function (e) {201 === e.statusCode ? t(null, { fileID: l, requestId: d }) : t(new M({ code: "STORAGE_REQUEST_FAIL", message: "STORAGE_REQUEST_FAIL: ".concat(e.data) }));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},Me = function Me(e, t) {t = t || Q();var n = Ce(this.config.env),s = e.cloudPath;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},$e = function $e(_ref5, t) {var e = _ref5.fileList;if (t = t || Q(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t7 = _step3.value;if (!_t7 || "string" != typeof _t7) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var n = { fileid_list: e };return Ce(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},je = function je(_ref6, t) {var e = _ref6.fileList;t = t || Q(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });var n = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _s7 = _step4.value;"object" == typeof _s7 ? (_s7.hasOwnProperty("fileID") && _s7.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n.push({ fileid: _s7.fileID, max_age: _s7.maxAge })) : "string" == typeof _s7 ? n.push({ fileid: _s7 }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var s = { file_list: n };return Ce(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ke = /*#__PURE__*/function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(_ref7, t) {var e, n, s, o;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref7.fileID;_context29.next = 3;return je.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:n = _context29.sent.fileList[0];if (!("SUCCESS" !== n.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(n) : new Promise(function (e) {e(n);}));case 6:s = Ce(this.config.env);o = n.download_url;if (!(o = encodeURI(o), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", s.download({ url: o }));case 10:_context29.t0 = t;_context29.next = 13;return s.download({ url: o });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function Ke(_x26, _x27) {return _ref8.apply(this, arguments);};}(),Be = function Be(_ref9, r) {var e = _ref9.name,t = _ref9.data,n = _ref9.query,s = _ref9.parse,o = _ref9.search;var i = r || Q();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new M({ code: "PARAM_ERROR", message: "函数名不能为空" }));var c = { inQuery: n, parse: s, search: o, function_name: e, request_data: a };return Ce(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t8 = e.data.response_data;if (s) i(null, { result: _t8, requestId: e.requestId });else try {_t8 = JSON.parse(e.data.response_data), i(null, { result: _t8, requestId: e.requestId });} catch (e) {i(new M({ message: "response data must be json" }));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},He = { timeout: 15e3, persistence: "session" },We = {};var ze = /*#__PURE__*/function () {function ze(e) {_classCallCheck(this, ze);this.config = e || this.config, this.authObj = void 0;}_createClass(ze, [{ key: "init", value: function init(e) {switch (se.adapter || (this.requestClient = new se.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, He), e), !0) {case this.config.timeout > 6e5:console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;}return new ze(this.config);} }, { key: "auth", value: function auth() {var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref10.persistence;if (this.authObj) return this.authObj;var t = e || se.adapter.primaryStorage || He.persistence;var n;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;ce[t] = new ae(e), ue[t] = new ae(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), n = this.config, Oe[n.env] = new be(n), this.authObj = new Ne(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return ge.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return me.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return Be.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return $e.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return je.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return Ke.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return Fe.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return Me.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {We[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {var n;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:n = We[e];if (n) {_context30.next = 3;break;}throw new M({ message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C") });case 3:_context30.next = 5;return n.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref11 = ne(e) || {},t = _ref11.adapter,n = _ref11.runtime;t && (se.adapter = t), n && (se.runtime = n);} }]);return ze;}();var Ve = new ze();function Je(e, t, n) {void 0 === n && (n = {});var s = /\?/.test(t),o = "";for (var r in n) {"" === o ? !s && (t += "?") : o += "&", o += r + "=" + encodeURIComponent(n[r]);}return /^http(s)?:\/\//.test(t += o) ? t : "" + e + t;}var Ye = /*#__PURE__*/function () {function Ye() {_classCallCheck(this, Ye);}_createClass(Ye, [{ key: "post", value: function post(e) {var t = e.url,n = e.data,s = e.headers;return new Promise(function (e, o) {H.request({ url: Je("https:", t), data: n, method: "POST", header: s, success: function success(t) {e(t);}, fail: function fail(e) {o(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, n) {var s = e.url,o = e.file,r = e.data,i = e.headers,a = e.fileType,c = H.uploadFile({ url: Je("https:", s), name: "file", formData: Object.assign({}, r), filePath: o, fileType: a, header: i, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && r.success_action_status && (n.statusCode = parseInt(r.success_action_status, 10)), t(n);}, fail: function fail(e) {d && "mp-alipay" === g && console.warn("支付宝小程序开发工具上传腾讯云时无法准确判断是否上传成功，请使用真机测试"), n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return Ye;}();var Xe = { setItem: function setItem(e, t) {H.setStorageSync(e, t);}, getItem: function getItem(e) {return H.getStorageSync(e);}, removeItem: function removeItem(e) {H.removeStorageSync(e);}, clear: function clear() {H.clearStorageSync();} };var Ge = { genAdapter: function genAdapter() {return { root: {}, reqClass: Ye, localStorage: Xe, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };Ve.useAdapters(Ge);var Qe = Ve,Ze = Qe.init;Qe.init = function (e) {e.env = e.spaceId;var t = Ze.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;return t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = F(t[e]).bind(t);}), t;}, t.customAuth = t.auth, t;};var et = Qe;function tt() {return { token: H.getStorageSync("uni_id_token") || H.getStorageSync("uniIdToken"), tokenExpired: H.getStorageSync("uni_id_token_expired") };}function nt() {var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref12.token,t = _ref12.tokenExpired;e && H.setStorageSync("uni_id_token", e), t && H.setStorageSync("uni_id_token_expired", t);}function st() {if (!d || "web" !== g) return;uni.getStorageSync("__LAST_DCLOUD_APPID") !== _ && (uni.setStorageSync("__LAST_DCLOUD_APPID", _), console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), H.removeStorageSync("uni_id_token"), H.removeStorageSync("uniIdToken"), H.removeStorageSync("uni_id_token_expired"));}var ot = /*#__PURE__*/function (_V) {_inherits(ot, _V);var _super8 = _createSuper(ot);function ot() {_classCallCheck(this, ot);return _super8.apply(this, arguments);}_createClass(ot, [{ key: "getAccessToken", value: function getAccessToken() {var _this12 = this;return new Promise(function (e, t) {var n = "Anonymous_Access_token";_this12.setAccessToken(n), e(n);});} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };"auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = B.sign(n, this.config.clientSecret);var o = K();s["x-client-info"] = encodeURIComponent(JSON.stringify(o));var _tt = tt(),r = _tt.token;return s["x-client-token"] = r, { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: JSON.parse(JSON.stringify(s)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref13) {var _this13 = this;var e = _ref13.url,t = _ref13.formData,n = _ref13.name,s = _ref13.filePath,o = _ref13.fileType,r = _ref13.onUploadProgress;return new Promise(function (i, a) {var c = _this13.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: o, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new M({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new M({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof r && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {r({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref14) {var _this14 = this;var e = _ref14.filePath,t = _ref14.cloudPath,_ref14$fileType = _ref14.fileType,n = _ref14$fileType === void 0 ? "image" : _ref14$fileType,s = _ref14.onUploadProgress;if (!t) throw new M({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var o;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,r = _t$result.url,i = _t$result.formData,a = _t$result.name;o = t.result.fileUrl;var c = { url: r, formData: i, name: a, filePath: e, fileType: n };return _this14.uploadFileToOSS(Object.assign({}, c, { onUploadProgress: s }));}).then(function () {return _this14.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: o }) : s(new M({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref15) {var e = _ref15.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref16.fileList;var t = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };return this.request(this.setupRequest(t));} }]);return ot;}(V);var rt = { init: function init(e) {var t = new ot(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };function it(_ref17) {var e = _ref17.data;var t;t = K();var n = JSON.parse(JSON.stringify(e || {}));if (Object.assign(n, { clientInfo: t }), !n.uniIdToken) {var _tt2 = tt(),_e19 = _tt2.token;_e19 && (n.uniIdToken = _e19);}return n;}function at(_ref18) {var _this15 = this;var e = _ref18.name,t = _ref18.data;var n = this.localAddress,s = this.localPort,o = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],r = this.config.spaceId,i = "http://".concat(n, ":").concat(s, "/system/check-function"),a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);return new Promise(function (t, n) {H.request({ method: "POST", url: i, data: { name: e, platform: g, provider: o, spaceId: r }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref19.data;var _ref20 = e || {},t = _ref20.code,n = _ref20.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: n || "SYS_ERR" };}).then(function (_ref21) {var n = _ref21.code,s = _ref21.message;if (0 !== n) {switch (n) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e20 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e20), new Error(_e20);}case "SWITCH_TO_CLOUD":break;default:{var _e21 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e21), new Error(_e21);}}return _this15._originCallFunction({ name: e, data: t });}return new Promise(function (e, n) {var s = it.call(_this15, { data: t });H.request({ method: "POST", url: a, data: { provider: o, platform: g, param: s }, success: function success() {var _ref22 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref22.statusCode,s = _ref22.data;return !t || t >= 400 ? n(new M({ code: s.code || "SYS_ERR", message: s.message || "request:fail" })) : e({ result: s });}, fail: function fail(e) {n(new M({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var ct = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];var ut = /[\\^$.*+?()[\]{}|]/g,lt = RegExp(ut.source);function ht(e, t, n) {return e.replace(new RegExp((s = t) && lt.test(s) ? s.replace(ut, "\\$&") : s, "g"), n);var s;}function dt(_ref23) {var e = _ref23.functionName,t = _ref23.result,n = _ref23.logPvd;if (this.config.debugLog && t && t.requestId) {var _s8 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t.requestId });console.log("[".concat(n, "-request]").concat(_s8, "[/").concat(n, "-request]"));}}function ft(e) {var t = e.callFunction,n = function n(_n5) {var _this16 = this;var s = _n5.name;_n5.data = it.call(e, { data: _n5.data });var o = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider];return t.call(this, _n5).then(function (e) {return e.errCode = 0, dt.call(_this16, { functionName: s, result: e, logPvd: o }), Promise.resolve(e);}, function (e) {return dt.call(_this16, { functionName: s, result: e, logPvd: o }), e && e.message && (e.message = function () {var _ref24 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref24$message = _ref24.message,e = _ref24$message === void 0 ? "" : _ref24$message,_ref24$extraInfo = _ref24.extraInfo,t = _ref24$extraInfo === void 0 ? {} : _ref24$extraInfo,_ref24$formatter = _ref24.formatter,n = _ref24$formatter === void 0 ? [] : _ref24$formatter;for (var _s9 = 0; _s9 < n.length; _s9++) {var _n$_s = n[_s9],_o3 = _n$_s.rule,_r2 = _n$_s.content,i = _n$_s.mode,_a = e.match(_o3);if (!_a) continue;var _c = _r2;for (var _e22 = 1; _e22 < _a.length; _e22++) {_c = ht(_c, "{$".concat(_e22, "}"), _a[_e22]);}for (var _e23 in t) {_c = ht(_c, "{".concat(_e23, "}"), t[_e23]);}return "replace" === i ? _c : e + _c;}return e;}({ message: "[".concat(_n5.name, "]: ").concat(e.message), formatter: ct, extraInfo: { functionName: s } })), Promise.reject(e);});};e.callFunction = function (t) {var s;return d && e.debugInfo && !e.debugInfo.forceRemote && m ? (e._originCallFunction || (e._originCallFunction = n), s = at.call(this, t)) : s = n.call(this, t), Object.defineProperty(s, "result", { get: function get() {return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), s;};}var gt = Symbol("CLIENT_DB_INTERNAL");function pt(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = gt, e.__ob__ = void 0, new Proxy(e, { get: function get(e, n, s) {if ("_uniClient" === n) return null;if (n in e || "string" != typeof n) {var _t9 = e[n];return "function" == typeof _t9 ? _t9.bind(e) : _t9;}return t.get(e, n, s);} });}function mt(e) {return { on: function on(t, n) {e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);}, off: function off(t, n) {e[t] = e[t] || [];var s = e[t].indexOf(n);-1 !== s && e[t].splice(s, 1);} };}var yt = ["db.Geo", "db.command", "command.aggregate"];function _t(e, t) {return yt.indexOf("".concat(e, ".").concat(t)) > -1;}function wt(e) {switch (u(e)) {case "array":return e.map(function (e) {return wt(e);});case "object":return e._internalType === gt || Object.keys(e).forEach(function (t) {e[t] = wt(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}}function kt(e) {return e && e.content && e.content.$method;}var Tt = /*#__PURE__*/function () {function Tt(e, t, n) {_classCallCheck(this, Tt);this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;}_createClass(Tt, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: wt(e.$param) };}) };} }, { key: "getAction", value: function getAction() {var e = this.toJSON().$db.find(function (e) {return "action" === e.$method;});return e && e.$param && e.$param[0];} }, { key: "getCommand", value: function getCommand() {return { $db: this.toJSON().$db.filter(function (e) {return "action" !== e.$method;}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "_send", value: function _send(e, t) {var n = this.getAction(),s = this.getCommand();if (s.$db.push({ $method: e, $param: wt(t) }), d) {var _e24 = s.$db.find(function (e) {return "collection" === e.$method;}),_t10 = _e24 && _e24.$param;_t10 && 1 === _t10.length && "string" == typeof _e24.$param[0] && _e24.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");}return this._database._callCloudFunction({ action: n, command: s });} }, { key: "isAggregate", get: function get() {var e = this;for (; e;) {var t = kt(e),_n6 = kt(e.prevStage);if ("aggregate" === t && "collection" === _n6 || "pipeline" === t) return !0;e = e.prevStage;}return !1;} }, { key: "isCommand", get: function get() {var e = this;for (; e;) {if ("command" === kt(e)) return !0;e = e.prevStage;}return !1;} }, { key: "isAggregateCommand", get: function get() {var e = this;for (; e;) {var t = kt(e),_n7 = kt(e.prevStage);if ("aggregate" === t && "command" === _n7) return !0;e = e.prevStage;}return !1;} }, { key: "count", get: function get() {if (!this.isAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return St({ $method: "count", $param: wt(Array.from(arguments)) }, e, this._database);};} }, { key: "remove", get: function get() {if (!this.isCommand) return function () {return this._send("remove", Array.from(arguments));};var e = this;return function () {return St({ $method: "remove", $param: wt(Array.from(arguments)) }, e, this._database);};} }, { key: "set", get: function get() {if (!this.isCommand) return function () {throw new Error("JQL禁止使用set方法");};var e = this;return function () {return St({ $method: "set", $param: wt(Array.from(arguments)) }, e, this._database);};} }]);return Tt;}();function St(e, t, n) {return pt(new Tt(e, t, n), { get: function get(e, t) {var s = "db";return e && e.content && (s = e.content.$method), _t(s, t) ? St({ $method: t }, e, n) : function () {return St({ $method: t, $param: wt(Array.from(arguments)) }, e, n);};} });}function vt(_ref25) {var e = _ref25.path,t = _ref25.method;return /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);this.param = Array.from(arguments);}_createClass(_class2, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class2;}();}var At = /*#__PURE__*/function (_ref26) {_inherits(At, _ref26);var _super9 = _createSuper(At);function At() {_classCallCheck(this, At);return _super9.apply(this, arguments);}_createClass(At, [{ key: "_callCloudFunction", value: function _callCloudFunction(_ref27) {var _this17 = this;var e = _ref27.action,t = _ref27.command,n = _ref27.multiCommand,s = _ref27.queryList;function o(e, t) {if (n && s) for (var _n8 = 0; _n8 < s.length; _n8++) {var _o4 = s[_n8];_o4.udb && "function" == typeof _o4.udb.setResult && (t ? _o4.udb.setResult(t) : _o4.udb.setResult(e.result.dataList[_n8]));}}var r = this;function i(e) {return r._callback("error", [e]), P(I("database", "fail"), e).then(function () {return P(I("database", "complete"), e);}).then(function () {return o(null, e), N(O, { type: R, content: e }), Promise.reject(e);});}var a = P(I("database", "invoke")),u = this._uniClient;return a.then(function () {return u.callFunction({ name: "DCloud-clientDB", type: c, data: { action: e, command: t, multiCommand: n } });}).then(function (e) {var _e$result = e.result,t = _e$result.code,n = _e$result.message,s = _e$result.token,r = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,a = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (a) for (var _e25 = 0; _e25 < a.length; _e25++) {var _a$_e = a[_e25],_t11 = _a$_e.level,_n9 = _a$_e.message,_s10 = _a$_e.detail,_o5 = console["app" === g && "warn" === _t11 ? "error" : _t11] || console.log;var _r3 = "[System Info]" + _n9;_s10 && (_r3 = "".concat(_r3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s10)), _o5(_r3);}if (t) {return i(new M({ code: t, message: n, requestId: e.requestId }));}e.result.errCode = e.result.code, e.result.errMsg = e.result.message, s && r && (nt({ token: s, tokenExpired: r }), _this17._callbackAuth("refreshToken", [{ token: s, tokenExpired: r }]), _this17._callback("refreshToken", [{ token: s, tokenExpired: r }]), N(E, { token: s, tokenExpired: r }));var c = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];var _loop = function _loop(_t12) {var _c$_t = c[_t12],n = _c$_t.prop,s = _c$_t.tips;if (n in e.result) {var _t13 = e.result[n];Object.defineProperty(e.result, n, { get: function get() {return console.warn(s), _t13;} });}};for (var _t12 = 0; _t12 < c.length; _t12++) {_loop(_t12);}return function (e) {return P(I("database", "success"), e).then(function () {return P(I("database", "complete"), e);}).then(function () {return o(e, null), N(O, { type: R, content: e }), Promise.resolve(e);});}(e);}, function (e) {/fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");return i(new M({ code: e.code || "SYSTEM_ERROR", message: e.message, requestId: e.requestId }));});} }]);return At;}( /*#__PURE__*/function () {function _class3() {var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref28$uniClient = _ref28.uniClient,e = _ref28$uniClient === void 0 ? {} : _ref28$uniClient;_classCallCheck(this, _class3);this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = k("_globalUniCloudDatabaseCallback")), this.auth = mt(this._authCallBacks), Object.assign(this, mt(this._dbCallBacks)), this.env = pt({}, { get: function get(e, t) {return { $env: t };} }), this.Geo = pt({}, { get: function get(e, t) {return vt({ path: ["Geo"], method: t });} }), this.serverDate = vt({ path: [], method: "serverDate" }), this.RegExp = vt({ path: [], method: "RegExp" });}_createClass(_class3, [{ key: "getCloudEnv", value: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");return { $env: e.replace("$cloudEnv_", "") };} }, { key: "_callback", value: function _callback(e, t) {var n = this._dbCallBacks;n[e] && n[e].forEach(function (e) {e.apply(void 0, _toConsumableArray(t));});} }, { key: "_callbackAuth", value: function _callbackAuth(e, t) {var n = this._authCallBacks;n[e] && n[e].forEach(function (e) {e.apply(void 0, _toConsumableArray(t));});} }, { key: "multiSend", value: function multiSend() {var e = Array.from(arguments),t = e.map(function (e) {var t = e.getAction(),n = e.getCommand();if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");return { action: t, command: n };});return this._callCloudFunction({ multiCommand: t, queryList: e });} }]);return _class3;}());function Pt(e) {e.database = function (t) {if (t && Object.keys(t).length > 0) return e.init(t).database();if (this._database) return this._database;var n = function (e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};return pt(new e(t), { get: function get(e, t) {return _t("db", t) ? St({ $method: t }, null, e) : function () {return St({ $method: t, $param: wt(Array.from(arguments)) }, null, e);};} });}(At, { uniClient: e });return this._database = n, n;};}var It = "token无效，跳转登录页面",bt = "token过期，跳转登录页面",Ot = { TOKEN_INVALID_TOKEN_EXPIRED: bt, TOKEN_INVALID_INVALID_CLIENTID: It, TOKEN_INVALID: It, TOKEN_INVALID_WRONG_TOKEN: It, TOKEN_INVALID_ANONYMOUS_USER: It },Ct = { "uni-id-token-expired": bt, "uni-id-check-token-failed": It, "uni-id-token-not-exist": It, "uni-id-check-device-feature-failed": It };function Et(e, t) {var n = "";return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");}function Rt() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";var n = [],s = [];return e.forEach(function (e) {!0 === e.needLogin ? n.push(Et(t, e.path)) : !1 === e.needLogin && s.push(Et(t, e.path));}), { needLoginPage: n, notNeedLoginPage: s };}function Ut() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};if (!e) return !1;if (!(t && t.list && t.list.length)) return !1;var n = t.list,s = e.split("?")[0].replace(/^\//, "");return n.some(function (e) {return e.pagePath === s;});}var xt = !!_pages.default.uniIdRouter;var _ref29 = function () {var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,_ref30$pages = _ref30.pages,e = _ref30$pages === void 0 ? [] : _ref30$pages,_ref30$subPackages = _ref30.subPackages,n = _ref30$subPackages === void 0 ? [] : _ref30$subPackages,_ref30$uniIdRouter = _ref30.uniIdRouter,s = _ref30$uniIdRouter === void 0 ? {} : _ref30$uniIdRouter,_ref30$tabBar = _ref30.tabBar,o = _ref30$tabBar === void 0 ? {} : _ref30$tabBar;var r = s.loginPage,_s$needLogin = s.needLogin,i = _s$needLogin === void 0 ? [] : _s$needLogin,_s$resToLogin = s.resToLogin,a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,_Rt = Rt(e),c = _Rt.needLoginPage,u = _Rt.notNeedLoginPage,_ref31 = function () {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var t = [],n = [];return e.forEach(function (e) {var s = e.root,_e$pages = e.pages,o = _e$pages === void 0 ? [] : _e$pages,_Rt2 = Rt(o, s),r = _Rt2.needLoginPage,i = _Rt2.notNeedLoginPage;t.push.apply(t, _toConsumableArray(r)), n.push.apply(n, _toConsumableArray(i));}), { needLoginPage: t, notNeedLoginPage: n };}(n),l = _ref31.needLoginPage,h = _ref31.notNeedLoginPage;return { loginPage: r, routerNeedLogin: i, resToLogin: a, needLoginPage: [].concat(_toConsumableArray(c), _toConsumableArray(l)), notNeedLoginPage: [].concat(_toConsumableArray(u), _toConsumableArray(h)), loginPageInTabBar: Ut(r, o) };}(),Lt = _ref29.loginPage,Dt = _ref29.routerNeedLogin,qt = _ref29.resToLogin,Nt = _ref29.needLoginPage,Ft = _ref29.notNeedLoginPage,Mt = _ref29.loginPageInTabBar;function $t(e) {var t = function (e) {var t = getCurrentPages(),n = t[t.length - 1].route,s = e.charAt(0),o = e.split("?")[0];if ("/" === s) return o;var r = o.replace(/^\//, "").split("/"),i = n.split("/");i.pop();for (var _e26 = 0; _e26 < r.length; _e26++) {var _t14 = r[_e26];".." === _t14 ? i.pop() : "." !== _t14 && i.push(_t14);}return "" === i[0] && i.shift(), i.join("/");}(e).replace(/^\//, "");return !(Ft.indexOf(t) > -1) && (Nt.indexOf(t) > -1 || Dt.some(function (t) {return function (e, t) {return new RegExp(t).test(e);}(e, t);}));}function jt(e, t) {return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;}function Kt() {var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];var _loop2 = function _loop2(_t15) {var n = e[_t15];uni.addInterceptor(n, { invoke: function invoke(e) {var _tt3 = tt(),t = _tt3.token,s = _tt3.tokenExpired;var o;if (t) {if (s < Date.now()) {var _e27 = "uni-id-token-expired";o = { errCode: _e27, errMsg: Ct[_e27] };}} else {var _e28 = "uni-id-check-token-failed";o = { errCode: _e28, errMsg: Ct[_e28] };}if ($t(e.url) && o) {o.uniIdRedirectUrl = e.url;if (L(C).length > 0) return setTimeout(function () {N(C, o);}, 0), e.url = "", !1;if (!Lt) return e;var _t16 = jt(Lt, o.uniIdRedirectUrl);if (Mt) {if ("navigateTo" === n || "redirectTo" === n) return setTimeout(function () {uni.switchTab({ url: _t16 });}), !1;} else if ("switchTab" === n) return setTimeout(function () {uni.navigateTo({ url: _t16 });}), !1;e.url = _t16;}return e;} });};for (var _t15 = 0; _t15 < e.length; _t15++) {_loop2(_t15);}}function Bt() {this.onResponse(function (e) {var t = e.type,n = e.content;var s = !1;switch (t) {case "cloudobject":s = function (e) {var t = e.errCode;return t in Ct;}(n);break;case "clientdb":s = function (e) {var t = e.errCode;return t in Ot;}(n);}s && function () {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var t = L(C),n = getCurrentPages(),s = n[n.length - 1],o = s && s.$page && s.$page.fullPath;if (t.length > 0) return N(C, Object.assign({ uniIdRedirectUrl: o }, e));Lt && uni.navigateTo({ url: jt(Lt, o) });}(n);});}function Ht(e) {e.onNeedLogin = function (e) {D(C, e);}, e.offNeedLogin = function (e) {q(C, e);}, xt && (k("uni-cloud-status").needLoginInit || (k("uni-cloud-status").needLoginInit = !0, function t() {var n = getCurrentPages();n && n[0] ? Kt.call(e) : setTimeout(function () {t();}, 30);}(), qt && Bt.call(e)));}function Wt(e) {!function (e) {e.onResponse = function (e) {D(O, e);}, e.offResponse = function (e) {q(O, e);};}(e), Ht(e), function (e) {e.onRefreshToken = function (e) {D(E, e);}, e.offRefreshToken = function (e) {q(E, e);};}(e);}var zt;var Vt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Jt = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;function Yt() {var e = tt().token || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var n;try {n = JSON.parse((s = t[1], decodeURIComponent(zt(s).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);}var s;return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;}zt = "function" != typeof atob ? function (e) {if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !Jt.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");var t;e += "==".slice(2 - (3 & e.length));for (var n, s, o = "", r = 0; r < e.length;) {t = Vt.indexOf(e.charAt(r++)) << 18 | Vt.indexOf(e.charAt(r++)) << 12 | (n = Vt.indexOf(e.charAt(r++))) << 6 | (s = Vt.indexOf(e.charAt(r++))), o += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);}return o;} : atob;var Xt = s(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var n = "chooseAndUploadFile:ok",s = "chooseAndUploadFile:fail";function o(e, t) {return e.tempFiles.forEach(function (e, n) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function r(e, t, _ref32) {var s = _ref32.onChooseFile,o = _ref32.onUploadProgress;return t.then(function (e) {if (s) {var _t17 = s(e);if (void 0 !== _t17) return Promise.resolve(_t17).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: n, tempFilePaths: [], tempFiles: [] } : function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var o = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = n;var r = t.tempFiles,i = r.length;var a = 0;return new Promise(function (n) {for (; a < s;) {c();}function c() {var s = a++;if (s >= i) return void (!r.find(function (e) {return !e.url && !e.errMsg;}) && n(t));var u = r[s];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = s, e.tempFile = u, e.tempFilePath = u.path, o && o(e);} }).then(function (e) {u.url = e.fileID, s < i && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, s < i && c();});}});}(e, t, 5, o);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? r(e, function (e) {var t = e.count,n = e.sizeType,_e$sourceType = e.sourceType,r = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: n, sourceType: r, extension: i, success: function success(t) {e(o(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", s) });} });});}(t), t) : "video" === t.type ? r(e, function (e) {var t = e.camera,n = e.compressed,r = e.maxDuration,_e$sourceType2 = e.sourceType,i = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: n, maxDuration: r, sourceType: i, extension: a, success: function success(t) {var n = t.tempFilePath,s = t.duration,r = t.size,i = t.height,a = t.width;e(o({ errMsg: "chooseVideo:ok", tempFilePaths: [n], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: n, size: r, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: s, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", s) });} });});}(t), t) : r(e, function (e) {var t = e.count,n = e.extension;return new Promise(function (e, r) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return r({ errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });i({ type: "all", count: t, extension: n, success: function success(t) {e(o(t));}, fail: function fail(e) {r({ errMsg: e.errMsg.replace("chooseFile:fail", s) });} });});}(t), t);};};}),Gt = n(Xt);var Qt = "manual";function Zt(e) {return { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, spaceInfo: { type: Object, default: function _default() {return {};} }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this18 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this18[t]);}), e;}, function (e, t) {if (_this18.loadtime === Qt) return;var n = !1;var s = [];for (var _o6 = 2; _o6 < e.length; _o6++) {e[_o6] !== t[_o6] && (s.push(e[_o6]), n = !0);}e[0] !== t[0] && (_this18.mixinDatacomPage.current = _this18.pageCurrent), _this18.mixinDatacomPage.size = _this18.pageSize, _this18.onMixinDatacomPropsChange(n, s);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this19 = this;var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref33$getone = _ref33.getone,e = _ref33$getone === void 0 ? !1 : _ref33$getone,t = _ref33.success,n = _ref33.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {_this19.mixinDatacomLoading = !1;var _n$result = n.result,s = _n$result.data,o = _n$result.count;_this19.getcount && (_this19.mixinDatacomPage.count = o), _this19.mixinDatacomHasMore = s.length < _this19.pageSize;var r = e ? s.length ? s[0] : void 0 : s;_this19.mixinDatacomResData = r, t && t(r);}).catch(function (e) {_this19.mixinDatacomLoading = !1, _this19.mixinDatacomErrorMessage = e, n && n(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var _n10;var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var n = e.database(this.spaceInfo);var s = t.action || this.action;s && (n = n.action(s));var o = t.collection || this.collection;n = Array.isArray(o) ? (_n10 = n).collection.apply(_n10, _toConsumableArray(o)) : n.collection(o);var r = t.where || this.where;r && Object.keys(r).length && (n = n.where(r));var i = t.field || this.field;i && (n = n.field(i));var a = t.foreignKey || this.foreignKey;a && (n = n.foreignKey(a));var c = t.groupby || this.groupby;c && (n = n.groupBy(c));var u = t.groupField || this.groupField;u && (n = n.groupField(u));!0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());var l = t.orderby || this.orderby;l && (n = n.orderBy(l));var h = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,g = void 0 !== t.gettree ? t.gettree : this.gettree,p = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return g && (m.getTree = y), p && (m.getTreePath = y), n = n.skip(d * (h - 1)).limit(d).get(m), n;} } };}function en(e) {return function (t) {var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};n = function (e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};return e.customUI = t.customUI || e.customUI, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), e;}({ customUI: !1, loadingOptions: { title: "加载中...", mask: !0 }, errorOptions: { type: "modal", retry: !1 } }, n);var _n11 = n,s = _n11.customUI,o = _n11.loadingOptions,r = _n11.errorOptions,i = !s;return new Proxy({}, { get: function get(n, s) {return /*#__PURE__*/function () {var _n12 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32() {var u,_len,c,_key,_ref34,l,h,d,_yield,_e30,_e29,_args32 = arguments;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:i && uni.showLoading({ title: o.title, mask: o.mask });for (_len = _args32.length, c = new Array(_len), _key = 0; _key < _len; _key++) {c[_key] = _args32[_key];}_context32.prev = 2;_context32.next = 5;return e.callFunction({ name: t, type: a, data: { method: s, params: c } });case 5:u = _context32.sent;_context32.next = 11;break;case 8:_context32.prev = 8;_context32.t0 = _context32["catch"](2);u = { result: _context32.t0 };case 11:_ref34 = u.result || {}, l = _ref34.errCode, h = _ref34.errMsg, d = _ref34.newToken;if (!(i && uni.hideLoading(), d && d.token && d.tokenExpired && (nt(d), N(E, _objectSpread({}, d))), l)) {_context32.next = 28;break;}if (!i) {_context32.next = 26;break;}if (!("toast" === r.type)) {_context32.next = 18;break;}uni.showToast({ title: h, icon: "none" });_context32.next = 26;break;case 18:if (!("modal" !== r.type)) {_context32.next = 20;break;}throw new Error("Invalid errorOptions.type: ".concat(r.type));case 20:_context32.next = 22;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31() {var _ref36,e,t,n,s,o,_args31 = arguments;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:_ref36 = _args31.length > 0 && _args31[0] !== undefined ? _args31[0] : {}, e = _ref36.title, t = _ref36.content, n = _ref36.showCancel, s = _ref36.cancelText, o = _ref36.confirmText;return _context31.abrupt("return", new Promise(function (r, i) {uni.showModal({ title: e, content: t, showCancel: n, cancelText: s, confirmText: o, success: function success(e) {r(e);}, fail: function fail() {r({ confirm: !1, cancel: !0 });} });}));case 2:case "end":return _context31.stop();}}}, _callee31);}))({ title: "提示", content: h, showCancel: r.retry, cancelText: "取消", confirmText: r.retry ? "重试" : "确定" });case 22:_yield = _context32.sent;_e30 = _yield.confirm;if (!(r.retry && _e30)) {_context32.next = 26;break;}return _context32.abrupt("return", n.apply(void 0, c));case 26:_e29 = new M({ code: l, message: h, requestId: u.requestId });throw _e29.detail = u.result, N(O, { type: x, content: _e29 }), _e29;case 28:return _context32.abrupt("return", (N(O, { type: x, content: u.result }), u.result));case 29:case "end":return _context32.stop();}}}, _callee32, null, [[2, 8]]);}));function n() {return _n12.apply(this, arguments);}return n;}();} });};}function tn(_x30, _x31) {return _tn.apply(this, arguments);}function _tn() {_tn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee34(e, t) {var n, _e34, s;return _regenerator.default.wrap(function _callee34$(_context34) {while (1) {switch (_context34.prev = _context34.next) {case 0:n = "http://".concat(e, ":").concat(t, "/system/ping");_context34.prev = 1;_context34.next = 4;return s = { url: n, timeout: 500 }, new Promise(function (e, t) {H.request(_objectSpread(_objectSpread({}, s), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e34 = _context34.sent;return _context34.abrupt("return", !(!_e34.data || 0 !== _e34.data.code));case 8:_context34.prev = 8;_context34.t0 = _context34["catch"](1);return _context34.abrupt("return", !1);case 11:case "end":return _context34.stop();}}}, _callee34, null, [[1, 8]]);}));return _tn.apply(this, arguments);}function nn(e) {if (e.initUniCloudStatus && "rejected" !== e.initUniCloudStatus) return;var t = Promise.resolve();var n;n = 1, t = new Promise(function (e, t) {setTimeout(function () {e();}, n);}), e.isReady = !1, e.isDefault = !1;var s = e.auth();e.initUniCloudStatus = "pending", e.initUniCloud = t.then(function () {return s.getLoginState();}).then(function (e) {return e ? Promise.resolve() : s.signInAnonymously();}).then(function () {if (!d) return Promise.resolve();if ("app" === g && "ios" === uni.getSystemInfoSync().osName) {var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),_e31 = _uni$getSystemInfoSyn.osName,_t18 = _uni$getSystemInfoSyn.osVersion;"ios" === _e31 && function (e) {if (!e || "string" != typeof e) return 0;var t = e.match(/^(\d+)./);return t && t[1] ? parseInt(t[1]) : 0;}(_t18) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");}if (d && e.debugInfo) {var _e$debugInfo = e.debugInfo,_t19 = _e$debugInfo.address,_n13 = _e$debugInfo.servePort;return function () {var _ref37 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee33(e, t) {var n, _s11, _o7;return _regenerator.default.wrap(function _callee33$(_context33) {while (1) {switch (_context33.prev = _context33.next) {case 0:_s11 = 0;case 1:if (!(_s11 < e.length)) {_context33.next = 11;break;}_o7 = e[_s11];_context33.next = 5;return tn(_o7, t);case 5:if (!_context33.sent) {_context33.next = 8;break;}n = _o7;return _context33.abrupt("break", 11);case 8:_s11++;_context33.next = 1;break;case 11:return _context33.abrupt("return", { address: n, port: t });case 12:case "end":return _context33.stop();}}}, _callee33);}));return function (_x32, _x33) {return _ref37.apply(this, arguments);};}()(_t19, _n13);}}).then(function () {var _ref38 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref38.address,n = _ref38.port;if (!d) return Promise.resolve();var s = console["app" === g ? "error" : "warn"];if (t) e.localAddress = t, e.localPort = n;else if (e.debugInfo) {var _t20 = "";"remote" === e.debugInfo.initialLaunchType ? (e.debugInfo.forceRemote = !0, _t20 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs") : _t20 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs", "web" === g && (_t20 += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === g.indexOf("mp-") && (_t20 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), s(_t20);}}).then(function () {st(), e.isReady = !0, e.initUniCloudStatus = "fulfilled";}).catch(function (t) {console.error(t), e.initUniCloudStatus = "rejected";});}var sn = new ( /*#__PURE__*/function () {function _class4() {_classCallCheck(this, _class4);}_createClass(_class4, [{ key: "init", value: function init(e) {var t = {};var n = d && ("web" === g && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === g);switch (e.provider) {case "tcb":case "tencent":t = et.init(Object.assign(e, { debugLog: n }));break;case "aliyun":t = J.init(Object.assign(e, { debugLog: n }));break;case "private":t = rt.init(Object.assign(e, { debugLog: n }));break;default:throw new Error("未提供正确的provider参数");}var s = p;d && s && !s.code && (t.debugInfo = s), nn(t), t.reInit = function () {nn(this);}, ft(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {return t.call(this, e);};}(t), Pt(t), function (e) {e.getCurrentUserInfo = Yt, e.chooseAndUploadFile = Gt.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() {return Zt(e);} }), e.importObject = en(e);}(t);return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {if (!t[e]) return;var n = t[e];t[e] = function () {return t.reInit(), n.apply(t, Array.from(arguments));}, t[e] = F(t[e], e).bind(t);}), t.init = this.init, t;} }]);return _class4;}())();(function () {{var e = m;var _t21 = {};if (1 === e.length) _t21 = e[0], sn = sn.init(_t21), sn.isDefault = !0;else {var _t22 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];var _n14;_n14 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : y ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t22.forEach(function (e) {sn[e] = function () {return console.error(_n14), Promise.reject(new M({ code: "SYS_ERR", message: _n14 }));};});}Object.assign(sn, { get mixinDatacom() {return Zt(sn);} }), Wt(sn), sn.addInterceptor = v, sn.removeInterceptor = A, d && "web" === g && (window.uniCloud = sn);}})();var on = sn;exports.default = on;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

<<<<<<< HEAD
/***/ 646:
=======
/***/ 687:
>>>>>>> school
/*!*******************************************************************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.createAnimation = createAnimation;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} // const defaultOption = {
// 	duration: 300,
// 	timingFunction: 'linear',
// 	delay: 0,
// 	transformOrigin: '50% 50% 0'
// }
var


MPAnimation = /*#__PURE__*/function () {
  function MPAnimation(options, _this) {_classCallCheck(this, MPAnimation);
    this.options = options;
    this.animation = uni.createAnimation(options);
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;

  }_createClass(MPAnimation, [{ key: "_nvuePushAnimates", value: function _nvuePushAnimates(

    type, args) {
      var aniObj = this.currentStepAnimates[this.next];
      var styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {} };

      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = '';
        }
        var unit = '';
        if (type === 'rotate') {
          unit = 'deg';
        }
        styles.styles.transform += "".concat(type, "(").concat(args + unit, ") ");
      } else {
        styles.styles[type] = "".concat(args);
      }
      this.currentStepAnimates[this.next] = styles;
    } }, { key: "_animateRun", value: function _animateRun()
    {var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ref = this.$.$refs['ani'].ref;
      if (!ref) return;
      return new Promise(function (resolve, reject) {
        nvueAnimation.transition(ref, _objectSpread({
          styles: styles },
        config),
        function (res) {
          resolve();
        });
      });
    } }, { key: "_nvueNextAnimate", value: function _nvueNextAnimate(

    animates) {var _this2 = this;var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var fn = arguments.length > 2 ? arguments[2] : undefined;
      var obj = animates[step];
      if (obj) {var

        styles =

        obj.styles,config = obj.config;
        this._animateRun(styles, config).then(function () {
          step += 1;
          _this2._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === 'function' && fn();
        this.isEnd = true;
      }
    } }, { key: "step", value: function step()

    {var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.animation.step(config);






      return this;
    } }, { key: "run", value: function run(

    fn) {

      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(function () {
        typeof fn === 'function' && fn();
      }, this.$.durationTime);








    } }]);return MPAnimation;}();



var animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d',
'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY',
'translateZ'];

var animateTypes2 = ['opacity', 'backgroundColor'];
var animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];
animateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {
  MPAnimation.prototype[type] = function () {var _this$animation;

    (_this$animation = this.animation)[type].apply(_this$animation, arguments);




    return this;
  };
});

function createAnimation(option, _this) {
  if (!_this) return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 69:
/*!****************************************************!*\
  !*** D:/uniappprojrcy/校园生活助手/common/smile_data.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = [
{ title: '微笑', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/grinning-face-with-smiling-eyes_1f604.png' },
{ title: '呲牙', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/beaming-face-with-smiling-eyes_1f601.png' },
{ title: '冷汗', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/downcast-face-with-sweat_1f613.png' },
{ title: '尴尬', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/grinning-face-with-sweat_1f605.png' },
{ title: '脸红', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/smiling-face-with-smiling-eyes_1f60a.png' },
{ title: '闭嘴', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/shushing-face_1f92b.png' },
{ title: '偷笑', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/face-with-hand-over-mouth_1f92d.png' },
{ title: '鄙视', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/middle-finger_1f595.png' },
{ title: '酷', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/smiling-face-with-sunglasses_1f60e.png' },
{ title: '哭', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/loudly-crying-face_1f62d.png' },
{ title: '骂', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/face-with-symbols-on-mouth_1f92c.png' },
{ title: '怒', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/pouting-face_1f621.png' },
{ title: '鼓掌', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/clapping-hands_1f44f.png' },
{ title: '哼', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/unamused-face_1f612.png' },
{ title: '可怜', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/pleading-face_1f97a.png' },
{ title: '猪', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/pig-face_1f437.png' },
{ title: '吐', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/face-vomiting_1f92e.png' },
{ title: '欢快', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/rolling-on-the-floor-laughing_1f923.png' },
{ title: '快哭了', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/confounded-face_1f616.png' },
{ title: '伤心', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/frowning-face_2639-fe0f.png' },
{ title: '亲', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/kissing-face_1f617.png' },
{ title: '调皮', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/winking-face-with-tongue_1f61c.png' },
{ title: '睡', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/sleepy-face_1f62a.png' },
{ title: '惊吓', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/fearful-face_1f628.png' },
{ title: '便便', url: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/pile-of-poo_1f4a9.png' }];exports.default = _default;

/***/ }),

/***/ 7:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 8);

/***/ }),

/***/ 8:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 9);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 9:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map