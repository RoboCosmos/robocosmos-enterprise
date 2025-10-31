"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"

// Mock data for the ticket
const mockTicket = {
  id: "T-1234",
  subject: "Frage zur Rechnungsstellung",
  status: "open",
  priority: "medium",
  assignedTo: "admin-a",
  requester: {
    name: "Max Mustermann",
    email: "mustermann@gmbh.de",
  },
  createdAt: "25. Okt. 2025",
}

// Mock messages
const mockMessages = [
  {
    id: 1,
    from: "Max Mustermann",
    email: "mustermann@gmbh.de",
    date: "25. Okt. 2025, 14:30",
    content:
      "Guten Tag,\n\nich habe eine Frage zu meiner letzten Rechnung. Ich sehe dort eine Position 'Plattformgebühr', die ich nicht nachvollziehen kann. Können Sie mir erklären, wofür diese Gebühr anfällt?\n\nVielen Dank im Voraus!\nMax Mustermann",
  },
  {
    id: 2,
    from: "Admin A",
    email: "admin@robocosmos.de",
    date: "25. Okt. 2025, 15:45",
    content:
      "Hallo Herr Mustermann,\n\nvielen Dank für Ihre Anfrage. Die Plattformgebühr ist eine Servicegebühr, die für die Nutzung unserer Plattform anfällt. Diese deckt unter anderem die Kosten für:\n\n- Zahlungsabwicklung\n- Versicherungsschutz\n- Kundensupport\n- Technische Infrastruktur\n\nDie genaue Höhe der Gebühr finden Sie in unseren AGB unter Punkt 4.2.\n\nHaben Sie weitere Fragen?\n\nMit freundlichen Grüßen\nAdmin A",
  },
  {
    id: 3,
    from: "Max Mustermann",
    email: "mustermann@gmbh.de",
    date: "25. Okt. 2025, 16:20",
    content:
      "Vielen Dank für die schnelle Antwort! Das macht Sinn. Ich habe die AGB nochmal durchgelesen und verstehe es jetzt.\n\nEine letzte Frage: Wird diese Gebühr bei jeder Buchung fällig oder nur einmalig?\n\nBeste Grüße\nMax",
  },
]

export default function SupportTicketDetailPage() {
  const params = useParams()
  const router = useRouter()
  const ticketId = params.id as string

  // State for ticket details
  const [status, setStatus] = useState(mockTicket.status)
  const [priority, setPriority] = useState(mockTicket.priority)
  const [assignedTo, setAssignedTo] = useState(mockTicket.assignedTo)

  // State for reply
  const [replyType, setReplyType] = useState<"public" | "internal">("public")
  const [replyContent, setReplyContent] = useState("")

  const handleSaveChanges = () => {
    console.log("[v0] Saving ticket changes:", { status, priority, assignedTo })
    // TODO: Implement actual save logic
  }

  const handleSendReply = () => {
    console.log("[v0] Sending reply:", { replyType, replyContent })
    // TODO: Implement actual send logic
    setReplyContent("")
  }

  return (
    <div className="space-y-6">
      {/* Header with back button */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.push("/admin/support")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <AdminPageHeader
            title={`Support-Ticket #${mockTicket.id}: ${mockTicket.subject}`}
            subtitle="Bearbeiten Sie diese Anfrage und kommunizieren Sie mit dem Nutzer."
          />
        </div>
      </div>

      {/* Two-Pane Layout: 70% left (conversation) / 30% right (details) */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
        {/* Left Pane: Conversation Thread & Reply Box */}
        <div className="space-y-6">
          {/* Message Thread */}
          <Card>
            <CardHeader>
              <CardTitle>Konversationsverlauf</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {mockMessages.map((message, index) => (
                <div
                  key={message.id}
                  className={`space-y-2 ${index !== mockMessages.length - 1 ? "pb-6 border-b border-border" : ""}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-foreground">Von: {message.from}</p>
                      <p className="text-sm text-muted-foreground">{message.email}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{message.date}</p>
                  </div>
                  <div className="text-sm text-foreground whitespace-pre-wrap">{message.content}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Admin Reply Box */}
          <Card>
            <CardHeader>
              <CardTitle>Antwort verfassen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs value={replyType} onValueChange={(value) => setReplyType(value as "public" | "internal")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="public">Öffentliche Antwort</TabsTrigger>
                  <TabsTrigger value="internal">Interne Notiz</TabsTrigger>
                </TabsList>
                <TabsContent value="public" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="public-reply">Ihre Antwort (sichtbar für den Kunden)</Label>
                    <Textarea
                      id="public-reply"
                      placeholder="Verfassen Sie Ihre Antwort an den Kunden..."
                      rows={8}
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      className="resize-none"
                    />
                  </div>
                  <Button onClick={handleSendReply} disabled={!replyContent}>
                    Antwort senden
                  </Button>
                </TabsContent>
                <TabsContent value="internal" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="internal-note">Interne Notiz (nur für Admins sichtbar)</Label>
                    <Textarea
                      id="internal-note"
                      placeholder="Verfassen Sie eine interne Notiz für andere Admins..."
                      rows={8}
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      className="resize-none"
                    />
                  </div>
                  <Button onClick={handleSendReply} disabled={!replyContent}>
                    Notiz speichern
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Right Pane: Ticket Details */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Ticket-Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Status */}
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger id="status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Offen</SelectItem>
                    <SelectItem value="in-progress">In Bearbeitung</SelectItem>
                    <SelectItem value="resolved">Gelöst</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Priority */}
              <div className="space-y-2">
                <Label htmlFor="priority">Priorität</Label>
                <Select value={priority} onValueChange={setPriority}>
                  <SelectTrigger id="priority">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Niedrig</SelectItem>
                    <SelectItem value="medium">Mittel</SelectItem>
                    <SelectItem value="high">Hoch</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Assigned To */}
              <div className="space-y-2">
                <Label htmlFor="assigned-to">Zugewiesen an</Label>
                <Select value={assignedTo} onValueChange={setAssignedTo}>
                  <SelectTrigger id="assigned-to">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin-a">Admin A</SelectItem>
                    <SelectItem value="admin-b">Admin B</SelectItem>
                    <SelectItem value="unassigned">Unzugewiesen</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Divider */}
              <div className="border-t border-border pt-4 space-y-3">
                {/* Requester */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Antragsteller</p>
                  <p className="text-sm text-foreground">Kunde: {mockTicket.requester.name}</p>
                  <a href={`mailto:${mockTicket.requester.email}`} className="text-sm text-primary hover:underline">
                    {mockTicket.requester.email}
                  </a>
                </div>

                {/* Ticket ID */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Ticket-ID</p>
                  <p className="text-sm text-foreground">#{mockTicket.id}</p>
                </div>

                {/* Created At */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Erstellt am</p>
                  <p className="text-sm text-foreground">{mockTicket.createdAt}</p>
                </div>
              </div>

              {/* Save Button */}
              <Button onClick={handleSaveChanges} className="w-full">
                Änderungen speichern
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
