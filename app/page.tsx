import SaysoNavbar from '@/components/ui/SaysoNavbar';
import { SocialProofStrip } from '@/components/landing/SocialProofStrip';
import { ProductShowcaseSection } from '@/components/landing/ProductShowcaseSection';
import { ThreeStepsSection } from '@/components/landing/ThreeStepsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-4">
      <SaysoNavbar />
      
      <main className="max-w-[1200px] mx-auto px-6 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-12">
        <div className="max-w-[52rem] mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[#1D4871]">
            Win the Moment
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed text-[#1D4871]/80 mx-auto">
            Guidance that shows up during the call—before the moment passes.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-[42rem] mx-auto">
              <a
                href="#book-demo"
                className="inline-flex items-center justify-center rounded-full bg-[#2367EE] px-6 py-3 text-sm md:text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1F5FE0] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
              >
                Book a demo
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center rounded-full border border-[#1D4871]/20 bg-transparent px-6 py-3 text-sm md:text-base font-semibold text-[#1D4871] transition-all duration-200 hover:bg-[#1D4871]/5 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
              >
                Learn more about Sayso
              </a>
            </div>
        </div>
      </main>

      <div className="mt-8 md:mt-10">
        <SocialProofStrip />
      </div>

      <div className="mt-6 md:mt-8">
        <ProductShowcaseSection />
      </div>
      <ThreeStepsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
