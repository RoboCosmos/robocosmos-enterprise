import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function MerchantCtaSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-primary/20 p-8 md:p-12">
            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Bereit, Ihr Geschäft zu erweitern?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Werden Sie Teil unserer wachsenden Händler-Community und erreichen Sie tausende potenzielle Kunden auf
                Deutschlands führendem Robotik-Marktplatz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/register?type=merchant">
                    Jetzt kostenlos registrieren
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                  <Link href="/help">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Fragen? Kontaktieren Sie uns
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
