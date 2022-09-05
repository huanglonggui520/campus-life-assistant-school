<template>
	<view class="short-code-btn" hover-class="hover" @click="start">
		<text class="inner-text" :class="reverseNumber==0?'inner-text-active':''">{{innerText}}</text>
	</view>
</template>

<script>
	function debounce(func, wait) {
		let timer;
		wait = wait || 500;
		return function() {
			let context = this;
			let args = arguments;
			if (timer) clearTimeout(timer);
			let callNow = !timer;
			timer = setTimeout(() => {
				timer = null;
			}, wait)
			if (callNow) func.apply(context, args);
		}
	}
	export default {
		name: "uni-send-sms-code",
		props: {
			/**
			 * 倒计时时长 s
			 */
			count: {
				type: [String, Number],
				default: 60
			},
			/**
			 * 手机号码
			 */
			phone: {
				type: [String, Number],
				default: ''
			},
			/*
				验证码类型，用于防止不同功能的验证码混用，目前支持的类型login登录、register注册、bind绑定手机、unbind解绑手机
			*/
			codeType:{
				type: String,
				default(){
					return 'login'
				}
			}
		},
		data() {
			return {
				reverseNumber: 0,
				reverseTimer: null
			};
		},
		computed: {
			innerText() {
				if (this.reverseNumber == 0) return this.$t('common.getVerifyCode');
				return this.$t('smsCode.resendVerifyCode')+ '('+this.reverseNumber+'s)';
			}
		},
		created() {
			this.initClick();
		},
		methods: {
			initClick() {
				this.start = debounce(() => {
					if (this.reverseNumber != 0) return;
					this.sendMsg();
				})
			},
			sendMsg() {
				let reg_phone = /^1\d{10}$/;
				if(!reg_phone.test(this.phone))return uni.showToast({
					title: this.$t('smsCode.phoneErrTip'),
					icon: 'none'
				});
				uniCloud.callFunction({
					name:'uni-id-cf',
					data:{
						action:'sendSmsCode',
						params:{
							"mobile": this.phone,
							"type": this.codeType
						},
					},
					success: ({result}) => {
						console.log(result);
						if(result.code===0){
							uni.showToast({
								title: this.$t('smsCode.sendSuccessTip'),
								icon: 'none'
							});
							this.reverseNumber = Number(this.count);
							this.getCode();
							this.$emit('getCode');
						}else{
							uni.showModal({
								content: result.msg,
								showCancel: false
							});
						}
					}
				})
			},
			getCode() {
				if (this.reverseNumber == 0) {
					clearTimeout(this.reverseTimer);
					this.reverseTimer = null;
					return;
				}
				this.reverseNumber--;
				this.reverseTimer = setTimeout(() => {
					this.getCode();
				}, 1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
/* #ifndef APP-NVUE */
view{
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
}
/* #endif */
	.short-code-btn {
		width: 200rpx;
		height: 85rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
	}
	.inner-text {
		font-size: 28rpx;
		color: #AAAAAA;
	}
	.inner-text-active {
		color: #007aff;
	}
</style>
