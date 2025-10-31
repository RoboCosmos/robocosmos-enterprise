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
      <h1 className="text-2xl font-bold text-foreground">Transaktionen & Finanzen</h1>

      <Tabs defaultValue="payments" className="space-y-8">
        <TabsList>
          <TabsTrigger value="payments">Zahlungsübersicht</TabsTrigger>
          <TabsTrigger value="commissions">Provisionsübersicht</TabsTrigger>
          <TabsTrigger value="payouts">Auszahlungsmanagement</TabsTrigger>
          <TabsTrigger value="reports">Berichte & Analysen</TabsTrigger>
        </TabsList>

        <TabsContent value="payments" className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="relative lg:col-span-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Suche nach Zahlungs-ID, Buchungs-ID, Kunde..." className="pl-10" />
                </div>

                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle</SelectItem>
                    <SelectItem value="pending">Ausstehend</SelectItem>
                    <SelectItem value="success">Erfolgreich</SelectItem>
                    <SelectItem value="failed">Fehlgeschlagen</SelectItem>
                    <SelectItem value="refunded">Rückerstattet</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="justify-start bg-transparent">
                  <Calendar className="mr-2 h-4 w-4" />
                  Zeitraum
                </Button>

                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Händler" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle Händler</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Zahlungsart" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle</SelectItem>
                    <SelectItem value="card">Kreditkarte</SelectItem>
                    <SelectItem value="transfer">Überweisung</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Zahlungs-ID</TableHead>
                    <TableHead>Buchung</TableHead>
                    <TableHead>Kunde</TableHead>
                    <TableHead>Händler</TableHead>
                    <TableHead>Betrag</TableHead>
                    <TableHead>Datum</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-foreground">#P2001</TableCell>
                    <TableCell className="text-muted-foreground">#B1001</TableCell>
                    <TableCell className="text-muted-foreground">Kunde AG</TableCell>
                    <TableCell className="text-muted-foreground">RoboTrade GmbH</TableCell>
                    <TableCell className="text-foreground font-semibold">€15.000</TableCell>
                    <TableCell className="text-muted-foreground">28. Okt. 2025</TableCell>
                    <TableCell>
                      <Badge variant="default">Erfolgreich</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            Zahlungsdetails anzeigen
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link className="mr-2 h-4 w-4" />
                            Zur Buchung gehen
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Status manuell ändern...
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-medium text-foreground">#P2002</TableCell>
                    <TableCell className="text-muted-foreground">#B1002</TableCell>
                    <TableCell className="text-muted-foreground">Bau GmbH</TableCell>
                    <TableCell className="text-muted-foreground">Händler Müller</TableCell>
                    <TableCell className="text-foreground font-semibold">€110.000</TableCell>
                    <TableCell className="text-muted-foreground">20. Okt. 2025</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Rückerstattet</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            Zahlungsdetails anzeigen
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link className="mr-2 h-4 w-4" />
                            Zur Buchung gehen
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Status manuell ändern...
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-medium text-foreground">#P2003</TableCell>
                    <TableCell className="text-muted-foreground">#B1003</TableCell>
                    <TableCell className="text-muted-foreground">Logistik Inc.</TableCell>
                    <TableCell className="text-muted-foreground">RoboTrade GmbH</TableCell>
                    <TableCell className="text-foreground font-semibold">€8.000</TableCell>
                    <TableCell className="text-muted-foreground">29. Okt. 2025</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Fehlgeschlagen</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            Zahlungsdetails anzeigen
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link className="mr-2 h-4 w-4" />
                            Zur Buchung gehen
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Undo2 className="mr-2 h-4 w-4" />
                            Rückerstattung auslösen
                          </DropdownMenuItem>
                          <DropdownMenuItem>
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

        <TabsContent value="commissions">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-foreground">Provisionsübersicht Platzhalter</h2>
              <p className="text-muted-foreground mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payouts">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-foreground">Auszahlungsmanagement Platzhalter</h2>
              <p className="text-muted-foreground mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-foreground">Berichte & Analysen Platzhalter</h2>
              <p className="text-muted-foreground mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
