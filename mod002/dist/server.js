"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
// PRÉ CONFIGURAÇÕES DO AMBIENTE DE DESENVOLVIMENTO
const server = (0, express_1.default)();
dotenv_1.default.config();
server.set("view engine", "mustache");
server.set("views", path_1.default.join(__dirname, "views"));
server.engine("mustache", (0, mustache_express_1.default)());
server.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
// ROTAS
server.use(index_1.default);
// CASO DÊ 404
server.use((req, res) => {
    res.status(404).render("pages/404");
});
// ONDE O SERVIDOR VAI ESCUTAR
server.listen(process.env.PORT);
