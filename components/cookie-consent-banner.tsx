"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Cookie, Settings, ExternalLink } from "lucide-react"
import Link from "next/link"

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs))
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    setShowBanner(false)
    setShowDetails(false)

    // Here you would typically initialize analytics/marketing scripts based on preferences
    if (prefs.analytics) {
      console.log("[v0] Analytics cookies accepted")
      // Initialize analytics (e.g., Google Analytics)
    }
    if (prefs.marketing) {
      console.log("[v0] Marketing cookies accepted")
      // Initialize marketing tools
    }
  }

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    }
    savePreferences(allAccepted)
  }

  const acceptSelected = () => {
    savePreferences(preferences)
  }

  const openDetails = () => {
    setShowDetails(true)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Compact Banner */}
      <Card className="fixed bottom-4 right-4 z-50 max-w-md border-zinc-800 bg-card p-4 shadow-2xl backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <Cookie className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="font-semibold text-white">Datenschutzeinstellungen</h3>
              <p className="mt-1 text-sm text-gray-400">
                Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Dienste zu optimieren.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button onClick={acceptAll} className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                Alle akzeptieren
              </Button>
              <Button
                onClick={openDetails}
                variant="outline"
                className="flex-1 border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
              >
                <Settings className="mr-2 h-4 w-4" />
                Auswahl treffen
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Detailed Modal */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl border-zinc-800 bg-card text-white">
          <DialogHeader>
            <DialogTitle className="text-xl">Cookie-Einstellungen</DialogTitle>
            <DialogDescription className="text-gray-400">
              Verwalten Sie Ihre Cookie-Präferenzen für RoboCosmos Enterprise. Sie können Ihre Einstellungen jederzeit
              ändern.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Essential Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="essential" className="text-base font-semibold text-white">
                    Technisch notwendig
                  </Label>
                  <p className="mt-1 text-sm text-gray-400">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert
                    werden.
                  </p>
                </div>
                <Switch
                  id="essential"
                  checked={preferences.essential}
                  disabled
                  className="data-[state=checked]:bg-blue-600"
                />
              </div>
              <Separator className="bg-zinc-800" />
            </div>

            {/* Analytics Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="analytics" className="text-base font-semibold text-white">
                    Analyse & Statistik
                  </Label>
                  <p className="mt-1 text-sm text-gray-400">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem
                    Informationen anonym gesammelt werden.
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
                  className="data-[state=checked]:bg-blue-600"
                />
              </div>
              <Separator className="bg-zinc-800" />
            </div>

            {/* Marketing Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="marketing" className="text-base font-semibold text-white">
                    Marketing & Personalisierung
                  </Label>
                  <p className="mt-1 text-sm text-gray-400">
                    Diese Cookies werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte anzuzeigen.
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
                  className="data-[state=checked]:bg-blue-600"
                />
              </div>
            </div>

            {/* Privacy Policy Link */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              <Link href="/privacy" className="flex items-center text-sm text-blue-500 hover:text-blue-400">
                <ExternalLink className="mr-2 h-4 w-4" />
                Zur vollständigen Datenschutzerklärung
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button onClick={acceptAll} className="bg-blue-600 text-white hover:bg-blue-700">
              Alle akzeptieren
            </Button>
            <Button
              onClick={acceptSelected}
              variant="outline"
              className="border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
            >
              Auswahl speichern
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
