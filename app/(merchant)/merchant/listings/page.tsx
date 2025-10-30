"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Eye, Trash2 } from "lucide-react"
import Image from "next/image"
import { CreateListingSheet } from "@/components/create-listing-sheet"

export default function MerchantListings() {
  const [isCreateSheetOpen, setIsCreateSheetOpen] = useState(false)

  const listings = [
    {
      id: 1,
      name: "KUKA KR 10 R1100",
      category: "Industrierobotik",
      status: "Aktiv",
      views: 234,
      bookings: 12,
      price: "850 € / Tag",
      image: "/industrial-robot-arm-factory.jpg",
    },
    {
      id: 2,
      name: "ABB IRB 6700",
      category: "Schweißroboter",
      status: "Aktiv",
      views: 189,
      bookings: 8,
      price: "1.200 € / Tag",
      image: "/collaborative-robot-arm.jpg",
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Meine Inserate</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1">Verwalten Sie Ihre Roboter-Angebote</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90" onClick={() => setIsCreateSheetOpen(true)}>
          Neues Inserat erstellen
        </Button>
      </div>

      <div className="space-y-4">
        {listings.map((listing) => (
          <Card key={listing.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="relative h-20 w-20 rounded-lg overflow-hidden">
                    <Image src={listing.image || "/placeholder.svg"} alt={listing.name} fill className="object-cover" />
                  </div>
                  <div>
                    <CardTitle>{listing.name}</CardTitle>
                    <CardDescription>{listing.category}</CardDescription>
                    <div className="flex gap-2 mt-2">
                      <Badge className="bg-primary">{listing.status}</Badge>
                      <span className="text-sm text-muted-foreground">{listing.views} Aufrufe</span>
                      <span className="text-sm text-muted-foreground">{listing.bookings} Buchungen</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-foreground">{listing.price}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-border bg-transparent">
                  <Eye className="h-4 w-4 mr-2" />
                  Ansehen
                </Button>
                <Button size="sm" variant="outline" className="border-border bg-transparent">
                  <Edit className="h-4 w-4 mr-2" />
                  Bearbeiten
                </Button>
                <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-400">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Löschen
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <CreateListingSheet open={isCreateSheetOpen} onOpenChange={setIsCreateSheetOpen} />
    </div>
  )
}
