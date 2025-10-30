import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Shield, CheckCircle2 } from "lucide-react"

export function QualityGuaranteeSection() {
  return (
    <Card className="bg-gradient-to-br from-blue-950/50 to-gray-800/50 border-blue-700/50">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Shield className="h-6 w-6 text-blue-400" />
          <CardTitle className="text-2xl text-white">Qualitätsgarantie für Komponenten</CardTitle>
        </div>
        <CardDescription className="text-gray-300">
          RoboCosmos Certified – Ihre Garantie für geprüfte Qualität
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Deutsche 50-Punkte-Prüfung</h3>
              <p className="text-gray-300">
                Alle RoboCosmos-zertifizierten Komponenten durchlaufen eine umfassende 50-Punkte-Prüfung nach deutschen
                Industriestandards. Diese Prüfung umfasst mechanische Integrität, elektrische Sicherheit,
                Software-Kompatibilität und Performance-Benchmarks.
              </p>
            </div>
          </div>

          <Separator className="bg-gray-700" />

          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Mindestgewährleistungsfrist: 6 Monate</h3>
              <p className="text-gray-300">
                Jede zertifizierte Komponente kommt mit einer Mindestgewährleistungsfrist von 6 Monaten. Viele Händler
                bieten erweiterte Garantien von bis zu 24 Monaten an. Bei Defekten innerhalb der Gewährleistungsfrist
                erfolgt kostenloser Ersatz oder Reparatur.
              </p>
            </div>
          </div>

          <Separator className="bg-gray-700" />

          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Rückverfolgbarkeit & Dokumentation</h3>
              <p className="text-gray-300">
                Jede zertifizierte Komponente erhält eine eindeutige Seriennummer und vollständige Dokumentation
                inklusive Prüfprotokoll, technischer Spezifikationen und Wartungsempfehlungen. Volle Transparenz für
                Ihre Compliance-Anforderungen.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mt-6">
          <h4 className="text-lg font-semibold text-white mb-3">
            Möchten Sie mehr über unseren Zertifizierungsprozess erfahren?
          </h4>
          <p className="text-gray-300 mb-4">
            Entdecken Sie, wie wir Qualität sicherstellen und welche Vorteile RoboCosmos Certified für Ihr Unternehmen
            bietet.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Shield className="h-4 w-4 mr-2" />
            RoboCosmos-Zertifizierungsprozess einsehen
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
