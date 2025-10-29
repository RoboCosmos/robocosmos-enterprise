import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Search, Send } from "lucide-react"

export default function MerchantMessages() {
  const conversations = [
    {
      id: 1,
      customer: "Max Müller",
      lastMessage: "Ist der Roboter noch verfügbar?",
      time: "vor 5 Min",
      unread: 2,
      robot: "ABB IRB 6700",
    },
    {
      id: 2,
      customer: "Anna Schmidt",
      lastMessage: "Vielen Dank für die schnelle Antwort!",
      time: "vor 1 Std",
      unread: 0,
      robot: "KUKA KR QUANTEC",
    },
    {
      id: 3,
      customer: "Thomas Weber",
      lastMessage: "Können Sie mir mehr Details zur Wartung geben?",
      time: "vor 3 Std",
      unread: 1,
      robot: "Fanuc M-20iA",
    },
  ]

  return (
    <div className="flex h-[calc(100vh-4rem)] gap-4">
      {/* Conversations List */}
      <Card className="w-96 flex flex-col">
        <CardHeader>
          <CardTitle>Nachrichten</CardTitle>
          <CardDescription>Ihre Kundenkonversationen</CardDescription>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Konversationen durchsuchen..."
              className="pl-10 bg-background border-input placeholder:text-muted-foreground"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto space-y-2">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors border border-transparent hover:border-border"
            >
              <div className="flex items-start justify-between mb-1">
                <span className="font-semibold text-foreground">{conv.customer}</span>
                {conv.unread > 0 && <Badge className="bg-primary">{conv.unread}</Badge>}
              </div>
              <p className="text-sm text-muted-foreground mb-1">{conv.robot}</p>
              <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
              <span className="text-xs text-muted-foreground mt-1 block">{conv.time}</span>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Chat Area */}
      <Card className="flex-1 flex flex-col">
        <CardHeader className="border-b border-border">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <CardTitle>Max Müller</CardTitle>
              <CardDescription>ABB IRB 6700</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-3 max-w-md">
              <p className="text-sm text-foreground">Ist der Roboter noch verfügbar?</p>
              <span className="text-xs text-muted-foreground mt-1 block">vor 5 Min</span>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-primary rounded-lg p-3 max-w-md">
              <p className="text-sm text-primary-foreground">
                Ja, der Roboter ist noch verfügbar. Möchten Sie weitere Details?
              </p>
              <span className="text-xs text-primary-foreground/80 mt-1 block">vor 2 Min</span>
            </div>
          </div>
        </CardContent>
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              placeholder="Nachricht eingeben..."
              className="flex-1 bg-background border-input placeholder:text-muted-foreground"
            />
            <Button className="bg-primary hover:bg-primary/90">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
