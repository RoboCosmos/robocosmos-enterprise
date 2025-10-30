import { Shield } from "lucide-react"

export function SlaHeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-10 w-10 lg:h-12 lg:w-12 text-blue-500" />
          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            Service Level Agreements (SLAs) & Qualitätsgarantie
          </h1>
        </div>
        <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
          RoboCosmos Enterprise verpflichtet sich zu höchster gewerblicher Zuverlässigkeit. Unsere Plattform garantiert
          eine <span className="text-blue-400 font-semibold">99.9% Uptime</span> und bietet klare Service Level
          Agreements für alle geschäftskritischen Funktionen. Ihre Produktivität ist unser Versprechen.
        </p>
      </div>
    </section>
  )
}
