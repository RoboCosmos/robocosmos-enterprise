"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, FileText } from "lucide-react"

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("transactions")

  // Placeholder transaction data
  const transactions = [
    {
      date: "28. Okt 2025",
      id: "TXN-2025-1234",
      type: "Miete",
      listing: "Atlas Roboter (SN: 123)",
      gross: "2.500,00 €",
      fee: "-250,00 €",
      net: "2.250,00 €",
      status: "Ausgezahlt",
    },
    {
      date: "25. Okt 2025",
      id: "TXN-2025-1233",
      type: "Verkauf",
      listing: "Ameca Roboter (SN: 456)",
      gross: "15.000,00 €",
      fee: "-1.500,00 €",
      net: "13.500,00 €",
      status: "In Bearbeitung",
    },
    {
      date: "20. Okt 2025",
      id: "TXN-2025-1232",
      type: "Miete",
      listing: "Spot Roboter (SN: 789)",
      gross: "1.800,00 €",
      fee: "-180,00 €",
      net: "1.620,00 €",
      status: "Ausgezahlt",
    },
    {
      date: "15. Okt 2025",
      id: "TXN-2025-1231",
      type: "Miete",
      listing: "Atlas Roboter (SN: 123)",
      gross: "2.500,00 €",
      fee: "-250,00 €",
      net: "2.250,00 €",
      status: "Ausgezahlt",
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Abrechnungen & Auszahlungen</h1>
          <p className="text-muted-foreground mt-2">Verwalten Sie Ihre Transaktionen, Abrechnungen und Auszahlungen</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Download className="mr-2 h-4 w-4" />
          Als CSV exportieren
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Card 1: Aktueller Saldo */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Aktueller Saldo</p>
              <p className="text-3xl font-bold text-foreground">12.850,50 €</p>
              <p className="text-sm text-muted-foreground">Auszahlbar in 3 Tagen</p>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Nächste Auszahlung */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Nächste Auszahlung</p>
              <p className="text-3xl font-bold text-foreground">15. Nov 2025</p>
              <p className="text-sm text-muted-foreground">Geplante Summe: 8.200,00 €</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Transaktionsverlauf</TabsTrigger>
          <TabsTrigger value="invoices">Abrechnungsdokumente</TabsTrigger>
          <TabsTrigger value="payouts">Auszahlungsverlauf</TabsTrigger>
        </TabsList>

        {/* Transaktionsverlauf Tab */}
        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Datum</TableHead>
                    <TableHead>Transaktions-ID</TableHead>
                    <TableHead>Typ</TableHead>
                    <TableHead>Inserat</TableHead>
                    <TableHead className="text-right">Bruttoumsatz</TableHead>
                    <TableHead className="text-right">Plattform-Gebühr</TableHead>
                    <TableHead className="text-right">Nettoumsatz</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.date}</TableCell>
                      <TableCell className="font-mono text-sm">{transaction.id}</TableCell>
                      <TableCell>
                        <Badge variant={transaction.type === "Miete" ? "default" : "secondary"}>
                          {transaction.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{transaction.listing}</TableCell>
                      <TableCell className="text-right font-medium">{transaction.gross}</TableCell>
                      <TableCell className="text-right text-muted-foreground">{transaction.fee}</TableCell>
                      <TableCell className="text-right font-bold">{transaction.net}</TableCell>
                      <TableCell>
                        <Badge
                          variant={transaction.status === "Ausgezahlt" ? "default" : "secondary"}
                          className={
                            transaction.status === "Ausgezahlt"
                              ? "bg-green-500/10 text-green-700 dark:text-green-400"
                              : ""
                          }
                        >
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Abrechnungsdokumente Tab */}
        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">Keine Abrechnungsdokumente vorhanden</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Auszahlungsverlauf Tab */}
        <TabsContent value="payouts" className="space-y-4">
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">Kein Auszahlungsverlauf vorhanden</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
