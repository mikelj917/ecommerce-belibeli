import type { CartItem, Product } from "@prisma/client";

type FullCart = {
  items: Array<
    CartItem & {
      product: Product;
    }
  >;
};

export function getCartSummary(cart: FullCart | null) {
  if (!cart || cart.items.length === 0) {
    return {
      count: 0,
      subtotal: 0,
      total: 0,
      discount: 0,
    };
  }

  const count = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cart.items.reduce((acc, item) => {
    const price = Number(item.product.price);
    return acc + price * item.quantity;
  }, 0);

  const total = cart.items.reduce((acc, item) => {
    const price = Number(item.product.promotionPrice ?? item.product.price);
    return acc + price * item.quantity;
  }, 0);

  const discount = subtotal - total;

  return {
    count,
    subtotal,
    total,
    discount,
  };
}
