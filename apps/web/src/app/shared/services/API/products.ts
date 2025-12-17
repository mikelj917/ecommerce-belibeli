import { FindAllProductsResponse } from "@repo/types/contracts";

import API from "./API";

const findAllProducts = async () => {
  const response = await API.get<FindAllProductsResponse>("/products");
  return response.data;
};

export const productService = { findAllProducts };
