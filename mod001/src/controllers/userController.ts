import { Request, Response } from "express";

export const nome = (req: Request, res: Response) => {
  const nome: string = req.query.nome as string;
  const idade: string = req.query.idade as string;
  console.log("Nome: ", nome, "Idade: ", idade);

  res.render("pages/nome", { nome, idade });
};

export const idadeForm = (req: Request, res: Response) => {
  res.render("pages/idade");
};

export const idade = (req: Request, res: Response) => {
  let mostrarIdade: boolean = false;
  let idade: number = 0;

  if (req.body.anoNascimento) {
    const data: Date = new Date();
    const anoAtual: number = data.getFullYear();
    const anoNascimento: number = Number(req.body.anoNascimento);
    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
    console.log(anoAtual);
    console.log(idade);
  }

  res.render("pages/idade", { idade, mostrarIdade });
};
