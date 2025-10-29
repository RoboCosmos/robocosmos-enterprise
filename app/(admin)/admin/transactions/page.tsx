"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Eye, Link, Undo2, Edit, Calendar } from "lucide-react"

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-100">Transaktionen & Finanzen</h1>

      {/* Tab Navigation */}
      <Tabs defaultValue="payments" className="space-y-8">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="payments" className="data-[state=active]:bg-blue-600">
            Zahlungsübersicht
          </TabsTrigger>
          <TabsTrigger value="commissions" className="data-[state=active]:bg-blue-600">
            Provisionsübersicht
          </TabsTrigger>
          <TabsTrigger value="payouts" className="data-[state=active]:bg-blue-600">
            Auszahlungsmanagement
          </TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-blue-600">
            Berichte & Analysen
          </TabsTrigger>
        </TabsList>

        {/* Payments Tab Content */}
        <TabsContent value="payments" className="space-y-8">
          {/* Filter and Search Bar */}
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Search Input */}
                <div className="relative lg:col-span-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Suche nach Zahlungs-ID, Buchungs-ID, Kunde..."
                    className="pl-10 bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                  />
                </div>

                {/* Status Filter */}
                <Select defaultValue="all">
                  <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">Alle</SelectItem>
                    <SelectItem value="pending">Ausstehend</SelectItem>
                    <SelectItem value="success">Erfolgreich</SelectItem>
                    <SelectItem value="failed">Fehlgeschlagen</SelectItem>
                    <SelectItem value="refunded">Rückerstattet</SelectItem>
                  </SelectContent>
                </Select>

                {/* Date Range Filter */}
                <Button
                  variant="outline"
                  className="bg-gray-900 border-gray-700 text-white hover:bg-gray-800 justify-start"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Zeitraum
                </Button>

                {/* Merchant Filter */}
                <Select defaultValue="all">
                  <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                    <SelectValue placeholder="Händler" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">Alle Händler</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Second Row - Payment Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
                <Select defaultValue="all">
                  <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                    <SelectValue placeholder="Zahlungsart" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">Alle</SelectItem>
                    <SelectItem value="card">Kreditkarte</SelectItem>
                    <SelectItem value="transfer">Überweisung</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Payments Table */}
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700 hover:bg-gray-800">
                    <TableHead className="text-gray-300">Zahlungs-ID</TableHead>
                    <TableHead className="text-gray-300">Buchung</TableHead>
                    <TableHead className="text-gray-300">Kunde</TableHead>
                    <TableHead className="text-gray-300">Händler</TableHead>
                    <TableHead className="text-gray-300">Betrag</TableHead>
                    <TableHead className="text-gray-300">Datum</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300 text-right">Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Row 1 - Success */}
                  <TableRow className="border-gray-700 hover:bg-gray-750">
                    <TableCell className="font-medium text-white">#P2001</TableCell>
                    <TableCell className="text-gray-300">#B1001</TableCell>
                    <TableCell className="text-gray-300">Kunde AG</TableCell>
                    <TableCell className="text-gray-300">RoboTrade GmbH</TableCell>
                    <TableCell className="text-white font-semibold">€15.000</TableCell>
                    <TableCell className="text-gray-300">28. Okt. 2025</TableCell>
                    <TableCell>
                      <Badge className="bg-green-600 hover:bg-green-700 text-white">Erfolgreich</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                            <Eye className="mr-2 h-4 w-4" />
                            Zahlungsdetails anzeigen
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                            <Link className="mr-2 h-4 w-4" />
                            Zur Buchung gehen
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-gray-700" />
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                            <Edit className="mr-2 h-4 w-4" />
                            Status manuell ändern...
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>

                  {/* Row 2 - Refunded */}
                  <TableRow className="border-gray-700 hover:bg-gray-750">
                    <TableCell className="font-medium text-white">#P2002</TableCell>
                    <TableCell className="text-gray-300">#B1002</TableCell>
                    <TableCell className="text-gray-300">Bau GmbH</TableCell>
                    <TableCell className="text-gray-300">Händler Müller</TableCell>
                    <TableCell className="text-white font-semibold">€110.000</TableCell>
                    <TableCell className="text-gray-300">20. Okt. 2025</TableCell>
                    <TableCell>
                      <Badge className="bg-orange-600 hover:bg-orange-700 text-white">Rückerstattet</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                            <Eye className="mr-2 h-4 w-4" />
                            Zahlungsdetails anzeigen
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                            <Link className="mr-2 h-4 w-4" />
                            Zur Buchung gehen
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-gray-700" />
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                            <Edit className="mr-2 h-4 w-4" />
                            Status manuell ändern...
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>

                  {/* Row 3 - Failed */}
                  <TableRow className="border-gray-700 hover:bg-gray-750">
                    <TableCell className="font-medium text-white">#P2003</TableCell>
                    <TableCell className="text-gray-300">#B1003</TableCell>
                    <TableCell className="text-gray-300">Logistik Inc.</TableCell>
                    <TableCell className="text-gray-300">RoboTrade GmbH</TableCell>
                    <TableCell className="text-white font-semibold">€8.000</TableCell>
                    <TableCell className="text-gray-300">29. Okt. 2025</TableCell>
                    <TableCell>
                      <Badge className="bg-red-600 hover:bg-red-700 text-white">Fehlgeschlagen</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                            <Eye className="mr-2 h-4 w-4" />
                            Zahlungsdetails anzeigen
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                            <Link className="mr-2 h-4 w-4" />
                            Zur Buchung gehen
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-gray-700" />
                          <DropdownMenuItem className="text-orange-400 hover:bg-gray-700 hover:text-orange-300">
                            <Undo2 className="mr-2 h-4 w-4" />
                            Rückerstattung auslösen
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                            <Edit className="mr-2 h-4 w-4" />
                            Status manuell ändern...
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Placeholder Tabs */}
        <TabsContent value="commissions">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-white">Provisionsübersicht Platzhalter</h2>
              <p className="text-gray-400 mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payouts">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-white">Auszahlungsmanagement Platzhalter</h2>
              <p className="text-gray-400 mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-white">Berichte & Analysen Platzhalter</h2>
              <p className="text-gray-400 mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
