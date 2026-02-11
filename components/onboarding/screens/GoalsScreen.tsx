'use client';

const RANGES = [
  { label: '1–5', midpoint: 3 },
  { label: '5–10', midpoint: 7.5 },
  { label: '10–20', midpoint: 15 },
  { label: '25+', midpoint: 30 },
];

interface GoalsScreenProps {
  homesTarget: string | null;
  onHomesChange: (value: string) => void;
}

export function GoalsScreen({ homesTarget, onHomesChange }: GoalsScreenProps) {
  return (
    <div className="text-center">
      <h1 className="text-xl md:text-2xl font-bold text-[#1D4871]">
        What are your targets for the next 12 months?
      </h1>

      <div className="max-w-md mx-auto mt-6">
        <p className="text-base font-semibold text-[#1D4871] mb-3">
          How many homes do you want to sell?
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {RANGES.map((range) => {
            const isSelected = homesTarget === range.label;
            return (
              <button
                key={range.label}
                onClick={() => onHomesChange(range.label)}
                className={`rounded-xl py-4 px-2 cursor-pointer text-center transition-all duration-200 border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2 ${
                  isSelected
                    ? 'bg-[#2367EE]/5 border-[#2367EE] shadow-sm ring-2 ring-[#2367EE]/20'
                    : 'bg-white border-[#D7DEE1] hover:border-[#2367EE] hover:shadow-sm'
                }`}
              >
                <span className="text-xl font-bold text-[#1D4871]">{range.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
