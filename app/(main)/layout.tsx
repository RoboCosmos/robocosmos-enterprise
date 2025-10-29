import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SourceAIButton } from "@/components/source-ai-button"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <SourceAIButton />
    </>
  )
}
