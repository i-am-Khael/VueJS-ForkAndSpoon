import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/category/:category',
      name: 'category',
      component: () => import('../views/Category.vue')
    },
    {
      path: '/origin/:origin',
      name: 'origin',
      component: () => import('../views/Origin.vue')
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: () => import('../views/Recipe.vue')
    },
  ]
});

export default router;
