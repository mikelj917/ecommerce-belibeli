import type { BackendOption } from "./Product";

export type CreateCartParams = {
  productId: number;
  quantity: number;
  productOptions: BackendOption[];
};
