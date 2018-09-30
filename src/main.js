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

import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts 

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
    addCollectCookList:[],
    addHistoryCookList:[],
    historyData:[]//最终历史数据

  },
  mutations: {//第三步 调用方法
    addCollectCook(state, collectCook) {//第一个值是仓库里面的值，第二个值是下面传入的值
      state.addCollectCookList.push(collectCook);
    },
    addHistoryCook(state,cookHistory){//第一个值是仓库里面的值，第二个值是下面传入的值
      // state.addHistoryCookList.push(cookHistory);
      if(state.addHistoryCookList.length!=0){
        var flag = true;
        state.addHistoryCookList.forEach((v,i)=>{
          if(v.id!=cookHistory.id&&flag==true){
            state.addHistoryCookList.unshift(cookHistory);
            flag = false;
          };
        });
       
      }else{
        state.addHistoryCookList.push(cookHistory);
      }
      //去重
      var newArr = [];
      var newArr2 =[];
      state.addHistoryCookList.forEach((v,i)=>{
        if(newArr.indexOf(v.id)==-1){
          newArr.push(v.id)
          newArr2.push({id:v.id,time:v.time})
        }
      })
      console.log("newArr",newArr)
      console.log("newArr2",newArr2)
      state.historyData = newArr2;
    }
  },
  getters: { //第四步  把仓库里面的值暴露为全局
    gitCollectCook(state) { //其他页面接收方法 this.$store.getters.gitCollectCook;
      return state;
    },
    gitHistoryCook(state) { //其他页面接收方法 this.$store.getters.gitHistoryCook;
      return state;
    },
  }, 
  actions: { //第二步 异步
    collectCookFun(context, collectCook) { // 接收来自cookDetails.vue传过来的值  
      context.commit('addCollectCook', collectCook); //驱动 mutations 里面的方法
    },
    saveHistoryFun(context, cookHistory) { // 接收来自cookDetails.vue传过来的值  
      context.commit('addHistoryCook', cookHistory); //驱动 mutations 里面的方法
    },
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
