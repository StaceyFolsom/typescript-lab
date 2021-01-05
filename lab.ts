// TALLEST MOUNTAIN

interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [ 
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
];

function findNameOfTallestMountain(array : Mountain[]) : string {
    let tallestMountainName : string = "";
    let tallest: number = 0;
    for (const mtn of array) {
        if (mtn.height > tallest) {
            tallest = mtn.height;
            tallestMountainName = mtn.name;
        }
    }    
    return tallestMountainName;
}
   
let tallestMountainName : string = findNameOfTallestMountain(mountains);
console.log(tallestMountainName);


// PRODUCTS

interface Product {
    name: string;
    price: number;
}

const products: Product[] = [ 
    {name: 'Table', price: 799},
    {name: 'Chair', price: 149},
    {name: 'Rug', price: 469}
];

function calcAverageProductPrice(array : Product[]) : number {
    let avgPrice : number = 0;
    let sum = 0;
    for (const product of array) {
        sum += product.price;
    }
    avgPrice = sum / array.length;
    return avgPrice;
}

let avgPrice : number = calcAverageProductPrice(products);
console.log(avgPrice);


// INVENTORY

interface InventoryItem extends Product{
    quantity: number;
}

const inventory: InventoryItem[] = [ 
    {name: 'motor', price: 10.00, quantity: 10},
    {name: 'sensor', price: 12.50, quantity: 4},
    {name: 'LED', price: 1.00, quantity: 20}
];

function calcInventoryValue(array : InventoryItem[]) : number {
    let total = 0;

    array.forEach(function (arr) {
        total += arr.price * arr.quantity;
        });
    return total;
}

let total : number = calcInventoryValue(inventory);
console.log(total);