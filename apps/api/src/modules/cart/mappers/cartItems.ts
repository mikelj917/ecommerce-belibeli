import type { RawCartItem } from "@/modules/cart/types/Raws/RawCartItem";
import { CartItemDto } from "@repo/types/contracts";

export const controllerCartItemsMapper = (rawItems: RawCartItem[] | null): CartItemDto[] | null => {
  if (!rawItems || rawItems.length === 0) return null;

  return rawItems.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    product: {
      id: item.product.id,
      title: item.product.title,
      image: item.product.image,
      price: Number(item.product.price),
      promotionPrice: item.product.promotionPrice ? Number(item.product.promotionPrice) : null,
      promotionEnd: item.product.promotionEnd ? item.product.promotionEnd.toISOString() : null,
    },
    productOptions: item.productOptions.map((po) => ({
      option: {
        id: po.option.id,
        type: po.option.type,
      },
      optionValue: {
        id: po.optionValue.id,
        value: po.optionValue.value,
      },
    })),
  }));
};
