import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageActions } from "./message-actions"
import { MessageThread, type Message } from "./message-thread"

interface MessageViewProps {
  subject: string
  participant: string
  messages: Message[]
  showAttachOffer?: boolean
  onReply?: () => void
  onArchive?: () => void
  onAttachOffer?: () => void
}

export function MessageView({
  subject,
  participant,
  messages,
  showAttachOffer = true,
  onReply,
  onArchive,
  onAttachOffer,
}: MessageViewProps) {
  return (
    <Card className="flex-1 flex flex-col">
      <CardHeader className="border-b border-border pb-4">
        <CardTitle className="text-xl">{subject}</CardTitle>
        <CardDescription>Konversation mit {participant}</CardDescription>
        <MessageActions
          onReply={onReply}
          onArchive={onArchive}
          onAttachOffer={onAttachOffer}
          showAttachOffer={showAttachOffer}
        />
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-6">
        <MessageThread messages={messages} />
      </CardContent>
    </Card>
  )
}
