import { Skeleton } from "@/components/ui/pxl/skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}