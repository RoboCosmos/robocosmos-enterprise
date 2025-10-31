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

// Mock data for the dispute
const mockDispute = {
  id: "D101",
  subject: "Roboter defekt",
  booking: "#B1001",
  status: "new",
  priority: "high",
  assignedTo: "unassigned",
  customer: {
    name: "Kunde AG",
    email: "kontakt@kunde-ag.de",
  },
  merchant: {
    name: "RoboTrade GmbH",
    email: "support@robotrade.de",
  },
  createdAt: "28. Okt. 2025",
}

// Mock messages
const mockMessages = [
  {
    id: 1,
    from: "Kunde AG",
    email: "kontakt@kunde-ag.de",
    date: "28. Okt. 2025, 14:30",
    content:
      "Guten Tag,\n\nder gelieferte Roboter entspricht nicht den vereinbarten Spezifikationen. Die Traglast liegt deutlich unter den angegebenen 500kg. Wir haben dies mehrfach getestet und dokumentiert.\n\nWir fordern eine vollständige Rückerstattung oder einen Ersatz.\n\nMit freundlichen Grüßen\nKunde AG",
  },
  {
    id: 2,
    from: "RoboTrade GmbH",
    email: "support@robotrade.de",
    date: "28. Okt. 2025, 15:15",
    content:
      "Sehr geehrte Damen und Herren,\n\nder Roboter wurde gemäß Vertrag und Spezifikation geliefert. Die Traglast von 500kg bezieht sich auf optimale Bedingungen. Unter realen Einsatzbedingungen kann diese abweichen.\n\nWir lehnen eine Rückerstattung ab. Der Roboter funktioniert einwandfrei.\n\nMit freundlichen Grüßen\nRoboTrade GmbH",
  },
  {
    id: 3,
    from: "Kunde AG",
    email: "kontakt@kunde-ag.de",
    date: "28. Okt. 2025, 16:00",
    content:
      "Das ist nicht akzeptabel. Wir haben die Tests unter Standardbedingungen durchgeführt. Die Abweichung beträgt über 30%.\n\nWir haben Fotos, Videos und Messprotokolle als Beweis. Bitte prüfen Sie den Fall gründlich.\n\nKunde AG",
  },
]

export default function DisputeDetailPage() {
  const params = useParams()
  const router = useRouter()
  const disputeId = params.id as string

  // State for dispute details
  const [status, setStatus] = useState(mockDispute.status)
  const [priority, setPriority] = useState(mockDispute.priority)
  const [assignedTo, setAssignedTo] = useState(mockDispute.assignedTo)

  // State for reply
  const [replyType, setReplyType] = useState<"public" | "internal">("public")
  const [replyContent, setReplyContent] = useState("")

  const handleSaveChanges = () => {
    console.log("[v0] Saving dispute changes:", { status, priority, assignedTo })
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
        <Button variant="ghost" size="icon" onClick={() => router.push("/admin/disputes")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <AdminPageHeader
            title={`Streitfall #${mockDispute.id}: ${mockDispute.subject}`}
            subtitle="Prüfen Sie den Streitfall und vermitteln Sie zwischen Kunde und Händler."
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
                    <Label htmlFor="public-reply">Ihre Antwort (sichtbar für beide Parteien)</Label>
                    <Textarea
                      id="public-reply"
                      placeholder="Verfassen Sie Ihre offizielle Antwort an beide Parteien..."
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

        {/* Right Pane: Dispute Details */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Streitfall-Details</CardTitle>
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
                    <SelectItem value="new">Neu</SelectItem>
                    <SelectItem value="in-progress">In Bearbeitung</SelectItem>
                    <SelectItem value="waiting">Wartet auf Antwort</SelectItem>
                    <SelectItem value="resolved">Gelöst</SelectItem>
                    <SelectItem value="closed">Geschlossen</SelectItem>
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
                    <SelectItem value="critical">Kritisch</SelectItem>
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
                {/* Customer */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Kunde</p>
                  <p className="text-sm text-foreground">{mockDispute.customer.name}</p>
                  <a href={`mailto:${mockDispute.customer.email}`} className="text-sm text-primary hover:underline">
                    {mockDispute.customer.email}
                  </a>
                </div>

                {/* Merchant */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Händler</p>
                  <p className="text-sm text-foreground">{mockDispute.merchant.name}</p>
                  <a href={`mailto:${mockDispute.merchant.email}`} className="text-sm text-primary hover:underline">
                    {mockDispute.merchant.email}
                  </a>
                </div>

                {/* Booking */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Buchung</p>
                  <p className="text-sm text-foreground">{mockDispute.booking}</p>
                </div>

                {/* Dispute ID */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Fall-ID</p>
                  <p className="text-sm text-foreground">#{mockDispute.id}</p>
                </div>

                {/* Created At */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Erstellt am</p>
                  <p className="text-sm text-foreground">{mockDispute.createdAt}</p>
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
