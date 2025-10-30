import { Package } from "lucide-react"

export function LogisticsHeroSection() {
  return (
    <section className="bg-gradient-to-b from-background to-card py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <Package className="w-8 h-8 text-primary" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Logistik- & RaaS-Abwicklung: <span className="text-primary">Standardisierte Prozesse</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            RoboCosmos standardisiert komplexe Transport- und Installationsprozesse für alle Miethändler. Unsere
            durchgängigen Logistik-Standards gewährleisten eine reibungslose Abwicklung vom ersten Kontakt bis zur
            Rückgabe – transparent, sicher und effizient.
          </p>
        </div>
      </div>
    </section>
  )
}
