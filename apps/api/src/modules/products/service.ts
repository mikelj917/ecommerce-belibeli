import type { FindAllProductsParams } from "@/modules/products/types/ServicesParams";
import { db } from "../../shared/lib/db";

const findAll = async ({ categoryId, limit, offset }: FindAllProductsParams) => {
  const whereClause = categoryId !== undefined ? { categoryId: categoryId } : {};

  const products = await db.product.findMany({
    where: whereClause,
    include: {
      category: { select: { id: true, name: true } },
      productOption: {
        include: { values: { select: { id: true, value: true } } },
        omit: { productId: true },
      },
    },
    omit: { categoryId: true, createdAt: true, updatedAt: true },
    skip: offset,
    take: limit,
  });

  const count = await db.product.count({
    where: whereClause,
  });

  return { products, count }; 
};

export const productService = { findAll };
