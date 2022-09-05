<template>
	<uni-popup ref="popup" type="bottom">
		<view class="box">
			<text class="headBox">绑定资料</text>
			<text class="tip">获取你的微信头像和昵称，完善你的个人资料</text>
			<view class="btnBox">
				<text @click="closeMe" class="close">关闭</text>
				<button class="agree" type="warn" @click="getUserProfile">确定</button>
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
		emits:['next'],
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
			async open(uid){
				userId = uid
				this.$refs.popup.open()
			},
			async getUserProfile(){
				uni.showLoading();
				let res = await new Promise((callBack) => {
					uni.getUserProfile({
						desc: "用于设置账户昵称和头像",
						complete: (e) => {
							// console.log("getUserProfile:", e);
							callBack(e)
						}
					})
				})
				// console.log("userInfo", res.userInfo);
				if(res.errMsg != "getUserProfile:ok"){
					return this.closeMe()
				}
				let {avatarUrl,nickName} = res.userInfo,				
					cloudPath = userId+'/'+Date.now()+'avatarUrl.jpg';
				
				let tempFilePath = await new Promise((callBack)=>{
					uni.downloadFile({
					    url: avatarUrl,
					    success: (res) => {
					        if (res.statusCode === 200) {
					            // console.log('下载成功');
								callBack(res.tempFilePath)
					        }
							callBack()
					    },
						fail: (err) => {
							console.error(err)
						},
						complete: (e) => {
							// console.log("downloadFile",e);
						}
					});
				})
				// console.log(tempFilePath);
				const result = await uniCloud.uploadFile({
					filePath: tempFilePath,
					cloudPath,
					fileType:'image'
				});
				// console.log("上传成功",{result});
				let userInfo = {
					"nickname":nickName,
					"avatar_file":{
						name:cloudPath,
						extname:"jpg",
						url:result.fileID
					}
				}
				this.doUpdate(userInfo,()=>{
					this.$refs.popup.close()
				})
			},
			closeMe(e){
				uni.showLoading();
				this.doUpdate({nickname:"微信匿名用户"},()=>{
					uni.hideLoading()
					this.$refs.popup.close()
				})
			},
			doUpdate(data,callback){
				// console.log('dododo',data);
				// 使用 clientDB 提交数据
				usersTable.where('_id==$env.uid').update(data).then((res) => {
					// console.log(res);
					this.setUserInfo(data);
					callback(res)
				}).catch((err) => {
					uni.showModal({
						content: err.message ||
							'请求服务失败',
						showCancel: false
					})
					callback(err)
				}).finally(() => {
					this.$emit('next')
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
view{
	display: flex;
}
.box{
	background-color: #FFFFFF;
	height:200px;
	width: 750rpx;
	flex-direction: column;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
}
.headBox{
	padding:20rpx;
	height:80rpx;
	line-height:80rpx;
	text-align: left;
	font-size:32upx;
	color:#333333;
	margin-left: 15rpx;
}
.tip{
	color:#666666;
	text-align: left;
	justify-content: center;
	margin:10rpx 30rpx;
	font-size:36rpx;
}
.btnBox{
	margin-top:45rpx;
	justify-content: center;
	flex-direction: row;
}
.close,.agree{
	text-align: center;
	width:200rpx;
	height:80upx;
	line-height:80upx;
	border-radius:50px;
	margin:0 20rpx;
	font-size:36rpx;
}
.close{
	color:#999999;
	border-color: #EEEEEE;
	border-style: solid;
	border-width: 1px;
	background-color:#FFFFFF;
}
.close:active{
	color:#989898;
	background-color:#E2E2E2;
}
.agree{
	background-color:#DD524D;
	color:#FFFFFF;
}
/* #ifdef MP */
.agree::after {
   border: none;
}
.agree{
	background-color:#DD524D;
}
/* #endif */
.agree:active{
	background-color:#F5F5F6;
}
</style>
