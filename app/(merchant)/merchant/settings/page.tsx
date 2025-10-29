import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Building2, Mail, Phone, Globe, Bell, Shield, CreditCard } from "lucide-react"

export default function MerchantSettings() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Einstellungen</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Verwalten Sie Ihre Händler-Einstellungen</p>
      </div>

      {/* Company Information */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>Unternehmensinformationen</CardTitle>
          </div>
          <CardDescription>Verwalten Sie Ihre Unternehmensdaten</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company-name">Firmenname</Label>
              <Input id="company-name" defaultValue="Robotik Solutions GmbH" className="bg-background border-input" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vat-id">USt-IdNr.</Label>
              <Input id="vat-id" defaultValue="DE123456789" className="bg-background border-input" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Adresse</Label>
            <Input
              id="address"
              defaultValue="Industriestraße 42, 80331 München"
              className="bg-background border-input"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">
                <Mail className="h-4 w-4 inline mr-2" />
                E-Mail
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="kontakt@robotik-solutions.de"
                className="bg-background border-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">
                <Phone className="h-4 w-4 inline mr-2" />
                Telefon
              </Label>
              <Input id="phone" defaultValue="+49 89 12345678" className="bg-background border-input" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">
              <Globe className="h-4 w-4 inline mr-2" />
              Website
            </Label>
            <Input
              id="website"
              defaultValue="https://www.robotik-solutions.de"
              className="bg-background border-input"
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90">Änderungen speichern</Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <CardTitle>Benachrichtigungen</CardTitle>
          </div>
          <CardDescription>Verwalten Sie Ihre Benachrichtigungseinstellungen</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Neue Anfragen</Label>
              <p className="text-sm text-muted-foreground">Benachrichtigung bei neuen Kundenanfragen</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Neue Bewertungen</Label>
              <p className="text-sm text-muted-foreground">Benachrichtigung bei neuen Kundenbewertungen</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Zahlungseingänge</Label>
              <p className="text-sm text-muted-foreground">Benachrichtigung bei erfolgreichen Zahlungen</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Marketing-E-Mails</Label>
              <p className="text-sm text-muted-foreground">Informationen über neue Features und Updates</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <CardTitle>Sicherheit</CardTitle>
          </div>
          <CardDescription>Verwalten Sie Ihre Sicherheitseinstellungen</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Aktuelles Passwort</Label>
            <Input id="current-password" type="password" className="bg-background border-input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">Neues Passwort</Label>
            <Input id="new-password" type="password" className="bg-background border-input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Passwort bestätigen</Label>
            <Input id="confirm-password" type="password" className="bg-background border-input" />
          </div>
          <Button className="bg-primary hover:bg-primary/90">Passwort ändern</Button>
        </CardContent>
      </Card>

      {/* Payment Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            <CardTitle>Zahlungsinformationen</CardTitle>
          </div>
          <CardDescription>Verwalten Sie Ihre Bankverbindung</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="iban">IBAN</Label>
            <Input id="iban" defaultValue="DE89 3704 0044 0532 0130 00" className="bg-background border-input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bic">BIC</Label>
            <Input id="bic" defaultValue="COBADEFFXXX" className="bg-background border-input" />
          </div>
          <Button className="bg-primary hover:bg-primary/90">Änderungen speichern</Button>
        </CardContent>
      </Card>
    </div>
  )
}
