<template>
	<view class="hot-container">
	    <!-- logo -->
		<image class="logo" mode="aspectFit" src="@/static/images/logo.png" />
		<view class="search-box">
			<!-- 搜索模块 -->
			<my-search placeholderText="uni-app 自定义组件" />
		</view>
		<view class="tab-sticky">
			<!-- 搜索模块 -->
			<my-tabs 
				:tabData="tabData"
				:config="{ textColor: '#333333' }"
				:defaultIndex="currentIndex"
			/>
		</view>
	</view>
</template>

<script>
	import {getHotTabs} from '@/api/hot';
	
	export default {
		data() {
			return {
				// tabs 数据源
				tabData: [],
				// 当前的切换 index
				currentIndex: 0,
			};
		},
		// 在实例创建完成后被立即调用
		created() {
			this.getHotTabs();
		},
		// 定义方法
		methods: {
			/**
			 * 获取热搜标题数据
			 */
			async getHotTabs() {
				// uniapp 支持 async await
				const { data: res } = await getHotTabs();
				this.tabData = res.list;
			},
			/**
			 * tab item 的点击事件
			 */
			tabClick(index) {
				this.currentIndex = index;
				// 获取列表数据
				// this.getHotListFromTab();
			},
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