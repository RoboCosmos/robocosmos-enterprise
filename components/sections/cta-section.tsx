import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="container mx-auto px-4 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* For Buyers */}
          <Card className="border-border bg-card p-8 transition-all hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-foreground">Bereit zur Automatisierung?</h3>
            <p className="mb-6 text-muted-foreground">
              Durchsuchen Sie unseren geprüften B2B-Katalog mit über 1.500 humanoiden Robotern und Komponenten. Vergleichen Sie TCO, MTBF und finden Sie die optimale Lösung für Ihre Zukunftsinvestition
            </p>
            <Link href="/robots">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                B2B-Katalog durchsuchen
              </Button>
            </Link>
          </Card>

          {/* For Dealers */}
          <Card className="border-border bg-card p-8 transition-all hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-foreground">Sind Sie Händler oder Hersteller?</h3>
            <p className="mb-6 text-muted-foreground">
              Erschließen Sie neue Vertriebskanäle auf Deutschlands führendem B2B-Robotik-Marktplatz. Profitieren Sie von unserem RaaS-Fokus und datengesteuerten Vertrieb.
            </p>
            <Link href="/become-merchant">
              <Button variant="outline" className="border-border w-full bg-transparent hover:bg-primary/10">
                Als Händler bewerben
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}
