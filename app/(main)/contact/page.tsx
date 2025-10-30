"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Briefcase, LifeBuoy, Phone, Store, Send, Building, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-12 space-y-12">
        {/* 1. Hero Header & Introduction */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Kontaktieren Sie uns.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Wählen Sie den passenden Ansprechpartner, um eine schnelle und zielgerichtete Antwort zu erhalten.
          </p>
        </div>

        <Separator className="my-10" />

        {/* 2. Direct Contact Options (3-Column Layout) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Ihre direkten Ansprechpartner</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Allgemeine Anfragen */}
            <Card className="bg-card border-border hover:border-blue-600 transition-colors">
              <CardHeader>
                <Mail className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-foreground">Allgemeine Anfragen & Support</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Für allgemeine Fragen zur Plattform, Technik oder Administration.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <a
                    href="mailto:info@robocosmos.de"
                    className="text-blue-500 hover:text-blue-400 font-medium flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    info@robocosmos.de
                  </a>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+49 (0) 123 456 7890</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Vertrieb & Partnerschaft */}
            <Card className="bg-card border-border hover:border-blue-600 transition-colors">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-foreground">Vertrieb & Händlerpartnerschaften</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Für Anfragen zu großen Beschaffungsprojekten oder als potenzieller Händler.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <a
                    href="mailto:sales@robocosmos.de"
                    className="text-blue-500 hover:text-blue-400 font-medium flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    sales@robocosmos.de
                  </a>
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/apply-merchant">
                    <Store className="h-4 w-4 mr-2" />
                    Als Händler bewerben
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Card 3: Technischer Support */}
            <Card className="bg-card border-border hover:border-blue-600 transition-colors">
              <CardHeader>
                <LifeBuoy className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-foreground">Technischer Support & Ausfälle</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Für dringende technische Probleme im laufenden RaaS-Betrieb.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">24/7 Hotline:</p>
                      <p>+49 (0) 800 123 4567</p>
                      <p className="text-sm text-muted-foreground">(Nur für aktive Kunden)</p>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  <Link href="/help">Zum Support-Center</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 3. Contact Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground mt-16">Oder nutzen Sie unser Kontaktformular</h2>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Ihr Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Max Mustermann"
                      required
                      className="bg-background border-input text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">
                      Ihre Firma <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="company"
                      placeholder="Mustermann GmbH"
                      required
                      className="bg-background border-input text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    E-Mail-Adresse <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="max@mustermann.de"
                    required
                    className="bg-background border-input text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">
                    Betreff <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Worum geht es?"
                    required
                    className="bg-background border-input text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Ihre Nachricht <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    required
                    className="min-h-[150px] bg-background border-input text-foreground"
                  />
                </div>

                {formSubmitted && (
                  <Alert className="bg-green-900/20 border-green-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <AlertDescription className="text-green-400">
                      Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.
                    </AlertDescription>
                  </Alert>
                )}

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* 4. Location & Impressum Snippet */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground mt-16">Unser Standort</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Column 1: Address */}
            <Card className="bg-card border-border">
              <CardHeader>
                <Building className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle className="text-foreground">Hauptsitz</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">RoboCosmos Enterprise GmbH</p>
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin</p>
                  <p>Deutschland</p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Weitere Informationen:</p>
                  <div className="flex flex-col gap-2">
                    <Link href="/imprint" className="text-blue-500 hover:text-blue-400 text-sm font-medium">
                      Impressum
                    </Link>
                    <Link href="/terms" className="text-blue-500 hover:text-blue-400 text-sm font-medium">
                      AGB
                    </Link>
                    <Link href="/privacy" className="text-blue-500 hover:text-blue-400 text-sm font-medium">
                      Datenschutz
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Column 2: Map Placeholder */}
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-full min-h-[350px] bg-muted flex items-center justify-center">
                  <img
                    src="https://placehold.co/600x350/1f2937/FFFFFF?text=Standort-Karte"
                    alt="Standort Berlin"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
