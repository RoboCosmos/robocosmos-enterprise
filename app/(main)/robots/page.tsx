"use client"

import { RobotCard, type Robot } from "@/components/robot-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Search,
  MapPin,
  Sparkles,
  List,
  Map,
  Euro,
  Briefcase,
  ClipboardList,
  Settings,
  ShieldCheck,
  TrendingUp,
  Building2,
  SlidersHorizontal,
} from "lucide-react"
import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"

const allRobots: Robot[] = [
  // Purchase robots
  {
    id: 1,
    manufacturer: "Kuka",
    model: "KR 210 R3100",
    category: "Manufacturing",
    status: "available",
    image: "/heavy-duty-robot-arm.jpg",
    payload: "210 kg",
    batteryLife: "N/A",
    tco: "22.00 €/h",
    purchasePrice: "160.000 €",
    priceType: "purchase",
  },
  {
    id: 2,
    manufacturer: "ABB",
    model: "IRB 6700",
    category: "Manufacturing",
    status: "available",
    image: "/industrial-robot-arm-factory.jpg",
    payload: "150 kg",
    batteryLife: "N/A",
    tco: "18.00 €/h",
    purchasePrice: "145.000 €",
    priceType: "purchase",
  },
  {
    id: 3,
    manufacturer: "Universal Robots",
    model: "UR10e",
    category: "Manufacturing",
    status: "available",
    image: "/collaborative-robot-arm.jpg",
    payload: "12.5 kg",
    batteryLife: "N/A",
    tco: "8.50 €/h",
    purchasePrice: "48.000 €",
    priceType: "purchase",
  },
  {
    id: 4,
    manufacturer: "Boston Dynamics",
    model: "Spot",
    category: "Inspection",
    status: "on-request",
    image: "/quadruped-robot-inspection.jpg",
    payload: "14 kg",
    batteryLife: "90 min",
    tco: "12.00 €/h",
    purchasePrice: "74.500 €",
    priceType: "purchase",
  },
  {
    id: 5,
    manufacturer: "Agility Robotics",
    model: "Digit V2",
    category: "Logistics",
    status: "on-request",
    image: "/humanoid-robot-warehouse.jpg",
    payload: "20 kg",
    batteryLife: "8h",
    tco: "14.50 €/h",
    purchasePrice: "250.000 €",
    priceType: "purchase",
  },
  {
    id: 6,
    manufacturer: "Fetch Robotics",
    model: "Freight 1500",
    category: "Logistics",
    status: "available",
    image: "/autonomous-mobile-robot.jpg",
    payload: "1500 kg",
    batteryLife: "9h",
    tco: "16.00 €/h",
    purchasePrice: "95.000 €",
    priceType: "purchase",
  },
  // Rental robots
  {
    id: 7,
    manufacturer: "Agility Robotics",
    model: "Digit V2",
    category: "Logistics",
    status: "available",
    image: "/humanoid-robot-warehouse.jpg",
    payload: "20 kg",
    batteryLife: "8h",
    tco: "14.50 €/h",
    rentalPrice: "850 € / Tag",
    priceType: "rental",
  },
  {
    id: 8,
    manufacturer: "Boston Dynamics",
    model: "Spot",
    category: "Inspection",
    status: "available",
    image: "/quadruped-robot-inspection.jpg",
    payload: "14 kg",
    batteryLife: "90 min",
    tco: "12.00 €/h",
    rentalPrice: "650 € / Tag",
    priceType: "rental",
  },
  {
    id: 9,
    manufacturer: "Universal Robots",
    model: "UR10e",
    category: "Manufacturing",
    status: "on-request",
    image: "/collaborative-robot-arm.jpg",
    payload: "12.5 kg",
    batteryLife: "N/A",
    tco: "8.50 €/h",
    rentalPrice: "450 € / Tag",
    priceType: "rental",
  },
  {
    id: 10,
    manufacturer: "ABB",
    model: "IRB 6700",
    category: "Manufacturing",
    status: "available",
    image: "/industrial-robot-arm-factory.jpg",
    payload: "150 kg",
    batteryLife: "N/A",
    tco: "18.00 €/h",
    rentalPrice: "1200 € / Tag",
    priceType: "rental",
  },
  {
    id: 11,
    manufacturer: "Fetch Robotics",
    model: "Freight 1500",
    category: "Logistics",
    status: "available",
    image: "/autonomous-mobile-robot.jpg",
    payload: "1500 kg",
    batteryLife: "9h",
    tco: "16.00 €/h",
    rentalPrice: "950 € / Tag",
    priceType: "rental",
  },
  {
    id: 12,
    manufacturer: "Kuka",
    model: "KR 210 R3100",
    category: "Manufacturing",
    status: "rented",
    image: "/heavy-duty-robot-arm.jpg",
    payload: "210 kg",
    batteryLife: "N/A",
    tco: "22.00 €/h",
    rentalPrice: "1500 € / Tag",
    priceType: "rental",
  },
]

export default function RobotsPage() {
  const [payloadRange, setPayloadRange] = useState([0, 500])
  const [reachRange, setReachRange] = useState([0, 5])
  const [batteryRange, setBatteryRange] = useState([0, 24])
  const [tcoRange, setTcoRange] = useState([0, 50])
  const [setupTimeRange, setSetupTimeRange] = useState([0, 100])
  const [warrantyRange, setWarrantyRange] = useState([0, 60])
  const [mtbfRange, setMtbfRange] = useState([0, 10000])
  const [purchasePriceRange, setPurchasePriceRange] = useState([0, 500000])
  const [rentalPriceRange, setRentalPriceRange] = useState([0, 5000])
  const [availabilityType, setAvailabilityType] = useState<"all" | "rental" | "purchase">("all")
  const [viewMode, setViewMode] = useState("list")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredRobots = useMemo(() => {
    if (availabilityType === "all") return allRobots
    return allRobots.filter((robot) => robot.priceType === availabilityType)
  }, [availabilityType])

  const FilterContent = () => (
    <Accordion type="multiple" className="w-full">
      {/* Accordion Item 1: Availability & Price */}
      <AccordionItem value="availability">
        <AccordionTrigger className="text-sm font-semibold">
          <div className="flex items-center gap-2">
            <Euro className="h-4 w-4 text-primary" />
            Verfügbarkeit & Preis
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-4">
          <RadioGroup
            value={availabilityType}
            onValueChange={(value) => setAvailabilityType(value as "all" | "rental" | "purchase")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all" className="cursor-pointer font-normal">
                Alle
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="rental" id="rental" />
              <Label htmlFor="rental" className="cursor-pointer font-normal">
                Miete (RaaS)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="purchase" id="purchase" />
              <Label htmlFor="purchase" className="cursor-pointer font-normal">
                Kauf
              </Label>
            </div>
          </RadioGroup>

          {availabilityType === "purchase" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs">Kaufpreis (€)</Label>
                <span className="text-xs text-muted-foreground">
                  {purchasePriceRange[0].toLocaleString()} - {purchasePriceRange[1].toLocaleString()} €
                </span>
              </div>
              <Slider
                value={purchasePriceRange}
                onValueChange={setPurchasePriceRange}
                max={500000}
                step={5000}
                className="w-full"
              />
            </div>
          )}

          {availabilityType === "rental" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs">Mietpreis (€/Tag)</Label>
                <span className="text-xs text-muted-foreground">
                  {rentalPriceRange[0]} - {rentalPriceRange[1]} €
                </span>
              </div>
              <Slider
                value={rentalPriceRange}
                onValueChange={setRentalPriceRange}
                max={5000}
                step={50}
                className="w-full"
              />
            </div>
          )}
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 2: Core Application Area */}
      <AccordionItem value="application">
        <AccordionTrigger className="text-sm font-semibold">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" />
            Haupt-Anwendungsgebiet
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-2">
          {[
            "Manufacturing & Assembly",
            "Logistics & Warehousing",
            "Inspection & Monitoring",
            "Healthcare & Laboratory",
            "Construction & Maintenance",
            "Security & Surveillance",
            "Research & Education",
            "Retail & Hospitality (B2B)",
          ].map((area) => (
            <div key={area} className="flex items-center space-x-2">
              <Checkbox id={area} />
              <Label htmlFor={area} className="cursor-pointer font-normal">
                {area}
              </Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 3: Specific Tasks / Use Cases */}
      <AccordionItem value="tasks">
        <AccordionTrigger className="text-sm font-semibold">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4 text-primary" />
            Spezifische Aufgaben
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          <p className="text-xs text-muted-foreground">Häufige Anwendungsbeispiele:</p>
          <div className="space-y-2">
            {[
              "Material Handling (General)",
              "Picking & Packing",
              "Palletizing / Depalletizing",
              "Machine Tending",
              "Quality Inspection (Visual)",
              "Data Collection / Scanning",
              "Welding / Gluing Support",
              "Lab Sample Handling",
              "Site Monitoring",
            ].map((task) => (
              <div key={task} className="flex items-center space-x-2">
                <Checkbox id={task} />
                <Label htmlFor={task} className="cursor-pointer text-sm font-normal">
                  {task}
                </Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 4: Key Technical Specs */}
      <AccordionItem value="technical">
        <AccordionTrigger className="text-sm font-semibold">
          <div className="flex items-center gap-2">
            <Settings className="h-4 w-4 text-primary" />
            Technische Spezifikationen
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Nutzlast (kg)</Label>
              <span className="text-xs text-muted-foreground">
                {payloadRange[0]} - {payloadRange[1]} kg
              </span>
            </div>
            <Slider value={payloadRange} onValueChange={setPayloadRange} max={500} step={10} className="w-full" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Reichweite (m)</Label>
              <span className="text-xs text-muted-foreground">
                {reachRange[0]} - {reachRange[1]} m
              </span>
            </div>
            <Slider value={reachRange} onValueChange={setReachRange} max={5} step={0.1} className="w-full" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Akkulaufzeit (h)</Label>
              <span className="text-xs text-muted-foreground">
                {batteryRange[0]} - {batteryRange[1]} h
              </span>
            </div>
            <Slider value={batteryRange} onValueChange={setBatteryRange} max={24} step={1} className="w-full" />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 5: Environment & Reliability */}
      <AccordionItem value="environment">
        <AccordionTrigger className="text-sm font-semibold">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Umgebung & Zuverlässigkeit
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs">IP-Schutzklasse</Label>
            {["IP54", "IP65", "IP67"].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox id={rating} />
                <Label htmlFor={rating} className="cursor-pointer text-sm font-normal">
                  {rating}
                </Label>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">MTBF (Stunden)</Label>
              <span className="text-xs text-muted-foreground">
                {mtbfRange[0]} - {mtbfRange[1]} h
              </span>
            </div>
            <Slider value={mtbfRange} onValueChange={setMtbfRange} max={10000} step={100} className="w-full" />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 6: Economics & Implementation */}
      <AccordionItem value="economics">
        <AccordionTrigger className="text-sm font-semibold">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Wirtschaftlichkeit & Implementierung
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">TCO pro Stunde (€)</Label>
              <span className="text-xs text-muted-foreground">
                {tcoRange[0]} - {tcoRange[1]} €
              </span>
            </div>
            <Slider value={tcoRange} onValueChange={setTcoRange} max={50} step={1} className="w-full" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Setup-Zeit (Stunden)</Label>
              <span className="text-xs text-muted-foreground">
                {setupTimeRange[0]} - {setupTimeRange[1]} h
              </span>
            </div>
            <Slider value={setupTimeRange} onValueChange={setSetupTimeRange} max={100} step={1} className="w-full" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Garantie (Monate)</Label>
              <span className="text-xs text-muted-foreground">
                {warrantyRange[0]} - {warrantyRange[1]} Monate
              </span>
            </div>
            <Slider value={warrantyRange} onValueChange={setWarrantyRange} max={60} step={6} className="w-full" />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 7: Manufacturer */}
      <AccordionItem value="manufacturer">
        <AccordionTrigger className="text-sm font-semibold">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-primary" />
            Hersteller
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-2">
          {["Agility Robotics", "Boston Dynamics", "Neura Robotics", "Tesla", "Unitree"].map((manufacturer) => (
            <div key={manufacturer} className="flex items-center space-x-2">
              <Checkbox id={manufacturer} />
              <Label htmlFor={manufacturer} className="cursor-pointer text-sm font-normal">
                {manufacturer}
              </Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Item 8: Location */}
      <AccordionItem value="location">
        <AccordionTrigger className="text-sm font-semibold">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            Standort
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="PLZ oder Stadt eingeben" className="bg-background pl-10" />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 lg:py-8 lg:px-8">
        <div className="mb-6 lg:mb-8 flex flex-col lg:flex-row items-start lg:items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold text-foreground">Roboter erwerben</h1>
            <p className="mt-1 lg:mt-2 text-sm lg:text-lg text-muted-foreground">
              Finden Sie den perfekten Roboter für Ihr Unternehmen - zum Kauf oder zur Miete
            </p>
          </div>

          <div className="flex items-center gap-2 lg:gap-3 rounded-lg border-2 border-primary/30 bg-card px-3 lg:px-4 py-2 lg:py-3 shadow-lg">
            <span
              className={cn(
                "text-xs lg:text-sm font-semibold transition-colors",
                availabilityType === "rental" ? "text-primary" : "text-muted-foreground",
              )}
            >
              RaaS
            </span>
            <Switch
              checked={availabilityType === "purchase"}
              onCheckedChange={(checked) => {
                setAvailabilityType(checked ? "purchase" : "rental")
              }}
              className="h-6 w-12 lg:h-7 lg:w-14 data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary"
            />
            <span
              className={cn(
                "text-xs lg:text-sm font-semibold transition-colors",
                availabilityType === "purchase" ? "text-primary" : "text-muted-foreground",
              )}
            >
              Kauf
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row">
          <aside className="hidden lg:block w-full lg:w-72 lg:shrink-0">
            <div className="sticky top-24">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl">Roboter Filter</CardTitle>
                </CardHeader>
                <CardContent>
                  <FilterContent />

                  <div className="mt-6 flex flex-col gap-2">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">Filter anwenden</Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Zurücksetzen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Right Main Content Area */}
          <main className="flex-1">
            {/* Top Bar */}
            <div className="mb-4 lg:mb-6 space-y-3 lg:space-y-4">
              {/* AI Search Field */}
              <div className="relative">
                <Sparkles className="absolute left-3 lg:left-4 top-1/2 h-4 w-4 lg:h-5 lg:w-5 -translate-y-1/2 text-primary pointer-events-none" />
                <span className="absolute left-9 lg:left-12 top-1/2 -translate-y-1/2 text-xs lg:text-sm font-semibold text-primary pointer-events-none">
                  Cosmos AI
                </span>
                <Input
                  placeholder="Beschreiben Sie Ihre Aufgabe..."
                  className="h-12 lg:h-14 border-2 border-primary/30 bg-card pl-24 lg:pl-32 pr-10 lg:pr-12 text-sm lg:text-base transition-colors focus:border-primary focus-visible:ring-primary"
                />
                <Search className="absolute right-3 lg:right-4 top-1/2 h-4 w-4 lg:h-5 lg:w-5 -translate-y-1/2 text-primary" />
              </div>

              {/* Mobile filter button and optimized view toggle */}
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
                        <SheetTitle>Roboter Filter</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterContent />
                        <div className="mt-6 flex flex-col gap-2">
                          <Button
                            className="w-full bg-primary text-white hover:bg-primary/90"
                            onClick={() => setMobileFiltersOpen(false)}
                          >
                            Filter anwenden
                          </Button>
                          <Button variant="outline" className="w-full bg-transparent">
                            Zurücksetzen
                          </Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>

                  <p className="text-xs lg:text-sm text-muted-foreground">{filteredRobots.length} Roboter gefunden</p>
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

                {/* Sort Dropdown */}
                <Select defaultValue="best-match">
                  <SelectTrigger className="w-full sm:w-[200px] lg:w-[240px] bg-card text-xs lg:text-sm h-9">
                    <SelectValue placeholder="Sortieren nach" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="best-match">Beste Treffer (KI Relevanz)</SelectItem>
                    <SelectItem value="price-low">Preis (Niedrig zu Hoch)</SelectItem>
                    <SelectItem value="price-high">Preis (Hoch zu Niedrig)</SelectItem>
                    <SelectItem value="payload-high">Nutzlast (Hoch zu Niedrig)</SelectItem>
                    <SelectItem value="payload-low">Nutzlast (Niedrig zu Hoch)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Conditional Rendering for List/Map View */}
            {viewMode === "list" ? (
              <div className="grid grid-cols-1 gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredRobots.map((robot) => (
                  <RobotCard key={robot.id} robot={robot} />
                ))}
              </div>
            ) : (
              // Map View - Placeholder
              <Card className="border-border bg-card h-[400px] lg:h-[600px] flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Map className="h-12 w-12 lg:h-16 lg:w-16 text-muted mx-auto" />
                  <p className="text-muted-foreground text-base lg:text-lg">Platzhalter für interaktive Roboterkarte</p>
                  <p className="text-muted text-xs lg:text-sm">(z.B. react-leaflet mit Standorten)</p>
                </div>
              </Card>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
