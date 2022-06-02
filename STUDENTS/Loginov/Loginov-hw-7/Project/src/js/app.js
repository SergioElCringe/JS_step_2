import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import Menu from "./components/Menu";

export default function(api) {
  const cart = new Cart(api);
  const catalog = new Catalog(api, cart);
  const menu = new Menu();
  console.log(cart, catalog);
};
