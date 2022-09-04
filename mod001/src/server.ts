// IMPORTANDO O EXPRESS E AS ROTAS
import express, { Request, Response } from "express";
import mustache from "mustache-express";
import dotenv from "dotenv";
import path from "path";

import Rotas from "./routes/index";
import Painel from "./routes/painel";

// ESPECIFICAR O DIRETÓRIO DO ARQUIVO QUE EU TÔ EXECUTANDO
// console.log(path.join(__dirname, '../public'));

// CONFIGURANDO A VARIÁVEL DE AMBIENTE
dotenv.config();

// CRIANDO UMA INSTÂNCIA DO EXPRESS
const server = express();

// SETANDO O VIEW ENGINE
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

// HABILITANDO A FUNCIONALIDADE DE PEGAR DADOS VIA POST
server.use(express.urlencoded({ extended: true }));

// CHAMANDO TODAS AS ROTAS COM O MÉTODO USE DO EXPRESS
server.use("/", Rotas);
server.use("/painel", Painel);

// CASO NÃO ENCONTRE NENHUMA ROTA
server.use((req: Request, res: Response) => {
  res.status(404).send("Página não encontrada amigão, tenta outra rota!");
});

// TIPOS DE REQUISIÇÃO
// GET, POST, PUT, DELETE

server.listen(process.env.PORT);
