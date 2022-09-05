<template>
	<view class="content">
		<!-- 顶部文字 -->
		<!-- 登录框 (选择手机号所属国家和地区需要另行实现) -->
		<uni-forms ref="form" :value="formData" >
			<uni-forms-item name="phone">
				<!-- focus规则如果上一页携带来“手机号码”数据就focus验证码输入框，否则focus手机号码输入框 -->
				<uni-easyinput :disabled="lock" :focus="formData.phone.length!=11" type="number" class="easyinput" :inputBorder="false"
					v-model="formData.phone" maxlength="11" :placeholder="$t('common.phonePlaceholder')"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="code">
				<uni-easyinput :focus="formData.phone.length==11" type="number" class="easyinput" :inputBorder="false"
					v-model="formData.code" maxlength="6" :placeholder="$t('common.verifyCodePlaceholder')">
					<template v-slot:right>
						<uni-send-sms-code ref="shortCode" :phone="formData.phone"></uni-send-sms-code>
					</template>
				</uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="pwd">
				<uni-easyinput type="password" class="easyinput" :inputBorder="false" v-model="formData.pwd"
					:placeholder="$t('common.newPasswordPlaceholder')"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="pwd2">
				<uni-easyinput type="password" class="easyinput" :inputBorder="false" v-model="formData.pwd2"
					:placeholder="$t('common.confirmNewPasswordPlaceholder')"></uni-easyinput>
			</uni-forms-item>
			<button class="send-btn-box" :disabled="!canSubmit" :type="canSubmit?'primary':'default'"
				@click="submit">{{$t('common.complete')}}</button>
		</uni-forms>
	</view>
</template>

<script>
	import mixin from '../common/login-page.mixin.js';
	export default {
		mixins: [mixin],
		data() {
			return {
				lock:false,
				formData: {
					"phone": "",
					"code":"",
					'pwd': '',
					'pwd2': ''
				},
				rules: {
					phone: {
						rules: [{
								required: true,
								errorMessage: this.$t('common.phonePlaceholder'),
							},
							{
								pattern: /^1\d{10}$/,
								errorMessage: this.$t('common.formatErr'),
							}
						]
					},
					code: {
						rules: [{
								required: true,
								errorMessage: this.$t('common.verifyCodePlaceholder'),
							},
							{
								pattern: /^.{6}$/,
								errorMessage: this.$t('common.sixDigitCode'),
							}
						]
					},
					pwd: {
						rules: [{
								required: true,
								errorMessage:this.$t('common.newPasswordPlaceholder'),
							},
							{
								pattern: /^.{6,20}$/,
								errorMessage: this.$t('common.passwordDigits'),
							}
						]
					},
					pwd2: {
						rules: [{
								required: true,
								errorMessage:this.$t('common.confirmPassword'),
							},
							{
								pattern: /^.{6,20}$/,
								errorMessage: this.$t('common.passwordDigits'),
							},
							{
								validateFunction: function(rule, value, data, callback) {
									// console.log(value);
									if (value != data.pwd) {
										callback('两次输入密码不一致')
									};
									return true
								}
							}
						]
					}
				}
			}
		},
		computed: {
			canSubmit() {
				return this.isPhone && this.isPwd && this.isCode;
			},
			isPhone() {
				let reg_phone = /^1\d{10}$/;
				let isPhone = reg_phone.test(this.formData.phone);
				return isPhone;
			},
			isPwd() {
				let reg_pwd = /^.{6,20}$/;
				let isPwd = reg_pwd.test(this.formData.pwd);
				return isPwd;
			},
			isCode() {
				let reg_code = /^\d{6}$/;
				let isCode = reg_code.test(this.formData.code);
				return isCode;
			}
		},
		onLoad(event) {
			if (event && event.phoneNumber) {
				this.formData.phone = event.phoneNumber;
				this.lock = true
			}
			uni.setNavigationBarTitle({
				title: this.$t('common.resetNavTitle')
			})
		},
		onReady() {
			if (this.formData.phone) {
				this.$refs.shortCode.start();
			}
			this.$refs.form.setRules(this.rules)
		},
		methods: {
			/**
			 * 完成并提交
			 */
			submit() {
				console.log("formData",this.formData);
				console.log('rules',this.rules);
				this.$refs.form.validate()
					.then(res => {
						uniCloud.callFunction({
							name:'uni-id-cf',
							data:{
								action:'resetPwdBySmsCode',
								params:{
									"mobile": this.formData.phone,
									"code": this.formData.code,
									"password": this.formData.pwd
								},
							},
							success: ({result}) => {
								console.log(result);
								uni.showToast({
									title: result.msg||'更新成功',
									icon: 'none'
								});
								if (result.code === 0) {
									uni.navigateBack()
								}
							}
						})
					})
			}
		}
	}
</script>

<style>
	@import url("../common/login-page.css");
	.content{
		padding-top: 36rpx;
	}
</style>
