"use strict";
// TALLEST MOUNTAIN
const mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
function findNameOfTallestMountain(array) {
    let findNameOfTallestMountain = "";
    let tallest = 0;
    for (const mtn of array) {
        if (mtn.height > tallest) {
            tallest = mtn.height;
            findNameOfTallestMountain = mtn.name;
        }
    }
    return findNameOfTallestMountain;
}
let tallest = findNameOfTallestMountain(mountains);
console.log(tallest);
const products = [
    { name: 'Table', price: 799 },
    { name: 'Chair', price: 149 },
    { name: 'Rug', price: 469 }
];
function calcAverageProductPrice(array) {
    let avgPrice = 0;
    let sum = 0;
    for (const product of array) {
        sum += product.price;
    }
    avgPrice = sum / array.length;
    return avgPrice;
}
let avgPrice = calcAverageProductPrice(products);
console.log(avgPrice);
const inventory = [
    { name: 'motor', price: 10.00, quantity: 10 },
    { name: 'sensor', price: 12.50, quantity: 4 },
    { name: 'LED', price: 1.00, quantity: 20 }
];
function calcInventoryValue(array) {
    let total = 0;
    array.forEach(function (arr) {
        total += arr.price * arr.quantity;
    });
    return total;
}
let total = calcInventoryValue(inventory);
console.log(total);
