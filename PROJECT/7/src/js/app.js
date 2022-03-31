import Cart from "./components/Cart";
import Catalog from "./components/Catalog";

export default function(api) {
  const cart = new Cart(api);
  const catalog = new Catalog(api, cart);

  console.log(cart, catalog);
};
