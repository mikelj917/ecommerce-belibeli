import type { CartInclude } from "@/app/shared/types/Cart";
import { CartItem } from "./CartItem";

type CartListProps = {
  cartItems: CartInclude["items"];
};

export const CartList = ({ cartItems }: CartListProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          product={cartItem.product}
          productOptions={cartItem.productOptions}
          quantity={cartItem.quantity}
        />
      ))}
    </div>
  );
};
