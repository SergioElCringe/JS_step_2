import { createStore } from 'vuex';
import Catalog from './modules/Catalog';
import Cart from './modules/Cart';
import Menu from './modules/Menu';
import Pagination from './modules/Pagination';

export default createStore({
	modules: {
		Catalog,
		Cart,
		Menu,
		Pagination,
	}
})
