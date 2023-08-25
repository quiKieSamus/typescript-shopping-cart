import IInventory from "../interfaces/Inventory/Inventory"
import IProduct from "../interfaces/Product/Product"
export const makeFakeProducts = (numberOfItems: number): Array<IInventory> => {
    let returningArray: Array<IInventory> = [];
    for (let i = 0; i < numberOfItems; i++) {
        const randomPrice = Math.round(Math.random()*10);
        const fakeID = makeFakeID();
        const fakeName = makeFakeProductName();
        const fakeProduct: IProduct = {
            name: fakeName,
            id: fakeID,
            price: randomPrice
        };
        returningArray.push({product: fakeProduct, elements: numberOfItems});
    }
    return returningArray;
}

export const makeFakeID = () :string => {
    const fakeLetters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
    let fakeID = "";
    for (let i = 0; i < 8; i++) {
        fakeID = fakeID.concat(fakeLetters[Math.round(Math.random()*(fakeLetters.length-1))]);
    }
    return fakeID;
}

export const makeFakeProductName = () : string => {
    const fakeNames = ["Harina", "Jabón", "Lampazo", "Pasta"];
    const randomNumber = Math.round(Math.random()*1000).toString();
    const randomProduct = fakeNames[Math.round(Math.random()*(fakeNames.length-1))];
    return `${randomProduct} ${randomNumber}`;
}