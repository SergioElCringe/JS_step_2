import { createStore } from 'vuex';
import Catalog from './modules/catalog';
import Cart from './modules/cart';
import DescriptionProduct from './modules/descriptionProduct';
import Menu from './modules/menu';
import ShippingMethods from './modules/shippingMethods';

export default createStore({
    modules: { 
        Catalog, 
        Cart, 
        DescriptionProduct, 
        Menu, 
        ShippingMethods 
    },
});