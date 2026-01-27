interface PricingPlan {
  title: string;
  price: string;
  description: string;
  bullets: string[];
  buttonLabel: string;
  buttonHref: string;
  buttonVariant: 'primary' | 'secondary';
  isPopular?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
}

function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className="relative flex flex-col h-full bg-white rounded-3xl border border-[#1D4871]/10 shadow-[0_18px_45px_rgba(29,72,113,0.10)] p-6 md:p-7">
      {/* Most Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#D7DEE1] text-xs font-semibold text-[#1D4871]">
            Most popular
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-[#1D4871] mb-2">
        {plan.title}
      </h3>

      {/* Price */}
      <div className="mb-3">
        <p className="text-3xl md:text-4xl font-bold text-[#1D4871]">
          {plan.price}
        </p>
      </div>

      {/* Description */}
      <p className="text-base text-[#1D4871]/70 mb-6 leading-relaxed">
        {plan.description}
      </p>

      {/* Bullets */}
      <ul className="flex-1 space-y-3 mb-6">
        {plan.bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-[#2367EE] flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-base text-[#1D4871]/70 leading-relaxed">
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <a
        href={plan.buttonHref}
        className={`w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2 ${
          plan.buttonVariant === 'primary'
            ? 'bg-[#2367EE] text-white shadow-sm hover:bg-[#1F5FE0] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm'
            : 'border border-[#1D4871]/20 bg-transparent text-[#1D4871] hover:bg-[#1D4871]/5 hover:-translate-y-0.5 active:translate-y-0'
        }`}
      >
        {plan.buttonLabel}
      </a>
    </div>
  );
}

export function PricingSection() {
  const plans: PricingPlan[] = [
    {
      title: 'Free Trial',
      price: '8 days free',
      description: 'Try Sayso on real outbound calls.',
      bullets: [
        'Real-time prompts during the call',
        'Buyer + seller conversations',
        'Basic guidance + follow-ups',
      ],
      buttonLabel: 'Start 8-day free trial',
      buttonHref: '#start-trial',
      buttonVariant: 'primary',
    },
    {
      title: 'Standard',
      price: '$49.99 / month',
      description: 'For agents who want consistency every day.',
      bullets: [
        'Full real-time coaching',
        'Better meeting timing + positioning',
        'Priority support',
      ],
      buttonLabel: 'Get Standard',
      buttonHref: '#get-standard',
      buttonVariant: 'primary',
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: 'Talk to sales',
      description: 'For teams and brokerages that want rollout support.',
      bullets: [
        'Team onboarding + enablement',
        'Admin + reporting (as available)',
        'Custom rollout support',
      ],
      buttonLabel: 'Contact sales',
      buttonHref: '#contact-sales',
      buttonVariant: 'secondary',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Eyebrow */}
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#1D4871]/60 mb-3">
            PRICING
          </p>
          
          {/* H2 */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D4871] mb-4">
            Choose the plan that fits your team.
          </h2>
          
          {/* Subhead */}
          <p className="text-base md:text-lg text-[#1D4871]/70 max-w-2xl mx-auto leading-relaxed">
            Start free. Upgrade when you&apos;re ready for consistency on every call.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-xs text-[#1D4871]/50">
          Prices shown in USD. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
