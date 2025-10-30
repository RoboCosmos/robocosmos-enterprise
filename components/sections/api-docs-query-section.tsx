import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export function ApiDocsQuerySection() {
  return (
    <section id="abfragen" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <Search className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold text-foreground">Abfragen (Queries)</h2>
      </div>

      <div className="space-y-6">
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-foreground">Alle verfügbaren Roboter abrufen</CardTitle>
              <Badge variant="outline" className="bg-green-600/20 text-green-400 border-green-600">
                Query
              </Badge>
            </div>
            <CardDescription>
              Ruft eine Liste aller verfügbaren humanoiden Roboter mit optionalen Filtern ab.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-background border border-border p-4 overflow-x-auto">
              <pre className="text-sm">
                <code>
                  <span className="text-purple-400">query</span> <span className="text-yellow-400">GetRobots</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-blue-400">$min_payload</span>
                  <span className="text-gray-300">:</span> <span className="text-green-400">Int!</span>
                  <span className="text-gray-300">,</span> <span className="text-blue-400">$category</span>
                  <span className="text-gray-300">:</span> <span className="text-green-400">String</span>
                  <span className="text-gray-300">)</span> <span className="text-gray-300">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-yellow-400">robots</span>
                  <span className="text-gray-300">(</span>
                  {"\n"}
                  {"    "}
                  <span className="text-blue-400">where</span>
                  <span className="text-gray-300">:</span> <span className="text-gray-300">{"{"}</span>
                  {"\n"}
                  {"      "}
                  <span className="text-blue-400">available_for_rent</span>
                  <span className="text-gray-300">:</span> <span className="text-orange-400">true</span>
                  {"\n"}
                  {"      "}
                  <span className="text-blue-400">technical_specs</span>
                  <span className="text-gray-300">:</span> <span className="text-gray-300">{"{"}</span>{" "}
                  <span className="text-blue-400">payload_kg</span>
                  <span className="text-gray-300">:</span> <span className="text-gray-300">{"{"}</span>{" "}
                  <span className="text-blue-400">_gte</span>
                  <span className="text-gray-300">:</span> <span className="text-blue-400">$min_payload</span>{" "}
                  <span className="text-gray-300">{"}"}</span> <span className="text-gray-300">{"}"}</span>
                  {"\n"}
                  {"      "}
                  <span className="text-blue-400">category</span>
                  <span className="text-gray-300">:</span> <span className="text-gray-300">{"{"}</span>{" "}
                  <span className="text-blue-400">_eq</span>
                  <span className="text-gray-300">:</span> <span className="text-blue-400">$category</span>{" "}
                  <span className="text-gray-300">{"}"}</span>
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
                  <span className="text-blue-400">manufacturer</span>
                  {"\n"}
                  {"    "}
                  <span className="text-blue-400">model</span>
                  {"\n"}
                  {"    "}
                  <span className="text-blue-400">category</span>
                  {"\n"}
                  {"    "}
                  <span className="text-blue-400">tco</span>
                  {"\n"}
                  {"    "}
                  <span className="text-blue-400">technical_specs</span>
                  {"\n"}
                  {"    "}
                  <span className="text-blue-400">images</span>
                  {"\n"}
                  {"  "}
                  <span className="text-gray-300">{"}"}</span>
                  {"\n"}
                  <span className="text-gray-300">{"}"}</span>
                </code>
              </pre>
            </div>

            <div className="mt-4 rounded-lg bg-background border border-border p-4">
              <p className="text-sm text-muted-foreground mb-2">Beispiel-Variablen:</p>
              <pre className="text-sm">
                <code className="text-gray-300">
                  {`{
  "min_payload": 5,
  "category": "Logistics"
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
