import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RoboCosmos Enterprise - B2B Robotik-Plattform",
  description: "Die führende B2B-Plattform zur Miete und Beschaffung von industriellen humanoiden Robotern",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
          <Analytics />
          <CookieConsentBanner />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
