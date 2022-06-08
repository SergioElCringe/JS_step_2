import { createRouter, createWebHistory } from 'vue-router'
import Home from '@views/Home/Home';
import Category from '@views/Category/Category';
import Accessories from '@views/Accessories';
import Offers from '@views/Offers';
import Contact from '@views/Contact/Contact';
import Cart from '@views/Cart';
import Product from '@views/Product/Product';
import CheckOut from '@views/CheckOut/CheckOut';


const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/category',
		name: 'category',
		component: Category,
	},
	{
		path: '/accessories',
		name: 'accessories',
		component: Accessories,
	},
	{
		path: '/offers',
		name: 'offers',
		component: Offers,
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
	},
	{
		path: '/cart',
		name: 'Cart',
		component: Cart,
	},
	{
		path: '/catalog/:id',
		name: 'Product',
		component: Product,
	},
	{
		path: '/check-out',
		name: 'Check out',
		component: CheckOut,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
