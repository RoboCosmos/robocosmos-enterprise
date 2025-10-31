"use client"

import { useState } from "react"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { AdminFilterBar } from "@/components/admin/admin-filter-bar"
import { AdminDataTable } from "@/components/admin/admin-data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface SupportTicket {
  id: string
  ticketId: string
  subject: string
  requester: string
  status: "Neu" | "Wartet auf Antwort" | "In Bearbeitung" | "Gelöst"
  priority: "Hoch" | "Mittel" | "Niedrig"
  assignedTo: string
  lastActivity: string
}

export default function SupportCenterPage() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [assignedFilter, setAssignedFilter] = useState("all")

  // Placeholder data for open tickets
  const openTickets: SupportTicket[] = [
    {
      id: "1",
      ticketId: "#T-1234",
      subject: "Passwort zurücksetzen",
      requester: "max.mueller@example.com",
      status: "Neu",
      priority: "Mittel",
      assignedTo: "Unzugewiesen",
      lastActivity: "Vor 2 Stunden",
    },
    {
      id: "2",
      ticketId: "#T-1235",
      subject: "Frage zur Rechnungsstellung",
      requester: "Anna Schmidt",
      status: "Wartet auf Antwort",
      priority: "Niedrig",
      assignedTo: "Admin A",
      lastActivity: "Vor 5 Stunden",
    },
    {
      id: "3",
      ticketId: "#T-1236",
      subject: "Technisches Problem beim Upload",
      requester: "thomas.weber@example.com",
      status: "Neu",
      priority: "Hoch",
      assignedTo: "Admin B",
      lastActivity: "Vor 30 Minuten",
    },
    {
      id: "4",
      ticketId: "#T-1237",
      subject: "Wie funktioniert die Verifizierung?",
      requester: "Lisa Becker",
      status: "Wartet auf Antwort",
      priority: "Mittel",
      assignedTo: "Admin A",
      lastActivity: "Vor 1 Tag",
    },
  ]

  const inProgressTickets: SupportTicket[] = [
    {
      id: "5",
      ticketId: "#T-1230",
      subject: "Zahlungsproblem",
      requester: "peter.klein@example.com",
      status: "In Bearbeitung",
      priority: "Hoch",
      assignedTo: "Admin B",
      lastActivity: "Vor 1 Stunde",
    },
    {
      id: "6",
      ticketId: "#T-1228",
      subject: "Konto-Verifizierung fehlgeschlagen",
      requester: "Sarah Meyer",
      status: "In Bearbeitung",
      priority: "Mittel",
      assignedTo: "Admin A",
      lastActivity: "Vor 3 Stunden",
    },
  ]

  const resolvedTickets: SupportTicket[] = [
    {
      id: "7",
      ticketId: "#T-1220",
      subject: "Login-Problem gelöst",
      requester: "michael.fischer@example.com",
      status: "Gelöst",
      priority: "Mittel",
      assignedTo: "Admin A",
      lastActivity: "Vor 2 Tagen",
    },
    {
      id: "8",
      ticketId: "#T-1215",
      subject: "Frage zu Gebühren beantwortet",
      requester: "Julia Wagner",
      status: "Gelöst",
      priority: "Niedrig",
      assignedTo: "Admin B",
      lastActivity: "Vor 3 Tagen",
    },
  ]

  const allTickets = [...openTickets, ...inProgressTickets, ...resolvedTickets]

  const getStatusBadgeVariant = (status: SupportTicket["status"]) => {
    switch (status) {
      case "Neu":
        return "default"
      case "Wartet auf Antwort":
        return "secondary"
      case "In Bearbeitung":
        return "outline"
      case "Gelöst":
        return "default"
      default:
        return "secondary"
    }
  }

  const getPriorityBadgeVariant = (priority: SupportTicket["priority"]) => {
    switch (priority) {
      case "Hoch":
        return "destructive"
      case "Mittel":
        return "default"
      case "Niedrig":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const columns = [
    {
      header: "Ticket-ID",
      accessor: "ticketId" as keyof SupportTicket,
      render: (row: SupportTicket) => (
        <span className="font-mono text-sm font-medium text-foreground">{row.ticketId}</span>
      ),
    },
    {
      header: "Betreff",
      accessor: "subject" as keyof SupportTicket,
      render: (row: SupportTicket) => <span className="font-medium text-foreground">{row.subject}</span>,
    },
    {
      header: "Antragsteller",
      accessor: "requester" as keyof SupportTicket,
      render: (row: SupportTicket) => <span className="text-sm text-muted-foreground">{row.requester}</span>,
    },
    {
      header: "Status",
      accessor: "status" as keyof SupportTicket,
      render: (row: SupportTicket) => <Badge variant={getStatusBadgeVariant(row.status)}>{row.status}</Badge>,
    },
    {
      header: "Priorität",
      accessor: "priority" as keyof SupportTicket,
      render: (row: SupportTicket) => <Badge variant={getPriorityBadgeVariant(row.priority)}>{row.priority}</Badge>,
    },
    {
      header: "Zugewiesen an",
      accessor: "assignedTo" as keyof SupportTicket,
      render: (row: SupportTicket) => <span className="text-sm text-muted-foreground">{row.assignedTo}</span>,
    },
    {
      header: "Letzte Aktivität",
      accessor: "lastActivity" as keyof SupportTicket,
      render: (row: SupportTicket) => <span className="text-sm text-muted-foreground">{row.lastActivity}</span>,
    },
    {
      header: "Aktionen",
      accessor: "id" as keyof SupportTicket,
      render: (row: SupportTicket) => (
        <Button size="sm" onClick={() => router.push(`/admin/support/${row.id}`)}>
          Ticket öffnen
        </Button>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Support-Center"
        subtitle="Bearbeiten Sie allgemeine Nutzeranfragen, technische Probleme und 'Wie geht das?'-Tickets."
      />

      <AdminFilterBar
        searchPlaceholder="Suche nach Ticket-ID, Betreff oder Nutzer..."
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        filters={[
          {
            placeholder: "Status",
            options: [
              { label: "Alle Status", value: "all" },
              { label: "Offen", value: "open" },
              { label: "In Bearbeitung", value: "in-progress" },
              { label: "Gelöst", value: "resolved" },
            ],
            defaultValue: "all",
            onChange: setStatusFilter,
          },
          {
            placeholder: "Priorität",
            options: [
              { label: "Alle Prioritäten", value: "all" },
              { label: "Hoch", value: "high" },
              { label: "Mittel", value: "medium" },
              { label: "Niedrig", value: "low" },
            ],
            defaultValue: "all",
            onChange: setPriorityFilter,
          },
          {
            placeholder: "Zugewiesen an",
            options: [
              { label: "Alle Admins", value: "all" },
              { label: "Admin A", value: "admin-a" },
              { label: "Admin B", value: "admin-b" },
              { label: "Unzugewiesen", value: "unassigned" },
            ],
            defaultValue: "all",
            onChange: setAssignedFilter,
          },
        ]}
      />

      <Tabs defaultValue="open" className="space-y-4">
        <TabsList>
          <TabsTrigger value="open">
            Offene Tickets <span className="ml-1.5 text-muted-foreground">(10)</span>
          </TabsTrigger>
          <TabsTrigger value="in-progress">In Bearbeitung</TabsTrigger>
          <TabsTrigger value="resolved">Gelöst</TabsTrigger>
          <TabsTrigger value="all">Alle</TabsTrigger>
        </TabsList>

        <TabsContent value="open" className="space-y-4">
          <AdminDataTable columns={columns} data={openTickets} />
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          <AdminDataTable columns={columns} data={inProgressTickets} />
        </TabsContent>

        <TabsContent value="resolved" className="space-y-4">
          <AdminDataTable columns={columns} data={resolvedTickets} />
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <AdminDataTable columns={columns} data={allTickets} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
