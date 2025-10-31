"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface QuickAction {
  label: string
  href?: string
  onClick?: () => void
  icon?: LucideIcon
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

interface AdminQuickActionsProps {
  title?: string
  actions: QuickAction[]
}

export function AdminQuickActions({ title = "Quick Actions", actions }: AdminQuickActionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        {actions.map((action, index) => (
          <div key={index}>
            {action.href ? (
              <Link href={action.href}>
                <Button variant={action.variant || "outline"}>
                  {action.icon && <action.icon className="mr-2 h-4 w-4" />}
                  {action.label}
                </Button>
              </Link>
            ) : (
              <Button variant={action.variant || "outline"} onClick={action.onClick}>
                {action.icon && <action.icon className="mr-2 h-4 w-4" />}
                {action.label}
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
