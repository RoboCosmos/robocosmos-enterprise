"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function NewAdminInvitePage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [note, setNote] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCancel = () => {
    router.push("/admin/team-members")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !role) {
      alert("Bitte füllen Sie alle Pflichtfelder aus.")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Sending admin invitation:", { email, role, note })

    // TODO: Implement actual invitation logic with backend API

    setIsSubmitting(false)
    router.push("/admin/team-members")
  }

  return (
    <div className="flex flex-col gap-6">
      <AdminPageHeader
        title="Neuen Admin einladen"
        subtitle="Erstellen Sie ein Konto für einen internen RoboCosmos-Mitarbeiter und weisen Sie Berechtigungen zu."
      />

      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  E-Mail-Adresse <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@robocosmos.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p className="text-sm text-muted-foreground">Die E-Mail des neuen Mitarbeiters</p>
              </div>

              {/* Role Select */}
              <div className="space-y-2">
                <Label htmlFor="role">
                  Rolle auswählen <span className="text-destructive">*</span>
                </Label>
                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Wählen Sie eine Rolle aus" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="super-admin">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Super-Admin</span>
                        <span className="text-xs text-muted-foreground">Voller Zugriff</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="support-admin">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Support-Admin</span>
                        <span className="text-xs text-muted-foreground">Zugriff auf Tickets & Schlichtung</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="finanz-admin">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Finanz-Admin</span>
                        <span className="text-xs text-muted-foreground">Zugriff auf Transaktionen & Auszahlungen</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="content-manager">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Content-Manager</span>
                        <span className="text-xs text-muted-foreground">Zugriff auf Inserats-Freigaben</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Internal Note Textarea */}
              <div className="space-y-2">
                <Label htmlFor="note">Interne Notiz (optional)</Label>
                <Textarea
                  id="note"
                  placeholder="Fügen Sie eine interne Notiz hinzu..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={4}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Footer Navigation */}
        <div className="mt-6 flex items-center justify-end gap-4">
          <Button type="button" variant="outline" onClick={handleCancel} disabled={isSubmitting}>
            Abbrechen
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Wird gesendet..." : "Einladung senden"}
          </Button>
        </div>
      </form>
    </div>
  )
}
