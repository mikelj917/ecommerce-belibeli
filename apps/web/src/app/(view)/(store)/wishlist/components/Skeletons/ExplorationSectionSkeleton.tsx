import { Skeleton } from "@/app/shared/components/ui/skeleton";

export const ExplorationSectionSkeleton = () => {
  return (
    <section className="my-20 rounded-2xl border border-gray-200 bg-neutral-100 py-10">
      <div className="flex flex-col items-center space-y-5 text-center">
        <Skeleton className="h-14 w-14 rounded-full" />
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-80 max-w-full" />
      </div>
    </section>
  );
};
