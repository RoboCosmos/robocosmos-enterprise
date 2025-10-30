"use client"

import { useState } from "react"
import { ApiDocsHeroSection } from "@/components/sections/api-docs-hero-section"
import { ApiDocsAuthSection } from "@/components/sections/api-docs-auth-section"
import { ApiDocsSchemaSection } from "@/components/sections/api-docs-schema-section"
import { ApiDocsQuerySection } from "@/components/sections/api-docs-query-section"
import { ApiDocsMutationSection } from "@/components/sections/api-docs-mutation-section"
import { ApiDocsStatusSection } from "@/components/sections/api-docs-status-section"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const sections = [
  { id: "authentifizierung", label: "Authentifizierung" },
  { id: "datenmodelle", label: "Datenmodelle" },
  { id: "abfragen", label: "Abfragen (Queries)" },
  { id: "mutationen", label: "Mutationen" },
  { id: "statuscodes", label: "Statuscodes" },
]

export default function ApiDocsPage() {
  const [activeSection, setActiveSection] = useState("authentifizierung")

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <ApiDocsHeroSection />

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Left Sidebar - Table of Contents */}
          <aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] hidden lg:block">
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Inhaltsverzeichnis</h3>
              <ScrollArea className="h-[calc(100vh-12rem)]">
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        activeSection === section.id
                          ? "bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 hover:text-blue-300"
                          : "text-gray-400 hover:text-white hover:bg-gray-800",
                      )}
                      onClick={() => scrollToSection(section.id)}
                    >
                      {section.label}
                    </Button>
                  ))}
                </nav>
              </ScrollArea>
            </div>
          </aside>

          {/* Right Content Area */}
          <main className="space-y-16">
            <ApiDocsAuthSection />
            <ApiDocsSchemaSection />
            <ApiDocsQuerySection />
            <ApiDocsMutationSection />
            <ApiDocsStatusSection />
          </main>
        </div>
      </div>
    </div>
  )
}
