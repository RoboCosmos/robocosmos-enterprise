import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RobotCard, type Robot } from "@/components/robot-card"
import { MapPin, ShieldCheck, Star, MessageCircle, Bot, Info, Search } from "lucide-react"

// Sample merchant data
const merchantData = {
  id: "1",
  name: "RoboTrade GmbH",
  location: "Hamburg, Deutschland",
  avatar: "/placeholder.svg?height=200&width=200",
  specializations: ["Logistik", "RaaS-Modelle"],
  rating: 4.8,
  reviewCount: 22,
  description:
    "RoboTrade GmbH ist ein führender Anbieter von Robotik-Lösungen für die Logistikbranche. Mit über 10 Jahren Erfahrung bieten wir maßgeschneiderte Automatisierungslösungen für Unternehmen jeder Größe. Unser Fokus liegt auf flexiblen RaaS-Modellen, die es unseren Kunden ermöglichen, ohne hohe Anfangsinvestitionen zu skalieren.",
  officialName: "RoboTrade GmbH",
  vatId: "DE123456789",
  website: "robotrade.de",
}

// Sample robots from this merchant
const merchantRobots: Robot[] = [
  {
    id: 1,
    manufacturer: "Universal Robots",
    model: "UR10e",
    category: "Logistik",
    status: "available",
    image: "/industrial-robot-arm.jpg",
    payload: "12.5 kg",
    batteryLife: "8h",
    tco: "€45k/Jahr",
    rentalPrice: "€120",
    priceType: "rental",
  },
  {
    id: 2,
    manufacturer: "ABB",
    model: "IRB 1200",
    category: "Fertigung",
    status: "available",
    image: "/robotic-arm-manufacturing.jpg",
    payload: "7 kg",
    batteryLife: "10h",
    tco: "€38k/Jahr",
    purchasePrice: "€28.500",
    priceType: "purchase",
  },
  {
    id: 3,
    manufacturer: "KUKA",
    model: "KR AGILUS",
    category: "Logistik",
    status: "on-request",
    image: "/kuka-robot.jpg",
    payload: "10 kg",
    batteryLife: "12h",
    tco: "€42k/Jahr",
    rentalPrice: "€95",
    priceType: "rental",
  },
]

// Sample reviews
const reviews = [
  {
    id: 1,
    customerName: "Kunde AG",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    comment: "Hervorragender Support und schnelle Lieferung des 'Atlas V3'. Sehr zu empfehlen.",
  },
  {
    id: 2,
    customerName: "Logistik Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    comment: "Gute Beratung, aber die Einrichtungszeit war länger als erwartet. Sonst alles top.",
  },
]

export default function MerchantDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl p-8 space-y-8">
        {/* Merchant Header Section */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left: Avatar */}
              <div className="flex-shrink-0">
                <Avatar className="h-32 w-32 border-4 border-gray-700">
                  <AvatarImage src={merchantData.avatar || "/placeholder.svg"} alt={merchantData.name} />
                  <AvatarFallback className="bg-gray-700 text-white text-3xl">
                    {merchantData.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Right: Info Block */}
              <div className="flex-grow space-y-4">
                {/* Company Name */}
                <h1 className="text-4xl font-bold text-white">{merchantData.name}</h1>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>{merchantData.location}</span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-600 hover:bg-blue-600 text-white">
                    <ShieldCheck className="h-4 w-4 mr-1" />
                    Verifizierter Händler
                  </Badge>
                  {merchantData.specializations.map((spec) => (
                    <Badge key={spec} variant="secondary" className="bg-gray-700 text-gray-300">
                      Spezialist: {spec}
                    </Badge>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(merchantData.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-300">
                    {merchantData.rating} ({merchantData.reviewCount} Bewertungen)
                  </span>
                </div>

                {/* Action Button */}
                <div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Händler kontaktieren
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Tabs Section */}
        <Tabs defaultValue="listings" className="w-full">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="listings" className="data-[state=active]:bg-blue-600">
              <Bot className="h-4 w-4 mr-2" />
              Verfügbare Roboter
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-blue-600">
              <Info className="h-4 w-4 mr-2" />
              Über diesen Händler
            </TabsTrigger>
            <TabsTrigger value="reviews" className="data-[state=active]:bg-blue-600">
              <Star className="h-4 w-4 mr-2" />
              Bewertungen
            </TabsTrigger>
          </TabsList>

          {/* Tab A: Verfügbare Roboter */}
          <TabsContent value="listings" className="space-y-6 mt-6">
            {/* Filter Bar */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search Input */}
                  <div className="flex-grow relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Inserate dieses Händlers durchsuchen..."
                      className="pl-10 bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                    />
                  </div>

                  {/* Type Select */}
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full md:w-[180px] bg-gray-900 border-gray-700 text-white">
                      <SelectValue placeholder="Typ" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      <SelectItem value="all">Alle</SelectItem>
                      <SelectItem value="rental">Miete</SelectItem>
                      <SelectItem value="purchase">Kauf</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Category Select */}
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full md:w-[180px] bg-gray-900 border-gray-700 text-white">
                      <SelectValue placeholder="Kategorie" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      <SelectItem value="all">Alle</SelectItem>
                      <SelectItem value="logistics">Logistik</SelectItem>
                      <SelectItem value="manufacturing">Fertigung</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Robot Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {merchantRobots.map((robot) => (
                <RobotCard key={robot.id} robot={robot} />
              ))}
            </div>
          </TabsContent>

          {/* Tab B: Über diesen Händler */}
          <TabsContent value="profile" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Column 1: Info */}
              <div className="space-y-6">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white">Über {merchantData.name}</h3>
                    <p className="text-gray-300 leading-relaxed">{merchantData.description}</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white">Firmen-Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-gray-400">Offizieller Name:</span>
                        <span className="text-white font-medium">{merchantData.officialName}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-gray-400">USt-IdNr.:</span>
                        <span className="text-white font-medium">{merchantData.vatId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Website:</span>
                        <a
                          href={`https://${merchantData.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-400 font-medium"
                        >
                          {merchantData.website}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Column 2: Map/Location */}
              <div className="space-y-6">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white">Standort</h3>
                    {/* Interactive Map Placeholder */}
                    <Card className="bg-gray-700 border-gray-600 h-[400px] flex items-center justify-center">
                      <div className="text-center p-6 space-y-2">
                        <MapPin className="h-12 w-12 text-blue-500 mx-auto" />
                        <p className="text-gray-300">Platzhalter für interaktive Händlerkarte</p>
                        <p className="text-sm text-gray-400">(z.B. react-leaflet) - Zeigt: {merchantData.location}</p>
                      </div>
                    </Card>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Tab C: Bewertungen */}
          <TabsContent value="reviews" className="mt-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-bold text-white">Bewertungen für {merchantData.name}</h2>

                {/* Reviews List */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-700 pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        {/* Avatar */}
                        <Avatar className="h-12 w-12 border-2 border-gray-700">
                          <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.customerName} />
                          <AvatarFallback className="bg-gray-700 text-white">
                            {review.customerName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>

                        {/* Review Content */}
                        <div className="flex-grow space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-white">{review.customerName}</h4>
                            {/* Star Rating */}
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
