<template>
	<view>
		<uni-search-bar>
			
		</uni-search-bar>
	</view>
</template>

<script>
	export default {
		name:"my-search",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.my-search-container {
  display: flex;
  align-items: center;
  .my-search-bar {
    width: 100%;
  }
  .my-search-box {
    height: 36px;
    background-color: #ffffff;
    border-radius: 15px;
    border: 1px solid #c9c9c9;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 $uni-spacing-row-base;

    .icon {
      width: $uni-img-size-sm;
      height: $uni-img-size-sm;
    }

    .placeholder {
      font-size: $uni-font-size-sm;
      margin-left: $uni-spacing-row-sm;
      color: #454545;
    }
  }
}
</style>