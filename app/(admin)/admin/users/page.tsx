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
      <h1 className="text-2xl font-bold text-gray-100 mb-6">Benutzerverwaltung</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Gesamt Benutzer</p>
                <p className="text-2xl font-bold text-gray-100">1.482</p>
              </div>
              <Users className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Verifizierte Händler</p>
                <p className="text-2xl font-bold text-gray-100">157</p>
              </div>
              <Store className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Ausstehende Verifizierungen</p>
                <p className="text-2xl font-bold text-gray-100">5</p>
              </div>
              <UserCheck className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Gesperrte Konten</p>
                <p className="text-2xl font-bold text-gray-100">12</p>
              </div>
              <Ban className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Kontotyp" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="all">Alle</SelectItem>
                  <SelectItem value="customer">Kunde</SelectItem>
                  <SelectItem value="merchant">Händler</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="all">Alle</SelectItem>
                  <SelectItem value="active">Aktiv</SelectItem>
                  <SelectItem value="verified">Verifiziert</SelectItem>
                  <SelectItem value="pending">Ausstehend</SelectItem>
                  <SelectItem value="banned">Gesperrt</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px] bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Sortieren nach" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="newest">Neueste zuerst</SelectItem>
                  <SelectItem value="oldest">Älteste zuerst</SelectItem>
                  <SelectItem value="lastLogin">Letzter Login</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <UserPlus className="mr-2 h-4 w-4" />
              Neuen Benutzer anlegen
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700 hover:bg-gray-750">
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedUsers.length === users.length}
                    onCheckedChange={toggleAllUsers}
                    className="border-gray-600"
                  />
                </TableHead>
                <TableHead className="text-gray-300">Benutzer</TableHead>
                <TableHead className="text-gray-300">Kontotyp</TableHead>
                <TableHead className="text-gray-300">Status</TableHead>
                <TableHead className="text-gray-300">Registriert am</TableHead>
                <TableHead className="text-gray-300">Letzter Login</TableHead>
                <TableHead className="text-right text-gray-300">Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="border-gray-700 hover:bg-gray-750">
                  <TableCell>
                    <Checkbox
                      checked={selectedUsers.includes(user.id)}
                      onCheckedChange={() => toggleUserSelection(user.id)}
                      className="border-gray-600"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className="bg-gray-700 text-white">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-white">{user.name}</div>
                        <div className="text-sm text-gray-400">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        user.type === "Händler"
                          ? "border-blue-500 text-blue-500 bg-blue-500/10"
                          : "border-gray-500 text-gray-300 bg-gray-500/10"
                      }
                    >
                      {user.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        user.status === "Verifiziert"
                          ? "border-green-500 text-green-500 bg-green-500/10"
                          : user.status === "Aktiv"
                            ? "border-green-500 text-green-500 bg-green-500/10"
                            : user.status === "Ausstehend"
                              ? "border-yellow-500 text-yellow-500 bg-yellow-500/10"
                              : "border-red-500 text-red-500 bg-red-500/10"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-300">{user.registered}</TableCell>
                  <TableCell className="text-gray-300">{user.lastLogin}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700">
                        <DropdownMenuItem className="text-gray-300 focus:bg-gray-800 focus:text-white">
                          <Eye className="mr-2 h-4 w-4" />
                          Profil ansehen
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-gray-300 focus:bg-gray-800 focus:text-white">
                          <Edit className="mr-2 h-4 w-4" />
                          Benutzer bearbeiten
                        </DropdownMenuItem>
                        {user.status === "Ausstehend" && (
                          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800 focus:text-white">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Händler verifizieren
                          </DropdownMenuItem>
                        )}
                        {user.status !== "Gesperrt" ? (
                          <DropdownMenuItem className="text-red-600 focus:bg-gray-800 focus:text-red-500">
                            <Ban className="mr-2 h-4 w-4" />
                            Benutzer sperren
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800 focus:text-white">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Sperre aufheben
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator className="bg-gray-700" />
                        <DropdownMenuItem className="text-red-600 focus:bg-gray-800 focus:text-red-500">
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
