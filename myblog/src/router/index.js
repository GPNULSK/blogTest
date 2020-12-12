import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/Home'
import headers from '../components/Headers'
import list from '../components/List'
import article from '../components/Article'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home,
      children:[
        {
          path:'/',
          component: list
        },
        {
          path: '/list',
          component: list
        },
        {
          path:'/article',
          component: article
        }
      ]
    },
    {
      path: '/header',
      component: headers
    }
  ]
})
