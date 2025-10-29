import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
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
          <CardTitle className="text-2xl font-bold text-center">Passwort zurücksetzen</CardTitle>
          <CardDescription className="text-center">
            Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" type="email" placeholder="ihre@email.de" required />
            </div>
            <Button type="submit" className="w-full">
              Link senden
            </Button>
          </form>
          <div className="mt-6 text-center">
            <Link href="/login" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Anmeldung
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
