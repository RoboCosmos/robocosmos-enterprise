"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye } from "lucide-react"

export default function CustomerRequests() {
  const requests = [
    {
      id: "ANF-2025-001",
      status: "Wartend",
      statusColor: "bg-yellow-600 hover:bg-yellow-700",
      robot: "Atlas V3",
      merchant: "RoboTrade GmbH",
      lastActivity: "Vor 2 Stunden",
    },
    {
      id: "ANF-2025-002",
      status: "Angebot erhalten",
      statusColor: "bg-green-600 hover:bg-green-700",
      robot: "Kuka KR 210",
      merchant: "Händler Müller",
      lastActivity: "Gestern",
    },
    {
      id: "ANF-2025-003",
      status: "Wartend",
      statusColor: "bg-yellow-600 hover:bg-yellow-700",
      robot: "ABB IRB 6700",
      merchant: "Robotik Schmidt",
      lastActivity: "Vor 1 Tag",
    },
    {
      id: "ANF-2025-004",
      status: "Angebot erhalten",
      statusColor: "bg-green-600 hover:bg-green-700",
      robot: "Digit V2",
      merchant: "RoboTrade GmbH",
      lastActivity: "Vor 3 Tagen",
    },
  ]

  const waitingRequests = requests.filter((r) => r.status === "Wartend")
  const receivedOffers = requests.filter((r) => r.status === "Angebot erhalten")

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Angebote & Anfragen</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Verwalten Sie Ihre Anfragen und erhaltene Angebote
        </p>
      </div>

      <Tabs defaultValue="waiting" className="space-y-6">
        <TabsList className="bg-muted">
          <TabsTrigger value="all">Alle</TabsTrigger>
          <TabsTrigger value="waiting">Warten auf Antwort</TabsTrigger>
          <TabsTrigger value="received">Erhaltene Angebote</TabsTrigger>
          <TabsTrigger value="archive">Archiv</TabsTrigger>
        </TabsList>

        {/* All Requests Tab */}
        <TabsContent value="all" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-accent">
                      <TableHead className="text-muted-foreground">Status</TableHead>
                      <TableHead className="text-muted-foreground">Anfrage-ID</TableHead>
                      <TableHead className="text-muted-foreground">Roboter</TableHead>
                      <TableHead className="text-muted-foreground">Händler</TableHead>
                      <TableHead className="text-muted-foreground">Letzte Aktivität</TableHead>
                      <TableHead className="text-muted-foreground text-right">Aktionen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((request) => (
                      <TableRow key={request.id} className="border-border hover:bg-accent">
                        <TableCell>
                          <Badge className={`${request.statusColor} text-white`}>{request.status}</Badge>
                        </TableCell>
                        <TableCell className="font-medium text-foreground">{request.id}</TableCell>
                        <TableCell className="text-foreground">{request.robot}</TableCell>
                        <TableCell className="text-foreground">{request.merchant}</TableCell>
                        <TableCell className="text-muted-foreground">{request.lastActivity}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Details anzeigen
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Waiting for Response Tab */}
        <TabsContent value="waiting" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-accent">
                      <TableHead className="text-muted-foreground">Status</TableHead>
                      <TableHead className="text-muted-foreground">Anfrage-ID</TableHead>
                      <TableHead className="text-muted-foreground">Roboter</TableHead>
                      <TableHead className="text-muted-foreground">Händler</TableHead>
                      <TableHead className="text-muted-foreground">Letzte Aktivität</TableHead>
                      <TableHead className="text-muted-foreground text-right">Aktionen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {waitingRequests.map((request) => (
                      <TableRow key={request.id} className="border-border hover:bg-accent">
                        <TableCell>
                          <Badge className={`${request.statusColor} text-white`}>{request.status}</Badge>
                        </TableCell>
                        <TableCell className="font-medium text-foreground">{request.id}</TableCell>
                        <TableCell className="text-foreground">{request.robot}</TableCell>
                        <TableCell className="text-foreground">{request.merchant}</TableCell>
                        <TableCell className="text-muted-foreground">{request.lastActivity}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Details anzeigen
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Received Offers Tab */}
        <TabsContent value="received" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-accent">
                      <TableHead className="text-muted-foreground">Status</TableHead>
                      <TableHead className="text-muted-foreground">Anfrage-ID</TableHead>
                      <TableHead className="text-muted-foreground">Roboter</TableHead>
                      <TableHead className="text-muted-foreground">Händler</TableHead>
                      <TableHead className="text-muted-foreground">Letzte Aktivität</TableHead>
                      <TableHead className="text-muted-foreground text-right">Aktionen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {receivedOffers.map((request) => (
                      <TableRow key={request.id} className="border-border hover:bg-accent">
                        <TableCell>
                          <Badge className={`${request.statusColor} text-white`}>{request.status}</Badge>
                        </TableCell>
                        <TableCell className="font-medium text-foreground">{request.id}</TableCell>
                        <TableCell className="text-foreground">{request.robot}</TableCell>
                        <TableCell className="text-foreground">{request.merchant}</TableCell>
                        <TableCell className="text-muted-foreground">{request.lastActivity}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Details anzeigen
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Archive Tab */}
        <TabsContent value="archive" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Keine archivierten Anfragen vorhanden</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
