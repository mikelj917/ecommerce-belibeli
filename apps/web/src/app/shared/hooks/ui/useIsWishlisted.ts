"use client";
import { useMemo } from "react";

import { useFindWishlist } from "@/app/shared/hooks/data/useWishlistQueries";

export const useIsWishlisted = (productId: string) => {
  const { data, isLoading } = useFindWishlist();

  const isWishlisted = useMemo(() => {
    if (!data?.wishlist) return false;
    return data.wishlist.items.some((item) => item.product.id === productId);
  }, [data, productId]);

  return {
    isWishlisted,
    isLoading,
  };
};
