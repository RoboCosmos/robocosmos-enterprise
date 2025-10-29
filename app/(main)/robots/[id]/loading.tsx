import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function RobotDetailLoading() {
  return (
    <div className="space-y-8">
      {/* Back Button Skeleton */}
      <Skeleton className="h-5 w-40 bg-gray-800" />

      {/* Hero Section */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image Skeleton */}
        <Card className="bg-gray-900 border-gray-800">
          <Skeleton className="aspect-[4/3] bg-gray-800" />
        </Card>

        {/* Info Skeleton */}
        <div className="space-y-6">
          <div>
            <Skeleton className="h-4 w-32 mb-2 bg-gray-800" />
            <Skeleton className="h-10 w-64 mb-2 bg-gray-800" />
            <Skeleton className="h-5 w-40 bg-gray-800" />
          </div>

          {/* Quick Specs Skeleton */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-20 bg-gray-800" />
            ))}
          </div>

          {/* Pricing Skeleton */}
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 space-y-4">
              <Skeleton className="h-16 bg-gray-800" />
              <Skeleton className="h-16 bg-gray-800" />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Description Skeleton */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <Skeleton className="h-6 w-32 bg-gray-800" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-20 bg-gray-800" />
        </CardContent>
      </Card>

      {/* Specs Skeleton */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <Skeleton className="h-6 w-48 bg-gray-800" />
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Skeleton key={i} className="h-16 bg-gray-800" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
