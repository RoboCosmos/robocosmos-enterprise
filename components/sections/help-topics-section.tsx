import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { UserCircle, LayoutList, CalendarCheck, DollarSign } from "lucide-react"

export function HelpTopicsSection() {
  const topics = [
    {
      icon: UserCircle,
      title: "Konto & Profil",
      description: "Verwalten Sie Ihre Login-Daten und Firmendetails.",
    },
    {
      icon: LayoutList,
      title: "Inserate verwalten (für Händler)",
      description: "Anleitungen zum Erstellen und Bearbeiten Ihrer Roboter-Angebote.",
    },
    {
      icon: CalendarCheck,
      title: "Buchungen & Anfragen",
      description: "Alles zu Miet- und Kaufprozessen.",
    },
    {
      icon: DollarSign,
      title: "Zahlungen & Gebühren",
      description: "Informationen zu Provisionen und Auszahlungen.",
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-100">Häufige Themen</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic, index) => {
          const Icon = topic.icon
          return (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-colors cursor-pointer"
            >
              <CardHeader>
                <Icon className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle className="text-gray-100">{topic.title}</CardTitle>
                <CardDescription className="text-gray-400">{topic.description}</CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
