import { Skeleton } from "@/components/ui/skeleton"

export default function TermsLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Title Skeleton */}
        <Skeleton className="h-10 w-3/4 mb-8" />

        {/* Notice Skeleton */}
        <Skeleton className="h-20 w-full mb-8" />

        {/* Section Skeletons */}
        <div className="space-y-12">
          {[1, 2, 3].map((section) => (
            <div key={section} className="space-y-6">
              <Skeleton className="h-8 w-2/3 mb-6" />
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="space-y-3">
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
