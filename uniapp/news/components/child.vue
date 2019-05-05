<template>
	<view>
		{{title}}
	</view>
</template>

<script>
	export default {
		props:["title"],
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad(){
			console.log(this.title)
		}
	}
</script>

<style>

</style>
