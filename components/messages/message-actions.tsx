"use client"

import { Button } from "@/components/ui/button"
import { Reply, Archive, FileText } from "lucide-react"

interface MessageActionsProps {
  onReply?: () => void
  onArchive?: () => void
  onAttachOffer?: () => void
  showAttachOffer?: boolean
}

export function MessageActions({ onReply, onArchive, onAttachOffer, showAttachOffer = true }: MessageActionsProps) {
  return (
    <div className="flex gap-2 mt-4">
      <Button variant="default" className="bg-primary hover:bg-primary/90" onClick={onReply}>
        <Reply className="h-4 w-4 mr-2" />
        Antworten
      </Button>
      <Button variant="outline" onClick={onArchive}>
        <Archive className="h-4 w-4 mr-2" />
        Archivieren
      </Button>
      {showAttachOffer && (
        <Button variant="outline" onClick={onAttachOffer}>
          <FileText className="h-4 w-4 mr-2" />
          Angebot anhängen
        </Button>
      )}
    </div>
  )
}
