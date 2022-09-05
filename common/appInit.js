import uniStarterConfig from '@/uni-starter.config.js';
import store from '@/store'
//应用初始化页
// #ifdef APP-PLUS
import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update';
import callCheckVersion from '@/uni_modules/uni-upgrade-center-app/utils/call-check-version';
import interceptorChooseImage from '@/uni_modules/json-interceptor-chooseImage/js_sdk/main.js';
// #endif
const db = uniCloud.database()
export default async function() {
	let loginConfig = uniStarterConfig.router.login;
	const debug = uniStarterConfig.debug;
	//清除有配置但设备环境不支持的登录项
	// #ifdef APP-PLUS
	await new Promise((callBack) => {
		plus.oauth.getServices(oauthServices => {
			loginConfig = loginConfig.filter(item => {
				if (["univerify", "weixin", "apple"].includes(item)) {
					let index = oauthServices.findIndex(e => e.id == item)
					if (index == -1) {
						return false
					} else {
						return oauthServices[index].nativeClient
					}
				} else {
					return true
				}
			})
			if (loginConfig.includes('univerify')) { //一键登录 功能预登录
				uni.preLogin({
					provider: 'univerify',
					complete: e => {
						console.log(e);
					}
				})
			}
			callBack()
		}, err => {
			console.error('获取服务供应商失败：' + JSON.stringify(err));
		})
	})
	// #endif

	//非app移除：一键登录、苹果登录；h5移除微信登录，如果你做微信公众号登录需要将此行移除
	// #ifndef APP-PLUS
	loginConfig = loginConfig.filter(item => {
		return ![
			'univerify',
			'apple',
			// #ifdef H5
			'weixin'
			// #endif
		].includes(item)
	})
	// #endif

	uniStarterConfig.router.login = loginConfig

	// uniStarterConfig挂载到getApp().globalData.config
	setTimeout(() => {
		getApp({
			allowDefault: true
		}).globalData.config = uniStarterConfig;
	}, 1)


	// 初始化appVersion（仅app生效）
	initAppVersion();

	// #ifdef APP-PLUS
	// 实现，路由拦截。当应用无访问摄像头/相册权限，引导跳到设置界面
	interceptorChooseImage()
	// #endif


	//clientDB的错误提示
	function onDBError({
		code, // 错误码详见https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue
		message
	}) {
		console.log('onDBError', {
			code,
			message
		});
		// 处理错误
		console.error(code, message);
		if ([
				'TOKEN_INVALID_INVALID_CLIENTID',
				'TOKEN_INVALID',
				'TOKEN_INVALID_TOKEN_EXPIRED',
				'TOKEN_INVALID_WRONG_TOKEN',
				'TOKEN_INVALID_ANONYMOUS_USER'
			].includes(code)) {
			uni.navigateTo({
				url: '/pages/ucenter/login-page/index/index'
			})
		}
	}
	// 绑定clientDB错误事件
	db.on('error', onDBError)

	// 解绑clientDB错误事件
	//db.off('error', onDBError)
	db.on('refreshToken', function({
		token,
		tokenExpired
	}) {
		console.log('监听到clientDB的refreshToken', {
			token,
			tokenExpired
		});
		store.commit('user/login', {
			token,
			tokenExpired
		})
	})
	
	uni.addInterceptor('setStorage', {
		invoke(args) {
			if (args.data && args.key == 'uni_id_token') {
				let oldToken = uni.getStorageSync('uni_id_token')
				if(oldToken.length){
					console.log('监听到token更新，就刷新push_clientid的有效期');
					// #ifdef APP-PLUS
					let push_clientid;
					try {
						push_clientid = plus.push.getClientInfo().clientid
					} catch (e) {
						uni.showModal({
							content: '获取推送标识失败。如果你的应用不需要推送功能，请注释掉本代码块',
							showCancel: false,
							confirmText: "好的"
						});
						console.log(e)
					}
					uniCloud.callFunction({
						name:'uni-id-cf',
						data:{
							"action": "renewDeviceTokenExpiredxpired",
							"params": {push_clientid}
						},
						complete: (e) => {
							console.log(e);
						}
					})
					// #endif
				}
			}
			// console.log('interceptor-complete', args)
		},
		complete(e) {
			// console.log(e);
		}
	})

	//拦截器封装callFunction
	let callFunctionOption;
	uniCloud.addInterceptor('callFunction', {
		async invoke(option) {
			// 判断如果是执行登录（无论是哪种登录方式），就记录用户的相关设备id
			// 注意：注册可能不仅仅走register接口，还有登录并注册的接口
			if (option.name == 'uni-id-cf' &&
				(option.data.action == 'register' || option.data.action.slice(0, 5) == 'login')
			) {
				option.data.deviceInfo = await getDeviceInfo()
				console.log("重新登录/注册，获取设备id", option.data.deviceInfo);
				option.data.inviteCode = await new Promise((callBack) => {
					uni.getClipboardData({
						success: function(res) {
							if (res.data.slice(0, 18) == 'uniInvitationCode:') {
								let uniInvitationCode = res.data.slice(18, 38)
								console.log('当前用户是其他用户推荐下载的,推荐者的code是：' +
									uniInvitationCode);
								// uni.showModal({
								// 	content: '当前用户是其他用户推荐下载的,推荐者的code是：'+uniInvitationCode,
								// 	showCancel: false
								// });
								callBack(uniInvitationCode)
								//当前用户是其他用户推荐下载的。这里登记他的推荐者id 为当前用户的myInviteCode。判断如果是注册
							} else {
								callBack(false)
							}
						},
						fail() {
							callBack(false)
						},
						complete(){
							// #ifdef MP-WEIXIN
							uni.hideToast()
							// #endif
						}
					});
				})
			}
			// console.log(JSON.stringify(option));
			callFunctionOption = option
		},
		complete(e) {
			// console.log(JSON.stringify(e));
		},
		fail(e) { // 失败回调拦截
			console.error('网络请求错误码：',JSON.stringify(e));
			if (debug) {
				uni.showModal({
					content: JSON.stringify(e),
					showCancel: false
				});
				console.error(e);
			} else {
				uni.showModal({
					content: "系统错误请稍后再试！",
					showCancel: false,
					confirmText: "知道了"
				});
			}
			//如果执行错误，检查是否断网
			uni.getNetworkType({
				complete: res => {
					// console.log(res);
					if (res.networkType == 'none') {
						uni.showToast({
							title: '手机网络异常',
							icon: 'none'
						});
						console.log('手机网络异常');
						let callBack = res => {
							console.log(res);
							if (res.isConnected) {
								uni.showToast({
									title: '恢复联网自动重新执行',
									icon: 'none'
								});
								console.log(res.networkType, "恢复联网自动重新执行");
								uni.offNetworkStatusChange(e => {
									console.log("移除监听成功", e);
								})
								//恢复联网自动重新执行
								uniCloud.callFunction(callFunctionOption)
								uni.offNetworkStatusChange(callBack);
							}
						}
						uni.onNetworkStatusChange(callBack);
					}
				}
			});
		},
		success: (e) => {
			const {
				token,
				tokenExpired
			} = e.result
			if (token && tokenExpired) {
				store.commit('user/login', {
					token,
					tokenExpired
				})
			}
			switch (e.result.code) {
				case 403:
					uni.navigateTo({
						url: "/pages/ucenter/login-page/index/index"
					})
					break;
				case 30203:
					uni.navigateTo({
						url: "/pages/ucenter/login-page/index/index"
					})
					break;
				case 50101:
					uni.showToast({
						title: e.result.msg,
						icon: 'none',
						duration: 2000
					});
					break;
				default:
					console.log('code的值是：' + e.result.code, '可以在上面添加case，自动处理响应体');
					break;
			}

			switch (e.result.errCode) {
				case 'uni-id-token-not-exist':
					uni.showToast({
						title: '登录信息失效',
						icon: 'none'
					});
					uni.navigateTo({
						url: "/pages/ucenter/login-page/index/index"
					})
					break;
				default:
					break;
			}
		}
	})

	//自定义路由拦截
	const {
		"router": {
			needLogin,
			visitor,
			login
		}
	} = uniStarterConfig //需要登录的页面

	let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
	list.forEach(item => { //用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
		uni.addInterceptor(item, {
			invoke(e) { // 调用前拦截
				//获取用户的token
				const token = uni.getStorageSync('uni_id_token'),
					//token是否已失效
					tokenExpired = uni.getStorageSync('uni_id_token_expired') < Date.now(),
					//获取要跳转的页面路径（url去掉"?"和"?"后的参数）
					url = e.url.split('?')[0];
				//获取要前往的页面路径（即url去掉"?"和"?"后的参数）
				const pages = getCurrentPages();
				if (!pages.length) {
					console.log("首页启动调用了");
					return e
				}
				const fromUrl = pages[pages.length - 1].route;

				let inLoginPage = fromUrl.split('/')[2] == 'login-page'

				//控制登录优先级
				if ( //判断当前窗口是否为登录页面，如果是则不重定向路由
					url == '/pages/ucenter/login-page/index/index' &&
					!inLoginPage
				) {
					//一键登录（univerify）、账号（username）、验证码登录（短信smsCode）
					if (login[0] == 'username') {
						e.url = "/pages/ucenter/login-page/pwd-login/pwd-login"
					} else {
						if (e.url == url) {
							e.url += '?'
						} //添加参数之前判断是否带了`？`号如果没有就补上，因为当开发场景本身有参数的情况下是已经带了`？`号
						e.url += "type=" + login[0]
					}
				} else {
					//拦截强制登录页面
					let pass = true
					//pattern
					if (needLogin) {
						pass = needLogin.every((item) => {
							if (typeof(item) == 'object' && item.pattern) {
								return !item.pattern.test(url)
							}
							return url != item
						})
						// console.log({pass})
					}
					if (visitor) {
						pass = visitor.some((item) => {
							if (typeof(item) == 'object' && item.pattern) {
								return item.pattern.test(url)
							}
							return url == item
						})
						// console.log({pass})
					}

					if (!pass && (token == '' || tokenExpired)) {
						uni.showToast({
							title: '请先登录',
							icon: 'none'
						})
						uni.navigateTo({
							url: "/pages/ucenter/login-page/index/index"
						})
						return false
					}
				}
				return e
			},
			fail(err) { // 失败回调拦截 
				console.log(err);
				if (debug) {
					console.log(err);
					uni.showModal({
						content: JSON.stringify(err),
						showCancel: false
					});
				}
			}
		})
	})

	// #ifdef APP-PLUS
	// 监听并提示设备网络状态变化
	uni.onNetworkStatusChange(res => {
		console.log(res.isConnected);
		console.log(res.networkType);
		if (res.networkType != 'none') {
			uni.showToast({
				title: '当前网络类型：' + res.networkType,
				icon: 'none',
				duration: 3000
			})
		} else {
			uni.showToast({
				title: '网络类型：' + res.networkType,
				icon: 'none',
				duration: 3000
			})
		}
	});
	// #endif

}
/**
 * // 初始化appVersion
 */
function initAppVersion() {
	// #ifdef APP-PLUS
	let appid = plus.runtime.appid;
	plus.runtime.getProperty(appid, (wgtInfo) => {
		let appVersion = plus.runtime;
		let currentVersion = appVersion.versionCode > wgtInfo.versionCode ? appVersion : wgtInfo;
		getApp({
			allowDefault: true
		}).appVersion = {
			...currentVersion,
			appid,
			hasNew: false
		}
		// 检查更新小红点
		callCheckVersion().then(res => {
			// console.log('检查是否有可以更新的版本', res);
			if (res.result.code > 0) {
				// 有新版本
				getApp({
					allowDefault: true
				}).appVersion.hasNew = true;
			}
		})
	});
	// 检查更新
	// #endif
}

async function getDeviceInfo() {
	let deviceInfo = {
		"uuid": '',
		"vendor": '',
		"push_clientid": '',
		"imei": '',
		"oaid": '',
		"idfa": '',
		"model": '',
		"platform": '',
	}
	const {
		model,
		platform,
	} = uni.getSystemInfoSync();
	Object.assign(deviceInfo, {
		model,
		platform
	});

	// #ifdef APP-PLUS
	const oaid = await new Promise((callBack, fail) => {
			if (deviceInfo.platform == "android") {
				plus.device.getOAID({
					success: function(e) {
						callBack(e.oaid)
						// console.log('getOAID success: '+JSON.stringify(e));
					},
					fail: function(e) {
						callBack()
						console.log('getOAID failed: ' + JSON.stringify(e));
					}
				});
			} else {
				callBack()
			}
		}),
		{
			imei,
			uuid
		} = await new Promise((callBack, fail) => {
			plus.device.getInfo({
				success: function(e) {
					callBack(e)
					// console.log('getOAID success: '+JSON.stringify(e));
				},
				fail: function(e) {
					callBack()
					console.log('getOAID failed: ' + JSON.stringify(e));
				}
			});
		}),
		idfa = plus.storage.getItem('idfa') || '', //idfa有需要的用户在应用首次启动时自己获取存储到storage中
		vendor = plus.device.vendor;
	try {
		deviceInfo.push_clientid = plus.push.getClientInfo().clientid
	} catch (e) {
		uni.showModal({
			content: '获取推送标识失败。如果你的应用不需要推送功能，请注释掉本代码块',
			showCancel: false,
			confirmText: "好的"
		});
		console.log(e)
	}
	Object.assign(deviceInfo, {
		imei,
		uuid,
		idfa,
		vendor
	});
	// #endif
	return deviceInfo
}