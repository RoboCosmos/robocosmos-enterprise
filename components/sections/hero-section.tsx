"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roboter_hebt_Karton_mit_menschlichen_Bewegungen-BLlasdsma4DNRGZJHJvMRDiGwVGfnm.mp4", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roboter_schwei%C3%9Ft_mit_menschlichen_Bewegungen-LWNFjhH9Vtzm7DmZcfrdnKCyC3lomP.mp4"]

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Video with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          key={currentVideoIndex}
          autoPlay
          loop
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>
        {/* Semi-transparent overlay for text contrast */}
        <div className="absolute inset-0 bg-background/70" />
        {/* Primary accent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 lg:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 lg:mb-8 flex items-center justify-center gap-2 lg:gap-3 animate-fade-in-up">
            <Image
              src="/images/robocosmos-enterprise-logo.png"
              alt="RoboCosmos Enterprise"
              width={64}
              height={64}
              className="h-12 w-12 lg:h-16 lg:w-16"
            />
            <h2 className="text-xl lg:text-3xl font-bold text-foreground">RoboCosmos Enterprise</h2>
          </div>

          <h1 className="mb-4 lg:mb-6 text-balance text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground animate-fade-in-up animation-delay-200">
            Mieten. Kaufen.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent">
              Automatisieren.
            </span>
          </h1>
          <p className="mb-8 lg:mb-10 text-pretty text-base lg:text-lg xl:text-xl text-muted-foreground animate-fade-in-up animation-delay-300">
            Deutschlands führende B2B-Plattform für Kauf und RaaS (Miete) von Gewerberobotern. Verifiziert, transparent
            und effizient.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 lg:gap-4 sm:flex-row animate-fade-in-up animation-delay-400">
            <Link href="/robots" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 text-sm lg:text-base"
              >
                B2B-Katalog durchsuchen
              </Button>
            </Link>
            <Link href="/merchant-directory" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-border text-foreground hover:bg-accent bg-accent/50 backdrop-blur-sm text-sm lg:text-base"
              >
                Händler entdecken
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
