import { API } from "@/app/shared/services/API/API";
import {
  FindCartResponse,
  FindAllCartItemsResponse,
  AddItemToCartResponse,
  addItemToCartRequest,
} from "@repo/types/contracts";

async function findCart() {
  const response = await API.get<FindCartResponse>("/cart");

  return response.data;
}

async function findCartItems() {
  const response = await API.get<FindAllCartItemsResponse>("/cart/items");

  return response.data;
}

async function addItemToCart({ productId, quantity, productOptions }: addItemToCartRequest) {
  const response = await API.post<AddItemToCartResponse>("/cart/items", {
    productId,
    productOptions,
    quantity,
  });

  return response.data;
}

export const cartService = { findCart, findCartItems, addItemToCart };
