import { LeftLoginSide } from "./components/LeftSide/LeftLoginSide";
import { RightLoginSide } from "./components/RightSide/RightLoginSide";

export const metadata = {
  title: "Entrar | BeliBeli Store",
  description:
    "Acesse sua conta na BeliBeli Store para acompanhar pedidos, gerenciar informações e aproveitar as melhores ofertas com praticidade.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-full min-w-full">
      <LeftLoginSide />
      <RightLoginSide />
    </div>
  );
}
