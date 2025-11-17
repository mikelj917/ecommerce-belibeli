export type CartItemOptionInput = {
  optionId: number;
  optionValueId: number;
};

export type AddItemToCartInput = {
  userId: number;
  productId: number;
  quantity: number;
  options?: CartItemOptionInput[];
};
