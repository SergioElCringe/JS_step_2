
import Cart from "./general/Cart";
import Catalog from "./general/Catalog";
import topNav from "./general/topNav";

export default function () {
    const cart = new Cart();
    const catalog = new Catalog (cart);
    const menu = new topNav();
}