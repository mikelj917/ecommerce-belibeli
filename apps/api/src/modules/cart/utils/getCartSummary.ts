import type { FullCartDto } from "@/modules/cart/types/Dtos/cartDtos";

type CartSummary = {
  count: number;
  subtotal: number;
  total: number;
  discount: number;
};

export function getCartSummary(cart: FullCartDto): CartSummary {
  const count = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cart.items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const total = cart.items.reduce((acc, item) => {
    const price = item.product.promotionPrice ?? item.product.price;
    return acc + price * item.quantity;
  }, 0);

  const discount = subtotal - total;

  return { count, subtotal, total, discount };
}
