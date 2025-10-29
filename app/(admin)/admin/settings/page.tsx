"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, MoreHorizontal, Edit, ToggleLeft, ToggleRight, Trash } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6 text-gray-100">Plattform-Einstellungen</h1>

      {/* Tab Navigation */}
      <Tabs defaultValue="categories" className="space-y-8">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="categories" className="data-[state=active]:bg-blue-600">
            Kategorien & Use Cases
          </TabsTrigger>
          <TabsTrigger value="fees" className="data-[state=active]:bg-blue-600">
            Gebühren & Provisionen
          </TabsTrigger>
          <TabsTrigger value="emails" className="data-[state=active]:bg-blue-600">
            E-Mail-Vorlagen
          </TabsTrigger>
          <TabsTrigger value="content" className="data-[state=active]:bg-blue-600">
            Seiteninhalte (CMS)
          </TabsTrigger>
          <TabsTrigger value="admins" className="data-[state=active]:bg-blue-600">
            Admin-Konten
          </TabsTrigger>
        </TabsList>

        {/* Categories & Use Cases Tab */}
        <TabsContent value="categories">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white">Roboter-Kategorien & Anwendungsfälle verwalten</CardTitle>
                <CardDescription className="text-gray-400">
                  Definieren Sie die Filteroptionen für Roboter.
                </CardDescription>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                Neue Kategorie hinzufügen
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700 hover:bg-gray-750">
                    <TableHead className="text-gray-300">Name</TableHead>
                    <TableHead className="text-gray-300">Typ (Kategorie/Use Case)</TableHead>
                    <TableHead className="text-gray-300">Anzahl Inserate</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300">Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Row 1: Logistik */}
                  <TableRow className="border-gray-700 hover:bg-gray-750">
                    <TableCell className="font-medium text-white">Logistik</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                        Kategorie
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-300">150</TableCell>
                    <TableCell>
                      <Badge className="bg-green-600 text-white">Aktiv</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                            <Edit className="mr-2 h-4 w-4" />
                            Bearbeiten
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                            <ToggleLeft className="mr-2 h-4 w-4" />
                            Deaktivieren
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600 hover:bg-gray-700">
                            <Trash className="mr-2 h-4 w-4" />
                            Löschen
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>

                  {/* Row 2: Picking & Packing */}
                  <TableRow className="border-gray-700 hover:bg-gray-750">
                    <TableCell className="font-medium text-white">Picking & Packing</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-600 text-white">Use Case</Badge>
                    </TableCell>
                    <TableCell className="text-gray-300">85</TableCell>
                    <TableCell>
                      <Badge className="bg-green-600 text-white">Aktiv</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                            <Edit className="mr-2 h-4 w-4" />
                            Bearbeiten
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                            <ToggleLeft className="mr-2 h-4 w-4" />
                            Deaktivieren
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600 hover:bg-gray-700">
                            <Trash className="mr-2 h-4 w-4" />
                            Löschen
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>

                  {/* Row 3: Healthcare (alt) */}
                  <TableRow className="border-gray-700 hover:bg-gray-750">
                    <TableCell className="font-medium text-white">Healthcare (alt)</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                        Kategorie
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-300">0</TableCell>
                    <TableCell>
                      <Badge variant="destructive" className="bg-red-600 text-white">
                        Deaktiviert
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                            <Edit className="mr-2 h-4 w-4" />
                            Bearbeiten
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
                            <ToggleRight className="mr-2 h-4 w-4" />
                            Aktivieren
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600 hover:bg-gray-700">
                            <Trash className="mr-2 h-4 w-4" />
                            Löschen
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Fees & Commissions Tab - Placeholder */}
        <TabsContent value="fees">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-white">Gebührenmanagement Platzhalter</h2>
              <p className="text-gray-400 mt-2">
                Hier können Gebühren und Provisionen für die Plattform verwaltet werden.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Templates Tab - Placeholder */}
        <TabsContent value="emails">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-white">E-Mail-Vorlagen Platzhalter</h2>
              <p className="text-gray-400 mt-2">
                Hier können E-Mail-Vorlagen für automatische Benachrichtigungen verwaltet werden.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Management Tab - Placeholder */}
        <TabsContent value="content">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-white">Seiteninhalte (CMS) Platzhalter</h2>
              <p className="text-gray-400 mt-2">
                Hier können Seiteninhalte wie Texte, Bilder und andere Medien verwaltet werden.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Admin Accounts Tab - Placeholder */}
        <TabsContent value="admins">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-white">Admin-Konten Platzhalter</h2>
              <p className="text-gray-400 mt-2">Hier können Admin-Konten und deren Berechtigungen verwaltet werden.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
