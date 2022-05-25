import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/Home.vue';
import Cart from '@views/Cart.vue';
import Product from '@views/productPages/product.vue';
import contact from '@views/Contact.vue';

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
},
{
    path: '/Cart',
    name: 'Cart',
    component: Cart,
},
{
    path: '/catalog/:id',
    name: 'Product',
    component: Product,
},
{
    path: '/contact',
    name: 'contact',
    component: contact,
},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
