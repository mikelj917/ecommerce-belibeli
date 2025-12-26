import { WishlistCardSkeleton } from "@/app/(view)/(store)/wishlist/components/Skeletons/WishlistCardSkeleton";

export const WishlistItemsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <WishlistCardSkeleton key={index} />
      ))}
    </div>
  );
};
