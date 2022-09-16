<template>
	<view class="zwz-comment">
		
		<scroll-view scroll-y="false"  @scrolltolower="lower">
			<view class="comment-item-main" v-for="(item, index) in comments" :key="item.id" :id="index">
				<view class="comment-item">
					<view class="left"><image :src="item.avatar" class="img"></image></view>
					<view class="content">
						<view class="title-name">{{ item.nickname }}</view>
						<view class="content-text" @longpress="show(item.nickname, item.id, 1, index,item,item.content)" @tap="replyComment(item.nickname, item.id, 2, index,item)">
							<text>{{ item.content }}</text>
						</view>
						<view class="content-btm" @tap="replyComment(item.nickname, item.id, 2, index,item)">
							<text>{{ $u.timeFrom(item.addTime, "yyyy-mm-dd hh:MM:ss")}}</text>
							<text class="btm-back">回复</text>
						</view>
						<!-- <view style="width: 100%;height: 1rpx;background-color: black;"></view> -->
					</view>
					
				</view>
				<view v-if="showReplyList.indexOf(item.id) !== -1">
					<view class="comment-item items" v-for="reply in item.children" :key="reply.id">
						<view class="left"><image :src="reply.avatar" class="img"></image></view>
						<view class="content">
							<view class="title-name">
								<view>{{ reply.nickname }}{{reply.layer}}</view>
								<view v-if="reply.superNickname && reply.layer==3"><u-icon name="play-right-fill" size='10'></u-icon></view>
								<view v-if="reply.superNickname && reply.layer==3">{{ reply.superNickname }}</view>
							</view>
							<view class="content-text" @longpress="show(item.nickname, item.id, 2, index,reply,reply.content)" @click="replyComment(reply.nickname, reply.superCommentId, 3, index,reply)">
								<text>{{ reply.content }}</text>
							</view>
							<view class="content-btm" @click="replyComment(reply.nickname, reply.superCommentId, 3, index,reply)">
								<text>{{ $u.timeFrom(reply.addTime, "yyyy-mm-dd hh:MM:ss")}}</text>
								<text class="btm-back" >回复</text>
							</view>
						</view>
					
					</view>
					
				</view>
				<view class="spread" v-if="item.children.length > 0" @click="isShowReply(item.id, index)">
					<text>{{ showReplyList.indexOf(item.id) !== -1 ? '收起' : '展开' + item.children.length + '条回复' }}</text>
					<text :class="showReplyList.indexOf(item.id) !== -1 ? 'up' : 'down'"></text>
				</view>
			</view>
		</scroll-view>
		<u-popup v-model="isshow" mode="bottom"  >
					<view>
						
						<view class="item isboder" @tap="deletecomment" v-if="isshowdeleteid==deleteuser_id">删除</view>
						<view class="item isboder">举报</view>
						<view class="item" @tap='copy'>复制</view>
						<view style="width: 100vw;height: 12rpx;background-color: #EAEAEC;"></view>
						<view class="item" @tap='isshow=false'>取消</view>
					</view>
		</u-popup>
		
		
	</view>
</template>

<script>
export default {
	name: 'zwz-comment',
	props: {
		comments: {
			type: Array,
			default: () => {
				return [];
			}
		},
		value: ''
	},
	
	data() {
		return {
			showReplyList: [],
			copytext:'',
			isshowdeleteid:this.$store.state.user.info._id,
			placeholderComment: '发条评论吧~',
			iptFocus: false,
			layer: 1,
			deleteuser_id:'',//删除评论作者ID,用来展示是否有删除按钮
			deleteid:'',
			isshow:false,
			
			superCommentId: null,
			
							
		};
	},
	computed:{
			isdisabled(){
				return this.isshowdeleteid!=this.deleteuser_id
			}
	},
	methods: {
		// 复制
		copy(){
			
			this.isshow=false
			uni.setClipboardData({
				data: this.copytext,
				success: function () {
					console.log('success');
				}
			});
		},
		// 展开、收起
		isShowReply(id, index) {
			if (this.showReplyList.indexOf(id) == -1) {
				this.showReplyList.push(id);
				this.$emit('reply-click', this.book);
			} else {
				let index = this.showReplyList.indexOf(id);
				this.showReplyList.splice(index, 1);
			}
		},
		click(index){
			console.log(this.list[index].text)
			if(this.list[index].text==='删除'){
				this.deletecomment()
			}
		},
		// 点赞
		commentLike(item) {
			this.$emit('comment-like', item);
		},
		// 回复评论
		replyComment(userNickName, id, tier, index, reply) {
			this.$bus.$emit('comment') //调起评论输入框
			console.log('index', index);
			this.iptFocus = true;
			this.placeholderComment = '回复@' + userNickName;
			this.superCommentId = id;
			this.superUserId = userNickName;
			this.layer = tier;
			this.CommentIndex = index;
			this.$emit('reply',this.placeholderComment,index,id,userNickName,tier,reply)
		},
		show(userNickName, id, tier, index, reply,copy){
			this.isshow=true
			this.copytext=copy
			this.deleteuser_id=reply.user_id
			this.deleteid=reply.id
			this.superCommentId = id;
			this.layer = tier
			console.log('长按',this.layer)
			console.log(copy)
		},
		// 删除评论
		async deletecomment(){
			this.isshow=false
			const db = uniCloud.database();
			await db.collection("comments").where({_id:this.deleteid,user_id:this.$store.state.user.info._id}).remove()
			if(this.layer==1){
				const res=await db.collection("comments").where({reply_id:this.superCommentId}).remove()
				this.comments.forEach((item,index)=>{
					if(item.id==this.deleteid){
						this.comments.splice(index,1)
					}
				})
			}
			else{
					this.comments.forEach((item,index)=>{
						if(item.id==this.superCommentId){
							item.children.forEach((item2,index2)=>{
								if(item2.id==this.deleteid){
									item.children.splice(index2,1)
								}
							})
						}
				})
				
			}
			uni.showToast({
				title:'删除成功',
				icon:"none"
			})
			this.isshow=false
			
			// console.log(res)
		},
		// 发送评论
		sendCourseComment() {
			this.$emit('send-comment', this.layer, this.superCommentId);
		},
		input(event) {
			this.$emit('input', event.target.value);
		},
		lower() {
			console.log('222222')
			this.$emit('lower');
		}
	}
};
</script>

<style lang="scss" scoped>
	
	.item{
		display: flex;
		color: #303133;
		justify-content: center;
		font-size: 36rpx;
		padding: 34rpx 0;
		line-height: 1;
		
		
	}
	.isboder{
		border-bottom: 1rpx solid #F4F6F8;
	}
.zwz-comment {
	// height: 1000rpx;
	width: 100vw;
	background-color: #fff;
	// overflow: scroll;
}
.zwz-comment .comment-num {
	text-align: center;
	color: #c1c6cc;
	height: 38rpx;
	margin-top: 10rpx;
}
.comment-item-main {
	margin-bottom: 40rpx;
	.comment-item {
		display: flex;
		padding: 0 20rpx;
		.left {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			overflow: hidden;
			.img {
				width: 80rpx;
				height: 80rpx;
			}
		}
		.content {
			flex: 1;
			margin: 0 20rpx;
			.title-name {
				color: #bbbbbb;
				/* display: inline-block; */
				view {
					max-width: 250rpx;
					display: inline-block;
					margin-right: 10rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
			.content-text {
				/* width: 480rpx; */
				font-size: 16px;
				margin: 20rpx 0;
			}
			.content-btm {
				color: #bbbbbb;
				margin-bottom: 30rpx;
				.btm-back {
					margin-left: 40rpx;
					font-size: 16px;
				}
			}
		}
		.right {
			height: 70rpx;

			.img-like {
				image {
					display: block;
					width: 50rpx;
					height: 50rpx;
					margin-top: 20rpx;
				}
			}
		}
	}
	.spread {
		color: #bbbbbb;
		margin-left: 80rpx;
		height: 17px;
		position: relative;
		.down {
			width: 0;
			height: 0;
			position: absolute;
			margin-left: 5px;
			top: 7px;
			border-right: 8px solid transparent;
			border-left: 8px solid transparent;
			border-bottom: 8px solid transparent;
			border-top: 8px solid #bbbbbb;
		}
		.up {
			width: 0;
			height: 0;
			position: absolute;
			margin-left: 5px;
			bottom: 4px;
			border-right: 8px solid transparent;
			border-left: 8px solid transparent;
			border-bottom: 8px solid #bbbbbb;
			border-top: 8px solid transparent;
		}
	}
}
.items {
	margin-left: 80rpx;
}

.comment-btm {
	height: 100rpx;
	width: 100%;
	display: flex;
	/* position: absolute; */
	bottom: 0;
	background-color: #fff;
	border-top: 2rpx solid #e0e0e0;
	input {
		height: 80rpx;
		width: 400rpx;
		border-radius: 20rpx;
		background-color: #f3f3f3;
		margin-left: 80rpx;
		margin-top: 10rpx;
		padding: 10rpx;
	}
	button {
		height: 80rpx;
		margin-top: 10rpx;
	}
}
.comment-like-num {
	display: inline-block;
	width: 50rpx;
	text-align: center;
}
</style>
