"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Globe, LayoutDashboard, Menu, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState("de")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "h-16 bg-card/80 backdrop-blur-sm border-b border-border" : "h-24 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 lg:gap-3">
            <Image
              src="/images/robocosmos-enterprise-logo.png"
              alt="RoboCosmos Enterprise"
              width={56}
              height={56}
              className={`transition-all duration-300 ${isScrolled ? "h-8 w-8 lg:h-10 lg:w-10" : "h-10 w-10 lg:h-14 lg:w-14"}`}
            />
            <div className="flex flex-col">
              <span
                className={`font-bold text-foreground transition-all duration-300 ${isScrolled ? "text-base lg:text-xl" : "text-lg lg:text-xl"}`}
              >
                RoboCosmos
              </span>
              <span
                className={`font-bold text-primary transition-all duration-300 ${isScrolled ? "text-xs lg:text-sm" : "text-sm"}`}
              >
                Enterprise
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <Link
              href="/robots"
              className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
            >
              Roboter erwerben
            </Link>
            <Link
              href="/merchant-directory"
              className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
            >
              Händler-Verzeichnis
            </Link>
            <Link
              href="/become-merchant"
              className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
            >
              Händler werden
            </Link>
            <Link
              href="/about"
              className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
            >
              Über uns
            </Link>
            <Link
              href="/help"
              className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
            >
              Support
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-muted-foreground hover:text-foreground">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menü öffnen</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] p-6">
                <SheetHeader>
                  <SheetTitle className="text-left font-bold">Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-8">
                  <Link
                    href="/robots"
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-accent transition-colors font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Roboter erwerben
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/merchant-directory"
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-accent transition-colors font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Händler-Verzeichnis
                    <ChevronRight className="h-4 w-4" />
                  </Link>

                  <div className="border-t border-border pt-4 flex flex-col gap-2">
                    <Link
                      href="/become-merchant"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-accent transition-colors font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Händler werden
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/about"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-accent transition-colors font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Über uns
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/help"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-accent transition-colors font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Support
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="border-t border-border pt-4 flex flex-col gap-2">
                    <Link
                      href="/customer/dashboard"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-accent transition-colors font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                      <LayoutDashboard className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h3 className="text-sm font-bold text-muted-foreground mb-2">Sprache</h3>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          setLanguage("de")
                          setMobileMenuOpen(false)
                        }}
                        className={`py-2 px-3 rounded-md text-left font-semibold transition-colors ${
                          language === "de" ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                        }`}
                      >
                        Deutsch (DE)
                      </button>
                      <button
                        onClick={() => {
                          setLanguage("en")
                          setMobileMenuOpen(false)
                        }}
                        className={`py-2 px-3 rounded-md text-left font-semibold transition-colors ${
                          language === "en" ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                        }`}
                      >
                        English (EN)
                      </button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/customer/dashboard" className="hidden lg:block">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <LayoutDashboard className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden lg:flex text-muted-foreground hover:text-foreground"
                >
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Sprache wählen</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("de")} className="cursor-pointer font-semibold">
                  Deutsch (DE)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")} className="cursor-pointer font-semibold">
                  English (EN)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/login">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm lg:text-base px-3 lg:px-4">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
