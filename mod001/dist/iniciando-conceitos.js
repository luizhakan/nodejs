"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
// let n1: number = 10;
// let n2: number = 2;
// console.log(`Soma: ${Matematica.somar(n1, n2)}`);
// console.log(`Subtração: ${Matematica.subtrair(n1, n2)}`);
// console.log(`Multiplicação: ${Matematica.multiplicar(n1, n2)}`);
let ip = "127.0.0.1";
let email = "luizhakan2@protonmail.com";
validator_1.default.isEmail(email) ? console.log("Email válido") : console.log("Email inválido");
validator_1.default.isIP(ip) ? console.log("É um IP") : console.log("Não é um IP");
