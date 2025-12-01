

// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 导入过滤器
import * as filters from './filters';
// 通用样式
import './styles/global.scss';
// 文章详情样式
import './styles/article-detail.scss';
// 注册过滤器
Object.keys(filters).forEach((key) => {
	console.log(key, 'key')
  Vue.filter(key, filters[key]);
});

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif