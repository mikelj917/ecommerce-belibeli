import type { RawCartItem } from "@/modules/cart/types/Raws/RawCartItem";

export type RawFullCart = {
  id: number;
  items: RawCartItem[];
} | null;
