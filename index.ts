import ShoppingCart from "./src/models/Shopping-Cart.js";
import { fakeProducts } from "./src/data/inventory.js";
const container: HTMLElement = document.querySelector(".container") as HTMLElement;
const hero: HTMLDivElement = document.querySelector(".hero") as HTMLDivElement;
const cart = new ShoppingCart('Rubén', fakeProducts, "USD");
hero.textContent = `La tienda de ${cart.owner}`;
cart.render(container);

