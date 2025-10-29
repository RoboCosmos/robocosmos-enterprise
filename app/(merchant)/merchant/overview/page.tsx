import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, AlertCircle, DollarSign, Star, Inbox, CalendarClock } from "lucide-react"

export default function MerchantOverviewPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Aktive Inserate</CardTitle>
            <FileText className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-100">12</div>
            <p className="text-xs text-gray-400">+2 diese Woche</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Offene Anfragen</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-100">3</div>
            <p className="text-xs text-gray-400">Benötigen Antwort</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Umsatz (30 Tage)</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-100">€45.800</div>
            <p className="text-xs text-gray-400">+18% zum Vormonat</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Neue Bewertungen</CardTitle>
            <Star className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-100">2</div>
            <p className="text-xs text-gray-400">Ø 4.8 Sterne</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-100">Dringende Aufgaben</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium">3 Buchungsanfragen warten auf Antwort.</p>
                <p className="text-xs text-muted-foreground">Vor 2 Stunden</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Inbox className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Neue Nachricht von Kunde GmbH erhalten.</p>
                <p className="text-xs text-muted-foreground">Vor 4 Stunden</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CalendarClock className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Inserat 'Atlas V3' läuft in 5 Tagen ab.</p>
                <p className="text-xs text-muted-foreground">Vor 1 Tag</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="lg:col-span-1 bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-100">Umsatzübersicht (Letzte 30 Tage)</CardTitle>
            <CardDescription className="text-gray-400">Entwicklung Ihrer Einnahmen im letzten Monat</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[200px] items-center justify-center rounded-lg border border-dashed border-gray-700 bg-gray-900/50">
              <p className="text-sm text-muted-foreground">
                {/* Chart component will be rendered here */}
                Chart-Komponente wird hier eingefügt
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1 bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-100">Neueste Aktivitäten</CardTitle>
            <CardDescription className="text-gray-400">Ihre letzten Aktionen und Ereignisse</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-600 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Neue Buchungsanfrage für 'Digit V2' erhalten.</p>
                  <p className="text-xs text-muted-foreground">Vor 1 Stunde</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-green-600 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Bewertung (5 Sterne) von Kunde AG erhalten.</p>
                  <p className="text-xs text-muted-foreground">Vor 3 Stunden</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-600 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Inserat 'Kuka Arm KR150' erfolgreich veröffentlicht.</p>
                  <p className="text-xs text-muted-foreground">Vor 5 Stunden</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-yellow-600 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Zahlung von €2.400 erfolgreich eingegangen.</p>
                  <p className="text-xs text-muted-foreground">Gestern</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-600 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Profil aktualisiert: Neue Kontaktdaten hinzugefügt.</p>
                  <p className="text-xs text-muted-foreground">Vor 2 Tagen</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
