"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, MoreHorizontal, Eye, MessageCircle, CheckCircle, XCircle } from "lucide-react"

export default function MerchantRequests() {
  const requests = [
    {
      id: "REQ-2025-001",
      customer: "Kunde AG",
      customerInitials: "KA",
      robot: "Atlas V3",
      type: "Miete",
      startDate: "01.12.25",
      endDate: "15.12.25",
      price: "€8.000",
      received: "Heute",
      status: "Angefragt",
    },
    {
      id: "REQ-2025-002",
      customer: "Bau GmbH",
      customerInitials: "BG",
      robot: "Kuka KR 210",
      type: "Kauf",
      startDate: null,
      endDate: null,
      price: "€110.000",
      received: "Gestern",
      status: "Angefragt",
    },
    {
      id: "REQ-2025-003",
      customer: "Logistik Pro",
      customerInitials: "LP",
      robot: "ABB IRB 6700",
      type: "Miete",
      startDate: "10.12.25",
      endDate: "31.12.25",
      price: "€12.500",
      received: "Vor 2 Tagen",
      status: "Angefragt",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-100">Buchungsanfragen</h1>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Suche nach Kunde, Roboter, ID..."
                className="pl-10 bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-500"
              />
            </div>
            <Select defaultValue="alle">
              <SelectTrigger className="w-full md:w-[180px] bg-gray-800 border-gray-700 text-gray-100">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="alle">Alle</SelectItem>
                <SelectItem value="angefragt">Angefragt</SelectItem>
                <SelectItem value="bestaetigt">Bestätigt</SelectItem>
                <SelectItem value="abgelehnt">Abgelehnt</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="date"
              className="w-full md:w-[180px] bg-gray-800 border-gray-700 text-gray-100"
              placeholder="Anfragedatum"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-800 hover:bg-gray-800/50">
                <TableHead className="text-gray-400">Kunde</TableHead>
                <TableHead className="text-gray-400">Roboter</TableHead>
                <TableHead className="text-gray-400">Typ</TableHead>
                <TableHead className="text-gray-400">Zeitraum (Miete)</TableHead>
                <TableHead className="text-gray-400">Preis</TableHead>
                <TableHead className="text-gray-400">Eingang</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
                <TableHead className="text-gray-400 text-right">Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.id} className="border-gray-800 hover:bg-gray-800/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-blue-600 text-white text-xs">
                          {request.customerInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-gray-100">{request.customer}</div>
                        <div className="text-xs text-gray-400">{request.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-100">{request.robot}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        request.type === "Miete"
                          ? "border-blue-600 text-blue-400 bg-blue-600/10"
                          : "border-green-600 text-green-400 bg-green-600/10"
                      }
                    >
                      {request.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-100">
                    {request.startDate && request.endDate ? `${request.startDate} - ${request.endDate}` : "--"}
                  </TableCell>
                  <TableCell className="font-medium text-gray-100">{request.price}</TableCell>
                  <TableCell className="text-gray-400">{request.received}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-yellow-600 text-yellow-400 bg-yellow-600/10">
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-100">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                        <DropdownMenuItem className="text-gray-100 focus:bg-gray-700 focus:text-gray-100">
                          <Eye className="mr-2 h-4 w-4" />
                          Anfrage ansehen
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-gray-100 focus:bg-gray-700 focus:text-gray-100">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Kunde kontaktieren
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-gray-700" />
                        <DropdownMenuItem className="text-green-600 focus:bg-gray-700 focus:text-green-500">
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Bestätigen
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 focus:bg-gray-700 focus:text-red-500">
                          <XCircle className="mr-2 h-4 w-4" />
                          Ablehnen
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
