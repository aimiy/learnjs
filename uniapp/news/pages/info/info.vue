<template>
	<view class="content">
		<view class="title">
			{{title}}
		</view>
		<view class="art-content">
			<rich-text :nodes="content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"",
				content:""
			}
		},
		onLoad(e) {
			uni.request({
				url:"https://unidemo.dcloud.net.cn/api/news/36kr/" + e.newsid,
				data:{},
				success:res => {
					console.log(res);
					this.title = res.data.title;
					this.content = res.data.content;
				}
			});
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{
		padding: 10upx;
	}

</style>
