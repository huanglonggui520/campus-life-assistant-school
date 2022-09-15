<template>
	<view class="container">
		
		<view style="margin-top: 20rpx;">
			<textarea  v-model="contentVal"  placeholder='分享新鲜事...' style="width: 100vw;height: 200rpx;"></textarea>
		</view>
		<uni-file-picker  :disabled='imageValue.length>=6' mode="grid"  :image-styles="imageStyles" v-model="imageValue"  :limit="6" @select="select">
			<image src="../../static/phone.png" @tap='isfull' mode="aspectFit" style="width: 60rpx;"></image>
		</uni-file-picker>
		<view class='submit'>
			<u-button type="primary" @click="submit">发布</u-button>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				
				contentVal: '', //内容（带html）
				contentText: '', //内容（纯文本）
				src: '',
				imageValue: [],
				imageStyles: {
					width: 70,
					height: 70,
					// back

				},
				id:1,
				statetext:''
			}
		},
		onLoad(e) {
			
			this.id=e.id
			if(e.id==1){
				this.statetext='表白墙'
			}else if(e.id==2){
				this.statetext='二手闲置'
			}else if(e.id==3){
				this.statetext='快递代取' 
			}else if(e.id==4){
				this.statetext='失物招领'
			}
			uni.setNavigationBarTitle({
				title:'发布'+this.statetext+'信息'
			})
			console.log('iouyg',this.statetext)
		},
		methods: {
		
			// 提交发布
			async submit() {
				
				console.log(this.contentVal)
				if (this.contentVal || this.imageValue.length) {
					const data = {
						img_url: this.imageValue,
						text: this.contentVal,
						collection: 0,
						school:this.$store.state.user.school,
						fabulous: 0,
						// time:nowtime,
						textwb:'',
						state:parseInt(this.id),
						statetext:this.statetext
					}
					const db = uniCloud.database();
					const res = await db.collection('love').add(data)
					uni.showToast({
						title:"发布成功",
						icon:"success"
					})
					setTimeout(()=>{
						uni.switchTab({
							url:'/pages/index/index'
						})
					},1000)
					console.log(res)
				} else {
					this.$u.toast("文件和描述不能同时为空")
				}
			},
			// 获取上传状态
			select(e) {
				
				console.log('选择文件：', e)
				console.log(e)
			},
			isfull(){
				if(this.imageValue.length>=6){
					this.$u.toast('最多只能选择6张照片')
				}
			}
		}
	}
</script>

<style>
	.submit {
		/* margin-top: 20rpx; */
		width: 80%;
		margin: 20rpx auto;
	}

	.container {
		padding: 10px;
	}

	/* #editor {
        width: 100%;
        height: 50rpx;
        background-color: #DFE1E5;
    } */
</style>
