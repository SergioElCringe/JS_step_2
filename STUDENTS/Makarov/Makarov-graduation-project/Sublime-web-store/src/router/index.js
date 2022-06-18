import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/Home/Home.vue';
import Categories from '@views/Categories/Categories.vue';
import Order from '@views/Order/Order.vue';
import Product from '@views/Product/Product.vue';
import Contact from '@views/Contact/Contact.vue';

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
    path: '/categories/:category?',
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
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
