import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/Home/Home.vue';
import Categories from '@views/Categories/Categories.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
