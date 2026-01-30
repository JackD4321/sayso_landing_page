import SaysoNavbar from '@/components/ui/SaysoNavbar';
import { SocialProofStrip } from '@/components/landing/SocialProofStrip';
import { ProductShowcaseCopy } from '@/components/landing/ProductShowcaseSection';
import { ThreeStepsSection } from '@/components/landing/ThreeStepsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { Footer } from '@/components/landing/Footer';
import { HeroWithVideo } from '@/components/landing/HeroWithVideo';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-2">
      <SaysoNavbar />

      {/* Hero: headline + CTAs + video mock (all visible above the fold) */}
      <HeroWithVideo />

      {/* Copy section below the video */}
      <ProductShowcaseCopy />

      {/* Social proof moved below */}
      <SocialProofStrip />

      <ThreeStepsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
