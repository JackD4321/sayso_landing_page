'use client';

import Image from 'next/image';
import { ProductShowcaseDesktop } from '../landing-v3/ProductShowcaseDesktop';

// Larger starburst SVG behind the headline
function HeroBurst() {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] md:w-[1100px] md:h-[650px] pointer-events-none -z-10"
      viewBox="0 0 1100 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 32 }).map((_, i) => {
        const angle = (i * 11.25) * (Math.PI / 180);
        const innerR = 80;
        const outerR = i % 2 === 0 ? 420 : 280;
        const x1 = 550 + Math.cos(angle) * innerR;
        const y1 = 325 + Math.sin(angle) * innerR;
        const x2 = 550 + Math.cos(angle) * outerR;
        const y2 = 325 + Math.sin(angle) * outerR;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FFDE59"
            strokeWidth={i % 2 === 0 ? 4 : 2}
            opacity={i % 2 === 0 ? 0.22 : 0.12}
          />
        );
      })}
    </svg>
  );
}

// Action lines SVG behind the CTA
function ActionLines() {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[80px] pointer-events-none -z-10"
      viewBox="0 0 500 80"
      fill="none"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`l-${i}`}
          x1={0}
          y1={15 + i * 12}
          x2={80 - i * 10}
          y2={15 + i * 12}
          stroke="#2367EE"
          strokeWidth="2"
          opacity={0.15 - i * 0.02}
          strokeLinecap="round"
        />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`r-${i}`}
          x1={500}
          y1={15 + i * 12}
          x2={420 + i * 10}
          y2={15 + i * 12}
          stroke="#2367EE"
          strokeWidth="2"
          opacity={0.15 - i * 0.02}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

// Comic explosion badge (reusable)
function ComicExplosionBadge({
  text,
  rotate = 12,
  size = 'md',
  className = '',
}: {
  text: string;
  rotate?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const sizes = {
    sm: 'w-16 h-16 text-xs',
    md: 'w-24 h-24 text-lg',
    lg: 'w-32 h-32 text-2xl',
  };

  return (
    <div
      className={`absolute flex items-center justify-center font-comic text-[#1D4871] v4-badge-pop ${sizes[size]} ${className}`}
      style={{
        '--badge-rotate': `${rotate}deg`,
        transform: `rotate(${rotate}deg)`,
      } as React.CSSProperties}
    >
      {/* Starburst SVG background */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="50,2 59,20 80,8 72,28 95,28 78,40 95,55 74,52 80,75 60,62 55,85 48,64 30,80 34,58 10,62 25,46 5,38 26,32 15,15 36,22 40,2"
          fill="#FFDE59"
          stroke="#1D4871"
          strokeWidth="2"
        />
      </svg>
      <span className="relative z-10 font-comic tracking-wide">{text}</span>
    </div>
  );
}

// Lightning bolt icon for CTA button
function LightningBoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 512 512" fill="none" className="inline-block mr-1.5 -mt-0.5">
      <path
        d="M294.4 25.6L115.2 281.6H256L217.6 486.4L396.8 230.4H256L294.4 25.6Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="20"
      />
    </svg>
  );
}

export function HeroWithVideoV4() {
  return (
    <section className="relative bg-white pt-16 pb-6 md:pt-20 md:pb-8 lg:pt-24 lg:pb-10 overflow-hidden v2-halftone">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top section: headline + superhero + CTAs */}
        <div className="text-center mb-8 md:mb-10 relative">
          {/* Headline with starburst + superhero character */}
          <div className="relative inline-block mb-4 md:mb-5">
            <HeroBurst />

            {/* POW! badge - top right */}
            <ComicExplosionBadge
              text="POW!"
              rotate={12}
              size="md"
              className="hidden sm:flex -top-8 -right-16 md:-top-10 md:-right-24 lg:-right-28"
            />

            {/* BOOM! badge - bottom left */}
            <ComicExplosionBadge
              text="BOOM!"
              rotate={-8}
              size="sm"
              className="hidden sm:flex -bottom-4 -left-12 md:-bottom-6 md:-left-20"
            />

            <h1 className="font-comic text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-wide leading-[1.05] text-[#1D4871] relative z-10 v4-slide-in-left">
              Win the Moment
            </h1>
          </div>

          {/* Superhero character - floating to the right on desktop, below on mobile */}
          <div className="flex justify-center md:absolute md:right-0 lg:right-4 md:top-1/2 md:-translate-y-1/2 mb-4 md:mb-0 z-20">
            <div className="v4-fly-in-right">
              <Image
                src="/sayso_superhero.png"
                alt="SaySo Superhero"
                width={484}
                height={515}
                className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto drop-shadow-lg v4-hero-float"
                priority
              />
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-2 text-base md:text-lg lg:text-xl leading-relaxed text-[#1D4871]/80 mx-auto max-w-2xl">
            Guidance that shows up during the call—before the moment passes.
          </p>

          {/* CTAs with action lines */}
          <div className="mt-4 md:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-[42rem] mx-auto relative">
            <ActionLines />
            <a
              href="#"
              className="relative z-10 inline-flex items-center justify-center rounded-full bg-[#2367EE] px-6 py-3 text-base font-semibold text-white v4-hero-glow v2-comic-border-light border-[#1D4871] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
            >
              <LightningBoltIcon />
              Book a demo
            </a>
            <a
              href="#"
              className="relative z-10 inline-flex items-center justify-center rounded-full border-2 border-[#1D4871] bg-white px-6 py-3 text-base font-semibold text-[#1D4871] v2-comic-btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
            >
              Learn more about Sayso
            </a>
          </div>
        </div>

        {/* Interactive Desktop Demo Showcase — wrapped in comic panel frame */}
        <div className="mb-0 relative">
          {/* LIVE DEMO ribbon label */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30">
            <span className="v2-pow-badge px-4 py-1.5 rounded-lg text-sm font-comic tracking-wider">
              LIVE DEMO
            </span>
          </div>
          <div className="v4-panel-border overflow-hidden">
            <ProductShowcaseDesktop />
          </div>
        </div>
      </div>
    </section>
  );
}
