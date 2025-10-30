"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="h-12 w-12 rounded-full bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label={theme === "dark" ? "Zu hellem Modus wechseln" : "Zu dunklem Modus wechseln"}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-foreground transition-transform duration-500 rotate-0" />
        ) : (
          <Moon className="h-5 w-5 text-foreground transition-transform duration-500 rotate-0" />
        )}
      </Button>
    </div>
  )
}
