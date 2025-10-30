import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function ResponsibilitiesSection() {
  const responsibilities = [
    {
      question: "Transportkosten",
      answer: "Kunde (Mieter)",
      details: "Hin- und Rücktransport werden vom Kunden getragen",
      badge: "Kunde",
    },
    {
      question: "Versicherung",
      answer: "RoboCosmos-Partner (Spedition)",
      details: "Transportversicherung ist im standardisierten Prozess enthalten",
      badge: "Partner",
    },
    {
      question: "Erst-Installation",
      answer: "Optional durch Händler",
      details: "Kann gegen Aufpreis vom Händler durchgeführt werden",
      badge: "Optional",
    },
    {
      question: "Rücktransportkosten",
      answer: "Kunde (Mieter)",
      details: "Am Ende der Mietdauer trägt der Kunde die Rücktransportkosten",
      badge: "Kunde",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Verantwortlichkeiten (Kosten & Risiko)</h2>
          <p className="text-gray-400 text-lg">Klare Zuordnung von Kosten und Haftung für maximale Transparenz</p>
        </div>

        <Card className="bg-gray-950 border-gray-800 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-800 hover:bg-gray-900/50">
                <TableHead className="text-gray-300 font-semibold">Bereich</TableHead>
                <TableHead className="text-gray-300 font-semibold">Verantwortlich</TableHead>
                <TableHead className="text-gray-300 font-semibold">Details</TableHead>
                <TableHead className="text-gray-300 font-semibold text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {responsibilities.map((item, index) => (
                <TableRow key={index} className="border-gray-800 hover:bg-gray-900/50">
                  <TableCell className="font-medium text-white">{item.question}</TableCell>
                  <TableCell className="text-blue-400">{item.answer}</TableCell>
                  <TableCell className="text-gray-400 text-sm">{item.details}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={item.badge === "Kunde" ? "default" : item.badge === "Partner" ? "secondary" : "outline"}
                      className={
                        item.badge === "Kunde"
                          ? "bg-blue-600 text-white"
                          : item.badge === "Partner"
                            ? "bg-gray-700 text-gray-200"
                            : "border-gray-600 text-gray-300"
                      }
                    >
                      {item.badge}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  )
}
