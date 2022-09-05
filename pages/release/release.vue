<template>
	<view class='content'>
		<view class="title">您选择的是？</view>
		<u-grid :col="2">
				<u-grid-item>
					<view class='icontop' @tap="goadd(1)">
						<u-image width="100%" mode='aspectFit' height="100%" src="/static/nav/biaobai.png"></u-image>
					</view>
					<view class="grid-text">表白墙</view>
				</u-grid-item>
				<u-grid-item>
					<view class="icontop" @tap="goadd(2)">
						<u-image width="100%" mode='aspectFit' height="100%" src="/static/nav/ershou.png"></u-image>
					</view>
					<view class="grid-text">二手闲置</view>
				</u-grid-item>
				<u-grid-item>
					<view class="icontop" @tap="goadd(3)">
						<u-image width="100%" mode='aspectFit' height="100%" src="/static/nav/kuaidi.png"></u-image>
					</view>
					<view class="grid-text">快递代取</view>
				</u-grid-item>
				<u-grid-item>
					<view class="icontop" @tap="goadd(4)">
						<u-image width="100%" mode='aspectFit' height="100%" src="/static/nav/sw.png"></u-image>
					</view>
					<view class="grid-text">失物招领</view>
				</u-grid-item>
			</u-grid>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goadd(val){
				uni.navigateTo({
					url:`/pages/putmsg/putmsg?id=${val}`
				})
				console.log(val)
			}
		}
	}
</script>

<style lang="scss" scoped>

	.title{
		margin-bottom: 30rpx;
		margin-top: 30rpx;
		margin-left: 30rpx;
		font-size: 40rpx;
		// margin: 300rpx auto;
	}
	// .content{
	// 	margin: 400rpx auto;
	// 	// transform: translateX(50%);
	// }
	.icontop{
		width: 100rpx;
		height: 100rpx;
		padding: 20rpx;
		border-radius: 15rpx;
		// background-color: ;
		background-color: #287ACB;
	}
</style>
