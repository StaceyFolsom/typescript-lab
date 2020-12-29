"use strict";
// TALLEST MOUNTAIN
// class Mountain {
//     public name: string; public height: number; 
//     constructor(name: string, height: number){
//         this.name = name;
//         this.height = height;
//     }
// }
const mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
function findNameOfTallestMountain(array) {
    let tallest = null;
    array.forEach(function (arr) {
        if (tallest === null || tallest.height < arr.height) {
            tallest = arr;
        }
    });
    return tallest.name;
}
console.log(findNameOfTallestMountain(mountains));
const products = [
    { name: 'Table', price: 799 },
    { name: 'Chair', price: 149 },
    { name: 'Rug', price: 469 }
];
function calcAverageProductPrice(array) {
    let sum = 0;
    for (const product of array) {
        sum += product.price;
    }
    let avg = sum / array.length;
    return avg;
}
console.log(calcAverageProductPrice(products));
const inventory = [
    { 'product.name': 'motor', 'product.price': 10.00, quantity: 10 },
    { 'product.name': 'sensor', 'product.price': 12.50, quantity: 4 },
    { 'product.name': 'LED', 'product.price': 1.00, quantity: 20 }
];
function calcInventoryValue(array) {
    let total = 0;
    array.forEach(function (arr) {
        total += arr["product.price"] * arr.quantity;
    });
    return total;
}
console.log(calcInventoryValue(inventory));
