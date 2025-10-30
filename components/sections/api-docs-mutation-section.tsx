import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Edit, CheckCircle2, XCircle } from "lucide-react"

export function ApiDocsMutationSection() {
  return (
    <section id="mutationen" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <Edit className="h-6 w-6 text-blue-500" />
        <h2 className="text-3xl font-bold text-white">Mutationen (Mutations)</h2>
      </div>

      <div className="space-y-6">
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-white">Neue Mietanfrage erstellen</CardTitle>
              <Badge variant="outline" className="bg-orange-600/20 text-orange-400 border-orange-600">
                Mutation
              </Badge>
            </div>
            <CardDescription>Erstellt eine neue Mietanfrage für einen humanoiden Roboter.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-gray-950 border border-gray-800 p-4 overflow-x-auto">
              <pre className="text-sm">
                <code>
                  <span className="text-purple-400">mutation</span>{" "}
                  <span className="text-yellow-400">CreateRentalRequest</span>
                  <span className="text-gray-300">(</span>
                  {"\n"}
                  {"  "}
                  <span className="text-blue-400">$robot_id</span>
                  <span className="text-gray-300">:</span> <span className="text-green-400">ID!</span>
                  {"\n"}
                  {"  "}
                  <span className="text-blue-400">$start_date</span>
                  <span className="text-gray-300">:</span> <span className="text-green-400">DateTime!</span>
                  {"\n"}
                  {"  "}
                  <span className="text-blue-400">$end_date</span>
                  <span className="text-gray-300">:</span> <span className="text-green-400">DateTime!</span>
                  {"\n"}
                  {"  "}
                  <span className="text-blue-400">$company_name</span>
                  <span className="text-gray-300">:</span> <span className="text-green-400">String!</span>
                  {"\n"}
                  {"  "}
                  <span className="text-blue-400">$contact_email</span>
                  <span className="text-gray-300">:</span> <span className="text-green-400">String!</span>
                  {"\n"}
                  <span className="text-gray-300">)</span> <span className="text-gray-300">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-yellow-400">create_rental_request</span>
                  <span className="text-gray-300">(</span>
                  {"\n"}
                  {"    "}
                  <span className="text-blue-400">object</span>
                  <span className="text-gray-300">:</span> <span className="text-gray-300">{"{"}</span>
                  {"\n"}
                  {"      "}
                  <span className="text-blue-400">robot_id</span>
                  <span className="text-gray-300">:</span> <span className="text-blue-400">$robot_id</span>
                  {"\n"}
                  {"      "}
                  <span className="text-blue-400">start_date</span>
                  <span className="text-gray-300">:</span> <span className="text-blue-400">$start_date</span>
                  {"\n"}
                  {"      "}
                  <span className="text-blue-400">end_date</span>
                  <span className="text-gray-300">:</span> <span className="text-blue-400">$end_date</span>
                  {"\n"}
                  {"      "}
                  <span className="text-blue-400">company_name</span>
                  <span className="text-gray-300">:</span> <span className="text-blue-400">$company_name</span>
                  {"\n"}
                  {"      "}
                  <span className="text-blue-400">contact_email</span>
                  <span className="text-gray-300">:</span> <span className="text-blue-400">$contact_email</span>
                  {"\n"}
                  {"      "}
                  <span className="text-blue-400">status</span>
                  <span className="text-gray-300">:</span> <span className="text-orange-400">"pending"</span>
                  {"\n"}
                  {"    "}
                  <span className="text-gray-300">{"}"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-gray-300">)</span> <span className="text-gray-300">{"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-blue-400">id</span>
                  {"\n"}
                  {"    "}
                  <span className="text-blue-400">robot_id</span>
                  {"\n"}
                  {"    "}
                  <span className="text-blue-400">status</span>
                  {"\n"}
                  {"    "}
                  <span className="text-blue-400">created_at</span>
                  {"\n"}
                  {"  "}
                  <span className="text-gray-300">{"}"}</span>
                  {"\n"}
                  <span className="text-gray-300">{"}"}</span>
                </code>
              </pre>
            </div>

            <div className="space-y-3">
              <Alert className="bg-green-950/30 border-green-800">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertDescription className="text-green-300">
                  <strong>Erfolg (200):</strong> Die Mietanfrage wurde erfolgreich erstellt und hat den Status
                  "pending".
                </AlertDescription>
              </Alert>

              <Alert className="bg-red-950/30 border-red-800">
                <XCircle className="h-4 w-4 text-red-500" />
                <AlertDescription className="text-red-300">
                  <strong>Fehler (400):</strong> Ungültige Eingabedaten oder der Roboter ist im angegebenen Zeitraum
                  nicht verfügbar.
                </AlertDescription>
              </Alert>
            </div>

            <div className="mt-4 rounded-lg bg-gray-950 border border-gray-800 p-4">
              <p className="text-sm text-gray-400 mb-2">Beispiel-Variablen:</p>
              <pre className="text-sm">
                <code className="text-gray-300">
                  {`{
  "robot_id": "robot_123",
  "start_date": "2025-02-01T00:00:00Z",
  "end_date": "2025-02-28T23:59:59Z",
  "company_name": "Acme Corp",
  "contact_email": "contact@acme.com"
}`}
                </code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
