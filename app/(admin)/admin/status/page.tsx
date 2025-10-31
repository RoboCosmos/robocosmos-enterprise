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
        <h1 className="text-2xl font-bold text-foreground">System-Status & Protokolle</h1>
      </div>

      <Tabs defaultValue="health" className="space-y-6">
        <TabsList>
          <TabsTrigger value="health">Systemzustand</TabsTrigger>
          <TabsTrigger value="errors">Fehlerprotokolle</TabsTrigger>
          <TabsTrigger value="audit">Audit-Protokoll</TabsTrigger>
        </TabsList>

        <TabsContent value="health" className="space-y-6">
          {allOperational ? (
            <Alert variant="default">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>Alle Systeme funktionieren normal.</AlertDescription>
            </Alert>
          ) : (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>Kritische Störung erkannt! Einige Dienste sind nicht verfügbar.</AlertDescription>
            </Alert>
          )}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Datenbank (Supabase DB)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {systemStatus.database.operational ? (
                  <Badge variant="default">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Operational
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <XCircle className="h-3 w-3 mr-1" />
                    Störung
                  </Badge>
                )}
                <p className="text-sm text-muted-foreground">Letzte Prüfung: {systemStatus.database.lastCheck}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Backend API (Supabase)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {systemStatus.api.operational ? (
                  <Badge variant="default">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Operational
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <XCircle className="h-3 w-3 mr-1" />
                    Störung
                  </Badge>
                )}
                <p className="text-sm text-muted-foreground">Letzte Prüfung: {systemStatus.api.lastCheck}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Authentifizierung (Supabase Auth)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {systemStatus.auth.operational ? (
                  <Badge variant="default">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Operational
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <XCircle className="h-3 w-3 mr-1" />
                    Störung
                  </Badge>
                )}
                <p className="text-sm text-muted-foreground">Letzte Prüfung: {systemStatus.auth.lastCheck}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5" />
                  Dateispeicher (Supabase Storage)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {systemStatus.storage.operational ? (
                  <Badge variant="default">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Operational
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <XCircle className="h-3 w-3 mr-1" />
                    Störung
                  </Badge>
                )}
                <p className="text-sm text-muted-foreground">Letzte Prüfung: {systemStatus.storage.lastCheck}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  E-Mail-Versand
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {systemStatus.email.operational ? (
                  <Badge variant="default">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Operational
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <XCircle className="h-3 w-3 mr-1" />
                    Störung
                  </Badge>
                )}
                <p className="text-sm text-muted-foreground">Letzte Prüfung: {systemStatus.email.lastCheck}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="errors">
          <Card>
            <CardHeader>
              <CardTitle>Fehlerprotokolle</CardTitle>
              <CardDescription>Anzeige der letzten Backend-Fehler (z.B. von Edge Functions).</CardDescription>
              <div className="flex gap-4 mt-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Log Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle Level</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
                    <SelectItem value="warn">Warning</SelectItem>
                    <SelectItem value="info">Info</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="date" className="w-[180px]" placeholder="Datum" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="p-3 bg-muted rounded border">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="destructive" className="text-xs">
                        ERROR
                      </Badge>
                      <span className="text-muted-foreground">28. Okt. 2025 14:23:45</span>
                    </div>
                    <p className="text-foreground">Database connection timeout in edge function 'process-booking'</p>
                  </div>
                  <div className="p-3 bg-muted rounded border">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        WARN
                      </Badge>
                      <span className="text-muted-foreground">28. Okt. 2025 13:15:22</span>
                    </div>
                    <p className="text-foreground">High memory usage detected on API server</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit">
          <Card>
            <CardHeader>
              <CardTitle>Audit-Protokoll</CardTitle>
              <CardDescription>Protokollierung wichtiger Admin-Aktionen auf der Plattform.</CardDescription>
              <div className="flex gap-4 mt-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Admin-Benutzer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle Admins</SelectItem>
                    <SelectItem value="admin1">admin@robosource.de</SelectItem>
                    <SelectItem value="admin2">support@robosource.de</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="date" className="w-[180px]" placeholder="Datum" />
                <Input type="text" className="flex-1" placeholder="Aktionstyp suchen..." />
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Zeitstempel</TableHead>
                      <TableHead>Admin-Benutzer</TableHead>
                      <TableHead>Aktion</TableHead>
                      <TableHead>Betroffenes Objekt</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-muted-foreground">28. Okt. 2025 10:30</TableCell>
                      <TableCell className="text-muted-foreground">admin@robosource.de</TableCell>
                      <TableCell className="text-muted-foreground">Benutzer gesperrt</TableCell>
                      <TableCell className="text-muted-foreground">User ID: xyz123</TableCell>
                      <TableCell className="text-muted-foreground">Grund: Spam</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground">28. Okt. 2025 09:15</TableCell>
                      <TableCell className="text-muted-foreground">support@robosource.de</TableCell>
                      <TableCell className="text-muted-foreground">Inserat freigegeben</TableCell>
                      <TableCell className="text-muted-foreground">Listing ID: abc456</TableCell>
                      <TableCell className="text-muted-foreground">Nach Prüfung freigegeben</TableCell>
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
