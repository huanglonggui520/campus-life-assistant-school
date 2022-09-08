<template>
	<view class="container">
		<editor style="width: 100%;height: 20rpx;background-color: #F3F4F5; " class="ql-container m-ql-container"
			@ready="onEditorReady" placeholder="请输入描述内容" @blur="getEditorContent"></editor>
		<!-- <image class="logo" :src="src"></image>
        <button @click="open()">上传图片</button> -->
		<uni-file-picker  mode="grid" :image-styles="imageStyles" v-model="imageValue" title="选择图片" :limit="6" @select="select"
			@progress="progress" @success="success" @fail="fail">
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
				timestamp: '1662037897813',
				contentVal: '', //内容（带html）
				contentText: '', //内容（纯文本）
				src: '',
				imageValue: [],
				imageStyles: {
					width: 70,
					height: 70,

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
			// async xz(){
			// 		let result = await uniCloud.downloadFile({
			// 		    fileID: '"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ab7b047f-4f41-46b9-b4be-f60dc317037a/9f010c66-e5b1-4440-9c75-fe6332d081aa.txt"',
			// 		    // tempFilePath: '/tmp/test/storage/my-photo.png'
			// 		});
			// },
			// 提交发布
			async submit() {
				var myDate = new Date();
				var nowtime=myDate.toLocaleString( )
				if (this.contentText || this.imageValue.length) {
					const data = {
						img_url: this.imageValue,
						text: this.contentVal,
						collection: 0,
						school:this.$store.state.user.school,
						fabulous: 0,
						// time:nowtime,
						textwb:this.contentText,
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
				// this.imageValue[0].width=e.tempFiles[0].image.width
				console.log('选择文件：', e)
				console.log(e)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功')
				console.log(this.imageValue)
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			},
			onEditorReady() { /////////////////////////初始化
				uni.createSelectorQuery().select('#editor').context((res) => {
					var contentVal_1 = this.contentVal;
					//将内容写入编辑器
					this.editorCtx = res.context;
					let EContent = {
						html: contentVal_1
					}
					this.editorCtx.setContents(EContent); //设置富文本编辑器的内容
				}).exec()
			},
			getEditorContent(e) { /////////////////////////获取编辑器内容，当前页面都能获取到
				this.contentVal = e.detail.html;
				this.contentText = e.detail.text;
				console.log(this.contentText)
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
		/* padding: 10px; */
	}

	/* #editor {
        width: 100%;
        height: 50rpx;
        background-color: #DFE1E5;
    } */
</style>
