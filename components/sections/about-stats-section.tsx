"use client"

import { Building2, Package, Users, Award } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Verifizierte Händler",
  },
  {
    icon: Package,
    value: 10000,
    suffix: "+",
    label: "Verfügbare Roboter",
  },
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Aktive Kunden",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Kundenzufriedenheit",
  },
]

export function AboutStatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.value / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timer)
        }
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = Math.floor(current)
          return newCounts
        })
      }, interval)
    })
  }, [])

  return (
    <section className="py-12 md:py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  {counts[index].toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
