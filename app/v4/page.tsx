import SaysoNavbarV4 from '@/components/landing-v4/SaysoNavbarV4';
import { HeroWithVideoV4 } from '@/components/landing-v4/HeroWithVideoV4';
import { PainPointPanelV4 } from '@/components/landing-v4/PainPointPanelV4';
import { ProductShowcaseCopyV4 } from '@/components/landing-v4/ProductShowcaseCopyV4';
import { SocialProofStripV3 } from '@/components/landing-v3/SocialProofStripV3';
import { ThreeStepsSectionV4 } from '@/components/landing-v4/ThreeStepsSectionV4';
import { TransformationSectionV4 } from '@/components/landing-v4/TransformationSectionV4';
import { PricingSectionV4 } from '@/components/landing-v4/PricingSectionV4';
import { FooterV4 } from '@/components/landing-v4/FooterV4';

export default function V4Page() {
  return (
    <div className="relative">
      <SaysoNavbarV4 />
      <HeroWithVideoV4 />
      <PainPointPanelV4 />
      <ProductShowcaseCopyV4 />
      <SocialProofStripV3 />
      <ThreeStepsSectionV4 />
      <TransformationSectionV4 />
      <PricingSectionV4 />
      <FooterV4 />
    </div>
  );
}
