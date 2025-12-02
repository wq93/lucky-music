// #ifndef VUE3
import Vue from 'vue'
import App from './App'

import Vuex from 'vuex'; 

import store from './store'; 

import {hotNumber, relativeTime} from './filters';

Vue.config.productionTip = false

App.mpType = 'app'

// [FIX] 3. 注册 Vuex 插件，使其能够将 $store 注入到所有组件中
// 这一步是让所有组件都能通过 this.$store 访问到 store 的关键。
// 只需要调用一次。
Vue.use(Vuex);

// 注册过滤器
 Vue.filter('hotNumber', hotNumber);
 Vue.filter('relativeTime', relativeTime);

const app = new Vue({
    ...App,
    store, 
})

app.$mount()
// #endif



// #ifdef VUE3
import { createSSRApp } from 'vue';
import App from './App.vue';

import store from './store';

import {hotNumber, relativeTime} from './filters';
// 通用样式
// import './styles/global.scss';
// 文章详情样式
// import './styles/article-detail.scss';

// VUE3 模式的 createApp 函数
export function createApp() {
    const app = createSSRApp(App)
    
    app.use(store); 
    
    app.config.globalProperties.hotNumber = hotNumber;
		app.config.globalProperties.relativeTime = relativeTime;
    return {
        app
    }
}
// #endif