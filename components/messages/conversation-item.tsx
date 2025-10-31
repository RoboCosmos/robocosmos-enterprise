"use client"

import { Badge } from "@/components/ui/badge"

interface ConversationItemProps {
  sender: string
  subject: string
  snippet: string
  timestamp: string
  unread: boolean
  isActive: boolean
  onClick: () => void
}

export function ConversationItem({
  sender,
  subject,
  snippet,
  timestamp,
  unread,
  isActive,
  onClick,
}: ConversationItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg transition-colors border ${
        isActive ? "bg-accent border-border" : "border-transparent hover:bg-accent/50"
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <span className="font-semibold text-foreground text-sm">{sender}</span>
        {unread && (
          <Badge variant="default" className="bg-primary text-xs">
            Neu
          </Badge>
        )}
      </div>
      <p className="text-sm font-medium text-foreground mb-1 line-clamp-1">{subject}</p>
      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{snippet}</p>
      <span className="text-xs text-muted-foreground">{timestamp}</span>
    </button>
  )
}
