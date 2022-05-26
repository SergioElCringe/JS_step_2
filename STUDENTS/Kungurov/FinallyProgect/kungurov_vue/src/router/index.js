import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/Home.vue';
import Cart from '@views/Cart.vue';
import Product from '@views/productPages/product.vue'
import contact from '@views/Contact.vue'
import checkout from '@views/Checkout.vue'

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
{
    path: '/checkout',
    name: 'checkout',
    component: checkout,
    
},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
