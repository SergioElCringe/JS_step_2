import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home';
import Category from '../views/Category';
import Accessories from '../views/Accessories';
import Offers from '../views/Offers';
import Contact from '../views/Contact';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/category',
		name: 'category',
		component: Category
	},
	{
		path: '/accessories',
		name: 'accessories',
		component: Accessories
	},
	{
		path: '/offers',
		name: 'offers',
		component: Offers
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact
	},

]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
