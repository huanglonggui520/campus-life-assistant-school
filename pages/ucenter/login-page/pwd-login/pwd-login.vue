<template>
	<view class="content">
		<!-- 顶部文字 -->
		<text class="title">{{$t('pwdLogin.pwdLogin')}}</text>
		<input class="input-box" :inputBorder="false" v-model="username" :placeholder="$t('pwdLogin.placeholder')"/>
		<input type="password" class="input-box" :inputBorder="false" v-model="password" :placeholder="$t('pwdLogin.passwordPlaceholder')"/>
		<uni-captcha v-if="needCaptcha" scene="login" v-model="captcha"></uni-captcha>
		<uni-agreements class="agreement" @setAgree="agree = $event"></uni-agreements>
		<button class="send-btn" :disabled="!canLogin" :type="canLogin?'primary':'default'"
			@click="pwdLogin">{{$t('pwdLogin.login')}}</button>
		<!-- 忘记密码 -->
		<view class="auth-box">
			<text class="link" @click="toRetrievePwd">{{$t('pwdLogin.forgetPassword')}}</text>
			<text class="link" @click="toRegister">{{$t('pwdLogin.register')}}</text>
		</view>
		<uni-quick-login :agree="agree" ref="uniQuickLogin"></uni-quick-login>
	</view>
</template>

<script>
	import mixin from '../common/login-page.mixin.js';
	export default {
		mixins: [mixin],
		data() {
			return {
				"password": "",
				"username": "",
				"agree": false,
				"captcha":'',
				"needCaptcha":false
			}
		},
		computed: {
			canLogin() {
				return this.username.length && this.isPwd && this.agree;
			},
			isPwd() {
				return /^.{6,20}$/.test(this.password);
			},
			isPhone() {
				return /^1\d{10}$/.test(this.phone);
			},
		},
		methods: {
			// 页面跳转，找回密码
			toRetrievePwd() {
				uni.navigateTo({
					url: '../pwd-retrieve/pwd-retrieve?phoneNumber=' + (this.isPhone ? this.username : '') +
						'&phoneArea=' + this.currenPhoneArea
				})
			},
			/**
			 * 密码登录
			 */
			pwdLogin() {
				if (!this.agree) {
					return uni.showToast({
						title: this.$t('common.noAgree'),
						icon: 'none'
					});
				}
				// 下边是可以登录
				uniCloud.callFunction({
					name:'uni-id-cf',
					data:{
						action:'login',
						params:{
							"username": this.username,
							"password": this.password,
							"captcha":this.captcha
						},
					},
					success: ({result}) => {
						console.log(result);
						if (result.code === 0) {
							this.loginSuccess(result)
						} else {
							if (result.needCaptcha) {
								uni.showToast({
									title: result.msg||'完成',
									icon: 'none'
								});
								this.needCaptcha = true
								// this.createCaptcha()
							}else{
								uni.showModal({
									title: this.$t('common.error'),
									content: result.msg,
									showCancel: false,
									confirmText: this.$t('common.gotIt')
								});
							}
						}
					}
				})
			},
			/* 前往注册 */
			toRegister(e) {
				console.log(e);
				uni.navigateTo({
					url: '/pages/ucenter/login-page/register/register'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../common/login-page.css");

	.auth-box {
		flex-direction: row;
		justify-content: space-between;
		margin-top: 20px;
	}

	.auth-box .link {
		font-size: 26rpx;
	}

	.login-text-sub {
		color: #8a8f8b;
	}

	.toRegister {
		margin-top: 80px;
		width: 600rpx;
	}
	.agreement{
		margin-top: 10px;
	}
</style>
