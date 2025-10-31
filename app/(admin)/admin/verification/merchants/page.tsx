"use client"

import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { AdminDataTable } from "@/components/admin/admin-data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { FileCheck, Clock, CheckCircle2, XCircle } from "lucide-react"

// Placeholder data for pending merchants
const pendingMerchants = [
  {
    id: "VM-001",
    applicant: {
      name: "Max Mustermann",
      email: "max.mustermann@robotech.de",
    },
    company: "RoboTech Solutions GmbH",
    vatId: "DE123456789",
    submittedAt: "2025-01-28 14:32",
  },
  {
    id: "VM-002",
    applicant: {
      name: "Anna Schmidt",
      email: "a.schmidt@industrierobotics.com",
    },
    company: "Industrial Robotics AG",
    vatId: "DE987654321",
    submittedAt: "2025-01-27 09:15",
  },
  {
    id: "VM-003",
    applicant: {
      name: "Thomas Weber",
      email: "t.weber@automate-pro.de",
    },
    company: "Automate Pro Deutschland",
    vatId: "DE456789123",
    submittedAt: "2025-01-26 16:48",
  },
  {
    id: "VM-004",
    applicant: {
      name: "Sarah Müller",
      email: "sarah.mueller@robotverleih24.de",
    },
    company: "RobotVerleih24 GmbH",
    vatId: "DE789123456",
    submittedAt: "2025-01-25 11:20",
  },
]

// Placeholder data for approved merchants
const approvedMerchants = [
  {
    id: "VM-A001",
    applicant: {
      name: "Klaus Becker",
      email: "k.becker@robotics-expert.de",
    },
    company: "Robotics Expert GmbH",
    vatId: "DE111222333",
    approvedAt: "2025-01-20 10:30",
  },
]

// Placeholder data for rejected merchants
const rejectedMerchants = [
  {
    id: "VM-R001",
    applicant: {
      name: "Peter Klein",
      email: "p.klein@example.com",
    },
    company: "Klein Robotics",
    vatId: "DE999888777",
    rejectedAt: "2025-01-18 15:45",
    reason: "Unvollständige Unterlagen",
  },
]

export default function MerchantVerificationPage() {
  const router = useRouter()

  const pendingColumns = [
    {
      header: "Antragsteller",
      render: (row: any) => (
        <div className="flex flex-col gap-1">
          <span className="font-medium text-foreground">{row.applicant.name}</span>
          <span className="text-sm text-muted-foreground">{row.applicant.email}</span>
        </div>
      ),
    },
    {
      header: "Firma",
      accessor: "company",
      render: (row: any) => <span className="text-foreground">{row.company}</span>,
    },
    {
      header: "USt-ID",
      accessor: "vatId",
      render: (row: any) => <span className="font-mono text-sm text-foreground">{row.vatId}</span>,
    },
    {
      header: "Eingereicht am",
      accessor: "submittedAt",
      render: (row: any) => <span className="text-muted-foreground">{row.submittedAt}</span>,
    },
    {
      header: "Aktionen",
      render: (row: any) => (
        <Button onClick={() => router.push(`/admin/verification/merchants/${row.id}`)} size="sm">
          <FileCheck className="h-4 w-4 mr-2" />
          Details prüfen
        </Button>
      ),
    },
  ]

  const approvedColumns = [
    {
      header: "Antragsteller",
      render: (row: any) => (
        <div className="flex flex-col gap-1">
          <span className="font-medium text-foreground">{row.applicant.name}</span>
          <span className="text-sm text-muted-foreground">{row.applicant.email}</span>
        </div>
      ),
    },
    {
      header: "Firma",
      accessor: "company",
      render: (row: any) => <span className="text-foreground">{row.company}</span>,
    },
    {
      header: "USt-ID",
      accessor: "vatId",
      render: (row: any) => <span className="font-mono text-sm text-foreground">{row.vatId}</span>,
    },
    {
      header: "Genehmigt am",
      accessor: "approvedAt",
      render: (row: any) => <span className="text-muted-foreground">{row.approvedAt}</span>,
    },
    {
      header: "Status",
      render: () => (
        <Badge variant="default" className="gap-1">
          <CheckCircle2 className="h-3 w-3" />
          Verifiziert
        </Badge>
      ),
    },
  ]

  const rejectedColumns = [
    {
      header: "Antragsteller",
      render: (row: any) => (
        <div className="flex flex-col gap-1">
          <span className="font-medium text-foreground">{row.applicant.name}</span>
          <span className="text-sm text-muted-foreground">{row.applicant.email}</span>
        </div>
      ),
    },
    {
      header: "Firma",
      accessor: "company",
      render: (row: any) => <span className="text-foreground">{row.company}</span>,
    },
    {
      header: "USt-ID",
      accessor: "vatId",
      render: (row: any) => <span className="font-mono text-sm text-foreground">{row.vatId}</span>,
    },
    {
      header: "Abgelehnt am",
      accessor: "rejectedAt",
      render: (row: any) => <span className="text-muted-foreground">{row.rejectedAt}</span>,
    },
    {
      header: "Grund",
      accessor: "reason",
      render: (row: any) => <span className="text-muted-foreground">{row.reason}</span>,
    },
  ]

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Händler-Verifizierung"
        subtitle="Prüfen und genehmigen Sie Händler, die auf ihre Freischaltung als 'Verifizierter Händler' warten."
      />

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pending" className="gap-2">
            <Clock className="h-4 w-4" />
            Wartend
            <Badge variant="secondary" className="ml-1 rounded-full px-2 py-0 text-xs">
              {pendingMerchants.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="approved" className="gap-2">
            <CheckCircle2 className="h-4 w-4" />
            Genehmigt
          </TabsTrigger>
          <TabsTrigger value="rejected" className="gap-2">
            <XCircle className="h-4 w-4" />
            Abgelehnt
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          <AdminDataTable
            columns={pendingColumns}
            data={pendingMerchants}
            emptyMessage="Keine wartenden Händler-Anträge"
          />
        </TabsContent>

        <TabsContent value="approved" className="space-y-4">
          <AdminDataTable columns={approvedColumns} data={approvedMerchants} emptyMessage="Keine genehmigten Händler" />
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4">
          <AdminDataTable columns={rejectedColumns} data={rejectedMerchants} emptyMessage="Keine abgelehnten Händler" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
