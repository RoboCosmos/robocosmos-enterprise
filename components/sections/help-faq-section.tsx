import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function HelpFaqSection() {
  const faqs = [
    {
      question: "Wie werde ich verifizierter Händler?",
      answer:
        "Nach Ihrer Bewerbung prüft unser Team Ihre Angaben und Dokumente. Der Verifizierungsprozess dauert in der Regel 2-3 Werktage. Sie erhalten eine E-Mail-Benachrichtigung, sobald Ihr Konto verifiziert wurde. Für die Verifizierung benötigen wir einen Handelsregisterauszug und einen Nachweis Ihrer Geschäftsadresse.",
    },
    {
      question: "Welche Gebühren fallen an?",
      answer:
        "Die genauen Provisionssätze finden Sie in unserer Gebührenübersicht. Grundsätzlich berechnen wir eine Provision von 5-10% je nach Transaktionsvolumen. Für Mietgeschäfte (RaaS) fällt eine monatliche Provision an, bei Kaufgeschäften eine einmalige Provision. Die erste Transaktion ist für neue Händler gebührenfrei.",
    },
    {
      question: "Wie funktioniert der Mietprozess (RaaS)?",
      answer:
        "Nach Bestätigung Ihrer Anfrage durch den Händler erhalten Sie einen Mietvertrag zur Prüfung. Nach Unterzeichnung und Zahlung der ersten Monatsrate wird der Roboter zu Ihrem Standort geliefert. Die monatliche Abrechnung erfolgt automatisch. Sie können den Mietvertrag mit einer Frist von 30 Tagen kündigen oder nach Ablauf der Mindestlaufzeit verlängern.",
    },
    {
      question: "Wie kann ich mein Passwort zurücksetzen?",
      answer:
        'Klicken Sie auf der Login-Seite auf "Passwort vergessen" und geben Sie Ihre E-Mail-Adresse ein. Sie erhalten einen Link zum Zurücksetzen Ihres Passworts. Der Link ist 24 Stunden gültig. Falls Sie keine E-Mail erhalten, überprüfen Sie bitte Ihren Spam-Ordner oder kontaktieren Sie unseren Support.',
    },
    {
      question: "Wie erstelle ich ein Inserat für meinen Roboter?",
      answer:
        'Melden Sie sich in Ihrem Händler-Dashboard an und klicken Sie auf "Neues Inserat erstellen". Füllen Sie alle erforderlichen Felder aus, laden Sie hochwertige Bilder hoch und geben Sie detaillierte technische Spezifikationen an. Nach Prüfung durch unser Team wird Ihr Inserat innerhalb von 24 Stunden freigeschaltet.',
    },
    {
      question: "Welche Zahlungsmethoden werden akzeptiert?",
      answer:
        "Wir akzeptieren Banküberweisung, Kreditkarte (Visa, Mastercard, American Express) und SEPA-Lastschrift. Für größere Transaktionen bieten wir auch Finanzierungsoptionen über unsere Partner an. Alle Zahlungen werden über sichere, verschlüsselte Verbindungen abgewickelt.",
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-100">Häufig gestellte Fragen (FAQ)</h2>
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="border-gray-800">
                <AccordionTrigger className="text-gray-100 hover:text-blue-500">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
