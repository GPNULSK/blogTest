import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/Home'
import headers from '../components/Headers'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/header',
      component: headers
    }
  ]
})
