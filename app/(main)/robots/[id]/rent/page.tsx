"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import type { DateRange } from "react-day-picker"
import { Bot, Send, Building2, Mail, Phone, User, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { DatePicker } from "@/components/ui/date-picker"

export default function RentalRequestPage() {
  const params = useParams()
  const robotId = params.id as string

  // Form state
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [message, setMessage] = useState("")
  const [useDifferentAddress, setUseDifferentAddress] = useState(false)
  const [deliveryStreet, setDeliveryStreet] = useState("")
  const [deliveryZip, setDeliveryZip] = useState("")
  const [deliveryCity, setDeliveryCity] = useState("")
  const [deliveryCountry, setDeliveryCountry] = useState("Deutschland")
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  // Placeholder data - would come from API/database
  const robotData = {
    id: robotId,
    model: "Atlas V3",
    manufacturer: "Boston Dynamics",
    image: "/futuristic-helper-robot.png",
    merchantName: "RoboTech Solutions GmbH",
  }

  const userData = {
    firstName: "Max",
    lastName: "Mustermann",
    company: "Mustermann Logistik GmbH",
    email: "max.mustermann@example.com",
    phone: "+49 123 456789",
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!dateRange?.from || !dateRange?.to) {
      setShowError(true)
      setShowSuccess(false)
      return
    }

    // TODO: Implement actual API call to submit rental request
    console.log("[v0] Submitting rental request:", {
      robotId,
      dateRange,
      message,
      useDifferentAddress,
      deliveryAddress: useDifferentAddress ? { deliveryStreet, deliveryZip, deliveryCity, deliveryCountry } : null,
    })

    // Simulate success
    setShowSuccess(true)
    setShowError(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <Link
          href={`/robots/${robotId}`}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Roboter-Detailseite
        </Link>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Bot className="h-6 w-6 text-primary" />
              Mietanfrage für: {robotData.model}
            </CardTitle>
            <CardDescription>
              Bitte geben Sie den gewünschten Zeitraum und Ihre Anforderungen an. Der Händler wird die Verfügbarkeit
              prüfen und sich bei Ihnen melden.
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              {/* Section 1: Requested Robot */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Angefragter Roboter</Label>
                <Link
                  href={`/robots/${robotId}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                >
                  <img
                    src={robotData.image || "/placeholder.svg"}
                    alt={robotData.model}
                    className="h-20 w-20 rounded-md object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg">{robotData.model}</p>
                    <p className="text-sm text-muted-foreground">von {robotData.merchantName}</p>
                  </div>
                </Link>
              </div>

              {/* Section 2: Rental Period */}
              <div className="space-y-2">
                <Label htmlFor="date-range" className="text-base font-semibold">
                  Gewünschter Mietzeitraum <span className="text-red-500">*</span>
                </Label>
                <DatePicker date={dateRange} onDateChange={setDateRange} />
                <p className="text-sm text-muted-foreground">Wählen Sie Start- und Enddatum für die Miete</p>
              </div>

              {/* Section 3: Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-semibold">
                  Nachricht an den Händler (Optional)
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Bitte beschreiben Sie kurz Ihren Anwendungsfall oder stellen Sie spezifische Fragen (z.B. bezüglich Lieferung, Versicherung, Schulung)..."
                  className="min-h-[100px] bg-background border-border"
                />
              </div>

              {/* Section 4: Contact Information */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Ihre Kontaktdaten (für diese Anfrage)</Label>
                <div className="p-4 rounded-lg bg-card border border-border space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Name:</span>
                    <span>
                      {userData.firstName} {userData.lastName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Firma:</span>
                    <span>{userData.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">E-Mail:</span>
                    <span>{userData.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Telefon:</span>
                    <span>{userData.phone}</span>
                  </div>
                </div>
                <Link
                  href="/customer/settings"
                  className="text-sm text-primary hover:text-primary/90 inline-block mt-2"
                >
                  Kontaktdaten ändern?
                </Link>
              </div>

              {/* Section 5: Delivery Address */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="use-different-address"
                    checked={useDifferentAddress}
                    onCheckedChange={(checked) => setUseDifferentAddress(checked as boolean)}
                  />
                  <Label htmlFor="use-different-address" className="text-base font-semibold cursor-pointer">
                    Abweichende Lieferadresse angeben?
                  </Label>
                </div>

                {useDifferentAddress && (
                  <div className="space-y-4 pl-6 border-l-2 border-primary">
                    <div className="space-y-2">
                      <Label htmlFor="delivery-street">Straße & Hausnummer</Label>
                      <Input
                        id="delivery-street"
                        value={deliveryStreet}
                        onChange={(e) => setDeliveryStreet(e.target.value)}
                        placeholder="Musterstraße 123"
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="delivery-zip">PLZ</Label>
                        <Input
                          id="delivery-zip"
                          value={deliveryZip}
                          onChange={(e) => setDeliveryZip(e.target.value)}
                          placeholder="12345"
                          className="bg-background border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="delivery-city">Stadt</Label>
                        <Input
                          id="delivery-city"
                          value={deliveryCity}
                          onChange={(e) => setDeliveryCity(e.target.value)}
                          placeholder="Berlin"
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="delivery-country">Land</Label>
                      <Input
                        id="delivery-country"
                        value={deliveryCountry}
                        onChange={(e) => setDeliveryCountry(e.target.value)}
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Feedback Area */}
              {showSuccess && (
                <Alert className="bg-green-900/20 border-green-500">
                  <AlertDescription className="text-green-400">
                    Anfrage erfolgreich gesendet! Der Händler wird sich in Kürze bei Ihnen melden.
                  </AlertDescription>
                </Alert>
              )}

              {showError && (
                <Alert className="bg-red-900/20 border-red-500">
                  <AlertDescription className="text-red-400">
                    Bitte wählen Sie einen gültigen Mietzeitraum aus.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => window.history.back()}>
                Abbrechen
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" />
                Mietanfrage jetzt senden
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
