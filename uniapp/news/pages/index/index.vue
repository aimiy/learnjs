<template>
	<view class="content">
		<child :title="'xasxasxsdx'"></child>
		<view class="uni-list">
			<view @tap="openinfo(item)" class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.author_avatar"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import child from "../../components/child.vue";
	
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					console.log(res)
					this.list = res.data;
				},
				fail: () => {},
				complete: () => {}
			});

		},
		methods: {
			openinfo(e){
				uni.navigateTo({
					url: '../info/info?newsid=' + e.post_id
				});
			}

		},
		components:{
			child
		}
	}
</script>

<style>
	.uni-media-list{
		font-size: 12px;
		height: 50px;
		padding: 10px 5px;
	}
	.uni-media-list-logo{
		display: inline-block;
		width: 40px;
		height: 40px;
		margin: 5px;
	}
	.uni-media-list-body{
		margin: 5px;
		display: inline-block;
		vertical-align: top;
		width: calc(100% - 60px);
		height: 50px;
		line-height: 14px;
	}
</style>
