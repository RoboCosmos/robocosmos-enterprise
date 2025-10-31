import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserPlus, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function TeamMembers() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Team-Mitglieder</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1">
            Verwalten Sie Ihr Team und deren Zugriffsrechte
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <UserPlus className="h-4 w-4 mr-2" />
          Neues Mitglied einladen
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-accent">
                <TableHead className="text-muted-foreground">Name</TableHead>
                <TableHead className="text-muted-foreground">Rolle</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Beigetreten am</TableHead>
                <TableHead className="text-muted-foreground text-right">Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Row 1 - Admin, Active */}
              <TableRow className="border-border hover:bg-accent">
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">Anna Schmidt</span>
                    <span className="text-sm text-muted-foreground">anna.schmidt@firma.de</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white">Admin</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Aktiv</Badge>
                </TableCell>
                <TableCell className="text-foreground">15.01.2024</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Rolle ändern</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Entfernen</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>

              {/* Row 2 - Einkäufer, Active */}
              <TableRow className="border-border hover:bg-accent">
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">Max Müller</span>
                    <span className="text-sm text-muted-foreground">max.mueller@firma.de</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-muted text-foreground">
                    Einkäufer
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Aktiv</Badge>
                </TableCell>
                <TableCell className="text-foreground">22.02.2024</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Rolle ändern</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Entfernen</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>

              {/* Row 3 - Einkäufer, Invited */}
              <TableRow className="border-border hover:bg-accent">
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">Sarah Weber</span>
                    <span className="text-sm text-muted-foreground">sarah.weber@firma.de</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-muted text-foreground">
                    Einkäufer
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-yellow-600 text-yellow-600">
                    Eingeladen
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">-</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Einladung erneut senden</DropdownMenuItem>
                      <DropdownMenuItem>Rolle ändern</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Einladung zurückziehen</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>

              {/* Row 4 - Betrachter, Active */}
              <TableRow className="border-border hover:bg-accent">
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">Thomas Klein</span>
                    <span className="text-sm text-muted-foreground">thomas.klein@firma.de</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-muted text-foreground">
                    Betrachter
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Aktiv</Badge>
                </TableCell>
                <TableCell className="text-foreground">10.03.2024</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Rolle ändern</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Entfernen</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
