import IInventory from "../Inventory/Inventory"; 
export default interface IShoppingCart {
    Inventory: Array<IInventory>,
    owner: string,
    render(): boolean
}