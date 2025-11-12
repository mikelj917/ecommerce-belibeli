import { ProductDetailsProvider } from "@/app/shared/contexts/ProductDetailsContext";
import { SideMenuProvider } from "@/app/shared/contexts/SideMenuMobileContext";

export default async function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProductDetailsProvider>
      <SideMenuProvider>{children}</SideMenuProvider>
    </ProductDetailsProvider>
  );
}
