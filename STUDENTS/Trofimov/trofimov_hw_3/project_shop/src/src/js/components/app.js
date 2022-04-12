import Cart from "./general/Cart";
import Catalog from "./general/Catalog";

export default function() {
    const cart = new Cart();
    const catalog = new Catalog(cart);
}