import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ReactNode } from 'react';

interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  subhead: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  rightContent?: ReactNode;
}

export function HeroSection({
  eyebrow,
  headline,
  subhead,
  primaryCTA,
  secondaryCTA,
  rightContent,
}: HeroSectionProps) {
  return (
    <Section variant="default" className="pt-12 sm:pt-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {eyebrow && <Badge variant="standard">{eyebrow}</Badge>}
            <Heading variant="hero">{headline}</Heading>
            <Text variant="body" className="text-lg">
              {subhead}
            </Text>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href={primaryCTA.href}>
                {primaryCTA.text}
              </Button>
              {secondaryCTA && (
                <Button variant="secondary" href={secondaryCTA.href}>
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </div>
          {rightContent && (
            <div className="flex items-center justify-center">
              {rightContent}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
