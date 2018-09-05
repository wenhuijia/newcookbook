// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
document.getElementsByTagName("html")[0].style.fontSize = 100*window.screen.width / 750 + 'px';
import Vue from 'vue';
import App from './App';
import router from './router';
import Mint from 'mint-ui';
const axios = require('axios');
Vue.use(Mint);

Vue.config.productionTip = false;

import './assets/css/public.css';//引入全局公共样式 
import 'mint-ui/lib/style.css';
import './assets/css/my-mint.css';//引入自定义样式复盖mint样式 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})