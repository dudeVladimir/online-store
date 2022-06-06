import { createRouter, createWebHistory } from 'vue-router'

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
    component: () => import('@/views/AccPage.vue'),
  },
  {
    path: '/:id',
    name: 'thing',
    component: () => import('@/views/ThingPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

export default router
