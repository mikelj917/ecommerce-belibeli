import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { HeaderRegister } from "./components/Header/HeaderRegister";

export const metadata = {
  title: "Criar Conta | BeliBeli Store",
  description:
    "Cadastre-se na BeliBeli Store e descubra uma nova experiência de compras online. Crie sua conta e aproveite promoções exclusivas e vantagens especiais.",
};

export default function RegisterPage() {
  return (
    <div className="relative w-full p-6">
      <HeaderRegister />
      <RegisterForm />
    </div>
  );
}
