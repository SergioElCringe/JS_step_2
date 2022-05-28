import { createStore } from 'vuex';
import Catalog from './modules/Catalog';
import Cart from './modules/Cart';

export default createStore({
	// state:{
	// Хранилище данных
	// },
	// getters:{
	// Для получения и изменения данных из state, но сам state не меняется
	// },
	// mutations:{
	// Может менять state
	// },
	// actions:{

	// },
	modules: {
		Catalog,
		Cart,
	}
})
