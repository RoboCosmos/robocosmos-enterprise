import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Store } from "lucide-react"

export function MerchantHeroSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-3 md:p-4 bg-primary/10 rounded-2xl border border-primary/20">
              <Store className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Werden Sie Teil des führenden <span className="text-primary">Robotik-Marktplatzes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Erreichen Sie tausende B2B-Kunden, die nach Robotik-Lösungen suchen. Erweitern Sie Ihr Geschäft mit unserer
            leistungsstarken Plattform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/register?type=merchant">
                Jetzt Händler werden
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <Link href="#benefits">Mehr erfahren</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Keine Einrichtungsgebühren</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Flexible Provisionen</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Volle Kontrolle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
