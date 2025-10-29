import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle, Database, Server, Lock, HardDrive, Mail, AlertCircle } from "lucide-react"

export default function SystemStatusPage() {
  // Mock system status - in production, this would come from actual health checks
  const systemStatus = {
    database: { operational: true, lastCheck: "Jetzt" },
    api: { operational: true, lastCheck: "Jetzt" },
    auth: { operational: true, lastCheck: "Jetzt" },
    storage: { operational: true, lastCheck: "Jetzt" },
    email: { operational: false, lastCheck: "Vor 2 Minuten" },
  }

  const allOperational = Object.values(systemStatus).every((s) => s.operational)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-100">System-Status & Protokolle</h1>
      </div>

      <Tabs defaultValue="health" className="space-y-6">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="health">Systemzustand</TabsTrigger>
          <TabsTrigger value="errors">Fehlerprotokolle</TabsTrigger>
          <TabsTrigger value="audit">Audit-Protokoll</TabsTrigger>
        </TabsList>

        {/* System Health Tab */}
        <TabsContent value="health" className="space-y-6">
          {/* Overall Status Alert */}
          {allOperational ? (
            <Alert className="bg-green-950 border-green-800">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <AlertDescription className="text-green-200">Alle Systeme funktionieren normal.</AlertDescription>
            </Alert>
          ) : (
            <Alert className="bg-red-950 border-red-800">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <AlertDescription className="text-red-200">
                Kritische Störung erkannt! Einige Dienste sind nicht verfügbar.
              </AlertDescription>
            </Alert>
          )}

          {/* Status Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Database Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-100">
                  <Database className="h-5 w-5" />
                  Datenbank (Supabase DB)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {systemStatus.database.operational ? (
                  <Badge className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Operational
                  </Badge>
                ) : (
                  <Badge className="bg-red-600 hover:bg-red-700">
                    <XCircle className="h-3 w-3 mr-1" />
                    Störung
                  </Badge>
                )}
                <p className="text-sm text-gray-400">Letzte Prüfung: {systemStatus.database.lastCheck}</p>
              </CardContent>
            </Card>

            {/* API Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-100">
                  <Server className="h-5 w-5" />
                  Backend API (Supabase)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {systemStatus.api.operational ? (
                  <Badge className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Operational
                  </Badge>
                ) : (
                  <Badge className="bg-red-600 hover:bg-red-700">
                    <XCircle className="h-3 w-3 mr-1" />
                    Störung
                  </Badge>
                )}
                <p className="text-sm text-gray-400">Letzte Prüfung: {systemStatus.api.lastCheck}</p>
              </CardContent>
            </Card>

            {/* Auth Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-100">
                  <Lock className="h-5 w-5" />
                  Authentifizierung (Supabase Auth)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {systemStatus.auth.operational ? (
                  <Badge className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Operational
                  </Badge>
                ) : (
                  <Badge className="bg-red-600 hover:bg-red-700">
                    <XCircle className="h-3 w-3 mr-1" />
                    Störung
                  </Badge>
                )}
                <p className="text-sm text-gray-400">Letzte Prüfung: {systemStatus.auth.lastCheck}</p>
              </CardContent>
            </Card>

            {/* Storage Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-100">
                  <HardDrive className="h-5 w-5" />
                  Dateispeicher (Supabase Storage)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {systemStatus.storage.operational ? (
                  <Badge className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Operational
                  </Badge>
                ) : (
                  <Badge className="bg-red-600 hover:bg-red-700">
                    <XCircle className="h-3 w-3 mr-1" />
                    Störung
                  </Badge>
                )}
                <p className="text-sm text-gray-400">Letzte Prüfung: {systemStatus.storage.lastCheck}</p>
              </CardContent>
            </Card>

            {/* Email Service Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-100">
                  <Mail className="h-5 w-5" />
                  E-Mail-Versand
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {systemStatus.email.operational ? (
                  <Badge className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Operational
                  </Badge>
                ) : (
                  <Badge className="bg-red-600 hover:bg-red-700">
                    <XCircle className="h-3 w-3 mr-1" />
                    Störung
                  </Badge>
                )}
                <p className="text-sm text-gray-400">Letzte Prüfung: {systemStatus.email.lastCheck}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Error Logs Tab */}
        <TabsContent value="errors">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-100">Fehlerprotokolle</CardTitle>
              <CardDescription className="text-gray-400">
                Anzeige der letzten Backend-Fehler (z.B. von Edge Functions).
              </CardDescription>
              <div className="flex gap-4 mt-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-gray-100">
                    <SelectValue placeholder="Log Level" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">Alle Level</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
                    <SelectItem value="warn">Warning</SelectItem>
                    <SelectItem value="info">Info</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="date"
                  className="w-[180px] bg-gray-800 border-gray-700 text-gray-100"
                  placeholder="Datum"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-400">{/* Log viewer component will be rendered here */}</p>
                <div className="space-y-2 text-sm">
                  <div className="p-3 bg-gray-800 rounded border border-gray-700">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="destructive" className="text-xs">
                        ERROR
                      </Badge>
                      <span className="text-gray-400">28. Okt. 2025 14:23:45</span>
                    </div>
                    <p className="text-gray-300">Database connection timeout in edge function 'process-booking'</p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded border border-gray-700">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-yellow-600 text-xs">WARN</Badge>
                      <span className="text-gray-400">28. Okt. 2025 13:15:22</span>
                    </div>
                    <p className="text-gray-300">High memory usage detected on API server</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audit Log Tab */}
        <TabsContent value="audit">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-100">Audit-Protokoll</CardTitle>
              <CardDescription className="text-gray-400">
                Protokollierung wichtiger Admin-Aktionen auf der Plattform.
              </CardDescription>
              <div className="flex gap-4 mt-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[200px] bg-gray-800 border-gray-700 text-gray-100">
                    <SelectValue placeholder="Admin-Benutzer" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">Alle Admins</SelectItem>
                    <SelectItem value="admin1">admin@robosource.de</SelectItem>
                    <SelectItem value="admin2">support@robosource.de</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="date"
                  className="w-[180px] bg-gray-800 border-gray-700 text-gray-100"
                  placeholder="Datum"
                />
                <Input
                  type="text"
                  className="flex-1 bg-gray-800 border-gray-700 text-gray-100"
                  placeholder="Aktionstyp suchen..."
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-gray-800">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800 hover:bg-gray-800/50">
                      <TableHead className="text-gray-400">Zeitstempel</TableHead>
                      <TableHead className="text-gray-400">Admin-Benutzer</TableHead>
                      <TableHead className="text-gray-400">Aktion</TableHead>
                      <TableHead className="text-gray-400">Betroffenes Objekt</TableHead>
                      <TableHead className="text-gray-400">Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-gray-800 hover:bg-gray-800/50">
                      <TableCell className="text-gray-300">28. Okt. 2025 10:30</TableCell>
                      <TableCell className="text-gray-300">admin@robosource.de</TableCell>
                      <TableCell className="text-gray-300">Benutzer gesperrt</TableCell>
                      <TableCell className="text-gray-300">User ID: xyz123</TableCell>
                      <TableCell className="text-gray-400">Grund: Spam</TableCell>
                    </TableRow>
                    <TableRow className="border-gray-800 hover:bg-gray-800/50">
                      <TableCell className="text-gray-300">28. Okt. 2025 09:15</TableCell>
                      <TableCell className="text-gray-300">support@robosource.de</TableCell>
                      <TableCell className="text-gray-300">Inserat freigegeben</TableCell>
                      <TableCell className="text-gray-300">Listing ID: abc456</TableCell>
                      <TableCell className="text-gray-400">Nach Prüfung freigegeben</TableCell>
                    </TableRow>
                    <TableRow className="border-gray-800 hover:bg-gray-800/50">
                      <TableCell className="text-gray-300 italic" colSpan={5}>
                        {/* Audit log table will be populated dynamically here */}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
