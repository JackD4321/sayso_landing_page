import SaysoNavbarV4 from '@/components/landing-v4/SaysoNavbarV4';
import { FooterV4 } from '@/components/landing-v4/FooterV4';
import { DemoCalendarProvider } from '@/components/landing-v4/DemoCalendarProvider';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <DemoCalendarProvider>
      <div className="relative bg-[#F4F4F5] min-h-screen">
        <SaysoNavbarV4 />
        <main className="pt-6">{children}</main>
        <FooterV4 />
      </div>
    </DemoCalendarProvider>
  );
}
