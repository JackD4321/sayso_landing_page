'use client';

// Inline SVG Icons
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

// Curved Arrow SVG Component (connects steps 1→2→3)
const CurvedArrow = () => (
  <svg
    className="hidden md:block flex-shrink-0"
    width="80"
    height="40"
    viewBox="0 0 80 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 20 C 30 5, 50 5, 75 20"
      stroke="#1D4871"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.3"
      fill="none"
    />
    <path
      d="M70 15 L75 20 L70 25"
      stroke="#1D4871"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.3"
      fill="none"
    />
  </svg>
);

// Step 1 Visual: "Start Sayso"
function StepVisualStartSayso() {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-[#D7DEE1] to-white/60 rounded-3xl overflow-hidden p-3 flex items-center justify-center">
      <div className="w-full max-w-[240px] flex items-center justify-between gap-2">
        {/* Dark translucent pill */}
        <div className="flex items-center gap-1.5 px-2.5 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
          <div className="p-0.5 text-white/80">
            <GridIcon />
          </div>
          <span className="text-[11px] text-white/80 whitespace-nowrap">Start Sayso</span>
          <div className="flex-shrink-0">
            <ToggleOnIcon />
          </div>
        </div>
        
        {/* Blue CTA button */}
        <button className="px-3 py-1.5 h-8 rounded-full bg-[#2367EE] text-white text-[11px] font-semibold whitespace-nowrap shadow-sm hover:bg-[#1F5FE0] transition-colors">
          Select Prospect
        </button>
      </div>
    </div>
  );
}

// Step 2 Visual: "Get real-time prompts"
function StepVisualPrompts() {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-[#D7DEE1] to-white/60 rounded-3xl overflow-hidden p-3 flex flex-col items-center justify-start gap-2">
      {/* Control pill with recording */}
      <div className="w-full max-w-[240px] flex items-center gap-1.5 px-2.5 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
        <div className="p-0.5 text-white/80">
          <GridIcon />
        </div>
        <span className="text-[11px] text-white/80 whitespace-nowrap">Sayso started</span>
        <div className="h-4 w-px bg-white/10" />
        <div className="relative p-0.5">
          <RecordIcon />
          <span className="absolute inset-0 rounded-full bg-red-500/30 animate-pulse" />
        </div>
        <div className="px-1.5 py-0.5 rounded-full bg-white/10 border border-white/10">
          <span className="text-[10px] font-mono text-white/80">0:25:21</span>
        </div>
      </div>

      {/* Suggestion bubble */}
      <div className="w-full max-w-[240px] px-3 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
        <p className="text-[11px] leading-tight text-white/90">
          Ask <span className="text-white font-medium">"What would make a move worth it for you in the next 6 months?"</span>
        </p>
        <p className="text-[10px] text-white/60 mt-1">
          to uncover the real motivation.
        </p>
      </div>
    </div>
  );
}

// Step 3 Visual: "Win the moment" - Booked meeting
function StepVisualBooked() {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-[#D7DEE1] to-white/60 rounded-3xl overflow-hidden p-4 flex items-center justify-center">
      <div className="w-full max-w-[220px] bg-white/90 backdrop-blur-sm rounded-xl border border-[#1D4871]/10 shadow-[0_8px_20px_rgba(29,72,113,0.12)] p-3">
        {/* Top row: Calendar icon + "Booked" + checkmark */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <CalendarIcon className="text-[#1D4871]" />
            <span className="text-[11px] font-semibold text-[#1D4871]">Booked</span>
          </div>
          <div className="w-5 h-5 rounded-full bg-[#2367EE] flex items-center justify-center">
            <CheckIcon className="text-white" />
          </div>
        </div>
        
        {/* Meeting title */}
        <h4 className="text-[13px] font-bold text-[#1D4871] mb-1">
          Buyer Consultation
        </h4>
        
        {/* Time */}
        <p className="text-[11px] text-[#1D4871]/70 mb-2">
          Tomorrow • 2:00 PM
        </p>
        
        {/* Confirmed pill */}
        <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#2367EE]/10 border border-[#2367EE]/20">
          <span className="text-[10px] font-medium text-[#2367EE]">Confirmed</span>
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
}

function StepCard({ number, title, description, visual }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Visual Card */}
      <div className="w-full max-w-[280px] aspect-[4/3] rounded-3xl border border-[#1D4871]/10 bg-[#F4F4F5] shadow-[0_8px_24px_rgba(29,72,113,0.08)] mb-6 overflow-hidden">
        {visual}
      </div>

      {/* Step Number + Title */}
      <h3 className="text-xl md:text-2xl font-bold text-[#1D4871] mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base text-[#1D4871]/70 max-w-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function ThreeStepsSection() {
  const steps = [
    {
      number: 1,
      title: '1 Start Sayso',
      description:
        'Turn it on before your outbound calls to get live guidance during the conversation.',
      visual: <StepVisualStartSayso />,
    },
    {
      number: 2,
      title: '2 Get real-time prompts',
      description:
        'When the call drifts or a prospect throws something unexpected, Sayso suggests what to ask or say next.',
      visual: <StepVisualPrompts />,
    },
    {
      number: 3,
      title: '3 Win the moment',
      description:
        'Sayso helps you earn the meeting at the right moment—so appointments are more qualified and more likely to happen.',
      visual: <StepVisualBooked />,
    },
  ];

  return (
    <section className="mt-16 md:mt-20 lg:mt-24 bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Headline + Subhead */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D4871] mb-4">
            Win the Moment in 3 steps
          </h2>
          <p className="text-base md:text-lg text-[#1D4871]/70 max-w-2xl mx-auto leading-relaxed">
            Real-time guidance that keeps outbound calls structured and moving
            toward a booked appointment.
          </p>
        </div>

        {/* Steps Grid with Arrows */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-4 lg:gap-6">
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                visual={step.visual}
              />
              {/* Arrow between steps (not after last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center self-center -mt-12">
                  <CurvedArrow />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
