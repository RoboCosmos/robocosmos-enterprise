"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type CalendarEvent = {
  id: string
  title: string
  startDate: Date
  endDate: Date
  type: "rental" | "maintenance"
}

export default function MerchantCalendar() {
  const [selectedRobot, setSelectedRobot] = useState<string>("")
  const [viewMode, setViewMode] = useState<"month" | "week">("month")
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 1)) // January 2024

  const events: CalendarEvent[] = [
    {
      id: "1",
      title: "Miete: Kunde Müller (ID: 456)",
      startDate: new Date(2024, 0, 8),
      endDate: new Date(2024, 0, 11),
      type: "rental",
    },
    {
      id: "2",
      title: "Wartung: Geplant",
      startDate: new Date(2024, 0, 15),
      endDate: new Date(2024, 0, 15),
      type: "maintenance",
    },
    {
      id: "3",
      title: "Miete: Kunde Schmidt (ID: 457)",
      startDate: new Date(2024, 0, 22),
      endDate: new Date(2024, 0, 25),
      type: "rental",
    },
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days: (Date | null)[] = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }

  const getEventsForDate = (date: Date | null) => {
    if (!date) return []
    return events.filter((event) => {
      const eventStart = new Date(event.startDate)
      const eventEnd = new Date(event.endDate)
      eventStart.setHours(0, 0, 0, 0)
      eventEnd.setHours(0, 0, 0, 0)
      const checkDate = new Date(date)
      checkDate.setHours(0, 0, 0, 0)
      return checkDate >= eventStart && checkDate <= eventEnd
    })
  }

  const days = getDaysInMonth(currentDate)
  const monthName = currentDate.toLocaleDateString("de-DE", { month: "long", year: "numeric" })

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Verfügbarkeitskalender</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1">
            Verwalten Sie die Verfügbarkeit Ihrer Roboter
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">Zeitraum blockieren</Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <label className="text-sm font-medium text-foreground whitespace-nowrap">
                Roboter/Inserat auswählen:
              </label>
              <Select value={selectedRobot} onValueChange={setSelectedRobot}>
                <SelectTrigger className="w-full md:w-[250px]">
                  <SelectValue placeholder="Alle Roboter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Roboter</SelectItem>
                  <SelectItem value="atlas-123">Atlas (SN: 123)</SelectItem>
                  <SelectItem value="ameca-456">Ameca (SN: 456)</SelectItem>
                  <SelectItem value="kuka-789">KUKA KR 10 (SN: 789)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Button
                variant={viewMode === "month" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("month")}
                className={viewMode === "month" ? "bg-primary" : ""}
              >
                Monat
              </Button>
              <Button
                variant={viewMode === "week" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("week")}
                className={viewMode === "week" ? "bg-primary" : ""}
              >
                Woche
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          {/* Calendar header with navigation */}
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" size="sm" onClick={goToPreviousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-semibold text-foreground capitalize">{monthName}</h2>
            <Button variant="outline" size="sm" onClick={goToNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Day headers */}
            {["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}

            {/* Calendar days */}
            {days.map((day, index) => {
              const dayEvents = getEventsForDate(day)
              const isToday =
                day &&
                day.getDate() === new Date().getDate() &&
                day.getMonth() === new Date().getMonth() &&
                day.getFullYear() === new Date().getFullYear()

              return (
                <div
                  key={index}
                  className={cn(
                    "min-h-[100px] border border-border rounded-md p-2 bg-card",
                    !day && "bg-muted/30",
                    isToday && "ring-2 ring-primary",
                  )}
                >
                  {day && (
                    <>
                      <div className="text-sm font-medium text-foreground mb-1">{day.getDate()}</div>
                      <div className="space-y-1">
                        {dayEvents.map((event) => (
                          <div
                            key={event.id}
                            className={cn(
                              "text-xs px-2 py-1 rounded text-white truncate",
                              event.type === "rental" && "bg-blue-600",
                              event.type === "maintenance" && "bg-orange-600",
                            )}
                            title={event.title}
                          >
                            {event.title}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <div className="flex gap-4 mt-6 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-600"></div>
              <span className="text-sm text-muted-foreground">Miete</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-orange-600"></div>
              <span className="text-sm text-muted-foreground">Wartung</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
