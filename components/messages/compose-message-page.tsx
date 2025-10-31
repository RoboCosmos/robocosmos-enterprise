"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, X } from "lucide-react"

interface ComposeMessagePageProps {
  userType: "merchant" | "customer"
}

export function ComposeMessagePage({ userType }: ComposeMessagePageProps) {
  const router = useRouter()
  const [recipient, setRecipient] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [attachments, setAttachments] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments([...attachments, ...Array.from(e.target.files)])
    }
  }

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index))
  }

  const handleCancel = () => {
    router.back()
  }

  const handleSend = () => {
    // TODO: Implement send message logic
    console.log("[v0] Sending message:", { recipient, subject, message, attachments })
    router.back()
  }

  // Sample recipients based on user type
  const recipients =
    userType === "merchant"
      ? [
          { id: "1", name: "Mittelstand GmbH" },
          { id: "2", name: "TechCorp AG" },
          { id: "3", name: "Industrie Solutions GmbH" },
          { id: "4", name: "AutoParts International" },
        ]
      : [
          { id: "1", name: "RoboTech Verleih GmbH" },
          { id: "2", name: "Automation Solutions AG" },
          { id: "3", name: "Robotik Handel Deutschland" },
          { id: "4", name: "Industrial Robotics GmbH" },
        ]

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Neue Nachricht verfassen</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Senden Sie eine formelle Nachricht an einen {userType === "merchant" ? "Kunden" : "Händler"} auf der
          RoboCosmos-Plattform.
        </p>
      </div>

      {/* Form */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Recipient Select */}
            <div className="space-y-2">
              <Label htmlFor="recipient">Empfänger auswählen</Label>
              <Select value={recipient} onValueChange={setRecipient}>
                <SelectTrigger id="recipient">
                  <SelectValue placeholder="Wählen Sie einen Empfänger aus..." />
                </SelectTrigger>
                <SelectContent>
                  {recipients.map((r) => (
                    <SelectItem key={r.id} value={r.id}>
                      {r.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Suchen Sie nach registrierten {userType === "merchant" ? "Kunden" : "Händlern"} auf der Plattform
              </p>
            </div>

            {/* Subject Input */}
            <div className="space-y-2">
              <Label htmlFor="subject">Betreff</Label>
              <Input
                id="subject"
                placeholder="Geben Sie einen Betreff ein..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* Message Body */}
            <div className="space-y-2">
              <Label htmlFor="message">Nachricht</Label>
              <Textarea
                id="message"
                placeholder="Verfassen Sie Ihre Nachricht..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[300px] resize-y"
              />
              <p className="text-xs text-muted-foreground">
                Schreiben Sie eine professionelle Nachricht für Ihre geschäftliche Kommunikation
              </p>
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label htmlFor="attachments">Anhänge hinzufügen (z.B. PDF, Spezifikationen)</Label>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("file-upload")?.click()}
                  className="w-full"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Dateien auswählen
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                />
              </div>

              {/* Attachment List */}
              {attachments.length > 0 && (
                <div className="space-y-2 mt-3">
                  {attachments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                      <span className="text-sm text-foreground truncate">{file.name}</span>
                      <Button type="button" variant="ghost" size="sm" onClick={() => removeAttachment(index)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Button variant="outline" onClick={handleCancel}>
          Abbrechen
        </Button>
        <Button
          onClick={handleSend}
          disabled={!recipient || !subject || !message}
          className="bg-primary hover:bg-primary/90"
        >
          Nachricht senden
        </Button>
      </div>
    </div>
  )
}
