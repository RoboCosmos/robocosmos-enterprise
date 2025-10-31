"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"

const userGrowthData = [
  { month: "Jan", newUsers: 234, newMerchants: 12 },
  { month: "Feb", newUsers: 312, newMerchants: 18 },
  { month: "Mar", newUsers: 289, newMerchants: 15 },
  { month: "Apr", newUsers: 401, newMerchants: 23 },
  { month: "May", newUsers: 378, newMerchants: 19 },
  { month: "Jun", newUsers: 445, newMerchants: 28 },
]

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

export function AdminUserGrowthChart() {
  return (
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
  )
}
