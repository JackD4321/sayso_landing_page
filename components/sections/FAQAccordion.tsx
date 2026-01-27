'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  headline: string;
  faqs: FAQ[];
}

export function FAQAccordion({ headline, faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section variant="accent">
      <Container>
        <Heading variant="h1" className="text-center mb-12">
          {headline}
        </Heading>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-primary/10 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-background/50 transition-colors"
              >
                <Heading variant="h3" className="pr-4">
                  {faq.question}
                </Heading>
                <span className="text-2xl text-primary flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <Text variant="muted">{faq.answer}</Text>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
