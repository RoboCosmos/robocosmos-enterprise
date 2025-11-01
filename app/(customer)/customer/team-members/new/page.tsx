"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InviteTeamMemberPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCancel = () => {
    router.push("/customer/team-members")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Sending invitation:", { email, role, message })

    // Navigate back to team members page
    router.push("/customer/team-members")
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Neues Team-Mitglied einladen</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Laden Sie einen Mitarbeiter Ihres Unternehmens ein und weisen Sie ihm eine Rolle zu.
        </p>
      </div>

      {/* Form Card */}
      <Card>
        <CardHeader>
          <CardTitle>Einladungsdetails</CardTitle>
          <CardDescription>Geben Sie die E-Mail-Adresse und Rolle des neuen Team-Mitglieds ein.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail-Adresse</Label>
              <Input
                id="email"
                type="email"
                placeholder="mitarbeiter@firma.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className="text-sm text-muted-foreground">Die E-Mail des neuen Mitglieds</p>
            </div>

            {/* Role Select */}
            <div className="space-y-2">
              <Label htmlFor="role">Rolle auswählen</Label>
              <Select value={role} onValueChange={setRole} required>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Wählen Sie eine Rolle aus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin (Verwaltet das Konto)</SelectItem>
                  <SelectItem value="buyer">Einkäufer (Darf Angebote anfragen & buchen)</SelectItem>
                  <SelectItem value="approver">Genehmiger (Gibt Budgets frei)</SelectItem>
                  <SelectItem value="scout">Scout (Darf nur ansehen & Merkzettel nutzen)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <Label htmlFor="message">Persönliche Nachricht (optional)</Label>
              <Textarea
                id="message"
                placeholder="Fügen Sie eine persönliche Nachricht zur Einladung hinzu..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
              />
            </div>

            {/* Form Footer */}
            <div className="flex items-center justify-between pt-4 border-t">
              <Button type="button" variant="outline" onClick={handleCancel}>
                Abbrechen
              </Button>
              <Button type="submit" disabled={isSubmitting || !email || !role}>
                {isSubmitting ? "Wird gesendet..." : "Einladung senden"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
