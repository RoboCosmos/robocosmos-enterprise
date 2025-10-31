"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, type LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface FilterOption {
  label: string
  value: string
}

interface FilterConfig {
  placeholder: string
  options: FilterOption[]
  defaultValue?: string
  onChange?: (value: string) => void
}

interface AdminFilterBarProps {
  searchPlaceholder?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  filters?: FilterConfig[]
  actionButton?: {
    label: string
    onClick?: () => void
    icon?: LucideIcon
  }
  children?: ReactNode
}

export function AdminFilterBar({
  searchPlaceholder = "Suchen...",
  searchValue,
  onSearchChange,
  filters = [],
  actionButton,
  children,
}: AdminFilterBarProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 gap-4 flex-wrap">
            {/* Search Input */}
            {onSearchChange && (
              <div className="flex-1 min-w-[200px] relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={searchPlaceholder}
                  className="pl-10"
                  value={searchValue}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
            )}

            {/* Filter Dropdowns */}
            {filters.map((filter, index) => (
              <Select key={index} defaultValue={filter.defaultValue} onValueChange={filter.onChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={filter.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {filter.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ))}

            {/* Custom children */}
            {children}
          </div>

          {/* Action Button */}
          {actionButton && (
            <Button onClick={actionButton.onClick}>
              {actionButton.icon && <actionButton.icon className="mr-2 h-4 w-4" />}
              {actionButton.label}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
