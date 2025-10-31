"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { AdminDataTable } from "@/components/admin/admin-data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface Payout {
  id: string
  merchant: string
  reference: string
  type: "Miete" | "Verkauf"
  amount: string
  dueDate: string
  status: "Fällig zur Freigabe" | "Kunde bestätigt" | "In Bearbeitung" | "Abgeschlossen"
}

const pendingPayouts: Payout[] = [
  {
    id: "P-1001",
    merchant: "RoboTrade GmbH",
    reference: "Miete #M-1002",
    type: "Miete",
    amount: "4.500,00 €",
    dueDate: "2025-02-05",
    status: "Fällig zur Freigabe",
  },
  {
    id: "P-1002",
    merchant: "IndustrieBot AG",
    reference: "Verkauf #V-2045",
    type: "Verkauf",
    amount: "28.000,00 €",
    dueDate: "2025-02-06",
    status: "Kunde bestätigt",
  },
  {
    id: "P-1003",
    merchant: "AutomationPro GmbH",
    reference: "Miete #M-1089",
    type: "Miete",
    amount: "6.200,00 €",
    dueDate: "2025-02-07",
    status: "Fällig zur Freigabe",
  },
]

const inProgressPayouts: Payout[] = [
  {
    id: "P-0998",
    merchant: "TechRobotics GmbH",
    reference: "Verkauf #V-2012",
    type: "Verkauf",
    amount: "15.000,00 €",
    dueDate: "2025-02-03",
    status: "In Bearbeitung",
  },
]

const completedPayouts: Payout[] = [
  {
    id: "P-0995",
    merchant: "RoboSolutions AG",
    reference: "Miete #M-0987",
    type: "Miete",
    amount: "3.800,00 €",
    dueDate: "2025-02-01",
    status: "Abgeschlossen",
  },
  {
    id: "P-0994",
    merchant: "IndustrieBot AG",
    reference: "Verkauf #V-1998",
    type: "Verkauf",
    amount: "22.500,00 €",
    dueDate: "2025-01-30",
    status: "Abgeschlossen",
  },
]

export default function PayoutsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("pending")

  const handleExportReport = () => {
    console.log("[v0] Exporting financial report...")
    // TODO: Implement CSV export logic
  }

  const handleReviewPayout = (payoutId: string) => {
    router.push(`/admin/payouts/${payoutId}`)
  }

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case "Miete":
        return "default"
      case "Verkauf":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Fällig zur Freigabe":
        return "destructive"
      case "Kunde bestätigt":
        return "default"
      case "In Bearbeitung":
        return "secondary"
      case "Abgeschlossen":
        return "outline"
      default:
        return "outline"
    }
  }

  const columns = [
    {
      header: "Händler",
      accessor: "merchant" as keyof Payout,
    },
    {
      header: "Referenz-Buchung",
      accessor: "reference" as keyof Payout,
      render: (row: Payout) => <span className="font-mono text-sm">{row.reference}</span>,
    },
    {
      header: "Typ",
      accessor: "type" as keyof Payout,
      render: (row: Payout) => <Badge variant={getTypeBadgeVariant(row.type)}>{row.type}</Badge>,
    },
    {
      header: "Auszahlungsbetrag",
      accessor: "amount" as keyof Payout,
      render: (row: Payout) => (
        <div>
          <div className="font-semibold">{row.amount}</div>
          <div className="text-xs text-muted-foreground">(nach Abzug der Gebühr)</div>
        </div>
      ),
    },
    {
      header: "Fällig am",
      accessor: "dueDate" as keyof Payout,
      render: (row: Payout) => (
        <span className="text-sm text-muted-foreground">
          {new Date(row.dueDate).toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </span>
      ),
    },
    {
      header: "Status",
      accessor: "status" as keyof Payout,
      render: (row: Payout) => <Badge variant={getStatusBadgeVariant(row.status)}>{row.status}</Badge>,
    },
    {
      header: "Aktionen",
      accessor: "id" as keyof Payout,
      render: (row: Payout) => (
        <Button size="sm" onClick={() => handleReviewPayout(row.id)} className="whitespace-nowrap">
          Auszahlung prüfen
        </Button>
      ),
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <AdminPageHeader
        title="Auszahlungs-Management"
        subtitle="Überwachen Sie fällige Auszahlungen und geben Sie Gelder an verifizierte Händler frei."
        actionButton={{
          label: "Finanzbericht exportieren (CSV)",
          onClick: handleExportReport,
          icon: Download,
        }}
      />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList>
          <TabsTrigger value="pending">
            Fällige Auszahlungen{" "}
            <Badge variant="secondary" className="ml-2">
              {pendingPayouts.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="in-progress">In Bearbeitung</TabsTrigger>
          <TabsTrigger value="completed">Abgeschlossen</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-6">
          <AdminDataTable columns={columns} data={pendingPayouts} />
        </TabsContent>

        <TabsContent value="in-progress" className="mt-6">
          <AdminDataTable columns={columns} data={inProgressPayouts} />
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <AdminDataTable columns={columns} data={completedPayouts} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
