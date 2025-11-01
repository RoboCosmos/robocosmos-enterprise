"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AdminDataTable } from "@/components/admin/admin-data-table"
import { UserPlus, Edit, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

interface TeamMember {
  id: string
  name: string
  email: string
  role: string
  status: string
  joinedAt: string
}

export default function TeamMembersPage() {
  const router = useRouter()
  const [teamMembers] = useState<TeamMember[]>([
    {
      id: "1",
      name: "Max Mustermann",
      email: "max.mustermann@robotrade.de",
      role: "Admin",
      status: "Aktiv",
      joinedAt: "15.01.2024",
    },
    {
      id: "2",
      name: "Anna Schmidt",
      email: "anna.schmidt@robotrade.de",
      role: "Vertrieb",
      status: "Aktiv",
      joinedAt: "22.02.2024",
    },
    {
      id: "3",
      name: "Thomas Weber",
      email: "thomas.weber@robotrade.de",
      role: "Service",
      status: "Aktiv",
      joinedAt: "10.03.2024",
    },
    {
      id: "4",
      name: "Lisa Müller",
      email: "lisa.mueller@robotrade.de",
      role: "Buchhaltung",
      status: "Einladung ausstehend",
      joinedAt: "28.03.2024",
    },
  ])

  const handleInviteMember = () => {
    router.push("/merchant/team-members/new")
  }

  const handleChangeRole = (id: string) => {
    console.log("[v0] Change role for member:", id)
    // TODO: Implement role change logic
  }

  const handleRemoveMember = (id: string) => {
    console.log("[v0] Remove member:", id)
    // TODO: Implement remove member logic
  }

  const columns = [
    {
      header: "Name",
      accessor: "name" as keyof TeamMember,
      render: (row: TeamMember) => (
        <div className="flex flex-col">
          <span className="font-medium text-foreground">{row.name}</span>
          <span className="text-sm text-muted-foreground">{row.email}</span>
        </div>
      ),
    },
    {
      header: "Rolle",
      accessor: "role" as keyof TeamMember,
      render: (row: TeamMember) => {
        const roleColors: Record<string, string> = {
          Admin: "bg-primary text-primary-foreground",
          Vertrieb: "bg-blue-500 text-white",
          Service: "bg-green-500 text-white",
          Buchhaltung: "bg-purple-500 text-white",
        }
        return <Badge className={roleColors[row.role] || "bg-secondary text-secondary-foreground"}>{row.role}</Badge>
      },
    },
    {
      header: "Status",
      accessor: "status" as keyof TeamMember,
      render: (row: TeamMember) => {
        const statusColors: Record<string, string> = {
          Aktiv: "bg-green-500 text-white",
          "Einladung ausstehend": "bg-yellow-500 text-white",
        }
        return (
          <Badge className={statusColors[row.status] || "bg-secondary text-secondary-foreground"}>{row.status}</Badge>
        )
      },
    },
    {
      header: "Beigetreten am",
      accessor: "joinedAt" as keyof TeamMember,
    },
    {
      header: "Aktionen",
      accessor: "id" as keyof TeamMember,
      render: (row: TeamMember) => (
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => handleChangeRole(row.id)} className="border-border">
            <Edit className="h-4 w-4 mr-1" />
            Rolle ändern
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => handleRemoveMember(row.id)}
            className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Entfernen
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Team-Verwaltung</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1">
            Verwalten Sie, welche Mitarbeiter Zugriff auf Ihr Händlerkonto haben und welche Rollen sie einnehmen.
          </p>
        </div>
        <Button onClick={handleInviteMember} className="bg-primary hover:bg-primary/90 shrink-0">
          <UserPlus className="h-4 w-4 mr-2" />
          Neues Mitglied einladen
        </Button>
      </div>

      {/* Team Members Table */}
      <AdminDataTable columns={columns} data={teamMembers} />
    </div>
  )
}
