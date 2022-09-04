"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// ROTA ESTÁTICA
router.get("/", (req, res) => {
    res.send("Home do painel");
});
// ROTA ESTÁTICA
router.get("/noticias", (req, res) => {
    res.send("<h1>Esta é uma página de noticias do painel</h1>");
});
// ROTA DINÂMICA
router.get("/noticia/:slug", (req, res) => {
    let slug = req.params.slug;
    res.send(`<h1>Esta é a notícia ${slug}</h1>`);
});
// ROTA DINÂMICA
router.get("/voo/:origem-:destino", (req, res) => {
    let { origem, destino } = req.params;
    res.send(`<h1>Voce está comprando uma passagem de ${origem.toUpperCase()} até ${destino.toUpperCase()}</h1>`);
});
exports.default = router;
