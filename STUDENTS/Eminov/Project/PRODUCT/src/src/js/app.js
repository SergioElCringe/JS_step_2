import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import Description from "./components/Description";
import ShoppingCart from "./components/ShoppingCart";
import Contact from "./components/Contact";
import ShippingMethods from "./components/ShippingMethods";

export default function(api) {
    const cart = new Cart(api);
    const catalog = new Catalog(cart, api);
    const menu = new Menu(api);
    const description = new Description(cart, api);
    const categories = new Categories(cart, api);
    const shipping = new ShippingMethods(api);
    const shoppingCart = new ShoppingCart(shipping, api);
    const contact = new Contact(api);
};