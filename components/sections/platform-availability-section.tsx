import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export function PlatformAvailabilitySection() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Clock className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl text-foreground">Plattform-Verfügbarkeit (SLA)</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground">
          Unsere garantierten Service Level Objectives für die Plattformverfügbarkeit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-muted/50">
                <TableHead className="text-foreground font-semibold">Service</TableHead>
                <TableHead className="text-foreground font-semibold">Zielwert (SLO)</TableHead>
                <TableHead className="text-foreground font-semibold">Metrik</TableHead>
                <TableHead className="text-foreground font-semibold">Gutschrift bei Unterschreitung</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-border hover:bg-muted/30">
                <TableCell className="font-medium text-foreground">Plattform-Uptime</TableCell>
                <TableCell>
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">99.9%</Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">Monatliche Verfügbarkeit</TableCell>
                <TableCell className="text-muted-foreground">10% Gutschrift bei &lt; 99.5%</TableCell>
              </TableRow>
              <TableRow className="border-border hover:bg-muted/30">
                <TableCell className="font-medium text-foreground">API-Antwortzeit</TableCell>
                <TableCell>
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white">&lt; 200ms</Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">P95 Latenz (95. Perzentil)</TableCell>
                <TableCell className="text-muted-foreground">5% Gutschrift bei &gt; 500ms</TableCell>
              </TableRow>
              <TableRow className="border-border hover:bg-muted/30">
                <TableCell className="font-medium text-foreground">Wartungsfenster</TableCell>
                <TableCell>
                  <Badge className="bg-purple-600 hover:bg-purple-700 text-white">&lt; 4h/Monat</Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">Geplante Wartung (nachts)</TableCell>
                <TableCell className="text-muted-foreground">Keine Gutschrift (angekündigt)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded-lg">
          <p className="text-sm text-primary">
            <strong>Hinweis:</strong> Gutschriften werden automatisch auf die nächste Rechnung angerechnet.
            SLA-Berechnungen erfolgen monatlich und schließen geplante Wartungsfenster aus.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
