import Image from "next/image"

export function AboutHeroSection() {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.png"
          alt="Industrial robots in modern warehouse"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-4 md:mb-6 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Wir gestalten die Zukunft der Industrieautomation.
        </h1>
        <p className="mx-auto max-w-3xl text-base md:text-xl text-muted-foreground px-4">
          Wir sind RoboCosmos Enterprise – Ihr zentraler B2B-Marktplatz für die effiziente Beschaffung und den Einsatz
          humanoider und industrieller Roboter in Deutschland und Europa.
        </p>
      </div>
    </section>
  )
}
