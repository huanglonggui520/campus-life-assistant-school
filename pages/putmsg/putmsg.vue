<template>
	<view class="container">
		<u-navbar title-color="#fff" :title='toptitle' back-icon-color="#ffffff" :is-fixed="true" :is-back="false"
			:background="{ background: '#1CBBB4' }" title-width='350' :back-text-style="{color: '#fff'}">
			<view class="content" @tap="cancel">
					取消
			</view>
			<!-- #ifdef H5 -->
					<view style="color: #fff;margin-right: 20rpx;" slot="right" @tap="submit">
						发布
					</view>
			 <!-- #endif -->
		</u-navbar>
		<view style="padding: 20rpx;margin-bottom: 20rpx;">
			<view style="width: 100%;">
					<textarea 
					v-model="contentVal" 
					:selection-end="end"
					style='width: 100%;height: 250rpx;'
					:show-confirm-bar="false"
					:cursor='wz'
					:selection-start="start"
					:focus='focus'
					@focus="getheight"
					placeholder='分享新鲜事...'
					@blur="cursor"
					placeholder-style='color:#BCBDC2;font-size:34rpx'
					></textarea>
					
			</view>
			<uni-file-picker  :disabled='imageValue.length>=6' mode="grid" :image-styles="imageStyles" v-model="imageValue"
				:limit="6" @select="select">
				<image src="../../static/phone.png" @tap='isfull' mode="aspectFit" style="width: 50rpx;height: 50rpx;"></image>
			</uni-file-picker>
		</view>
		<u-cell-group>
				<u-cell-item icon="map" @tap='toMap' :title="address?'':'分享我的位置'"  :border-bottom='true' >
					<view slot='title' class="u-line-1 address" @tap.stop='show=true'>
						<view class="u-line-1 addresstitle">{{address}}</view>
						<u-icon name="close" color="#9D9F9D" size="20"></u-icon>
					</view>
				</u-cell-item>
				<u-cell-item icon="eye" @tap='showqx=true' title="谁可以看动态" :border-bottom='true' :value="ischoice?'公开':'私密'">
				</u-cell-item>
		</u-cell-group>
		<view class="inputMenu" :style="{'bottom':bottomHeight+'px'}">
				<view style="width: 20vw;display: flex;justify-content: center;">
					<u-icon name="mic" color='#DFDFDF' size="48"></u-icon>
				</view>
				<view style="width: 20vw;display: flex;justify-content: center;">
					<view v-if="!showemoji" @tap='SHOWJP' style="width: 50rpx;height: 50rpx">
						<image src="../../static/smile.png" style="width: 50rpx;height: 50rpx;" mode="aspectFit"></image>
					</view>
					<view v-else @tap='SHOWJP' style="width: 50rpx;height: 50rpx" >
						<image src="../../static/jp.png" style="width: 50rpx;height: 50rpx;" mode="aspectFit"></image>
					</view>
					
				</view>
				<view style="width: 20vw;display: flex;justify-content: center;">
					<u-icon name="order" color='#DFDFDF' size="48"></u-icon>
				</view>
				<view style="width: 20vw;display: flex;justify-content: center;">
					<u-icon name="setting" color='#DFDFDF' size="48"></u-icon>
				</view>
				<view style="width: 20vw;display: flex;justify-content: center;">
					<view @tap="submit" style="display: flex;align-items: center;padding: 10rpx 15rpx 10rpx 15rpx;background-color: #7AE188;border-radius: 5rpx;">
						<image src="../../static/send.png" style="width: 40rpx;height: 40rpx;"></image>
						<view>发布</view>
					</view>
				</view>
		</view>
		<view class='submit'>
			<!-- <u-button type="primary" @click="submit">发布</u-button> -->
		</view>
       <view v-show="showemoji">
		   <!-- <view style="width: 100vw;height: 0.01rpx;background-color: #7A7676;position: fixed;bottom: 300rpx;"></view> -->
		   <view class="gprop">
		   		   <scroll-view scroll-y="true" style="min-height: 100px;"  :style="{'height':jpheight+'px'}">
		   		   		<view class="emoji">
		   		   			<view  class="emojiitem" v-for="(item,index) in EMOJI"   :key="index">
		   		   				<view ><u-image width="48rpx" height="48rpx" @tap='insertAtCursor(item.title)' :src="item.url"></u-image></view>
		   		   			</view>
		   		   		</view>	
		   		   	</scroll-view>
		   </view>
	   </view>
	   <!-- 是否取消位置 -->
	   <u-modal v-model="show" @confirm='quexiao' :show-cancel-button='true' content="是否删除地址？"></u-modal>
	   <!-- 权限设置 -->
	   <u-popup v-model="showqx" mode="bottom" border-radius="18">
	   		<view class="quanxin">
				<view style="display: flex;" @tap='choiceQx(1)'>
					<view style="width: 90rpx;display: flex;justify-content: center;align-items: center;"><u-icon v-if="ischoice" name="checkmark" color="#16CC2E" size="28"></u-icon></view>
					<view style="font-size: 34rpx;color: #333934;" :class='{choice:ischoice}'>公开</view>
				</view>
				<view style="font-size: 28rpx;color: #AFB2B0;margin-left: 90rpx;">所有人可见</view>
	   		</view>
			<view class="quanxin" style="margin-bottom: 35rpx;" @tap='choiceQx(0)'>
				<view style="display: flex;">
					<view style="width: 90rpx;display: flex;justify-content: center;align-items: center;"><u-icon v-if="!ischoice" name="checkmark" color="#16CC2E" size="28"></u-icon></view>
					<view style="font-size: 34rpx;color: #333934;" :class='{choice:!ischoice}'>私密</view>
				</view>
				<view style="font-size: 28rpx;color: #AFB2B0;margin-left: 90rpx;">仅自己可见</view>
			</view>
	   	</u-popup>
	   <!-- prevent只在H5端支持 -->
	   
	   <!-- <image style="width: 48rpx;height: 48rpx;" src="https://p3-pc-sign.douyinpic.com/obj/tos-cn-i-tsj2vxp0zn/5e76a1b172454807ab4da4fab9e43ac3?x-expires=1978761600&x-signature=IMlNF2N4%2BkbSdSyZprejuMM%2BrPk%3D&from=876277922"></image> -->
	</view>
</template>
<script>
	import smileData from "../../common/smile_data.js"
	export default {
		data() {
			return {
				src: "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/",
				contentVal: '', //内容（带html）
				contentText: '', //内容（纯文本）
				changetext: '',
				EMOJI:smileData,//表情包数据
				imageValue: [],
				imageStyles: {
					width: 60,
					height: 60,
				},
				id: 1,
				statetext: '',
				Choice:true,//
				showqx:false, //是否展示权限选择框
				showemoji:false, //是否展示表情键盘
				cursorIP:-1,
				toptitle: '发布',
				end:-1,
				start:-1,
				focus:false,
				wz:-1,
				jpheight:0,
				bottomHeight:0,
				runheight:null,
				address:'',
				ischoice:true,//是否公开
				show: false,
			
			
				
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
		},
		methods: {
			choiceQx(val){
				if(val){
					this.ischoice=true
				}else{
					this.ischoice=false
				}
				this.showqx=false
			},
			// 删除地址
			quexiao(){
				this.address=''
			},
			// 点击微笑按钮
			SHOWJP(event){
				
				this.focus=false
				console.log(event.currentTarget)
				setTimeout(()=>{
					this.bottomHeight=this.jpheight
						if(this.showemoji){
							this.focus=true
						}
					this.showemoji=!this.showemoji
				},10)
			},
			// 聚焦时获取键盘高度
			getheight(e){
					console.log(e)
					setTimeout(()=>{
						this.showemoji=false
					},10)
					this.jpheight=e.detail.height
					this.bottomHeight=e.detail.height
			},
			// 取消发布，回到首页
			cancel(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			// 失去焦点
			cursor(e){
				console.log('IP',e)
				this.cursorIP=e.detail.cursor
				this.showemoji=false
				this.bottomHeight=0
					
			},
			toMap(){
				// 打开地图，选择位置
				uni.chooseLocation({
					success: (res)=> {
						console.log('位置名称：' + res.name);
						console.log('详细地址666：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
						this.address=res.name
					}
				});
				
				console.log(this.address)
			},
			// 将表情提交到文本框
			insertAtCursor(msg) {
				console.log(msg)
				if(this.cursorIP>=0){
					setTimeout(()=>{
						let myValue = this.contentVal
						this.contentVal = this.contentVal.substring(0, this.cursorIP) + '[' + msg + ']' +myValue.substring(this.cursorIP,myValue.length);
						this.cursorIP+=msg.length+2
					},10)
				}
			},
			// 提交发布
			async submit() {
			console.log('提交')
				if (this.contentVal || this.imageValue.length) {
					// 将[xxx]转换为表情包图片
					this.changetext = this.contentVal
					const val = this.contentVal.match(/\[[\u4E00-\u9FA5]{1,3}\]/g)?this.contentVal.match(/\[[\u4E00-\u9FA5]{1,3}\]/g):[]
					console.log(val)
					val.forEach(item => {
						this.EMOJI.forEach((itemchildren)=>{
							if(item.replace(/\[|\]/g, '')==itemchildren.title){
								const src =
									`<img style="position: relative;top:10rpx;width:42rpx;height:42rpx;" src="${itemchildren.url}"></img>`
									this.changetext = this.changetext.replace(/\[[\u4E00-\u9FA5]{1,3}\]/, src)
							}
						})
					

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
						statetext: this.statetext,
						address:this.address,
						isShow:this.ischoice?1:0,
						watch:0
					}
					// 上传到服务器
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
					this.$u.toast("你好像什么都没写哦~~")
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

<style scoped lang="scss">
	.choice{
		color: #16CC2E !important;
	}
	.quanxin{
		// display: flex;
		margin-top: 30rpx;
	}
	.addresstitle{
		margin-right: 5rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 68vw;
		// background-color: aqua;
	}
.inputMenu{
	width: 100vw;
	position: fixed;
	display: flex;
	/* top: var(--window-top); */
	bottom: 0rpx;
	align-items: center;
	
	left: 0rpx;
	height: 80rpx;
	/* background-color: #7A7676; */
	border-top: 1px solid #D7D6D6;
	border-bottom: 1px solid #D7D6D6; ;
}
	.submit {
		/* margin-top: 20rpx; */
		width: 80%;
		margin: 20rpx auto;
		/* position: relative; */

	}
	.address{
		// width: 20vw;
		background-color: #AAEEB3;
		padding-left: 10rpx;
		padding-right: 10rpx;
		display: flex;
		border-radius:20rpx;
		max-width: 70vw;
		font-size: 22rpx
	}
.emoji{
	display: flex;
	
	flex-wrap: wrap;
	padding-top: 20rpx;
}
.emojiitem{
	
	display: flex;
	width: 12.5vw;
	justify-content: center;
	margin-bottom: 35rpx;
	align-items: center;
}
	.gprop{
		background-color: #F1F1F1;
		width: 100vw;
		/* height: 100rpx; */
		position: fixed;
		/* border-top: 0.5rpx solid #C6C3C3; */
		bottom: 0rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 0rpx;
	}
	.content{
		margin-left: 20rpx;
		// padding: 20rpx;
		color: #fff;
	}
</style>
