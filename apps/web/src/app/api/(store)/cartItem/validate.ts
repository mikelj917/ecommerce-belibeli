import { validation } from "../../utils/validation";
import { cartItemSchema } from "./schema";

function create(data: unknown) {
  return validation({ data, schema: cartItemSchema.create });
}

function update(data: unknown) {
  return validation({ data, schema: cartItemSchema.update });
}

export const cartItemValidate = { create, update };
