import SaysoNavbarV4 from '@/components/landing-v4/SaysoNavbarV4';
import { FooterV4 } from '@/components/landing-v4/FooterV4';
import { CaseStudiesPage } from '@/components/landing-v3/CaseStudiesPage';
import { DemoCalendarProvider } from '@/components/landing-v4/DemoCalendarProvider';

export default function CaseStudies() {
  return (
    <DemoCalendarProvider>
      <div className="relative bg-white">
        <SaysoNavbarV4 />
        <CaseStudiesPage />
        <FooterV4 />
      </div>
    </DemoCalendarProvider>
  );
}
