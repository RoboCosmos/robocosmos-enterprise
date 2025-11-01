"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Edit, Trash2 } from "lucide-react"
import { AdminDataTable } from "@/components/admin/admin-data-table"

interface TeamMember {
  id: string
  name: string
  email: string
  role: string
  status: string
  joinedAt: string
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
        Admin: "bg-red-500/10 text-red-500 border-red-500/20",
        Einkäufer: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        Genehmiger: "bg-purple-500/10 text-purple-500 border-purple-500/20",
        Scout: "bg-green-500/10 text-green-500 border-green-500/20",
      }
      return (
        <Badge variant="outline" className={roleColors[row.role] || "bg-muted"}>
          {row.role}
        </Badge>
      )
    },
  },
  {
    header: "Status",
    accessor: "status" as keyof TeamMember,
    render: (row: TeamMember) => {
      const statusColors: Record<string, string> = {
        Aktiv: "bg-green-500/10 text-green-500 border-green-500/20",
        "Einladung ausstehend": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      }
      return (
        <Badge variant="outline" className={statusColors[row.status] || "bg-muted"}>
          {row.status}
        </Badge>
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
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="h-8 bg-transparent">
          <Edit className="mr-1 h-3 w-3" />
          Rolle ändern
        </Button>
        <Button variant="outline" size="sm" className="h-8 text-destructive hover:text-destructive bg-transparent">
          <Trash2 className="mr-1 h-3 w-3" />
          Entfernen
        </Button>
      </div>
    ),
  },
]

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Anna Schmidt",
    email: "anna.schmidt@firma.de",
    role: "Admin",
    status: "Aktiv",
    joinedAt: "15.01.2024",
  },
  {
    id: "2",
    name: "Thomas Müller",
    email: "thomas.mueller@firma.de",
    role: "Einkäufer",
    status: "Aktiv",
    joinedAt: "20.01.2024",
  },
  {
    id: "3",
    name: "Sarah Weber",
    email: "sarah.weber@firma.de",
    role: "Genehmiger",
    status: "Aktiv",
    joinedAt: "25.01.2024",
  },
  {
    id: "4",
    name: "Michael Fischer",
    email: "michael.fischer@firma.de",
    role: "Scout",
    status: "Einladung ausstehend",
    joinedAt: "-",
  },
]

export default function CustomerTeamMembersPage() {
  const router = useRouter()
  const [members] = useState<TeamMember[]>(teamMembers)

  const handleInviteMember = () => {
    router.push("/customer/team-members/new")
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Team-Verwaltung</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Verwalten Sie die Mitarbeiter Ihres Unternehmens und deren Rollen auf der RoboCosmos-Plattform.
          </p>
        </div>
        <Button onClick={handleInviteMember} className="shrink-0">
          <UserPlus className="mr-2 h-4 w-4" />
          Neues Mitglied einladen
        </Button>
      </div>

      {/* Data Table */}
      <AdminDataTable columns={columns} data={members} />
    </div>
  )
}
