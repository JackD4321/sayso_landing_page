'use client';

import Image from 'next/image';
import { ProductShowcaseDesktop } from '../landing-v3/ProductShowcaseDesktop';
import { useDemoCalendar } from './DemoCalendarProvider';

const logos = [
  { name: 'eXp Realty', src: '/exp realty.png' },
  { name: 'Anderson Group', src: '/anderson group.png' },
  { name: 'Olaf', src: '/olaf logo.png' },
];

export function HeroWithVideoV4() {
  // Duplicate logos for seamless marquee scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];
  const { openDemoCalendar } = useDemoCalendar();

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

      <section className="relative bg-white pt-[140px] pb-[140px] overflow-hidden v2-halftone">
        <div className="max-w-[1600px] mx-auto px-6">

          {/* Two-column layout: text left, video far right */}
          <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">

            {/* Superhero — always visible, pointing right at the SaySo top bar */}
            <div
              className="hidden lg:block absolute top-[-5%] left-[28%] z-30 pointer-events-none"
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
                Real-time prompts to help agents handle objections, ask better questions, and book more appointments.
              </p>

              {/* CTA */}
              <div className="mt-5 md:mt-6 flex justify-center gap-4">
                <button
                  onClick={openDemoCalendar}
                  className="inline-flex items-center justify-center rounded-full bg-[#2367EE] px-8 py-3.5 text-lg font-semibold text-white v4-hero-glow v2-comic-border-light border-[#1D4871] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
                >
                  Book a Demo
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN — demo video */}
            <div className="relative flex-shrink-0 lg:w-[55%]">
              <ProductShowcaseDesktop />
              {/* Mobile narrator badge — overlays top of demo frame */}
              <div className="flex lg:hidden justify-end pointer-events-none absolute top-[-10px] right-2 z-40">
                <div
                  className="bg-[#FFDE59] border-2 border-[#1D4871] px-3 py-1.5 rounded-md transform -rotate-2"
                  style={{ boxShadow: '2px 2px 0px #1D4871' }}
                >
                  <span className="font-comic text-[#1D4871] text-sm sm:text-base tracking-wide whitespace-nowrap">
                    Works with existing dialer or CRM!
                  </span>
                </div>
              </div>
            </div>

            {/* "Works with existing dialer or CRM" — comic narrator badge overlaying the demo frame */}
            <div className="hidden lg:flex absolute top-[-16px] right-[2%] z-40 pointer-events-none flex-col items-center">
              {/* Narrator badge */}
              <div
                className="bg-[#FFDE59] border-[2.5px] border-[#1D4871] px-5 py-2.5 rounded-lg transform -rotate-2"
                style={{ boxShadow: '3px 3px 0px #1D4871' }}
              >
                <span className="font-comic text-[#1D4871] text-2xl lg:text-3xl tracking-wide whitespace-nowrap">
                  Works with existing dialer or CRM!
                </span>
              </div>
            </div>
          </div>

          {/* SOCIAL PROOF — full width below the grid */}
          <div className="mt-12 md:mt-16 pt-4 md:pt-6">
            {/* Label */}
            <div className="flex justify-center mb-5">
              <span className="text-sm md:text-base font-bold tracking-widest uppercase text-black" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Trusted by Top Teams and Agents Nationwide</span>
            </div>

            {/* Marquee */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
              <div className="marquee-track-hero flex items-center gap-10 md:gap-14 w-max">
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`marquee-${index}`}
                    className="inline-flex items-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={200}
                      height={80}
                      className="h-16 md:h-20 w-auto object-contain"
                    />
                  </div>
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
