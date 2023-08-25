import IShoppingCart from "../interfaces/Shopping-Cart/Shopping-Cart";
import IInventory from "../interfaces/Inventory/Inventory";
export default class ShoppingCart implements IShoppingCart {
    Inventory: Array<IInventory>;
    owner: string;
    constructor(owner: string, Inventory: Array<IInventory>) {
        this.owner = owner;
        this.Inventory = Inventory;
    }
    render(container: HTMLElement) {
        this.Inventory.forEach((item) => {
            const title = item.product.name;
            const titleEl = document.createElement('H4');
            titleEl.textContent = title;
            const price = item.product.price;
            const priceEl = document.createElement('P');
            priceEl.textContent = price.toString();
            const ammount = item.elements;
            const ammountEl = document.createElement('P');
            ammountEl.textContent = ammount.toString();
            const productContainer = document.createElement('DIV');
            productContainer.appendChild(titleEl);
            productContainer.appendChild(priceEl);
            productContainer.appendChild(ammountEl);
            productContainer.classList.add("product", "product-container");
            container.appendChild(productContainer);
        });
    }
}