import {
  addItemToCart,
  findAllCartItems,
  findCart,
  removeItemFromCart,
  updateCartItemQuantity,
} from "@/modules/cart/controller.js";
import v from "@/modules/cart/validators/index.js";
import { authMiddleware } from "@/shared/middlewares/auth.js";
import { Router } from "express";

const cartRouter: Router = Router();

cartRouter.get("/cart", authMiddleware, findCart);
cartRouter.get("/cart/items", authMiddleware, findAllCartItems);
cartRouter.post("/cart/items", authMiddleware, v.addItemToCart.middleware, addItemToCart);
cartRouter.patch(
  "/cart/items/:cartItemId/quantity",
  authMiddleware,
  v.updateCartItemQuantity.middleware,
  updateCartItemQuantity,
);
cartRouter.delete(
  "/cart/items/:cartItemId",
  authMiddleware,
  v.removeItemFromCart.middleware,
  removeItemFromCart,
);

export { cartRouter };
