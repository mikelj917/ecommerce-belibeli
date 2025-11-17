import { API } from "@/app/shared/services/API/API";
import type { CartSummary } from "@/app/shared/types/Cart";
import type { CreateCartParams } from "@/app/shared/types/Params";
import type { CartItem } from "@prisma/client";

async function findCart() {
  const response = await API.get<CartSummary>("/cart");

  return response.data;
}

async function findCartItems() {
  const response = await API.get<CartSummary>("/cart/items");

  return response.data;
}

async function createCart(params: CreateCartParams) {
  const { productId, quantity, productOptions } = params;

  const response = await API.post<CartItem>("/cart/items", { productId, productOptions, quantity });

  return response.data;
}

export const cartService = { findCart, findCartItems, createCart };
