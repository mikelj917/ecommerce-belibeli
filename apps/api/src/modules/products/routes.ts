import { Router } from "express";
import { findAll } from "./controller.js";
import v from "@/modules/products/validators/index.js";

const productRouter: Router = Router();

productRouter.get("/products", v.findAll.middleware, findAll);

export { productRouter };
