import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'
import city from '@/components/city/city'
import find from '@/components/find/find'
import other from '@/components/other/other'
import mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/other',
      name: 'other',
      component: other
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
