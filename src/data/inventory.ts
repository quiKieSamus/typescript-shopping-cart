import { makeFakeProducts } from "../helpers/create-fake-products.js";
import IInventory from "../interfaces/Inventory/Inventory.js";

export const fakeProducts:Array<IInventory> = makeFakeProducts(1000);