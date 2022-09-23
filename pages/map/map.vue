<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
			uni.chooseLocation({
				success: function (res) {
					console.log('位置名称：' + res.name);
					console.log('详细地址666：' + res.address);
					console.log('纬度：' + res.latitude);
					console.log('经度：' + res.longitude);
				}
			});
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
