import Cart from "./general/Cart";
import Catalog from "./general/Catalog";
import topNav from "./general/topNav";

export default function (api) {
    const cart = new Cart(api);
    const catalog = new Catalog (api, cart);
    const menu = new topNav(api);
}