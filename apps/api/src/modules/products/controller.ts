import { RequestHandler, Response } from "express";
import { productService } from "./service.js";
import { FindAllProductsResponse } from "@repo/types/contracts";
import v from "@/modules/products/validators";

const findAll: RequestHandler = async (req, res: Response<FindAllProductsResponse>) => {
  const { query } = v.findAll.getValidatedValues(req);
  const { categoryId, limit, offset } = query;

  const { products, count } = await productService.findAll({ categoryId, offset, limit });
  return res.json({ products, count });
};

export { findAll };
