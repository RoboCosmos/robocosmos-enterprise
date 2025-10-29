import { AboutHeroSection } from "@/components/sections/about-hero-section"
import { MissionSection } from "@/components/sections/mission-section"
import { TeamSection } from "@/components/sections/team-section"
import { ValuesSection } from "@/components/sections/values-section"
import { AboutCtaSection } from "@/components/sections/about-cta-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHeroSection />
      <MissionSection />
      <TeamSection />
      <ValuesSection />
      <AboutCtaSection />
    </div>
  )
}
