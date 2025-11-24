import type { CartItemDto } from "@repo/types/contracts";

export type FullCartDto = {
  id: number;
  items: CartItemDto[];
};

export type emptyFullCartDto = {
  cart: {
    id: null;
    items: [];
  };
  count: number;
  subtotal: number;
  total: number;
  discount: number;
};

export type emptyCartItemsDto = {
  items: [];
  count: number;
};
