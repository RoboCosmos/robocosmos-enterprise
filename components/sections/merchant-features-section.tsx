import { Card, CardContent } from "@/components/ui/card"
import { LayoutDashboard, BarChart3, MessageSquare, Calendar, CreditCard, Settings } from "lucide-react"

const features = [
  {
    icon: LayoutDashboard,
    title: "Übersichtliches Dashboard",
    description: "Verwalten Sie alle Ihre Listings, Buchungen und Anfragen an einem zentralen Ort.",
  },
  {
    icon: BarChart3,
    title: "Detaillierte Analysen",
    description: "Erhalten Sie Einblicke in Ihre Performance mit umfassenden Statistiken und Reports.",
  },
  {
    icon: MessageSquare,
    title: "Direkter Kundenkontakt",
    description: "Kommunizieren Sie direkt mit Interessenten über unser integriertes Nachrichtensystem.",
  },
  {
    icon: Calendar,
    title: "Buchungsverwaltung",
    description: "Verwalten Sie Verfügbarkeiten, Buchungen und Mietperioden effizient.",
  },
  {
    icon: CreditCard,
    title: "Sichere Zahlungen",
    description: "Profitieren Sie von sicheren, automatisierten Zahlungsabwicklungen.",
  },
  {
    icon: Settings,
    title: "Flexible Einstellungen",
    description: "Passen Sie Preise, Verfügbarkeiten und Geschäftsbedingungen individuell an.",
  },
]

export function MerchantFeaturesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Leistungsstarke Händler-Tools
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Alles, was Sie brauchen, um Ihr Robotik-Geschäft erfolgreich zu verwalten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
