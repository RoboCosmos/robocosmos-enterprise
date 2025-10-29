import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { LogIn } from "lucide-react"

export default function LoginPage() {
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
          <CardTitle className="text-2xl font-bold text-center">Willkommen zurück</CardTitle>
          <CardDescription className="text-center">Loggen Sie sich ein</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="dein@unternehmen.de" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
              <Link href="/forgot-password" className="text-sm text-primary hover:underline inline-block mt-1">
                Passwort vergessen?
              </Link>
            </div>
            <Button type="submit" className="w-full">
              <LogIn className="mr-2 h-4 w-4" />
              Log In
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            Sie haben noch keinen Account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Registrieren Sie sich hier
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
