import express, { Express } from "express";
import { productRouter } from "./modules/product/routes.js";

const app: Express = express();

app.use(express.json());

app.use(productRouter);

export default app;
