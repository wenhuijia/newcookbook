// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
document.getElementsByTagName("html")[0].style.fontSize = 100*window.screen.width / 750 + 'px';
import Vue from 'vue';
import App from './App';
import router from './router';
import Mint from 'mint-ui';
import jsData from './assets/js/json.js'
Vue.prototype.$jsData = jsData;
const axios = require('axios');
Vue.use(Mint);

Vue.config.productionTip = false;
Vue.prototype.$axios=axios;


import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
import './assets/css/public.css';//引入全局公共样式 
import 'mint-ui/lib/style.css';
import './assets/css/my-mint.css';//引入自定义样式复盖mint样式 
import './assets/js/json'; 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
