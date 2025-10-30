import { Code2 } from "lucide-react"

export function ApiDocsHeroSection() {
  return (
    <section className="border-b border-border/40 bg-gradient-to-b from-gray-900 to-gray-950 py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center gap-3 mb-4">
          <Code2 className="h-10 w-10 text-blue-500" />
          <h1 className="text-4xl font-bold text-white">API Dokumentation</h1>
        </div>
        <p className="text-lg text-gray-300 max-w-3xl">
          Willkommen zur RoboCosmos Enterprise API-Dokumentation. Hier finden Sie alle Informationen zur Integration
          unserer GraphQL-API in Ihre Anwendungen.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-400">API Status: Operational</span>
          </div>
          <div className="text-sm text-gray-400">Version: 1.0.0</div>
        </div>
      </div>
    </section>
  )
}
