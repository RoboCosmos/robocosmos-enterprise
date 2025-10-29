export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8 text-foreground">
          Allgemeine Geschäftsbedingungen & Händlervereinbarung
        </h1>

        {/* Legal Notice */}
        <div className="mb-8 p-4 bg-blue-600/10 border border-blue-600/20 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Hinweis:</strong> Dies ist ein Platzhalter-Text. Bitte lassen Sie die tatsächlichen AGB von einem
            auf B2B-Marktplätze und deutsches/EU-Recht spezialisierten Rechtsanwalt erstellen oder überprüfen.
          </p>
        </div>

        {/* Teil A: Allgemeine Nutzungsbedingungen */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Teil A: Allgemeine Nutzungsbedingungen (für alle Nutzer)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 1 Geltungsbereich</h3>
              <p className="text-muted-foreground leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Online-Plattform RoboSource
                Enterprise (nachfolgend "Plattform" genannt), die von [Firmenname, Adresse] (nachfolgend "Betreiber"
                genannt) betrieben wird. Die Plattform dient als B2B-Marktplatz für die Vermittlung von
                Industrierobotern zum Kauf oder zur Miete (Robotics-as-a-Service, RaaS).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 2 Leistungen von RoboSource</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                RoboSource stellt eine digitale Plattform zur Verfügung, auf der:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                <li>Händler verifizierte Inserate für Industrieroboter erstellen können</li>
                <li>Kunden nach geeigneten Roboterlösungen suchen und Anfragen stellen können</li>
                <li>
                  Transparente Informationen zu technischen Spezifikationen, TCO und Verfügbarkeit bereitgestellt werden
                </li>
                <li>Die Kommunikation zwischen Händlern und Kunden erleichtert wird</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mt-3">
                RoboSource tritt ausschließlich als Vermittler auf und wird nicht Vertragspartei der zwischen Händlern
                und Kunden geschlossenen Kauf- oder Mietverträge.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 3 Registrierung und Nutzerkonto</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Die Nutzung der Plattform erfordert eine Registrierung. Bei der Registrierung sind wahrheitsgemäße und
                vollständige Angaben zu machen. Der Nutzer ist verpflichtet, seine Zugangsdaten vertraulich zu behandeln
                und vor dem Zugriff Dritter zu schützen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Der Betreiber behält sich das Recht vor, Registrierungen ohne Angabe von Gründen abzulehnen oder
                bestehende Nutzerkonten zu sperren, insbesondere bei Verstößen gegen diese AGB.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 4 Pflichten der Nutzer</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">Alle Nutzer verpflichten sich:</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                <li>Die Plattform nur für rechtmäßige Zwecke zu nutzen</li>
                <li>Keine falschen oder irreführenden Informationen bereitzustellen</li>
                <li>Die Rechte Dritter (insbesondere Urheber-, Marken- und Persönlichkeitsrechte) zu respektieren</li>
                <li>Keine Schadsoftware oder andere schädliche Inhalte hochzuladen</li>
                <li>Die Plattform nicht für unlauteren Wettbewerb zu missbrauchen</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 5 Haftung von RoboSource</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Der Betreiber haftet nach den gesetzlichen Bestimmungen für Vorsatz und grobe Fahrlässigkeit. Bei
                leichter Fahrlässigkeit haftet der Betreiber nur:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                <li>Für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit</li>
                <li>
                  Für Schäden aus der Verletzung einer wesentlichen Vertragspflicht (Pflicht, deren Erfüllung die
                  ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der
                  Vertragspartner regelmäßig vertrauen darf)
                </li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Der Betreiber übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der von
                Händlern bereitgestellten Informationen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 6 Datenschutz</h3>
              <p className="text-muted-foreground leading-relaxed">
                Die Verarbeitung personenbezogener Daten erfolgt gemäß der{" "}
                <a href="/privacy" className="text-blue-500 hover:text-blue-400 underline">
                  Datenschutzerklärung
                </a>
                , die integraler Bestandteil dieser AGB ist.
              </p>
            </div>
          </div>
        </section>

        {/* Teil B: Zusätzliche Bedingungen für Händler */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Teil B: Zusätzliche Bedingungen für Händler (Händlervereinbarung)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 1 Geltungsbereich und Verifizierung</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Diese zusätzlichen Bedingungen gelten für alle Nutzer, die als Händler auf der Plattform Roboter zum
                Kauf oder zur Miete anbieten möchten.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Händler müssen einen Verifizierungsprozess durchlaufen, bei dem die Identität, Geschäftsberechtigung und
                Seriosität überprüft werden. Nur verifizierte Händler dürfen Inserate auf der Plattform erstellen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 2 Einstellen von Inseraten</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Händler sind verpflichtet, bei der Erstellung von Inseraten:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                <li>Vollständige und wahrheitsgemäße Angaben zu machen</li>
                <li>Alle technischen Spezifikationen korrekt anzugeben</li>
                <li>Realistische TCO-Berechnungen (Total Cost of Ownership) bereitzustellen</li>
                <li>Die Verfügbarkeit der Roboter aktuell zu halten</li>
                <li>Hochwertige Bilder und aussagekräftige Beschreibungen zu verwenden</li>
                <li>Alle relevanten Sicherheits- und Zertifizierungsinformationen anzugeben</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Der Betreiber behält sich das Recht vor, Inserate zu prüfen, zu bearbeiten oder zu entfernen, die gegen
                diese Vorgaben verstoßen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 3 Miet- und Kaufverträge</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Verträge über den Kauf oder die Miete von Robotern kommen ausschließlich zwischen dem Händler und dem
                Kunden zustande. RoboSource ist nicht Vertragspartei und übernimmt keine Haftung für die Erfüllung
                dieser Verträge.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Händler sind verpflichtet, alle gesetzlichen Anforderungen an Kauf- bzw. Mietverträge einzuhalten und
                Kunden über ihre Rechte (z.B. Gewährleistung, Widerrufsrecht) zu informieren.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 4 Gebühren und Provisionen</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Für die Nutzung der Plattform erhebt RoboSource folgende Gebühren:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                <li>Grundgebühr für die Händlerregistrierung: [Betrag] (einmalig oder jährlich)</li>
                <li>
                  Provision bei erfolgreichem Vertragsabschluss:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Kauf: [X]% des Kaufpreises</li>
                    <li>Miete (RaaS): [Y]% der monatlichen Mietrate für die Vertragslaufzeit</li>
                  </ul>
                </li>
                <li>Optionale Premium-Features: [Beschreibung und Preise]</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Alle Preise verstehen sich zzgl. der gesetzlichen Umsatzsteuer. Die Provisionen werden automatisch bei
                der Zahlungsabwicklung über die Plattform einbehalten.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 5 Auszahlungen</h3>
              <p className="text-muted-foreground leading-relaxed">
                Auszahlungen an Händler erfolgen nach Abzug der Provision innerhalb von [X] Werktagen nach
                Zahlungseingang. Händler müssen gültige Bankverbindungsdaten hinterlegen. Bei Rückbuchungen oder
                Reklamationen kann die Auszahlung verzögert oder zurückgehalten werden.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 6 Bewertungen und Reputation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kunden können Händler und deren Leistungen bewerten. Händler verpflichten sich, auf Bewertungen
                professionell zu reagieren und keine gefälschten Bewertungen zu erstellen oder zu veranlassen. Der
                Betreiber behält sich das Recht vor, unangemessene Bewertungen zu entfernen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 7 Kündigung der Händlervereinbarung</h3>
              <p className="text-muted-foreground leading-relaxed">
                Beide Parteien können die Händlervereinbarung mit einer Frist von [X] Monaten zum Monatsende kündigen.
                Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Bei Kündigung werden
                aktive Inserate deaktiviert, laufende Verträge mit Kunden bleiben jedoch bestehen.
              </p>
            </div>
          </div>
        </section>

        {/* Teil C: Schlussbestimmungen */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Teil C: Schlussbestimmungen</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 1 Änderungen der AGB</h3>
              <p className="text-muted-foreground leading-relaxed">
                Der Betreiber behält sich das Recht vor, diese AGB jederzeit zu ändern. Änderungen werden den Nutzern
                mindestens [X] Tage vor Inkrafttreten per E-Mail mitgeteilt. Widerspricht der Nutzer nicht innerhalb von
                [Y] Tagen nach Zugang der Änderungsmitteilung, gelten die geänderten AGB als angenommen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 2 Anwendbares Recht und Gerichtsstand</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Für diese AGB und alle Rechtsbeziehungen zwischen dem Betreiber und den Nutzern gilt ausschließlich das
                Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Gerichtsstand für alle Streitigkeiten ist, soweit gesetzlich zulässig, der Sitz des Betreibers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 3 Salvatorische Klausel</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, berührt dies
                die Wirksamkeit der übrigen Bestimmungen nicht. An die Stelle der unwirksamen oder undurchführbaren
                Bestimmung tritt eine wirksame Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am
                nächsten kommt.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">§ 4 Streitbeilegung</h3>
              <p className="text-muted-foreground leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                . Der Betreiber ist zur Teilnahme an einem Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">Stand: [Datum einfügen]</p>
          <p className="text-sm text-muted-foreground mt-2">
            Bei Fragen zu diesen AGB kontaktieren Sie uns bitte unter:{" "}
            <a href="mailto:legal@robosource-enterprise.de" className="text-blue-500 hover:text-blue-400 underline">
              legal@robosource-enterprise.de
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
