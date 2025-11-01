import { Skeleton } from "@/components/ui/skeleton"

export default function TeamMembersLoading() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Skeleton */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2 flex-1">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-full max-w-2xl" />
        </div>
        <Skeleton className="h-10 w-48" />
      </div>

      {/* Table Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    </div>
  )
}
