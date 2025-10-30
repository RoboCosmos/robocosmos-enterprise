import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"

export function ApiDocsStatusSection() {
  return (
    <section id="statuscodes" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <AlertCircle className="h-6 w-6 text-blue-500" />
        <h2 className="text-3xl font-bold text-white">HTTP Statuscodes</h2>
      </div>

      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Standard HTTP-Statuscodes</CardTitle>
          <CardDescription>
            Die RoboCosmos API verwendet standardmäßige HTTP-Statuscodes zur Anzeige von Erfolg oder Fehler.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-950 border border-gray-800">
              <Badge variant="outline" className="bg-green-600/20 text-green-400 border-green-600 shrink-0">
                200
              </Badge>
              <div>
                <p className="text-white font-medium">OK</p>
                <p className="text-sm text-gray-400">Die Anfrage war erfolgreich.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-950 border border-gray-800">
              <Badge variant="outline" className="bg-green-600/20 text-green-400 border-green-600 shrink-0">
                201
              </Badge>
              <div>
                <p className="text-white font-medium">Created</p>
                <p className="text-sm text-gray-400">Eine neue Ressource wurde erfolgreich erstellt.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-950 border border-gray-800">
              <Badge variant="outline" className="bg-yellow-600/20 text-yellow-400 border-yellow-600 shrink-0">
                400
              </Badge>
              <div>
                <p className="text-white font-medium">Bad Request</p>
                <p className="text-sm text-gray-400">
                  Die Anfrage enthält ungültige Parameter oder fehlerhafte Syntax.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-950 border border-gray-800">
              <Badge variant="outline" className="bg-red-600/20 text-red-400 border-red-600 shrink-0">
                401
              </Badge>
              <div>
                <p className="text-white font-medium">Unauthorized</p>
                <p className="text-sm text-gray-400">Authentifizierung erforderlich oder fehlgeschlagen.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-950 border border-gray-800">
              <Badge variant="outline" className="bg-red-600/20 text-red-400 border-red-600 shrink-0">
                403
              </Badge>
              <div>
                <p className="text-white font-medium">Forbidden</p>
                <p className="text-sm text-gray-400">Keine Berechtigung für diese Ressource.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-950 border border-gray-800">
              <Badge variant="outline" className="bg-red-600/20 text-red-400 border-red-600 shrink-0">
                404
              </Badge>
              <div>
                <p className="text-white font-medium">Not Found</p>
                <p className="text-sm text-gray-400">Die angeforderte Ressource wurde nicht gefunden.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-950 border border-gray-800">
              <Badge variant="outline" className="bg-red-600/20 text-red-400 border-red-600 shrink-0">
                500
              </Badge>
              <div>
                <p className="text-white font-medium">Internal Server Error</p>
                <p className="text-sm text-gray-400">Ein interner Serverfehler ist aufgetreten.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
