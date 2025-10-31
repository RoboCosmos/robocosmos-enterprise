"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

interface MessageHeaderProps {
  title: string
  subtitle: string
  composePath?: string
  onNewMessage?: () => void
}

export function MessageHeader({ title, subtitle, composePath, onNewMessage }: MessageHeaderProps) {
  const router = useRouter()

  const handleNewMessage = () => {
    if (composePath) {
      router.push(composePath)
    } else if (onNewMessage) {
      onNewMessage()
    }
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">{subtitle}</p>
      </div>
      <Button className="bg-primary hover:bg-primary/90" onClick={handleNewMessage}>
        <FileText className="h-4 w-4 mr-2" />
        Neue Nachricht verfassen
      </Button>
    </div>
  )
}
