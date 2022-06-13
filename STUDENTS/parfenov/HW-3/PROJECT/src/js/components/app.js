import Cart from "./Cart";
import Catalog from "./Catalog";
import Menu from "./Menu";

export default function (api) {
    const menu = new Menu(api)
    const cart = new Cart(api);
    const catalog = new Catalog(api, cart);

    console.log(cart, catalog, menu)
};
