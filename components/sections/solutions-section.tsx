import { Card } from "@/components/ui/card"
import { BarChartBig, ShieldCheck, TrendingUp } from "lucide-react"

const solutions = [
  {
    icon: BarChartBig,
    title: "Objektiv Vergleichen",
    description: "Vergleichen Sie Roboter nach harten B2B-Daten (Traglast, MTBF, TCO), nicht nach Marketing.",
  },
  {
    icon: ShieldCheck,
    title: "Sicher Beschaffen",
    description: "Kaufen oder mieten Sie nur von geprüften Händlern mit klaren SLAs. Wir schlichten bei Problemen.",
  },
  {
    icon: TrendingUp,
    title: "Flexibel Skalieren (RaaS)",
    description: "Testen Sie Roboter über Mietmodelle, bevor Sie hohe Kapitalinvestitionen tätigen.",
  },
]

export function SolutionsSection() {
  return (
    <section className="container mx-auto px-4 py-12 lg:py-20 lg:px-8 xl:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 lg:mb-16 text-center">
          <h2 className="mb-3 lg:mb-4 text-balance text-2xl lg:text-4xl xl:text-5xl font-bold text-foreground">
            {"Zentraler Beschaffungskosmos"}
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            Vereinen Sie Miete und Kauf auf einer einzigen Plattform. Sparen Sie Zeit und Ressourcen im Einkaufsprozess.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="border-border bg-card p-6 lg:p-8 transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
            >
              <div className="mb-3 lg:mb-4 flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-lg bg-primary/10">
                <solution.icon className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
              </div>
              <h3 className="mb-2 lg:mb-3 text-lg lg:text-xl font-semibold text-foreground">{solution.title}</h3>
              <p className="text-sm lg:text-base text-muted-foreground">{solution.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
