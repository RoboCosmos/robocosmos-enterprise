import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function MerchantDetailLoading() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl p-8 space-y-8">
        {/* Merchant Header Skeleton */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <Skeleton className="h-32 w-32 rounded-full bg-gray-700" />
              <div className="flex-grow space-y-4">
                <Skeleton className="h-10 w-64 bg-gray-700" />
                <Skeleton className="h-6 w-48 bg-gray-700" />
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-40 bg-gray-700" />
                  <Skeleton className="h-8 w-32 bg-gray-700" />
                </div>
                <Skeleton className="h-6 w-56 bg-gray-700" />
                <Skeleton className="h-10 w-48 bg-gray-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Skeleton */}
        <div className="space-y-6">
          <Skeleton className="h-12 w-full bg-gray-800" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-96 bg-gray-800" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
