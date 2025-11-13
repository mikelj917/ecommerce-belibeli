import { Router } from "express";
import { authentication } from "@/shared/middlewares/authentication.js";
import { findAll } from "@/modules/product/controller.js";

const productRouter: Router = Router();

productRouter.get("/product", authentication, findAll);

export { productRouter };
