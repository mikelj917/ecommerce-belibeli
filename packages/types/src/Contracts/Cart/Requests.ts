type OptionsDto = {
  optionId: number;
  optionValueId: number;
};

export type CreateCartItemRequest = {
  productId: number;
  productOptions: OptionsDto[];
  quantity: number;
};

export type UpdateCartItemQuantityRequest = {
  cartItemId: number;
  quantity: number;
};

export type RemoveItemFromCartRequest = {
  cartItemId: number;
};
