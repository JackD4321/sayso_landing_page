import SaysoNavbarV3 from '@/components/landing-v3/SaysoNavbarV3';
import { FooterV3 } from '@/components/landing-v3/FooterV3';
import { CaseStudiesPage } from '@/components/landing-v3/CaseStudiesPage';

export default function CaseStudies() {
  return (
    <div className="relative">
      <SaysoNavbarV3 />
      <CaseStudiesPage />
      <FooterV3 />
    </div>
  );
}
