import { CartPageSkeleton } from "@/app/(view)/(store)/cart/components/CartPageSkeleton";
import { ProductCardSkeleton } from "@/app/shared/components/domain/store/ProductCardSkeleton";

export default function Loading() {
  return (
    <>
      <CartPageSkeleton />
      <section className="bg-white px-3 py-12">
        <div className="mx-auto lg:container">
          <section className="grid grid-cols-2 items-center justify-center gap-6 py-10 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(12)].map((_, index) => (
              <ProductCardSkeleton key={index} grid={true} />
            ))}
          </section>
        </div>
      </section>
    </>
  );
}
