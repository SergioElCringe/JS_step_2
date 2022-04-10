const URL = 'https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/data.json';
const menuURL = 'https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/menu-data.json';

import NavMenu from './nav-menu.js';
import Catalog from './catalog.js';
import Cart from './cart.js';

export default function() {
  const catalog = new Catalog(URL, 'catalog');
  const cart = new Cart(URL, 'cart');
  const menu = new NavMenu(menuURL, cart._fetchData);
}