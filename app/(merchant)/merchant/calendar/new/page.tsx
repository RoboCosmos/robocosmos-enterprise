"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function NewCalendarBlock() {
  const [selectedRobot, setSelectedRobot] = useState<string>("")
  const [blockReason, setBlockReason] = useState<string>("")
  const [fromDate, setFromDate] = useState<Date>()
  const [toDate, setToDate] = useState<Date>()
  const [note, setNote] = useState<string>("")

  const handleSave = () => {
    // TODO: Implement save logic
    console.log("[v0] Saving calendar block:", {
      robot: selectedRobot,
      reason: blockReason,
      fromDate,
      toDate,
      note,
    })
  }

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Neuen Zeitraum festlegen</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Blockieren Sie einen Zeitraum für Wartung, Reparaturen oder exklusive Buchungen. Dieser Zeitraum ist dann
          nicht mehr für Mieten verfügbar.
        </p>
      </div>

      {/* Form Content */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Roboter/Inserat auswählen */}
            <div className="space-y-2">
              <Label htmlFor="robot-select">Roboter/Inserat auswählen</Label>
              <p className="text-sm text-muted-foreground">Welcher Roboter soll blockiert werden?</p>
              <Select value={selectedRobot} onValueChange={setSelectedRobot}>
                <SelectTrigger id="robot-select">
                  <SelectValue placeholder="Roboter auswählen..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="atlas-123">Atlas (SN: 123)</SelectItem>
                  <SelectItem value="ameca-456">Ameca (SN: 456)</SelectItem>
                  <SelectItem value="kuka-789">KUKA KR 10 (SN: 789)</SelectItem>
                  <SelectItem value="spot-101">Boston Dynamics Spot (SN: 101)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Zeitraum (Von - Bis) */}
            <div className="space-y-2">
              <Label>Zeitraum (Von - Bis)</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Von Datum */}
                <div className="space-y-2">
                  <Label htmlFor="from-date" className="text-sm text-muted-foreground">
                    Von
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="from-date"
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !fromDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {fromDate ? format(fromDate, "PPP", { locale: de }) : "Startdatum wählen"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={fromDate} onSelect={setFromDate} locale={de} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Bis Datum */}
                <div className="space-y-2">
                  <Label htmlFor="to-date" className="text-sm text-muted-foreground">
                    Bis
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="to-date"
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !toDate && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {toDate ? format(toDate, "PPP", { locale: de }) : "Enddatum wählen"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={toDate}
                        onSelect={setToDate}
                        locale={de}
                        disabled={(date) => (fromDate ? date < fromDate : false)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {/* Grund der Blockierung */}
            <div className="space-y-2">
              <Label htmlFor="block-reason">Grund der Blockierung</Label>
              <Select value={blockReason} onValueChange={setBlockReason}>
                <SelectTrigger id="block-reason">
                  <SelectValue placeholder="Grund auswählen..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maintenance">Wartung</SelectItem>
                  <SelectItem value="repair">Reparatur</SelectItem>
                  <SelectItem value="reserved">Reserviert</SelectItem>
                  <SelectItem value="unavailable">Nicht verfügbar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Interne Notiz */}
            <div className="space-y-2">
              <Label htmlFor="note">Interne Notiz (optional, nur für Sie sichtbar)</Label>
              <Textarea
                id="note"
                placeholder="Fügen Sie hier zusätzliche Informationen hinzu..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={4}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Footer Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-border">
        <Button variant="outline" asChild>
          <Link href="/merchant/calendar">Abbrechen</Link>
        </Button>
        <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
          Zeitraum speichern
        </Button>
      </div>
    </div>
  )
}
