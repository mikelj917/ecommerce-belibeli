import { Router } from "express";
import { findAll } from "./controller.js";

const productRouter: Router = Router();

productRouter.get("/products", findAll);

export { productRouter };
