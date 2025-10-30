import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database } from "lucide-react"

export function ApiDocsSchemaSection() {
  return (
    <section id="datenmodelle" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <Database className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold text-foreground">Datenmodelle (GraphQL Schema)</h2>
      </div>

      <Card className="bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Humanoid Type</CardTitle>
          <CardDescription>Das Hauptdatenmodell für humanoide Roboter in der RoboCosmos-Plattform.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-background border border-border p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>
                <span className="text-purple-400">type</span> <span className="text-yellow-400">Humanoid</span>{" "}
                <span className="text-gray-300">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-blue-400">id</span>
                <span className="text-gray-300">:</span> <span className="text-green-400">ID!</span>
                {"\n"}
                {"  "}
                <span className="text-blue-400">manufacturer</span>
                <span className="text-gray-300">:</span> <span className="text-green-400">String!</span>
                {"\n"}
                {"  "}
                <span className="text-blue-400">model</span>
                <span className="text-gray-300">:</span> <span className="text-green-400">String!</span>
                {"\n"}
                {"  "}
                <span className="text-blue-400">category</span>
                <span className="text-gray-300">:</span> <span className="text-green-400">String!</span>
                {"\n"}
                {"  "}
                <span className="text-blue-400">tco</span>
                <span className="text-gray-300">:</span> <span className="text-green-400">Float</span>
                {"\n"}
                {"  "}
                <span className="text-blue-400">available_for_rent</span>
                <span className="text-gray-300">:</span> <span className="text-green-400">Boolean!</span>
                {"\n"}
                {"  "}
                <span className="text-blue-400">available_for_purchase</span>
                <span className="text-gray-300">:</span> <span className="text-green-400">Boolean!</span>
                {"\n"}
                {"  "}
                <span className="text-blue-400">technical_specs</span>
                <span className="text-gray-300">:</span> <span className="text-green-400">JSON</span>
                {"\n"}
                {"  "}
                <span className="text-blue-400">images</span>
                <span className="text-gray-300">:</span> <span className="text-green-400">[String!]!</span>
                {"\n"}
                {"  "}
                <span className="text-blue-400">created_at</span>
                <span className="text-gray-300">:</span> <span className="text-green-400">DateTime!</span>
                {"\n"}
                {"  "}
                <span className="text-blue-400">updated_at</span>
                <span className="text-gray-300">:</span> <span className="text-green-400">DateTime!</span>
                {"\n"}
                <span className="text-gray-300">{"}"}</span>
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
