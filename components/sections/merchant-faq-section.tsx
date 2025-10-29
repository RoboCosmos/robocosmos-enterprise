import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Welche Voraussetzungen muss ich erfüllen?",
    answer:
      "Sie benötigen ein registriertes Gewerbe im Bereich Robotik oder Automatisierung, eine gültige Umsatzsteuer-ID und entsprechende Geschäftsdokumente zur Verifizierung.",
  },
  {
    question: "Wie lange dauert die Verifizierung?",
    answer:
      "Die Verifizierung Ihres Händlerkontos dauert in der Regel 24-48 Stunden nach Einreichung aller erforderlichen Dokumente. Sie erhalten eine E-Mail-Benachrichtigung, sobald Ihr Konto freigeschaltet ist.",
  },
  {
    question: "Kann ich meine Preise selbst festlegen?",
    answer:
      "Ja, Sie haben volle Kontrolle über Ihre Preisgestaltung. Sie können Tages-, Wochen- und Monatspreise individuell festlegen und jederzeit anpassen.",
  },
  {
    question: "Wie funktioniert die Zahlungsabwicklung?",
    answer:
      "Alle Zahlungen werden sicher über unsere Plattform abgewickelt. Nach Abschluss einer Vermietung wird der Betrag (abzüglich unserer Provision) automatisch auf Ihr hinterlegtes Bankkonto überwiesen.",
  },
  {
    question: "Wann erhalte ich meine Auszahlungen?",
    answer:
      "Auszahlungen erfolgen monatlich zum Monatsende für alle abgeschlossenen Vermietungen des Vormonats. Sie erhalten eine detaillierte Abrechnung per E-Mail.",
  },
  {
    question: "Kann ich mein Konto jederzeit kündigen?",
    answer:
      "Ja, Sie können Ihr Händlerkonto jederzeit ohne Kündigungsfrist deaktivieren. Laufende Vermietungen müssen jedoch noch abgeschlossen werden.",
  },
  {
    question: "Welchen Support erhalte ich?",
    answer:
      "Sie erhalten Zugang zu unserem dedizierten Händler-Support-Team per E-Mail und Telefon. Zusätzlich bieten wir umfangreiche Dokumentation und regelmäßige Webinare an.",
  },
  {
    question: "Wie viele Roboter kann ich listen?",
    answer:
      "Es gibt keine Begrenzung für die Anzahl der Roboter, die Sie auf unserer Plattform listen können. Sie können Ihr Inventar jederzeit erweitern.",
  },
]

export function MerchantFaqSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">Häufig gestellte Fragen</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Antworten auf die wichtigsten Fragen rund um die Händlerschaft.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border bg-card rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
