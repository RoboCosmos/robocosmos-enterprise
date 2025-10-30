"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

export function HelpHeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground">Hilfe & Support Center</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Finden Sie Antworten auf Ihre Fragen oder kontaktieren Sie unser Support-Team.
      </p>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Wie können wir Ihnen helfen? (z.B. 'Wie erstelle ich ein Inserat?')"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 text-lg bg-input border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>
    </div>
  )
}
