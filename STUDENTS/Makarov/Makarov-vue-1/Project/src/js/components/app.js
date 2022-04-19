const menuURL = '/api/menu';

import NavMenu from './nav-menu.js';
import vueApp from './vueApp.js';

export default function(requestManager) {
  const menu = new NavMenu(menuURL, requestManager);
}