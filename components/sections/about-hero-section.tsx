"use client"
import { useState } from "react"

export function AboutHeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roboter_hebt_Karton_mit_menschlichen_Bewegungen-BLlasdsma4DNRGZJHJvMRDiGwVGfnm.mp4", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roboter_schwei%C3%9Ft_mit_menschlichen_Bewegungen-LWNFjhH9Vtzm7DmZcfrdnKCyC3lomP.mp4"]

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-4 md:mb-6 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Wir gestalten die Zukunft der gewerblichen Automation.
        </h1>
        <p className="mx-auto max-w-3xl text-base md:text-xl text-muted-foreground px-4">
          Wir sind RoboCosmos Enterprise – Ihr zentraler Marktplatz für die effiziente Beschaffung und den Einsatz
          humanoider Roboter in Deutschland.
        </p>
      </div>
    </section>
  )
}
