import { Card, CardContent } from "@/components/ui/card"

export function MissionSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 lg:mb-6 text-balance text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground animate-fade-in-up animation-delay-200">
          Unsere Mission:{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent">
            Automatisierung beschleunigen.
          </span>
        </h2>

        <div className="space-y-6 md:space-y-8">
          <Card>
            <CardContent className="p-6 md:p-8">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Der traditionelle Beschaffungsprozess für komplexe gewerbliche Robotik ist gekennzeichnet durch
                Intransparenz, hohe Anfangsinvestitionen und eine langwierige Lösungsfindung. Unternehmen benötigen
                objektive Entscheidungsgrundlagen (ROI, TCO) und flexible Einsatzmodelle, um ihre operativen
                Herausforderungen (z.B. Fachkräftemangel) schnell und vertrauensvoll zu lösen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 md:p-8">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                RoboCosmos Enterprise verbindet verifizierte B2B-Käufer und -Verkäufer auf einer transparenten,
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
