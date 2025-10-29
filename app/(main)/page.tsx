import { HeroSection } from "@/components/sections/hero-section"
import { TrustBanner } from "@/components/sections/trust-banner"
import { SolutionsSection } from "@/components/sections/solutions-section"
import { SearchSection } from "@/components/sections/search-section"
import { VerifiedMerchantsSection } from "@/components/sections/verified-merchants-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBanner />
      <SolutionsSection />
      <SearchSection />
      <VerifiedMerchantsSection />
      <SocialProofSection />
      <CtaSection />
    </>
  )
}
