"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { AdminDataTable } from "@/components/admin/admin-data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { UserPlus, Edit, Trash2 } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  email: string
  role: "Super-Admin" | "Support-Admin" | "Finanz-Admin" | "Content-Manager"
  status: "Aktiv" | "Einladung ausstehend"
  joinedAt: string
}

// Placeholder data
const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Schmidt",
    email: "sarah.schmidt@robocosmos.de",
    role: "Super-Admin",
    status: "Aktiv",
    joinedAt: "2023-01-15",
  },
  {
    id: "2",
    name: "Michael Weber",
    email: "michael.weber@robocosmos.de",
    role: "Support-Admin",
    status: "Aktiv",
    joinedAt: "2023-03-22",
  },
  {
    id: "3",
    name: "Anna Müller",
    email: "anna.mueller@robocosmos.de",
    role: "Finanz-Admin",
    status: "Einladung ausstehend",
    joinedAt: "2024-01-10",
  },
]

export default function AdminTeamMembersPage() {
  const router = useRouter()
  const [members] = useState<TeamMember[]>(teamMembers)

  const handleInvite = () => {
    router.push("/admin/team-members/invite")
  }

  const handleEditPermissions = (id: string) => {
    console.log("[v0] Edit permissions for member:", id)
    // TODO: Implement edit permissions logic
  }

  const handleRemove = (id: string) => {
    console.log("[v0] Remove member:", id)
    // TODO: Implement remove member logic
  }

  const getRoleBadgeVariant = (role: TeamMember["role"]) => {
    switch (role) {
      case "Super-Admin":
        return "destructive"
      case "Support-Admin":
        return "default"
      case "Finanz-Admin":
        return "secondary"
      case "Content-Manager":
        return "outline"
      default:
        return "default"
    }
  }

  const getStatusBadgeVariant = (status: TeamMember["status"]) => {
    return status === "Aktiv" ? "default" : "secondary"
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
      render: (row: TeamMember) => <Badge variant={getRoleBadgeVariant(row.role)}>{row.role}</Badge>,
    },
    {
      header: "Status",
      accessor: "status" as keyof TeamMember,
      render: (row: TeamMember) => <Badge variant={getStatusBadgeVariant(row.status)}>{row.status}</Badge>,
    },
    {
      header: "Beigetreten am",
      accessor: "joinedAt" as keyof TeamMember,
      render: (row: TeamMember) => (
        <span className="text-sm text-muted-foreground">
          {new Date(row.joinedAt).toLocaleDateString("de-DE", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      ),
    },
    {
      header: "Aktionen",
      accessor: "id" as keyof TeamMember,
      render: (row: TeamMember) => (
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => handleEditPermissions(row.id)}>
            <Edit className="mr-2 h-4 w-4" />
            Berechtigungen ändern
          </Button>
          <Button variant="ghost" size="sm" onClick={() => handleRemove(row.id)}>
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <AdminPageHeader
        title="Admin-Team-Verwaltung"
        subtitle="Verwalten Sie interne RoboCosmos-Mitarbeiter und deren Zugriffsberechtigungen für das Admin-Dashboard."
        actionButton={{
          label: "Neuen Admin einladen",
          onClick: handleInvite,
          icon: UserPlus,
        }}
      />

      <AdminDataTable columns={columns} data={members} />
    </div>
  )
}
