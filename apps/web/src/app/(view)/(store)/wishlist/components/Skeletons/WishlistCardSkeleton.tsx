import { Skeleton } from "@/app/shared/components/ui/skeleton";

export const WishlistCardSkeleton = () => {
  return (
    <div className="flex h-full w-full max-w-sm flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      {/* Image */}
      <Skeleton className="mb-4 aspect-square w-full rounded-xl" />

      {/* Info */}
      <div className="space-y-3">
        {/* Title */}
        <Skeleton className="h-4 w-3/4" />

        {/* Rating */}
        <div className="flex gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>

        {/* Price */}
        <Skeleton className="h-5 w-28" />

        {/* Button */}
        <Skeleton className="mt-2 h-9 w-full rounded-xl" />
      </div>
    </div>
  );
};
