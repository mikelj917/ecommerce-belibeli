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

export type FullCartResponse = {
  cart:
    | {
        id: number;
        items: CartItemDto[];
      }
    | {
        id: null;
        items: [];
      };
  count: number;
  subtotal: number;
  total: number;
  discount: number;
};

export type CartItemsResponse = {
  items: CartItemDto[] | [];
  count: number;
};

export type AddCartItemResponse = {
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
