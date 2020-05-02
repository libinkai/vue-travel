import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Details from '@/pages/details/Details'
import LazyTest from '@/pages/test/LazyTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      // 动态路由
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/lazy',
      name: 'Lazy',
      component: LazyTest
    }
  ],
  scrollBehavior (to, from, savePosition) {
    return {x: 0, y: 0}
  }
})
