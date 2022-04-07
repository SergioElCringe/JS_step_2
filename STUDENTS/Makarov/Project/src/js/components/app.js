const URL = 'https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/data.json';
const imgURLTemplate = 'https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/';
import NavMenu from './nav-menu.js';
import Catalog from './catalog.js';
import Cart from './cart.js';

export default function() {
  const menu = new NavMenu();
  const catalog = new Catalog(URL, imgURLTemplate, 'catalog');
  const cart = new Cart(URL, imgURLTemplate, 'cart');
}