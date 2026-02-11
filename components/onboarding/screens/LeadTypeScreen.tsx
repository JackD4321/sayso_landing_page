'use client';

const CATEGORIES = [
  {
    name: 'Sellers',
    leads: ['Expireds', 'FSBOs (For Sale By Owner)'],
  },
  {
    name: 'Buyers',
    leads: ['Portal Leads', 'Pond Leads', 'Open House Leads'],
  },
];

interface LeadTypeScreenProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function LeadTypeScreen({ value, onChange }: LeadTypeScreenProps) {
  const toggleChip = (lead: string) => {
    if (value.includes(lead)) {
      onChange(value.filter((v) => v !== lead));
    } else {
      onChange([...value, lead]);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-xl md:text-2xl font-bold text-[#1D4871]">
        What types of leads do you focus on?
      </h1>

      <div className="max-w-lg mx-auto mt-6 flex flex-col gap-4">
        {CATEGORIES.map((category) => (
          <div key={category.name}>
            <p className="text-lg font-bold text-[#1D4871] text-left px-1 py-2">
              {category.name}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.leads.map((lead) => {
                const isSelected = value.includes(lead);
                return (
                  <button
                    key={lead}
                    onClick={() => toggleChip(lead)}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2 ${
                      isSelected
                        ? 'bg-[#2367EE] border-[#2367EE] text-white'
                        : 'bg-white border-[#D7DEE1] text-[#1D4871] hover:border-[#2367EE] hover:bg-[#2367EE]/5'
                    }`}
                  >
                    {lead}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
