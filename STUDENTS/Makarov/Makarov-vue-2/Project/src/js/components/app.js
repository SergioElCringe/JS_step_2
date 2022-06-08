const menuURL = '/api/menu';

import NavMenu from './nav-menu.js';

export default function(requestManager) {
  const menu = new NavMenu(menuURL, requestManager);
}