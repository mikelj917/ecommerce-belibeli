import { productService } from "./service.js";
import { RequestHandler } from "express";
import { handleError } from "@/shared/utils/handleError.js";
import { handleResponse } from "@/shared/utils/handleResponse.js";
import { toValidPositiveNumber } from "@repo/utils";

const findAll: RequestHandler = async (req, res) => {
  try {
    const categoryId = toValidPositiveNumber(req.query.categoryId);
    const offSet = toValidPositiveNumber(req.query.offset);
    const limit = toValidPositiveNumber(req.query.limit);

    const { products, count } = await productService.get({ categoryId, offSet, limit });
    return res.json({ products, count });
  } catch (error) {
    const dataResponse = handleError(error);
    return handleResponse(res, dataResponse);
  }
};

export { findAll };
