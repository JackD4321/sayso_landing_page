'use client';

import Image from 'next/image';
import { ProductShowcaseDesktop } from '../landing-v3/ProductShowcaseDesktop';

const logos = [
  { name: 'eXp Realty', src: '/exp realty.png', href: '/case-studies#exp-realty' },
  { name: 'Anderson Group', src: '/anderson group.png', href: '/case-studies#anderson-group' },
];

export function HeroWithVideoV4() {
  // Duplicate logos for seamless marquee scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track-hero {
          animation: marquee 18s linear infinite;
        }
        .marquee-track-hero:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track-hero {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>

      <section className="relative bg-white pt-16 pb-4 md:pt-20 md:pb-6 lg:pt-24 lg:pb-8 overflow-hidden v2-halftone">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Two-column grid: text left, video right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-8 lg:gap-16 items-center">

            {/* LEFT COLUMN — headline, tagline, CTAs */}
            <div className="text-left">
              <div className="mb-3 md:mb-4">
                <h1 className="font-comic text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-wide leading-[1.05] text-[#1D4871] v4-slide-in-left">
                  Win the Moment
                </h1>
              </div>

              {/* Tagline */}
              <p className="mt-2 text-base md:text-lg lg:text-xl leading-relaxed text-[#1D4871]/80 max-w-lg">
                Guidance that shows up during the call—before the moment passes.
              </p>

              {/* CTAs */}
              <div className="mt-5 md:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-[#2367EE] px-6 py-3 text-base font-semibold text-white v4-hero-glow v2-comic-border-light border-[#1D4871] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
                >
                  Book a demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#1D4871] bg-white px-6 py-3 text-base font-semibold text-[#1D4871] v2-comic-btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
                >
                  Learn more about Sayso
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN — demo video */}
            <div className="relative">
              <ProductShowcaseDesktop />
            </div>
          </div>

          {/* SOCIAL PROOF — full width below the grid */}
          <div className="mt-6 md:mt-8 pt-4 md:pt-6">
            {/* Label */}
            <div className="flex justify-center mb-5">
              <span className="v2-pow-badge px-4 py-1.5 rounded-lg text-sm font-comic tracking-wider">
                TRUSTED BY TEAMS RUNNING OUTBOUND EVERY DAY
              </span>
            </div>

            {/* Marquee */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
              <div className="marquee-track-hero flex items-center gap-10 md:gap-14 w-max">
                {duplicatedLogos.map((logo, index) => (
                  <a
                    key={`marquee-${index}`}
                    href={logo.href}
                    className="inline-flex items-center transition-all duration-200 hover:-translate-y-1 hover:opacity-80"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={200}
                      height={80}
                      className="h-16 md:h-20 w-auto object-contain"
                    />
                  </a>
                ))}
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
