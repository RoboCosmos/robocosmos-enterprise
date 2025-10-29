import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function CustomerMessages() {
  const messages = [
    {
      id: 1,
      sender: "RoboTech GmbH",
      subject: "Buchungsbestätigung",
      preview: "Ihre Buchung wurde bestätigt...",
      time: "Vor 2 Stunden",
      unread: true,
    },
    {
      id: 2,
      sender: "Industrial Solutions AG",
      subject: "Angebot für ABB IRB 6700",
      preview: "Wir haben ein Angebot für Sie...",
      time: "Gestern",
      unread: true,
    },
    {
      id: 3,
      sender: "Automation Pro",
      subject: "Re: Anfrage Schweißroboter",
      preview: "Vielen Dank für Ihre Anfrage...",
      time: "Vor 3 Tagen",
      unread: false,
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Nachrichten</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Ihre Konversationen mit Händlern</p>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <Card
            key={message.id}
            className="hover:border-primary/50 transition-colors cursor-pointer"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {message.sender.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base text-foreground">{message.sender}</CardTitle>
                    <CardDescription className="text-muted-foreground">{message.time}</CardDescription>
                  </div>
                </div>
                {message.unread && <Badge className="bg-primary">Neu</Badge>}
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-foreground mb-1">{message.subject}</h4>
              <p className="text-sm text-muted-foreground">{message.preview}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
