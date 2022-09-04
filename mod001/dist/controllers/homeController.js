"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = void 0;
const Product_1 = require("../models/Product");
const home = (req, res) => {
    let list = Product_1.Product.getAll();
    // PEGAR OS PRODUTOS DO BANCO DE DADOS
    // ORGANIZAR AS INFORMAÇÕES DESSES PRODUTOS
    // ENVIA PARA O TEMPLATE ENGINE
    const totalPrice = list.reduce((total, product) => total + product.price, 0);
    res.render("pages/home", {
        user: { name: "Luiz Hakan", age: 20, showWelcome: true },
        products: list,
        totalPrice,
        frasesDoDia: [
        /*"A vida é bela", "A vida é boa", "A vida é maravilhosa"*/
        ],
    });
};
exports.home = home;
