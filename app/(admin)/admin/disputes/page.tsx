"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { AdminFilterBar } from "@/components/admin/admin-filter-bar"
import { AdminDataTable } from "@/components/admin/admin-data-table"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Search, Lock, AlertTriangle, DollarSign } from "lucide-react"

interface Dispute {
  id: string
  caseId: string
  subject: string
  booking: string
  customer: string
  merchant: string
  status: "Neu" | "In Bearbeitung" | "Wartet auf Antwort" | "Gelöst" | "Geschlossen"
  priority: "Niedrig" | "Mittel" | "Hoch" | "Kritisch"
  assignedTo: string
  lastActivity: string
}

const mockConversations = [
  {
    id: "1",
    subject: "STREITFALL: Miete #M-56789",
    participants: "Kunde: Mustermann GmbH / Händler: TechRobotics",
    status: "Streitfall gemeldet",
    statusVariant: "destructive" as const,
    timestamp: "Vor 2 Stunden",
    transactionId: "#M-56789",
    customer: "Mustermann GmbH",
    merchant: "TechRobotics",
    messages: [
      {
        id: "1",
        from: "Mustermann GmbH (Kunde)",
        date: "28. Okt. 2025, 14:30",
        content:
          "Der gelieferte Roboter entspricht nicht den vereinbarten Spezifikationen. Wir fordern eine Rückerstattung.",
      },
      {
        id: "2",
        from: "TechRobotics (Händler)",
        date: "28. Okt. 2025, 15:15",
        content:
          "Der Roboter wurde gemäß Vertrag geliefert. Alle Spezifikationen wurden eingehalten. Wir lehnen eine Rückerstattung ab.",
      },
      {
        id: "3",
        from: "Mustermann GmbH (Kunde)",
        date: "28. Okt. 2025, 16:00",
        content: "Wir haben Fotos und Dokumentation, die unsere Behauptung belegen. Bitte prüfen Sie den Fall.",
      },
    ],
  },
  {
    id: "2",
    subject: "Support-Ticket: Technische Frage #T-12345",
    participants: "Kunde: Logistik AG / Händler: RoboSupply",
    status: "Wartet auf Admin-Antwort",
    statusVariant: "default" as const,
    timestamp: "Vor 5 Stunden",
    transactionId: "#T-12345",
    customer: "Logistik AG",
    merchant: "RoboSupply",
    messages: [
      {
        id: "1",
        from: "Logistik AG (Kunde)",
        date: "28. Okt. 2025, 11:00",
        content: "Wir haben eine Frage zur Wartung des Roboters. Können Sie uns weiterhelfen?",
      },
      {
        id: "2",
        from: "RoboSupply (Händler)",
        date: "28. Okt. 2025, 12:30",
        content: "Für technische Fragen wenden Sie sich bitte direkt an den Support.",
      },
    ],
  },
  {
    id: "3",
    subject: "Support-Ticket: Lieferverzögerung #T-67890",
    participants: "Kunde: Bau GmbH / Händler: RoboTrade",
    status: "Offenes Support-Ticket",
    statusVariant: "secondary" as const,
    timestamp: "Gestern",
    transactionId: "#T-67890",
    customer: "Bau GmbH",
    merchant: "RoboTrade",
    messages: [
      {
        id: "1",
        from: "Bau GmbH (Kunde)",
        date: "27. Okt. 2025, 09:00",
        content: "Die Lieferung ist bereits 3 Tage überfällig. Wann können wir mit der Lieferung rechnen?",
      },
    ],
  },
]

export default function DisputesPage() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [assignedFilter, setAssignedFilter] = useState("all")

  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [adminReply, setAdminReply] = useState("")

  const disputes: Dispute[] = [
    {
      id: "1",
      caseId: "#D101",
      subject: "Roboter defekt",
      booking: "#B1001",
      customer: "Kunde AG",
      merchant: "RoboTrade GmbH",
      status: "Neu",
      priority: "Hoch",
      assignedTo: "Unzugewiesen",
      lastActivity: "Heute",
    },
    {
      id: "2",
      caseId: "#D102",
      subject: "Mietzeitraum Problem",
      booking: "#B1003",
      customer: "Logistik Inc.",
      merchant: "RoboTrade GmbH",
      status: "In Bearbeitung",
      priority: "Mittel",
      assignedTo: "Admin A",
      lastActivity: "Gestern",
    },
    {
      id: "3",
      caseId: "#D103",
      subject: "Frage zur Rechnung",
      booking: "#B1002",
      customer: "Bau GmbH",
      merchant: "Händler Müller",
      status: "Gelöst",
      priority: "Niedrig",
      assignedTo: "Admin B",
      lastActivity: "25. Okt. 2025",
    },
  ]

  const getStatusBadgeVariant = (status: Dispute["status"]) => {
    switch (status) {
      case "Neu":
        return "destructive"
      case "In Bearbeitung":
        return "default"
      case "Wartet auf Antwort":
        return "secondary"
      case "Gelöst":
        return "default"
      case "Geschlossen":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const getPriorityBadgeVariant = (priority: Dispute["priority"]) => {
    switch (priority) {
      case "Kritisch":
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

  const disputeColumns = [
    {
      header: "Fall-ID",
      accessor: "caseId" as keyof Dispute,
      render: (row: Dispute) => <span className="font-mono text-sm font-medium text-foreground">{row.caseId}</span>,
    },
    {
      header: "Betreff / Buchung",
      accessor: "subject" as keyof Dispute,
      render: (row: Dispute) => (
        <div>
          <div className="font-medium text-foreground">{row.subject}</div>
          <div className="text-sm text-muted-foreground">({row.booking})</div>
        </div>
      ),
    },
    {
      header: "Kunde",
      accessor: "customer" as keyof Dispute,
      render: (row: Dispute) => <span className="text-foreground">{row.customer}</span>,
    },
    {
      header: "Händler",
      accessor: "merchant" as keyof Dispute,
      render: (row: Dispute) => <span className="text-foreground">{row.merchant}</span>,
    },
    {
      header: "Status",
      accessor: "status" as keyof Dispute,
      render: (row: Dispute) => <Badge variant={getStatusBadgeVariant(row.status)}>{row.status}</Badge>,
    },
    {
      header: "Priorität",
      accessor: "priority" as keyof Dispute,
      render: (row: Dispute) => <Badge variant={getPriorityBadgeVariant(row.priority)}>{row.priority}</Badge>,
    },
    {
      header: "Zugewiesen an",
      accessor: "assignedTo" as keyof Dispute,
      render: (row: Dispute) => <span className="text-muted-foreground">{row.assignedTo}</span>,
    },
    {
      header: "Letzte Aktivität",
      accessor: "lastActivity" as keyof Dispute,
      render: (row: Dispute) => <span className="text-foreground">{row.lastActivity}</span>,
    },
    {
      header: "Aktionen",
      accessor: "id" as keyof Dispute,
      render: (row: Dispute) => (
        <Button size="sm" onClick={() => router.push(`/admin/disputes/${row.id}`)}>
          Fall ansehen
        </Button>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Support & Streitschlichtung"
        subtitle="Verwalten Sie Streitfälle, Support-Tickets und moderieren Sie Bewertungen und Nachrichten."
      />

      <Tabs defaultValue="disputes" className="space-y-6">
        <TabsList>
          <TabsTrigger value="disputes">Streitfälle</TabsTrigger>
          <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
          <TabsTrigger value="reviews">Bewertungs-Moderation</TabsTrigger>
          <TabsTrigger value="messages">Nachrichten-Moderation</TabsTrigger>
        </TabsList>

        <TabsContent value="disputes" className="space-y-6">
          <AdminFilterBar
            searchPlaceholder="Suche nach Fall-ID, Kunde, Händler..."
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            filters={[
              {
                placeholder: "Status",
                options: [
                  { label: "Alle", value: "all" },
                  { label: "Neu", value: "new" },
                  { label: "In Bearbeitung", value: "in-progress" },
                  { label: "Wartet auf Antwort", value: "waiting" },
                  { label: "Gelöst", value: "resolved" },
                  { label: "Geschlossen", value: "closed" },
                ],
                defaultValue: "all",
                onChange: setStatusFilter,
              },
              {
                placeholder: "Priorität",
                options: [
                  { label: "Alle", value: "all" },
                  { label: "Niedrig", value: "low" },
                  { label: "Mittel", value: "medium" },
                  { label: "Hoch", value: "high" },
                  { label: "Kritisch", value: "critical" },
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
                ],
                defaultValue: "all",
                onChange: setAssignedFilter,
              },
            ]}
          />

          <AdminDataTable columns={disputeColumns} data={disputes} />
        </TabsContent>

        <TabsContent value="tickets">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-foreground">Support Tickets Platzhalter</h2>
              <p className="text-muted-foreground mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-foreground">Bewertungs-Moderation Platzhalter</h2>
              <p className="text-muted-foreground mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-6">
          <p className="text-muted-foreground">Überwachen Sie Konversationen.</p>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Suche nach Transaktions-ID, Nutzer-ID oder Händler-ID"
                    className="pl-10 bg-background border-input text-foreground"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <Select defaultValue="all">
                  <SelectTrigger className="w-full lg:w-[250px] bg-background border-input text-foreground">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="all">Alle</SelectItem>
                    <SelectItem value="support">Offenes Support-Ticket</SelectItem>
                    <SelectItem value="dispute">Gemeldeter Streitfall</SelectItem>
                    <SelectItem value="waiting">Wartet auf Admin-Antwort</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Suchen</Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {mockConversations.map((conversation) => (
                    <button
                      key={conversation.id}
                      onClick={() => setSelectedConversation(conversation)}
                      className={`w-full text-left p-4 hover:bg-muted/50 transition-colors ${
                        selectedConversation.id === conversation.id ? "bg-muted" : ""
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="font-semibold text-foreground text-sm">{conversation.subject}</div>
                        <div className="text-xs text-muted-foreground">{conversation.participants}</div>
                        <div className="flex items-center justify-between">
                          <Badge variant={conversation.statusVariant}>{conversation.status}</Badge>
                          <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2 pb-4 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground">{selectedConversation.subject}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>
                      <strong className="text-foreground">Transaktion:</strong> {selectedConversation.transactionId}
                    </span>
                    <span>
                      <strong className="text-foreground">Kunde:</strong> {selectedConversation.customer}
                    </span>
                    <span>
                      <strong className="text-foreground">Händler:</strong> {selectedConversation.merchant}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="destructive" size="sm">
                    <Lock className="mr-2 h-4 w-4" />
                    Konversation sperren
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                  >
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Händler verwarnen
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <DollarSign className="mr-2 h-4 w-4" />
                    Rückerstattung einleiten
                  </Button>
                </div>

                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  {selectedConversation.messages.map((message) => (
                    <div key={message.id} className="space-y-2 p-4 rounded-lg bg-muted/30 border border-border">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="text-sm font-semibold text-foreground">Von: {message.from}</div>
                          <div className="text-xs text-muted-foreground">Datum: {message.date}</div>
                        </div>
                      </div>
                      <div className="text-sm text-foreground leading-relaxed">{message.content}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="text-sm font-semibold text-foreground">
                    Offizielle Admin-Antwort (sichtbar für beide Parteien)
                  </div>
                  <Textarea
                    placeholder="Geben Sie hier Ihre offizielle Antwort ein..."
                    className="min-h-[120px] bg-background border-input text-foreground"
                    value={adminReply}
                    onChange={(e) => setAdminReply(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Senden</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
