import type { ReactNode } from "react"

interface AdminStatsGridProps {
  children: ReactNode
  columns?: 2 | 3 | 4
}

export function AdminStatsGrid({ children, columns = 4 }: AdminStatsGridProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }

  return <div className={`grid gap-4 md:gap-6 ${gridCols[columns]}`}>{children}</div>
}
