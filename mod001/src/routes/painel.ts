import { Router, Request, Response } from "express";

const router = Router();

// ROTA ESTÁTICA
router.get("/", (req: Request, res: Response) => {
    res.send("Home do painel");
  });

// ROTA ESTÁTICA
router.get("/noticias", (req: Request, res: Response) => {
    res.send("<h1>Esta é uma página de noticias do painel</h1>");
})

// ROTA DINÂMICA
router.get("/noticia/:slug", (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    res.send(`<h1>Esta é a notícia ${slug}</h1>`);
})

// ROTA DINÂMICA
router.get("/voo/:origem-:destino", (req: Request, res: Response) => {
    let {origem, destino} = req.params;
    res.send(`<h1>Voce está comprando uma passagem de ${origem.toUpperCase()} até ${destino.toUpperCase()}</h1>`);
})

export default router;