import { RequestHandler, Response } from "express";
import { productService } from "./service.js";
import { ProductListResponse } from "@repo/types/contracts";
import v from "@/modules/products/validators";
import { mapProductListToDto } from "@/modules/products/mappers/productList.js";

const findAll: RequestHandler = async (req, res: Response<ProductListResponse>) => {
  const { query } = v.findAll.getValidatedValues(req);
  const { categoryId, limit, offset } = query;

  const serviceResult = await productService.findAll({ categoryId, offset, limit });
  const { products, count } = mapProductListToDto(serviceResult.products, serviceResult.count);
  return res.json({ products, count });
};

export { findAll };
