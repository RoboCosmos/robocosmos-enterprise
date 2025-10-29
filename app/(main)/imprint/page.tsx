export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8 text-foreground">Impressum</h1>

        <div className="space-y-8 text-foreground">
          {/* Section 1: Company Information */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-1 text-muted-foreground">
              <p>[Ihr Firmenname GmbH]</p>
              <p>[Ihre Straße und Hausnummer]</p>
              <p>[Ihre PLZ und Stadt]</p>
            </div>
          </section>

          {/* Section 2: Represented By */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Vertreten durch</h2>
            <p className="text-muted-foreground">[Name des Geschäftsführers/der Geschäftsführer]</p>
          </section>

          {/* Section 3: Contact */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Kontakt</h2>
            <div className="space-y-1 text-muted-foreground">
              <p>Telefon: [Ihre Telefonnummer]</p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:[ihre-email@beispiel.de]"
                  className="text-blue-500 hover:text-blue-400 underline transition-colors"
                >
                  [Ihre E-Mail-Adresse]
                </a>
              </p>
            </div>
          </section>

          {/* Section 4: Registry Entry */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Registereintrag</h2>
            <div className="space-y-1 text-muted-foreground">
              <p>Eintragung im Handelsregister.</p>
              <p>Registergericht: [Ihr Registergericht]</p>
              <p>Registernummer: [Ihre Registernummer]</p>
            </div>
          </section>

          {/* Section 5: VAT ID */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Umsatzsteuer-ID</h2>
            <p className="text-muted-foreground">
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: [Ihre USt-IdNr.]
            </p>
          </section>

          {/* Section 6: Responsible for Content */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-muted-foreground">[Name und Anschrift des Verantwortlichen]</p>
          </section>

          {/* Section 7: Dispute Resolution */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Streitschlichtung</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 underline transition-colors inline-block"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
