import { productService } from "@/app/shared/services/API/products";

import { HeroBanner } from "./components/Banner/HeroBanner";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

export const StorePage = async () => {
  const response = await productService.findAllProducts();

  return (
    <div className="relative z-10 overflow-x-hidden">
      <Header />
      <HeroBanner />
      <Main products={response.products} />
    </div>
  );
};
