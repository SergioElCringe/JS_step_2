import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

export default function () {
    const cart = new Cart();
    const catalog = new Catalog(cart);
    const menu = new Menu();
    const categories = new Categories(cart);
};