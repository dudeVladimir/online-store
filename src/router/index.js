import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/CategoryPage.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/CartPage.vue'),
  },
  {
    path: '/acc',
    name: 'acc',
    meta: { auth: true },
    component: () => import('@/views/AccPage.vue'),
  },
  {
    path: '/:id',
    name: 'thing',
    component: () => import('@/views/ThingPage.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/AuthPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth

  if (requireAuth && store.getters['auth/isAuthenticated']) {
    next()
  } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth')
  } else {
    next()
  }
})

export default router
