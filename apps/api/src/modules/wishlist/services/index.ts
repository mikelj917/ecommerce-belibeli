import { createWishlistItem } from "@/modules/wishlist/services/createWishlistItem";
import { deleteWishlistItem } from "@/modules/wishlist/services/deleteWishlistItem";
import { findById } from "@/modules/wishlist/services/findById";

export const wishlistServices = {
  findById,
  createWishlistItem,
  deleteWishlistItem,
};
