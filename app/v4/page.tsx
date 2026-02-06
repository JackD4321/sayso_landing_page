import SaysoNavbarV4 from '@/components/landing-v4/SaysoNavbarV4';
import { HeroWithVideoV4 } from '@/components/landing-v4/HeroWithVideoV4';
import { PainPointPanelV4 } from '@/components/landing-v4/PainPointPanelV4';
import { ThreeStepsSectionV4 } from '@/components/landing-v4/ThreeStepsSectionV4';
import { TransformationSectionV4 } from '@/components/landing-v4/TransformationSectionV4';
import { PricingSectionV4 } from '@/components/landing-v4/PricingSectionV4';
import { FooterV4 } from '@/components/landing-v4/FooterV4';
import { DemoCalendarProvider } from '@/components/landing-v4/DemoCalendarProvider';

export default function V4Page() {
  return (
    <DemoCalendarProvider>
      <div className="relative bg-white">
        <SaysoNavbarV4 />
        <HeroWithVideoV4 />
        <PainPointPanelV4 />
        <TransformationSectionV4 />
        <ThreeStepsSectionV4 />
        <PricingSectionV4 />
        <FooterV4 />
      </div>
    </DemoCalendarProvider>
  );
}
