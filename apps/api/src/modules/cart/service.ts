import { getCartSummary } from "@/modules/cart/utils/getCartSummary.js";
import { db } from "../../shared/lib/db.js";
import type { AddItemToCartInput } from "@/modules/cart/types/index.js";
import { ConflictError } from "@/shared/HttpErrors.js";

export async function getFullCart(userId: number) {
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

  const { count, discount, subtotal, total } = getCartSummary(cart);

  return { cart, count, subtotal, total, discount };
}

export async function getCartItems(userId: number) {
  const cartId = await db.cart.findUnique({
    where: { userId },
    select: { id: true },
  });

  const cartItems = await db.cartItem.findMany({
    where: { cartId: cartId?.id },
    include: {
      product: true,
      productOptions: { select: { option: true, optionValue: true } },
    },
  });

  if (cartItems.length === 0) {
    return { cartItems: [], count: 0 };
  }

  const { count } = getCartSummary({ items: cartItems });

  return { cartItems, count };
}

export async function createCartItem({ userId, productId, options, quantity }: AddItemToCartInput) {
  const existingCart = await db.cart.findUnique({ where: { userId } });
  const optionsPayload =
    options && options.length > 0
      ? {
          productOptions: {
            createMany: {
              data: options,
            },
          },
        }
      : {};

  if (!existingCart) {
    const { id } = await db.cart.create({ data: { userId } });
    const cartItem = await db.cartItem.create({
      data: {
        cartId: id,
        productId,
        quantity,
        ...optionsPayload,
      },
    });

    return { cartItem };
  }

  const existingItem = await db.cartItem.findUnique({
    where: {
      cartId_productId: {
        cartId: existingCart.id,
        productId,
      },
    },
  });

  if (existingItem) {
    throw new ConflictError("Este item já está no carrinho.");
  }

  const cartItem = await db.cartItem.create({
    data: {
      cartId: existingCart.id,
      productId,
      quantity,
      ...optionsPayload,
    },
  });

  return { cartItem };
}

export const cartService = { getFullCart, getCartItems, createCartItem };
