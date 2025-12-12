import { FindAllProductsResponse } from "@repo/types/contracts";

import API from "./API";

async function findAllProducts() {
  const response = await API.get<FindAllProductsResponse>("/products");
  return response.data;
}

export const productService = { findAllProducts };
