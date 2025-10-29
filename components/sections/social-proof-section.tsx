"use client"

import { useEffect, useRef } from "react"

export function SocialProofSection() {
  const companies = ["Siemens", "BMW Group", "Deutsche Post DHL", "Bosch", "Volkswagen", "BASF", "Mercedes-Benz", "SAP"]

  const allCompanies = [...companies, ...companies]
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="border-y border-border bg-card/50 py-16 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Vertraut von führenden Unternehmen aus Logistik & Fertigung
        </h2>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-8 overflow-hidden" style={{ scrollBehavior: "auto" }}>
            {allCompanies.map((company, index) => (
              <div
                key={index}
                className="flex min-w-[280px] items-center justify-center rounded-lg border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-md border-primary"
              >
                <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
