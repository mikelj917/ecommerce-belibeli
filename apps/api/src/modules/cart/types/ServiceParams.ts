import {
  addItemToCartRequest,
  UpdateCartItemQuantityRequest,
  RemoveItemFromCartRequest,
} from "@repo/types/contracts";

export type GetFullCartParams = {
  userId: number;
};

export type GetCartItemsParams = {
  userId: number;
};

export type CreateCartItemParams = {
  userId: number;
} & addItemToCartRequest;

export type UpdateCartItemQuantityParams = {
  userId: number;
} & UpdateCartItemQuantityRequest;

export type RemoveItemFromCartParams = {
  userId: number;
} & RemoveItemFromCartRequest;
