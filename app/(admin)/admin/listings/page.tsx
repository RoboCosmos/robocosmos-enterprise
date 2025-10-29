"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Eye, Edit, CheckCircle, XCircle, PauseCircle, PlayCircle, Trash } from "lucide-react"
import Image from "next/image"

export default function AdminListingsPage() {
  const [selectedListings, setSelectedListings] = useState<string[]>([])

  const listings = [
    {
      id: "1",
      model: "Atlas V3",
      image: "/humanoid-robot.jpg",
      merchant: "RoboTrade GmbH",
      status: "active",
      type: "Miete/Kauf",
      price: "€850/T / €160k",
      createdAt: "20. Okt. 2025",
    },
    {
      id: "2",
      model: "Digit V2",
      image: "/bipedal-robot.jpg",
      merchant: "New Merchant Ltd.",
      status: "under_review",
      type: "Miete",
      price: "€700/T",
      createdAt: "27. Okt. 2025",
    },
    {
      id: "3",
      model: "Spot V2",
      image: "/quadruped-robot.jpg",
      merchant: "RoboTrade GmbH",
      status: "paused",
      type: "Kauf",
      price: "€75k",
      createdAt: "15. Sep. 2025",
    },
    {
      id: "4",
      model: "Unknown Model",
      image: "/futuristic-helper-robot.png",
      merchant: "Test User Inc.",
      status: "rejected",
      type: "Kauf",
      price: "--",
      createdAt: "25. Okt. 2025",
    },
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: "Aktiv", className: "bg-green-600 hover:bg-green-700" },
      under_review: { label: "Prüfung ausstehend", className: "bg-yellow-600 hover:bg-yellow-700" },
      paused: { label: "Pausiert", className: "bg-gray-600 hover:bg-gray-700" },
      rejected: { label: "Abgelehnt", className: "bg-red-600 hover:bg-red-700" },
      draft: { label: "Entwurf", className: "bg-gray-500 hover:bg-gray-600" },
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <Badge className={config.className}>{config.label}</Badge>
  }

  const toggleListing = (id: string) => {
    setSelectedListings((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const toggleAll = () => {
    if (selectedListings.length === listings.length) {
      setSelectedListings([])
    } else {
      setSelectedListings(listings.map((l) => l.id))
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-100">Inseratsverwaltung</h1>

      {/* Filter and Search Bar */}
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search Input */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Suche nach Modell, Händler, ID..."
                  className="pl-10 bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Merchant Filter */}
            <Select>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                <SelectValue placeholder="Alle Händler" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Händler</SelectItem>
                <SelectItem value="merchant-a">Händler A</SelectItem>
                <SelectItem value="merchant-b">Händler B</SelectItem>
              </SelectContent>
            </Select>

            {/* Status Filter */}
            <Select>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                <SelectValue placeholder="Alle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle</SelectItem>
                <SelectItem value="active">Aktiv</SelectItem>
                <SelectItem value="paused">Pausiert</SelectItem>
                <SelectItem value="draft">Entwurf</SelectItem>
                <SelectItem value="under_review">Prüfung ausstehend</SelectItem>
                <SelectItem value="rejected">Abgelehnt</SelectItem>
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                <SelectValue placeholder="Alle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle</SelectItem>
                <SelectItem value="rent">Miete</SelectItem>
                <SelectItem value="buy">Kauf</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Filter - Second Row */}
          <div className="mt-4">
            <Select>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white max-w-xs">
                <SelectValue placeholder="Alle Kategorien" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle</SelectItem>
                <SelectItem value="logistics">Logistik</SelectItem>
                <SelectItem value="manufacturing">Fertigung</SelectItem>
                <SelectItem value="inspection">Inspektion</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Listing Table */}
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700 hover:bg-gray-800">
                <TableHead className="w-12">
                  <Checkbox checked={selectedListings.length === listings.length} onCheckedChange={toggleAll} />
                </TableHead>
                <TableHead className="text-gray-300">Roboter</TableHead>
                <TableHead className="text-gray-300">Händler</TableHead>
                <TableHead className="text-gray-300">Status</TableHead>
                <TableHead className="text-gray-300">Typ</TableHead>
                <TableHead className="text-gray-300">Preis (Miete/Kauf)</TableHead>
                <TableHead className="text-gray-300">Erstellt am</TableHead>
                <TableHead className="text-gray-300 text-right">Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listings.map((listing) => (
                <TableRow key={listing.id} className="border-gray-700 hover:bg-gray-750">
                  <TableCell>
                    <Checkbox
                      checked={selectedListings.includes(listing.id)}
                      onCheckedChange={() => toggleListing(listing.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Image
                        src={listing.image || "/placeholder.svg"}
                        alt={listing.model}
                        width={40}
                        height={40}
                        className="rounded"
                      />
                      <span className="font-medium text-white">{listing.model}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-300">{listing.merchant}</TableCell>
                  <TableCell>{getStatusBadge(listing.status)}</TableCell>
                  <TableCell className="text-gray-300">{listing.type}</TableCell>
                  <TableCell className="text-gray-300">{listing.price}</TableCell>
                  <TableCell className="text-gray-300">{listing.createdAt}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                        <DropdownMenuItem className="text-gray-300 focus:bg-gray-700 focus:text-white">
                          <Eye className="mr-2 h-4 w-4" />
                          Details ansehen
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-gray-300 focus:bg-gray-700 focus:text-white">
                          <Edit className="mr-2 h-4 w-4" />
                          Inserat bearbeiten
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-gray-700" />
                        {listing.status === "under_review" && (
                          <>
                            <DropdownMenuItem className="text-gray-300 focus:bg-gray-700 focus:text-white">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Freischalten
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600 focus:bg-gray-700 focus:text-red-500">
                              <XCircle className="mr-2 h-4 w-4" />
                              Ablehnen
                            </DropdownMenuItem>
                          </>
                        )}
                        {listing.status === "active" && (
                          <DropdownMenuItem className="text-gray-300 focus:bg-gray-700 focus:text-white">
                            <PauseCircle className="mr-2 h-4 w-4" />
                            Pausieren
                          </DropdownMenuItem>
                        )}
                        {listing.status === "paused" && (
                          <DropdownMenuItem className="text-gray-300 focus:bg-gray-700 focus:text-white">
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Aktivieren
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator className="bg-gray-700" />
                        <DropdownMenuItem className="text-red-600 focus:bg-gray-700 focus:text-red-500">
                          <Trash className="mr-2 h-4 w-4" />
                          Inserat löschen
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
