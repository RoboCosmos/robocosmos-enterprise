"use client"

import { Bot, ShieldCheck, BarChart, Truck } from "lucide-react"
import { useEffect, useState } from "react"

const kpis = [
  {
    icon: Bot,
    value: 1500,
    suffix: "+",
    label: "Geprüfte Industrieroboter",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Nur verifizierte B2B-Händler",
  },
  {
    icon: BarChart,
    text: "TCO & ROI",
    label: "Transparente Metriken",
  },
  {
    icon: Truck,
    text: "RaaS",
    label: "Flexible Mietmodelle",
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count.toLocaleString("de-DE")}
      {suffix}
    </span>
  )
}

export function TrustBanner() {
  return (
    <section className="border-y border-border bg-card/50 py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, index) => (
            <div key={index} className="flex flex-col items-center text-center transition-transform hover:scale-105">
              <div className="mb-3 lg:mb-4 flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-lg bg-primary/10">
                <kpi.icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-foreground">
                {kpi.value !== undefined ? <AnimatedCounter value={kpi.value} suffix={kpi.suffix || ""} /> : kpi.text}
              </div>
              <div className="mt-1 lg:mt-2 text-xs lg:text-sm text-muted-foreground">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
