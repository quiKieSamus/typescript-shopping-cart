import IShoppingCart from "../interfaces/Shopping-Cart/Shopping-Cart";
import IInventory from "../interfaces/Inventory/Inventory";
export default class ShoppingCart implements IShoppingCart {
    Inventory: Array<IInventory>;
    owner: string;
    private currencySymbol: string;
    constructor(owner: string, Inventory: Array<IInventory>, currencySymbol: string) {
        this.owner = owner;
        this.Inventory = Inventory;
        this.currencySymbol = currencySymbol;
    }
    render(container: HTMLElement) {
        this.Inventory.forEach((item) => {
            const title = item.product.name;
            const titleEl = document.createElement('H4');
            titleEl.textContent = title;

            const priceContainer = document.createElement("DIV");
            const currencySymbolEl = document.createElement("P");
            currencySymbolEl.textContent = this.currencySymbol;
            const price = item.product.price;
            const priceEl = document.createElement('P');
            priceEl.classList.add("price");
            priceEl.textContent = price.toString();
            priceContainer.appendChild(priceEl);
            priceContainer.appendChild(currencySymbolEl);
            priceContainer.classList.add("price-container");

            const ammountContainer = document.createElement("DIV");
            const ammount = item.elements;
            const ammountEl = document.createElement('P');
            ammountEl.classList.add("ammount");
            ammountEl.textContent = ammount.toString();
            ammountContainer.appendChild(ammountEl);

            const productContainer = document.createElement('DIV');
            productContainer.appendChild(titleEl);
            productContainer.appendChild(priceContainer);
            productContainer.appendChild(ammountContainer);
            productContainer.classList.add("product", "product-container");
            
            // appending to father container
            container.appendChild(productContainer);
        });
    }
    setCurrencySymbol(currencySymbol: string): string {
        this.currencySymbol = currencySymbol;
        return currencySymbol;
    }
}