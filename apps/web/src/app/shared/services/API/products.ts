import API from "./API";
import { FindAllProductsResponse } from "@repo/types/contracts";

async function findAllProducts() {
  const response = await API.get<FindAllProductsResponse>("/products");
  return response.data;
}

export const productService = { findAllProducts };
