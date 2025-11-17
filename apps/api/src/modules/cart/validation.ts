import { cartItemSchema } from "@/modules/cart/validationSchema.js";
import { validation } from "@/shared/utils/validation.js";

function create(data: unknown) {
  return validation({ data, schema: cartItemSchema.create });
}

function update(data: unknown) {
  return validation({ data, schema: cartItemSchema.update });
}

export const cartItemValidate = { create, update };
