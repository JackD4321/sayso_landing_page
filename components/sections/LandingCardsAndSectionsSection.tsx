import { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

// Helper: Label component for small muted labels
function Label({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-sans text-[#1D4871]/50 mt-2 text-center">
      {children}
    </p>
  );
}

// Helper: SectionCard wrapper for consistent card styling
function SectionCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-[#D7DEE1]/50 p-4 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

// Helper: Minimal icon SVG (thin line style)
function MinimalIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

// Helper: Chevron icon for accordion
function ChevronIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// Main Component
export function LandingCardsAndSectionsSection() {
  return (
    <Section variant="default" className="pt-6 pb-8">
      <Container>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-1">
            <Heading variant="h2">Cards + Section Containers</Heading>
            <Text variant="body" className="text-sm">
              Reusable surfaces, borders, shadows, and spacing patterns for
              landing page sections.
            </Text>
          </div>

          {/* Main Content: 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* 1) Section Containers */}
              <SectionCard>
                <h3 className="text-sm font-sans font-bold text-[#1D4871] mb-4">
                  Section Containers
                </h3>
                <div className="space-y-6">
                  {/* A) Default Section */}
                  <div>
                    <div
                      className="rounded-lg p-6"
                      style={{ backgroundColor: '#F4F4F5' }}
                    >
                      <h4 className="text-sm font-sans font-bold text-[#1D4871] mb-2">
                        Sample Heading
                      </h4>
                      <p className="text-xs font-sans text-[#1D4871]/70 leading-relaxed">
                        Real-time prompts during the call.
                      </p>
                      <div className="mt-3 h-2 bg-[#D7DEE1]/30 rounded"></div>
                    </div>
                    <Label>Default (#F4F4F5)</Label>
                  </div>

                  {/* B) Soft Alternate Section */}
                  <div>
                    <div
                      className="rounded-lg p-6"
                      style={{ backgroundColor: '#D7DEE1' }}
                    >
                      <h4 className="text-sm font-sans font-bold text-[#1D4871] mb-2">
                        Sample Heading
                      </h4>
                      <p className="text-xs font-sans text-[#1D4871]/70 leading-relaxed">
                        Subtle separation for alternating sections.
                      </p>
                    </div>
                    <Label>Alt (#D7DEE1)</Label>
                  </div>

                  {/* C) Bordered Section */}
                  <div>
                    <div
                      className="rounded-lg border border-[#D7DEE1] p-6"
                      style={{ backgroundColor: '#F4F4F5' }}
                    >
                      <h4 className="text-sm font-sans font-bold text-[#1D4871] mb-2">
                        Sample Heading
                      </h4>
                      <p className="text-xs font-sans text-[#1D4871]/70 leading-relaxed">
                        Clean border for contained content.
                      </p>
                    </div>
                    <Label>Bordered (1px subtle)</Label>
                  </div>
                </div>
              </SectionCard>

              {/* 2) Card Surfaces */}
              <SectionCard>
                <h3 className="text-sm font-sans font-bold text-[#1D4871] mb-4">
                  Card Surfaces
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* A) Base Card */}
                  <div>
                    <div
                      className="rounded-xl border border-[#D7DEE1]/50 p-4 shadow-sm"
                      style={{ backgroundColor: '#F4F4F5' }}
                    >
                      <h4 className="text-xs font-sans font-bold text-[#1D4871] mb-1">
                        Base Card
                      </h4>
                      <p className="text-[10px] font-sans text-[#1D4871]/70 leading-tight">
                        Subtle border, soft corners.
                      </p>
                    </div>
                    <Label>Base</Label>
                  </div>

                  {/* B) Soft Card */}
                  <div>
                    <div
                      className="rounded-xl border border-[#D7DEE1]/30 p-4 shadow-sm"
                      style={{ backgroundColor: '#D7DEE1' }}
                    >
                      <h4 className="text-xs font-sans font-bold text-[#1D4871] mb-1">
                        Soft Card
                      </h4>
                      <p className="text-[10px] font-sans text-[#1D4871]/70 leading-tight">
                        Light tint background.
                      </p>
                    </div>
                    <Label>Soft</Label>
                  </div>

                  {/* C) Feature Card */}
                  <div className="col-span-2">
                    <div
                      className="rounded-xl border border-[#D7DEE1]/50 p-4 shadow-sm"
                      style={{ backgroundColor: '#F4F4F5' }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-[#1D4871] mt-0.5">
                          <MinimalIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xs font-sans font-bold text-[#1D4871] mb-2">
                            Feature Card
                          </h4>
                          <ul className="space-y-1">
                            <li className="text-[10px] font-sans text-[#1D4871]/70">
                              • Real-time prompts
                            </li>
                            <li className="text-[10px] font-sans text-[#1D4871]/70">
                              • Buyer/Seller mode
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <Label>Feature (Icon + Text)</Label>
                  </div>

                  {/* D) Testimonial Card */}
                  <div className="col-span-2">
                    <div
                      className="rounded-xl border border-[#D7DEE1]/50 p-4 shadow-sm"
                      style={{ backgroundColor: '#F4F4F5' }}
                    >
                      <p className="text-xs font-sans text-[#1D4871] leading-relaxed mb-3 italic">
                        "Say the right thing at the right moment."
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="text-[10px] font-sans font-bold text-[#1D4871]">
                          Sarah Chen
                        </div>
                        <div className="text-[10px] font-sans text-[#1D4871]/50">
                          Sales Director
                        </div>
                      </div>
                    </div>
                    <Label>Testimonial</Label>
                  </div>
                </div>
              </SectionCard>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* 3) Row Containers */}
              <SectionCard>
                <h3 className="text-sm font-sans font-bold text-[#1D4871] mb-4">
                  Row Containers
                </h3>
                <div className="space-y-6">
                  {/* A) Divider List */}
                  <div>
                    <div
                      className="rounded-lg border border-[#D7DEE1]/50 p-4"
                      style={{ backgroundColor: '#F4F4F5' }}
                    >
                      <div className="space-y-0">
                        <div className="flex items-center justify-between py-2.5 border-b border-[#D7DEE1]/30">
                          <span className="text-xs font-sans font-medium text-[#1D4871]">
                            Real-time prompts
                          </span>
                          <span className="text-[10px] font-sans text-[#1D4871]/60">
                            Active
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2.5 border-b border-[#D7DEE1]/30">
                          <span className="text-xs font-sans font-medium text-[#1D4871]">
                            Buyer/Seller mode
                          </span>
                          <span className="text-[10px] font-sans text-[#1D4871]/60">
                            Enabled
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2.5">
                          <span className="text-xs font-sans font-medium text-[#1D4871]">
                            Privacy-forward
                          </span>
                          <span className="text-[10px] font-sans text-[#1D4871]/60">
                            Always
                          </span>
                        </div>
                      </div>
                    </div>
                    <Label>Divider List</Label>
                  </div>

                  {/* B) Accordion Shell */}
                  <div>
                    <div
                      className="rounded-lg space-y-2"
                      style={{ backgroundColor: '#F4F4F5' }}
                    >
                      <div className="flex items-center justify-between p-3 rounded-lg border border-[#D7DEE1]/50 bg-white cursor-pointer hover:bg-[#F4F4F5] transition-colors">
                        <span className="text-xs font-sans font-medium text-[#1D4871]">
                          How does real-time guidance work?
                        </span>
                        <ChevronIcon className="w-4 h-4 text-[#1D4871]/50" />
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg border border-[#D7DEE1]/50 bg-white cursor-pointer hover:bg-[#F4F4F5] transition-colors">
                        <span className="text-xs font-sans font-medium text-[#1D4871]">
                          Is my call data private?
                        </span>
                        <ChevronIcon className="w-4 h-4 text-[#1D4871]/50" />
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg border border-[#D7DEE1]/50 bg-white cursor-pointer hover:bg-[#F4F4F5] transition-colors">
                        <span className="text-xs font-sans font-medium text-[#1D4871]">
                          What integrations are available?
                        </span>
                        <ChevronIcon className="w-4 h-4 text-[#1D4871]/50" />
                      </div>
                    </div>
                    <Label>Accordion Shell (Visual)</Label>
                  </div>
                </div>
              </SectionCard>

              {/* 4) Radius + Shadow Tokens */}
              <SectionCard>
                <h3 className="text-sm font-sans font-bold text-[#1D4871] mb-4">
                  Radius + Shadow Tokens
                </h3>
                <div className="space-y-6">
                  {/* Radius Tokens */}
                  <div>
                    <h4 className="text-xs font-sans font-medium text-[#1D4871] mb-3">
                      Radius
                    </h4>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div
                          className="rounded-md p-4 border border-[#D7DEE1]/50"
                          style={{ backgroundColor: '#F4F4F5' }}
                        >
                          <div className="text-[10px] font-sans text-[#1D4871]/70 text-center">
                            md
                          </div>
                        </div>
                        <Label>md</Label>
                      </div>
                      <div className="flex-1">
                        <div
                          className="rounded-lg p-4 border border-[#D7DEE1]/50"
                          style={{ backgroundColor: '#F4F4F5' }}
                        >
                          <div className="text-[10px] font-sans text-[#1D4871]/70 text-center">
                            lg
                          </div>
                        </div>
                        <Label>lg</Label>
                      </div>
                      <div className="flex-1">
                        <div
                          className="rounded-full p-4 border border-[#D7DEE1]/50"
                          style={{ backgroundColor: '#F4F4F5' }}
                        >
                          <div className="text-[10px] font-sans text-[#1D4871]/70 text-center">
                            pill
                          </div>
                        </div>
                        <Label>pill</Label>
                      </div>
                    </div>
                  </div>

                  {/* Shadow Tokens */}
                  <div>
                    <h4 className="text-xs font-sans font-medium text-[#1D4871] mb-3">
                      Shadow
                    </h4>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div
                          className="rounded-lg p-4 border border-[#D7DEE1]/50"
                          style={{ backgroundColor: '#F4F4F5' }}
                        >
                          <div className="text-[10px] font-sans text-[#1D4871]/70 text-center">
                            none
                          </div>
                        </div>
                        <Label>none</Label>
                      </div>
                      <div className="flex-1">
                        <div
                          className="rounded-lg p-4 border border-[#D7DEE1]/50 shadow-sm"
                          style={{ backgroundColor: '#F4F4F5' }}
                        >
                          <div className="text-[10px] font-sans text-[#1D4871]/70 text-center">
                            soft
                          </div>
                        </div>
                        <Label>soft</Label>
                      </div>
                      <div className="flex-1">
                        <div
                          className="rounded-lg p-4 border border-[#D7DEE1]/50 shadow"
                          style={{ backgroundColor: '#F4F4F5' }}
                        >
                          <div className="text-[10px] font-sans text-[#1D4871]/70 text-center">
                            subtle
                          </div>
                        </div>
                        <Label>subtle</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionCard>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Default export preview wrapper
export default function CardsAndSectionsPreview() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4F4F5' }}>
      <LandingCardsAndSectionsSection />
    </div>
  );
}
