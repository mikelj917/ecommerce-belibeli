import z from "zod";

const register = z
  .object({
    name: z.string("Campo obrigatório").min(3, "O nome deve ter pelo menos 3 caracteres."),
    email: z.email("E-mail inválido."),
    password: z
      .string("Campo obrigatório")
      .min(6, "A senha precisa ter pelo menos 6 caracteres.")
      .regex(/[a-zA-Z]/, "A senha deve conter pelo menos uma letra.")
      .regex(/\d/, "A senha deve conter pelo menos um número."),
    confirmPassword: z.string("Confirme a sua senha."),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    path: ["confirmPassword"],
    error: "As senhas não coincidem",
  });

const login = z.object({
  email: z.email("E-mail inválido.").min(1, "O e-mail é obrigatório."),
  password: z
    .string()
    .min(6, "A senha precisa ter pelo menos 6 caracteres.")
    .regex(/[a-zA-Z]/, "A senha deve conter pelo menos uma letra.")
    .regex(/\d/, "A senha deve conter pelo menos um número."),
});

export type Login = z.infer<typeof login>;
export type Register = z.infer<typeof register>;

export const authSchema = { register, login };
