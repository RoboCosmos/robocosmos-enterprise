import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trash2 } from "lucide-react"
import Image from "next/image"

export default function CustomerWishlist() {
  const wishlistItems = [
    {
      id: 1,
      name: "KUKA KR 10 R1100",
      manufacturer: "KUKA",
      category: "Industrierobotik",
      price: "850 € / Tag",
      image: "/industrial-robot-arm-factory.jpg",
      status: "Verfügbar",
    },
    {
      id: 2,
      name: "ABB IRB 6700",
      manufacturer: "ABB",
      category: "Schweißroboter",
      price: "1.200 € / Tag",
      image: "/collaborative-robot-arm.jpg",
      status: "Verfügbar",
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Wunschliste</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Ihre gespeicherten Roboter</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wishlistItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              <Badge className="absolute top-2 right-2 bg-blue-600">{item.status}</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-foreground">{item.name}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {item.manufacturer} • {item.category}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-foreground">{item.price}</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-border bg-transparent">
                    Details
                  </Button>
                  <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-400">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
