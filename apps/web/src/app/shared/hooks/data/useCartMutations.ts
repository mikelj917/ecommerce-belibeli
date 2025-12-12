import { addItemToCartRequest } from "@repo/types/contracts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { cartService } from "@/app/shared/services/API/cart";

export const useCreateCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: addItemToCartRequest) => cartService.addItemToCart(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
