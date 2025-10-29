"use client"

import * as React from "react"
import { Calendar } from "lucide-react"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import type { DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Send } from "lucide-react"

interface BookingRequestDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  bookingType: "rental" | "purchase"
  robotName: string
  customerName?: string
  customerCompany?: string
  customerEmail?: string
}

export function BookingRequestDialog({
  open,
  onOpenChange,
  bookingType,
  robotName,
  customerName = "Max Mustermann",
  customerCompany = "Mustermann GmbH",
  customerEmail = "max@mustermann.de",
}: BookingRequestDialogProps) {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>()
  const [quantity, setQuantity] = React.useState(1)
  const [message, setMessage] = React.useState("")
  const [customDelivery, setCustomDelivery] = React.useState(false)
  const [deliveryStreet, setDeliveryStreet] = React.useState("")
  const [deliveryPostalCode, setDeliveryPostalCode] = React.useState("")
  const [deliveryCity, setDeliveryCity] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate success
    setIsSubmitting(false)
    setSubmitStatus("success")

    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitStatus("idle")
      onOpenChange(false)
      // Reset form fields
      setDateRange(undefined)
      setQuantity(1)
      setMessage("")
      setCustomDelivery(false)
      setDeliveryStreet("")
      setDeliveryPostalCode("")
      setDeliveryCity("")
    }, 2000)
  }

  const isRental = bookingType === "rental"
  const dialogTitle = isRental ? `Mietanfrage für ${robotName}` : `Kaufanfrage für ${robotName}`

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">{dialogTitle}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Bitte füllen Sie die Details aus. Der Händler wird sich bei Ihnen melden.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Conditional Rental Date Range */}
          {isRental && (
            <div className="space-y-2">
              <Label htmlFor="date-range" className="text-foreground">
                Gewünschter Mietzeitraum *
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date-range"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-background border-border text-foreground hover:bg-accent",
                      !dateRange && "text-muted-foreground",
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {dateRange?.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, "dd.MM.yyyy", { locale: de })} -{" "}
                          {format(dateRange.to, "dd.MM.yyyy", { locale: de })}
                        </>
                      ) : (
                        format(dateRange.from, "dd.MM.yyyy", { locale: de })
                      )
                    ) : (
                      <span>Zeitraum auswählen</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                  <CalendarComponent
                    initialFocus
                    mode="range"
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                    className="bg-card"
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}

          {/* Quantity Field */}
          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-foreground">
              Stückzahl
            </Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
              className="bg-background border-border text-foreground"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Ihre Nachricht an den Händler (Optional)
            </Label>
            <Textarea
              id="message"
              placeholder="Spezifische Anforderungen, Fragen zur Lieferung..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-[100px]"
            />
          </div>

          {/* Contact Info Display */}
          <div className="rounded-lg bg-card border border-border p-4 space-y-1">
            <p className="text-sm font-medium text-foreground">Anfrage wird gesendet von:</p>
            <p className="text-sm text-muted-foreground">{customerName}</p>
            <p className="text-sm text-muted-foreground">{customerCompany}</p>
            <p className="text-sm text-muted-foreground">{customerEmail}</p>
          </div>

          {/* Delivery Address */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="custom-delivery"
                checked={customDelivery}
                onCheckedChange={(checked) => setCustomDelivery(checked as boolean)}
              />
              <Label htmlFor="custom-delivery" className="text-sm text-foreground cursor-pointer">
                Lieferadresse weicht von Firmenadresse ab?
              </Label>
            </div>

            {customDelivery && (
              <div className="space-y-3 pl-6">
                <div className="space-y-2">
                  <Label htmlFor="street" className="text-foreground">
                    Straße und Hausnummer
                  </Label>
                  <Input
                    id="street"
                    value={deliveryStreet}
                    onChange={(e) => setDeliveryStreet(e.target.value)}
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="postal-code" className="text-foreground">
                      PLZ
                    </Label>
                    <Input
                      id="postal-code"
                      value={deliveryPostalCode}
                      onChange={(e) => setDeliveryPostalCode(e.target.value)}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-foreground">
                      Stadt
                    </Label>
                    <Input
                      id="city"
                      value={deliveryCity}
                      onChange={(e) => setDeliveryCity(e.target.value)}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Success/Error Message */}
          {submitStatus !== "idle" && (
            <div
              className={cn(
                "rounded-lg p-4 text-sm",
                submitStatus === "success" && "bg-green-900/20 border border-green-800 text-green-400",
                submitStatus === "error" && "bg-red-900/20 border border-red-800 text-red-400",
              )}
            >
              {submitStatus === "success" && "Anfrage erfolgreich gesendet!"}
              {submitStatus === "error" && "Fehler beim Senden. Bitte versuchen Sie es erneut."}
            </div>
          )}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="bg-background border-border text-foreground hover:bg-accent"
            >
              Abbrechen
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || (isRental && !dateRange)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
