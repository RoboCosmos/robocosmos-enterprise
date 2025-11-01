"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  CalendarCheck,
  Inbox,
  Heart,
  Building,
  Settings,
  LogOut,
  Menu,
  X,
  FileText,
  Users,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const navigationGroups = [
  {
    title: "ÜBERSICHT",
    items: [{ name: "Dashboard", href: "/customer/dashboard", icon: LayoutDashboard }],
  },
  {
    title: "BESCHAFFUNG",
    items: [
      { name: "Meine Buchungen", href: "/customer/bookings", icon: CalendarCheck },
      { name: "Angebote & Anfragen", href: "/customer/requests", icon: FileText },
      { name: "Merkliste", href: "/customer/wishlist", icon: Heart },
    ],
  },
  {
    title: "VERWALTUNG",
    items: [
      { name: "Firmenprofil", href: "/customer/profile", icon: Building },
      { name: "Team-Mitglieder", href: "/customer/team-members", icon: Users },
      { name: "Posteingang", href: "/customer/messages", icon: Inbox },
      { name: "Einstellungen", href: "/customer/settings", icon: Settings },
    ],
  },
]

interface CustomerSidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

export function CustomerSidebar({ isCollapsed, onToggle }: CustomerSidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r border-border bg-card transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        {!isCollapsed && (
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/robocosmos-enterprise-logo.png"
              alt="RoboCosmos Enterprise"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">RoboCosmos</span>
              <span className="text-xs text-primary">Enterprise</span>
            </div>
          </Link>
        )}
        <Button variant="ghost" size="icon" onClick={onToggle} className="h-8 w-8">
          {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex h-[calc(100vh-4rem)] flex-col justify-between p-4">
        <div className="space-y-6 overflow-y-auto sidebar-scrollbar pr-2">
          {navigationGroups.map((group) => (
            <div key={group.title}>
              {!isCollapsed && (
                <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.title}
                </h3>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-[#0052FF] text-white" // Changed active state to blue background with white text
                          : "text-muted-foreground hover:bg-accent hover:text-foreground",
                        isCollapsed && "justify-center",
                      )}
                      title={isCollapsed ? item.name : undefined}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      {!isCollapsed && item.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <Separator />

          <Button
            variant="ghost"
            className={cn("w-full gap-3", isCollapsed ? "justify-center px-0" : "justify-start")}
            asChild
            title={isCollapsed ? "Dashboard verlassen" : undefined}
          >
            <Link href="/">
              <LogOut className="h-4 w-4 flex-shrink-0" />
              {!isCollapsed && "Dashboard verlassen"}
            </Link>
          </Button>
        </div>
      </nav>
    </aside>
  )
}
