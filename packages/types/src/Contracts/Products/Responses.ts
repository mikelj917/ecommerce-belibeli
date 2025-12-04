export type ProductValueDto = {
  id: number;
  value: string;
};

export type ProductOptionDto = {
  id: number;
  type: string;
  values: ProductValueDto[];
};

export type ProductDto = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  promotionPrice: number | null;
  promotionEnd: string | null;
  stock: number;
  totalSold: number;
  ratingRate: number;
  ratingCount: number;
  category: {
    id: number;
    name: string;
  };
  productOption: ProductOptionDto[];
};

export type FindAllProductsResponse = {
  products: ProductDto[];
  count: number;
};
