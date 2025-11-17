import { db } from "../../shared/lib/db.js";
import { ProductServiceQuery } from "@repo/types";

const get = async (querys: ProductServiceQuery) => {
  const { categoryId, limit = 100, offSet = 0 } = querys;

  const whereClause = categoryId !== undefined ? { categoryId: categoryId } : {};

  const products = await db.product.findMany({
    where: whereClause,
    include: {
      category: { select: { name: true } },
      productOption: { include: { values: true } },
    },
    skip: offSet,
    take: limit,
  });

  const count = await db.product.count({
    where: whereClause,
  });

  return { products, count };
};

export const productService = { get };
