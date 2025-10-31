import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { AdminStatsGrid } from "@/components/admin/admin-stats-grid"
import { AdminRevenueChart } from "@/components/admin/admin-revenue-chart"
import { AdminUserGrowthChart } from "@/components/admin/admin-user-growth-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, ShieldCheck, Database, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      description: "+12% from last month",
      icon: Users,
    },
    {
      title: "Verified Merchants",
      value: "342",
      description: "+8 this week",
      icon: ShieldCheck,
    },
    {
      title: "Active Listings",
      value: "1,234",
      description: "+23 today",
      icon: Database,
    },
    {
      title: "Revenue (MTD)",
      value: "€45,231",
      description: "+20% from last month",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      <AdminPageHeader title="Admin Dashboard" subtitle="Plattform-Übersicht und Verwaltung" />

      <AdminStatsGrid stats={stats} />

      <Card>
        <CardHeader>
          <CardTitle>Handlungsbedarf</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground">5 Händler warten auf Verifizierung</p>
            <Link href="/admin/users?filter=pending-verification">
              <Button>Jetzt prüfen</Button>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground">12 Neue Inserate warten auf Freigabe</p>
            <Link href="/admin/listings?filter=pending-approval">
              <Button>Jetzt prüfen</Button>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground">3 Streitfälle erfordern Eingreifen</p>
            <Link href="/admin/disputes?tab=disputes">
              <Button variant="outline">Ansehen</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <AdminRevenueChart />
        <AdminUserGrowthChart />
      </div>
    </div>
  )
}
