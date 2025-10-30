import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield } from "lucide-react"
import Link from "next/link"

export function LogisticsStandardsSection() {
  const standards = [
    "Spezialisiertes Speditionsnetzwerk für Industrieroboter",
    "Standardisierte Palettierung und Verpackung nach DIN-Norm",
    "Abnahme-Checkliste bei Übergabe (50-Punkte-Prüfung)",
    "Transportversicherung für Schäden während des Transports",
    "Dokumentierte Zustandsprüfung vor und nach der Miete",
    "24/7 Tracking und Statusupdates während des Transports",
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Qualitäts- und Sicherheitsstandards</h2>
          <p className="text-gray-400 text-lg">
            Unsere Logistik-Mindeststandards garantieren sichere und professionelle Abwicklung
          </p>
        </div>

        <Card className="bg-gradient-to-br from-blue-950/30 to-gray-900 border-blue-800/50 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Unsere Logistik-Mindeststandards</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {standards.map((standard, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">{standard}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-center sm:text-left">
              Mehr Details zu unseren Service Level Agreements und Garantien:
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/sla">SLAs & Garantie ansehen</Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
