"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  MoreHorizontal,
  Eye,
  UserCheck,
  Flag,
  CheckCircle,
  Archive,
  Lock,
  AlertTriangle,
  DollarSign,
} from "lucide-react"

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
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [adminReply, setAdminReply] = useState("")

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">Support & Streitschlichtung</h1>

      <Tabs defaultValue="disputes" className="space-y-8">
        <TabsList className="bg-muted border-border">
          <TabsTrigger
            value="disputes"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Streitfälle
          </TabsTrigger>
          <TabsTrigger
            value="tickets"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Support Tickets
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Bewertungs-Moderation
          </TabsTrigger>
          <TabsTrigger
            value="messages"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Nachrichten-Moderation
          </TabsTrigger>
        </TabsList>

        {/* Disputes Tab Content */}
        <TabsContent value="disputes" className="space-y-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Suche nach Fall-ID, Kunde, Händler..."
                    className="pl-10 bg-background border-input text-foreground"
                  />
                </div>

                {/* Status Filter */}
                <Select defaultValue="all">
                  <SelectTrigger className="w-full lg:w-[200px] bg-background border-input text-foreground">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="all">Alle</SelectItem>
                    <SelectItem value="new">Neu</SelectItem>
                    <SelectItem value="in-progress">In Bearbeitung</SelectItem>
                    <SelectItem value="waiting">Wartet auf Antwort</SelectItem>
                    <SelectItem value="resolved">Gelöst</SelectItem>
                    <SelectItem value="closed">Geschlossen</SelectItem>
                  </SelectContent>
                </Select>

                {/* Priority Filter */}
                <Select defaultValue="all">
                  <SelectTrigger className="w-full lg:w-[200px] bg-background border-input text-foreground">
                    <SelectValue placeholder="Priorität" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="all">Alle</SelectItem>
                    <SelectItem value="low">Niedrig</SelectItem>
                    <SelectItem value="medium">Mittel</SelectItem>
                    <SelectItem value="high">Hoch</SelectItem>
                    <SelectItem value="critical">Kritisch</SelectItem>
                  </SelectContent>
                </Select>

                {/* Assigned To Filter */}
                <Select defaultValue="all">
                  <SelectTrigger className="w-full lg:w-[200px] bg-background border-input text-foreground">
                    <SelectValue placeholder="Zugewiesen an" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="all">Alle Admins</SelectItem>
                    <SelectItem value="admin-a">Admin A</SelectItem>
                    <SelectItem value="admin-b">Admin B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-muted/50">
                      <TableHead className="text-muted-foreground">Fall-ID</TableHead>
                      <TableHead className="text-muted-foreground">Betreff / Buchung</TableHead>
                      <TableHead className="text-muted-foreground">Kunde</TableHead>
                      <TableHead className="text-muted-foreground">Händler</TableHead>
                      <TableHead className="text-muted-foreground">Status</TableHead>
                      <TableHead className="text-muted-foreground">Priorität</TableHead>
                      <TableHead className="text-muted-foreground">Zugewiesen an</TableHead>
                      <TableHead className="text-muted-foreground">Letzte Aktivität</TableHead>
                      <TableHead className="text-muted-foreground text-right">Aktionen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-border hover:bg-muted/50">
                      <TableCell className="font-medium text-foreground">#D101</TableCell>
                      <TableCell className="text-foreground">
                        <div>Roboter defekt</div>
                        <div className="text-sm text-muted-foreground">(#B1001)</div>
                      </TableCell>
                      <TableCell className="text-foreground">Kunde AG</TableCell>
                      <TableCell className="text-foreground">RoboTrade GmbH</TableCell>
                      <TableCell>
                        <Badge variant="destructive">Neu</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="destructive">Hoch</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">Unzugewiesen</TableCell>
                      <TableCell className="text-foreground">Heute</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-popover border-border">
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <Eye className="mr-2 h-4 w-4" />
                              Fall ansehen/bearbeiten
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <UserCheck className="mr-2 h-4 w-4" />
                              Zuweisen an...
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <Flag className="mr-2 h-4 w-4" />
                              Priorität ändern...
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-border" />
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Status auf 'Gelöst' setzen
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-muted-foreground hover:bg-accent">
                              <Archive className="mr-2 h-4 w-4" />
                              Fall schließen
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>

                    <TableRow className="border-border hover:bg-muted/50">
                      <TableCell className="font-medium text-foreground">#D102</TableCell>
                      <TableCell className="text-foreground">
                        <div>Mietzeitraum Problem</div>
                        <div className="text-sm text-muted-foreground">(#B1003)</div>
                      </TableCell>
                      <TableCell className="text-foreground">Logistik Inc.</TableCell>
                      <TableCell className="text-foreground">RoboTrade GmbH</TableCell>
                      <TableCell>
                        <Badge className="bg-chart-4 text-white border-transparent">In Bearbeitung</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-chart-3 text-white border-transparent">Mittel</Badge>
                      </TableCell>
                      <TableCell className="text-foreground">Admin A</TableCell>
                      <TableCell className="text-foreground">Gestern</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-popover border-border">
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <Eye className="mr-2 h-4 w-4" />
                              Fall ansehen/bearbeiten
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <UserCheck className="mr-2 h-4 w-4" />
                              Zuweisen an...
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <Flag className="mr-2 h-4 w-4" />
                              Priorität ändern...
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-border" />
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Status auf 'Gelöst' setzen
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-muted-foreground hover:bg-accent">
                              <Archive className="mr-2 h-4 w-4" />
                              Fall schließen
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>

                    <TableRow className="border-border hover:bg-muted/50">
                      <TableCell className="font-medium text-foreground">#D103</TableCell>
                      <TableCell className="text-foreground">
                        <div>Frage zur Rechnung</div>
                        <div className="text-sm text-muted-foreground">(#B1002)</div>
                      </TableCell>
                      <TableCell className="text-foreground">Bau GmbH</TableCell>
                      <TableCell className="text-foreground">Händler Müller</TableCell>
                      <TableCell>
                        <Badge className="bg-chart-1 text-white border-transparent">Gelöst</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Niedrig</Badge>
                      </TableCell>
                      <TableCell className="text-foreground">Admin B</TableCell>
                      <TableCell className="text-foreground">25. Okt. 2025</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-popover border-border">
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <Eye className="mr-2 h-4 w-4" />
                              Fall ansehen/bearbeiten
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <UserCheck className="mr-2 h-4 w-4" />
                              Zuweisen an...
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <Flag className="mr-2 h-4 w-4" />
                              Priorität ändern...
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-border" />
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Status auf 'Gelöst' setzen
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-muted-foreground hover:bg-accent">
                              <Archive className="mr-2 h-4 w-4" />
                              Fall schließen
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
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
          {/* Subtitle */}
          <p className="text-muted-foreground">Überwachen Sie Konversationen.</p>

          {/* Filter & Search Bar */}
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

                <Select value={statusFilter} onValueChange={setStatusFilter}>
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

          {/* Two-Pane Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6">
            {/* Left Pane: Conversation List */}
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

            {/* Right Pane: Message Content View */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-6">
                {/* Admin Action Header */}
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

                {/* Admin Action Buttons */}
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

                {/* Message Thread */}
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

                {/* Admin Reply Box */}
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
