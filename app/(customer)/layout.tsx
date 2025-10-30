"use client"

import type React from "react"
import { CustomerSidebar } from "@/components/customer-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen">
      <CustomerSidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
      <main
        className={`flex-1 bg-background p-4 md:p-8 transition-all duration-300 ${isCollapsed ? "ml-16" : "ml-64"}`}
      >
        {children}
      </main>
      <ThemeToggle position="right" />
    </div>
  )
}
