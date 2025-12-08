<script>
	export default {
		onLaunch: function () {
			/* #ifdef H5 */
			console.log('当前处于 H5 编译平台');
			/* #endif */
			/* #ifndef H5 */
			console.log('当前处于非 H5 编译平台');
			/* #endif */
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	
	
	/**
	 * 这里是共用样式的定义位置
	 */
	
	.line-clamp-2 {
	  overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-box-orient: vertical;
	  -webkit-line-clamp: 2;
	}
	// 卡片视图
	.card {
	  border: 1px solid #f9f9f9;
	  border-radius: 5px;
	  margin: 12px;
	  padding: 12px;
	  box-shadow: 2px 2px 5px 1px rgba(143, 143, 143, 0.1);
	}
	
	// 单行不换行
	.nowrap {
	  white-space: nowrap;
	  text-overflow: ellipsis;
	  overflow: hidden;
	}
	
	// 头像
	.avatar {
	  width: 32px;
	  height: 32px;
	  border-radius: 50%;
	  border: 2px solid #e5e5e5;
	}
	
</style>
