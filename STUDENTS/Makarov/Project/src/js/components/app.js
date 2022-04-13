const URL = '/api/lists';
const menuURL = '/api/menu';

import NavMenu from './nav-menu.js';
import Catalog from './catalog.js';
import Cart from './cart.js';

export default function() {
  const cart = new Cart(URL, 'cart');
  const catalog = new Catalog(URL, 'catalog', cart);
  const menu = new NavMenu(menuURL, cart._fetchData);
}