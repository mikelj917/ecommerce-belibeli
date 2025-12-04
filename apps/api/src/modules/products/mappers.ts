import { ProductDto } from "@repo/types/contracts";
import { Decimal } from "@prisma/client/runtime/library";

type RawProduct = {
  id: number;
  title: string;
  description: string;
  price: Decimal;
  image: string;
  promotionPrice: Decimal | null;
  promotionEnd: Date | null;
  stock: number;
  totalSold: number;
  ratingRate: number;
  ratingCount: number;
  category: {
    id: number;
    name: string;
  };
  productOption: {
    id: number;
    type: string;
    values: {
      id: number;
      value: string;
    }[];
  }[];
};

export const controllerProductMapper = (product: RawProduct): ProductDto => {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: Number(product.price),
    image: product.image,
    promotionPrice: product.promotionPrice ? Number(product.promotionPrice) : null,
    promotionEnd: product.promotionEnd ? product.promotionEnd.toISOString() : null,
    stock: product.stock,
    totalSold: product.totalSold,
    ratingRate: product.ratingRate,
    ratingCount: product.ratingCount,

    category: {
      id: product.category.id,
      name: product.category.name,
    },

    productOption: product.productOption.map((opt) => ({
      id: opt.id,
      type: opt.type,
      values: opt.values.map((val) => ({
        id: val.id,
        value: val.value,
      })),
    })),
  };
};

export const controllerProductListMapper = (products: RawProduct[]): ProductDto[] => {
  return products.map(controllerProductMapper);
};
