"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Home,
  Users,
  Database,
  CalendarCheck,
  DollarSign,
  ShieldAlert,
  Settings,
  Server,
  LogOut,
  Menu,
  X,
  Tag,
  SlidersHorizontal,
  ShieldCheck,
  CheckSquare,
  LifeBuoy,
  Landmark,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const navigationGroups = [
  {
    title: "OPERATIVES",
    items: [
      { name: "Dashboard", href: "/admin/dashboard", icon: Home },
      { name: "Händler-Verifizierung", href: "/admin/verification/merchants", icon: ShieldCheck },
      { name: "Inserats-Verifizierung", href: "/admin/verification/listings", icon: CheckSquare },
      { name: "Buchungsverwaltung", href: "/admin/bookings", icon: CalendarCheck },
      { name: "Streitschlichtung", href: "/admin/disputes", icon: ShieldAlert },
    ],
  },
  {
    title: "STAMMDATEN",
    items: [
      { name: "Benutzerverwaltung", href: "/admin/users", icon: Users },
      { name: "Inseratsverwaltung", href: "/admin/listings", icon: Database },
      { name: "Kategorie-Management", href: "/admin/categories", icon: Tag },
      { name: "Attribut-Management", href: "/admin/attributes", icon: SlidersHorizontal },
    ],
  },
  {
    title: "FINANZEN & SUPPORT",
    items: [
      { name: "Transaktionen", href: "/admin/transactions", icon: DollarSign },
      { name: "Auszahlungs-Management", href: "/admin/payouts", icon: Landmark },
      { name: "Support-Tickets", href: "/admin/support", icon: LifeBuoy },
    ],
  },
  {
    title: "PLATTFORM",
    items: [
      { name: "Plattform-Einstellungen", href: "/admin/settings", icon: Settings },
      { name: "Team-Verwaltung", href: "/admin/team-members", icon: Users },
      { name: "System-Status", href: "/admin/status", icon: Server },
    ],
  },
]

interface AdminSidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

export function AdminSidebar({ isCollapsed, onToggle }: AdminSidebarProps) {
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
              <span className="text-xs text-primary">Enterprise Admin</span>
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
                          ? "bg-primary text-primary-foreground"
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
            title={isCollapsed ? "Admin-Bereich verlassen" : undefined}
          >
            <Link href="/">
              <LogOut className="h-4 w-4 flex-shrink-0" />
              {!isCollapsed && "Admin-Bereich verlassen"}
            </Link>
          </Button>
        </div>
      </nav>
    </aside>
  )
}
