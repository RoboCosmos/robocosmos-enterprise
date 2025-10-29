import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
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
          <CardTitle className="text-2xl font-bold text-center">Registrieren</CardTitle>
          <CardDescription className="text-center">Erstellen Sie Ihr RoboCosmos Enterprise Konto</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {/* ENTFERNT: Das Select-Feld für den Kontotyp wurde entfernt. */}

            <div className="space-y-2">
              <Label htmlFor="company">Firmenname (Optional)</Label>
              <Input id="company" type="text" placeholder="Ihre Firma GmbH" />
              {/* Hinweis: 'required' entfernt, um es für Kunden optional zu machen */}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" type="email" placeholder="ihre@email.de" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>
            <Button type="submit" className="w-full">
              Kundenkonto erstellen
            </Button>
          </form>

          {/* --- ANGEPASSTER FOOTER --- */}
          <div className="mt-6 space-y-2 text-center text-sm text-muted-foreground">
            <p>
              Bereits ein Konto?{" "}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Jetzt anmelden
              </Link>
            </p>
            <p className="pt-2 border-t border-border/50">
              Möchten Sie Roboter anbieten?{" "}
              <Link href="/apply-merchant" className="text-primary font-semibold hover:underline">
                Als Händler bewerben
              </Link>
            </p>
          </div>
          {/* --- ENDE DER ANPASSUNG --- */}
        </CardContent>
      </Card>
    </div>
  )
}
