import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Building, Mail, Phone, MapPin, Globe } from "lucide-react"

export default function CustomerProfile() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Firmenprofil</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Verwalten Sie Ihre Firmendaten und Kontaktinformationen
        </p>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground flex items-center gap-2">
            <Building className="h-5 w-5 text-primary" />
            Unternehmensinformationen
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Verwalten Sie Ihre Firmendaten und Kontaktinformationen
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company-name" className="text-foreground">
                Firmenname
              </Label>
              <Input
                id="company-name"
                defaultValue="Beispiel GmbH"
                className="bg-background border-input text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-foreground">
                Branche
              </Label>
              <Input
                id="industry"
                defaultValue="Automobilindustrie"
                className="bg-background border-input text-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground">
              Unternehmensbeschreibung
            </Label>
            <Textarea
              id="description"
              rows={4}
              defaultValue="Wir sind ein führendes Unternehmen in der Automobilindustrie..."
              className="bg-background border-input text-foreground"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Kontaktinformationen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                <Mail className="h-4 w-4" />
                E-Mail
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="kontakt@beispiel.de"
                className="bg-background border-input text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Telefon
              </Label>
              <Input id="phone" defaultValue="+49 123 456789" className="bg-background border-input text-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website" className="text-foreground flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Website
            </Label>
            <Input
              id="website"
              defaultValue="https://www.beispiel.de"
              className="bg-background border-input text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-foreground flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Adresse
            </Label>
            <Textarea
              id="address"
              rows={3}
              defaultValue={`Musterstraße 123
80331 München
Deutschland`}
              className="bg-background border-input text-foreground"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Änderungen speichern</Button>
      </div>
    </div>
  )
}
