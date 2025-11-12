import type { Prisma } from "@prisma/client";

export type CartInclude = Prisma.CartGetPayload<{
  include: {
    items: {
      include: { product: true; productOptions: { select: { option: true; optionValue: true } } };
    };
  };
}>;

export type CartSummary = {
  cart: CartInclude | null;
  count: number;
  subtotal: number;
  total: number;
  discount: number;
};
