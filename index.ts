import ShoppingCart from "./src/models/Shopping-Cart";
import { fakeProducts } from "./src/data/inventory";
const container: HTMLElement = document.querySelector(".container") as HTMLElement;
const cart = new ShoppingCart('Rubén', fakeProducts);
cart.render(container);
