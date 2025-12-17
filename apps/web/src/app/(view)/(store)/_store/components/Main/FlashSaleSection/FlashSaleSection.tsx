import { ProductDto } from "@repo/types/contracts";

import { ProductsCarousel } from "./ProductsCarousel";

type FlashSaleSectionProps = {
  products: ProductDto[] | undefined;
};

export const FlashSaleSection = ({ products }: FlashSaleSectionProps) => {
  return (
    <section id="flashSaleSection" className="bg-neutral-100 px-3 py-12">
      <div className="mx-auto lg:container">
        <ProductsCarousel productsOnSale={products} />
      </div>
    </section>
  );
};
