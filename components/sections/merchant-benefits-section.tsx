import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Shield, Headphones, Zap, Globe } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Zugang zu B2B-Kunden",
    description: "Erreichen Sie qualifizierte Geschäftskunden, die aktiv nach Robotik-Lösungen suchen.",
  },
  {
    icon: TrendingUp,
    title: "Umsatzwachstum",
    description: "Steigern Sie Ihren Umsatz durch zusätzliche Vertriebskanäle und erhöhte Sichtbarkeit.",
  },
  {
    icon: Shield,
    title: "Vertrauenswürdige Plattform",
    description: "Profitieren Sie von unserem etablierten Ruf und Vertrauenssystem mit verifizierten Bewertungen.",
  },
  {
    icon: Headphones,
    title: "Dedizierter Support",
    description: "Erhalten Sie persönliche Unterstützung von unserem Händler-Success-Team.",
  },
  {
    icon: Zap,
    title: "Leistungsstarke Tools",
    description: "Nutzen Sie professionelle Verwaltungstools für Listings, Buchungen und Analysen.",
  },
  {
    icon: Globe,
    title: "Nationale Reichweite",
    description: "Erweitern Sie Ihre Präsenz über lokale Grenzen hinaus und erreichen Sie Kunden deutschlandweit.",
  },
]

export function MerchantBenefitsSection() {
  return (
    <section id="benefits" className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Warum RoboSource Enterprise?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Entdecken Sie die Vorteile unserer Plattform und wie wir Ihr Geschäft unterstützen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border bg-card hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col items-start space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
