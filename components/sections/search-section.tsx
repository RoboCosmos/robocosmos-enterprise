"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Sparkles } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/robots?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <section className="container mx-auto px-4 py-12 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-4xl">
        <Card className="border-border bg-card p-8 shadow-xl">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Finden Sie den perfekten Roboter</h2>
              <p className="text-muted-foreground">
                Beschreiben Sie Ihre Aufgabe und lassen Sie unsere KI die passenden Lösungen finden
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Source AI</span>
              </div>
              <Input
                type="text"
                placeholder="Beschreiben Sie Ihre Aufgabe (z.B. '15kg Kartons auf Regal heben')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="h-14 pl-32 pr-14 text-base bg-background focus:border-primary focus-visible:ring-primary border-primary"
              />
              <Button
                onClick={handleSearch}
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-primary hover:bg-primary/90"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>

            <div className="text-center">
              <Link href="/robots" className="text-sm hover:text-primary transition-colors text-primary">
                Oder nutzen Sie unsere detaillierten Filter →
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
