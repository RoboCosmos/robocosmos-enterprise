import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"

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
    <html lang="de" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
        <CookieConsentBanner />
      </body>
    </html>
  )
}
