import Cart from "./components/Cart";
import Catalog from "./components/Catalog";

export default function () {
	const cart = new Cart();
	const catalog = new Catalog(cart);
};
