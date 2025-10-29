import { Building2, Target, Zap } from "lucide-react"

export function CompanyStorySection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Story */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Unsere Geschichte</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Gegründet 2020 mit der Vision, den industriellen Robotermarkt zu revolutionieren, hat sich RoboSource
                  Enterprise zur führenden B2B-Plattform für Automatisierungslösungen entwickelt.
                </p>
                <p>
                  Was als kleine Initiative begann, ist heute ein Netzwerk von über 500 verifizierten Händlern und mehr
                  als 10.000 verfügbaren Robotersystemen in ganz Europa.
                </p>
                <p>
                  Unser Erfolg basiert auf drei Säulen: Transparenz, Qualität und Innovation. Wir glauben daran, dass
                  jedes Unternehmen Zugang zu erstklassiger Automatisierungstechnologie haben sollte – unabhängig von
                  Größe oder Branche.
                </p>
              </div>
            </div>

            {/* Right: Key Milestones */}
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2020 - Gründung</h3>
                  <p className="text-sm text-muted-foreground">
                    Start mit 50 Händlern und der Vision, den Robotermarkt zu demokratisieren.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2022 - Expansion</h3>
                  <p className="text-sm text-muted-foreground">
                    Erreichen von 250 Händlern und Einführung der KI-gestützten Suche.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2024 - Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Über 500 Händler, 10.000+ Roboter und marktführende Transparenz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
