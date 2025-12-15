import { useQuery } from "@tanstack/react-query";

import { cartService } from "@/app/shared/services/API/cart";

export const useFindCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: cartService.findCart,
  });
};

export const useFindCartItems = () => {
  return useQuery({
    queryKey: ["cart", "items"],
    queryFn: cartService.findCartItems,
  });
};
