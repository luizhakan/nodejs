import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import rotasPrincipais from "./routes/index";

// PRÉ CONFIGURAÇÕES DO AMBIENTE DE DESENVOLVIMENTO
const server = express();
dotenv.config();
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());
server.use(express.static(path.join(__dirname, "../public")));

// ROTAS
server.use(rotasPrincipais);

// CASO DÊ 404
server.use((req: Request, res: Response) => {
  res.status(404).send("Não encontrada amigão, tenta outra rota!");
});

// ONDE O SERVIDOR VAI ESCUTAR
server.listen(process.env.PORT);
