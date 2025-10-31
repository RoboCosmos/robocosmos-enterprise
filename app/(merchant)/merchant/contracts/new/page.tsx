"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { cn } from "@/lib/utils"

export default function NewOfferPage() {
  const [offerType, setOfferType] = useState<string>("miete")
  const [validUntil, setValidUntil] = useState<Date>()
  const [rentalFrom, setRentalFrom] = useState<Date>()
  const [rentalTo, setRentalTo] = useState<Date>()

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Neues Angebot erstellen</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Reagieren Sie auf eine Kundenanfrage oder erstellen Sie ein proaktives Angebot für einen Kunden.
        </p>
      </div>

      {/* Form Content */}
      <Card>
        <CardContent className="p-6 space-y-8">
          {/* Section: Basis-Informationen */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Basis-Informationen</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="customer">Kunde</Label>
                <Input id="customer" value="Mustermann GmbH" readOnly className="bg-muted" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="request">Bezieht sich auf Anfrage</Label>
                <Input id="request" value="#AN-12345" readOnly className="bg-muted" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="robot-model">Roboter-Modell auswählen</Label>
              <Select>
                <SelectTrigger id="robot-model">
                  <SelectValue placeholder="Wählen Sie ein Roboter-Modell" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spot">Boston Dynamics Spot</SelectItem>
                  <SelectItem value="ur10">Universal Robots UR10</SelectItem>
                  <SelectItem value="irb6700">ABB IRB 6700</SelectItem>
                  <SelectItem value="kuka">KUKA KR QUANTEC</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Angebotstyp</Label>
              <RadioGroup value={offerType} onValueChange={setOfferType} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="miete" id="miete" />
                  <Label htmlFor="miete" className="font-normal cursor-pointer">
                    Miete
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="kauf" id="kauf" />
                  <Label htmlFor="kauf" className="font-normal cursor-pointer">
                    Kauf
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Section: Konditionen */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Konditionen</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="price">Preis {offerType === "miete" ? "(pro Monat)" : "(Gesamtpreis)"}</Label>
                <Input id="price" type="number" placeholder="0,00" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Anzahl der Einheiten</Label>
                <Input id="quantity" type="number" placeholder="1" defaultValue="1" />
              </div>
            </div>

            {/* Conditional: Only show rental period if "Miete" is selected */}
            {offerType === "miete" && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Mietzeitraum (Von)</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !rentalFrom && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {rentalFrom ? format(rentalFrom, "PPP", { locale: de }) : "Datum wählen"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={rentalFrom} onSelect={setRentalFrom} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Mietzeitraum (Bis)</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !rentalTo && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {rentalTo ? format(rentalTo, "PPP", { locale: de }) : "Datum wählen"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={rentalTo} onSelect={setRentalTo} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="transport">Transportkosten (in €)</Label>
                <Input id="transport" type="number" placeholder="0,00" defaultValue="0" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="installation">Installations-Service (in €)</Label>
                <Input id="installation" type="number" placeholder="0,00" defaultValue="0" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="discount">Sonderrabatt (in % oder €)</Label>
              <Input id="discount" placeholder="z.B. 10% oder 500€" />
            </div>
          </div>

          {/* Section: Gültigkeit & Nachricht */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Gültigkeit & Nachricht</h2>

            <div className="space-y-2">
              <Label>Angebot gültig bis</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full md:w-[280px] justify-start text-left font-normal",
                      !validUntil && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {validUntil ? format(validUntil, "PPP", { locale: de }) : "Datum wählen"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={validUntil} onSelect={setValidUntil} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Persönliche Nachricht an den Kunden</Label>
              <Textarea id="message" placeholder="Fügen Sie eine persönliche Nachricht hinzu..." className="min-h-32" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Footer Navigation */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between">
        <Button variant="outline" className="w-full sm:w-auto bg-transparent">
          Als Entwurf speichern
        </Button>
        <Button className="w-full sm:w-auto">Angebot senden</Button>
      </div>
    </div>
  )
}
