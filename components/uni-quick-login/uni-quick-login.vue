<template>
	<view>
		<view class="quick-login-box">
			<view class="item" v-for="(item,index) in servicesList" :key="index"
				@click="item.path?to(item.path):login_before(item.id,false)">
				<image class="logo" :src="item.logo" mode="widthFix"></image>
				<text class="login-title">{{item.text}}</text>
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<uni-user-profile @next="doUserProfileNext" ref="userProfile"></uni-user-profile>
		<!-- #endif -->
	</view>
</template>
<script>
	import {
		initVueI18n
	} from '@dcloudio/uni-i18n'
	import messages from './i18n/index.js'
	const {
		t
	} = initVueI18n(messages)
	import {
		mapGetters,
		mapMutations
	} from 'vuex';
	//前一个窗口的页面地址。控制点击切换快捷登录方式是创建还是返回
	import loginSuccess from '@/pages/ucenter/login-page/common/loginSuccess.js';
	const db = uniCloud.database();
	const usersTable = db.collection('uni-id-users')
	let allServicesList = []
	export default {
		computed: {
			loginConfig() {
				return getApp().globalData.config.router.login
			},
			agreements() {
				return getApp().globalData.config.about.agreements || []
			}
		},
		data() {
			return {
				servicesList: [{
						"id": "username",
						"text": t('accountLogin'),
						"logo": "/static/uni-quick-login/user.png",
						"path": "/pages/ucenter/login-page/pwd-login/pwd-login"
					},
					{
						"id": "smsCode",
						"text": t('SMSLogin'),
						"logo": "/static/uni-quick-login/sms.png",
						"path": "/pages/ucenter/login-page/index/index?type=smsCode"
					},
					{
						"id": "weixin",
						"text": t('wechatLogin'),
						"logo": "/static/uni-quick-login/wechat.png",
					},
					{
						"id": "apple",
						"text": t('appleLogin'),
						"logo": "/static/uni-quick-login/apple.png",
					},
					{
						"id": "univerify",
						"text": t('oneClickLogin'),
						"logo": "/static/uni-quick-login/univerify.png",
					},
					{
						"id": "qq",
						"text": t('QQLogin'), //暂未提供该登录方式的接口示例
						"logo": "/static/uni-quick-login/univerify.png",
					},
					{
						"id": "xiaomi",
						"text": t('xiaomiLogin'), //暂未提供该登录方式的接口示例
						"logo": "/static/uni-quick-login/univerify.png",
					},
					{
						"id": "sinaweibo",
						"text": t('weibo'), //暂未提供该登录方式的接口示例
						"logo": "/static/uni-quick-login/univerify.png",
					}
				],
				config: {},
				univerifyStyle: { //一键登录弹出窗的样式配置参数
					"fullScreen": true, // 是否全屏显示，true表示全屏模式，false表示非全屏模式，默认值为false。
					"backgroundColor": "#ffffff", // 授权页面背景颜色，默认值：#ffffff
					"buttons": { // 自定义登录按钮
						"iconWidth": "45px", // 图标宽度（高度等比例缩放） 默认值：45px
						"list": []
					},
					"privacyTerms": {
						"defaultCheckBoxState": false, // 条款勾选框初始状态 默认值： true   
						"textColor": "#BBBBBB", // 文字颜色 默认值：#BBBBBB  
						"termsColor": "#5496E3", //  协议文字颜色 默认值： #5496E3  
						"prefix": "我已阅读并同意", // 条款前的文案 默认值：“我已阅读并同意”  
						"suffix": "并使用本机号码登录", // 条款后的文案 默认值：“并使用本机号码登录”  
						"privacyItems": []
					}
				}
			}
		},
		watch: {
			agree(agree) {
				this.univerifyStyle.privacyTerms.defaultCheckBoxState = agree
			}
		},
		props: {
			agree: {
				type: Boolean,
				default () {
					return false
				}
			}
		},
		async created() {
			let servicesList = this.servicesList
			//去掉配置中不存在的 注意，在/common/appInit.js中已清除有配置但设备环境不支持的登录项
			servicesList = servicesList.filter(item => this.loginConfig.includes(item.id))
			//处理一键登录
			if (this.loginConfig.includes('univerify')) {
				this.univerifyStyle.privacyTerms.privacyItems = this.agreements
				//设置一键登录功能底下的快捷登录按钮
				servicesList.forEach(({
					id,
					logo,
					path
				}) => {
					if (id != 'univerify') {
						this.univerifyStyle.buttons.list.push({
							"iconPath": logo,
							"provider": id,
							// path
						})
					}
				})
			}
			console.log(servicesList);
			//如果当前页面为默认登录界面。当前第一优先级的“微信和苹果登录”要隐藏，因为他已经被渲染在默认登录界面顶部
			if (
				this.getRoute(1) == '/pages/ucenter/login-page/index/index' && ['weixin', 'apple'].includes(this
					.loginConfig[0])
			) {
				servicesList = servicesList.filter(item => item.id != this.loginConfig[0])
			}
			//去掉当前页面对应的登录选项
			this.servicesList = servicesList.filter(item => {
				let path = item.path ? item.path.split('?')[0] : '';
				return path != this.getRoute(1)
			})
			console.log('servicesList', servicesList, this.servicesList);
		},
		mounted() {},
		methods: {
			...mapMutations({
				setUserInfo: 'user/login'
			}),
			getRoute(n = 0) {
				let pages = getCurrentPages();
				// console.log('route-pages-length', pages.length);
				if (n > pages.length) {
					return ''
				}
				return '/' + pages[pages.length - n].route
			},
			to(path) {
				console.log('比较', this.getRoute(1),this.getRoute(2), path)
				if(this.getRoute(1) == path.split('?')[0] && this.getRoute(1) == '/pages/ucenter/login-page/index/index'){
					//如果要被打开的页面已经打开，且这个页面是 /pages/ucenter/login-page/index/index 则把类型参数传给他
					let type = path.split('?')[1].split('=')[1]
					uni.$emit('setLoginType',type)
				}else if(this.getRoute(2) == path) { // 如果上一个页面就是，马上要打开的页面，直接返回。防止重复开启
					uni.navigateBack();
				}else if(this.getRoute(1) != path) {
					uni.navigateTo({
						url: path,
						animationType: 'slide-in-left'
					})
				}else{
					console.log('出乎意料的情况,path：'+path);
				}
			},
			login_before(type, navigateBack = true) {
				console.log(type);
				if (!this.agree && type != 'univerify') {
					return uni.showToast({
						title: t('noAgree'),
						icon: 'none'
					});
				}
				uni.showLoading({mask: true})
				if (type == 'univerify' && uni.getUniverifyManager) {
					let univerifyManager = uni.getUniverifyManager()
					console.log('是新版');
					let onButtonsClickFn =	async res =>{
						console.log('点击了第三方登录，provider：',res, res.provider,this.univerifyStyle.buttons.list);
						//同步一键登录弹出层隐私协议框是否打勾
						let agree = (await uni.getCheckBoxState())[1].state
						console.log('agree',agree);
						uni.$emit('setAgreementsAgree', agree)
						let {
							path
						} = this.univerifyStyle.buttons.list[res.index]
						console.log('path', path,this.getRoute(1));
						if (path) {
							this.to(path)
							closeUniverify()
						} else {
							if(agree){
								closeUniverify()
								setTimeout(() => {
									console.log('login_before');
									this.login_before(res.provider)
								}, 500)
							}else{
								console.log(t('noAgree'));
								uni.showToast({
									title: t('noAgree'),
									icon: 'none'
								});
							}
						}
					}
					function closeUniverify(){
						uni.hideLoading()
						univerifyManager.close()
						// 取消订阅自定义按钮点击事件
						univerifyManager.offButtonsClick(onButtonsClickFn)
					}
					// 订阅自定义按钮点击事件
					univerifyManager.onButtonsClick(onButtonsClickFn)
					// 调用一键登录弹框
					return univerifyManager.login({
						"univerifyStyle": this.univerifyStyle,
						success:res=> {
							console.log('login success', res)
							this.login(res.authResult, 'univerify')
						},
						fail(err) {
							uni.showToast({
								title: JSON.stringify(err),
								icon: 'none'
							});
						},
						complete(e){
							uni.hideLoading()
							// 取消订阅自定义按钮点击事件
							univerifyManager.offButtonsClick(onButtonsClickFn)
						}
					})
				}
				uni.login({
					"provider": type,
					"onlyAuthorize": true, //请勿直接使用前端获取的unionid或openid直接用于登录，前端的数据都是不可靠的
					"univerifyStyle": this.univerifyStyle,
					complete: (e) => {
						console.log(e);
						uni.hideLoading()
					},
					success: async e => {
						console.log(e);
						if (type == 'apple') {
							let res = await this.getUserInfo({
								provider: "apple"
							})
							Object.assign(e.authResult, res.userInfo)
						}
						this.login(type == 'weixin' ? e.code : e.authResult, type)
					},
					fail: async (err) => {
						console.log(err);
						// 以下代码为兼容旧版（HBuilderX3.2.13之前）HBuilderX3.2.13以上版本可直接删除
						if (type == 'univerify'&& !uni.getUniverifyManager) {
							if (err.metadata && err.metadata.error_data) {
								uni.showToast({
									title: t('oneClickLogin') + ":" + err.metadata.error_data,
									icon: 'none'
								});
							}
							if (err.errMsg) {
								uni.showToast({
									title: t('oneClickLogin') + ":" + err.errMsg,
									icon: 'none'
								});
							}
							switch (err.errCode) {
								case 30002:
									console.log('在一键登录界面，点击其他登录方式');
									break;
								case 30003:
									console.log('关闭了登录');
									if (navigateBack) {
										uni.navigateBack()
									}
									break;
								case 30006:
									uni.showModal({
										title: t('loginErr'),
										content: err.metadata.error_data,
										showCancel: false,
										confirmText: t('gotIt'),
									});
									break;
								case "30008":
									console.log('点击了第三方登录，provider：', err.provider);
									//同步一键登录弹出层隐私协议框是否打勾
									let agree = (await uni.getCheckBoxState())[1].state
									console.log('agree', agree);
									uni.$emit('setAgreementsAgree', agree)
									let {
										path
									} = this.univerifyStyle.buttons.list[res.index]
									console.log('path', path);
									if (path) {
										this.to(path)
									} else {
										setTimeout(() => {
											console.log('agree', this.agree);
											this.login_before(err.provider)
										}, 500)
									}
									break;
								default:
									console.log(err);
									break;
							}
						}
						// 以上代码为兼容旧版（HBuilderX3.2.13之前）HBuilderX3.2.13以上版本可直接删除
					}
				})
			},
			login(params, type) { //联网验证登录
				console.log({
					params,
					type
				});
				let action = 'loginBy' + type.trim().toLowerCase().replace(type[0], type[0].toUpperCase())
				uniCloud.callFunction({
					name: 'uni-id-cf',
					data: {
						action,
						params
					},
					success: async ({
						result
					}) => {
						console.log("login-result", result);
						if (result.code === 0) {
							delete result.userInfo.token
							// #ifdef MP-WEIXIN
							if (type == 'weixin' && !result.userInfo.nickname) {
								return this.$refs.userProfile.open(result.uid)
							}
							// #endif
							if (result.type == "register") {  
								result.userInfo._id = result.uid  
							}
							this.setUserInfo(result.userInfo)
							loginSuccess(result)
						} else {
							uni.showModal({
								content: result.msg,
								showCancel: false
							});
						}
					},
					complete: (e) => {
						console.log(e);
						if (type == 'univerify') {
							uni.closeAuthView()
						}
						uni.hideLoading()
					}
				})
			},
			doUserProfileNext() {
				loginSuccess()
			},
			async getUserInfo(e) {
				return new Promise((resolve, reject) => {
					uni.getUserInfo({
						...e,
						success: (res) => {
							resolve(res);
						},
						fail: (err) => {
							uni.showModal({
								content: JSON.stringify(err),
								showCancel: false
							});
							reject(err);
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifndef APP-NVUE */
	view {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}

	/* #endif */
	.quick-login-box {
		flex-direction: row;
		width: 750rpx;
		justify-content: space-around;
		position: fixed;
		bottom: 10rpx;
		left: 0;
	}

	.item {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 200rpx;
	}

	.logo {
		width: 60rpx;
		height: 60rpx;
	}

	.login-title {
		margin-top: 4px;
		font-size: 26rpx;
	}
</style>
