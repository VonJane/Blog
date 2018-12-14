import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/views/Blog'
import About from '@/views/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Blog',
      component: Blog
    },
    {
      path:'/About',
      name:'About',
      component:About
    },
    {
      path:'/Blog',
      name:'Blog',
      component:Blog
    }
  ]
})
