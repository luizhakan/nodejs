import { Request, Response } from "express";
import { Product } from "../models/Product";

export const home = (req: Request, res: Response) => {
  let list = Product.getAll();
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
