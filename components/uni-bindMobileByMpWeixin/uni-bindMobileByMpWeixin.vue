<template>
	<uni-popup ref="popup" type="bottom">
		<view class="box">
			<text class="headBox">绑定资料</text>
			<text class="tip">将一键获取你的手机号码绑定你的个人资料</text>
			<view class="btnBox">
				<text @click="closeMe" class="close">关闭</text>
				<button class="agree" type="warn" @click="beforeGetphonenumber" open-type="getPhoneNumber"
					@getphonenumber="bindMobileByMpWeixin">获取</button>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	import {
		mapMutations,
		mapGetters
	} from 'vuex';
	const db = uniCloud.database();
	const usersTable = db.collection('uni-id-users')
	let userId = ''
	export default {
		emits: ['next'],
		computed: {
			...mapGetters({
				userInfo: 'user/info',
				login: 'user/hasLogin'
			})
		},
		data() {
			return {}
		},
		methods: {
			...mapMutations({
				setUserInfo: 'user/login'
			}),
			beforeGetphonenumber() {
				uni.showLoading({
					mask:true
				})
				wx.checkSession({
					success() {
						console.log('session_key 未过期');
						uni.hideLoading()
					},
					fail() {
						console.log('session_key 已经失效，正在执行更新');
						wx.login({
							success({code}) {
								uniCloud.callFunction({
									name: "uni-id-cf",
									data: {
										"action": "refreshSessionKey",
										"params": {
											code
										}
									},
									complete: (e) => {
										console.log(e);
										uni.hideLoading()
									}
								})
							},
							fail: (err) => {
								console.error(err);
							}
						})
					}
				})
			},
			bindMobileByMpWeixin(e) {
				console.log(e.detail);
				if(e.detail.errMsg == "getPhoneNumber:ok"){
					uniCloud.callFunction({
						name: "uni-id-cf",
						data: {
							"action": "bindMobileByMpWeixin",
							"params": e.detail
						},
						complete: (e) => {
							console.log(e);
						},
						success: (e) => {
							uni.showToast({
								title: e.result.msg||'绑定成功',
								icon: 'none'
							});
							if(e.result.code === 0){
								this.setUserInfo({
									"mobile": e.result.mobile
								})
							}
							this.closeMe()
						}
					})
				}else{
					this.closeMe()
				}
			},
			async open(uid) {
				userId = uid
				this.$refs.popup.open()
				this.beforeGetphonenumber()
			},
			closeMe(e) {
				this.$refs.popup.close()
			},
		}
	}
</script>

<style lang="scss" scoped>
	view {
		display: flex;
	}

	.box {
		background-color: #FFFFFF;
		height: 200px;
		width: 750rpx;
		flex-direction: column;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}

	.headBox {
		padding: 20rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: left;
		font-size: 32upx;
		color: #333333;
		margin-left: 15rpx;
	}

	.tip {
		color: #666666;
		text-align: left;
		justify-content: center;
		margin: 10rpx 30rpx;
		font-size: 36rpx;
	}

	.btnBox {
		margin-top: 45rpx;
		justify-content: center;
		flex-direction: row;
	}

	.close,
	.agree {
		text-align: center;
		width: 200rpx;
		height: 80upx;
		line-height: 80upx;
		border-radius: 50px;
		margin: 0 20rpx;
		font-size: 36rpx;
	}

	.close {
		color: #999999;
		border-color: #EEEEEE;
		border-style: solid;
		border-width: 1px;
		background-color: #FFFFFF;
	}

	.close:active {
		color: #989898;
		background-color: #E2E2E2;
	}

	.agree {
		background-color: #DD524D;
		color: #FFFFFF;
	}

	/* #ifdef MP */
	.agree::after {
		border: none;
	}

	.agree {
		background-color: #DD524D;
	}

	/* #endif */
	.agree:active {
		background-color: #F5F5F6;
	}
</style>
