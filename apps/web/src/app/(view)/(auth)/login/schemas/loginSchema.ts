import z from "zod";

export const loginSchema = z.object({
  email: z.email("E-mail inválido.").min(1, "O e-mail é obrigatório."),
  password: z.string().min(1, "Senha inválida"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
