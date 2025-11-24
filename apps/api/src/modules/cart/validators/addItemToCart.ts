import z from "zod";
import { validation } from "@/shared/middlewares/validation";

const OptionSchema = z.object({
  optionId: z.number("Valor inválido"),
  optionValueId: z.number("Valor inválido"),
});

const body = z.object({
  productId: z.coerce.number("Valor inválido.").positive("O número deve ser maior que zero."),
  productOptions: z.array(OptionSchema, "Valor inválido").default([]),
  quantity: z.coerce.number("Valor inválido."),
});

export const addItemToCart = validation({ body });
