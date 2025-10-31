import { AdminStatCard } from "./admin-stat-card"
import type { LucideIcon } from "lucide-react"

interface StatItem {
  title: string
  value: string | number
  description?: string
  icon: LucideIcon
  iconClassName?: string
}

interface AdminStatsGridProps {
  stats: StatItem[]
  columns?: 2 | 3 | 4
}

export function AdminStatsGrid({ stats, columns = 4 }: AdminStatsGridProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid gap-4 md:gap-6 ${gridCols[columns]}`}>
      {stats.map((stat, index) => (
        <AdminStatCard key={index} {...stat} />
      ))}
    </div>
  )
}
