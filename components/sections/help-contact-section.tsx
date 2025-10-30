import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Sparkles, Server } from "lucide-react"

export function HelpContactSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-100">Benötigen Sie weitere Hilfe?</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Column: Contact Form */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-100">Support-Anfrage senden</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">
                Ihr Name
              </Label>
              <Input id="name" placeholder="Max Mustermann" className="bg-gray-800 border-gray-700 text-gray-100" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Ihre E-Mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="max@beispiel.de"
                className="bg-gray-800 border-gray-700 text-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-gray-300">
                Betreff
              </Label>
              <Input id="subject" placeholder="Worum geht es?" className="bg-gray-800 border-gray-700 text-gray-100" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-300">
                Ihre Nachricht
              </Label>
              <Textarea
                id="message"
                placeholder="Beschreiben Sie Ihr Anliegen..."
                rows={5}
                className="bg-gray-800 border-gray-700 text-gray-100"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Anfrage senden</Button>
          </CardContent>
        </Card>

        {/* Right Column: Direct Contact Info */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-100">Direkter Kontakt</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Support Hotline */}
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-100 mb-1">Support-Hotline</h3>
                <p className="text-gray-400">+49 XXXX XXXXX</p>
                <p className="text-sm text-gray-500">Mo-Fr, 9-17 Uhr</p>
              </div>
            </div>

            {/* Support Email */}
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-100 mb-1">E-Mail Support</h3>
                <p className="text-gray-400">support@enterprise.robosource.de</p>
                <p className="text-sm text-gray-500">Antwort innerhalb von 24 Stunden</p>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="flex items-start gap-4">
              <Sparkles className="h-6 w-6 text-blue-500 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-100 mb-1">AI Assistent</h3>
                <p className="text-gray-400 mb-3">Fragen Sie unseren AI Assistenten!</p>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  Chat starten
                </Button>
              </div>
            </div>

            {/* System Status */}
            <div className="flex items-start gap-4">
              <Server className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-100 mb-1">System-Status</h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <p className="text-gray-400">Alle Systeme betriebsbereit</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
