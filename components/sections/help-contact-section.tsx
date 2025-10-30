import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Sparkles, Server } from "lucide-react"

export function HelpContactSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Benötigen Sie weitere Hilfe?</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Column: Contact Form */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Support-Anfrage senden</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Ihr Name
              </Label>
              <Input id="name" placeholder="Max Mustermann" className="bg-input border-border text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Ihre E-Mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="max@beispiel.de"
                className="bg-input border-border text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-foreground">
                Betreff
              </Label>
              <Input id="subject" placeholder="Worum geht es?" className="bg-input border-border text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Ihre Nachricht
              </Label>
              <Textarea
                id="message"
                placeholder="Beschreiben Sie Ihr Anliegen..."
                rows={5}
                className="bg-input border-border text-foreground"
              />
            </div>
            <Button className="w-full">Anfrage senden</Button>
          </CardContent>
        </Card>

        {/* Right Column: Direct Contact Info */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Direkter Kontakt</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Support Hotline */}
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Support-Hotline</h3>
                <p className="text-muted-foreground">+49 XXXX XXXXX</p>
                <p className="text-sm text-muted-foreground">Mo-Fr, 9-17 Uhr</p>
              </div>
            </div>

            {/* Support Email */}
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">E-Mail Support</h3>
                <p className="text-muted-foreground">support@enterprise.robosource.de</p>
                <p className="text-sm text-muted-foreground">Antwort innerhalb von 24 Stunden</p>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="flex items-start gap-4">
              <Sparkles className="h-6 w-6 text-primary mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">AI Assistent</h3>
                <p className="text-muted-foreground mb-3">Fragen Sie unseren AI Assistenten!</p>
                <Button variant="outline">Chat starten</Button>
              </div>
            </div>

            {/* System Status */}
            <div className="flex items-start gap-4">
              <Server className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">System-Status</h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <p className="text-muted-foreground">Alle Systeme betriebsbereit</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
