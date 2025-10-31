"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, Store, UserCheck, Ban, MoreHorizontal, UserPlus, Eye, Edit, CheckCircle, Trash } from "lucide-react"

export default function AdminUsersPage() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])

  const users = [
    {
      id: "1",
      name: "Max Mustermann",
      email: "max@merchant.de",
      type: "Händler",
      status: "Verifiziert",
      registered: "15. Okt. 2025",
      lastLogin: "Heute",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "Anna Schmidt",
      email: "anna.s@customer.com",
      type: "Kunde",
      status: "Aktiv",
      registered: "12. Sep. 2025",
      lastLogin: "Gestern",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      name: "Thomas Weber",
      email: "new@applicant.com",
      type: "Händler",
      status: "Ausstehend",
      registered: "27. Okt. 2025",
      lastLogin: "Nie",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "4",
      name: "Spam Bot",
      email: "spam@bot.net",
      type: "Kunde",
      status: "Gesperrt",
      registered: "10. Aug. 2025",
      lastLogin: "Nie",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
  }

  const toggleAllUsers = () => {
    setSelectedUsers((prev) => (prev.length === users.length ? [] : users.map((u) => u.id)))
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">Benutzerverwaltung</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Gesamt Benutzer</p>
                <p className="text-2xl font-bold text-foreground">1.482</p>
              </div>
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Verifizierte Händler</p>
                <p className="text-2xl font-bold text-foreground">157</p>
              </div>
              <Store className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Ausstehende Verifizierungen</p>
                <p className="text-2xl font-bold text-foreground">5</p>
              </div>
              <UserCheck className="h-8 w-8 text-chart-3" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Gesperrte Konten</p>
                <p className="text-2xl font-bold text-foreground">12</p>
              </div>
              <Ban className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Kontotyp" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle</SelectItem>
                  <SelectItem value="customer">Kunde</SelectItem>
                  <SelectItem value="merchant">Händler</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle</SelectItem>
                  <SelectItem value="active">Aktiv</SelectItem>
                  <SelectItem value="verified">Verifiziert</SelectItem>
                  <SelectItem value="pending">Ausstehend</SelectItem>
                  <SelectItem value="banned">Gesperrt</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sortieren nach" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Neueste zuerst</SelectItem>
                  <SelectItem value="oldest">Älteste zuerst</SelectItem>
                  <SelectItem value="lastLogin">Letzter Login</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Neuen Benutzer anlegen
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox checked={selectedUsers.length === users.length} onCheckedChange={toggleAllUsers} />
                </TableHead>
                <TableHead>Benutzer</TableHead>
                <TableHead>Kontotyp</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Registriert am</TableHead>
                <TableHead>Letzter Login</TableHead>
                <TableHead className="text-right">Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedUsers.includes(user.id)}
                      onCheckedChange={() => toggleUserSelection(user.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-foreground">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.type === "Händler" ? "default" : "secondary"}>{user.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === "Verifiziert" || user.status === "Aktiv"
                          ? "default"
                          : user.status === "Ausstehend"
                            ? "outline"
                            : "destructive"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{user.registered}</TableCell>
                  <TableCell className="text-muted-foreground">{user.lastLogin}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Profil ansehen
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Benutzer bearbeiten
                        </DropdownMenuItem>
                        {user.status === "Ausstehend" && (
                          <DropdownMenuItem>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Händler verifizieren
                          </DropdownMenuItem>
                        )}
                        {user.status !== "Gesperrt" ? (
                          <DropdownMenuItem className="text-destructive">
                            <Ban className="mr-2 h-4 w-4" />
                            Benutzer sperren
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Sperre aufheben
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash className="mr-2 h-4 w-4" />
                          Benutzer löschen
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
