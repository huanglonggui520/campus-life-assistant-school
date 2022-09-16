<template>
	<view style="padding-bottom: 35rpx;">
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
							{{$u.timeFrom(time, "yyyy-mm-dd hh:MM:ss")}}
							
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 分割线 -->
		<view class="line"></view>
		<!-- 富文本 -->
		<view class="rich">
			<u-parse :html="text.replaceAll('\n','<br>')"></u-parse>
		</view>
		<!-- 图片 -->
			<view style="padding-left: 20rpx;display: flex;">
				<view  v-for="item in img_url">
					<image   
							:lazy-load='true' 
							class='u-image' 
							@tap="look(item.url)"
							:style="{'width':img_url[0].image.width*9/35+'rpx'}"
							mode='widthFix' 
							:src="item.url "
							v-if="img_url.length==1 && img_url[0].image.width>900"
						>
					</image>
					<image
							:lazy-load='true' 
							class='u-image' 
							@tap="look(item.url)"
							:style="{'width':img_url[0].image.width*9/12+'rpx'}"
							mode='widthFix' 
							:src="item.url "
							v-if="img_url.length==1 && img_url[0].image.width<900"
						>
					</image>
					
					<view>
						<view v-if="img_url.length>=2 && img_url.length<=5 && img_url.length%2==0" class="image1">
						
							<u-image 
								class='u-image' 
								@tap="look(item.url)"
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
								 @tap="look(item.url)"
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
				<view style='color:#859BF5' @tap='comment(1)'>评论</view>
			</view>
			
			<!-- 分割线 -->
			<view class="line" style="margin-bottom: 20rpx;"></view>
			
			<comment v-if="commentlist.length" :comments="commentlist" @comment-like="handLike" @send-comment="handSend" v-model="commentText" @lower="lower" @reply="reply"></comment>
			<!-- <u-divider v-else style='margin-top: 30rpx;'>还没有评论...</u-divider> -->
			<view v-else @tap='comment(1)'>
				<u-empty  text="还没有评论哦,赶快来评论吧..."  mode="message"></u-empty>
			</view>
			<ygc-comment ref="ygcComment"
					:placeholder="placeholderComment" 
					@pubComment="pubComment">
			</ygc-comment>
			<!-- <view class="bottom-input"><u-input v-model="value" :type="type" :border="border" /></view> -->
			<u-back-top :scroll-top="scrollTop"></u-back-top>
		</view>
		
	
</template>
<script>
	import ygcComment from '@/components/ygc-comment/ygc-comment.vue';
	import comment from '@/components/comment/comment.vue'
	export default {
		components:{
				comment,
				ygcComment
		},
		data() {
			return {
				color:['#F0C461','#AF58F2','#F270D0','#4FDC46'],
				id:'',
				commentText: '',
				placeholderComment:'说点什么吧...',
				commentone_id:'',
				superNickname:'',
				reply_user_id:'',
				layer:0,
				statetext:'',
				time:'',
				etext:'',//回复框内容
				state:null,
				commentscs:[],//初始评论数据
				type:1,
				scrollTop: 0,
				text:'',
				user_id:{},//作者信息
				img_url:[],//图片
				likedz:[],//点赞人的信息
				likesc:[],
				isdz:false, //是否点赞
				lengths:0, //点赞人数,
				commentlist:[],//评论列表
			}
		},
		async onLoad(val){
			// const db = uniCloud.database();
			// const res=await db.collection("comments").remove()
			this.$bus.$on('comment',this.comment)
			this.id=val.id
			
			await this.getdetails()
			await this.getcomments()
			this.lengths=this.likedz.length //点赞人数
			this.setcomments()
			console.log('user',this.user_id)
		},
		methods:{
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
			lower() {
				console.log('到底了');
			},
			onPageScroll(e) {
					this.scrollTop = e.scrollTop;
				},
			// 点击回复触发事件
			reply(placeholderComment,index, id, userNickName, layer, reply) {
				console.log(placeholderComment,index, id, userNickName, layer, reply);
				this.commentone_id=id
				this.superNickname=userNickName
				this.placeholderComment=placeholderComment
				this.layer=layer
				this.reply_user_id=reply.super_user_id //上一个评论人的id
				// this.pubComment(e)
				// console.log('00',this.etext)
			},
			async pubComment(e){
					let params={}
					let e_id=''
					const db = uniCloud.database()
					
					this.$refs.ygcComment.toggleMask('none')
					console.log(this.layer)
					
					if(this.layer==2 || this.layer==3){
						const resid=await db.collection('comments').add({
							comment_content:e,
							comment_type:this.layer,
							article_id:this.id,
							reply_id:this.commentone_id,
							reply_user_id:this.reply_user_id
						})
						e_id=resid.result.id
						// 找出刚刚的评论
						
					}else if(this.layer==1){
						
						const resid=await db.collection('comments').add({
							comment_content:e,
							comment_type:this.layer,
							article_id:this.id,
						})
						e_id=resid.result.id
						// 找出刚刚的评论
						
						// this.commentlist.unshift()
						// console.log(res)
					}
					const res = await db.collection('comments,uni-id-users')
					.where({_id:e_id})
					.field('_id,comment_content,reply_id,comment_type,reply_user_id._id,reply_user_id.mobile,reply_user_id.nickname,article_id,time,user_id._id,user_id.mobile,user_id.nickname,user_id.avatar_file.url')
					.get()
					params.id=res.result.data[0]._id
					params.avatar=res.result.data[0].user_id[0].avatar_file?res.result.data[0].user_id[0].avatar_file.url:'/static/uni-center/tx.jpg'
					params.nickname=res.result.data[0].user_id[0].nickname?res.result.data[0].user_id[0].nickname:res.result.data[0].user_id[0].mobile
					params.content=res.result.data[0].comment_content
					params.addTime=res.result.data[0].time
					params.isLike='0'
					params.user_id=res.result.data[0].user_id[0]._id
					if(this.layer==1){
						
						params.layer=1
						params.superCommentId=null
						params.superNickname=null
						params.children=[]
						this.commentlist.unshift(params)
					}
					else if(this.layer==2 || this.layer==3){
						
						params.super_user_id=res.result.data[0].user_id[0]._id
						params.layer=res.result.data[0].comment_type
						params.superCommentId=res.result.data[0].reply_id
						params.superNickname=res.result.data[0].reply_user_id.length?res.result.data[0].reply_user_id[0].nickname ||res.result.data[0].reply_user_id[0].mobile:null
						// params.children=[]
						this.commentlist.forEach(item =>{
							if(item.layer==1 && item.id==res.result.data[0].reply_id){
								item.children.push(params)
								console.log('767',item)
							}
						})
					}
					uni.showToast({
						title:'发表成功'
					})
					console.log('单个评论',res.result.data[0])
					console.log('礼拜',this.commentlist)
			},
			comment(val){
				console.log(val)
				this.layer=val
				this.$refs.ygcComment.toggleMask('show')	
				// this.$bus.$emit('toggleMask','show')
			},
			// 获取评论
			async getcomments(){
				const db = uniCloud.database()
				const res = await db.collection('comments,uni-id-users')
				.where({article_id:this.id})
				.field('_id,comment_content,reply_id,comment_type,reply_user_id._id,reply_user_id.mobile,reply_user_id.nickname,article_id,time,user_id._id,user_id.mobile,user_id.nickname,user_id.avatar_file.url')
				.orderBy('time desc')
				.get()
				this.commentscs=res.result.data
				
			},
			// 设置评论格式
			setcomments(){
				
				this.commentscs.forEach(item =>{
					const commentlists={}
					// 找出所有的一级评论
					if(item.comment_type==1){
						commentlists.id=item._id
						commentlists.avatar=item.user_id[0].avatar_file?item.user_id[0].avatar_file.url:'/static/uni-center/tx.jpg'
						commentlists.nickname=item.user_id[0].nickname ? item.user_id[0].nickname:item.user_id[0].mobile
						commentlists.content=item.comment_content
						commentlists.user_id=item.user_id[0]._id
						commentlists.addTime=item.time
						commentlists.isLike='0'
						commentlists.layer=1
						commentlists.superNickname=null
						commentlists.superCommentId=null
						commentlists.children=[]
						this.commentlist.push(commentlists)
					}
				})
			
				this.commentscs.forEach(item =>{
					const commentlists={}
					// 找出所有的2级评论
					if(item.comment_type==2){
						this.commentlist.forEach(item2 =>{
							if(item2.id==item.reply_id){
								commentlists.id=item._id
								commentlists.avatar=item.user_id[0].avatar_file?item.user_id[0].avatar_file.url:'/static/uni-center/tx.jpg'
								commentlists.nickname=item.user_id[0].nickname ? item.user_id[0].nickname:item.user_id[0].mobile
								commentlists.content=item.comment_content
								commentlists.user_id=item.user_id[0]._id
								commentlists.addTime=item.time
								commentlists.isLike='0'
								commentlists.layer=2
								commentlists.super_user_id=item.user_id[0]._id //上一级评论的作者id
								commentlists.superNickname=item2.nickname //上一级评论人的昵称
								commentlists.superCommentId=item2.id //第一级评论id
								item2.children.push(commentlists)
							}
						})
					}
				})
				this.commentscs.forEach(item =>{
					const commentlists={}
					// 找出所有的3级评论
					if(item.comment_type==3){
						this.commentlist.forEach(item2 =>{
							if(item2.id==item.reply_id){
								commentlists.id=item._id
								commentlists.user_id=item.user_id[0]._id
								commentlists.avatar=item.user_id[0].avatar_file?item.user_id[0].avatar_file.url:'/static/uni-center/tx.jpg'
								commentlists.nickname=item.user_id[0].nickname ? item.user_id[0].nickname:item.user_id[0].mobile
								commentlists.content=item.comment_content
								commentlists.addTime=item.time
								commentlists.isLike='0'
								commentlists.layer=3
								commentlists.super_user_id=item.user_id[0]._id
								commentlists.superNickname=item.reply_user_id[0].nickname?  item.reply_user_id[0].nickname:item.reply_user_id[0].mobile
								commentlists.superCommentId=item2.id
								item2.children.push(commentlists)
							}
						})
					}
				})
				console.log('初始数据',this.commentscs)
				console.log('评论列表',this.commentlist)
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
				// db.collection("comments").remove()
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
				
			}
		}
		
		}
	
</script>

<style lang="scss" scoped>
	.bottom-input{
		width: 100%;
		height: 80rpx;
		// color: red;
		background-color: red;
		position: fixed;
		bottom: 0rpx;
		right: 0rpx;
		left: 0rpx;
	}
	.pl{
		display: flex;
		font-size: 30rpx;
		padding: 20rpx;
		.avatar{
			margin-right: 15rpx;
		}
	}
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
	// margin-top: 10rpx;
	background-color: #EEEDED;
}
.rich{
	color: #5C5D61;
	// margin-top: ;
	padding: 20rpx;
}

.u-image {
		max-width: 90vw;
		// max-height: 800rpx;
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
	// margin-bottom: 10rpx;
	// font-size: 32rpx;
	// margin-top: 20rpx;
}

</style>
