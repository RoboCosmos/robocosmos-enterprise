import { SlaHeroSection } from "@/components/sections/sla-hero-section"
import { PlatformAvailabilitySection } from "@/components/sections/platform-availability-section"
import { IncidentResponseSection } from "@/components/sections/incident-response-section"
import { QualityGuaranteeSection } from "@/components/sections/quality-guarantee-section"
import { SlaContactSection } from "@/components/sections/sla-contact-section"

export default function SLAPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SlaHeroSection />
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl py-12 space-y-12">
        <PlatformAvailabilitySection />
        <IncidentResponseSection />
        <QualityGuaranteeSection />
        <SlaContactSection />
      </div>
    </div>
  )
}
