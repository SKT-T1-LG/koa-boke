import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        auth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        auth: true
      },
      component: () => import('./views/Login.vue')
    },
    {
      path: '/Home',
      name: 'home',
      meta: {
        auth: true
      },
      component: Home
    },
    {
      path: '/Me',
      name: 'Me',
      meta: {
        auth: true
      },
      component: () => import('./views/Me.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
 if(to.path == '/Me'){
   if(!store.state.token){
     next({
       path:'/login',
       query:{redirect:to.path}
     })
   }else {
     next()
   }

 }else{
   next()
 }

})

export default router
