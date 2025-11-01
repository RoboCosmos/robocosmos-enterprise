"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Package,
  Battery,
  TrendingDown,
  Calendar,
  ShoppingCart,
  MapPin,
  Mail,
  FileDown,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookingRequestDialog } from "@/components/booking-request-dialog"

const sampleRobots = {
  "1": {
    id: "1",
    name: "ABB IRB 6700",
    manufacturer: "ABB Robotics",
    category: "Industrieroboter",
    image: "/industrial-robot-arm.jpg",
    status: "Verfügbar" as const,
    payload: "150 kg",
    battery: "24h",
    tco: "€ 2.500/Monat",
    rentalPrice: "€ 2.500",
    rentalPeriod: "pro Monat",
    purchasePrice: "€ 85.000",
    description:
      "Der ABB IRB 6700 ist ein leistungsstarker Industrieroboter für schwere Lasten. Mit einer Traglast von bis zu 150 kg und einer Reichweite von 3,2 m eignet er sich perfekt für Schweißarbeiten, Materialhandling und Montageaufgaben in der Automobilindustrie.",
    specs: {
      Reichweite: "3,2 m",
      Traglast: "150 kg",
      Wiederholgenauigkeit: "±0,05 mm",
      Achsen: "6",
      Schutzklasse: "IP67",
      Gewicht: "1.200 kg",
      Energieverbrauch: "5,5 kW",
      Steuerung: "IRC5",
    },
    datasheetUrl: "/datasheets/abb-irb-6700.pdf",
  },
  "2": {
    id: "2",
    name: "KUKA KR QUANTEC",
    manufacturer: "KUKA",
    category: "Industrieroboter",
    image: "/kuka-robot.jpg",
    status: "Verfügbar" as const,
    payload: "120 kg",
    battery: "24h",
    tco: "€ 2.200/Monat",
    rentalPrice: "€ 2.200",
    rentalPeriod: "pro Monat",
    purchasePrice: "€ 75.000",
    description:
      "Der KUKA KR QUANTEC bietet höchste Präzision und Geschwindigkeit für anspruchsvolle Produktionsumgebungen. Ideal für Handling, Palettierung und Verpackungsaufgaben mit maximaler Effizienz.",
    specs: {
      Reichweite: "2,8 m",
      Traglast: "120 kg",
      Wiederholgenauigkeit: "±0,06 mm",
      Achsen: "6",
      Schutzklasse: "IP65",
      Gewicht: "980 kg",
      Energieverbrauch: "4,8 kW",
      Steuerung: "KR C4",
    },
    datasheetUrl: "/datasheets/kuka-kr-quantec.pdf",
  },
}

export default function RobotDetailPage({ params }: { params: { id: string } }) {
  const [rentalDialogOpen, setRentalDialogOpen] = React.useState(false)
  const [purchaseDialogOpen, setPurchaseDialogOpen] = React.useState(false)

  const robot = sampleRobots[params.id as keyof typeof sampleRobots] || sampleRobots["1"]

  const statusColors = {
    Verfügbar: "bg-green-500/10 text-green-500 border-green-500/20",
    Vermietet: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    Gewartet: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  }

  const thumbnails = [robot.image, robot.image, robot.image, robot.image]

  const handleDatasheetDownload = () => {
    // In production, this would trigger an actual download
    window.open(robot.datasheetUrl, "_blank")
  }

  const merchantRating = {
    average: 4.8,
    count: 127,
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-4 w-4 text-yellow-500" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            </div>
          </div>,
        )
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-muted-foreground/30" />)
      }
    }
    return stars
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <Link
        href="/robots"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Zurück zur Übersicht
      </Link>

      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-2">{robot.manufacturer}</p>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">{robot.name}</h1>
        <div className="flex flex-wrap gap-2">
          <Badge className={statusColors[robot.status]}>{robot.status}</Badge>
          <Badge variant="outline" className="bg-card border-border text-foreground">
            {robot.category}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* LEFT COLUMN - Media Gallery (2/3 width on large screens) */}
        <div className="lg:col-span-2 space-y-4">
          {/* Main Image */}
          <Card className="bg-card border-border overflow-hidden">
            <div className="relative aspect-video">
              <Image src={robot.image || "/placeholder.svg"} alt={robot.name} fill className="object-cover" />
            </div>
          </Card>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-3">
            {thumbnails.map((thumb, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-colors cursor-pointer"
              >
                <Image
                  src={thumb || "/placeholder.svg"}
                  alt={`${robot.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - Actions & Core Info (1/3 width on large screens) */}
        <div className="space-y-6">
          {/* Action Card ("Buy Box") */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              {/* Rental Option */}
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Miete</p>
                    <p className="text-2xl font-bold text-foreground">
                      {robot.rentalPrice}
                      <span className="text-sm font-normal text-muted-foreground ml-2">{robot.rentalPeriod}</span>
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => setRentalDialogOpen(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Mietanfrage senden
                </Button>
              </div>

              <Separator />

              {/* Purchase Option */}
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Kauf</p>
                    <p className="text-2xl font-bold text-foreground">{robot.purchasePrice}</p>
                  </div>
                </div>
                <Button
                  onClick={() => setPurchaseDialogOpen(true)}
                  variant="outline"
                  className="w-full bg-background border-border text-foreground hover:bg-accent"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Kaufanfrage stellen
                </Button>
              </div>

              <Separator />

              {/* Additional Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <span className="font-medium text-foreground mr-2">Typ:</span>
                  Miete & Kauf
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span className="font-medium text-foreground mr-2">Standort:</span>
                  München, Deutschland
                </div>
              </div>

              <Button variant="ghost" className="w-full text-foreground hover:text-foreground hover:bg-accent">
                Zur Merkliste
              </Button>
            </CardContent>
          </Card>

          {/* Provider Card */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Anbieter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg" alt="RoboTech GmbH" />
                  <AvatarFallback className="bg-primary text-primary-foreground">RT</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-foreground">RoboTech GmbH</p>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 text-xs mt-1">
                    Verifizierter Händler
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-accent/50 border border-border">
                <div className="flex items-center gap-1">{renderStars(merchantRating.average)}</div>
                <span className="text-sm font-semibold text-foreground">{merchantRating.average.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">({merchantRating.count} Bewertungen)</span>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="mr-2 h-4 w-4" />
                Händler kontaktieren
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-12" />

      <Tabs defaultValue="description" className="space-y-6">
        <TabsList className="bg-card border border-border">
          <TabsTrigger
            value="description"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Beschreibung
          </TabsTrigger>
          <TabsTrigger
            value="technical"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Technische Daten
          </TabsTrigger>
          <TabsTrigger
            value="economic"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Wirtschaftliche Daten
          </TabsTrigger>
        </TabsList>

        {/* Description Tab */}
        <TabsContent value="description" className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Produktbeschreibung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{robot.description}</p>
            </CardContent>
          </Card>

          {/* Quick Specs in Description Tab */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Nutzlast</p>
                  <p className="text-lg font-semibold text-foreground">{robot.payload}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Battery className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Akku</p>
                  <p className="text-lg font-semibold text-foreground">{robot.battery}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <TrendingDown className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">TCO</p>
                  <p className="text-lg font-semibold text-foreground">{robot.tco}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Technical Data Tab */}
        <TabsContent value="technical">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-foreground">Technische Spezifikationen</CardTitle>
              <Button
                onClick={handleDatasheetDownload}
                variant="outline"
                className="bg-background border-border text-foreground hover:bg-accent"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Datenblatt herunterladen
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(robot.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center p-4 rounded-lg bg-accent border border-border"
                  >
                    <span className="text-sm text-muted-foreground">{key}</span>
                    <span className="text-sm font-medium text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Economic Data Tab */}
        <TabsContent value="economic">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Wirtschaftliche Daten</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-lg bg-accent border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Mietpreis pro Monat</p>
                  <p className="text-2xl font-bold text-foreground">{robot.rentalPrice}</p>
                </div>
                <div className="p-4 rounded-lg bg-accent border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Kaufpreis</p>
                  <p className="text-2xl font-bold text-foreground">{robot.purchasePrice}</p>
                </div>
                <div className="p-4 rounded-lg bg-accent border border-border">
                  <p className="text-sm text-muted-foreground mb-1">TCO pro Monat</p>
                  <p className="text-2xl font-bold text-foreground">{robot.tco}</p>
                </div>
                <div className="p-4 rounded-lg bg-accent border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Energieverbrauch</p>
                  <p className="text-2xl font-bold text-foreground">{robot.specs.Energieverbrauch}</p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Hinweis:</span> Die angegebenen Preise verstehen sich
                  zzgl. MwSt.
                </p>
                <p>
                  Die TCO-Berechnung basiert auf durchschnittlichen Betriebskosten und kann je nach Einsatzszenario
                  variieren.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Booking Dialogs */}
      <BookingRequestDialog
        open={rentalDialogOpen}
        onOpenChange={setRentalDialogOpen}
        bookingType="rental"
        robotName={robot.name}
      />

      <BookingRequestDialog
        open={purchaseDialogOpen}
        onOpenChange={setPurchaseDialogOpen}
        bookingType="purchase"
        robotName={robot.name}
      />
    </div>
  )
}
