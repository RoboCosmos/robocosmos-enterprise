import { Card, CardContent } from "@/components/ui/card"

export function MissionSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 md:mb-12 text-center text-2xl md:text-4xl font-bold text-foreground">
          Unsere Mission: Automatisierung beschleunigen.
        </h2>

        <div className="space-y-6 md:space-y-8">
          <Card>
            <CardContent className="p-6 md:p-8">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Der traditionelle Beschaffungsprozess für Industrierobotik ist oft langsam, intransparent und
                kapitalintensiv. Die richtige Lösung und zuverlässige Partner zu finden, erfordert erheblichen Zeit- und
                Ressourcenaufwand. Unternehmen stehen vor der Herausforderung, Angebote objektiv zu vergleichen, die
                Gesamtbetriebskosten (TCO) zu verstehen und auf flexible Einsatzmodelle zuzugreifen, die ihren
                betrieblichen Anforderungen entsprechen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 md:p-8">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                RoboSource Enterprise verbindet verifizierte B2B-Käufer und -Verkäufer auf einer transparenten,
                datengesteuerten Plattform. Wir ermöglichen objektive Vergleiche basierend auf Schlüsselmetriken (TCO,
                ROI, MTBF) und fördern flexible RaaS-Modelle (Robotics-as-a-Service), um Einstiegshürden zu senken.
                Unsere Plattform optimiert den gesamten Beschaffungsprozess, von der Entdeckung bis zum Einsatz, und
                stellt sicher, dass Unternehmen Automatisierung effizient und vertrauensvoll umsetzen können.
              </p>
            </CardContent>
          </Card>

          <blockquote className="border-l-4 border-primary bg-card p-6 md:p-8 italic">
            <p className="text-lg md:text-xl text-foreground">
              „Unsere Vision ist es, das unverzichtbare Betriebssystem für den B2B-Robotikhandel zu werden und so
              Innovation und Effizienz in allen Branchen zu fördern."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
