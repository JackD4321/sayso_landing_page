'use client';

import Image from 'next/image';

const logos = [
  { name: 'eXp Realty', src: '/exp realty.png', href: '/case-studies#exp-realty' },
  { name: 'Anderson Group', src: '/anderson group.png', href: '/case-studies#anderson-group' },
];

const LogoPill = ({ name, src, href }: { name: string; src: string; href: string }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center transition-all duration-200 hover:-translate-y-1 hover:opacity-80"
    >
      <Image src={src} alt={name} width={200} height={80} className="h-16 md:h-20 w-auto object-contain" />
    </a>
  );
};

export function SocialProofStripV3() {
  // Duplicate enough times for seamless scroll with only 2 logos
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track-v2 {
          animation: marquee 18s linear infinite;
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
          <div className="marquee-track-v2 flex items-center gap-10 md:gap-14 w-max">
            {duplicatedLogos.map((logo, index) => (
              <LogoPill key={`marquee-${index}`} name={logo.name} src={logo.src} href={logo.href} />
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </section>
    </>
  );
}
