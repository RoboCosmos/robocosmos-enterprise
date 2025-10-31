"use client"

import { useState } from "react"
import { MessageHeader } from "@/components/messages/message-header"
import { ConversationList, type Conversation } from "@/components/messages/conversation-list"
import { MessageView } from "@/components/messages/message-view"
import type { Message } from "@/components/messages/message-thread"

export default function CustomerMessages() {
  const [activeConversation, setActiveConversation] = useState(1)

  const conversations: Conversation[] = [
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

  const messages: Message[] = [
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

  const activeConv = conversations.find((c) => c.id === activeConversation)

  const handleReply = () => {
    console.log("Antworten")
  }

  const handleArchive = () => {
    console.log("Archivieren")
  }

  const handleAttachOffer = () => {
    console.log("Angebot anhängen")
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <MessageHeader
        title="Posteingang"
        subtitle="Ihre Konversationen mit Händlern"
        composePath="/customer/messages/new"
      />

      <div className="flex gap-6 h-[calc(100vh-12rem)]">
        <ConversationList
          conversations={conversations}
          activeConversationId={activeConversation}
          onConversationSelect={setActiveConversation}
        />

        {activeConv && (
          <MessageView
            subject={activeConv.subject}
            participant={activeConv.sender}
            messages={messages}
            onReply={handleReply}
            onArchive={handleArchive}
            onAttachOffer={handleAttachOffer}
          />
        )}
      </div>
    </div>
  )
}
