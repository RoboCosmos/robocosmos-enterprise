import { Skeleton } from "@/components/ui/skeleton"

export default function PrivacyLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Skeleton className="h-10 w-64 mb-8" />

        {/* Section skeletons */}
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="mb-8">
            <Skeleton className="h-8 w-96 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-4" />
          </div>
        ))}
      </div>
    </div>
  )
}
