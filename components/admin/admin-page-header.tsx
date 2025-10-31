"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface AdminPageHeaderProps {
  title: string
  subtitle?: string
  actionButton?: {
    label: string
    href?: string
    onClick?: () => void
    icon?: LucideIcon
  }
}

export function AdminPageHeader({ title, subtitle, actionButton }: AdminPageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h1>
        {subtitle && <p className="text-sm md:text-base text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {actionButton && (
        <>
          {actionButton.href ? (
            <Link href={actionButton.href}>
              <Button>
                {actionButton.icon && <actionButton.icon className="mr-2 h-4 w-4" />}
                {actionButton.label}
              </Button>
            </Link>
          ) : (
            <Button onClick={actionButton.onClick}>
              {actionButton.icon && <actionButton.icon className="mr-2 h-4 w-4" />}
              {actionButton.label}
            </Button>
          )}
        </>
      )}
    </div>
  )
}
