'use client';

// Inline SVG Icons (same as v1)
const GridIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2H6V6H2V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 2H12V6H8V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 8H6V12H2V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8H12V12H8V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ToggleOnIcon = () => (
  <svg width="20" height="12" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="22" height="12" rx="6" fill="#2367EE" stroke="none"/>
    <circle cx="18" cy="7" r="4" fill="white"/>
  </svg>
);

const RecordIcon = () => (
  <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="5" fill="#EF4444" stroke="currentColor" strokeWidth="0.5"/>
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="2" y="3" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M2 5.5H12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M5 1.5V3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M9 1.5V3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="5" cy="8" r="0.8" fill="currentColor"/>
    <circle cx="7" cy="8" r="0.8" fill="currentColor"/>
    <circle cx="9" cy="8" r="0.8" fill="currentColor"/>
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M1.5 5L4 7.5L8.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Comic-style hand-drawn arrow with speed lines
const ComicArrow = () => (
  <svg
    className="hidden md:block flex-shrink-0"
    width="90"
    height="60"
    viewBox="0 0 90 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main wobbly arrow shaft — hand-drawn feel */}
    <path
      d="M10 30 C 20 18, 32 14, 45 18 S 62 28, 72 24"
      stroke="#1D4871"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Bold comic arrowhead */}
    <path
      d="M64 16 L76 24 L64 33"
      stroke="#1D4871"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Step 1
function StepVisualStartSayso() {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-[#0d1b2a] to-[#1a2a3a] rounded-2xl overflow-hidden p-3 flex items-center justify-center">
      <div className="w-full max-w-[240px] flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 px-2.5 h-8 rounded-full showcase-glass border border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
          <div className="p-0.5 text-white/80"><GridIcon /></div>
          <span className="text-[11px] text-white/80 whitespace-nowrap">Start Sayso</span>
          <div className="flex-shrink-0"><ToggleOnIcon /></div>
        </div>
        <button className="px-3 py-1.5 h-8 rounded-full bg-[#2367EE] text-white text-[11px] font-semibold whitespace-nowrap shadow-sm">
          Select Prospect
        </button>
      </div>
    </div>
  );
}

// Step 2
function StepVisualPrompts() {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-[#0d1b2a] to-[#1a2a3a] rounded-2xl overflow-hidden p-3 flex flex-col items-center justify-start gap-2">
      <div className="w-full max-w-[240px] flex items-center gap-1.5 px-2.5 h-8 rounded-full showcase-glass border border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
        <div className="p-0.5 text-white/80"><GridIcon /></div>
        <span className="text-[11px] text-white/80 whitespace-nowrap">Sayso started</span>
        <div className="h-4 w-px bg-white/15" />
        <div className="relative p-0.5">
          <RecordIcon />
          <span className="absolute inset-0 rounded-full bg-red-500/30 animate-pulse" />
        </div>
        <div className="px-1.5 py-0.5 rounded-full bg-white/10 border border-white/10">
          <span className="text-[10px] font-mono text-white/80">0:25:21</span>
        </div>
      </div>
      <div className="w-full max-w-[240px] px-3 py-2 rounded-xl showcase-glass-strong border border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(114,126,137,0.4)]">
        <p className="text-[11px] leading-tight text-white/90">
          Ask <span className="text-white font-medium">&quot;What would make a move worth it for you in the next 6 months?&quot;</span>
        </p>
        <p className="text-[10px] text-white/60 mt-1">to uncover the real motivation.</p>
      </div>
    </div>
  );
}

// Step 3
function StepVisualBooked() {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-[#FFDE59]/20 to-white/60 rounded-2xl overflow-hidden p-4 flex items-center justify-center">
      <div className="w-full max-w-[220px] bg-white rounded-xl v2-comic-border p-3 v2-comic-shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <CalendarIcon className="text-[#1D4871]" />
            <span className="text-[11px] font-bold text-[#1D4871] font-comic tracking-wide">Booked</span>
          </div>
          <div className="w-5 h-5 rounded-full bg-[#2367EE] flex items-center justify-center">
            <CheckIcon className="text-white" />
          </div>
        </div>
        <h4 className="text-[13px] font-bold text-[#1D4871] mb-1">Buyer Consultation</h4>
        <p className="text-[11px] text-[#1D4871]/70 mb-2">Tomorrow • 2:00 PM</p>
        <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#2367EE]/10 border-2 border-[#2367EE]/30">
          <span className="text-[10px] font-bold text-[#2367EE]">Confirmed</span>
        </div>
      </div>
    </div>
  );
}

interface StepProps {
  number: number;
  title: string;
  description: string;
  visual: React.ReactNode;
  tilt?: string;
}

function StepCard({ title, description, visual, tilt }: StepProps) {
  return (
    <div className={`flex flex-col items-center text-center ${tilt || ''}`}>
      {/* Visual Card — comic panel */}
      <div className="w-full max-w-[280px] aspect-[4/3] rounded-2xl v2-comic-border bg-[#F4F4F5] v2-comic-shadow mb-6 overflow-hidden">
        {visual}
      </div>
      <h3 className="font-comic text-2xl md:text-3xl text-[#1D4871] mb-3 tracking-wide">
        {title}
      </h3>
      <p className="text-base text-[#1D4871]/70 max-w-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function ThreeStepsSectionV3() {
  const steps = [
    {
      number: 1,
      title: '1 Start Sayso',
      description: 'Turn it on before your outbound calls to get live guidance during the conversation.',
      visual: <StepVisualStartSayso />,
      tilt: 'v2-tilt-left',
    },
    {
      number: 2,
      title: '2 Get real-time prompts',
      description: 'When the call drifts or a prospect throws something unexpected, Sayso suggests what to ask or say next.',
      visual: <StepVisualPrompts />,
      tilt: '',
    },
    {
      number: 3,
      title: '3 Win the moment',
      description: 'Sayso helps you earn the meeting at the right moment—so appointments are more qualified and more likely to happen.',
      visual: <StepVisualBooked />,
      tilt: 'v2-tilt-right',
    },
  ];

  return (
    <section className="mt-16 md:mt-20 lg:mt-24 bg-white py-12 md:py-16 lg:py-20 v2-halftone relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Headline */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-comic text-3xl md:text-4xl lg:text-5xl text-[#1D4871] mb-4 tracking-wide">
            Win the Moment in 3 steps
          </h2>
          <p className="text-base md:text-lg text-[#1D4871]/70 max-w-2xl mx-auto leading-relaxed">
            Real-time guidance that keeps outbound calls structured and moving toward a booked appointment.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-4 lg:gap-6">
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                visual={step.visual}
                tilt={step.tilt}
              />
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center self-start mt-[25%]">
                  <ComicArrow />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
