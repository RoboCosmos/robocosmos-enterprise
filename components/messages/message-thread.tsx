export interface Message {
  id: number
  from: string
  date: string
  content: string
}

interface MessageThreadProps {
  messages: Message[]
}

export function MessageThread({ messages }: MessageThreadProps) {
  return (
    <div className="space-y-6">
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
    </div>
  )
}
