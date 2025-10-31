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
  const [searchTerm, setSearchTerm] = useState("")
  const [merchantFilter, setMerchantFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

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
      category: "manufacturing",
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
      category: "inspection",
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
      category: "logistics",
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
      category: "manufacturing",
    },
  ]

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.model.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMerchant = merchantFilter === "all" || listing.merchant.toLowerCase() === merchantFilter.toLowerCase()
    const matchesStatus = statusFilter === "all" || listing.status === statusFilter
    const matchesType = typeFilter === "all" || listing.type.toLowerCase() === typeFilter.toLowerCase()
    const matchesCategory = categoryFilter === "all" || listing.category === categoryFilter

    return matchesSearch && matchesMerchant && matchesStatus && matchesType && matchesCategory
  })

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: "Aktiv", variant: "default" as const },
      under_review: { label: "Prüfung ausstehend", variant: "outline" as const },
      paused: { label: "Pausiert", variant: "secondary" as const },
      rejected: { label: "Abgelehnt", variant: "destructive" as const },
      draft: { label: "Entwurf", variant: "secondary" as const },
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <Badge variant={config.variant}>{config.label}</Badge>
  }

  const toggleListing = (id: string) => {
    setSelectedListings((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const toggleAll = () => {
    if (selectedListings.length === filteredListings.length) {
      setSelectedListings([])
    } else {
      setSelectedListings(filteredListings.map((l) => l.id))
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-foreground">Inseratsverwaltung</h1>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Suche nach Modell, Händler, ID..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <Select value={merchantFilter} onValueChange={setMerchantFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Alle Händler" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Händler</SelectItem>
                <SelectItem value="merchant-a">Händler A</SelectItem>
                <SelectItem value="merchant-b">Händler B</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
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

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Alle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle</SelectItem>
                <SelectItem value="rent">Miete</SelectItem>
                <SelectItem value="buy">Kauf</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="max-w-xs">
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

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox checked={selectedListings.length === filteredListings.length} onCheckedChange={toggleAll} />
                </TableHead>
                <TableHead>Roboter</TableHead>
                <TableHead>Händler</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Typ</TableHead>
                <TableHead>Preis (Miete/Kauf)</TableHead>
                <TableHead>Erstellt am</TableHead>
                <TableHead className="text-right">Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredListings.map((listing) => (
                <TableRow key={listing.id}>
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
                      <span className="font-medium text-foreground">{listing.model}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{listing.merchant}</TableCell>
                  <TableCell>{getStatusBadge(listing.status)}</TableCell>
                  <TableCell className="text-muted-foreground">{listing.type}</TableCell>
                  <TableCell className="text-muted-foreground">{listing.price}</TableCell>
                  <TableCell className="text-muted-foreground">{listing.createdAt}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Details ansehen
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Inserat bearbeiten
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {listing.status === "under_review" && (
                          <>
                            <DropdownMenuItem>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Freischalten
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <XCircle className="mr-2 h-4 w-4" />
                              Ablehnen
                            </DropdownMenuItem>
                          </>
                        )}
                        {listing.status === "active" && (
                          <DropdownMenuItem>
                            <PauseCircle className="mr-2 h-4 w-4" />
                            Pausieren
                          </DropdownMenuItem>
                        )}
                        {listing.status === "paused" && (
                          <DropdownMenuItem>
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Aktivieren
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
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
