import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Scale, Lightbulb } from "lucide-react"

const values = [
  {
    icon: ShieldCheck,
    title: "Kompromissloses Vertrauen & Sicherheit",
    description:
      "Wir arbeiten nur mit verifizierten Händlern zusammen und bieten robuste SLAs sowie Plattform-Support. Jede Transaktion basiert auf unserem Engagement für Sicherheit, Compliance und Zuverlässigkeit.",
  },
  {
    icon: Scale,
    title: "Datengesteuerte Transparenz",
    description:
      "Treffen Sie fundierte Entscheidungen mit Zugriff auf umfassende Metriken wie TCO, ROI, MTBF und Echtzeit-Verfügbarkeit. Keine versteckten Kosten, keine Überraschungen.",
  },
  {
    icon: Lightbulb,
    title: "Innovation vorantreiben",
    description:
      "Wir entwickeln unsere Plattform kontinuierlich weiter, um neue Technologien, flexible Einsatzmodelle und innovative Geschäftslösungen zu unterstützen, die Ihnen einen Vorsprung sichern.",
  },
]

export function ValuesSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <h2 className="mb-8 md:mb-12 text-center text-2xl md:text-4xl font-bold text-foreground">
        Unsere Kernwerte für B2B-Partnerschaften.
      </h2>

      <div className="mx-auto grid max-w-6xl gap-6 md:gap-8 lg:grid-cols-3">
        {values.map((value, index) => (
          <Card key={index} className="transition-transform hover:scale-105">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="mb-4 md:mb-6 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3 md:p-4">
                  <value.icon className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold text-foreground">{value.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
