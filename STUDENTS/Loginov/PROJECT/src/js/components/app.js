import Cart from "./Cart";
import Catalog from "./Catalog";
import Navigation from "./nav";

export default function() {
  const cart = new Cart();
  const catalog = new Catalog(cart); 
  const nav = new Navigation();
}