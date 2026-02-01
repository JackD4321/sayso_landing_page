import SaysoNavbarV3 from '@/components/landing-v3/SaysoNavbarV3';
import { HeroWithVideoV3 } from '@/components/landing-v3/HeroWithVideoV3';
import { ProductShowcaseCopyV3 } from '@/components/landing-v3/ProductShowcaseCopyV3';
import { SocialProofStripV3 } from '@/components/landing-v3/SocialProofStripV3';
import { ThreeStepsSectionV3 } from '@/components/landing-v3/ThreeStepsSectionV3';
import { PricingSectionV3 } from '@/components/landing-v3/PricingSectionV3';
import { FooterV3 } from '@/components/landing-v3/FooterV3';

export default function V3Page() {
  return (
    <div className="relative">
      <SaysoNavbarV3 />
      <HeroWithVideoV3 />
      <ProductShowcaseCopyV3 />
      <SocialProofStripV3 />
      <ThreeStepsSectionV3 />
      <PricingSectionV3 />
      <FooterV3 />
    </div>
  );
}
