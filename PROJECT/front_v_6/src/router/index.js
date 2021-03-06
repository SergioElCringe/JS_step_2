import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@views/Main/Main.vue';
import Categories from '@views/Categories/Categories.vue';
import Cart from '@views/Cart/Cart.vue';
import Contact from '@views/Contact/Contact.vue';
import Product from '@views/Product/Product.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: MainPage,
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/checkOut',
        name: 'Сheck out',
        component: {},
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: {},
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/accessories',
        name: 'Accessories',
        component: {},
    },
    {
        path: '/offers',
        name: 'Offers',
        component: {},
    },
    {
        path: '/catalog/:id',
        name: 'Product',
        component: Product,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;