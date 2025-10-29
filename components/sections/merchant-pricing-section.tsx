import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingFeatures = [
  "Keine monatlichen Fixkosten",
  "Keine Einrichtungsgebühren",
  "Unbegrenzte Listings",
  "Provisionsbasiertes Modell",
  "Transparente Abrechnung",
  "Monatliche Auszahlungen",
]

export function MerchantPricingSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transparente Preisgestaltung
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Faire Konditionen ohne versteckte Kosten. Sie zahlen nur bei erfolgreichen Vermietungen.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/50 bg-card">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl font-bold text-foreground mb-2">Provisionsmodell</CardTitle>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl md:text-5xl font-bold text-primary">12%</span>
                <span className="text-lg text-muted-foreground">pro Vermietung</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Die Provision wird automatisch bei jeder erfolgreichen Vermietung berechnet. Sie erhalten 88% des
                  Mietpreises, wir kümmern uns um Zahlungsabwicklung und Support.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
