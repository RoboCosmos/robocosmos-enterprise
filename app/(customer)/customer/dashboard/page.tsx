import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Box, Clock, ShieldCheck, MessageSquare } from "lucide-react" // Updated icons to match specifications

export default function CustomerDashboard() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Willkommen zurück! Hier ist Ihre Übersicht.</p>
      </div>

      <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-[#f8f9fa]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktive Buchungen</CardTitle>
            <Box className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">2 laufend, 1 geplant</p>
          </CardContent>
        </Card>

        <Card className="bg-[#f8f9fa]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Offene Anfragen</CardTitle>
            <Clock className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1">Warten auf Antwort</p>
          </CardContent>
        </Card>

        <Card className="bg-[#f8f9fa]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wartende Genehmigungen</CardTitle>
            <ShieldCheck className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1</div>
            <p className="text-xs text-muted-foreground mt-1">1 zur Freigabe</p>
          </CardContent>
        </Card>

        <Card className="bg-[#f8f9fa]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nachrichten</CardTitle>
            <MessageSquare className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-xs text-muted-foreground mt-1">3 ungelesen</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#f8f9fa]">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Letzte Aktivitäten</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1.5 h-3 w-3 rounded-full bg-[#0052FF] flex-shrink-0" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Neue Buchungsanfrage gesendet</p>
                <p className="text-xs text-muted-foreground">Vor 2 Stunden</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1.5 h-3 w-3 rounded-full bg-yellow-500 flex-shrink-0" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Angebot erhalten</p>
                <p className="text-xs text-muted-foreground">Gestern</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1.5 h-3 w-3 rounded-full bg-[#0052FF] flex-shrink-0" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Team-Mitglied eingeladen</p>
                <p className="text-xs text-muted-foreground">Vor 3 Tagen</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
