<template>
	<view class="hot-container">
	    <!-- logo -->
		<image class="logo" mode="aspectFit" src="@/static/images/logo.png" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" >
.hot-container {
  background-color: $uni-bg-color;
  .logo {
    width: 100%;
    height: 80px;
  }
}
</style>