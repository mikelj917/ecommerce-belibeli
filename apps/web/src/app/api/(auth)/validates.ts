import { validation } from "../utils/validation";
import { authSchema } from "./schemas";

function register(data: unknown) {
  return validation({ data, schema: authSchema.register });
}

function login(data: unknown) {
  return validation({ data, schema: authSchema.login });
}

export const authValidate = { register, login };
