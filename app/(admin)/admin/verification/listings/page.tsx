"use client"

import { useState } from "react"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { AdminDataTable } from "@/components/admin/admin-data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Eye } from "lucide-react"

interface Listing {
  id: string
  modelName: string
  merchant: string
  type: "Neu-Inserat" | "Aktualisierung"
  submittedAt: string
}

const pendingListings: Listing[] = [
  {
    id: "L001",
    modelName: "Atlas V3",
    merchant: "RoboTech Solutions GmbH",
    type: "Neu-Inserat",
    submittedAt: "2025-01-28 14:23",
  },
  {
    id: "L002",
    modelName: "ABB IRB 6700",
    merchant: "Industrie Automation AG",
    type: "Aktualisierung",
    submittedAt: "2025-01-28 11:45",
  },
  {
    id: "L003",
    modelName: "KUKA KR 210 R3100",
    merchant: "Maschinenbau Müller",
    type: "Neu-Inserat",
    submittedAt: "2025-01-27 16:30",
  },
  {
    id: "L004",
    modelName: "DJI Matrice 300 RTK",
    merchant: "DroneService Pro",
    type: "Neu-Inserat",
    submittedAt: "2025-01-27 09:15",
  },
]

const approvedListings: Listing[] = [
  {
    id: "L005",
    modelName: "Fanuc M-20iA",
    merchant: "RoboTech Solutions GmbH",
    type: "Neu-Inserat",
    submittedAt: "2025-01-26 13:20",
  },
  {
    id: "L006",
    modelName: "Universal Robots UR10e",
    merchant: "Automation Systems GmbH",
    type: "Aktualisierung",
    submittedAt: "2025-01-25 10:45",
  },
]

const rejectedListings: Listing[] = [
  {
    id: "L007",
    modelName: "Generic Robot X1",
    merchant: "Unbekannter Händler",
    type: "Neu-Inserat",
    submittedAt: "2025-01-24 15:30",
  },
]

export default function ListingApprovalPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("pending")

  const columns = [
    {
      header: "Inserat (Modellname)",
      accessor: "modelName" as keyof Listing,
      render: (row: Listing) => <div className="font-medium text-foreground">{row.modelName}</div>,
    },
    {
      header: "Händler",
      accessor: "merchant" as keyof Listing,
      render: (row: Listing) => <span className="text-sm text-muted-foreground">{row.merchant}</span>,
    },
    {
      header: "Typ",
      accessor: "type" as keyof Listing,
      render: (row: Listing) => (
        <Badge variant={row.type === "Neu-Inserat" ? "default" : "secondary"}>{row.type}</Badge>
      ),
    },
    {
      header: "Eingereicht am",
      accessor: "submittedAt" as keyof Listing,
      render: (row: Listing) => <span className="text-sm text-muted-foreground">{row.submittedAt}</span>,
    },
    {
      header: "Aktionen",
      accessor: "id" as keyof Listing,
      render: (row: Listing) => (
        <Button size="sm" onClick={() => router.push(`/admin/verification/listings/${row.id}`)}>
          <Eye className="mr-2 h-4 w-4" />
          Details prüfen
        </Button>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Inserats-Freigaben"
        subtitle="Prüfen und genehmigen Sie neue oder geänderte Inserate, bevor sie auf der Plattform veröffentlicht werden."
      />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">
            Wartend{" "}
            <Badge variant="secondary" className="ml-2 text-xs">
              {pendingListings.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="approved">Genehmigt</TabsTrigger>
          <TabsTrigger value="rejected">Abgelehnt</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          <AdminDataTable columns={columns} data={pendingListings} />
        </TabsContent>

        <TabsContent value="approved" className="space-y-4">
          <AdminDataTable columns={columns} data={approvedListings} />
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4">
          <AdminDataTable columns={columns} data={rejectedListings} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
