"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, X } from "lucide-react"

export default function MerchantSettings() {
  const [activeTab, setActiveTab] = useState("personal")
  const [logoFile, setLogoFile] = useState<File | null>(null)

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0])
    }
  }

  const removeLogo = () => {
    setLogoFile(null)
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Einstellungen</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Verwalten Sie Ihr persönliches Profil, Ihr öffentliches Händlerprofil und Ihre Service-Einstellungen.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="personal">Persönliches Profil</TabsTrigger>
          <TabsTrigger value="public">Öffentliches Händlerprofil</TabsTrigger>
          <TabsTrigger value="finance">Finanzen & Auszahlung</TabsTrigger>
          <TabsTrigger value="logistics">Logistik & Service</TabsTrigger>
          <TabsTrigger value="notifications">Benachrichtigungen</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profil Informationen</CardTitle>
              <CardDescription>Verwalten Sie Ihre persönlichen Daten</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Vorname</Label>
                  <Input id="first-name" defaultValue="Max" className="bg-background border-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Nachname</Label>
                  <Input id="last-name" defaultValue="Mustermann" className="bg-background border-input" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="max.mustermann@robotik-solutions.de"
                  className="bg-background border-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" defaultValue="+49 89 12345678" className="bg-background border-input" />
              </div>
              <Button className="bg-primary hover:bg-primary/90">Änderungen speichern</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Passwort ändern</CardTitle>
              <CardDescription>Aktualisieren Sie Ihr Passwort für mehr Sicherheit</CardDescription>
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
        </TabsContent>

        <TabsContent value="public" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Öffentliche Händler-Stammdaten</CardTitle>
              <CardDescription>Diese Informationen sind für Kunden auf der Plattform sichtbar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="display-name">Angezeigter Firmenname</Label>
                <Input id="display-name" defaultValue="Robotik Solutions GmbH" className="bg-background border-input" />
                <p className="text-xs text-muted-foreground">
                  Dieser Name wird Kunden in Ihrem öffentlichen Profil angezeigt
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="logo-upload">Händler-Logo hochladen</Label>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("logo-upload")?.click()}
                    className="w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Logo auswählen
                  </Button>
                  <input
                    id="logo-upload"
                    type="file"
                    className="hidden"
                    onChange={handleLogoChange}
                    accept=".jpg,.jpeg,.png,.svg"
                  />
                </div>
                {logoFile && (
                  <div className="flex items-center justify-between p-2 bg-muted rounded-md mt-2">
                    <span className="text-sm text-foreground truncate">{logoFile.name}</span>
                    <Button type="button" variant="ghost" size="sm" onClick={removeLogo}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                <p className="text-xs text-muted-foreground">Empfohlen: PNG oder SVG, max. 2 MB</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-description">Kurzbeschreibung des Unternehmens (für Kunden sichtbar)</Label>
                <Textarea
                  id="company-description"
                  placeholder="Beschreiben Sie Ihr Unternehmen und Ihre Dienstleistungen..."
                  defaultValue="Wir sind ein führender Anbieter von Robotik-Lösungen für die Industrie mit über 15 Jahren Erfahrung."
                  className="min-h-[120px] resize-y"
                />
                <p className="text-xs text-muted-foreground">
                  Diese Beschreibung erscheint in Ihrem öffentlichen Händlerprofil
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="public-contact">Öffentlicher Support-Kontakt (E-Mail oder Telefon)</Label>
                <Input
                  id="public-contact"
                  defaultValue="support@robotik-solutions.de"
                  className="bg-background border-input"
                />
                <p className="text-xs text-muted-foreground">Kunden können Sie über diesen Kontakt direkt erreichen</p>
              </div>

              <Button className="bg-primary hover:bg-primary/90">Öffentliches Profil speichern</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Auszahlungskonto (für Ihre Einnahmen)</CardTitle>
              <CardDescription>Geben Sie Ihre Bankverbindung für Auszahlungen an</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="account-holder">Kontoinhaber</Label>
                <Input
                  id="account-holder"
                  defaultValue="Robotik Solutions GmbH"
                  className="bg-background border-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="iban">IBAN</Label>
                <Input id="iban" defaultValue="DE89 3704 0044 0532 0130 00" className="bg-background border-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bic">BIC (Swift)</Label>
                <Input id="bic" defaultValue="COBADEFFXXX" className="bg-background border-input" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Steuerliche Angaben</CardTitle>
              <CardDescription>Diese Informationen werden auf Rechnungen an Kunden ausgewiesen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vat-id">Umsatzsteuer-ID (USt-ID)</Label>
                <Input id="vat-id" defaultValue="DE123456789" className="bg-background border-input" />
                <p className="text-xs text-muted-foreground">
                  Wird auf Rechnungen an Kunden ausgewiesen (Pflichtangabe für B2B)
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary/90">Finanzdaten speichern</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logistics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Standard-Logistikeinstellungen (RaaS)</CardTitle>
              <CardDescription>
                Definieren Sie Standard-Kosten und Services für Ihre Roboter-Vermietungen
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="transport-cost">Standard-Transportkosten (pauschal, in €)</Label>
                <Input
                  id="transport-cost"
                  type="number"
                  defaultValue="150"
                  className="bg-background border-input"
                  placeholder="z.B. 150"
                />
                <p className="text-xs text-muted-foreground">
                  Diese Kosten werden standardmäßig für Lieferung und Abholung berechnet
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="installation-cost">Kosten für Erst-Installation (optional, in €)</Label>
                <Input
                  id="installation-cost"
                  type="number"
                  defaultValue="250"
                  className="bg-background border-input"
                  placeholder="z.B. 250"
                />
                <p className="text-xs text-muted-foreground">
                  Zusätzliche Kosten für Einrichtung und Inbetriebnahme beim Kunden
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service-description">Beschreibung der angebotenen Services (Installation etc.)</Label>
                <Textarea
                  id="service-description"
                  placeholder="Beschreiben Sie Ihre Logistik- und Service-Leistungen..."
                  defaultValue="Wir bieten professionelle Lieferung, Installation und Einweisung. Unser Techniker-Team steht während der gesamten Mietdauer für Support zur Verfügung."
                  className="min-h-[120px] resize-y"
                />
                <p className="text-xs text-muted-foreground">
                  Diese Beschreibung wird Kunden bei der Buchung angezeigt
                </p>
              </div>

              <Button className="bg-primary hover:bg-primary/90">Logistik-Einstellungen speichern</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Benachrichtigungen</CardTitle>
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
