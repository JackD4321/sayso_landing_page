import SaysoNavbarV2 from '@/components/landing-v2/SaysoNavbarV2';
import { SocialProofStripV2 } from '@/components/landing-v2/SocialProofStripV2';
import { ProductShowcaseCopyV2 } from '@/components/landing-v2/ProductShowcaseCopyV2';
import { ThreeStepsSectionV2 } from '@/components/landing-v2/ThreeStepsSectionV2';
import { PricingSectionV2 } from '@/components/landing-v2/PricingSectionV2';
import { FooterV2 } from '@/components/landing-v2/FooterV2';
import { HeroWithVideoV2 } from '@/components/landing-v2/HeroWithVideoV2';

export default function HomeV2() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-2">
      <SaysoNavbarV2 />
      <HeroWithVideoV2 />
      <ProductShowcaseCopyV2 />
      <SocialProofStripV2 />
      <ThreeStepsSectionV2 />
      <PricingSectionV2 />
      <FooterV2 />
    </div>
  );
}
