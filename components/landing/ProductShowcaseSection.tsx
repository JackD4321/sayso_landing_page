'use client';

// Inline SVG Icons
const GridIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2H6V6H2V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 2H12V6H8V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 8H6V12H2V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8H12V12H8V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PauseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="2" height="10" rx="1" fill="currentColor"/>
    <rect x="8" y="2" width="2" height="10" rx="1" fill="currentColor"/>
  </svg>
);

const RecordIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="5" fill="#EF4444" stroke="currentColor" strokeWidth="0.5"/>
  </svg>
);

const ToggleOnIcon = () => (
  <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="22" height="12" rx="6" fill="#2367EE" stroke="none"/>
    <circle cx="18" cy="7" r="4" fill="white"/>
  </svg>
);

// Control Pill Component
function ControlPill() {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.25)] overflow-hidden">
      {/* Grid icon button */}
      <button className="p-1 text-white/80 hover:text-white transition-colors flex-shrink-0">
        <GridIcon />
      </button>
      
      {/* Label and toggle - hide on very small screens */}
      <span className="hidden sm:inline text-[12px] text-white/80 whitespace-nowrap">Show Smart Capture</span>
      <div className="hidden sm:block flex-shrink-0">
        <ToggleOnIcon />
      </div>
      
      {/* Separator */}
      <div className="hidden sm:block h-4 w-px bg-white/10" />
      
      {/* Avatar and name */}
      <div className="flex items-center gap-1 sm:gap-1.5">
        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <span className="text-[10px] font-semibold text-white">TL</span>
        </div>
        <span className="hidden md:inline text-[12px] text-white/80 whitespace-nowrap">Thomas Lopez</span>
        <button className="p-0.5 text-white/60 hover:text-white/80 transition-colors flex-shrink-0">
          <ChevronDownIcon />
        </button>
      </div>
      
      {/* Separator */}
      <div className="h-4 w-px bg-white/10" />
      
      {/* Pause icon */}
      <button className="p-1 text-white/80 hover:text-white transition-colors flex-shrink-0">
        <PauseIcon />
      </button>
      
      {/* Record icon with pulse */}
      <button className="p-1 text-white/80 hover:text-white transition-colors flex-shrink-0">
        <div className="relative">
          <RecordIcon />
          <span className="absolute inset-0 rounded-full bg-red-500/30 animate-pulse" />
        </div>
      </button>
      
      {/* Timer */}
      <div className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10 flex-shrink-0">
        <span className="text-[11px] font-mono text-white/80">0:25:21</span>
      </div>
    </div>
  );
}

// Suggestion Bubble Component
function SuggestionBubble() {
  return (
    <div className="px-4 py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
      <p className="text-[13px] leading-tight text-white/90">
        Ask <span className="text-white font-medium">&quot;What would make a move worth it for you in the next 6 months?&quot;</span> to uncover the real motivation.
      </p>
    </div>
  );
}

// Generic Avatar Component (head + shoulders silhouette)
function GenericAvatar() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Subtle highlight ring */}
      <div className="absolute inset-0 rounded-full ring-8 ring-white/30 -z-10" />
      
      {/* Head */}
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#D7DEE1] border border-[#1D4871]/10 shadow-[0_4px_12px_rgba(29,72,113,0.08)] flex items-center justify-center relative z-0">
        {/* Subtle inner highlight */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/20" />
      </div>
      
      {/* Shoulders/Body */}
      <div className="w-48 h-28 md:w-56 md:h-32 rounded-[999px] bg-[#D7DEE1] border border-[#1D4871]/10 shadow-[0_4px_12px_rgba(29,72,113,0.08)] -mt-6 md:-mt-7 relative z-0">
        {/* Subtle inner highlight */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 md:w-40 h-4 rounded-full bg-white/15" />
      </div>
    </div>
  );
}

// Main Product Showcase Section
export function ProductShowcaseSection() {
  return (
    <section className="bg-white py-12 md:py-14 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Copy Section */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[12px] uppercase tracking-wider text-[#1D4871]/60 font-semibold mb-3 md:mb-4">
            LIVE DURING THE CALL
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D4871] mb-3 md:mb-4">
            See the moment before it passes.
          </h2>
          <p className="text-base md:text-lg text-[#1D4871]/80 max-w-2xl mx-auto">
            Sayso surfaces the next best question while you&apos;re still in the conversation.
          </p>
        </div>

        {/* Product Mock */}
        <div className="w-full rounded-3xl border border-[#1D4871]/10 bg-[#F4F4F5] shadow-[0_24px_70px_rgba(29,72,113,0.15)] overflow-hidden">
          <div className="aspect-[16/9] relative bg-gradient-to-br from-[#D7DEE1] to-white/40">
            {/* Top header bar */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-black/80 flex items-center justify-center">
              <span className="text-sm text-white/80">Jane Smith</span>
            </div>

            {/* Main video area - speaker avatar */}
            <div className="absolute inset-0 flex items-center justify-center pt-14">
              <GenericAvatar />
            </div>

            {/* Subtle "speaking" indicator - 3 dots animation */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-1.5 z-10">
              <div className="flex gap-1.5 px-2.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
                <div 
                  className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" 
                  style={{ animationDelay: '0ms' }}
                />
                <div 
                  className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" 
                  style={{ animationDelay: '200ms' }}
                />
                <div 
                  className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" 
                  style={{ animationDelay: '400ms' }}
                />
              </div>
            </div>

            {/* Overlay UI - positioned near top-left */}
            <div className="absolute top-20 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 flex flex-col md:flex-row items-start gap-2 md:gap-3 z-10">
              {/* Control Pill */}
              <div className="flex-shrink-0 w-full md:w-auto">
                <ControlPill />
              </div>

              {/* Suggestion Bubble */}
              <div className="w-full md:flex-shrink md:max-w-md">
                <SuggestionBubble />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
