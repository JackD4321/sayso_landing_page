'use client';

interface OnboardingNavButtonsProps {
  onBack: () => void;
  onContinue: () => void;
  canContinue: boolean;
  showBack: boolean;
  continueLabel?: string;
}

export function OnboardingNavButtons({
  onBack,
  onContinue,
  canContinue,
  showBack,
  continueLabel = 'Continue',
}: OnboardingNavButtonsProps) {
  return (
    <div className="p-4 border-t border-[#D7DEE1] bg-white rounded-b-2xl">
      <div className="flex items-center justify-between">
        {showBack ? (
          <button
            onClick={onBack}
            className="inline-flex items-center justify-center rounded-full bg-white text-[#1D4871] font-bold px-6 py-3 text-sm border-2 border-[#1D4871] transition-colors hover:bg-[#F4F4F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mr-1.5">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
        ) : (
          <div />
        )}

        <button
          onClick={onContinue}
          disabled={!canContinue}
          className={`inline-flex items-center justify-center rounded-full bg-[#2367EE] text-white font-bold px-8 py-3 text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2 ${
            canContinue
              ? 'hover:bg-[#1b56cc] cursor-pointer'
              : 'opacity-50 cursor-not-allowed'
          }`}
        >
          {continueLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="ml-1.5">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
