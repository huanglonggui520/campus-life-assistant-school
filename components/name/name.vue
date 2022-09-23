<template>
	<view>
		<view class="content">
			<view>
				<u-avatar  size='large'
					:src="item.user_id[0].avatar_file ? item.user_id[0].avatar_file.url : '/static/uni-center/tx.jpg'"></u-avatar>
			</view>
			<view class="name" >
				<view style='display: flex; align-items: center;'>
					
					<view style="font-size: 30rpx;">
						{{item.user_id[0].nickname ? item.user_id[0].nickname : item.user_id[0].mobile}}
					</view>
					<view style='margin-left: 15rpx;color: #5A93F0;'>{{item.statetext}}</view>
				</view>
				<view style="display: flex;">
					<view style="font-size: 28rpx;color: #C6C8CB;">
						{{$u.timeFrom(item.time, "yyyy-mm-dd hh:MM:ss")}}
					</view>
					<view style="font-size: 26rpx;color: #C6C8CB;display: flex;margin-left: 20rpx;" v-if="!item.isShow && isShow_id==item.user_id[0]._id ">
						<u-icon name="lock" color="#C6C8CB" size="26"></u-icon>
						<view>仅自己可见</view>
					</view>
				</view>
			</view>
			<view style="flex: 1;display: flex;justify-content: flex-end;margin-top: 20rpx;">
				<u-icon style='align-items: flex-start;' name="more-dot-fill" color="#3C3D3E" size="30"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"name",
		props:{
			item:{
				type:Object,
				default:()=>{
					return {}
				}
			},
			isShow_id:{
				type:String,
				default:()=>{
					return ''
				}
			}
		},
		data() {
			return {
				color:['#F0C461','#AF58F2','#F270D0','#4FDC46']
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
.content {
		display: flex;

		// padding: 20rpx;
		.name {
			display: flex;
			margin-left: 20rpx;
			flex-direction: column;
			justify-content: space-around;
		}
	}
</style>