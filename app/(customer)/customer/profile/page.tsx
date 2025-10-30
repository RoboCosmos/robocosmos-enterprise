import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Building, Mail, Phone, MapPin, Globe } from "lucide-react"

export default function CustomerProfile() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold text-zinc-100 mb-6">Firmenprofil</h1>

      {/* Company Information */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-zinc-100 flex items-center gap-2">
            <Building className="h-5 w-5 text-blue-600" />
            Unternehmensinformationen
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Verwalten Sie Ihre Firmendaten und Kontaktinformationen
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company-name" className="text-zinc-300">
                Firmenname
              </Label>
              <Input
                id="company-name"
                defaultValue="Beispiel GmbH"
                className="bg-zinc-800 border-zinc-700 text-zinc-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-zinc-300">
                Branche
              </Label>
              <Input
                id="industry"
                defaultValue="Automobilindustrie"
                className="bg-zinc-800 border-zinc-700 text-zinc-100"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-zinc-300">
              Unternehmensbeschreibung
            </Label>
            <Textarea
              id="description"
              rows={4}
              defaultValue="Wir sind ein führendes Unternehmen in der Automobilindustrie..."
              className="bg-zinc-800 border-zinc-700 text-zinc-100"
            />
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-zinc-100 flex items-center gap-2">
            <Mail className="h-5 w-5 text-blue-600" />
            Kontaktinformationen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-300 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                E-Mail
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="kontakt@beispiel.de"
                className="bg-zinc-800 border-zinc-700 text-zinc-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-zinc-300 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Telefon
              </Label>
              <Input id="phone" defaultValue="+49 123 456789" className="bg-zinc-800 border-zinc-700 text-zinc-100" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website" className="text-zinc-300 flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Website
            </Label>
            <Input
              id="website"
              defaultValue="https://www.beispiel.de"
              className="bg-zinc-800 border-zinc-700 text-zinc-100"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-zinc-300 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Adresse
            </Label>
            <Textarea
              id="address"
              rows={3}
              defaultValue={`Musterstraße 123
80331 München
Deutschland`}
              className="bg-zinc-800 border-zinc-700 text-zinc-100"
            />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Änderungen speichern</Button>
      </div>
    </div>
  )
}
