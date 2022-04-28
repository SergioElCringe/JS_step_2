import { createStore } from 'vuex';
import Catalog from './modules/catalog';
import Cart from './modules/cart';
import DescriptionProduct from './modules/descriptionProduct';

export default createStore({
    modules: { Catalog, Cart, DescriptionProduct },
});