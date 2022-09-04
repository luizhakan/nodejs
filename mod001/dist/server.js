"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTANDO O EXPRESS E AS ROTAS
const express_1 = __importDefault(require("express"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const painel_1 = __importDefault(require("./routes/painel"));
// ESPECIFICAR O DIRETÓRIO DO ARQUIVO QUE EU TÔ EXECUTANDO
// console.log(path.join(__dirname, '../public'));
// CONFIGURANDO A VARIÁVEL DE AMBIENTE
dotenv_1.default.config();
// CRIANDO UMA INSTÂNCIA DO EXPRESS
const server = (0, express_1.default)();
// SETANDO O VIEW ENGINE
server.set("view engine", "mustache");
server.set("views", path_1.default.join(__dirname, "views"));
server.engine("mustache", (0, mustache_express_1.default)());
// HABILITANDO A FUNCIONALIDADE DE PEGAR DADOS VIA POST
server.use(express_1.default.urlencoded({ extended: true }));
// CHAMANDO TODAS AS ROTAS COM O MÉTODO USE DO EXPRESS
server.use("/", index_1.default);
server.use("/painel", painel_1.default);
// CASO NÃO ENCONTRE NENHUMA ROTA
server.use((req, res) => {
    res.status(404).send("Página não encontrada amigão, tenta outra rota!");
});
// TIPOS DE REQUISIÇÃO
// GET, POST, PUT, DELETE
server.listen(process.env.PORT);
