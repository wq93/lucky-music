// uniapp 已默认安装，不需要重新下载
import Vuex from 'vuex';
// 导入 search.js 暴露的对象
import search from './modules/search';
import user from './modules/user';


// 3. 创建 store 实例
const store = new Vuex.Store({
  modules: {
    search,
		user,
  }
});
export default store;
