"use client"

import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { AdminDataTable } from "@/components/admin/admin-data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Power } from "lucide-react"
import { useRouter } from "next/navigation"

interface Attribute {
  id: string
  name: string
  dataType: string
  categories: string[]
  useAsFilter: boolean
}

const attributes: Attribute[] = [
  {
    id: "1",
    name: "Traglast",
    dataType: "Zahl (kg)",
    categories: ["Logistik", "Inspektion & Wartung"],
    useAsFilter: true,
  },
  {
    id: "2",
    name: "Reichweite",
    dataType: "Zahl (m)",
    categories: ["Logistik", "Inspektion & Wartung"],
    useAsFilter: true,
  },
  {
    id: "3",
    name: "Betriebssystem",
    dataType: "Dropdown",
    categories: ["Gesundheitswesen", "Inspektion & Wartung"],
    useAsFilter: true,
  },
  {
    id: "4",
    name: "Zertifizierung",
    dataType: "Text",
    categories: ["Gesundheitswesen"],
    useAsFilter: false,
  },
]

export default function AttributesPage() {
  const router = useRouter()

  const handleCreateAttribute = () => {
    router.push("/admin/attributes/new")
  }

  const handleEdit = (id: string) => {
    router.push(`/admin/attributes/${id}/edit`)
  }

  const handleDeactivate = (id: string) => {
    console.log("[v0] Deactivating attribute:", id)
    // TODO: Implement deactivation logic
  }

  const columns = [
    {
      header: "Attribut-Name",
      accessor: "name" as keyof Attribute,
    },
    {
      header: "Datentyp",
      accessor: "dataType" as keyof Attribute,
      render: (value: string) => (
        <Badge variant="secondary" className="font-mono text-xs">
          {value}
        </Badge>
      ),
    },
    {
      header: "Zugeordnete Kategorien",
      accessor: "categories" as keyof Attribute,
      render: (value: string[]) => <span className="text-sm text-muted-foreground">{value.join(", ")}</span>,
    },
    {
      header: "Als Filter verwenden?",
      accessor: "useAsFilter" as keyof Attribute,
      render: (value: boolean) => <Badge variant={value ? "default" : "outline"}>{value ? "Ja" : "Nein"}</Badge>,
    },
    {
      header: "Aktionen",
      accessor: "id" as keyof Attribute,
      render: (value: string) => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => handleEdit(value)} className="h-8 px-2">
            <Edit className="h-4 w-4 mr-1" />
            Bearbeiten
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleDeactivate(value)}
            className="h-8 px-2 text-destructive hover:text-destructive"
          >
            <Power className="h-4 w-4 mr-1" />
            Deaktivieren
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Attribut-Management"
        subtitle="Verwalten Sie alle technischen Attribute (z.B. Traglast, Reichweite), die als Filter und Datenfelder für Inserate dienen."
        actionButton={{
          label: "Neues Attribut erstellen",
          onClick: handleCreateAttribute,
        }}
      />

      <AdminDataTable data={attributes} columns={columns} />
    </div>
  )
}
