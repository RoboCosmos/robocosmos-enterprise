import { Button } from "@/components/ui/button"
import { Calendar, Store } from "lucide-react"
import Link from "next/link"

export function AboutCtaSection() {
  return (
    <section className="bg-muted/30 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 md:mb-6 text-2xl md:text-4xl font-bold text-foreground">Werden Sie unser Partner.</h2>
        <p className="mx-auto mb-8 md:mb-10 max-w-2xl text-base md:text-xl text-muted-foreground px-4">
          Egal, ob Sie Ihre Abläufe automatisieren oder als Händler Ihre Reichweite vergrößern möchten – sprechen Sie
          uns an.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Calendar className="mr-2 h-5 w-5" />
            Demo anfordern
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/become-merchant">
              <Store className="mr-2 h-5 w-5" />
              Händler werden
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
