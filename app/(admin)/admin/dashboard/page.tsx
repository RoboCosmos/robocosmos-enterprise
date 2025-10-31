import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { AdminStatsGrid } from "@/components/admin/admin-stats-grid"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import { Users, ShieldCheck, Database, TrendingUp } from "lucide-react"
import Link from "next/link"

// Placeholder data for charts
const revenueData = [
  { month: "Jan", gmv: 45000, revenue: 4500 },
  { month: "Feb", gmv: 52000, revenue: 5200 },
  { month: "Mar", gmv: 48000, revenue: 4800 },
  { month: "Apr", gmv: 61000, revenue: 6100 },
  { month: "May", gmv: 55000, revenue: 5500 },
  { month: "Jun", gmv: 67000, revenue: 6700 },
]

const userGrowthData = [
  { month: "Jan", newUsers: 234, newMerchants: 12 },
  { month: "Feb", newUsers: 312, newMerchants: 18 },
  { month: "Mar", newUsers: 289, newMerchants: 15 },
  { month: "Apr", newUsers: 401, newMerchants: 23 },
  { month: "May", newUsers: 378, newMerchants: 19 },
  { month: "Jun", newUsers: 445, newMerchants: 28 },
]

const revenueChartConfig = {
  gmv: {
    label: "GMV (Gesamtumsatz)",
    color: "hsl(var(--chart-1))",
  },
  revenue: {
    label: "Plattform-Einnahmen",
    color: "hsl(var(--chart-2))",
  },
}

const userGrowthChartConfig = {
  newUsers: {
    label: "Neue Nutzer",
    color: "hsl(var(--chart-3))",
  },
  newMerchants: {
    label: "Neue verifizierte Händler",
    color: "hsl(var(--chart-4))",
  },
}

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
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Plattform-Umsatz vs. GMV (Letzte 6 Monate)</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={revenueChartConfig} className="h-[300px] w-full">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line type="monotone" dataKey="gmv" stroke="var(--color-gmv)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} dot={false} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* User Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Nutzer-Wachstum (Letzte 6 Monate)</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={userGrowthChartConfig} className="h-[300px] w-full">
              <BarChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="newUsers" fill="var(--color-newUsers)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="newMerchants" fill="var(--color-newMerchants)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
