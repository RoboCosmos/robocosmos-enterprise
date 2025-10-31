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
      <h1 className="text-2xl font-bold mb-6 text-foreground">Plattform-Einstellungen</h1>

      <Tabs defaultValue="categories" className="space-y-8">
        <TabsList>
          <TabsTrigger value="categories">Kategorien & Use Cases</TabsTrigger>
          <TabsTrigger value="fees">Gebühren & Provisionen</TabsTrigger>
          <TabsTrigger value="emails">E-Mail-Vorlagen</TabsTrigger>
          <TabsTrigger value="content">Seiteninhalte (CMS)</TabsTrigger>
          <TabsTrigger value="admins">Admin-Konten</TabsTrigger>
        </TabsList>

        <TabsContent value="categories">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Roboter-Kategorien & Anwendungsfälle verwalten</CardTitle>
                <CardDescription>Definieren Sie die Filteroptionen für Roboter.</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Neue Kategorie hinzufügen
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Typ (Kategorie/Use Case)</TableHead>
                    <TableHead>Anzahl Inserate</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-foreground">Logistik</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Kategorie</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">150</TableCell>
                    <TableCell>
                      <Badge variant="default">Aktiv</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Bearbeiten
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ToggleLeft className="mr-2 h-4 w-4" />
                            Deaktivieren
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="mr-2 h-4 w-4" />
                            Löschen
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-medium text-foreground">Picking & Packing</TableCell>
                    <TableCell>
                      <Badge>Use Case</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">85</TableCell>
                    <TableCell>
                      <Badge variant="default">Aktiv</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Bearbeiten
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ToggleLeft className="mr-2 h-4 w-4" />
                            Deaktivieren
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="mr-2 h-4 w-4" />
                            Löschen
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-medium text-foreground">Healthcare (alt)</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Kategorie</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">0</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Deaktiviert</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Bearbeiten
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ToggleRight className="mr-2 h-4 w-4" />
                            Aktivieren
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
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

        <TabsContent value="fees">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-foreground">Gebührenmanagement Platzhalter</h2>
              <p className="text-muted-foreground mt-2">
                Hier können Gebühren und Provisionen für die Plattform verwaltet werden.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emails">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-foreground">E-Mail-Vorlagen Platzhalter</h2>
              <p className="text-muted-foreground mt-2">
                Hier können E-Mail-Vorlagen für automatische Benachrichtigungen verwaltet werden.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-foreground">Seiteninhalte (CMS) Platzhalter</h2>
              <p className="text-muted-foreground mt-2">
                Hier können Seiteninhalte wie Texte, Bilder und andere Medien verwaltet werden.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="admins">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-foreground">Admin-Konten Platzhalter</h2>
              <p className="text-muted-foreground mt-2">
                Hier können Admin-Konten und deren Berechtigungen verwaltet werden.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
