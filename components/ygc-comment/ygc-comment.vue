<template>
	<view class="mask" :class="maskState===0 ? 'none' : maskState===1 ? 'show' : ''" @click="toggleMask">
		<view class="mask-content"  @click.stop.prevent="stopPrevent">
			<view class="mask-content-input">
				<textarea class="textarea"
					v-model="content"
					auto-height
					:placeholder="placeholder"
					:cursor-spacing = "100"
					:show-confirm-bar = "false"
					:focus="focus"
					maxlength="140"></textarea>
				<view class="right" @click="pubComment">发布</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name: "ygcComment",
		//属性
		props: {
			placeholder: {
				type: String
			}
		},
		data() {
			return {
				maskState: 0,
				content: '',
				focus: false
			};
		},
		mounted() {
			this.$bus.$on('toggleMask',this.toggleMask)
		},
		methods: {
			stopPrevent(){
			},
			toggleMask(type='show'){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				// this.maskState = 2;
				setTimeout(()=>{
					this.maskState = state;
					// #ifdef APP-PLUS
					// 安卓app软键盘自动弹出有点问题，暂时还没有很好的解决方案，所以就禁止安卓app软键盘自动弹出，如果哪位朋友有好的解决方案可以在评论里告诉大家参考一下
					if (uni.getSystemInfoSync().platform == "ios") {
						this.focus = this.maskState ? true : false;
					}
					// #endif
					// #ifndef APP-PLUS
					this.focus = this.maskState ? true : false;
					// #endif
				}, timer)
			},
			pubComment() {
				this.$emit('pubComment',this.content);
				this.content=''
			}
		}
	}
</script>

<style lang="scss" scoped>
	$font-color-base: #606266;
	$base-color: #5A9BEC;
	.mask{
		display: flex;
		align-items: flex-end;
		position: fixed;
		left: 0;
		top: var(--window-top);//元素到页面顶端的距离
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0);
		z-index: 9995;
		transition: .1s;
		-webkit-transition: .1s; 
		.mask-content{
			width: 100%;
			background: #FFFFFF;
			transform: translateY(100%);
			transition: .1s;//底部弹出的持续时间
			-webkit-transition: .1s;//底部弹出的持续时间 
			// overflow-y:scroll;
			display: flex;
			flex-direction: column;
			.mask-content-topbar{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 20upx 30upx 10upx;
				font-size: 32upx;
				.left{
					padding: 10upx 0upx;
					color: $font-color-base;
				}
				// .right{
				// 	padding: 10upx 100upx;
				// 	border-radius: 6upx;
				// 	color: #FFFFFF;
				// 	font-weight: 500;
				// 	background-color: $base-color;
				// }
			}
			.mask-content-input{
				display: flex;
				width: 100%;//如果textarea的宽带有问题可以把width改为100%试试
				// width: 100%;
				padding: 16upx 16upx 20upx;
				.textarea {
					// height: 50px;
					width: 530upx;//如果textarea的宽带有问题可以把width改为100%试试
					// width: 100%;
					padding: 16upx;
					
					border:2upx solid #d5d5d6;
					border-radius: 50upx;
				}
				.right{
					background-color: #EE983A;
					color: #fff;
					// flex: 1;
					width: 130rpx;
					text-align: center;
					line-height: 80rpx;
					border-radius: 50rpx;
					// margin: 0rpx 10rpx;
					margin-right: 20rpx;
					margin-left: 20rpx;
				}
			}
		}
		&.none{
			display: none;
		}
		&.show{
			background: rgba(0,0,0,.4);
			.mask-content{
				transform: translateY(0);
			}
		}
	}

</style>
