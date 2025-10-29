import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function CustomerSettings() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Einstellungen</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Verwalten Sie Ihre Konto-Einstellungen</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profil Informationen</CardTitle>
          <CardDescription>Aktualisieren Sie Ihre persönlichen Daten</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">Vorname</Label>
              <Input id="firstName" defaultValue="Max" className="bg-background border-input text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nachname</Label>
              <Input id="lastName" defaultValue="Mustermann" className="bg-background border-input text-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              type="email"
              defaultValue="max@example.com"
              className="bg-background border-input text-foreground"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon</Label>
            <Input id="phone" defaultValue="+49 123 456789" className="bg-background border-input text-foreground" />
          </div>
          <Button className="bg-primary hover:bg-primary/90">Änderungen speichern</Button>
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
            <Input id="currentPassword" type="password" className="bg-background border-input text-foreground" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">Neues Passwort</Label>
            <Input id="newPassword" type="password" className="bg-background border-input text-foreground" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Passwort bestätigen</Label>
            <Input id="confirmPassword" type="password" className="bg-background border-input text-foreground" />
          </div>
          <Button className="bg-primary hover:bg-primary/90">Passwort aktualisieren</Button>
        </CardContent>
      </Card>
    </div>
  )
}
