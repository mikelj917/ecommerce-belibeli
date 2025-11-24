import { Decimal } from "@prisma/client/runtime/library";

export type RawCartItem = {
  id: number;
  quantity: number;
  product: {
    id: number;
    title: string;
    price: Decimal;
    image: string;
    promotionPrice: Decimal | null;
    promotionEnd: Date | null;
  };
  productOptions: Array<{
    option: {
      id: number;
      type: string;
    };
    optionValue: {
      id: number;
      value: string;
    };
  }>;
};
