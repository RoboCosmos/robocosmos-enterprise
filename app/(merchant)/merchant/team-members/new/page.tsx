"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { Send } from "lucide-react"

export default function InviteTeamMemberPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !role) {
      alert("Bitte füllen Sie alle Pflichtfelder aus.")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Sending invitation:", { email, role, message })

    // TODO: Implement actual invitation logic
    alert(`Einladung wurde an ${email} gesendet!`)

    setIsSubmitting(false)
    router.push("/merchant/team-members")
  }

  const handleCancel = () => {
    router.push("/merchant/team-members")
  }

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Neues Team-Mitglied einladen</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Laden Sie einen Mitarbeiter Ihres Händlerkontos ein und weisen Sie ihm eine Rolle zu.
        </p>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="pt-6 space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                E-Mail-Adresse <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="mitarbeiter@beispiel.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-border text-foreground"
              />
              <p className="text-sm text-muted-foreground">Die E-Mail des neuen Mitglieds</p>
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <Label htmlFor="role" className="text-foreground">
                Rolle auswählen <span className="text-red-500">*</span>
              </Label>
              <Select value={role} onValueChange={setRole} required>
                <SelectTrigger id="role" className="bg-background border-border text-foreground">
                  <SelectValue placeholder="Wählen Sie eine Rolle..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">
                    <div className="flex flex-col items-start">
                      <span className="font-medium">Admin</span>
                      <span className="text-xs text-muted-foreground">Verwaltet das Konto</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="vertrieb">
                    <div className="flex flex-col items-start">
                      <span className="font-medium">Vertrieb</span>
                      <span className="text-xs text-muted-foreground">Erstellt Angebote & verwaltet Buchungen</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="service">
                    <div className="flex flex-col items-start">
                      <span className="font-medium">Service</span>
                      <span className="text-xs text-muted-foreground">Pflegt Kalender & Inserate</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="buchhaltung">
                    <div className="flex flex-col items-start">
                      <span className="font-medium">Buchhaltung</span>
                      <span className="text-xs text-muted-foreground">Sieht nur Finanzen</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Personal Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Persönliche Nachricht (optional)
              </Label>
              <Textarea
                id="message"
                placeholder="Fügen Sie eine persönliche Nachricht zur Einladung hinzu..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="bg-background border-border text-foreground resize-none"
              />
            </div>
          </CardContent>
        </Card>

        {/* Form Footer Navigation */}
        <div className="flex items-center justify-between gap-4 mt-6 pt-6 border-t border-border">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            disabled={isSubmitting}
            className="border-border bg-transparent"
          >
            Abbrechen
          </Button>
          <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90">
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? "Wird gesendet..." : "Einladung senden"}
          </Button>
        </div>
      </form>
    </div>
  )
}
