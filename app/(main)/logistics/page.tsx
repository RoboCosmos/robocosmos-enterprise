import { LogisticsHeroSection } from "@/components/sections/logistics-hero-section"
import { RaasProcessSection } from "@/components/sections/raas-process-section"
import { ResponsibilitiesSection } from "@/components/sections/responsibilities-section"
import { LogisticsStandardsSection } from "@/components/sections/logistics-standards-section"

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <LogisticsHeroSection />
      <RaasProcessSection />
      <ResponsibilitiesSection />
      <LogisticsStandardsSection />
    </div>
  )
}
