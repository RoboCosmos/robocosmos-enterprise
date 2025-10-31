"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts"

const revenueData = [
  { month: "Jan", gmv: 45000, revenue: 4500 },
  { month: "Feb", gmv: 52000, revenue: 5200 },
  { month: "Mar", gmv: 48000, revenue: 4800 },
  { month: "Apr", gmv: 61000, revenue: 6100 },
  { month: "May", gmv: 55000, revenue: 5500 },
  { month: "Jun", gmv: 67000, revenue: 6700 },
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

export function AdminRevenueChart() {
  return (
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
  )
}
