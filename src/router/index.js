import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/myorders',
      name: 'MyOrders',
      meta: {
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/MyOrders.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
      path: '/resturant',
      name: 'Resturant',
      component: () => import(/* webpackChunkName: "register" */ '../views/Resturant.vue')
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import(/* webpackChunkName: "login" */ '../views/Category.vue')
    },
    {
      path: '/product_detail/:id',
      name: 'ProductDetail',
      meta: {
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "product_detail" */ '../views/ProductDetail.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      meta: {
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "checkout" */ '../views/Checkout.vue')
    },
]



const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
