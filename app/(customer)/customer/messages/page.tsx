"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, FileText, Archive, Reply } from "lucide-react"
import { useState } from "react"

export default function CustomerMessages() {
  const [activeConversation, setActiveConversation] = useState(1)

  const conversations = [
    {
      id: 1,
      sender: "Händler TechRobotics",
      subject: "Angebot für Atlas V3 (ID: #AN-12345)",
      snippet: "Sehr geehrter Kunde, anbei finden Sie unser Angebot...",
      timestamp: "Gestern",
      unread: true,
    },
    {
      id: 2,
      sender: "RoboSupply GmbH",
      subject: "Buchungsbestätigung ABB IRB 6700",
      snippet: "Ihre Buchung wurde erfolgreich bestätigt...",
      timestamp: "Vor 2 Tagen",
      unread: false,
    },
    {
      id: 3,
      sender: "Industrial Solutions",
      subject: "Re: Anfrage KUKA KR QUANTEC",
      snippet: "Vielen Dank für Ihre Anfrage. Der Roboter ist...",
      timestamp: "Vor 3 Tagen",
      unread: false,
    },
    {
      id: 4,
      sender: "Automation Pro",
      subject: "Liefertermin Fanuc M-20iA",
      snippet: "Der Liefertermin wurde auf den 20. November...",
      timestamp: "Vor 1 Woche",
      unread: false,
    },
  ]

  const activeConv = conversations.find((c) => c.id === activeConversation)

  const messages = [
    {
      id: 1,
      from: "Sie (Mustermann GmbH)",
      date: "14. Nov 2025, 10:30 Uhr",
      content:
        "Guten Tag,\n\nwir interessieren uns für den Atlas V3 Roboter für unser Produktionswerk. Können Sie uns ein Angebot erstellen?\n\nMit freundlichen Grüßen\nMax Mustermann",
    },
    {
      id: 2,
      from: "Händler TechRobotics",
      date: "14. Nov 2025, 14:15 Uhr",
      content:
        "Sehr geehrter Herr Mustermann,\n\nvielen Dank für Ihre Anfrage. Gerne erstelle ich Ihnen ein individuelles Angebot für den Atlas V3. Anbei finden Sie alle Details zu Verfügbarkeit, Konditionen und Lieferzeiten.\n\nBei Fragen stehe ich Ihnen jederzeit zur Verfügung.\n\nMit freundlichen Grüßen\nIhr TechRobotics Team",
    },
    {
      id: 3,
      from: "Sie (Mustermann GmbH)",
      date: "15. Nov 2025, 09:00 Uhr",
      content: "Vielen Dank für das detaillierte Angebot! Können wir einen Termin für eine Vorführung vereinbaren?",
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Posteingang</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1">Ihre Konversationen mit Händlern</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <FileText className="h-4 w-4 mr-2" />
          Neue Nachricht verfassen
        </Button>
      </div>

      <div className="flex gap-6 h-[calc(100vh-12rem)]">
        {/* Left Pane - Conversation List */}
        <Card className="w-[35%] flex flex-col">
          <CardHeader className="pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Konversationen durchsuchen..." className="pl-10 bg-background border-input" />
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-2 pt-0">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setActiveConversation(conv.id)}
                className={`w-full text-left p-4 rounded-lg transition-colors border ${
                  activeConversation === conv.id ? "bg-accent border-border" : "border-transparent hover:bg-accent/50"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="font-semibold text-foreground text-sm">{conv.sender}</span>
                  {conv.unread && (
                    <Badge variant="default" className="bg-primary text-xs">
                      Neu
                    </Badge>
                  )}
                </div>
                <p className="text-sm font-medium text-foreground mb-1 line-clamp-1">{conv.subject}</p>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{conv.snippet}</p>
                <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Right Pane - Message Content View */}
        <Card className="flex-1 flex flex-col">
          <CardHeader className="border-b border-border pb-4">
            <CardTitle className="text-xl">{activeConv?.subject}</CardTitle>
            <CardDescription>Konversation mit {activeConv?.sender}</CardDescription>
            <div className="flex gap-2 mt-4">
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                <Reply className="h-4 w-4 mr-2" />
                Antworten
              </Button>
              <Button variant="outline">
                <Archive className="h-4 w-4 mr-2" />
                Archivieren
              </Button>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Angebot anhängen
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div key={message.id} className="border-b border-border pb-6 last:border-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground">Von: {message.from}</p>
                    <p className="text-sm text-muted-foreground">Datum: {message.date}</p>
                  </div>
                </div>
                <div className="text-sm text-foreground whitespace-pre-line leading-relaxed">{message.content}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
