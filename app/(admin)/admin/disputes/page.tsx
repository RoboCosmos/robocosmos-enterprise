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
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-100 mb-6">Support & Streitschlichtung</h1>

      {/* Tab Navigation */}
      <Tabs defaultValue="disputes" className="space-y-8">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="disputes" className="data-[state=active]:bg-blue-600">
            Streitfälle
          </TabsTrigger>
          <TabsTrigger value="tickets" className="data-[state=active]:bg-blue-600">
            Support Tickets
          </TabsTrigger>
          <TabsTrigger value="reviews" className="data-[state=active]:bg-blue-600">
            Bewertungs-Moderation
          </TabsTrigger>
          <TabsTrigger value="messages" className="data-[state=active]:bg-blue-600">
            Nachrichten-Moderation
          </TabsTrigger>
        </TabsList>

        {/* Disputes Tab Content */}
        <TabsContent value="disputes" className="space-y-8">
          {/* Filter and Search Bar */}
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Suche nach Fall-ID, Kunde, Händler..."
                    className="pl-10 bg-gray-900 border-gray-700 text-white"
                  />
                </div>

                {/* Status Filter */}
                <Select defaultValue="all">
                  <SelectTrigger className="w-full lg:w-[200px] bg-gray-900 border-gray-700 text-white">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
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
                  <SelectTrigger className="w-full lg:w-[200px] bg-gray-900 border-gray-700 text-white">
                    <SelectValue placeholder="Priorität" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">Alle</SelectItem>
                    <SelectItem value="low">Niedrig</SelectItem>
                    <SelectItem value="medium">Mittel</SelectItem>
                    <SelectItem value="high">Hoch</SelectItem>
                    <SelectItem value="critical">Kritisch</SelectItem>
                  </SelectContent>
                </Select>

                {/* Assigned To Filter */}
                <Select defaultValue="all">
                  <SelectTrigger className="w-full lg:w-[200px] bg-gray-900 border-gray-700 text-white">
                    <SelectValue placeholder="Zugewiesen an" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">Alle Admins</SelectItem>
                    <SelectItem value="admin-a">Admin A</SelectItem>
                    <SelectItem value="admin-b">Admin B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Disputes Table */}
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700 hover:bg-gray-750">
                      <TableHead className="text-gray-300">Fall-ID</TableHead>
                      <TableHead className="text-gray-300">Betreff / Buchung</TableHead>
                      <TableHead className="text-gray-300">Kunde</TableHead>
                      <TableHead className="text-gray-300">Händler</TableHead>
                      <TableHead className="text-gray-300">Status</TableHead>
                      <TableHead className="text-gray-300">Priorität</TableHead>
                      <TableHead className="text-gray-300">Zugewiesen an</TableHead>
                      <TableHead className="text-gray-300">Letzte Aktivität</TableHead>
                      <TableHead className="text-gray-300 text-right">Aktionen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Row 1: New, High Priority */}
                    <TableRow className="border-gray-700 hover:bg-gray-750">
                      <TableCell className="font-medium text-white">#D101</TableCell>
                      <TableCell className="text-gray-300">
                        <div>Roboter defekt</div>
                        <div className="text-sm text-gray-500">(#B1001)</div>
                      </TableCell>
                      <TableCell className="text-gray-300">Kunde AG</TableCell>
                      <TableCell className="text-gray-300">RoboTrade GmbH</TableCell>
                      <TableCell>
                        <Badge className="bg-red-600 text-white">Neu</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-red-600 text-white">Hoch</Badge>
                      </TableCell>
                      <TableCell className="text-gray-400">Unzugewiesen</TableCell>
                      <TableCell className="text-gray-300">Heute</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                              <Eye className="mr-2 h-4 w-4" />
                              Fall ansehen/bearbeiten
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                              <UserCheck className="mr-2 h-4 w-4" />
                              Zuweisen an...
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                              <Flag className="mr-2 h-4 w-4" />
                              Priorität ändern...
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-gray-700" />
                            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Status auf 'Gelöst' setzen
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-gray-500 hover:bg-gray-700">
                              <Archive className="mr-2 h-4 w-4" />
                              Fall schließen
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>

                    {/* Row 2: In Progress, Medium Priority */}
                    <TableRow className="border-gray-700 hover:bg-gray-750">
                      <TableCell className="font-medium text-white">#D102</TableCell>
                      <TableCell className="text-gray-300">
                        <div>Mietzeitraum Problem</div>
                        <div className="text-sm text-gray-500">(#B1003)</div>
                      </TableCell>
                      <TableCell className="text-gray-300">Logistik Inc.</TableCell>
                      <TableCell className="text-gray-300">RoboTrade GmbH</TableCell>
                      <TableCell>
                        <Badge className="bg-yellow-600 text-white">In Bearbeitung</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-orange-600 text-white">Mittel</Badge>
                      </TableCell>
                      <TableCell className="text-gray-300">Admin A</TableCell>
                      <TableCell className="text-gray-300">Gestern</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                              <Eye className="mr-2 h-4 w-4" />
                              Fall ansehen/bearbeiten
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                              <UserCheck className="mr-2 h-4 w-4" />
                              Zuweisen an...
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                              <Flag className="mr-2 h-4 w-4" />
                              Priorität ändern...
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-gray-700" />
                            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Status auf 'Gelöst' setzen
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-gray-500 hover:bg-gray-700">
                              <Archive className="mr-2 h-4 w-4" />
                              Fall schließen
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>

                    {/* Row 3: Resolved, Low Priority */}
                    <TableRow className="border-gray-700 hover:bg-gray-750">
                      <TableCell className="font-medium text-white">#D103</TableCell>
                      <TableCell className="text-gray-300">
                        <div>Frage zur Rechnung</div>
                        <div className="text-sm text-gray-500">(#B1002)</div>
                      </TableCell>
                      <TableCell className="text-gray-300">Bau GmbH</TableCell>
                      <TableCell className="text-gray-300">Händler Müller</TableCell>
                      <TableCell>
                        <Badge className="bg-green-600 text-white">Gelöst</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-gray-600 text-white">Niedrig</Badge>
                      </TableCell>
                      <TableCell className="text-gray-300">Admin B</TableCell>
                      <TableCell className="text-gray-300">25. Okt. 2025</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                              <Eye className="mr-2 h-4 w-4" />
                              Fall ansehen/bearbeiten
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                              <UserCheck className="mr-2 h-4 w-4" />
                              Zuweisen an...
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                              <Flag className="mr-2 h-4 w-4" />
                              Priorität ändern...
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-gray-700" />
                            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Status auf 'Gelöst' setzen
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-gray-500 hover:bg-gray-700">
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

        {/* Support Tickets Tab - Placeholder */}
        <TabsContent value="tickets">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-gray-100">Support Tickets Platzhalter</h2>
              <p className="text-gray-400 mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reviews Moderation Tab - Placeholder */}
        <TabsContent value="reviews">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-gray-100">Bewertungs-Moderation Platzhalter</h2>
              <p className="text-gray-400 mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Messages Moderation Tab - Placeholder */}
        <TabsContent value="messages">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-gray-100">Nachrichten-Moderation Platzhalter</h2>
              <p className="text-gray-400 mt-2">Dieser Bereich wird später implementiert.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
