<template>
	<view>
		<view>
			<u-sticky offset-top="0">
				<!-- 只能有一个根元素 -->
				<view class="sticky">
					<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
				</view>
			</u-sticky>
		</view>
		<view v-for="(item,index) in DataList" :key="item._id">
			<releaseIist :item='item'></releaseIist>
		</view>
		
		
		<!-- <view class="u-line-1">对于而且客户端渠道获取i七的股权请核对去奋斗求带回去驱动器狭去打印要求的企业都会i那皇帝企鹅一个一千多个</view> -->
	</view>
</template>

<script>
	import releaseIist from "../../components/releaseIist/releaseIist.vue"
	export default {
		data() {
			return {
				DataList: [],
				list: [{
					name: '待收货'
				}, {
					name: '待付款'
				}, {
					name: '待评价',
					count: 5
				}],
				current: 0
			}
		},
		components: {
			releaseIist
		},
		onLoad() {
			this.getMyRelease()
			uni.getSavedFileList({
			  success: function (res) {
			    console.log(res.fileList);
			  }
			});
			console.log('file',uni.getFileSystemManager())
		},
		methods: {
			change(index) {
				this.current = index;
			},
			async getMyRelease() {
				const db = uniCloud.database()
				const res = await db.collection('love,uni-id-users')
					.where({
						'user_id._id': this.$store.state.user.info._id
					})
					.field(
						'text,_id,time,school,statetext,img_url,user_id.mobile,user_id.avatar_file,user_id.nickname')
					.get()
				this.DataList = res.result.data
				console.log(res.result.data)
			}
		}
	}
</script>

<style scoped lang="scss">

</style>
