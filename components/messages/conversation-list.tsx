"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { ConversationItem } from "./conversation-item"

export interface Conversation {
  id: number
  sender: string
  subject: string
  snippet: string
  timestamp: string
  unread: boolean
}

interface ConversationListProps {
  conversations: Conversation[]
  activeConversationId: number
  onConversationSelect: (id: number) => void
  searchPlaceholder?: string
}

export function ConversationList({
  conversations,
  activeConversationId,
  onConversationSelect,
  searchPlaceholder = "Konversationen durchsuchen...",
}: ConversationListProps) {
  return (
    <Card className="w-[35%] flex flex-col">
      <CardHeader className="pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder={searchPlaceholder} className="pl-10 bg-background border-input" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto space-y-2 pt-0">
        {conversations.map((conv) => (
          <ConversationItem
            key={conv.id}
            sender={conv.sender}
            subject={conv.subject}
            snippet={conv.snippet}
            timestamp={conv.timestamp}
            unread={conv.unread}
            isActive={activeConversationId === conv.id}
            onClick={() => onConversationSelect(conv.id)}
          />
        ))}
      </CardContent>
    </Card>
  )
}
