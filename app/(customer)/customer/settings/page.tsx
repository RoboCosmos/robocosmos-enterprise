"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export default function CustomerSettings() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Einstellungen</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Verwalten Sie Ihre persönlichen Daten und die Einstellungen Ihres Unternehmens.
        </p>
      </div>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="personal">Persönliches Profil</TabsTrigger>
          <TabsTrigger value="company">Firmen-Details</TabsTrigger>
          <TabsTrigger value="billing">Zahlung & Rechnungen</TabsTrigger>
          <TabsTrigger value="notifications">Benachrichtigungen</TabsTrigger>
          <TabsTrigger value="security">Sicherheit</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profil Informationen</CardTitle>
              <CardDescription>Aktualisieren Sie Ihre persönlichen Daten</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input id="firstName" defaultValue="Max" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input id="lastName" defaultValue="Mustermann" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" type="email" defaultValue="max@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" defaultValue="+49 123 456789" />
              </div>
              <Button>Änderungen speichern</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Passwort ändern</CardTitle>
              <CardDescription>Aktualisieren Sie Ihr Passwort</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Aktuelles Passwort</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">Neues Passwort</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Passwort bestätigen</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Button>Passwort aktualisieren</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="company" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Stammdaten des Unternehmens</CardTitle>
              <CardDescription>Verwalten Sie die offiziellen Daten Ihres Unternehmens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Firmenname (Offiziell)</Label>
                <Input id="companyName" placeholder="z.B. Mustermann GmbH" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vatId">Umsatzsteuer-ID (USt-ID)</Label>
                <Input id="vatId" placeholder="z.B. DE123456789" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registrationNumber">Handelsregisternummer (optional)</Label>
                <Input id="registrationNumber" placeholder="z.B. HRB 12345" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Standard-Rechnungsadresse</CardTitle>
              <CardDescription>Diese Adresse wird für alle Rechnungen verwendet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="street">Straße & Hausnummer</Label>
                <Input id="street" placeholder="z.B. Musterstraße 123" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="postalCode">PLZ</Label>
                  <Input id="postalCode" placeholder="z.B. 12345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Stadt</Label>
                  <Input id="city" placeholder="z.B. Berlin" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Land</Label>
                <Input id="country" defaultValue="Deutschland" />
              </div>
              <Button>Firmen-Daten speichern</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Zahlungsmethoden</CardTitle>
              <CardDescription>Verwalten Sie Ihre Zahlungsmethoden für Buchungen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Hier können Sie Ihre Zahlungsmethoden hinzufügen und verwalten.
              </p>
              <Button>Zahlungsmethode hinzufügen</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rechnungshistorie</CardTitle>
              <CardDescription>Laden Sie vergangene Rechnungen herunter</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Ihre Rechnungshistorie wird hier angezeigt.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>E-Mail-Benachrichtigungen</CardTitle>
              <CardDescription>Wählen Sie, welche E-Mails Sie erhalten möchten</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Buchungsbestätigungen</Label>
                  <p className="text-sm text-muted-foreground">Erhalten Sie E-Mails bei neuen Buchungen</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Angebots-Updates</Label>
                  <p className="text-sm text-muted-foreground">Benachrichtigungen über neue Angebote von Händlern</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Marketing-E-Mails</Label>
                  <p className="text-sm text-muted-foreground">Neuigkeiten und Angebote von RoboCosmos</p>
                </div>
                <Switch />
              </div>
              <Button>Einstellungen speichern</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Zwei-Faktor-Authentifizierung</CardTitle>
              <CardDescription>Erhöhen Sie die Sicherheit Ihres Kontos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>2FA aktivieren</Label>
                  <p className="text-sm text-muted-foreground">
                    Schützen Sie Ihr Konto mit einem zusätzlichen Sicherheitscode
                  </p>
                </div>
                <Switch />
              </div>
              <Button>2FA einrichten</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aktive Sitzungen</CardTitle>
              <CardDescription>Verwalten Sie Ihre aktiven Anmeldungen</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Hier sehen Sie alle Geräte, auf denen Sie angemeldet sind.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
