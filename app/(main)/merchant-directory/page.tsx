"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { MapPin, Search, List, Map, Star, Sparkles, SlidersHorizontal } from "lucide-react"
import Link from "next/link"

// Sample merchant data
const sampleMerchants = [
  {
    id: "1",
    name: "RoboTrade GmbH",
    location: "Hamburg, Deutschland",
    avatar: "/robot-company-logo.jpg",
    specializations: ["Logistik", "Fertigung", "RaaS-Spezialist"],
    rating: 4.8,
    reviewCount: 22,
  },
  {
    id: "2",
    name: "AutoMech Solutions",
    location: "München, Deutschland",
    avatar: "/automation-company-logo.jpg",
    specializations: ["Inspektion", "Wartung", "Gesundheitswesen"],
    rating: 4.9,
    reviewCount: 35,
  },
  {
    id: "3",
    name: "IndustrieBot AG",
    location: "Berlin, Deutschland",
    avatar: "/industrial-robot-logo.jpg",
    specializations: ["Fertigung", "Montage", "Logistik"],
    rating: 4.7,
    reviewCount: 18,
  },
  {
    id: "4",
    name: "SmartRobotics Pro",
    location: "Frankfurt, Deutschland",
    avatar: "/smart-robotics-logo.jpg",
    specializations: ["Logistik", "Lagerhaltung", "RaaS-Spezialist"],
    rating: 4.6,
    reviewCount: 28,
  },
]

export default function MerchantDirectoryPage() {
  const [locationInput, setLocationInput] = useState("")
  const [radius, setRadius] = useState("50")
  const [minRating, setMinRating] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("best-match")
  const [viewMode, setViewMode] = useState("list")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const handleApplyFilters = () => {
    console.log("[v0] Applying filters:", { locationInput, radius, minRating })
    setMobileFiltersOpen(false)
  }

  const handleResetFilters = () => {
    setLocationInput("")
    setRadius("50")
    setMinRating("all")
  }

  const FilterContent = () => (
    <>
      <Accordion type="multiple" defaultValue={["location", "specialization", "rating"]} className="w-full">
        {/* Location Filter */}
        <AccordionItem value="location">
          <AccordionTrigger className="text-sm font-semibold">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Standort
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="location-input" className="text-xs">
                PLZ oder Stadt
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="location-input"
                  placeholder="PLZ oder Stadt eingeben"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  className="bg-background pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="radius-select" className="text-xs">
                Umkreis
              </Label>
              <Select value={radius} onValueChange={setRadius}>
                <SelectTrigger id="radius-select" className="bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 km</SelectItem>
                  <SelectItem value="25">25 km</SelectItem>
                  <SelectItem value="50">50 km</SelectItem>
                  <SelectItem value="100">100 km</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Specialization Filter */}
        <AccordionItem value="specialization">
          <AccordionTrigger className="text-sm font-semibold">Spezialisierung</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <Label className="text-xs">Spezialisiert auf (Use Cases)</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="logistics" />
                <Label htmlFor="logistics" className="cursor-pointer text-sm font-normal">
                  Logistik & Lagerhaltung
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="manufacturing" />
                <Label htmlFor="manufacturing" className="cursor-pointer text-sm font-normal">
                  Fertigung & Montage
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="inspection" />
                <Label htmlFor="inspection" className="cursor-pointer text-sm font-normal">
                  Inspektion & Wartung
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="healthcare" />
                <Label htmlFor="healthcare" className="cursor-pointer text-sm font-normal">
                  Gesundheitswesen
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Rating Filter */}
        <AccordionItem value="rating">
          <AccordionTrigger className="text-sm font-semibold">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              Bewertung
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-3">
            <Label className="text-xs">Mindestbewertung</Label>
            <RadioGroup value={minRating} onValueChange={setMinRating}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="4" id="rating-4" />
                <Label htmlFor="rating-4" className="cursor-pointer font-normal flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />4 Sterne & mehr
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3" id="rating-3" />
                <Label htmlFor="rating-3" className="cursor-pointer font-normal flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />3 Sterne & mehr
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="rating-all" />
                <Label htmlFor="rating-all" className="cursor-pointer font-normal">
                  Alle Bewertungen
                </Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6 flex flex-col gap-2">
        <Button onClick={handleApplyFilters} className="w-full bg-primary text-white hover:bg-primary/90">
          Filter anwenden
        </Button>
        <Button onClick={handleResetFilters} variant="outline" className="w-full bg-transparent">
          Zurücksetzen
        </Button>
      </div>
    </>
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 lg:py-8 lg:px-8">
        <div className="mb-6 lg:mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-foreground">Händler-Verzeichnis</h1>
          <p className="mt-1 lg:mt-2 text-sm lg:text-lg text-muted-foreground">
            Finden Sie verifizierte Partner für Service, Miete und Kauf in Ihrer Nähe
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row">
          <aside className="hidden lg:block w-full lg:w-72 lg:shrink-0">
            <div className="sticky top-24">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl">Händler filtern</CardTitle>
                </CardHeader>
                <CardContent>
                  <FilterContent />
                </CardContent>
              </Card>
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-4 lg:mb-6 space-y-3 lg:space-y-4">
              <div className="relative">
                <Sparkles className="absolute left-3 lg:left-4 top-1/2 h-4 w-4 lg:h-5 lg:w-5 -translate-y-1/2 text-primary pointer-events-none" />
                <span className="absolute left-9 lg:left-12 top-1/2 -translate-y-1/2 text-xs lg:text-sm font-semibold text-primary pointer-events-none">
                  Source AI
                </span>
                <Input
                  placeholder="Beschreiben Sie Ihre Anforderungen..."
                  className="h-12 lg:h-14 border-2 border-primary/30 bg-card pl-24 lg:pl-32 pr-10 lg:pr-12 text-sm lg:text-base transition-colors focus:border-primary focus-visible:ring-primary"
                />
                <Search className="absolute right-3 lg:right-4 top-1/2 h-4 w-4 lg:h-5 lg:w-5 -translate-y-1/2 text-primary" />
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 lg:gap-4">
                <div className="flex items-center gap-3 lg:gap-4">
                  <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px] p-6 overflow-y-auto">
                      <SheetHeader>
                        <SheetTitle>Händler filtern</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterContent />
                      </div>
                    </SheetContent>
                  </Sheet>

                  <p className="text-xs lg:text-sm text-muted-foreground">{sampleMerchants.length} Händler gefunden</p>

                  <Tabs value={viewMode} onValueChange={setViewMode} className="w-auto">
                    <TabsList className="bg-card border border-border h-9">
                      <TabsTrigger
                        value="list"
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs lg:text-sm"
                      >
                        <List className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                        <span className="hidden sm:inline">Liste</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="map"
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs lg:text-sm"
                      >
                        <Map className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                        <span className="hidden sm:inline">Karte</span>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[200px] lg:w-[240px] bg-card text-xs lg:text-sm h-9">
                    <SelectValue placeholder="Sortieren nach" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="best-match">Beste Treffer (KI Relevanz)</SelectItem>
                    <SelectItem value="rating-high">Bewertung (Hoch zu Niedrig)</SelectItem>
                    <SelectItem value="name-az">Name (A-Z)</SelectItem>
                    <SelectItem value="distance">Entfernung (Nah zu Fern)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {viewMode === "list" ? (
              <div className="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sampleMerchants.map((merchant) => (
                  <Card
                    key={merchant.id}
                    className="border-border bg-card hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={merchant.avatar || "/placeholder.svg"} alt={merchant.name} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {merchant.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{merchant.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {merchant.location}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-2">Spezialisierungen:</p>
                        <div className="flex flex-wrap gap-2">
                          {merchant.specializations.map((spec) => (
                            <Badge
                              key={spec}
                              variant="secondary"
                              className="bg-primary/20 text-primary border-primary/30"
                            >
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Bewertung:</p>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= Math.floor(merchant.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm">
                            {merchant.rating} ({merchant.reviewCount} Bewertungen)
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/merchant-directory/${merchant.id}`} className="w-full">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                          Profil & Angebote ansehen
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-border bg-card h-[400px] lg:h-[600px] flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Map className="h-12 w-12 lg:h-16 lg:w-16 text-muted mx-auto" />
                  <p className="text-muted-foreground text-base lg:text-lg">Platzhalter für interaktive Händlerkarte</p>
                  <p className="text-muted text-xs lg:text-sm">(z.B. react-leaflet)</p>
                </div>
              </Card>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
