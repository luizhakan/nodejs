"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const data = [
    { name: "Notebook", price: 1000 },
    { name: "Smartphone", price: 500 },
    { name: "Tablet", price: 700 },
    { name: "Smartwatch", price: 300 },
    { name: "Headphone", price: 200 },
];
exports.Product = {
    getAll: () => {
        return data;
    },
    getFromPriceAfter: (price) => {
        return data.filter((item) => {
            item.price >= price;
        });
    },
};
