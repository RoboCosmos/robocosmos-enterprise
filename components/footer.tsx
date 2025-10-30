import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  "Über RoboCosmos Enterprise": [
    { label: "Über uns", href: "/about" },
    { label: "Karriere", href: "/careers" },
    { label: "Kontakt", href: "/contact" },
  ],
  "Für Unternehmen": [
    { label: "Roboter finden", href: "/robots" },
    { label: "Händlerverzeichnis", href: "/merchant-directory" },
    { label: "Hilfe & Support", href: "/help" },
  ],
  "Für Händler": [
    { label: "Händler werden", href: "/become-merchant" },
    { label: "Händler-Login", href: "/login" },
    { label: "Händler bewerben", href: "/apply-merchant" },
  ],
  Rechtliches: [
    { label: "Impressum", href: "/imprint" },
    { label: "Datenschutz", href: "/privacy" },
    { label: "AGB", href: "/terms" },
  ],
}
// </CHANGE>

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-800">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          {/* Left side: Logo and brand name */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/robocosmos-enterprise-logo.png"
              alt="RoboCosmos Enterprise Logo"
              width={56}
              height={56}
              className="h-10 w-10 lg:h-14 lg:w-14 transition-all duration-300"
            />
            <span className="text-lg font-bold text-foreground">RoboCosmos </span>
          </div>

          {/* Right side: Copyright and B2C link in one line */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground md:justify-end">
            <span>© 2025 RoboCosmos GmbH. Alle Rechte vorbehalten.</span>
            <span className="hidden md:inline">•</span>
            <Link href="https://robocosmos-frontend.vercel.app" className="text-primary hover:underline">
              Zur B2C-Plattform wechseln
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
