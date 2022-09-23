<template>
	<view style="padding-bottom: 20rpx;" >
		<view>
			<view style="padding: 20rpx;" @tap='goxiangq'>
				<view class="top">
					<view class="left">
						<view style="margin-right: 15rpx;"><u-avatar :src="item.user_id[0].avatar_file?item.user_id[0].avatar_file.url:'/static/uni-center/tx.jpg'" size='50'></u-avatar></view>
						<view>{{item.user_id[0].nickname?item.user_id[0].nickname:item.user_id[0].mobile}}</view>
					</view>
					<view class="right">{{item.statetext}}</view>
				</view>
				<view class="center">
					<view class="left">
						<view class="title u-line-2">
							<u-parse :html="item.text"></u-parse>
						</view>
						<view class="time">{{$u.timeFormat(item.time, 'mm-dd hh:MM:ss')}}</view>
					</view>
					<view class="right">
						
						<image style="width: 230rpx;height: 150rpx;margin-left: 1rpx;" v-if="item.img_url.length" :src="item.img_url.length?item.img_url[0].url:''"></image>
						<view class="number" v-if='item.img_url.length'>{{item.img_url.length}}张</view>
					</view>
				</view>
			</view>
			<view style="width: 100vw;height: 1rpx;background-color: #C6C7C9;"></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"releaseIist",
		data() {
			return {
				src: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
			};
		},
		props:{
			item:{
				type:Object,
				default:()=>{
					return {}
				}
			}
		},
		methods:{
			goxiangq(){
				console.log(this.item._id)
				uni.navigateTo({
					url:`/pages/details/details?id=${this.item._id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped> 
	.top{
		display: flex;
		
		justify-content: space-between;
		align-items: center;
		.left{
			font-size: 30rpx;
			color: #4B4B4E;
			display: flex;
			align-items: center;
		}
		.right{
			font-size: 28rpx;
			color: #5A84EB;
		}
	}
		.center{
			display: flex;
			margin-top: 10rpx;
			font-size: 34rpx;
			position: relative;
			color: #4B4B4E;
			.right{
				// position: absolute;
				// right: 5rpx;
				// bottom: 0rpx;
				
				display: flex;
				justify-content: space-between;
				.number{
					position: absolute;
					bottom: 10rpx;
					font-size: 28rpx;
					right: 10rpx;
					padding: 5rpx 10rpx 5rpx 10rpx;
					background-color: rgba(0, 0, 0, 0.5);
					color: #fff;
				}
			}
			.left{
				flex: 1;
			}
			.left .time{
				font-size: 28rpx;
				margin-top: 10rpx;
				color: #95969A;
			}
			
			.left .title{
				margin-right: 10rpx;
				font-size: 33rpx;
				color: #444445;
				// height: 90rpx;
				    // overflow: hidden;
				    // text-overflow: ellipsis;
				    // display: -webkit-box;
				    // -webkit-line-clamp: 2;
				    // -webkit-box-orient: vertical;
			}
		}
</style>