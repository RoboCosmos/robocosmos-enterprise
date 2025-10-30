import { HelpHeroSection } from "@/components/sections/help-hero-section"
import { HelpTopicsSection } from "@/components/sections/help-topics-section"
import { HelpFaqSection } from "@/components/sections/help-faq-section"
import { HelpContactSection } from "@/components/sections/help-contact-section"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12 space-y-12">
        <HelpHeroSection />
        <HelpTopicsSection />
        <HelpFaqSection />
        <HelpContactSection />
      </div>
    </div>
  )
}
