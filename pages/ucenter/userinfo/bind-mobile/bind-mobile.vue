<template>
	<view class="uni-content">
		<!-- 登录框 (选择手机号所属国家和地区需要另行实现) -->
		<uni-easyinput clearable focus type="number" class="input-box" :inputBorder="false" v-model="formData.mobile"
			maxlength="11" placeholder="请输入手机号"></uni-easyinput>
		<uni-easyinput clearable type="number" class="input-box" :inputBorder="false" v-model="formData.code"
			maxlength="6" :placeholder="$t('common.verifyCodePlaceholder')">
			<template v-slot:right>
				<uni-send-sms-code ref="shortCode" code-type="bind" :phone="formData.mobile"></uni-send-sms-code>
			</template>
		</uni-easyinput>
		<button class="uni-btn send-btn-box" :disabled="!canSubmit" :type="canSubmit?'primary':'default'"
			@click="submit">提交</button>
		<uni-popup-captcha ref="popup-captcha" @confirm="submit" v-model="formData.captcha" scene="bindMobileBySms"></uni-popup-captcha>
	</view>
</template>
<script>
	import {
		mapMutations,
		mapGetters
	} from 'vuex';
	export default {
		data() {
			return {
				currenPhoneArea: '',
				formData: {
					phone: "",
					code: "",
					captcha: false
				}
			}
		},
		computed: {
			tipText() {
				return "验证码已通过短信发送至" + `${this.currenPhoneArea} ${this.formData.mobile}。` + "密码为6 - 20位"
			},
			canSubmit() {
				return this.isPhone() && this.isCode();
			}
		},
		onLoad(event) {},
		onReady() {},
		methods: {
			...mapMutations({
				setUserInfo: 'user/login'
			}),
			/**
			 * 完成并提交
			 */
			submit() {
				console.log(this.formData);
				uniCloud.callFunction({
					name: 'uni-id-cf',
					data: {
						action: 'bindMobileBySms',
						params: this.formData
					},
					success: ({
						result
					}) => {
						console.log(result);
						uni.showToast({
							title: result.msg || result.errMsg,
							icon: 'none'
						});
						if(result.errCode == "CAPTCHA_REQUIRED"){
							return this.$refs['popup-captcha'].open()
						}
						if (result.code === 0) {
							this.setUserInfo({"mobile":result.mobile})
							uni.navigateBack()
						}
					},
					complete: () => {
						this.formData.captcha = false
					}
				})
				/*
        const uniIdCo = uniCloud.importObject("uni-id-co")
        uniIdCo.bindMobileBySms(this.formData).then(e => {
          console.log(e);
          uni.showToast({
            title: e.errMsg,
            icon: 'none'
          });
          uni.navigateBack()
        }).catch(e => {
          if( e.errCode == 'CAPTCHA_REQUIRED'){
            this.$refs.popup.open()
          }
				}).finally(e=>{
          this.formData.captcha = false
        })
		*/
			},
			isPhone() {
				let reg_phone = /^1\d{10}$/;
				let isPhone = reg_phone.test(this.formData.mobile);
				return isPhone;
			},
			isCode() {
				let reg_code = /^\d{6}$/;
				let isCode = reg_code.test(this.formData.code);
				return isCode;
			}
		}
	}
</script>

<style>
	.uni-content {
		padding: 0;
		align-items: center;
		justify-content: center;
		padding: 50rpx;
		padding-top: 10px;
	}

	/* #ifndef APP-NVUE  || VUE3 */
	.uni-content /deep/ .uni-easyinput__content {}

	/* #endif */
	.input-box {
		width: 100%;
		margin-top: 16px;
		background-color: #f9f9f9;
		border-radius: 6rpx;
		flex-direction: row;
		flex-wrap: nowrap;
		margin-bottom: 10px;
	}

	.send-btn-box {
		margin-top: 15px;
	}
</style>
