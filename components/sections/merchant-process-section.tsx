import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, FileText, CheckCircle, Rocket } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "Schritt 1",
    title: "Registrierung",
    description:
      "Erstellen Sie Ihr Händlerkonto in wenigen Minuten. Geben Sie Ihre Unternehmensdaten ein und verifizieren Sie Ihre E-Mail-Adresse.",
  },
  {
    icon: FileText,
    step: "Schritt 2",
    title: "Verifizierung",
    description: "Reichen Sie Ihre Geschäftsdokumente ein. Unser Team prüft Ihre Angaben innerhalb von 24-48 Stunden.",
  },
  {
    icon: CheckCircle,
    step: "Schritt 3",
    title: "Profil einrichten",
    description:
      "Vervollständigen Sie Ihr Händlerprofil, fügen Sie Ihr Logo hinzu und erstellen Sie Ihre ersten Roboter-Listings.",
  },
  {
    icon: Rocket,
    step: "Schritt 4",
    title: "Live gehen",
    description: "Veröffentlichen Sie Ihre Listings und beginnen Sie, Anfragen von interessierten Kunden zu erhalten.",
  },
]

export function MerchantProcessSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">So funktioniert's</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            In vier einfachen Schritten zum erfolgreichen Händler auf unserer Plattform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-border bg-card relative">
              <CardContent className="p-6">
                {/* Step number badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                <div className="flex flex-col items-start space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-primary font-semibold mb-1">{step.step}</p>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
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
