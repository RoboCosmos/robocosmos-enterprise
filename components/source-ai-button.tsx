"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot, Send, Sparkles } from "lucide-react"

export function SourceAIButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Sparkles className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Source AI
          </SheetTitle>
          <SheetDescription>Frage mich relevante Fragen.</SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 space-y-4 px-4">
          {/* AI Message */}
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 bg-muted rounded-lg p-3">
              <p className="text-sm">Hallo! Wie kann ich Ihnen heute helfen?</p>
            </div>
          </div>
        </div>

        <SheetFooter className="flex-row gap-2 sm:gap-2">
          <Input placeholder="Ask a question..." className="flex-1" />
          <Button variant="ghost" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
