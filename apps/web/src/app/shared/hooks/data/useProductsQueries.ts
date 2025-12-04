import { productService } from "@/app/shared/services/API/products";
import { useQuery } from "@tanstack/react-query";

export const useFindProducts = () => {
  return useQuery({
    queryKey: ["all-products"],
    queryFn: productService.findAllProducts,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60,
  });
};
