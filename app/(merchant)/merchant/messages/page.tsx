"use client"

import { useState } from "react"
import { MessageHeader } from "@/components/messages/message-header"
import { ConversationList, type Conversation } from "@/components/messages/conversation-list"
import { MessageView } from "@/components/messages/message-view"
import type { Message } from "@/components/messages/message-thread"

export default function MerchantMessages() {
  const [activeConversation, setActiveConversation] = useState(1)

  const conversations: Conversation[] = [
    {
      id: 1,
      sender: "Mustermann GmbH",
      subject: "Anfrage zu Atlas V3 (ID: #AN-12345)",
      snippet: "Guten Tag, wir interessieren uns für den Atlas V3 Roboter...",
      timestamp: "Gestern",
      unread: true,
    },
    {
      id: 2,
      sender: "TechSolutions AG",
      subject: "Buchungsbestätigung ABB IRB 6700",
      snippet: "Vielen Dank für die Bestätigung. Wann können wir...",
      timestamp: "Vor 2 Tagen",
      unread: false,
    },
    {
      id: 3,
      sender: "Industrie Partner GmbH",
      subject: "Wartungstermin KUKA KR QUANTEC",
      snippet: "Können wir den Wartungstermin auf nächste Woche...",
      timestamp: "Vor 3 Tagen",
      unread: false,
    },
    {
      id: 4,
      sender: "Automation Pro",
      subject: "Angebot für Fanuc M-20iA",
      snippet: "Wir haben Ihr Angebot erhalten und möchten...",
      timestamp: "Vor 1 Woche",
      unread: false,
    },
  ]

  const messages: Message[] = [
    {
      id: 1,
      from: "Mustermann GmbH",
      date: "15. Nov 2025, 14:30 Uhr",
      content:
        "Guten Tag,\n\nwir interessieren uns für den Atlas V3 Roboter für unser Produktionswerk in München. Können Sie uns weitere Details zur Verfügbarkeit und den Konditionen mitteilen?\n\nMit freundlichen Grüßen\nMax Mustermann",
    },
    {
      id: 2,
      from: "Sie (RoboTech GmbH)",
      date: "15. Nov 2025, 15:45 Uhr",
      content:
        "Sehr geehrter Herr Mustermann,\n\nvielen Dank für Ihre Anfrage. Der Atlas V3 ist aktuell verfügbar. Ich habe Ihnen ein detailliertes Angebot mit allen Konditionen zusammengestellt.\n\nBei Fragen stehe ich Ihnen gerne zur Verfügung.\n\nMit freundlichen Grüßen\nIhr RoboTech Team",
    },
    {
      id: 3,
      from: "Mustermann GmbH",
      date: "16. Nov 2025, 09:15 Uhr",
      content: "Vielen Dank für das schnelle Angebot! Können wir einen Termin für eine Vorführung vereinbaren?",
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
      <MessageHeader title="Posteingang" subtitle="Ihre Kundenkonversationen" composePath="/merchant/messages/new" />

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
