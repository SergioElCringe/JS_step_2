import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/Home/Home.vue';
import Categories from '@views/Categories/Categories.vue';
import Order from '@views/Order/Order.vue';
import Product from '@views/Product/Product.vue';

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
  },
  {
    path: '/cart',
    name: 'cart',
    component: Order
  },
  {
    path: '/catalog/:id',
    name: 'product',
    component: Product
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
