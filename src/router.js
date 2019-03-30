import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DocList from '@/components/DocList'
import DocDetail from '@/components/DocDetail'
import DocCreate from '@/components/DocCreate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/doc',
      name: 'doc-list',
      component: DocList
    },
    {
      path: '/doc/detail/:id',
      name: 'doc-detail',
      component: DocDetail
    },
    {
      path: '/doc/create',
      name: 'doc-create',
      component: DocCreate
    }
  ]
})
