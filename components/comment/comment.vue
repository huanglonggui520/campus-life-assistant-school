<template>
	<view class="zwz-comment">
		
		<scroll-view scroll-y="false"  @scrolltolower="lower">
			<view class="comment-item-main" v-for="(item, index) in comments" :key="item.id" :id="index">
				<view class="comment-item">
					<view class="left"><image :src="item.avatar" class="img"></image></view>
					<view class="content">
						<view class="title-name">{{ item.nickname }}</view>
						<view class="content-text">
							<text>{{ item.content }}</text>
						</view>
						<view class="content-btm">
							<text>{{ $u.timeFrom(item.addTime, "yyyy-mm-dd hh:MM:ss")}}</text>
							<text class="btm-back" @click="replyComment(item.nickname, item.id, 2, index,item)">回复</text>
						</view>
					</view>
					
				</view>
				<view v-if="showReplyList.indexOf(item.id) !== -1">
					<view class="comment-item items" v-for="reply in item.children" :key="reply.id">
						<view class="left"><image :src="reply.avatar" class="img"></image></view>
						<view class="content">
							<view class="title-name">
								<view>{{ reply.nickname }}</view>
								<view v-if="reply.superNickname">@</view>
								<view v-if="reply.superNickname">{{ reply.superNickname }}</view>
							</view>
							<view class="content-text">
								<text>{{ reply.content }}</text>
							</view>
							<view class="content-btm">
								<text>{{ $u.timeFrom(item.addTime, "yyyy-mm-dd hh:MM:ss")}}</text>
								<text class="btm-back" @click="replyComment(reply.nickname, reply.superCommentId, 3, index,reply)">回复</text>
							</view>
						</view>
						<view class="right">
						<!-- 	<view class="img-like" @click="commentLike(reply)">
								<image src="../../static/aixin.png" v-if="reply.isLike == 0 || reply.isLike == null"></image>
								<image src="../../static/aixin3.png" v-else></image>
								<text class="comment-like-num">{{ reply.likeNums == 0 || reply.likeNums == null ? '' : reply.likeNums }}</text>
							</view> -->
						</view>
					</view>
				</view>
				<view class="spread" v-if="item.children.length > 0" @click="isShowReply(item.id, index)">
					<text>{{ showReplyList.indexOf(item.id) !== -1 ? '收起' : '展开' + item.children.length + '条回复' }}</text>
					<text :class="showReplyList.indexOf(item.id) !== -1 ? 'up' : 'down'"></text>
				</view>
			</view>
		</scroll-view>
		
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
			placeholderComment: '发条评论吧~',
			iptFocus: false,
			layer: 1,
			superCommentId: null
		};
	},
	methods: {
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
		// 点赞
		commentLike(item) {
			this.$emit('comment-like', item);
		},
		// 回复评论
		replyComment(userNickName, id, tier, index, reply) {
			console.log('index', index);
			this.iptFocus = true;
			this.placeholderComment = '回复@' + userNickName;
			this.superCommentId = id;
			this.superUserId = userNickName;
			this.layer = tier;
			this.CommentIndex = index;
			this.$emit('reply',index,id,userNickName,tier,reply)
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
.zwz-comment {
	// height: 1000rpx;
	width: 100vw;
	background-color: #fff;
	// overflow: scroll;
}
.zwz-comment .comment-num {
	text-align: center;
	color: #c1c6cc;
	height: 40rpx;
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
					max-width: 150rpx;
					display: inline-block;
					margin-right: 20rpx;
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
