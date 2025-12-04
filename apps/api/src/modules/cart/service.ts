import { db } from "../../shared/lib/db";
import { getCartSummary } from "@/modules/cart/utils/getCartSummary";
import { ConflictError, ForbiddenError, NotFoundError } from "@/shared/utils/HttpErrors";
import { controllerFullCartMapper, controllerCartItemsMapper } from "@/modules/cart/mappers";
import type {
  CreateCartItemParams,
  UpdateCartItemQuantityParams,
  RemoveItemFromCartParams,
  GetFullCartParams,
  GetCartItemsParams,
} from "@/modules/cart/types/ServiceParams";

export const getFullCart = async ({ userId }: GetFullCartParams) => {
  const rawCart = await db.cart.findUnique({
    where: { userId },
    include: {
      items: {
        include: {
          product: {
            select: {
              id: true,
              title: true,
              price: true,
              image: true,
              promotionPrice: true,
              promotionEnd: true,
            },
          },
          productOptions: {
            select: {
              option: { omit: { productId: true } },
              optionValue: { omit: { productOptionId: true } },
            },
          },
        },
        omit: { productId: true, cartId: true, createdAt: true, updatedAt: true },
      },
    },
    omit: { userId: true, createdAt: true, updatedAt: true },
  });

  const cart = controllerFullCartMapper(rawCart);

  if (cart === null) {
    return {
      cart: null,
      count: 0,
      subtotal: 0,
      total: 0,
      discount: 0,
    };
  }

  const { count, discount, subtotal, total } = getCartSummary(cart);

  return { cart, count, subtotal, total, discount };
};

export const getCartItems = async ({ userId }: GetCartItemsParams) => {
  const cartId = await db.cart.findUnique({
    where: { userId },
    select: { id: true },
  });

  if (!cartId) {
    return { items: [], count: 0 };
  }

  const rawItems = await db.cartItem.findMany({
    where: { cartId: cartId.id },
    include: {
      product: {
        select: {
          id: true,
          title: true,
          price: true,
          image: true,
          promotionPrice: true,
          promotionEnd: true,
        },
      },
      productOptions: {
        select: {
          option: { omit: { productId: true } },
          optionValue: { omit: { productOptionId: true } },
        },
      },
    },
    omit: { productId: true, cartId: true, createdAt: true, updatedAt: true },
  });

  const items = controllerCartItemsMapper(rawItems);

  const { count } = getCartSummary({ id: cartId.id, items });

  return { items, count };
};

export const createCartItem = async ({
  userId,
  productId,
  productOptions,
  quantity,
}: CreateCartItemParams) => {
  const existingCart = await db.cart.findUnique({ where: { userId } });
  const optionsPayload =
    productOptions && productOptions.length > 0
      ? {
          productOptions: {
            createMany: {
              data: productOptions,
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
      omit: { createdAt: true, updatedAt: true },
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
    omit: { createdAt: true, updatedAt: true },
  });

  return { cartItem };
};

export const updateCartItemQuantity = async ({
  userId,
  cartItemId,
  quantity,
}: UpdateCartItemQuantityParams) => {
  const item = await db.cartItem.findUnique({
    where: { id: cartItemId },
    include: { cart: { select: { userId: true } } },
  });

  if (!item) {
    throw new NotFoundError("Carrinho não encontrado para o usuário.");
  }

  if (item.cart.userId !== userId) {
    throw new ForbiddenError("Item não pertence ao usuário.");
  }

  const cartItem = await db.cartItem.update({
    where: { id: cartItemId },
    data: { quantity },
    omit: { createdAt: true, updatedAt: true },
  });

  return { cartItem };
};

export const deleteCartItem = async ({ userId, cartItemId }: RemoveItemFromCartParams) => {
  const item = await db.cartItem.findUnique({
    where: { id: cartItemId },
    include: { cart: { select: { userId: true } } },
  });

  if (!item) {
    throw new NotFoundError("Carrinho não encontrado para o usuário.");
  }

  if (item.cart.userId !== userId) {
    throw new ForbiddenError("Item não pertence ao usuário.");
  }

  await db.cartItem.delete({ where: { id: cartItemId } });
};

export const cartService = {
  getFullCart,
  getCartItems,
  createCartItem,
  updateCartItemQuantity,
  deleteCartItem,
};
