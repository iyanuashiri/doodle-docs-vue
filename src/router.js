import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DocList from '@/components/DocList'
import DocDetail from '@/components/DocDetail'
import DocCreate from '@/components/DocCreate'
import DocUpdate from '@/components/DocUpdate'
import SignIn from '@/components/Signin'
import SignUp from '@/components/Signup'
import DocSharedList from '@/components/DocSharedList'

Vue.use(Router)

const router = new Router({
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
      path: '/doc/create',
      name: 'doc-create',
      component: DocCreate
    },
    {
      path: '/doc/detail/:id',
      name: 'doc-detail',
      component: DocDetail
    },
    {
      path: '/doc/update/:id',
      name: 'doc-update',
      component: DocUpdate
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/shared_docs',
      name: 'shared-docs',
      component: DocSharedList
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('authToken') !== null || to.path === '/signin') {
    next()
  } else {
    next('/signup')
  }
})

export default router
