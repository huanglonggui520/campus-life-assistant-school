<template>
	<view style="padding-bottom: 25rpx;">
		<u-navbar title-color="#fff" back-icon-color="#ffffff" :is-fixed="true" :is-back="false"
			:background="{ background: '#1CBBB4' }" :back-text-style="{color: '#fff'}" :title="null">
			<view class="slot-wrap">
				<view class="map-wrap" v-if="true" @tap="show = true">
					<u-icon name="map" color="#ffffff" size="24"></u-icon>
					<text class="map-wrap-text">{{SCHOOL}}</text>
					<u-icon name="arrow-down-fill" color="#ffffff" size="22"></u-icon>
				</view>
			</view>
		</u-navbar>
		<view>
			<u-select v-model="show" @confirm='school'  :list="listschool" :safe-area-inset-bottom='true'></u-select>
		</view>
		<view class="search">
			<u-search placeholder="输入你想要的内容" style="width: 90%;display: flex;justify-content: center;margin: 0 auto;"
				:show-action="false" v-model="keyword"></u-search>
		</view>
		<view>
			<u-notice-bar color='#D99D1F' bg-color='#F3EBD9' mode="horizontal" :list="list"></u-notice-bar>
		</view>
		<view>
			<u-swiper :list="list1" border-radius='0rpx' height='300'></u-swiper>
		</view>
		<view class="nav">
			<view class="navitem">
				<view class="top">
					<u-image width="100%" mode='aspectFit' height="100%" src="/static/nav/biaobai.png"></u-image>
				</view>
				<view class="title">表白墙</view>
			</view>
			<view class="navitem">
				<view class="top" style="background-color: #AF58F2;">
					<u-image width="100%" mode='aspectFit' height="100%" src="/static/nav/ershou.png"></u-image>
				</view>
				<view class="title">二手闲置</view>
			</view>
			<view class="navitem">
				<view class="top" style="background-color: #F270D0;">
					<u-image width="100%" mode='aspectFit' height="100%" src="/static/nav/kuaidi.png"></u-image>
				</view>
				<view class="title">快递代取</view>
			</view>
			<view class="navitem">
				<view class="top" style="background-color: #4FDC46;">
					<u-image width="100%" mode='aspectFit' height="100%" src="/static/nav/sw.png"></u-image>
				</view>
				<view class="title">失物招领</view>
			</view>
		</view>
		<view style="background-color: #f3f4f6;width: 100%;height: 15rpx;margin-top: 30rpx;">
		</view>
		<view style="margin-bottom: 30rpx;" class="xd">
			<!-- <u-sticky offset-top='231'> -->

			<!-- <view class="sticky"> -->
			<u-tabs :list="listtab" :is-scroll="true" :current="current" @change="change"></u-tabs>
			<!-- </view> -->
			<!-- </u-sticky> -->


		</view>
		<!-- 表白墙 -->
		<view v-for="item in databbai" v-show='item.isShow || isShow_id==item.user_id[0]._id'>
			<view class="textitem">
				<!-- 头像区域 -->
				<view @tap='goxiangq(item)'><name :item='item' :isShow_id='isShow_id'></name></view>
				<view class="text">
					<view style="color: #606266;font-size: 34rpx;" @tap='goxiangq(item)'>
						<u-parse :html="item.text.replace(/\n/g,'<br>')"></u-parse>
					</view>
					<!-- 适配图片排列问题 -->
					<view style="margin-top: 20rpx;">
						<view @tap='goxiangq(item)'>
							<image
									:lazy-load='true' 
									class='u-image' 
									@tap.stop='look(item.img_url[0].url)' 
									:style="{'width':item.img_url[0].image.width*9/35+'rpx'}" 
									mode='widthFix' 
									:src="item.img_url[0].url "
									v-if="item.img_url.length==1 && item.img_url[0].image.width>900"
								>
							</image>
							<image 
								:lazy-load='true' class='u-image'  
								@tap.stop='look(item.img_url[0].url)'
								:style="{'width':item.img_url[0].image.width*9/12+'rpx'}" 
								mode='widthFix' 
								:src="item.img_url[0].url "
								v-if="item.img_url.length==1 && item.img_url[0].image.width<=900">
							</image>
						</view>
						<view>
							<view v-if="item.img_url.length>=2 && item.img_url.length<=5 && item.img_url.length%2==0" class="image1">
							
								<u-image 
									class='u-image' 
									v-for='itemimg in item.img_url' 
									@tap='look(itemimg.url)'
										
									style='margin-left: 10rpx;margin-bottom: 10rpx;' 
									:src='itemimg.url' 
									width='45vw'
									height='45vw'
									>
								</u-image>
								
							</view>
							<view v-if="item.img_url.length==3 || item.img_url.length==6" class="image1">
							
								<u-image 
									class='u-image' 
									v-for='itemimg in item.img_url' 
									@tap='look(itemimg.url)'
									style='margin-left: 10rpx;margin-bottom: 10rpx;' 
									:src='itemimg.url' 
									width='30vw'
									height='30vw'>
								</u-image>
								
							</view>
						</view>
					</view>
				</view>
				<!-- 地址 -->
				<view class="address" v-if="item.address.length">
					<u-icon name="map" color="#A5ACBD" size="26"></u-icon>
					<view style="color: #A5ACBD;font-size: 26rpx;">{{item.address}}</view>
				</view>
				<view class="bot">
					<view>
						<!-- 点赞评论收藏 -->
						<u-icon name="star-fill" color="#F3295C" :label='item.numsc?item.numsc:"收藏"'  v-if='item.color' size='40' @tap='fabulous(item,0)'></u-icon>
						<u-icon name="star" color="#909399"  :label='item.numsc?item.numsc:"收藏"' v-else  size='40' @tap='fabulous(item,0)'></u-icon>
					</view>
					<view>
						<u-icon name="chat" size='40' :label="item.comments?item.comments:'评论'" @tap='goxiangq(item)' color='#909399' ></u-icon>
					</view>
					<view>
						<u-icon name="thumb-up-fill" :label='item.numdz?item.numdz:"点赞"' size='40' v-if='item.colordz'  color='#F3295C' @tap='fabulous(item,1)'></u-icon>
						<u-icon name="thumb-up" size='40' :label='item.numdz?item.numdz:"点赞"' v-else  color='#909399' @tap='fabulous(item,1)'></u-icon>
					</view>
				</view>
				
			</view>
			<!-- 动态之间分割线 -->
			<view style="background-color: #f3f4f6;width: 100%;height: 8rpx;margin-top: -60rpx;">
			</view>
			
		</view>
		<!-- 加载中 -->
		<u-divider v-if='isshow'>{{buttomtitle}}</u-divider>

		<!-- 回到顶部 -->
		<u-back-top :scroll-top="scrollTop"></u-back-top>
	</view>
</template>
<script>
	import name from '@/components/name/name.vue'
	export default {
		data() {
			return {
				buttomtitle:'加载中...',
				scrollTop: 0,
				count:0,
				show: false,
				colors:'#909399',
				isshow:false,
				listschool: [
						{
							value: 1,
							label: '贵州师范大学'
						},
						{
								label: '贵州财经大学',
								value:2
						},
						{
								label: '贵州医科大学',
								value:3
						},
						{
								label: '贵州大学',
								value:4
						}
						],
				keyword: '',
				SCHOOL:'贵州师范大学',
				list: [],
				isShow_id:this.$store.state.user.info._id,
				list1: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				pages:1,
				listtab: [
					{
							name: '最新动态'
					},
					{
						name: '表白墙'
					}, {
						name: '二手闲置',

					},
					{
						name: '快递代取',

					},
					{
						name: '失物招领',

					}
				],
				current: 0,
				databbai: [],
				textid:'',
				type:1,
				
			}
		},
		components:{
		name	
		},
		async onLoad() {
			// const comments=uniCloud.importObject('comments')
			// const a=await comments.comment()
			// console.log('a',a)
			// const db = uniCloud.database();
			// const res=await db.collection("love").remove()
			console.log(this.$store.state.user)
			const arr=await this.get()
			this.databbai=arr
			console.log(this.databbai)
			console.log(this.isShow_id)
		},
		async onPullDownRefresh() {
			this.pages=1
			const arr =await this.get()
			if(arr.length!=0){
				this.databbai=arr
			}else{
				uni.showToast({
					title:'没有更多信息了',
					icon:"none"
				})
			}
			uni.stopPullDownRefresh()
		},
		async onReachBottom() {
			this.isshow=true
			this.buttomtitle='玩命加载中...'
			this.pages=this.pages+1
			const arr=await this.get()
			this.databbai=[...this.databbai,...arr]
			
		},
		computed: {
			slotRightCurrent() {
				return this.slotRight ? 0 : 1;
			},
			
			
		},
		methods: {
			// 前往详情
			goxiangq(item){
				console.log(item)
				uni.navigateTo({
					url:`/pages/details/details?id=${item._id._value}`
				})
			},
			// 收藏
			async fabulous(e,val){ //e为每篇文章的对象,val为点赞还是收藏
				const db = uniCloud.database()
				// 添加收藏数据
				const params={
					like_id:e._id._value,
					state_type:0
				}
				// 添加点赞数据
				const paramsdz={
					like_id:e._id._value,
					state_type:1
				}
				// 更新到本地收藏数据
				const pushdata={
					like_id:e._id._value,
					state_type:0,
					user_id:this.$store.state.user.info._id
				}
				const pushdatadz={
					like_id:e._id._value,
					state_type:1,
					user_id:this.$store.state.user.info._id
				}
				let count=0
				// console.log('77',e)
				if(e._id.like.length){ //e._id.like为文章收藏人的数组
					e._id.like.forEach(async (item,index)=>{
						// 查看本人是否已经点赞，如果已经点赞则取消点赞
						if(!val && item.user_id==this.$store.state.user.info._id && !item.state_type){
							await db.collection("like").where({user_id:this.$store.state.user.info._id,like_id:e._id._value}).remove()
							uni.showToast({
								title:"取消收藏",
								icon:"none"
							})
							e.color=0
							e.numsc-=1
							e._id.like.splice(index,1)  //取消收藏后删除该人在文章点赞人的数据
							return
						}
						// 点赞点赞
						if(val && item.user_id==this.$store.state.user.info._id && item.state_type){
							await db.collection("like").where({user_id:this.$store.state.user.info._id,like_id:e._id._value}).remove()
							
							uni.showToast({
								title:"取消点赞",
								icon:"none"
							})
							e.colordz=0
							e.numdz-=1 //每篇文章点赞数
							console.log(e)
							e._id.like.splice(index,1)  //取消收藏后删除该人在文章点赞人的数据
							let collection = db.collection("love")
							let res = await collection.where({_id:e._id._value})
							  .update({
							    fabulous:e.numdz
							   
							  });
							return
						}
						count+=1
					})
				}else if(!val){
					
					await db.collection('like').add(params)
					uni.showToast({
						title:"收藏成功",
						icon:"none"
					})
					e.color=1 //设置文章收藏按钮
					e.numsc+=1
					e._id.like.push(pushdata)  //添加到本地数组
					
				}else if(val){
					await db.collection('like').add(paramsdz)
					
					uni.showToast({
						title:"点赞成功",
						icon:"none"
					})
					e.numdz+=1
					
					e.colordz=1 //设置文章收藏按钮
					e._id.like.push(pushdatadz)  //添加到本地数组
					let collection = db.collection("love")
					let res = await collection.where({_id:e._id._value})
					  .update({
					    fabulous:e.numdz
					   
					  });
				}
				
				if(count>=e._id.like.length && !val){
					await db.collection('like').add(params)
					uni.showToast({
						title:"收藏成功",
						icon:"none"
					})
					e.color=1
					e.numsc+=1
					e._id.like.push(pushdata)
				}
				if(count>=e._id.like.length && val){
					await db.collection('like').add(paramsdz)
					uni.showToast({
						title:"点赞成功",
						icon:"none"
					})
					e.colordz=1
					e.numdz+=1
					
					e._id.like.push(pushdatadz)
					let collection = db.collection("love")
					let res = await collection.where({_id:e._id._value}) //更新点赞数
					  .update({
					    fabulous:e.numdz
					   
					  });
					
				}
				// console.log('77',e)
				
			},
			// 获取收藏信息
			async getlike(id){
				const db = uniCloud.database()
				const res= await db.collection('like').where({
					like_id:id
				}).get()
				return res
				// console.log(res)
			},
			// 发布评论
			
			
			//图片预览
			look(url) {
				var urlList = []
				urlList.push(url) //push中的参数为 :src="item.img_url" 中的图片地址
				uni.previewImage({
					indicator: "number",
			        loop: true,
					urls: urlList,
					longPressActions:true
				})
			},
			//更新vuex里学校名字
			async school(e){
					
					this.$store.commit('user/SCHOOL',e[0].label)
					this.SCHOOL=this.$store.state.user.school
					const arr=await this.get()
					this.databbai=arr
					console.log(arr)
			},
			async get(){
				//获取notice滚动通知
				const db = uniCloud.database()
				const dbCmd = db.command
				const res = await db.collection('nocite').get()
				this.list = res.result.data[0].text
				// console.log(this.$store.state.user.school)
				var SCHOOL=this.$store.state.user.school
				// this.isshow=false
				// 获取表白墙动态
				if(this.current==0){
					// console.log('S',SCHOOL.toString())
					var restext = await db.collection("love,like,comments,uni-id-users")
								.where(dbCmd.or({
									school:SCHOOL,
									isShow:1
								},{
									'user_id._id':this.$store.state.user.info._id?this.$store.state.user.info._id:'',
									school:SCHOOL
								})
								)
								.field('_id,time,school,address,isShow,statetext,state,img_url,fabulous,text,collection,user_id._id,user_id.mobile,user_id.nickname,user_id.avatar_file.url')
								.orderBy('time desc')
								.skip((this.pages-1)*8)
								.limit(8)
								.get()
				}else{
					var restext = await db.collection("love,comments,uni-id-users,like")
								.where(dbCmd.or({
									school:SCHOOL,
									isShow:1,
									state:this.current
								},{
									'user_id._id':this.$store.state.user.info._id,
									school:SCHOOL,
									state:this.current
								}
								))
								.field(
								'_id,time,school,statetext,address,isShow,state,img_url,fabulous,text,collection,user_id._id,user_id.mobile,user_id.nickname,user_id.avatar_file.url')
								.orderBy('time desc')
								.skip((this.pages-1)*8)
								.limit(8)
								.get()
				}
				let data = restext.result.data
				console.log(data)
				// 将已经点赞的按钮颜色改为红色
				data.forEach((item)=>{
					// 初始化点赞收藏按钮
					item.comments=0
					item.color=0 //收藏是否为实心
					item.colordz=0//点赞按钮是否为实心
					item.numsc=0//初始化收藏人数
					item.numdz=0//初始化点赞人数
					item._id.like.forEach((itemchildren)=>{
						if(itemchildren.user_id==this.$store.state.user.info._id && !itemchildren.state_type){
							item.color=1 //将收藏按钮变为实心
							
							// return
						}else if(itemchildren.user_id==this.$store.state.user.info._id && itemchildren.state_type){
							item.colordz=1 //将点赞按钮变为实心
							
						}
						if(!itemchildren.state_type){
							item.numsc+=1 //计算收藏人数
						}else if(itemchildren.state_type){
							item.numdz+=1//计算点赞人数
						}
					})
					item.comments=item._id.comments.length
				})
				console.log('bbq',data)
				if(data.length==0){
					this.buttomtitle='我也是有底线的'
					this.isshow=true
					return []
				}else{
					this.isshow=false
					return data
				}
			},
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
			async change(index) {
				uni.showLoading({
					title:'加载中...'
				})
				this.isshow=false
				this.databbai=[]
				this.pages=1
				this.current = index;
				const arr=await this.get()
				this.databbai=arr
				uni.hideLoading()
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.address{
		display: flex;
	}
	.u-image {
		max-width: 80vw;
		max-height: 800rpx;
		border-radius: 15rpx;
	}
	
	.image1 {
		margin-top: 20rpx;
		flex-wrap: wrap;
		display: flex;
	}

	.bot {
		display: flex;
		margin-top: 25rpx;
		justify-content: space-around;
	}

	.textitem {
		padding: 20rpx;
		margin-bottom: 60rpx;
	}
	
	.text {
		margin-top: 20rpx;
	}


	.search {
		background-color: #1CBBB4;
		height: 80rpx;
		// width: 80%;
	}

	.nav {
		display: flex;
		flex-wrap: wrap;
		// text-align: center;
	}

	.u-demo {
		//height: 200vh;
		height: calc(100% - 44px);
		height: calc(100% - 44px - constant(safe-area-inset-top));
		height: calc(100% - 44px - env(safe-area-inset-top));
	}

	.navitem .top {
		background-color: #F0C461;
		border-radius: 50%;
		width: 70rpx;
		height: 70rpx;
		margin-top: 30rpx;
		padding: 15rpx;

	}

	.navitem {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;

	}

	.navitem .title {
		font-size: 30rpx;
		margin-top: 10rpx;
	}

	.wrap {
		padding: 24rpx;
	}

	.navbar-right {
		margin-right: 24rpx;
		display: flex;
	}

	.search-wrap {
		margin: 0 20rpx;
		flex: 1;
	}

	.right-item {
		margin: 0 12rpx;
		position: relative;
		color: #ffffff;
		display: flex;
	}

	.message-box {}

	.slot-wrap {
		display: flex;
		align-items: center;
		flex: 1;
	}

	.map-wrap {
		display: flex;
		align-items: center;
		margin-top: -15rpx;
		padding: 4px 6px;
		background-color: rgba(240, 240, 240, 0.35);
		color: #fff;
		font-size: 22rpx;
		border-radius: 100rpx;
		margin-left: 40rpx;
	}

	.map-wrap-text {
		padding: 0 6rpx;
	}
</style>
