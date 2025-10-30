import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Key } from "lucide-react"

export function ApiDocsAuthSection() {
  return (
    <section id="authentifizierung" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <Key className="h-6 w-6 text-blue-500" />
        <h2 className="text-3xl font-bold text-white">Authentifizierung</h2>
      </div>

      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">JWT Bearer Token</CardTitle>
          <CardDescription>
            Alle API-Anfragen müssen mit einem gültigen JWT-Token authentifiziert werden.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-blue-600/20 text-blue-400 border-blue-600">
                POST
              </Badge>
              <code className="text-sm text-gray-300">/api/auth/login</code>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Token-Lifetime: <span className="text-blue-400 font-medium">60 Minuten</span>
            </p>
          </div>

          <div className="rounded-lg bg-gray-950 border border-gray-800 p-4 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-gray-300">
                {`curl -X POST https://api.robocosmos.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'

# Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600,
  "user": {
    "id": "usr_123",
    "email": "user@example.com"
  }
}`}
              </code>
            </pre>
          </div>

          <div className="rounded-lg bg-gray-950 border border-gray-800 p-4 overflow-x-auto mt-4">
            <p className="text-sm text-gray-400 mb-2">Verwendung des Tokens:</p>
            <pre className="text-sm">
              <code className="text-gray-300">
                {`curl -X POST https://api.robocosmos.com/graphql \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "{ robots { id name } }"}'`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
