import { ProductListResponse, ProductDto, ProductOptionDto } from "@repo/types/contracts";

export const controllerProductListMapper = (product: any): ProductDto => {
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

    productOption: product.productOption.map((opt: ProductOptionDto) => ({
      id: opt.id,
      type: opt.type,
      values: opt.values.map((val) => ({
        id: val.id,
        value: val.value,
      })),
    })),
  };
};

export const mapProductListToDto = (products: any[], count: number): ProductListResponse => {
  return {
    products: products.map(controllerProductListMapper),
    count,
  };
};
