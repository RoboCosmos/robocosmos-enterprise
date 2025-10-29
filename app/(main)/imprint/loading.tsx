import { Skeleton } from "@/components/ui/skeleton"

export default function ImprintLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Page Title Skeleton */}
        <Skeleton className="h-10 w-48 mb-8" />

        <div className="space-y-8">
          {/* Section Skeletons */}
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-7 w-64" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                {i === 1 && <Skeleton className="h-4 w-2/3" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
