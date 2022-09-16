<template>
	<view class="container">
		<u-navbar title-color="#fff" :title='toptitle' back-icon-color="#ffffff" :is-fixed="true" :is-back="true"
			:background="{ background: '#1CBBB4' }" title-width='350' :back-text-style="{color: '#fff'}">

		</u-navbar>
		<view style="margin-top: 20rpx;">
			<textarea ref='text' 
			v-model="contentVal" 
			:selection-end="end"
			:cursor='wz'
			:selection-start="start"
			:focus='focus'
			placeholder='分享新鲜事...'
			@blur="cursor"
			style="width: 100vw;height: 200rpx;"></textarea>
		</view>
		<uni-file-picker :disabled='imageValue.length>=6' mode="grid" :image-styles="imageStyles" v-model="imageValue"
			:limit="6" @select="select">
			<image src="../../static/phone.png" @tap='isfull' mode="aspectFit" style="width: 60rpx;"></image>
		</uni-file-picker>
		<view class='submit'>
			<u-button type="primary" @click="submit">发布</u-button>
		</view>
		<view v-for="(item,index) in emoji" @tap='insertAtCursor(index)' :key="index">
			<u-image width="48rpx" height="48rpx" :src="src+`${index}.gif`"></u-image>
		</view>
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				src: "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/",
				contentVal: '', //内容（带html）
				contentText: '', //内容（纯文本）
				changetext: '',
				emoji: ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷',
					'冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘',
					'晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈',
					'快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱',
					'爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利',
					'抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳',
					'挥手', '激动', '街舞', '献吻', '左太极', '右太极'
				],
				imageValue: [],
				imageStyles: {
					width: 70,
					height: 70,

				},
				id: 1,
				statetext: '',
				
				cursorIP:-1,
				toptitle: '发布',
				end:-1,
				start:-1,
				focus:false,
				wz:-1
				
			}
		},
		onLoad(e) {
			this.id = e.id
			if (e.id == 1) {
				this.statetext = '表白墙'
			} else if (e.id == 2) {
				this.statetext = '二手闲置'
			} else if (e.id == 3) {
				this.statetext = '快递代取'
			} else if (e.id == 4) {
				this.statetext = '失物招领'
			}

			this.toptitle = '发布' + this.statetext + '信息'

			console.log('iouyg', this.statetext)
		},
		methods: {
			cursor(e){
				console.log('IP',e.detail.cursor)
				this.cursorIP=e.detail.cursor
			},
			insertAtCursor(index) {
				uni.hideKeyboard()
				this.focus=false
				if(this.cursorIP>=0){
					setTimeout(()=>{
						let myValue = this.contentVal
						this.contentVal = this.contentVal.substring(0, this.cursorIP) + '[' + this.emoji[index] + ']' +myValue.substring(this.cursorIP,myValue.length);
						this.focus=true
					},100)
				}
					// myField.focus();
					// this.end=this.contentVal.length
			},
			// 提交发布
			async submit() {

				if (this.contentVal || this.imageValue.length) {
					// 将[xxx]转换为图片
					this.changetext = this.contentVal
					const val = this.contentVal.match(/\[[\u4E00-\u9FA5]{1,3}\]/g)
					// console.log(this.contentVal.match(/\[[\u4E00-\u9FA5]{1,3}\]/g))
					val.forEach(item => {
						const index = this.emoji.indexOf(item.replace(/\[|\]/g, ''))
						const src =
							`<img style="position: relative;top:10rpx;width:42rpx;height:42rpx;" src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif"></img>`
						this.changetext = this.changetext.replace(/\[[\u4E00-\u9FA5]{1,3}\]/, src)

					})
					const data = {
						img_url: this.imageValue,
						text: this.changetext,
						collection: 0,
						school: this.$store.state.user.school,
						fabulous: 0,
						// time:nowtime,
						textwb: this.contentVal,
						state: parseInt(this.id),
						statetext: this.statetext
					}
					const db = uniCloud.database();
					const res = await db.collection('love').add(data)
					uni.showToast({
						title: "发布成功",
						icon: "success"
					})
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/index/index'
						})
					}, 1000)
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
			isfull() {
				if (this.imageValue.length >= 6) {
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
		/* position: relative; */

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
