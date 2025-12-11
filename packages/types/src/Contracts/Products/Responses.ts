export type ProductValueDto = {
  id: string;
  value: string;
};

export type ProductOptionDto = {
  id: string;
  type: string;
  values: ProductValueDto[];
};

export type ProductDto = {
  id: string;
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
    id: string;
    name: string;
  };
  productOptions: ProductOptionDto[];
};

export type FindAllProductsResponse = {
  products: ProductDto[];
  count: number;
};
