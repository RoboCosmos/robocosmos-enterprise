import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CosmosAIButton } from "@/components/cosmos-ai-button"
import { ThemeToggle } from "@/components/theme-toggle"

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
      <CosmosAIButton />
      <ThemeToggle position="left" />
    </>
  )
}
