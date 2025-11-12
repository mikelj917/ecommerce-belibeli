import { verifyToken } from "@/proxy/verifyToken";
import { db } from "@/app/shared/lib/db";
import type { NextRequest } from "next/server";

export async function get(req: NextRequest) {
  const token = req.cookies.get("accessToken");

  if (!token?.value) {
    return { cart: { items: [] }, count: 0 };
  }

  const { userId } = await verifyToken(token.value);

  const cart = await db.cart.findUnique({
    where: { userId },
    include: {
      items: {
        include: { product: true, productOptions: { select: { option: true, optionValue: true } } },
      },
    },
  });

  if (!cart) {
    return { cart: { items: [] }, count: 0 };
  }

  const count = cart?.items.reduce((total, item) => total + item.quantity, 0) ?? 0;

  const subtotal = cart.items.reduce((acc, item) => {
    const retailPrice = Number(item.product.price);
    return acc + retailPrice * item.quantity;
  }, 0);

  const total = cart.items.reduce((acc, item) => {
    const finalPrice = Number(item.product.promotionPrice ?? item.product.price);
    return acc + finalPrice * item.quantity;
  }, 0);

  const discount = subtotal - total;

  return { cart, count, subtotal, total, discount };
}

export const cartService = { get };
