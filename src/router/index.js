import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'
import city from '@/components/city/city'
import find from '@/components/find/find'
import other from '@/components/other/other'
import mine from '@/components/mine/mine'
import cookClass from '@/components/cookClass/cookClass'
import cookClass_2 from '@/components/cookClass/cookClass_2'
import cookClass_3 from '@/components/cookClass/cookClass_3'
import cookDetails from '@/components/cookClass/cookDetails'
import login from '@/components/login/login'
import searchPage from '@/components/search/searchPage'
import collection from '@/components/collection/collection'

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
      path: '/cookClass',
      name: 'cookClass',
      component: cookClass
    },
    {
      path: '/cookClass_2',
      name: 'cookClass_2',
      component: cookClass_2
    },
    {
      path: '/cookClass_3',
      name: 'cookClass_3',
      component: cookClass_3
    },
    {
      path: '/cookDetails',
      name: 'cookDetails',
      component: cookDetails
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
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      component: searchPage
    },
    {
      path: '/collection',
      name: 'collection',
      component: collection
    }
  ]
})
