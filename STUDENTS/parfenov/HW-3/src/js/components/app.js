import Cart from "./Cart";
import Catalog from "./Catalog";
import Menu from "./Menu";

export default function () {
    const cart = new Cart();
    const catalog = new Catalog(cart);
    const menu = new Menu()
};
