import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Package, Heart, MessageSquare, TrendingUp, Clock } from "lucide-react"

export default function CustomerOverview() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Aktive Buchungen</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-100">3</div>
            <p className="text-xs text-gray-400">+1 seit letztem Monat</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Offene Anfragen</CardTitle>
            <MessageSquare className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-100">2</div>
            <p className="text-xs text-gray-400">Warten auf Antwort</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Merkliste</CardTitle>
            <Heart className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-100">12</div>
            <p className="text-xs text-gray-400">Gespeicherte Roboter</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Gesamtausgaben</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-100">€245.000</div>
            <p className="text-xs text-gray-400">Dieses Jahr</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-100">Neueste Aktivitäten</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-600/10 p-2">
                <Package className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-gray-100">Neue Buchung bestätigt</p>
                <p className="text-sm text-gray-400">KUKA KR 10 R1100 wurde von RoboTech GmbH bestätigt</p>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Vor 2 Stunden
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-600/10 p-2">
                <MessageSquare className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-gray-100">Neue Nachricht erhalten</p>
                <p className="text-sm text-gray-400">Industrial Solutions AG hat auf Ihre Anfrage geantwortet</p>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Vor 5 Stunden
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-600/10 p-2">
                <Heart className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-gray-100">Roboter zur Merkliste hinzugefügt</p>
                <p className="text-sm text-gray-400">ABB IRB 6700 wurde zu Ihrer Merkliste hinzugefügt</p>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Gestern
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-100">Schnellaktionen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Neue Anfrage stellen</Button>
            <Button variant="outline" className="border-gray-700 text-gray-100 bg-transparent">
              Roboter durchsuchen
            </Button>
            <Button variant="outline" className="border-gray-700 text-gray-100 bg-transparent">
              Händler kontaktieren
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
