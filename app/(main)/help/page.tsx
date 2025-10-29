"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, UserCircle, LayoutList, CalendarCheck, DollarSign, Phone, Mail, Sparkles, Server } from "lucide-react"
import { useState } from "react"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Hero / Search Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100">Hilfe & Support Center</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Finden Sie Antworten auf Ihre Fragen oder kontaktieren Sie unser Support-Team.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Wie können wir Ihnen helfen? (z.B. 'Wie erstelle ich ein Inserat?')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Quick Links / Top Topics Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-100">Häufige Themen</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Konto & Profil */}
            <Card className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-colors cursor-pointer">
              <CardHeader>
                <UserCircle className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle className="text-gray-100">Konto & Profil</CardTitle>
                <CardDescription className="text-gray-400">
                  Verwalten Sie Ihre Login-Daten und Firmendetails.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Card 2: Inserate verwalten */}
            <Card className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-colors cursor-pointer">
              <CardHeader>
                <LayoutList className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle className="text-gray-100">Inserate verwalten (für Händler)</CardTitle>
                <CardDescription className="text-gray-400">
                  Anleitungen zum Erstellen und Bearbeiten Ihrer Roboter-Angebote.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Card 3: Buchungen & Anfragen */}
            <Card className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-colors cursor-pointer">
              <CardHeader>
                <CalendarCheck className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle className="text-gray-100">Buchungen & Anfragen</CardTitle>
                <CardDescription className="text-gray-400">Alles zu Miet- und Kaufprozessen.</CardDescription>
              </CardHeader>
            </Card>

            {/* Card 4: Zahlungen & Gebühren */}
            <Card className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-colors cursor-pointer">
              <CardHeader>
                <DollarSign className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle className="text-gray-100">Zahlungen & Gebühren</CardTitle>
                <CardDescription className="text-gray-400">
                  Informationen zu Provisionen und Auszahlungen.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-100">Häufig gestellte Fragen (FAQ)</h2>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-gray-800">
                  <AccordionTrigger className="text-gray-100 hover:text-blue-500">
                    Wie werde ich verifizierter Händler?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Nach Ihrer Bewerbung prüft unser Team Ihre Angaben und Dokumente. Der Verifizierungsprozess dauert
                    in der Regel 2-3 Werktage. Sie erhalten eine E-Mail-Benachrichtigung, sobald Ihr Konto verifiziert
                    wurde. Für die Verifizierung benötigen wir einen Handelsregisterauszug und einen Nachweis Ihrer
                    Geschäftsadresse.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-gray-800">
                  <AccordionTrigger className="text-gray-100 hover:text-blue-500">
                    Welche Gebühren fallen an?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Die genauen Provisionssätze finden Sie in unserer Gebührenübersicht. Grundsätzlich berechnen wir
                    eine Provision von 5-10% je nach Transaktionsvolumen. Für Mietgeschäfte (RaaS) fällt eine monatliche
                    Provision an, bei Kaufgeschäften eine einmalige Provision. Die erste Transaktion ist für neue
                    Händler gebührenfrei.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-gray-800">
                  <AccordionTrigger className="text-gray-100 hover:text-blue-500">
                    Wie funktioniert der Mietprozess (RaaS)?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Nach Bestätigung Ihrer Anfrage durch den Händler erhalten Sie einen Mietvertrag zur Prüfung. Nach
                    Unterzeichnung und Zahlung der ersten Monatsrate wird der Roboter zu Ihrem Standort geliefert. Die
                    monatliche Abrechnung erfolgt automatisch. Sie können den Mietvertrag mit einer Frist von 30 Tagen
                    kündigen oder nach Ablauf der Mindestlaufzeit verlängern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-gray-800">
                  <AccordionTrigger className="text-gray-100 hover:text-blue-500">
                    Wie kann ich mein Passwort zurücksetzen?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Klicken Sie auf der Login-Seite auf "Passwort vergessen" und geben Sie Ihre E-Mail-Adresse ein. Sie
                    erhalten einen Link zum Zurücksetzen Ihres Passworts. Der Link ist 24 Stunden gültig. Falls Sie
                    keine E-Mail erhalten, überprüfen Sie bitte Ihren Spam-Ordner oder kontaktieren Sie unseren Support.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-gray-800">
                  <AccordionTrigger className="text-gray-100 hover:text-blue-500">
                    Wie erstelle ich ein Inserat für meinen Roboter?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Melden Sie sich in Ihrem Händler-Dashboard an und klicken Sie auf "Neues Inserat erstellen". Füllen
                    Sie alle erforderlichen Felder aus, laden Sie hochwertige Bilder hoch und geben Sie detaillierte
                    technische Spezifikationen an. Nach Prüfung durch unser Team wird Ihr Inserat innerhalb von 24
                    Stunden freigeschaltet.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-gray-800">
                  <AccordionTrigger className="text-gray-100 hover:text-blue-500">
                    Welche Zahlungsmethoden werden akzeptiert?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Wir akzeptieren Banküberweisung, Kreditkarte (Visa, Mastercard, American Express) und
                    SEPA-Lastschrift. Für größere Transaktionen bieten wir auch Finanzierungsoptionen über unsere
                    Partner an. Alle Zahlungen werden über sichere, verschlüsselte Verbindungen abgewickelt.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Contact Support Section */}
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
                  <Input
                    id="subject"
                    placeholder="Worum geht es?"
                    className="bg-gray-800 border-gray-700 text-gray-100"
                  />
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
      </div>
    </div>
  )
}
