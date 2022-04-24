import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import Menu from "./components/Menu";
import ShoppingCart from "./components/ShoppingCart";

export default function(api) {
    const cart = new Cart(api);
    const catalog = new Catalog(cart, api);
    const menu = new Menu(api);
    const shoppingCart = new ShoppingCart(api);
};