'use client';

const logos: { name: string; mark: 'circle' | 'square' }[] = [
  { name: 'Oakridge Realty', mark: 'circle' },
  { name: 'BlueStone Group', mark: 'square' },
  { name: 'Summit Homes', mark: 'circle' },
  { name: 'Pine & Co.', mark: 'square' },
  { name: 'Crescent Realty', mark: 'circle' },
  { name: 'Harbor Team', mark: 'square' },
];

const LogoMark = ({ type }: { type: 'circle' | 'square' }) => {
  if (type === 'circle') {
    return <div className="w-3.5 h-3.5 rounded-full bg-[#1D4871] flex-shrink-0" />;
  }
  return <div className="w-3.5 h-3.5 rounded-sm bg-[#1D4871] flex-shrink-0" />;
};

const LogoPill = ({ name, mark }: { name: string; mark: 'circle' | 'square' }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#1D4871] rounded-full text-[#1D4871] text-xs md:text-sm font-bold transition-all duration-200 hover:-translate-y-1 v2-comic-shadow-sm">
      <LogoMark type={mark} />
      <span>{name}</span>
    </div>
  );
};

export function SocialProofStripV2() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track-v2 {
          animation: marquee 22s linear infinite;
        }
        .marquee-track-v2:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track-v2 {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
      <section aria-label="Social proof" className="max-w-[1200px] mx-auto px-6 py-6 md:py-8">
        {/* Comic-style banner label */}
        <div className="flex justify-center mb-5">
          <span className="v2-pow-badge px-4 py-1.5 rounded-lg text-sm font-comic tracking-wider">
            TRUSTED BY TEAMS RUNNING OUTBOUND EVERY DAY
          </span>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="marquee-track-v2 flex items-center gap-3 md:gap-4 w-max">
            {duplicatedLogos.map((logo, index) => (
              <LogoPill key={`marquee-${index}`} name={logo.name} mark={logo.mark} />
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </section>
    </>
  );
}
