import { validation } from "@/shared/utils/validation.js";
import { authSchema } from "./validationSchema.js";

function register(data: unknown) {
  return validation({ data, schema: authSchema.register });
}

function login(data: unknown) {
  return validation({ data, schema: authSchema.login });
}

export const authValidate = { register, login };
