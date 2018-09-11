// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
document.getElementsByTagName("html")[0].style.fontSize = 100*window.screen.width / 750 + 'px';
import Vue from 'vue';
import App from './App';
import router from './router';
import Mint from 'mint-ui';
import jsData from './assets/js/json.js';
import Vuex from 'vuex';
Vue.prototype.$jsData = jsData;
const axios = require('axios');
Vue.use(Mint);

Vue.config.productionTip = false;
Vue.prototype.$axios=axios;


import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);
Vue.use(Vuex);
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
import './assets/css/public.css';//引入全局公共样式 
import 'mint-ui/lib/style.css';
import './assets/css/my-mint.css';//引入自定义样式复盖mint样式 
import './assets/js/json'; 

//路由元信息
router.beforeEach((to, from, next) => {
  // console.log("to",to.path)
  // console.log("from",from)
  var isLogin = sessionStorage.getItem("userName");
  if(!isLogin&&to.path!="/login"){ 
    next("/login");
  }else{
    next();
  }
});
//状态管理 仅做变量全局处理，因为刷新后数据会丢失
// npm install vuex --save
const store = new Vuex.Store({ //记得要把store(仓库意思）) 注入到最下面的 根实例中去
  state: {
    addCollectCookList:[]
  },
  mutations: {//第三步 调用方法
    addCollectCook(state, collectCook) {//第一个值是仓库里面的值，第二个值是下面传入的值
      state.addCollectCookList.push(collectCook);
    }
  },
  getters: { //第四步  把值暴露为全局
    gitCollectCook(state) { //其他页面接收方法 this.$store.getters.gitCollectCook;
      return state;
    }
  }, 
  actions: { //异步
    collectCookFun(context, collectCook) { //第二步 接收来自cookDetails.vue传过来的值  
      context.commit('addCollectCook', collectCook); //驱动 mutations 里面的方法
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
