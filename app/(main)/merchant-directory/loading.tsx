import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function MerchantDirectoryLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar Skeleton */}
          <aside className="lg:w-72">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Skeleton className="h-6 w-32 bg-gray-700" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-10 w-full bg-gray-700" />
                <Skeleton className="h-10 w-full bg-gray-700" />
                <div className="space-y-2">
                  <Skeleton className="h-8 w-full bg-gray-700" />
                  <Skeleton className="h-20 w-full bg-gray-700" />
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content Skeleton */}
          <main className="flex-1">
            <div className="mb-8">
              <Skeleton className="h-8 w-64 mb-2 bg-gray-700" />
              <Skeleton className="h-4 w-96 bg-gray-700" />
            </div>

            <div className="flex justify-between gap-4 mb-6">
              <Skeleton className="h-10 flex-1 bg-gray-700" />
              <Skeleton className="h-10 w-48 bg-gray-700" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-12 w-12 rounded-full bg-gray-700" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-32 bg-gray-700" />
                        <Skeleton className="h-3 w-24 bg-gray-700" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Skeleton className="h-16 w-full bg-gray-700" />
                    <Skeleton className="h-8 w-full bg-gray-700" />
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-9 w-full bg-gray-700" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
