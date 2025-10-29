import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | RoboSource Enterprise",
  description:
    "Datenschutzerklärung für RoboSource Enterprise - Informationen zur Verarbeitung personenbezogener Daten",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Datenschutzerklärung</h1>

        {/* Section 1: Introduction and Responsible Party */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Einleitung und Verantwortlicher</h2>
          <p className="text-muted-foreground mb-4">
            Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen Daten ist uns ein
            wichtiges Anliegen. Nachfolgend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
          </p>
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">Verantwortlicher im Sinne der DSGVO:</strong>
          </p>
          <p className="text-muted-foreground mb-2">
            RoboSource Enterprise GmbH
            <br />
            Musterstraße 123
            <br />
            12345 Musterstadt
            <br />
            Deutschland
          </p>
          <p className="text-muted-foreground">
            E-Mail:{" "}
            <a
              href="mailto:datenschutz@robosource-enterprise.de"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              datenschutz@robosource-enterprise.de
            </a>
            <br />
            Telefon: +49 (0) 123 456789
          </p>
        </section>

        {/* Section 2: Definitions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Begriffsbestimmungen</h2>
          <p className="text-muted-foreground mb-4">
            Diese Datenschutzerklärung verwendet Begriffe, die durch den Europäischen Richtlinien- und Verordnungsgeber
            beim Erlass der Datenschutz-Grundverordnung (DSGVO) verwendet wurden.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">Personenbezogene Daten:</strong> Alle Informationen, die sich auf eine
              identifizierte oder identifizierbare natürliche Person beziehen.
            </li>
            <li>
              <strong className="text-foreground">Verarbeitung:</strong> Jeden mit oder ohne Hilfe automatisierter
              Verfahren ausgeführten Vorgang im Zusammenhang mit personenbezogenen Daten.
            </li>
            <li>
              <strong className="text-foreground">Verantwortlicher:</strong> Die natürliche oder juristische Person, die
              über die Zwecke und Mittel der Verarbeitung entscheidet.
            </li>
          </ul>
        </section>

        {/* Section 3: Legal Basis */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Rechtsgrundlagen der Verarbeitung</h2>
          <p className="text-muted-foreground mb-4">
            Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage der folgenden Rechtsgrundlagen gemäß Art. 6
            Abs. 1 DSGVO:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung der betroffenen
              Person
            </li>
            <li>
              <strong className="text-foreground">Art. 6 Abs. 1 lit. b DSGVO:</strong> Verarbeitung zur Erfüllung eines
              Vertrags
            </li>
            <li>
              <strong className="text-foreground">Art. 6 Abs. 1 lit. c DSGVO:</strong> Verarbeitung zur Erfüllung einer
              rechtlichen Verpflichtung
            </li>
            <li>
              <strong className="text-foreground">Art. 6 Abs. 1 lit. f DSGVO:</strong> Verarbeitung zur Wahrung
              berechtigter Interessen
            </li>
          </ul>
        </section>

        {/* Section 4: Data Processing on Website */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Datenverarbeitung auf unserer Website</h2>

          <h3 className="text-xl font-semibold mb-3 text-foreground">4.1 Server-Logfiles</h3>
          <p className="text-muted-foreground mb-4">
            Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen vom
            Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben: IP-Adresse, Datum und
            Uhrzeit des Zugriffs, Name und URL der abgerufenen Datei, Website, von der aus der Zugriff erfolgt
            (Referrer-URL), verwendeter Browser und ggf. das Betriebssystem Ihres Rechners.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-foreground">4.2 Kontaktaufnahme (Formular/E-Mail)</h3>
          <p className="text-muted-foreground mb-4">
            Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden die von Ihnen mitgeteilten
            Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu
            beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr
            erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-foreground">4.3 Registrierung (Kunden-/Händlerkonto)</h3>
          <p className="text-muted-foreground mb-4">
            Auf unserer Website bieten wir Nutzern die Möglichkeit, sich unter Angabe personenbezogener Daten zu
            registrieren. Welche personenbezogenen Daten dabei an uns übermittelt werden, ergibt sich aus der jeweiligen
            Eingabemaske. Die von Ihnen eingegebenen Daten werden ausschließlich für die Nutzung unseres Angebots
            erhoben und gespeichert. Dies umfasst: Name, E-Mail-Adresse, Unternehmensdaten, Kontaktinformationen.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-foreground">4.4 Cookies</h3>
          <p className="text-muted-foreground mb-4">
            Unsere Website verwendet Cookies. Cookies sind Textdateien, die im Internetbrowser bzw. vom Internetbrowser
            auf dem Computersystem des Nutzers gespeichert werden. Wir verwenden technisch notwendige Cookies zur
            Bereitstellung unserer Dienste sowie optionale Cookies für Analyse- und Marketingzwecke (nur mit Ihrer
            Einwilligung).
          </p>

          <h3 className="text-xl font-semibold mb-3 text-foreground">4.5 Analyse-Tools</h3>
          <p className="text-muted-foreground mb-4">
            Wir setzen datenschutzfreundliche Analyse-Tools ein, um die Nutzung unserer Website zu analysieren und
            regelmäßig zu verbessern. Die durch das Analyse-Tool erzeugten Informationen über Ihre Benutzung dieser
            Website werden in der Regel an einen Server übertragen und dort gespeichert. Die Nutzung erfolgt auf
            Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>

        {/* Section 5: Platform Data Processing */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            5. Datenverarbeitung im Rahmen der Plattformnutzung
          </h2>
          <p className="text-muted-foreground mb-4">
            Im Rahmen der Nutzung unserer B2B-Plattform für Roboter-as-a-Service verarbeiten wir folgende Daten:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>
              <strong className="text-foreground">Buchungsdaten:</strong> Informationen zu Miet- und Kaufanfragen,
              Buchungszeiträume, ausgewählte Roboter
            </li>
            <li>
              <strong className="text-foreground">Transaktionsdaten:</strong> Zahlungsinformationen, Rechnungsdaten
              (verarbeitet durch unsere Zahlungsdienstleister)
            </li>
            <li>
              <strong className="text-foreground">Kommunikationsdaten:</strong> Nachrichten zwischen Kunden und Händlern
              über unsere Plattform
            </li>
            <li>
              <strong className="text-foreground">Bewertungen:</strong> Von Ihnen abgegebene Bewertungen und Kommentare
            </li>
            <li>
              <strong className="text-foreground">Nutzungsdaten:</strong> Informationen über Ihre Interaktionen mit der
              Plattform
            </li>
          </ul>
          <p className="text-muted-foreground">
            Diese Daten werden zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) und zur Wahrung unserer berechtigten
            Interessen an einem sicheren und funktionsfähigen Plattformbetrieb (Art. 6 Abs. 1 lit. f DSGVO) verarbeitet.
          </p>
        </section>

        {/* Section 6: User Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Ihre Rechte als betroffene Person</h2>
          <p className="text-muted-foreground mb-4">
            Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft
              über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.
            </li>
            <li>
              <strong className="text-foreground">Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht,
              die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten Daten zu verlangen.
            </li>
            <li>
              <strong className="text-foreground">Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die
              Löschung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              <strong className="text-foreground">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie
              haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.
            </li>
            <li>
              <strong className="text-foreground">Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das
              Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
            </li>
            <li>
              <strong className="text-foreground">Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, aus
              Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Widerspruch
              einzulegen.
            </li>
            <li>
              <strong className="text-foreground">Beschwerderecht:</strong> Sie haben das Recht, sich bei einer
              Aufsichtsbehörde zu beschweren.
            </li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a
              href="mailto:datenschutz@robosource-enterprise.de"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              datenschutz@robosource-enterprise.de
            </a>
          </p>
        </section>

        {/* Section 7: Updates to Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            7. Aktualität und Änderung dieser Datenschutzerklärung
          </h2>
          <p className="text-muted-foreground mb-4">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025.
          </p>
          <p className="text-muted-foreground">
            Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw.
            behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle
            Datenschutzerklärung kann jederzeit auf der Website unter{" "}
            <a href="/privacy" className="text-primary hover:text-primary/80 transition-colors">
              https://robosource-enterprise.de/privacy
            </a>{" "}
            von Ihnen abgerufen und ausgedruckt werden.
          </p>
        </section>

        {/* Legal Notice */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Hinweis:</strong> Diese Datenschutzerklärung dient als Vorlage und muss
            durch einen Rechtsanwalt oder Datenschutzbeauftragten an die spezifischen Gegebenheiten Ihres Unternehmens
            angepasst werden.
          </p>
        </div>
      </div>
    </div>
  )
}
