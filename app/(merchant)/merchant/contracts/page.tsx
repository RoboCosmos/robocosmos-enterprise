"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

// Placeholder data for contracts
const contracts = [
  {
    id: "ANG-2024-001",
    status: "Gesendet",
    customer: "Mittelstand GmbH",
    product: "Boston Dynamics Spot",
    amount: "2.500,00 €",
    lastActivity: "Vor 2 Stunden",
    statusVariant: "default" as const,
  },
  {
    id: "ANG-2024-002",
    status: "Angenommen",
    customer: "TechCorp AG",
    product: "Universal Robots UR10",
    amount: "3.200,00 €",
    lastActivity: "Vor 1 Tag",
    statusVariant: "default" as const,
  },
  {
    id: "ANG-2024-003",
    status: "Entwurf",
    customer: "Industrie Solutions GmbH",
    product: "ABB IRB 6700",
    amount: "4.800,00 €",
    lastActivity: "Vor 3 Tagen",
    statusVariant: "secondary" as const,
  },
  {
    id: "ANG-2024-004",
    status: "Gesendet",
    customer: "Logistik Partner GmbH",
    product: "KUKA KR QUANTEC",
    amount: "5.500,00 €",
    lastActivity: "Vor 5 Stunden",
    statusVariant: "default" as const,
  },
]

export default function MerchantContractsPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Angebote & Verträge</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1">Verwalten Sie Ihre Angebote und Verträge</p>
        </div>
        <Button className="w-fit">
          <Plus className="mr-2 h-4 w-4" />
          Neues Angebot erstellen
        </Button>
      </div>

      {/* Tabs Navigation */}
      <Tabs defaultValue="gesendet" className="w-full">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="alle">Alle</TabsTrigger>
          <TabsTrigger value="entwuerfe">Entwürfe</TabsTrigger>
          <TabsTrigger value="gesendet">Gesendet</TabsTrigger>
          <TabsTrigger value="angenommen">Angenommen</TabsTrigger>
          <TabsTrigger value="archiv">Archiv</TabsTrigger>
        </TabsList>

        <TabsContent value="alle" className="mt-6">
          <ContractsTable contracts={contracts} />
        </TabsContent>

        <TabsContent value="entwuerfe" className="mt-6">
          <ContractsTable contracts={contracts.filter((c) => c.status === "Entwurf")} />
        </TabsContent>

        <TabsContent value="gesendet" className="mt-6">
          <ContractsTable contracts={contracts.filter((c) => c.status === "Gesendet")} />
        </TabsContent>

        <TabsContent value="angenommen" className="mt-6">
          <ContractsTable contracts={contracts.filter((c) => c.status === "Angenommen")} />
        </TabsContent>

        <TabsContent value="archiv" className="mt-6">
          <ContractsTable contracts={[]} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ContractsTable({ contracts }: { contracts: typeof contracts }) {
  if (contracts.length === 0) {
    return (
      <Card>
        <CardContent className="py-12">
          <p className="text-center text-muted-foreground">Keine Angebote gefunden</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Kunde</TableHead>
                <TableHead>Angebots-ID</TableHead>
                <TableHead>Roboter / Service</TableHead>
                <TableHead>Angebotssumme</TableHead>
                <TableHead>Letzte Aktivität</TableHead>
                <TableHead className="text-right">Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell>
                    <Badge variant={contract.statusVariant}>{contract.status}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{contract.customer}</TableCell>
                  <TableCell className="text-muted-foreground">{contract.id}</TableCell>
                  <TableCell>{contract.product}</TableCell>
                  <TableCell className="font-semibold">{contract.amount}</TableCell>
                  <TableCell className="text-muted-foreground">{contract.lastActivity}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Details anzeigen
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
