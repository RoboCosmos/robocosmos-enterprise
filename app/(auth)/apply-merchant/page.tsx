"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

export default function ApplyMerchantPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitError, setSubmitError] = useState("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.") // Platzhalter für spezifische Fehler

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle") // Fehler zurücksetzen

    // Platzhalter für Formular-Validierung (z.B. Passwörter abgleichen)
    // ...

    // Simulate API call (Hier kommt Ihre Supabase-Logik hin)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Beispiel für einen simulierten Fehler
    // setSubmitStatus("error");
    // setSubmitError("Diese E-Mail-Adresse wird bereits verwendet.");
    // setIsSubmitting(false);
    // return;

    // Erfolgsfall
    setIsSubmitting(false)
    setSubmitStatus("success")
  }

  // Erfolgs-Ansicht (nach dem Absenden)
  if (submitStatus === "success") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Card className="w-full max-w-2xl">
          <CardContent className="pt-6 text-center">
            <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h2 className="mb-2 text-2xl font-bold">Bewerbung erfolgreich übermittelt!</h2>
            <p className="mb-6 text-muted-foreground">
              Vielen Dank für Ihre Bewerbung. Unser Team wird Ihre Angaben prüfen und Sie innerhalb von 48 Stunden
              kontaktieren.
            </p>
            <Link href="/">
              <Button>Zurück zur Startseite</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Standard-Ansicht (Das Formular)
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <Link href="/" className="mb-4 flex items-center justify-center gap-2">
            <Image
              src="/images/robocosmos-enterprise-logo.png"
              alt="RoboCosmos Enterprise"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">RoboCosmos</span>
              <span className="text-xs text-muted-foreground leading-tight">Enterprise</span>
            </div>
          </Link>
          <CardTitle className="text-2xl">Als verifizierter Händler bewerben</CardTitle>
          <CardDescription>
            Bitte geben Sie Ihre Daten ein. Unser Team wird Ihre Angaben prüfen und Sie innerhalb von 48 Stunden
            kontaktieren.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Sektion 1: Kontoerstellung */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Kontoerstellung</h3>
              <div className="space-y-2">
                <Label htmlFor="email">Konto E-Mail-Adresse</Label>
                <Input id="email" type="email" placeholder="ihre.email@firma.de" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Passwort erstellen</Label>
                <Input id="password" type="password" placeholder="Wählen Sie ein sicheres Passwort" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Passwort bestätigen</Label>
                <Input id="confirm-password" type="password" placeholder="Passwort wiederholen" required />
              </div>
            </div>

            {/* Sektion 2: Details zur Kontaktperson */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Details zur Kontaktperson</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Vorname</Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Nachname</Label>
                  <Input id="last-name" placeholder="Mustermann" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Geschäftliche Telefonnummer</Label>
                <Input id="phone" type="tel" placeholder="+49 123 456789" />
              </div>
            </div>

            {/* Sektion 3: Angaben zur Firmenverifizierung */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Angaben zur Firmenverifizierung</h3>
              <div className="space-y-2">
                <Label htmlFor="company-name">Offizieller Firmenname</Label>
                <Input id="company-name" placeholder="Ihre Firma GmbH" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vat-id">Umsatzsteuer-Identifikationsnummer (USt-IdNr.)</Label>
                <Input id="vat-id" placeholder="DE123456789" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Firmenwebseite (URL)</Label>
                <Input id="website" type="url" placeholder="https://ihre-firma.de" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="street">Straße & Hausnummer</Label>
                <Input id="street" placeholder="Hauptstraße 123" required />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="postal-code">Postleitzahl</Label>
                  <Input id="postal-code" placeholder="10115" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Stadt</Label>
                  <Input id="city" placeholder="Berlin" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Land</Label>
                  <Input id="country" placeholder="Deutschland" required />
                </div>
              </div>
            </div>

            {/* Sektion 4: Vereinbarung */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Vereinbarung</h3>
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  Ich stimme der{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    RoboCosmos Händlervereinbarung
                  </Link>{" "}
                  und den{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Nutzungsbedingungen
                  </Link>{" "}
                  zu.
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Bewerbung absenden
                </>
              )}
            </Button>

            {/* Feedback Area */}
            {submitStatus === "error" && (
              <div className="flex items-center gap-2 rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
                <AlertCircle className="h-5 w-5" />
                <p>{submitError}</p>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
