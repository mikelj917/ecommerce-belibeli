export type CartItemDto = {
  id: number;
  quantity: number;
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    promotionPrice: number | null;
    promotionEnd: string | null;
  };
  productOptions: {
    option: {
      id: number;
      type: string;
    };
    optionValue: {
      id: number;
      value: string;
    };
  }[];
};

export type CartDto = {
  id: number;
  items: CartItemDto[];
};

export type FindCartResponse = {
  cart: CartDto | null;
  count: number;
  subtotal: number;
  total: number;
  discount: number;
};

export type FindAllCartItemsResponse = {
  items: CartItemDto[] | [];
  count: number;
};

export type AddItemToCartResponse = {
  cartItem: {
    id: number;
    quantity: number;
    cartId: number;
    productId: number;
  };
};

export type UpdateCartItemQuantityResponse = {
  cartItem: {
    id: number;
    quantity: number;
    cartId: number;
    productId: number;
  };
};

export type RemoveCartItemResponse = void;
