"use client"

import type React from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const mainClassName = `flex-1 bg-background p-4 md:p-8 transition-all duration-300 ${isCollapsed ? "ml-16" : "ml-64"}`

  return (
    <div className="flex min-h-screen">
      <AdminSidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
      <main className={mainClassName}>{children}</main>
      <ThemeToggle position="right" />
    </div>
  )
}
