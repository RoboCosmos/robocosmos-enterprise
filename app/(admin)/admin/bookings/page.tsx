"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Eye, MessageCircle, Edit, CreditCard, Ban, Calendar } from "lucide-react"

export default function BookingsManagementPage() {
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [merchantFilter, setMerchantFilter] = useState("all")

  const bookings = [
    {
      id: "#B1001",
      customer: "Kunde AG",
      merchant: "RoboTrade GmbH",
      robot: "Atlas V3",
      type: "Miete",
      period: "01.11.25 - 30.11.25",
      price: "€15.000",
      status: "active",
      statusLabel: "Aktiv",
    },
    {
      id: "#B1002",
      customer: "Bau GmbH",
      merchant: "Händler Müller",
      robot: "Kuka KR 210",
      type: "Kauf",
      period: "--",
      price: "€110.000",
      status: "completed",
      statusLabel: "Abgeschlossen",
    },
    {
      id: "#B1003",
      customer: "Logistik Inc.",
      merchant: "RoboTrade GmbH",
      robot: "Digit V2",
      type: "Miete",
      period: "01.12.25 - 15.12.25",
      price: "€8.000",
      status: "pending",
      statusLabel: "Angefragt",
    },
  ]

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "active":
        return "default"
      case "completed":
        return "secondary"
      case "pending":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-foreground">Buchungsverwaltung</h1>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Suche nach Buchungs-ID, Kunde, Händler..." className="pl-10" />
              </div>
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle</SelectItem>
                <SelectItem value="requested">Angefragt</SelectItem>
                <SelectItem value="confirmed">Bestätigt</SelectItem>
                <SelectItem value="active">Aktiv</SelectItem>
                <SelectItem value="completed">Abgeschlossen</SelectItem>
                <SelectItem value="cancelled">Storniert</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Typ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle</SelectItem>
                <SelectItem value="rental">Miete</SelectItem>
                <SelectItem value="purchase">Kauf</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input type="date" placeholder="Zeitraum" className="pl-10" />
            </div>
          </div>

          <div className="mt-4">
            <Select value={merchantFilter} onValueChange={setMerchantFilter}>
              <SelectTrigger className="max-w-xs">
                <SelectValue placeholder="Händler" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Händler</SelectItem>
                <SelectItem value="merchant-a">Händler A</SelectItem>
                <SelectItem value="merchant-b">Händler B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Buchungs-ID</TableHead>
                  <TableHead>Kunde</TableHead>
                  <TableHead>Händler</TableHead>
                  <TableHead>Roboter</TableHead>
                  <TableHead>Typ</TableHead>
                  <TableHead>Zeitraum (Miete)</TableHead>
                  <TableHead>Preis</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Aktionen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium text-foreground">{booking.id}</TableCell>
                    <TableCell className="text-muted-foreground">{booking.customer}</TableCell>
                    <TableCell className="text-muted-foreground">{booking.merchant}</TableCell>
                    <TableCell className="text-muted-foreground">{booking.robot}</TableCell>
                    <TableCell className="text-muted-foreground">{booking.type}</TableCell>
                    <TableCell className="text-muted-foreground">{booking.period}</TableCell>
                    <TableCell className="text-muted-foreground font-semibold">{booking.price}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadgeVariant(booking.status)}>{booking.statusLabel}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            Buchungsdetails ansehen
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Kommunikation anzeigen
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Status ändern...
                          </DropdownMenuItem>
                          {booking.type === "Kauf" && (
                            <DropdownMenuItem>
                              <CreditCard className="mr-2 h-4 w-4" />
                              Zahlungsdetails anzeigen
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          {booking.status !== "completed" && (
                            <DropdownMenuItem className="text-destructive">
                              <Ban className="mr-2 h-4 w-4" />
                              Buchung stornieren
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
