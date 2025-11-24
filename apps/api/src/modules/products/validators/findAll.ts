import z from "zod";
import { validation } from "@/shared/middlewares/validation";

const query = z.object({
  categoryId: z.coerce.number().positive().optional(),
  offset: z.coerce.number().positive().optional(),
  limit: z.coerce.number().positive().max(100).optional(),
});

export const findAll = validation({ query });
