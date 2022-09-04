"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idade = exports.idadeForm = exports.nome = void 0;
const nome = (req, res) => {
    const nome = req.query.nome;
    const idade = req.query.idade;
    console.log("Nome: ", nome, "Idade: ", idade);
    res.render("pages/nome", { nome, idade });
};
exports.nome = nome;
const idadeForm = (req, res) => {
    res.render("pages/idade");
};
exports.idadeForm = idadeForm;
const idade = (req, res) => {
    let mostrarIdade = false;
    let idade = 0;
    if (req.body.anoNascimento) {
        const data = new Date();
        const anoAtual = data.getFullYear();
        const anoNascimento = Number(req.body.anoNascimento);
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
        console.log(anoAtual);
        console.log(idade);
    }
    res.render("pages/idade", { idade, mostrarIdade });
};
exports.idade = idade;
