import IShoppingCart from "../interfaces/Shopping-Cart/Shopping-Cart";
import IInventory from "../interfaces/Inventory/Inventory";
export default class ShoppingCart implements IShoppingCart {
    Inventory: Array<IInventory>;
    owner: string;
    constructor(owner: string, Inventory: Array<IInventory>) {
        this.owner = owner;
        this.Inventory = Inventory;
    }
}