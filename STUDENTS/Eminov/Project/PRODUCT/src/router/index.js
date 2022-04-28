import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/Main/Main.vue';
import Categories from '../views/Categories/Categories.vue';
import Cart from '../views/Cart/Cart.vue';
import Contact from '../views/Contact/Contact.vue';

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
        component: Cartб
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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;