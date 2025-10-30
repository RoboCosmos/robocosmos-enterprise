import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, XCircle, CheckCircle2 } from "lucide-react"

export function IncidentResponseSection() {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-6 w-6 text-orange-500" />
          <CardTitle className="text-2xl text-white">Reaktionszeiten (Incident Response)</CardTitle>
        </div>
        <CardDescription className="text-gray-400">
          Unsere garantierten Reaktions- und Wiederherstellungszeiten bei Störungen
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700 hover:bg-gray-800/50">
                <TableHead className="text-gray-300 font-semibold">Priorität / Schweregrad</TableHead>
                <TableHead className="text-gray-300 font-semibold">Definition</TableHead>
                <TableHead className="text-gray-300 font-semibold">Ziel der Wiederherstellung (RTO)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-gray-700 hover:bg-gray-800/30">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <span className="font-semibold text-white">Kritisch (P1)</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-300">
                  Gesamter Marktplatz nicht erreichbar oder Zahlungssystem ausgefallen
                </TableCell>
                <TableCell>
                  <Badge className="bg-red-600 hover:bg-red-700 text-white">&lt; 1 Stunde</Badge>
                </TableCell>
              </TableRow>
              <TableRow className="border-gray-700 hover:bg-gray-800/30">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <span className="font-semibold text-white">Hoch (P2)</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-300">
                  Fehler in der Preisanzeige, Suchfunktion eingeschränkt, oder Buchungsprozess beeinträchtigt
                </TableCell>
                <TableCell>
                  <Badge className="bg-orange-600 hover:bg-orange-700 text-white">&lt; 4 Stunden</Badge>
                </TableCell>
              </TableRow>
              <TableRow className="border-gray-700 hover:bg-gray-800/30">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold text-white">Mittel (P3)</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-300">
                  Einzelne Features nicht verfügbar, visuelle Darstellungsfehler, oder Performance-Probleme
                </TableCell>
                <TableCell>
                  <Badge className="bg-yellow-600 hover:bg-yellow-700 text-white">&lt; 24 Stunden</Badge>
                </TableCell>
              </TableRow>
              <TableRow className="border-gray-700 hover:bg-gray-800/30">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold text-white">Niedrig (P4)</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-300">
                  Kleinere UI-Fehler, Dokumentationsfehler, oder Feature-Anfragen
                </TableCell>
                <TableCell>
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white">&lt; 5 Werktage</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 p-4 bg-orange-950/30 border border-orange-800/50 rounded-lg">
          <p className="text-sm text-orange-300">
            <strong>24/7 Support:</strong> Unser technisches Team ist rund um die Uhr erreichbar. Kritische Incidents
            (P1) werden sofort eskaliert und mit höchster Priorität behandelt.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
