import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Truck, Handshake, RotateCcw } from "lucide-react"

export function RaasProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Buchung & Prüfung",
      description: "Anfrage wird geprüft, Verfügbarkeit bestätigt, Vertrag erstellt",
      icon: CheckCircle,
    },
    {
      number: "2",
      title: "Standardisierter Transport",
      description: "Spezialisierte Spedition übernimmt Transport mit Versicherung",
      icon: Truck,
    },
    {
      number: "3",
      title: "Übergabe & Installation",
      description: "Vor-Ort-Übergabe mit Checkliste, optionale Erst-Installation",
      icon: Handshake,
    },
    {
      number: "4",
      title: "Rückgabe & Audit",
      description: "Rücktransport, Zustandsprüfung und Abnahme-Audit",
      icon: RotateCcw,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Der RaaS-Prozess in 4 Schritten</h2>
          <p className="text-muted-foreground text-lg">
            Von der Buchung bis zur Rückgabe – ein durchgängiger, standardisierter Ablauf
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:flex items-start justify-between gap-4 mb-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start flex-1">
              <Card className="bg-card border-border p-6 flex-1">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center -mt-2">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </Card>
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center px-2 pt-12">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center">
              <Card className="bg-card border-border p-6 w-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center -mt-2">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </Card>
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center py-4">
                  <ArrowRight className="w-8 h-8 text-primary rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
