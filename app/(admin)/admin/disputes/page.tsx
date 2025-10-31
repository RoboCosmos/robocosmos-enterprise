"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MoreHorizontal, Eye, UserCheck, Flag, CheckCircle, Archive } from "lucide-react"

export default function DisputesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">Support & Streitschlichtung</h1>

      <Tabs defaultValue="disputes" className="space-y-8">
        <TabsList className="bg-muted border-border">
          <TabsTrigger
            value="disputes"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Streitfälle
          </TabsTrigger>
          <TabsTrigger
            value="tickets"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Support Tickets
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Bewertungs-Moderation
          </TabsTrigger>
          <TabsTrigger
            value="messages"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Nachrichten-Moderation
          </TabsTrigger>
        </TabsList>

        {/* Disputes Tab Content */}
        <TabsContent value="disputes" className="space-y-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Suche nach Fall-ID, Kunde, Händler..."
                    className="pl-10 bg-background border-input text-foreground"
                  />
                </div>

                {/* Status Filter */}
                <Select defaultValue="all">
                  <SelectTrigger className="w-full lg:w-[200px] bg-background border-input text-foreground">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="all">Alle</SelectItem>
                    <SelectItem value="new">Neu</SelectItem>
                    <SelectItem value="in-progress">In Bearbeitung</SelectItem>
                    <SelectItem value="waiting">Wartet auf Antwort</SelectItem>
                    <SelectItem value="resolved">Gelöst</SelectItem>
                    <SelectItem value="closed">Geschlossen</SelectItem>
                  </SelectContent>
                </Select>

                {/* Priority Filter */}
                <Select defaultValue="all">
                  <SelectTrigger className="w-full lg:w-[200px] bg-background border-input text-foreground">
                    <SelectValue placeholder="Priorität" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="all">Alle</SelectItem>
                    <SelectItem value="low">Niedrig</SelectItem>
                    <SelectItem value="medium">Mittel</SelectItem>
                    <SelectItem value="high">Hoch</SelectItem>
                    <SelectItem value="critical">Kritisch</SelectItem>
                  </SelectContent>
                </Select>

                {/* Assigned To Filter */}
                <Select defaultValue="all">
                  <SelectTrigger className="w-full lg:w-[200px] bg-background border-input text-foreground">
                    <SelectValue placeholder="Zugewiesen an" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="all">Alle Admins</SelectItem>
                    <SelectItem value="admin-a">Admin A</SelectItem>
                    <SelectItem value="admin-b">Admin B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-muted/50">
                      <TableHead className="text-muted-foreground">Fall-ID</TableHead>
                      <TableHead className="text-muted-foreground">Betreff / Buchung</TableHead>
                      <TableHead className="text-muted-foreground">Kunde</TableHead>
                      <TableHead className="text-muted-foreground">Händler</TableHead>
                      <TableHead className="text-muted-foreground">Status</TableHead>
                      <TableHead className="text-muted-foreground">Priorität</TableHead>
                      <TableHead className="text-muted-foreground">Zugewiesen an</TableHead>
                      <TableHead className="text-muted-foreground">Letzte Aktivität</TableHead>
                      <TableHead className="text-muted-foreground text-right">Aktionen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-border hover:bg-muted/50">
                      <TableCell className="font-medium text-foreground">#D101</TableCell>
                      <TableCell className="text-foreground">
                        <div>Roboter defekt</div>
                        <div className="text-sm text-muted-foreground">(#B1001)</div>
                      </TableCell>
                      <TableCell className="text-foreground">Kunde AG</TableCell>
                      <TableCell className="text-foreground">RoboTrade GmbH</TableCell>
                      <TableCell>
                        <Badge variant="destructive">Neu</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="destructive">Hoch</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">Unzugewiesen</TableCell>
                      <TableCell className="text-foreground">Heute</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-popover border-border">
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <Eye className="mr-2 h-4 w-4" />
                              Fall ansehen/bearbeiten
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <UserCheck className="mr-2 h-4 w-4" />
                              Zuweisen an...
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <Flag className="mr-2 h-4 w-4" />
                              Priorität ändern...
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-border" />
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Status auf 'Gelöst' setzen
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-muted-foreground hover:bg-accent">
                              <Archive className="mr-2 h-4 w-4" />
                              Fall schließen
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>

                    <TableRow className="border-border hover:bg-muted/50">
                      <TableCell className="font-medium text-foreground">#D102</TableCell>
                      <TableCell className="text-foreground">
                        <div>Mietzeitraum Problem</div>
                        <div className="text-sm text-muted-foreground">(#B1003)</div>
                      </TableCell>
                      <TableCell className="text-foreground">Logistik Inc.</TableCell>
                      <TableCell className="text-foreground">RoboTrade GmbH</TableCell>
                      <TableCell>
                        <Badge className="bg-chart-4 text-white border-transparent">In Bearbeitung</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-chart-3 text-white border-transparent">Mittel</Badge>
                      </TableCell>
                      <TableCell className="text-foreground">Admin A</TableCell>
                      <TableCell className="text-foreground">Gestern</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-popover border-border">
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <Eye className="mr-2 h-4 w-4" />
                              Fall ansehen/bearbeiten
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <UserCheck className="mr-2 h-4 w-4" />
                              Zuweisen an...
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <Flag className="mr-2 h-4 w-4" />
                              Priorität ändern...
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-border" />
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Status auf 'Gelöst' setzen
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-muted-foreground hover:bg-accent">
                              <Archive className="mr-2 h-4 w-4" />
                              Fall schließen
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>

                    <TableRow className="border-border hover:bg-muted/50">
                      <TableCell className="font-medium text-foreground">#D103</TableCell>
                      <TableCell className="text-foreground">
                        <div>Frage zur Rechnung</div>
                        <div className="text-sm text-muted-foreground">(#B1002)</div>
                      </TableCell>
                      <TableCell className="text-foreground">Bau GmbH</TableCell>
                      <TableCell className="text-foreground">Händler Müller</TableCell>
                      <TableCell>
                        <Badge className="bg-chart-1 text-white border-transparent">Gelöst</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Niedrig</Badge>
                      </TableCell>
                      <TableCell className="text-foreground">Admin B</TableCell>
                      <TableCell className="text-foreground">25. Okt. 2025</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-popover border-border">
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <Eye className="mr-2 h-4 w-4" />
                              Fall ansehen/bearbeiten
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <UserCheck className="mr-2 h-4 w-4" />
                              Zuweisen an...
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <Flag className="mr-2 h-4 w-4" />
                              Priorität ändern...
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-border" />
                            <DropdownMenuItem className="text-foreground hover:bg-accent">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Status auf 'Gelöst' setzen
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-muted-foreground hover:bg-accent">
                              <Archive className="mr-2 h-4 w-4" />
                              Fall schließen
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tickets">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-foreground">Support Tickets Platzhalter</h2>
              <p className="text-muted-foreground mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-foreground">Bewertungs-Moderation Platzhalter</h2>
              <p className="text-muted-foreground mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-foreground">Nachrichten-Moderation Platzhalter</h2>
              <p className="text-muted-foreground mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
