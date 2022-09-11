import { Request, Response } from "express";

import { Pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
  const query: string = req.query.q as string;
  const list = Pet.getFromName(query);

  if (!query) {
    res.redirect("/");
    return;
  }

  res.render("pages/page", {
    menu: createMenuObject(""),
    list,
    query,
  });
};
