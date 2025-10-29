import { MerchantHeroSection } from "@/components/sections/merchant-hero-section"
import { MerchantBenefitsSection } from "@/components/sections/merchant-benefits-section"
import { MerchantProcessSection } from "@/components/sections/merchant-process-section"
import { MerchantFeaturesSection } from "@/components/sections/merchant-features-section"
import { MerchantPricingSection } from "@/components/sections/merchant-pricing-section"
import { MerchantFaqSection } from "@/components/sections/merchant-faq-section"
import { MerchantCtaSection } from "@/components/sections/merchant-cta-section"

export default function BecomeMerchantPage() {
  return (
    <div className="min-h-screen">
      <MerchantHeroSection />
      <MerchantBenefitsSection />
      <MerchantProcessSection />
      <MerchantFeaturesSection />
      <MerchantPricingSection />
      <MerchantFaqSection />
      <MerchantCtaSection />
    </div>
  )
}
