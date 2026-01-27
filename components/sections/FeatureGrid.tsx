import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { ReactNode } from 'react';

interface Feature {
  icon?: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  headline: string;
  subhead?: string;
  features: Feature[];
}

export function FeatureGrid({ headline, subhead, features }: FeatureGridProps) {
  return (
    <Section variant="default">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Heading variant="h1" className="mb-4">
            {headline}
          </Heading>
          {subhead && <Text variant="muted">{subhead}</Text>}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="space-y-4">
              {feature.icon && (
                <IconWrapper size="md" className="bg-accent-bg rounded-lg">
                  {feature.icon}
                </IconWrapper>
              )}
              <Heading variant="h2">{feature.title}</Heading>
              <Text variant="muted">{feature.description}</Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
