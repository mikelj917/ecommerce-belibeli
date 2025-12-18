import { addItemToCartRequest, AddItemToCartResponse } from "@repo/types/contracts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { cartService } from "@/app/shared/services/API/cart";

export const useAddItemToCart = () => {
  const queryClient = useQueryClient();

  return useMutation<AddItemToCartResponse, AxiosError, addItemToCartRequest>({
    mutationFn: (params: addItemToCartRequest) => cartService.addItemToCart(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
