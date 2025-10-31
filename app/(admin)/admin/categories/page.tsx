"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { AdminDataTable } from "@/components/admin/admin-data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Power } from "lucide-react"

interface Category {
  id: string
  name: string
  parent: string | null
  listingCount: number
  status: "Aktiv" | "Inaktiv"
}

const mockCategories: Category[] = [
  {
    id: "1",
    name: "Logistik",
    parent: null,
    listingCount: 45,
    status: "Aktiv",
  },
  {
    id: "2",
    name: "Lagerautomatisierung",
    parent: "Logistik",
    listingCount: 23,
    status: "Aktiv",
  },
  {
    id: "3",
    name: "Gesundheitswesen",
    parent: null,
    listingCount: 32,
    status: "Aktiv",
  },
  {
    id: "4",
    name: "Inspektion & Wartung",
    parent: null,
    listingCount: 18,
    status: "Inaktiv",
  },
]

export default function CategoriesPage() {
  const router = useRouter()
  const [categories] = useState<Category[]>(mockCategories)

  const handleNewCategory = () => {
    router.push("/admin/categories/new")
  }

  const handleEdit = (categoryId: string) => {
    router.push(`/admin/categories/${categoryId}/edit`)
  }

  const handleToggleStatus = (categoryId: string) => {
    console.log("[v0] Toggle status for category:", categoryId)
    // TODO: Implement status toggle logic
  }

  const columns = [
    {
      header: "Kategorie-Name",
      accessor: "name" as keyof Category,
    },
    {
      header: "Übergeordnete Kategorie",
      accessor: "parent" as keyof Category,
    },
    {
      header: "Anzahl Inserate",
      accessor: "listingCount" as keyof Category,
    },
    {
      header: "Status",
      accessor: "status" as keyof Category,
    },
    {
      header: "Aktionen",
      accessor: "id" as keyof Category,
    },
  ]

  const renderCell = (category: Category, column: string) => {
    switch (column) {
      case "name":
        return <div className="font-medium text-foreground">{category.name}</div>
      case "parent":
        return <div className="text-muted-foreground">{category.parent || "-"}</div>
      case "listingCount":
        return <div className="text-foreground">{category.listingCount}</div>
      case "status":
        return <Badge variant={category.status === "Aktiv" ? "default" : "secondary"}>{category.status}</Badge>
      case "id":
        return (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => handleEdit(category.id)} className="h-8 gap-2">
              <Edit className="h-3.5 w-3.5" />
              Bearbeiten
            </Button>
            <Button variant="ghost" size="sm" onClick={() => handleToggleStatus(category.id)} className="h-8 gap-2">
              <Power className="h-3.5 w-3.5" />
              {category.status === "Aktiv" ? "Deaktivieren" : "Aktivieren"}
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Kategorie-Management"
        subtitle="Verwalten Sie die Haupt- und Unterkategorien für alle Roboter-Inserate auf der Plattform."
        actionButton={{
          label: "Neue Kategorie erstellen",
          onClick: handleNewCategory,
        }}
      />

      <AdminDataTable columns={columns} data={categories} renderCell={renderCell} />
    </div>
  )
}
