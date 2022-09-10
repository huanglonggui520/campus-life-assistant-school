<template>
	<view style="padding-bottom: 25rpx;">
		<!-- 头像部分 -->
		<view class="top">
			<view class="textitem">
				<view class="content" >
					<view>
						<u-avatar  size='large' :src="user_id.avatar_file ? user_id.avatar_file.url:'/static/uni-center/tx.jpg'"></u-avatar>
					</view>
					<view class="name">
						<view style='display: flex; align-items: center;'>
							<u-tag style='margin-right: 15rpx;height: 35rpx;' text="表白墙" :bg-color='color[0]' size='mini' mode="dark" />
							<view style="">
								{{user_id.nickname ? user_id.nickname:user_id.mobile}}
							</view>
						</view>
						
						<view style="font-size: 28rpx;color: #C6C8CB;">
							{{$u.timeFormat(time,'yyyy-mm-dd hh:MM:ss')}}
							
						</view>
					</view>
				</view>
				
						
			</view>
		</view>
		<!-- 分割线 -->
		<view class="line"></view>
		<!-- 富文本 -->
		<view class="rich">
			<u-parse :html="text"></u-parse>
		</view>
		<!-- 图片 -->
			<view style="padding-left: 20rpx;display: flex;">
				<view  v-for="item in img_url">
					<image   
							:lazy-load='true' 
							class='u-image' 
							
							:style="{'width':item.image.width+'rpx'}" 
							mode='widthFix' 
							:src="item.url "
							v-if="img_url.length==1"
						>
					</image>
					
					<view>
						<view v-if="img_url.length>=2 && img_url.length<=5 && img_url.length%2==0" class="image1">
						
							<u-image 
								class='u-image' 
								
								style='margin-left: 10rpx;margin-bottom: 10rpx;' 
								:src='item.url' 
								width='45vw'
								height='45vw'
								>
							</u-image>
							
						</view>
						<view v-if="img_url.length==3 || img_url.length==6" class="image1">
						
							<u-image 
								class='u-image' 
								 
								style='margin-left: 10rpx;margin-bottom: 10rpx;' 
								:src='item.url' 
								width='30vw'
								height='30vw'>
							</u-image>
							
						</view>
					</view>
				</view> 
			</view>
			<!-- 浏览多少次 -->
			<view class="watch">
				<view>
					<u-icon name="thumb-up-fill" size='40' @tap='dz' color='#F3295C' v-if="isdz"></u-icon>
					<u-icon name="thumb-up" size='40' color='#909399' @tap='dz' v-else ></u-icon>
					<!-- <u-icon name="thumb-up" size='40' :label='item.numdz' v-else  color='#909399' @tap='fabulous(item,1)'></u-icon> -->
				</view>
				<view class="right">
					<view style="margin-right: 15rpx;">123人浏览 </view>
					<view>{{lengths}}人点赞</view>
				</view>
			</view>
			<!-- 分割线 -->
			<view style="width: 100vw;height: 15rpx;background-color: #EEEEEE;"></view>
			<view class="bottom-title">
				<view>全部评论</view>
				<view style='color:#859BF5' @tap='comment(item)'>评论</view>
			</view>
			<!-- 分割线 -->
			<view class="line"></view>
			<u-divider style='margin-top: 30rpx;'>还没有评论...</u-divider>
			<ygc-comment ref="ygcComment"
					:placeholder="'发布评论'" 
					@pubComment="pubComment"></ygc-comment>
		</view>
		
	
</template>
<script>
	import ygcComment from '@/components/ygc-comment/ygc-comment.vue';
	export default {
		data() {
			return {
				color:['#F0C461','#AF58F2','#F270D0','#4FDC46'],
				id:'',
				statetext:'',
				time:'',
				state:null,
				text:'',
				user_id:{},//作者信息
				img_url:[],//图片
				likedz:[],//点赞人的信息
				likesc:[],
				isdz:false, //是否点赞
				lengths:0 //点赞人数
				
			}
		},
		async onLoad(val){
			this.id=val.id
			console.log(this.id)
			await this.getdetails()
			this.lengths=this.likedz.length //点赞人数
		},
		methods:{
			async pubComment(e){
					
					// const db = uniCloud.database()
					this.$refs.ygcComment.toggleMask('none')
					// const res=await db.collection('comments').add({
					// 	comment_content:e,
					// 	comment_type:this.type,
					// 	article_id:this.textid,
					// })
					// console.log(res)
			},
			comment(item){
				// console.log(item)
				// this.textid=item._id
				this.$refs.ygcComment.toggleMask('show')
					
			},
			// 点赞
			async dz(){
				const db = uniCloud.database()
				const paramsdz={
					like_id:this.id,
					state_type:1
				}
				if(this.isdz){
					await db.collection("like").where({user_id:this.$store.state.user.info._id,like_id:this.id,state_type:1}).remove()
					uni.showToast({
						title:"取消点赞"
					})
					this.isdz=false
					this.lengths-=1
				}else{
					await db.collection('like').add(paramsdz)
					
					uni.showToast({
						title:"点赞成功"
					})
					this.isdz=true
					this.lengths+=1
				}
			},
			async getdetails(){
				const db = uniCloud.database()
				// 获取文章内容以及作者信息
				const res = await db.collection('love,uni-id-users')
				.where({_id:this.id})
				.field('_id,time,school,statetext,state,img_url,fabulous,text,collection,user_id._id,user_id.mobile,user_id.nickname,user_id.avatar_file.url')
				.get()
				// 获取文章点赞信息
				const likedata = await db.collection('like')
				.where({like_id:this.id})
				.get()
				const {data}=res.result
				const likedatas=likedata.result.data
				let {statetext,time,img_url,user_id,text,state}=data[0]
				this.statetext=statetext
				this.time=time
				this.img_url=img_url
				this.state=state
				this.user_id=user_id[0]
				this.text=text
				// 提取点赞收藏信息
				likedatas.forEach((item)=>{
					if(!item.state_type){
						this.likesc=[...this.likesc,item]
					}else{
						this.likedz=[...this.likedz,item]
					}
				})
				// 查看本人是否点赞
				this.likedz.forEach((item)=>{
					if(item.user_id==this.$store.state.user.info._id){
						this.isdz=true
						return
					}
				})
				console.log(this.likedz)
			}
		}
		
		}
	
</script>

<style lang="scss" scoped>
	
	.textitem {
		padding: 20rpx;
		// margin-bottom: 60rpx;
	}
	
	.text {
		margin-top: 20rpx;
	}

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
.line{
	width: 100%;
	height: 1rpx;
	background-color: #EEEDED;
}
.rich{
	color: #5C5D61;
	// margin-top: ;
	padding: 25rpx;
}

.u-image {
		max-width: 90vw;
		max-height: 800rpx;
		border-radius: 15rpx;
	}
	
	.image1 {
		margin-top: 20rpx;
		flex-wrap: wrap;
		display: flex;
	}

.watch{
	padding: 20rpx;
	display: flex;
	justify-content: space-between;
	.right{
		display: flex;
		color: #AFB2B7;
		font-size: 30rpx;
	}
}
.bottom-title{
	display: flex;
	justify-content: space-between;
	padding: 20rpx;
	// font-size: 32rpx;
	// margin-top: 20rpx;
}

	
</style>
