'use client';

// Logo placeholder data
const logos = [
  { name: 'Oakridge Realty', mark: 'circle' },
  { name: 'BlueStone Group', mark: 'square' },
  { name: 'Summit Homes', mark: 'circle' },
  { name: 'Pine & Co.', mark: 'square' },
  { name: 'Crescent Realty', mark: 'circle' },
  { name: 'Harbor Team', mark: 'square' },
];

// Simple mark icon component
const LogoMark = ({ type }: { type: 'circle' | 'square' }) => {
  if (type === 'circle') {
    return (
      <div className="w-3 h-3 rounded-full bg-[#1D4871]/40 flex-shrink-0" />
    );
  }
  return (
    <div className="w-3 h-3 rounded-sm bg-[#1D4871]/40 flex-shrink-0" />
  );
};

// Individual logo pill component
const LogoPill = ({ name, mark }: { name: string; mark: 'circle' | 'square' }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1D4871]/5 border border-[#1D4871]/10 rounded-full text-[#1D4871]/55 text-xs md:text-sm font-medium transition-all duration-200 hover:text-[#1D4871]/75 hover:border-[#1D4871]/20 hover:-translate-y-0.5">
      <LogoMark type={mark} />
      <span>{name}</span>
    </div>
  );
};

// Main Social Proof Strip component
export function SocialProofStrip() {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <>
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          animation: marquee 22s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
          }
          
          .marquee-wrapper {
            overflow: visible;
          }
          
          .marquee-fade {
            display: none;
          }
        }
      `}</style>
      <section aria-label="Social proof" className="max-w-[1200px] mx-auto px-6 py-5 md:py-6">
      
      <p className="text-xs md:text-sm tracking-wide text-[#1D4871]/60 text-center mb-4">
        Trusted by teams running outbound every day
      </p>
      
      {/* Marquee wrapper with fade edges */}
      <div className="marquee-wrapper relative overflow-hidden">
        {/* Left fade edge */}
        <div className="marquee-fade absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        
        {/* Marquee track */}
        <div className="marquee-track flex items-center gap-3 md:gap-4 w-max">
          {duplicatedLogos.map((logo, index) => (
            <LogoPill key={`marquee-${index}`} name={logo.name} mark={logo.mark} />
          ))}
        </div>
        
        {/* Right fade edge */}
        <div className="marquee-fade absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
    </>
  );
}
