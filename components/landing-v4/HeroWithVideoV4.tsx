'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ProductShowcaseDesktop } from '../landing-v3/ProductShowcaseDesktop';

const logos = [
  { name: 'eXp Realty', src: '/exp realty.png', href: '/case-studies#exp-realty' },
  { name: 'Anderson Group', src: '/anderson group.png', href: '/case-studies#anderson-group' },
];

export function HeroWithVideoV4() {
  // Duplicate logos for seamless marquee scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  // Superhero visibility synced with DesktopDemoFrame highlight cycle (14s total)
  const [showSuperhero, setShowSuperhero] = useState(false);

  useEffect(() => {
    const CYCLE = 14000;
    const SHOW_AT = 3000;
    const HIDE_AT = 10000;

    const runCycle = () => {
      const show = setTimeout(() => setShowSuperhero(true), SHOW_AT);
      const hide = setTimeout(() => setShowSuperhero(false), HIDE_AT);
      return { show, hide };
    };

    let timers = runCycle();
    const interval = setInterval(() => {
      timers = runCycle();
    }, CYCLE);

    return () => {
      clearTimeout(timers.show);
      clearTimeout(timers.hide);
      clearInterval(interval);
    };
  }, []);

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
        <div className="max-w-[1600px] mx-auto px-6">

          {/* Two-column layout: text left, video far right */}
          <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">

            {/* Superhero — appears in the gap pointing right at the SaySo widget */}
            <div
              className="hidden lg:block absolute top-[15%] left-[28%] z-30 pointer-events-none"
              style={{
                opacity: showSuperhero ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: showSuperhero ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(20px)',
              }}
            >
              <Image
                src="/this_is_sayso_right.png"
                alt="This is SaySo"
                width={300}
                height={300}
                className="w-[300px] h-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
              />
            </div>

            {/* LEFT COLUMN — headline, tagline, CTAs */}
            <div className="text-center lg:max-w-md flex-shrink-0 lg:pl-8">
              <div className="mb-3 md:mb-4">
                <h1 className="font-comic text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-wide leading-[1.05] text-[#1D4871] v4-slide-in-left">
                  Win the Moment
                </h1>
              </div>

              {/* Tagline */}
              <p className="mt-2 text-base md:text-lg lg:text-xl leading-relaxed text-[#1D4871]/80 max-w-lg mx-auto">
                Guidance that shows up during the call—before the moment passes.
              </p>

              {/* CTA */}
              <div className="mt-5 md:mt-6 flex justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-[#2367EE] px-8 py-3.5 text-lg font-semibold text-white v4-hero-glow v2-comic-border-light border-[#1D4871] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
                >
                  Book a demo
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN — demo video */}
            <div className="relative flex-shrink-0 lg:w-[55%]">
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
